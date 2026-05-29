import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const MODEL_URL = '/uploads/3f65fbff0db10bc893ee4c058a028ed9.glb';

/**
 * 在 container 元素内渲染 3D 数字人
 * @param {HTMLElement} container
 * @returns {{ dispose: Function }}
 */
export function initDigitalHuman(container) {
  const w = container.clientWidth || 120;
  const h = container.clientHeight || 180;

  // 场景
  const scene = new THREE.Scene();

  // 透视相机 — 面部特写
  const camera = new THREE.PerspectiveCamera(35, w / h, 0.1, 100);
  camera.position.set(0, 1.4, 2.8);

  // 渲染器 — 透明背景
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  container.appendChild(renderer.domElement);

  // 灯光
  const ambient = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambient);

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
  keyLight.position.set(3, 4, 4);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xffeedd, 0.6);
  fillLight.position.set(-2, 1, 2);
  scene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0xffffff, 0.6);
  rimLight.position.set(0, 1, -3);
  scene.add(rimLight);

  // 加载 GLB
  const loader = new GLTFLoader();
  let modelGroup = null;
  let mixer = null;
  let modelHeight = 1;

  loader.load(
    MODEL_URL,
    (gltf) => {
      modelGroup = gltf.scene;
      scene.add(modelGroup);

      // 居中并缩放到合适大小
      const box = new THREE.Box3().setFromObject(modelGroup);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      modelGroup.position.sub(center);

      modelHeight = size.y;
      const targetHeight = 1.6;
      const scale = targetHeight / size.y;
      modelGroup.scale.set(scale, scale, scale);

      // 把模型提起（脚在底部）
      modelGroup.position.y += targetHeight / 2;

      // 相机对准人物面部（拉近放大）
      camera.position.set(0, targetHeight * 0.92, targetHeight * 1.3);
      camera.lookAt(0, targetHeight * 0.88, 0);

      // 播放动画（如果有）
      if (gltf.animations && gltf.animations.length > 0) {
        mixer = new THREE.AnimationMixer(modelGroup);
        const action = mixer.clipAction(gltf.animations[0]);
        action.play();
      }

      container.classList.add('model-loaded');
    },
    undefined,
    (err) => {
      console.error('数字人加载失败:', err);
      container.classList.add('model-failed');
    },
  );

  // 动画循环
  let time = 0;

  function animate() {
    requestAnimationFrame(animate);
    time += 0.016;

    if (modelGroup) {
      // 面向左前方
      modelGroup.rotation.y = -0.4;
      // 轻微呼吸浮沉
      modelGroup.position.y = (modelHeight * 0.5) / (1.8 / modelHeight * 1.6) + Math.sin(time * 1.2) * 0.02;
    }

    if (mixer) mixer.update(0.016);
    renderer.render(scene, camera);
  }
  animate();

  // 响应容器尺寸变化
  function resize() {
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    if (cw > 0 && ch > 0) {
      camera.aspect = cw / ch;
      camera.updateProjectionMatrix();
      renderer.setSize(cw, ch);
    }
  }

  const ro = new ResizeObserver(resize);
  ro.observe(container);

  return {
    dispose() {
      ro.disconnect();
      renderer.dispose();
      if (mixer) mixer.stopAllAction();
    },
  };
}
