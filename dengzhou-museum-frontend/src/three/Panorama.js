import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const PANO_BASE = '/pano/';
const FACE_ORDER = ['r', 'l', 'u', 'd', 'f', 'b'];

/**
 * 360° 全景 VR 场景
 * @param {HTMLElement} container
 * @param {object} ui  { setLoading, setLoadingText, setSceneInfo, setScenes }
 */
export function createPanorama(container, ui) {
  let scene, camera, renderer, controls, panoMesh;
  let sceneList = [];
  let currentIndex = 0;

  // -------- Three.js --------
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  controls.rotateSpeed = 0.6;
  controls.enablePan = false;
  controls.minPolarAngle = 0;
  controls.maxPolarAngle = Math.PI;
  controls.target.set(0, 0, 0);
  camera.position.set(0.1, 0, 0);
  controls.update();

  function onResize() {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  }
  window.addEventListener('resize', onResize);

  // -------- 场景热点按钮（跳转漫游页）--------
  const _pickRay = new THREE.Raycaster();
  const _pickPtr = new THREE.Vector2();
  let hotspotSprite;
  let _hovered = false;
  const _mouseNDC = new THREE.Vector2();

  function createHotspot() {
    const c = document.createElement('canvas');
    c.width = 400; c.height = 130;
    const ctx = c.getContext('2d');

    ctx.save();

    // 外发光
    ctx.shadowColor = 'rgba(200,164,92,0.5)';
    ctx.shadowBlur = 22;

    // 牌匾路径（上宽下稍窄 + 顶部山形折线）
    const topW = 340, botW = 310, r = 20;
    const py = 18, ph = 94;
    const lx = 30, tx = 200;
    ctx.beginPath();
    ctx.moveTo(lx + r, py);
    ctx.lineTo(tx, 12);
    ctx.lineTo(lx + topW - r, py);
    ctx.arcTo(lx + topW, py, lx + topW, py + r, r);
    ctx.lineTo(lx + topW + (botW - topW) / 2, py + ph - r);
    ctx.arcTo(lx + topW + (botW - topW) / 2, py + ph, lx + botW, py + ph, r);
    ctx.lineTo(lx + topW - botW + botW, py + ph);
    ctx.arcTo(lx, py + ph, lx, py + ph - r, r);
    ctx.lineTo(lx, py + r);
    ctx.arcTo(lx, py, lx + r, py, r);
    ctx.closePath();

    // 亮金渐变底
    const bgGrad = ctx.createLinearGradient(0, py, 0, py + ph);
    bgGrad.addColorStop(0, '#d4b36a');
    bgGrad.addColorStop(0.3, '#e8cd8a');
    bgGrad.addColorStop(0.7, '#c4a050');
    bgGrad.addColorStop(1, '#a08030');
    ctx.fillStyle = bgGrad;
    ctx.fill();

    // 外边框
    ctx.strokeStyle = '#b3893a';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // 内框细线
    ctx.strokeStyle = 'rgba(255,240,210,0.3)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(lx + r + 4, py + 10);
    ctx.lineTo(tx, 22);
    ctx.lineTo(lx + topW - r - 4, py + 10);
    ctx.arcTo(lx + topW - 8, py + 10, lx + topW - 8, py + r + 6, r - 6);
    ctx.lineTo(lx + topW - 8 + (botW - topW) / 2, py + ph - r - 6);
    ctx.arcTo(lx + topW - 8 + (botW - topW) / 2, py + ph - 8, lx + botW - 8, py + ph - 8, r - 6);
    ctx.lineTo(lx + 8, py + ph - 8);
    ctx.arcTo(lx + 8, py + ph - 8, lx + 8, py + ph - r - 6, r - 6);
    ctx.lineTo(lx + 8, py + r + 6);
    ctx.arcTo(lx + 8, py + 10, lx + r + 6, py + 10, r - 6);
    ctx.lineTo(lx + r + 4, py + 10);
    ctx.closePath();
    ctx.stroke();

    // 装饰圆点
    ctx.fillStyle = 'rgba(255,240,210,0.15)';
    ctx.beginPath(); ctx.arc(lx + 30, py + ph - 30, 6, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(lx + botW - 20, py + ph - 30, 6, 0, Math.PI * 2); ctx.fill();

    // 顶部尖角装饰
    ctx.fillStyle = '#fff8e8';
    ctx.beginPath();
    ctx.moveTo(tx, 16);
    ctx.lineTo(tx - 8, 26);
    ctx.lineTo(tx + 8, 26);
    ctx.closePath();
    ctx.fill();

    // ---- 文字 ----
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetY = 2;
    ctx.fillStyle = '#080400';
    ctx.font = 'bold 22px "Microsoft YaHei",sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('进入云端漫游  ›', 200, 68);

    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;
    ctx.fillStyle = '#3d2410';
    ctx.font = '12px "Microsoft YaHei",sans-serif';
    ctx.fillText('720° 全景探索登州博物馆', 200, 94);

    ctx.restore();

    const t = new THREE.CanvasTexture(c);
    t.minFilter = THREE.LinearFilter;
    const mat = new THREE.SpriteMaterial({
      map: t,
      transparent: true,
      depthTest: false,
      sizeAttenuation: true,
    });

    hotspotSprite = new THREE.Sprite(mat);
    hotspotSprite.position.set(-397, -156, 220.2);
    hotspotSprite.scale.set(130, 42.3, 1);
    scene.add(hotspotSprite);
  }
  createHotspot();

  // 鼠标跟踪 → 悬停高亮
  renderer.domElement.addEventListener('pointermove', (event) => {
    const rect = renderer.domElement.getBoundingClientRect();
    _mouseNDC.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    _mouseNDC.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  });

  function _animate() {
    requestAnimationFrame(_animate);
    controls?.update();

    // 悬停检测
    if (hotspotSprite && hotspotSprite.visible) {
      _pickRay.setFromCamera(_mouseNDC, camera);
      const hit = _pickRay.intersectObject(hotspotSprite).length > 0;
      if (hit !== _hovered) {
        _hovered = hit;
        const s = hit ? 1.1 : 1;
        hotspotSprite.scale.set(130 * s, 42.3 * s, 1);
        hotspotSprite.material.opacity = hit ? 1 : 0.85;
      }
    }

    renderer?.render(scene, camera);
  }
  _animate();

  // -------- 热点点击 ----------
  renderer.domElement.addEventListener('click', (event) => {
    if (!hotspotSprite || !hotspotSprite.visible) return;
    const rect = renderer.domElement.getBoundingClientRect();
    _pickPtr.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    _pickPtr.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    _pickRay.setFromCamera(_pickPtr, camera);
    if (_pickRay.intersectObject(hotspotSprite).length > 0) {
      window.location.href = '/tour.html';
    }
  });

  // -------- 加载器 --------
  function loadEquirect(sd) {
    return new Promise((res, rej) => {
      new THREE.TextureLoader().load(
        `${PANO_BASE}materials/equirect/${sd.id}.jpg`,
        t => { t.colorSpace = THREE.SRGBColorSpace; res(t); },
        undefined, rej);
    });
  }

  function loadCubemap(sd) {
    const urls = FACE_ORDER.map(f => `${PANO_BASE}materials/faces/${sd.id}_${f}.jpg`);
    return new Promise((res, rej) => {
      new THREE.CubeTextureLoader().load(urls, res, undefined, rej);
    });
  }

  async function loadPanorama(sd) {
    ui?.setLoading?.(true);
    ui?.setLoadingText?.('加载场景...');

    try {
      if (panoMesh) {
        scene.remove(panoMesh);
        panoMesh.geometry?.dispose();
        panoMesh.material?.dispose();
        panoMesh = null;
      }

      const geom = new THREE.SphereGeometry(500, 64, 64);
      let material;

      // 优先 cubemap（高质量），降级到 equirect
      try {
        const cubeTex = await loadCubemap(sd);
        cubeTex.colorSpace = THREE.SRGBColorSpace;
        material = new THREE.ShaderMaterial({
          uniforms: { envMap: { value: cubeTex } },
          vertexShader: `
            varying vec3 vWorldDir;
            void main() {
              vec4 wp = modelMatrix * vec4(position, 1.0);
              vWorldDir = normalize(wp.xyz);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }`,
          fragmentShader: `
            uniform samplerCube envMap;
            varying vec3 vWorldDir;
            void main() {
              vec3 dir = normalize(vWorldDir);
              dir.x = -dir.x;
              gl_FragColor = textureCube(envMap, dir);
            }`,
          side: THREE.BackSide,
        });
      } catch {
        const tex = await loadEquirect(sd);
        material = new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide });
      }

      panoMesh = new THREE.Mesh(geom, material);
      scene.add(panoMesh);
      camera.position.set(0.1, 0, 0);
      controls.target.set(0, 0, 0);
      controls.update();
      controls.rotateLeft(-Math.PI / 6);

      currentIndex = sceneList.indexOf(sd);
      // 仅在蓬莱阁总览显示热点
      if (hotspotSprite) hotspotSprite.visible = sd.id === '489701';
      ui?.setSceneInfo?.(sd, sceneList.length > 1 ? '古建筑群' : '');
      ui?.setActiveScene?.(currentIndex);
    } catch (e) {
      console.error('全景加载失败:', e);
      ui?.setLoadingText?.('加载失败');
    } finally {
      ui?.setLoading?.(false);
    }
  }

  function goTo(idx) {
    if (!sceneList.length) return;
    idx = ((idx % sceneList.length) + sceneList.length) % sceneList.length;
    loadPanorama(sceneList[idx]);
  }
  function next() { goTo(currentIndex + 1); }
  function prev() { goTo(currentIndex - 1); }

  function dispose() {
    window.removeEventListener('resize', onResize);
    controls?.dispose();
    renderer?.dispose();
    if (panoMesh) {
      panoMesh.geometry?.dispose();
      panoMesh.material?.dispose();
    }
  }

  fetch(`${PANO_BASE}data/scenes.json`)
    .then(r => r.json())
    .then(list => {
      sceneList = list;
      ui?.setScenes?.(list);
      if (list.length) loadPanorama(list[0]);
    })
    .catch(e => {
      console.error('场景数据加载失败:', e);
      ui?.setLoadingText?.('数据加载失败');
      ui?.setLoading?.(false);
    });

  return { loadPanorama, next, prev, goTo, dispose, get scenes() { return sceneList; } };
}
