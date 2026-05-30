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

  function animate() {
    requestAnimationFrame(animate);
    controls?.update();
    renderer?.render(scene, camera);
  }
  animate();

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
      controls.rotateRight(Math.PI / 6);
      controls.update();

      currentIndex = sceneList.indexOf(sd);
      ui?.setSceneInfo?.(sd, sceneList.length > 1 ? '古建筑群' : '');
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
