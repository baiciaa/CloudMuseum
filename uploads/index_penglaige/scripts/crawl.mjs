/**
 * 蓬莱阁VR - 统一爬虫脚本
 * node scripts/crawl.mjs <command>
 *   scenes   - 获取场景列表
 *   tiles    - 下载高清tile (n2级别)
 *   stitch   - 将tile拼接成等距矩形全景图
 *   all      - 执行全部步骤
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DATA = path.join(ROOT, 'data')
const PUBLIC = path.join(ROOT, 'public')
const MATERIALS = path.join(PUBLIC, 'materials')
const TILES = path.join(MATERIALS, 'tiles')
const EQUIRECT = path.join(MATERIALS, 'equirect')
const THUMBS = path.join(MATERIALS, 'thumbnails')

const PRODUCT_UUID = '15cb82a45500783b5d101f49df9edffa'
const CDN = 'https://cdn.upvr.net'
const PAGE_URL = 'https://www.upvr.net/index.php/Product/Index/index/id/174337'

// Tile config for level n2
const FACES = ['f', 'r', 'b', 'l', 'u', 'd']
const LEVEL = 'n2'
const GRID = 5  // 5x5 tiles per face
const TILE_SIZE = 512

// Ensure dirs
;[DATA, TILES, EQUIRECT, THUMBS].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true })
})

async function fetchWithRef(url) {
  const r = await fetch(url, {
    headers: { 'Referer': PAGE_URL, 'User-Agent': 'Mozilla/5.0' }
  })
  if (!r.ok) throw new Error(`HTTP ${r.status}: ${url}`)
  return r
}

// ===== Step 1: Get Scene List =====
async function stepScenes() {
  console.log('=== 步骤1: 获取场景列表 ===')
  const html = await (await fetchWithRef(PAGE_URL)).text()

  // Extract scene data from HTML
  const regex = /class="scene_thumb\s+to_image(\d+)"[\s\S]*?Material\/pano\/[^/]+\/([^/]+)\/thumb\.jpg[\s\S]*?<span>([^<]+)<\/span>/g
  const scenes = []
  const seen = new Set()
  let m
  while ((m = regex.exec(html)) !== null) {
    if (!seen.has(m[1])) {
      seen.add(m[1])
      scenes.push({ id: m[1], name: m[3].trim(), hash: m[2] })
    }
  }

  fs.writeFileSync(path.join(DATA, 'scenes.json'), JSON.stringify(scenes, null, 2))
  console.log(`  找到 ${scenes.length} 个场景`)

  // Download thumbnails
  console.log('  下载缩略图...')
  let ok = 0
  for (const s of scenes) {
    const fp = path.join(THUMBS, `${s.id}.jpg`)
    if (fs.existsSync(fp) && fs.statSync(fp).size > 100) { ok++; continue }
    try {
      const r = await fetchWithRef(`${CDN}/Material/pano/${PRODUCT_UUID}/${s.hash}/thumb.jpg`)
      fs.writeFileSync(fp, Buffer.from(await r.arrayBuffer()))
      ok++
    } catch {}
  }
  console.log(`  下载 ${ok}/${scenes.length} 缩略图`)

  // Extract categories
  const catNames = ['校场', '戚继光纪念馆', '三官庙', '海上丝绸之路博物馆', '何处是蓬莱', '古建筑群', '八仙过海索道', '老北山', '环幕影视城', '登州博物馆']
  const knownScenes = {
    '校场': ['747804','747794'],
    '戚继光纪念馆': ['485282','747782','747767','485289','485286','747797','485285','485288','485297','485283','485292','747810','485284','485294','485281','485296','485295','747776','485279','485280','485291','485290','485298'],
    '三官庙': ['739891','489711','747811','747813','747802','489709','489713','747805','747790','489710'],
    '海上丝绸之路博物馆': ['747768','485652','491676','491673','492166','485659','485653','491674','491672','491675','485654','485655','747795'],
    '何处是蓬莱': ['747812','747801','747809','749678','747808','747798'],
    '古建筑群': ['489701','591006','485660','747771','749675','651579','651582','651583','651581','747799','749637','491698','747778','747769','747785','491697','747800','491680','491729','747789','491728','747779','747815','491671','747766','491687','747786','747791','491692','747780','491695','749676','747788','747783','747814','491689','491694','491693','747777','491681','491683','491686','491685','747774','747770','747803','747796','491679','747784','491677','590725'],
    '八仙过海索道': ['749645','491769','749644','749646','739893','749641','749640','739908','749647','591005','749643','749636'],
    '老北山': ['739917','739925','739895','739929','739930','739898','739909','739918','739914','739892','739901','739905','749639','739897','739912','739894','739911','739913','749648','749649','739920','739902','739900','739927','739926','749650','749651','749652','739907','739921'],
    '环幕影视城': ['749635','749653'],
    '登州博物馆': ['491500','491506','491502','491498','491504','491501','491505','491503','491499']
  }
  const categories = [{ id: 'all', name: '全部', scenes: scenes.map(s => s.id) }]
  for (const [name, ids] of Object.entries(knownScenes)) {
    const valid = ids.filter(id => scenes.some(s => s.id === id))
    if (valid.length) categories.push({ id: name, name, scenes: valid })
  }
  categories[0].scenes = [...new Set(categories.slice(1).flatMap(x => x.scenes))]

  fs.writeFileSync(path.join(DATA, 'categories.json'), JSON.stringify(categories, null, 2))
  console.log(`  生成 ${categories.length} 个分类`)

  // Copy to public
  fs.cpSync(DATA, path.join(PUBLIC, 'data'), { recursive: true })
  console.log('  数据已同步到 public/data')
}

// ===== Step 2: Download Tiles =====
async function stepTiles(limit = 158) {
  console.log(`=== 步骤2: 下载Tile (${LEVEL}, 前${limit}场景) ===`)
  const scenes = JSON.parse(fs.readFileSync(path.join(DATA, 'scenes.json'), 'utf-8')).slice(0, limit)

  let total = 0, success = 0
  for (let i = 0; i < scenes.length; i++) {
    const s = scenes[i]
    const base = `${CDN}/Material/pano/${PRODUCT_UUID}/${s.hash}`
    let sc = 0, st = 0

    for (const face of FACES) {
      for (let row = 1; row <= GRID; row++) {
        for (let col = 1; col <= GRID; col++) {
          st++
          const url = `${base}/${face}/${LEVEL}/${row}/${face}_${row}_${col}.jpg`
          const fp = path.join(TILES, s.id, face, LEVEL, `${row}`, `${face}_${row}_${col}.jpg`)
          if (fs.existsSync(fp) && fs.statSync(fp).size > 100) { sc++; continue }
          fs.mkdirSync(path.dirname(fp), { recursive: true })
          try {
            const r = await fetchWithRef(url)
            fs.writeFileSync(fp, Buffer.from(await r.arrayBuffer()))
            sc++
          } catch {}
        }
      }
    }
    total += st; success += sc
    console.log(`  [${i + 1}/${scenes.length}] ${s.name}: ${sc}/${st}`)
  }
  console.log(`  总计: ${success}/${total} tiles`)
}

// ===== Step 3: Stitch Tiles into Equirectangular =====
async function stepStitch(limit = 158) {
  console.log('=== 步骤3: 拼接tile为等距矩形全景图 ===')

  // Use sharp for image processing
  let sharp
  try {
    sharp = (await import('sharp')).default
  } catch {
    console.log('  sharp未安装，尝试安装...')
    console.log('  请运行: npm install sharp 后再试')
    return
  }

  const scenes = JSON.parse(fs.readFileSync(path.join(DATA, 'scenes.json'), 'utf-8')).slice(0, limit)

  for (let i = 0; i < scenes.length; i++) {
    const s = scenes[i]
    const faceSize = GRID * TILE_SIZE // 5*512 = 2560
    console.log(`  [${i + 1}/${scenes.length}] ${s.name}`)

    try {
      // Step 3a: Stitch 6 cube faces from tiles
      const faceImages = []
      for (const face of FACES) {
        const rows = []
        for (let row = 1; row <= GRID; row++) {
          const cols = []
          for (let col = 1; col <= GRID; col++) {
            const fp = path.join(TILES, s.id, face, LEVEL, `${row}`, `${face}_${row}_${col}.jpg`)
            if (fs.existsSync(fp)) {
              cols.push({ input: fp, left: (col - 1) * TILE_SIZE, top: 0 })
            }
          }
          if (cols.length) {
            const rowImg = await sharp({
              create: { width: faceSize, height: TILE_SIZE, channels: 3, background: { r: 0, g: 0, b: 0 } }
            }).composite(cols).jpeg().toBuffer()
            rows.push({ input: rowImg, top: (row - 1) * TILE_SIZE, left: 0 })
          }
        }
        if (rows.length) {
          const faceImg = await sharp({
            create: { width: faceSize, height: faceSize, channels: 3, background: { r: 0, g: 0, b: 0 } }
          }).composite(rows).jpeg().toBuffer()
          faceImages.push(faceImg)
        }
      }

      // Step 3b: Convert cube faces to equirectangular
      // Simple layout: 4 side faces (f,r,b,l) horizontally + up on top, down on bottom
      const eqW = faceSize * 4  // 10240
      const eqH = faceSize * 2  // 5120

      // Scale down for reasonable file size while maintaining quality
      const scale = 0.5
      const outW = Math.round(eqW * scale)
      const outH = Math.round(eqH * scale)

      const composites = []
      // Front, Right, Back, Left faces
      const sideFaces = [0, 1, 2, 3]
      for (let fi = 0; fi < sideFaces.length && fi < faceImages.length; fi++) {
        composites.push({
          input: await sharp(faceImages[fi]).resize(faceSize * scale, faceSize * scale).jpeg().toBuffer(),
          left: fi * Math.round(faceSize * scale),
          top: Math.round(faceSize * scale / 2)
        })
      }
      // Up face at top
      if (faceImages[4]) {
        composites.push({
          input: await sharp(faceImages[4]).resize(outW, Math.round(faceSize * scale / 2)).jpeg().toBuffer(),
          left: 0, top: 0
        })
      }
      // Down face at bottom
      if (faceImages[5]) {
        composites.push({
          input: await sharp(faceImages[5]).resize(outW, Math.round(faceSize * scale / 2)).jpeg().toBuffer(),
          left: 0, top: Math.round(faceSize * scale / 2 + faceSize * scale)
        })
      }

      const output = path.join(EQUIRECT, `${s.id}.jpg`)
      await sharp({
        create: { width: outW, height: outH, channels: 3, background: { r: 0, g: 0, b: 0 } }
      }).composite(composites).jpeg({ quality: 85 }).toFile(output)

      const size = fs.statSync(output).size
      console.log(`    等距矩形图: ${outW}x${outH}, ${(size / 1024).toFixed(1)}KB`)
    } catch (e) {
      console.error(`    拼接失败: ${e.message}`)
    }
  }

  console.log('  拼接完成!')
}

// ===== Main =====
async function main() {
  const cmd = process.argv[2] || 'all'
  const limit = parseInt(process.argv[3]) || 158

  switch (cmd) {
    case 'scenes': await stepScenes(); break
    case 'tiles': await stepTiles(limit); break
    case 'stitch': await stepStitch(limit); break
    case 'all':
      await stepScenes()
      await stepTiles(limit)
      await stepStitch(limit)
      break
    default:
      console.log('用法: node scripts/crawl.mjs <scenes|tiles|stitch|all> [场景数]')
  }
}

main().catch(console.error)
