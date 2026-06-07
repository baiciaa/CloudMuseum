/**
 * 立方体贴图(Cubemap) → 等距矩形投影(Equirectangular) 转换器
 *
 * 支持 krpano 变尺寸 tile 系统（边缘 tile 可能更小）。
 * 全程 raw 像素数据，无中间 JPEG 编码。
 *
 * 用法: node scripts/cubemap2equirect.mjs <sceneId>
 * 示例: node scripts/cubemap2equirect.mjs 489701
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const TILES = path.join(ROOT, 'public', 'materials', 'tiles')
const EQUIRECT = path.join(ROOT, 'public', 'materials', 'equirect')

const FACES = ['f', 'r', 'b', 'l', 'u', 'd']
const LEVEL = 'n2'
const GRID = 5

let sharp
try {
  sharp = (await import('sharp')).default
} catch {
  console.error('请先安装 sharp: npm install sharp')
  process.exit(1)
}

/** 加载 tile 为 raw RGB buffer，返回 { data, w, h } */
async function loadTile(fp) {
  const { data, info } = await sharp(fp).raw().toBuffer({ resolveWithObject: true })
  return { data, w: info.width, h: info.height }
}

/**
 * 从 tiles 组装面图像，自动检测变尺寸 tile
 * 返回 { buffer, faceSize } — faceSize 是面的实际像素宽度
 */
async function stitchFace(tileBase, face) {
  // 先扫描所有 tile 的尺寸
  const tiles = []
  let maxRowStart = 0, maxColStart = 0

  for (let row = 0; row < GRID; row++) {
    for (let col = 0; col < GRID; col++) {
      const fp = path.join(tileBase, face, LEVEL, `${row + 1}`, `${face}_${row + 1}_${col + 1}.jpg`)
      if (!fs.existsSync(fp)) continue
      const { data, w, h } = await loadTile(fp)
      tiles.push({ data, w, h, row, col, x: 0, y: 0 })
    }
  }

  // 计算每个 tile 的位置 (基于前一个 tile 的尺寸)
  const colWidths = []
  const rowHeights = []

  for (let col = 0; col < GRID; col++) {
    const t = tiles.find(t => t.row === 0 && t.col === col)
    colWidths[col] = t ? t.w : 0
  }
  for (let row = 0; row < GRID; row++) {
    const t = tiles.find(t => t.col === 0 && t.row === row)
    rowHeights[row] = t ? t.h : 0
  }

  // 计算累计偏移
  const colOffsets = []
  const rowOffsets = []
  let cx = 0, cy = 0
  for (let col = 0; col < GRID; col++) {
    colOffsets[col] = cx
    cx += colWidths[col]
  }
  for (let row = 0; row < GRID; row++) {
    rowOffsets[row] = cy
    cy += rowHeights[row]
  }

  const faceW = cx
  const faceH = cy
  console.log(`  面 ${face}: ${faceW}x${faceH} (${GRID}×${GRID} tiles)`)

  // 分配面 buffer
  const fb = Buffer.alloc(faceW * faceH * 3, 0)

  for (const t of tiles) {
    const dstX = colOffsets[t.col]
    const dstY = rowOffsets[t.row]

    for (let r = 0; r < t.h; r++) {
      const srcStart = r * t.w * 3
      const dstStart = ((dstY + r) * faceW + dstX) * 3
      t.data.copy(fb, dstStart, srcStart, srcStart + t.w * 3)
    }
  }

  return { buffer: fb, faceSize: faceW }
}

/**
 * 双线性插值采样
 */
function sample(data, w, h, u, v) {
  u = Math.max(0, Math.min(1, u))
  v = Math.max(0, Math.min(1, v))
  const x = u * (w - 1), y = v * (h - 1)
  const x0 = Math.floor(x), x1 = Math.min(x0 + 1, w - 1)
  const y0 = Math.floor(y), y1 = Math.min(y0 + 1, h - 1)
  const fx = x - x0, fy = y - y0
  const i00 = (y0 * w + x0) * 3, i10 = (y0 * w + x1) * 3
  const i01 = (y1 * w + x0) * 3, i11 = (y1 * w + x1) * 3
  const d = data
  return [
    Math.round((1-fy)*((1-fx)*d[i00]+fx*d[i10]) + fy*((1-fx)*d[i01]+fx*d[i11])),
    Math.round((1-fy)*((1-fx)*d[i00+1]+fx*d[i10+1]) + fy*((1-fx)*d[i01+1]+fx*d[i11+1])),
    Math.round((1-fy)*((1-fx)*d[i00+2]+fx*d[i10+2]) + fy*((1-fx)*d[i01+2]+fx*d[i11+2]))
  ]
}

