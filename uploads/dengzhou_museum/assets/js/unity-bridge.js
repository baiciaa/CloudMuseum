/**
 * unity-bridge.js — Unity WebGL 与前端双向通信桥梁
 * 架构：Vue/原生JS <-> postMessage <-> 改造过的Unity index.html <-> Unity引擎
 */

const UnityBridge = {
    iframe: null,
    isLoaded: false,

    /**
     * 初始化Unity容器
     * @param {string} unityUrl - Unity WebGL构建输出的URL
     */
    async init(unityUrl) {
        const container = document.getElementById('unity-container');
        if (!container) return console.error('[UnityBridge] 容器不存在');

        // 清理旧内容
        container.innerHTML = '';

        // 创建 iframe 加载 Unity
        this.iframe = document.createElement('iframe');
        this.iframe.src = unityUrl;
        this.iframe.style.cssText = `
            width: 100%; height: 100%;
            border: none; display: block;
        `;
        this.iframe.allow = 'autoplay; fullscreen; microphone';
        container.appendChild(this.iframe);

        // 监听来自 Unity 的消息
        window.addEventListener('message', this._handleMessage.bind(this));

        console.log('[UnityBridge] 容器已初始化，等待Unity加载...');
    },

    /**
     * 处理来自Unity的消息
     */
    _handleMessage(event) {
        // 安全校验：确保消息来源可信
        // if (event.origin !== YOUR_UNITY_HOST) return;

        const { type, payload } = event.data || {};

        switch (type) {
            case 'UNITY_LOADED':
                this.isLoaded = true;
                console.log('[UnityBridge] Unity场景已就绪');
                this._dispatchEvent('unity-ready', {});
                break;

            case 'RELIC_CLICK':
                // Unity中点击了某个文物
                this._dispatchEvent('relic-click', payload);
                break;

            case 'SCENE_CHANGE':
                // 场景切换通知
                this._dispatchEvent('scene-changed', payload);
                break;

            default:
                break;
        }
    },

    /**
     * 向前端发送自定义事件
     */
    _dispatchEvent(name, detail) {
        window.dispatchEvent(new CustomEvent(name, { detail }));
    },

    /**
     * 向Unity发送指令
     * @param {string} method - Unity中的GameObject名称
     * @param {string} action - 要调用的方法名
     * @param {string} param - 参数
     */
    sendToUnity(method, action, param = '') {
        if (!this.iframe || !this.iframe.contentWindow) return;
        this.iframe.contentWindow.postMessage({
            type: 'CALL_UNITY',
            method,
            action,
            param
        }, '*');
    },

    /**
     * 加载指定的Unity场景
     * @param {string} sceneName
     */
    loadScene(sceneName) {
        this.sendToUnity('SceneManager', 'LoadScene', sceneName);
    },

    /**
     * 聚焦到某个文物
     * @param {string} relicId
     */
    focusRelic(relicId) {
        this.sendToUnity('RelicController', 'FocusOn', relicId);
    }
};

// 使用示例：后期替换 unityUrl 为真实Unity构建地址
// UnityBridge.init('https://your-cdn.com/museum-unity/index.html');

// 监听Unity事件
window.addEventListener('unity-ready', () => {
    document.querySelector('#unity-container .placeholder-text')
        ?.remove();
});

window.addEventListener('relic-click', (e) => {
    console.log('用户在3D场景中点击了文物:', e.detail);
    // 可弹出文物详情弹窗
});