<template>
  <div id="vr-app">
    <div id="loading" :class="{ hidden: !loading }">
      <div class="spinner"></div>
      <div class="loader-text">{{ loadingText }}</div>
    </div>
    <div id="pano-container" ref="panoRef"></div>

    <div id="header">
      <span class="logo">⛩️ 蓬莱阁</span>
      <button class="ib" @click="toggleFullscreen" title="全屏">⛶</button>
    </div>

    <div id="info">
      <div class="sname">{{ currentScene?.name || '蓬莱阁' }}</div>
      <div class="scat">{{ currentCategory }}</div>
    </div>

    <div id="nav-btns">
      <button class="nb" @click="prev">‹</button>
      <button class="nb" @click="next">›</button>
    </div>

    <div id="scene-bar">
      <span v-for="(s, i) in scenes" :key="s.id"
        class="sd" :class="{ active: currentIdx === i }"
        @click="goTo(i)">{{ s.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const panoRef = ref(null)
const loading = ref(true)
const loadingText = ref('加载中...')
const scenes = ref([])
const currentIdx = ref(0)
const currentScene = ref(null)
const currentCategory = ref('')

let scene3d, camera, renderer, controls, panoMesh

const vertShader = `
varying vec3 vWorldDir;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldDir = normalize(wp.xyz);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
const fragShader = `
uniform samplerCube envMap;
varying vec3 vWorldDir;
void main() {
  vec3 dir = normalize(vWorldDir);
  dir.x = -dir.x;
  gl_FragColor = textureCube(envMap, dir);
}
`

function initThree() {
  scene3d = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(innerWidth, innerHeight)
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
  panoRef.value.appendChild(renderer.domElement)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableZoom = true; controls.zoomSpeed = 0.5; controls.rotateSpeed = 0.6
  controls.enablePan = false; controls.minPolarAngle = 0; controls.maxPolarAngle = Math.PI
  controls.target.set(0, 0, 0); camera.position.set(0, 0, 0.1); controls.update()
  window.addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix()
    renderer.setSize(innerWidth, innerHeight)
  })
  animate()
}

function animate() {
  requestAnimationFrame(animate); controls?.update(); renderer?.render(scene3d, camera)
}

async function loadCubemap(sd) {
  const order = ['r', 'l', 'u', 'd', 'f', 'b']
  const urls = order.map(f => `./materials/faces/${sd.id}_${f}.jpg`)
  return new Promise((res, rej) => new THREE.CubeTextureLoader().load(urls, res, undefined, rej))
}

async function loadEquirect(sd) {
  return new Promise((res, rej) => {
    new THREE.TextureLoader().load(`./materials/equirect/${sd.id}.jpg`,
      t => { t.colorSpace = THREE.SRGBColorSpace; res(t) }, undefined, rej)
  })
}

async function loadPanorama(sd) {
  loading.value = true; loadingText.value = '加载场景...'
  try {
    if (panoMesh) { scene3d.remove(panoMesh); panoMesh.geometry?.dispose(); panoMesh.material?.dispose(); panoMesh = null }
    const geom = new THREE.SphereGeometry(500, 64, 64)
    let material
    try {
      const cubeTex = await loadCubemap(sd)
      cubeTex.colorSpace = THREE.SRGBColorSpace
      material = new THREE.ShaderMaterial({
        uniforms: { envMap: { value: cubeTex } },
        vertexShader: vertShader, fragmentShader: fragShader, side: THREE.BackSide
      })
    } catch {
      const tex = await loadEquirect(sd)
      material = new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide })
    }
    panoMesh = new THREE.Mesh(geom, material); scene3d.add(panoMesh)
    camera.position.set(0, 0, 0.1); controls.target.set(0, 0, 0); controls.update()
    currentScene.value = sd
    const cat = scenes.value.length > 1 ? '古建筑群' : ''
    currentCategory.value = cat
  } catch (e) {
    console.error('Load error:', e); loadingText.value = '加载失败: ' + e.message
  } finally { loading.value = false }
}

function goTo(idx) {
  if (!scenes.value.length) return
  currentIdx.value = ((idx % scenes.value.length) + scenes.value.length) % scenes.value.length
  loadPanorama(scenes.value[currentIdx.value])
}
function next() { goTo(currentIdx.value + 1) }
function prev() { goTo(currentIdx.value - 1) }
function toggleFullscreen() {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen()
  else document.exitFullscreen()
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
})

onMounted(async () => {
  await nextTick(); initThree()
  try {
    const s = await (await fetch('./data/scenes.json')).json()
    scenes.value = s
    if (s.length) await loadPanorama(s[0])
  } catch (e) { loadingText.value = '数据加载失败'; console.error(e) }
  loading.value = false
})
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box }
html, body { width: 100%; height: 100%; overflow: hidden; background: #000; color: #e8e0d0; font-family: 'PingFang SC','Microsoft YaHei',sans-serif; user-select: none }
#loading { position: fixed; inset: 0; background: #0a0a0f; display: flex; align-items: center; justify-content: center; z-index: 9999; transition: opacity .8s }
#loading.hidden { opacity: 0; pointer-events: none }
.spinner { width: 50px; height: 50px; border: 3px solid rgba(200,164,92,.15); border-top-color: #c8a45c; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 16px }
@keyframes spin { to { transform: rotate(360deg) } }
.loader-text { font-size: 14px; color: rgba(232,224,208,.5); letter-spacing: 2px }
#pano-container { position: fixed; inset: 0; z-index: 0 }
#pano-container canvas { display: block }
#header { position: fixed; top: 0; left: 0; right: 0; height: 56px; display: flex; align-items: center; justify-content: space-between; padding: 0 20px; background: linear-gradient(180deg,rgba(0,0,0,.7),transparent); z-index: 100; pointer-events: none }
#header > * { pointer-events: auto }
.logo { color: #c8a45c; font-size: 16px; font-weight: 600; letter-spacing: 1px }
.ib { background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.12); color: #e8e0d0; width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: .3s; font-size: 16px }
.ib:hover { background: rgba(200,164,92,.2); border-color: #c8a45c; color: #c8a45c }
#info { position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%); text-align: center; z-index: 50; pointer-events: none }
#info .sname { font-size: 20px; font-weight: 600; text-shadow: 0 2px 8px rgba(0,0,0,.6); letter-spacing: 2px }
#info .scat { font-size: 12px; color: #c8a45c; margin-top: 4px; text-shadow: 0 1px 4px rgba(0,0,0,.5); letter-spacing: 1px }
#nav-btns { position: fixed; bottom: 150px; left: 50%; transform: translateX(-50%); display: flex; gap: 16px; z-index: 50 }
.nb { width: 44px; height: 44px; border-radius: 50%; background: rgba(0,0,0,.5); border: 1px solid rgba(255,255,255,.15); color: #e8e0d0; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: .3s; backdrop-filter: blur(8px); font-size: 18px }
.nb:hover { background: rgba(200,164,92,.2); border-color: #c8a45c; color: #c8a45c; transform: scale(1.05) }
#scene-bar { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); display: flex; gap: 8px; z-index: 50; background: rgba(0,0,0,.5); backdrop-filter: blur(12px); padding: 4px; border-radius: 20px; border: 1px solid rgba(255,255,255,.1) }
.sd { padding: 8px 20px; border-radius: 16px; cursor: pointer; transition: .3s; font-size: 13px; color: rgba(232,224,208,.5); white-space: nowrap }
.sd:hover { background: rgba(255,255,255,.08); color: #e8e0d0 }
.sd.active { background: rgba(200,164,92,.25); color: #c8a45c }
@media(max-width:768px) { #info .sname { font-size: 16px } .sd span { font-size: 12px } }
</style>