/**
 * Cubemap → Equirectangular
 *
 * 坐标: +x=右(r) -x=左(l) +y=上(u) -y=下(d) +z=前(f) -z=后(b)
 * 等距矩形: x=方位角(前→右→后→左), y=极角(上→水平→下)
 */
function convert(facesData, faceSize, outW, outH) {
  console.log(`  输出: ${outW}x${outH}`)
  const buf = Buffer.alloc(outW * outH * 3)

  for (let y = 0; y < outH; y++) {
    if (y % 256 === 0) console.log(`  行 ${y}/${outH}`)
    const v = y / outH
    const phi = v * Math.PI
    const cosP = Math.cos(phi), sinP = Math.sin(phi)

    for (let x = 0; x < outW; x++) {
      const u = x / outW
      // Three.js SphereGeometry UV: u=0→-x(左), u=0.25→+z(前)
      const theta = u * 2 * Math.PI - Math.PI / 2

      // 方向向量
      const dx = Math.sin(theta) * sinP
      const dy = cosP
      const dz = Math.cos(theta) * sinP

      const ax = Math.abs(dx), ay = Math.abs(dy), az = Math.abs(dz)
      let face, tu, tv

      if (az >= ax && az >= ay) {
        face = dz >= 0 ? 'f' : 'b'
        const s = 1 / az, px = dx * s, py = dy * s
        tu = dz >= 0 ? (px + 1) / 2 : (-px + 1) / 2
        tv = (-py + 1) / 2
      } else if (ax >= ay) {
        face = dx >= 0 ? 'r' : 'l'
        const s = 1 / ax, pz = dz * s, py = dy * s
        tu = dx >= 0 ? (-pz + 1) / 2 : (pz + 1) / 2
        tv = (-py + 1) / 2
      } else {
        face = dy >= 0 ? 'u' : 'd'
        const s = 1 / ay, px = dx * s, pz = dz * s
        tu = (px + 1) / 2
        tv = dy >= 0 ? (-pz + 1) / 2 : (pz + 1) / 2
      }

      const f = facesData[face]
      const [r, g, b] = sample(f.data, f.w, f.h, tu, tv)
      const i = (y * outW + x) * 3
      buf[i] = r; buf[i + 1] = g; buf[i + 2] = b
    }
  }
  return buf
}

async function main() {
  const sceneId = process.argv[2]
  if (!sceneId) { console.log('用法: node scripts/cubemap2equirect.mjs <sceneId>'); process.exit(1) }
  console.log(`=== 转换场景 ${sceneId} ===`)

  const tileBase = path.join(TILES, sceneId)
  if (!fs.existsSync(tileBase)) {
    console.error(`tile目录不存在: ${tileBase}\n请先运行: node scripts/crawl.mjs tiles 1`)
    process.exit(1)
  }

  // 拼接6个面 (自动检测变尺寸tile)
  console.log('拼接6个立方体面 (raw, 无中间JPEG)...')
  const facesData = {}
  let faceSize = 0
  for (const face of FACES) {
    const result = await stitchFace(tileBase, face)
    facesData[face] = { data: result.buffer, w: result.faceSize, h: result.faceSize }
    faceSize = result.faceSize
  }

  // 确定输出尺寸 (等距矩形宽高比2:1)
  const outW = faceSize * 2
  const outH = faceSize * 1

  console.log(`\n面尺寸: ${faceSize}x${faceSize}`)
  console.log('执行 Cubemap → Equirectangular 投影...')
  const buf = convert(facesData, faceSize, outW, outH)

  const outPath = path.join(EQUIRECT, `${sceneId}.jpg`)
  await sharp(buf, { raw: { width: outW, height: outH, channels: 3 } })
    .jpeg({ quality: 95, chromaSubsampling: '4:4:4' })
    .toFile(outPath)

  const kb = (fs.statSync(outPath).size / 1024).toFixed(1)
  console.log(`\n✓ 完成! ${outW}x${outH}, ${kb}KB -> ${outPath}`)
}

main().catch(console.error)
