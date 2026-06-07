// 先手动初始化进度条，避免PlayCanvas事件延迟
document.addEventListener('DOMContentLoaded', function() {
    // 确保加载条默认显示
    const loader = document.getElementById('custom-loader');
    if (loader) loader.style.display = 'flex';
});

// PlayCanvas加载逻辑
pc.script.createLoadingScreen((app) => {
    // 空函数，禁用默认加载
    const createCss = () => {};
    const showSplash = () => {};

    // 强制更新自定义加载条
    const setProgress = (value) => {
        const bar = document.getElementById('loading-progress');
        if (bar) {
            value = Math.min(1, Math.max(0, value));
            bar.style.width = `${value * 100}%`;
        }
    };

    // 加载完成隐藏
    const hideSplash = () => {
        const loader = document.getElementById('custom-loader');
        if (loader) loader.style.display = 'none';
    };

    createCss();
    showSplash();

    // 绑定所有加载事件，确保进度同步
    app.on('preload:progress', setProgress);
    app.on('start', hideSplash);
    app.on('preload:end', () => {
        app.off('preload:progress');
        hideSplash();
    });
});