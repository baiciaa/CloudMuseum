import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const TILES = path.join(ROOT, 'public', 'materials', 'tiles')
const FACES_DIR = path.join(ROOT, 'public', 'materials', 'faces')

const FACES = ['f', 'r', 'b', 'l', 'u', 'd']
const LEVEL = 'n2'
const GRID = 5

let sharp
try {
  sharp = (await import('sharp')).default
} catch {
  console.error('请安装 sharp: npm install sharp')
  process.exit(1)
}

async function loadTile(fp) {
  const { data, info } = await sharp(fp).raw().toBuffer({ resolveWithObject: true })
  return { data, w: info.width, h: info.height }
}

async function stitchFace(tileBase, face) {
  const tiles = []
  for (let row = 0; row < GRID; row++) {
    for (let col = 0; col < GRID; col++) {
      const fp = path.join(tileBase, face, LEVEL, `${row + 1}`, `${face}_${row + 1}_${col + 1}.jpg`)
      if (!fs.existsSync(fp)) continue
      const t = await loadTile(fp)
      tiles.push({ data: t.data, w: t.w, h: t.h, row, col })
    }
  }
  const colW = [], rowH = []
  for (let c = 0; c < GRID; c++) { const t = tiles.find(t => t.row === 0 && t.col === c); colW[c] = t ? t.w : 0 }
  for (let r = 0; r < GRID; r++) { const t = tiles.find(t => t.col === 0 && t.row === r); rowH[r] = t ? t.h : 0 }
  let cx = 0, cy = 0
  const colOff = [], rowOff = []
  for (let c = 0; c < GRID; c++) { colOff[c] = cx; cx += colW[c] }
  for (let r = 0; r < GRID; r++) { rowOff[r] = cy; cy += rowH[r] }
  const fw = cx, fh = cy
  const fb = Buffer.alloc(fw * fh * 3, 0)
  for (const t of tiles) {
    const dx = colOff[t.col], dy = rowOff[t.row]
    for (let r = 0; r < t.h; r++) {
      t.data.copy(fb, ((dy + r) * fw + dx) * 3, r * t.w * 3, (r + 1) * t.w * 3)
    }
  }
  return { buffer: fb, w: fw, h: fh }
}

async function main() {
  const sceneId = process.argv[2]
  if (!sceneId) { console.log('用法: node scripts/saveFaces.mjs <sceneId>'); process.exit(1) }

  if (!fs.existsSync(FACES_DIR)) fs.mkdirSync(FACES_DIR, { recursive: true })
  const tileBase = path.join(TILES, sceneId)

  for (const face of FACES) {
    console.log(`拼接面 ${face}...`)
    const result = await stitchFace(tileBase, face)
    const outPath = path.join(FACES_DIR, `${sceneId}_${face}.jpg`)
    await sharp(result.buffer, { raw: { width: result.w, height: result.h, channels: 3 } })
      .jpeg({ quality: 95 }).toFile(outPath)
    console.log(`  ${outPath} (${result.w}x${result.h})`)
  }
  console.log('完成!')
}

main().catch(console.error)
