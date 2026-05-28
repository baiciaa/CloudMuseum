/**
 * main.js — 主导航、滚动监听、动态内容加载
 */
import './styles/style.css';
import './styles/components.css';
import './styles/animations.css';
import { articleApi, relicApi } from './api/index.js';

// ==================== 导航系统 ====================

function initNavigation() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      // 更新激活状态
      document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
      // 滚动到目标
      const sectionId = item.getAttribute('data-section');
      const target = document.getElementById(`section-${sectionId}`);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    item.addEventListener('mouseenter', () => { item.style.transform = 'translateX(8px)'; });
    item.addEventListener('mouseleave', () => { item.style.transform = 'translateX(0)'; });
  });
}

// 滚动监听：自动更新导航激活项
function initScrollSpy() {
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-item');
    let current = 'home';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 100) {
        current = section.id.replace('section-', '');
      }
    });
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('data-section') === current) {
        item.classList.add('active');
      }
    });
  });
}

// ==================== 动态内容加载 ====================

async function loadHistoryContent() {
  const grid = document.getElementById('history-grid');
  if (!grid) return;

  const result = await articleApi.list('HISTORY', 1, 10);
  const articles = result?.data?.list || [];

  if (articles.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-secondary); grid-column:1/-1;">暂无历史内容</p>';
    return;
  }

  grid.innerHTML = articles.map((article, i) => `
    <div class="card fade-in-up delay-${i + 1}">
      <div class="card-title">// ${article.title}</div>
      <p style="color:var(--text-secondary); line-height:1.8;">
        ${article.content.replace(/<[^>]*>/g, '').substring(0, 200)}...
      </p>
    </div>
  `).join('');
}

async function loadRelics() {
  const grid = document.getElementById('relic-grid');
  if (!grid) return;

  const result = await relicApi.list('', '', 1, 8);
  const relics = result?.data?.list || [];

  if (relics.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-secondary); grid-column:1/-1;">暂无文物数据</p>';
    return;
  }

  grid.innerHTML = relics.map(relic => `
    <div class="relic-card fade-in-up" onclick="window.showRelicDetail(${relic.id})">
      <div class="card-img" style="background-image:url('${relic.imageUrl || ''}'); background-size:cover; background-position:center;">
        ${relic.imageUrl ? '' : `[ ${relic.name} 图片 ]`}
      </div>
      <div style="padding:20px;">
        <h3 style="font-family:var(--font-display); font-size:13px; letter-spacing:2px; color:var(--gold);">
          ${relic.name}
          ${relic.era ? `<span style="font-size:11px; color:var(--text-secondary);">· ${relic.era}</span>` : ''}
        </h3>
        <p style="color:var(--text-secondary); font-size:13px; margin-top:8px;">
          ${relic.description ? relic.description.substring(0, 80) + '...' : '暂无描述'}
        </p>
      </div>
    </div>
  `).join('');
}

// 文物详情弹窗
window.showRelicDetail = async function(id) {
  const result = await relicApi.getById(id);
  const relic = result?.data;
  if (!relic) return;

  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:2000;display:flex;align-items:center;justify-content:center;';
  overlay.innerHTML = `
    <div style="background:var(--bg-main);max-width:700px;width:90%;max-height:85vh;overflow-y:auto;border-radius:4px;padding:40px;position:relative;">
      <button onclick="this.closest('div').parentElement.remove()" style="position:absolute;top:16px;right:16px;background:none;border:1px solid var(--border-subtle);color:var(--text-secondary);font-size:20px;cursor:pointer;width:36px;height:36px;">&times;</button>
      ${relic.imageUrl ? `<img src="${relic.imageUrl}" alt="${relic.name}" style="width:100%;max-height:360px;object-fit:contain;background:#f5efe0;margin-bottom:24px;">` : ''}
      <h2 style="font-family:var(--font-display); color:var(--gold); letter-spacing:2px; margin-bottom:8px;">${relic.name}</h2>
      <p style="color:var(--text-secondary); font-size:13px; margin-bottom:16px;">${relic.era || '未知年代'} · ${relic.category || '未分类'}</p>
      <p style="line-height:1.8; color:var(--text-primary);">${relic.description || '暂无详细描述'}</p>
    </div>
  `;
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
};

// ==================== 漫游入口 ====================

function enterMuseumTour() {
  window.location.href = '/tour.html';
}
window.enterMuseumTour = enterMuseumTour;

// ==================== AI 攻略生成 ====================

import { getUserLocation, fetchWeather, estimateCrowdLevel, getFallbackPlan } from './utils/weather.js';
import { travelApi, chatApi } from './api/index.js';

window.generateTourPlan = async function() {
  const location = await getUserLocation();
  const weather = await fetchWeather(location.adcode);
  const crowdLevel = estimateCrowdLevel(new Date().toISOString().split('T')[0]);

  // 更新 UI
  document.getElementById('user-location').textContent = location.city;
  if (weather) {
    const today = weather.current;
    document.getElementById('weather-info').innerHTML =
      `${today.dayweather} ${today.nighttemp}°~${today.daytemp}°<br><small>${today.winddir}风 ${today.windpower}级</small>`;
  }
  document.getElementById('crowd-info').textContent = `预计人流量：${crowdLevel}`;

  const prompt = `请为以下条件生成一份登州博物馆研学旅行攻略：
- 用户所在城市：${location.city}
- 今日天气：${weather?.current?.dayweather}, 温度${weather?.current?.nighttemp}°~${weather?.current?.daytemp}°
- 预计人流量：${crowdLevel}
- 目标受众：中小学研学团体
- 博物馆开放时间：5-10月9:00-18:00（17:30停止入馆），11-4月9:00-17:00（16:30停止入馆），每周一闭馆
- 门票：免费（凭身份证入馆）
- 特色：登州是岳飞故里，博物馆有岳飞专题展区

请包含：出行建议、参观路线、重点展厅推荐（含岳飞展区）、研学活动建议、周边景点联游（含岳王庙）。`;

  const resultContainer = document.getElementById('ai-result');
  const resultContent = document.getElementById('ai-result-content');
  resultContainer.style.display = 'block';

  try {
    const res = await chatApi.ask(prompt);
    if (res.status === 'success') {
      resultContent.innerHTML = res.answer.replace(/\n/g, '<br>');
    } else {
      resultContent.innerHTML = getFallbackPlan(location.city, weather, crowdLevel);
    }
  } catch {
    resultContent.innerHTML = getFallbackPlan(location.city, weather, crowdLevel);
  }
  resultContainer.scrollIntoView({ behavior: 'smooth' });
};

// ==================== 页面初始化 ====================

document.addEventListener('DOMContentLoaded', async () => {
  initNavigation();
  initScrollSpy();
  loadHistoryContent();
  loadRelics();

  // 加载天气面板
  const location = await getUserLocation();
  const weather = await fetchWeather(location.adcode);
  if (weather) {
    const locEl = document.getElementById('user-location');
    const weatherEl = document.getElementById('weather-info');
    const crowdEl = document.getElementById('crowd-info');
    if (locEl) locEl.textContent = location.city;
    if (weatherEl) {
      const today = weather.current;
      weatherEl.innerHTML = `${today.dayweather} ${today.nighttemp}°~${today.daytemp}°`;
    }
    if (crowdEl) {
      crowdEl.textContent = `预计人流量：${estimateCrowdLevel(new Date().toISOString().split('T')[0])}`;
    }
  }
});
