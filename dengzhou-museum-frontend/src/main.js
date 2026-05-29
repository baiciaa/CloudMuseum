/**
 * main.js — 主导航、滚动监听、动态内容加载
 */
import './styles/style.css';
import './styles/components.css';
import './styles/animations.css';
import { articleApi, relicApi, courseApi, reservationApi } from './api/index.js';

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
    grid.innerHTML = '<p style="color:var(--text-secondary);">暂无历史内容</p>';
    return;
  }

  grid.innerHTML = articles.map((article, i) => {
    const side = i % 2 === 0 ? 'left' : 'right';
    const excerpt = article.content.replace(/<[^>]*>/g, '').substring(0, 120) + '...';
    return `
      <div class="timeline-item ${side} fade-in-up delay-${i + 1}">
        <div class="timeline-marker">
          <div class="timeline-dot"></div>
          ${i < articles.length - 1 ? '<div class="timeline-line"></div>' : ''}
        </div>
        <div class="timeline-content">
          <div class="timeline-year">${article.title}</div>
          <h3 class="timeline-title">${article.title}</h3>
          <p class="timeline-excerpt">${excerpt}</p>
          <button class="timeline-more" onclick="window.showHistoryDetail(${article.id})">
            阅读更多 →
          </button>
        </div>
      </div>
    `;
  }).join('');
}

window.showHistoryDetail = async function(id) {
  const result = await articleApi.getById(id);
  const article = result?.data;
  if (!article) return;
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:2000;display:flex;align-items:center;justify-content:center;';
  overlay.innerHTML = `
    <div style="background:var(--bg-main);max-width:800px;width:90%;max-height:85vh;overflow-y:auto;border-radius:4px;padding:40px;position:relative;border:1px solid var(--border-subtle);">
      <button onclick="this.closest('div').parentElement.remove()" style="position:absolute;top:16px;right:16px;background:none;border:1px solid var(--border-subtle);color:var(--text-secondary);font-size:20px;cursor:pointer;width:36px;height:36px;line-height:36px;">&times;</button>
      <h2 style="font-family:var(--font-display); color:var(--gold); letter-spacing:2px; margin-bottom:20px;">${article.title}</h2>
      <div style="line-height:2; color:var(--text-primary); white-space:pre-wrap;">${article.content.replace(/<[^>]*>/g, '')}</div>
    </div>
  `;
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
};

// 图片加载失败时的占位 HTML
function relicImgPlaceholder(name) {
  return `<div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--text-secondary);font-size:12px;letter-spacing:1px;">
    <span style="font-size:36px;margin-bottom:8px;">&#x1f3db;</span>
    <span>${name}</span>
  </div>`;
}

// 生成文物图片 HTML，带 onerror 回退
function relicImgTag(imageUrl, name) {
  if (!imageUrl) return relicImgPlaceholder(name);
  const placeholder = relicImgPlaceholder(name);
  return `<img src="${imageUrl}" alt="${name}" loading="lazy"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
      style="width:100%;height:100%;object-fit:cover;display:block;">
    <div style="display:none;width:100%;height:100%;">${placeholder}</div>`;
}

// 文物分页状态
let relicsState = { allRelics: [], currentPage: 0, perPage: 12, totalPages: 0 };

function calcPerPage() {
  const grid = document.getElementById('relic-grid');
  if (!grid) return 12;
  const gridWidth = grid.clientWidth;
  const gridHeight = window.innerHeight * 0.65;
  // 列数与CSS断点保持一致: 1400→4, 900→3, 600→2, else 1
  let cols;
  if (gridWidth > 1400) cols = 4;
  else if (gridWidth > 900) cols = 3;
  else if (gridWidth > 600) cols = 2;
  else cols = 1;
  const cardHeight = 360;
  const rows = Math.max(1, Math.floor(gridHeight / cardHeight));
  return cols * rows;  // 自动是列数的整数倍
}

function renderRelicPage(relics, page, perPage) {
  const start = page * perPage;
  const end = Math.min(start + perPage, relics.length);
  const pageRelics = relics.slice(start, end);

  const grid = document.getElementById('relic-grid');
  grid.innerHTML = pageRelics.map((relic, i) => `
    <div class="relic-card fade-in-up delay-${(i % 6) + 1}" onclick="window.showRelicDetail(${relic.id})">
      <div class="card-img">
        ${relicImgTag(relic.imageUrl, relic.name)}
      </div>
      <div style="padding:20px;">
        <h3 style="font-family:var(--font-display); font-size:13px; letter-spacing:2px; color:var(--gold);">
          ${relic.name}
          ${relic.era ? `<span style="font-size:11px; color:var(--text-secondary);">· ${relic.era}</span>` : ''}
        </h3>
        <p style="color:var(--text-secondary); font-size:13px; margin-top:8px;">
          ${relic.description ? relic.description.substring(0, 60) + '...' : '暂无描述'}
        </p>
      </div>
    </div>
  `).join('');

  // 更新分页控件
  renderPagination(relics.length, page, perPage);
}

function renderPagination(total, currentPage, perPage) {
  const totalPages = Math.ceil(total / perPage);
  const container = document.getElementById('relic-pagination');
  if (!container || totalPages <= 1) {
    if (container) container.innerHTML = '';
    return;
  }

  const start = currentPage * perPage + 1;
  const end = Math.min((currentPage + 1) * perPage, total);

  container.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:center; gap:20px; margin-top:24px;">
      <button class="btn-primary" onclick="window.relicPrevPage()"
        ${currentPage === 0 ? 'disabled style="opacity:0.3;cursor:default;"' : ''}
        style="padding:8px 20px; font-size:12px;">← 上一页</button>
      <span style="color:var(--text-secondary); font-size:13px;">
        ${start}-${end} / ${total}
      </span>
      <button class="btn-primary" onclick="window.relicNextPage()"
        ${currentPage >= totalPages - 1 ? 'disabled style="opacity:0.3;cursor:default;"' : ''}
        style="padding:8px 20px; font-size:12px;">下一页 →</button>
    </div>
  `;
}

window.relicPrevPage = function() {
  if (relicsState.currentPage > 0) {
    relicsState.currentPage--;
    renderRelicPage(relicsState.allRelics, relicsState.currentPage, relicsState.perPage);
  }
};

window.relicNextPage = function() {
  if (relicsState.currentPage < relicsState.totalPages - 1) {
    relicsState.currentPage++;
    renderRelicPage(relicsState.allRelics, relicsState.currentPage, relicsState.perPage);
  }
};

async function loadRelics() {
  const grid = document.getElementById('relic-grid');
  if (!grid) return;

  // 骨架屏占位
  const perPage = calcPerPage();
  grid.innerHTML = Array.from({length: perPage}, () => `
    <div class="relic-card"><div class="skeleton skeleton-img"></div>
    <div class="skeleton skeleton-text"></div><div class="skeleton skeleton-text"></div></div>
  `).join('');

  const result = await relicApi.list('', '', 1, 200);
  const relics = result?.data?.list || [];

  if (relics.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-secondary); grid-column:1/-1;">暂无文物数据</p>';
    return;
  }

  relicsState = {
    allRelics: relics,
    currentPage: 0,
    perPage: perPage,
    totalPages: Math.ceil(relics.length / perPage)
  };

  renderRelicPage(relics, 0, perPage);

  // 窗口大小变化时重新计算
  window.addEventListener('resize', () => {
    const newPerPage = calcPerPage();
    if (newPerPage !== relicsState.perPage) {
      relicsState.perPage = newPerPage;
      relicsState.totalPages = Math.ceil(relicsState.allRelics.length / newPerPage);
      if (relicsState.currentPage >= relicsState.totalPages) {
        relicsState.currentPage = relicsState.totalPages - 1;
      }
      renderRelicPage(relicsState.allRelics, relicsState.currentPage, relicsState.perPage);
    }
  });
}

// 文物详情弹窗
window.showRelicDetail = async function(id) {
  const result = await relicApi.getById(id);
  const relic = result?.data;
  if (!relic) return;

  const imgBlock = relic.imageUrl
    ? `<div style="width:100%;max-height:400px;overflow:hidden;background:#f5efe0;margin-bottom:24px;border-radius:2px;position:relative;">
         <img src="${relic.imageUrl}" alt="${relic.name}" loading="lazy"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
           style="width:100%;max-height:400px;object-fit:contain;display:block;">
         <div style="display:none;width:100%;height:200px;align-items:center;justify-content:center;color:var(--text-secondary);font-size:14px;">
           <span style="font-size:48px;margin-right:12px;">&#x1f3db;</span> 图片加载失败
         </div>
       </div>`
    : '';

  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:2000;display:flex;align-items:center;justify-content:center;';
  overlay.innerHTML = `
    <div style="background:var(--bg-main);max-width:700px;width:90%;max-height:85vh;overflow-y:auto;border-radius:4px;padding:40px;position:relative;">
      <button onclick="this.closest('div').parentElement.remove()" style="position:absolute;top:16px;right:16px;background:none;border:1px solid var(--border-subtle);color:var(--text-secondary);font-size:20px;cursor:pointer;width:36px;height:36px;">&times;</button>
      ${imgBlock}
      <h2 style="font-family:var(--font-display); color:var(--gold); letter-spacing:2px; margin-bottom:8px;">${relic.name}</h2>
      <p style="color:var(--text-secondary); font-size:13px; margin-bottom:16px;">${relic.era || '未知年代'} · ${relic.category || '未分类'}</p>
      <div style="line-height:1.8; color:var(--text-primary);">${relic.description || '暂无详细描述'}</div>
    </div>
  `;
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
};

// ==================== 研学中心：课程弹窗 ====================

window.showCoursesModal = async function() {
  const result = await courseApi.list('ACTIVE');
  const courses = result?.data || [];

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-panel modal-lg">
      <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">&times;</button>
      <h2 class="modal-title">研学课程</h2>
      <div class="course-list">
        ${courses.length === 0
          ? '<p style="color:var(--text-secondary);text-align:center;">暂无可用课程</p>'
          : courses.map(c => `
            <div class="course-item" onclick="window.showCourseDetail(${c.id})">
              <div class="course-item-header">
                <h3>${c.title}</h3>
                <span class="course-price">${c.price > 0 ? '¥' + c.price + '/人' : '免费'}</span>
              </div>
              <p class="course-item-desc">${c.description || ''}</p>
              <div class="course-item-meta">
                <span>&#x1f4c5; ${parseSchedule(c.scheduleInfo)}</span>
                <span>&#x1f465; 已约${c.currentReserved || 0}/${c.maxCapacity || 0}人</span>
              </div>
            </div>
          `).join('')}
      </div>
    </div>`;
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
};

window.showCourseDetail = async function(id) {
  const result = await courseApi.getById(id);
  const c = result?.data;
  if (!c) return;

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-panel">
      <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">&times;</button>
      <h2 class="modal-title">${c.title}</h2>
      <div class="course-detail">
        <div class="course-detail-meta">
          <span class="course-tag">${c.price > 0 ? '¥' + c.price + '/人' : '免费课程'}</span>
          <span class="course-tag">已约${c.currentReserved || 0}/${c.maxCapacity || 0}人</span>
        </div>
        <div class="course-detail-schedule">${parseSchedule(c.scheduleInfo)}</div>
        <div class="course-detail-body">${(c.content || c.description || '').replace(/\\n/g, '<br>')}</div>
      </div>
      <button class="btn-primary" style="margin-top:24px;width:100%;"
        onclick="this.closest('.modal-overlay').remove();window.showReservationModal(${c.id})">
        立即预约此课程
      </button>
    </div>`;
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
};

function parseSchedule(scheduleJson) {
  try {
    const arr = JSON.parse(scheduleJson);
    if (Array.isArray(arr) && arr.length > 0) {
      return arr.map(s => `${s.date} ${s.time} @ ${s.location}`).join(' | ');
    }
    return scheduleJson || '排期待定';
  } catch {
    return scheduleJson || '排期待定';
  }
}

// ==================== 研学中心：预约弹窗 ====================

window.showReservationModal = function(courseId) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-panel">
      <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">&times;</button>
      <h2 class="modal-title">团体参观预约</h2>
      <form class="reserve-form" onsubmit="window.submitReservation(event, ${courseId || 'null'})">
        <div class="form-group">
          <label>联系人姓名 *</label>
          <input type="text" name="contactName" required placeholder="请输入联系人姓名">
        </div>
        <div class="form-group">
          <label>联系电话 *</label>
          <input type="tel" name="contactPhone" required placeholder="请输入手机号码">
        </div>
        <div class="form-group">
          <label>学校/单位名称</label>
          <input type="text" name="organization" placeholder="请输入学校或单位名称">
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>参观人数 *</label>
            <input type="number" name="visitorCount" required min="10" max="200" value="30" placeholder="10-200人">
          </div>
          <div class="form-group">
            <label>预计日期</label>
            <input type="date" name="visitDate">
          </div>
        </div>
        <div class="form-group">
          <label>备注</label>
          <textarea name="notes" rows="2" placeholder="如有特殊需求请注明"></textarea>
        </div>
        <button type="submit" class="btn-primary" style="width:100%;margin-top:8px;">提交预约</button>
      </form>
      <p style="color:var(--text-secondary);font-size:11px;text-align:center;margin-top:12px;">
        提交后工作人员将在1-2个工作日内与您联系确认
      </p>
    </div>`;
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
};

window.submitReservation = async function(event, courseId) {
  event.preventDefault();
  const form = event.target;
  const data = {
    userId: 1,
    type: 'GROUP',
    courseId: courseId || null,
    contactName: form.contactName.value.trim(),
    contactPhone: form.contactPhone.value.trim(),
    visitorCount: parseInt(form.visitorCount.value) || 30,
    visitDate: form.visitDate.value || new Date().toISOString().split('T')[0],
    remarks: (form.organization.value.trim() ? '单位：' + form.organization.value.trim() + '。' : '') + form.notes.value.trim(),
  };

  if (!data.contactName || !data.contactPhone) {
    alert('请填写联系人姓名和电话');
    return;
  }

  try {
    const res = await reservationApi.create(data);
    if (res.success || res.status === 'success' || res.code === 200) {
      form.closest('.modal-overlay').remove();
      window.showReservationSuccess();
    } else {
      alert('预约提交失败：' + (res.message || '请稍后重试'));
    }
  } catch (err) {
    alert('网络错误，请稍后重试');
  }
};

window.showReservationSuccess = function() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-panel" style="text-align:center;">
      <div style="font-size:56px;margin-bottom:16px;">&#x2705;</div>
      <h2 class="modal-title">预约已提交</h2>
      <p style="color:var(--text-secondary);margin:16px 0;line-height:1.8;">
        感谢您的预约！<br>工作人员将在1-2个工作日内与您联系确认。
      </p>
      <button class="btn-primary" onclick="this.closest('.modal-overlay').remove()">关闭</button>
    </div>`;
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

// ==================== 聊天窗状态 ====================
const CHAT_STORAGE_KEY = 'dengzhou_chat_history';
let chatContext = null;     // { initialized, aiAvailable }
let chatHistory = [];       // [{ role, content }]
let isTyping = false;
let chatBusy = false;       // AI 回复期间锁定输入

function saveChatToStorage() {
  try {
    const data = { context: chatContext, history: chatHistory };
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(data));
    const btn = document.getElementById('chat-clear-btn');
    if (btn) btn.style.display = 'inline-block';
  } catch { /* storage full, ignore */ }
}

function loadChatFromStorage() {
  try {
    const raw = localStorage.getItem(CHAT_STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (data.history && data.history.length > 0) {
        return data;
      }
    }
  } catch { /* corrupted, ignore */ }
  return null;
}

function clearChatStorage() {
  localStorage.removeItem(CHAT_STORAGE_KEY);
  const btn = document.getElementById('chat-clear-btn');
  if (btn) btn.style.display = 'none';
}

function setChatInputEnabled(enabled) {
  chatBusy = !enabled;
  const input = document.getElementById('chat-input');
  const btn = document.querySelector('.chat-send-btn');
  if (input) {
    input.disabled = !enabled;
    input.placeholder = enabled ? '输入您的问题...' : 'AI 正在回复中...';
  }
  if (btn) btn.disabled = !enabled;
}

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
- 特色：登州是戚继光故乡，博物馆有戚继光专题展区

请包含：出行建议、参观路线、重点展厅推荐（含戚继光展区）、研学活动建议、周边景点联游（含戚继光故里）。`;

  const resultContainer = document.getElementById('ai-result');
  const resultContent = document.getElementById('ai-result-content');
  resultContainer.style.display = 'block';

  try {
    const res = await chatApi.ask(prompt);
    if (res.status === 'success' && res.answer) {
      resultContent.innerHTML = res.answer.replace(/\n/g, '<br>');
    } else {
      resultContent.innerHTML = getFallbackPlan(location.city, weather, crowdLevel);
    }
  } catch {
    resultContent.innerHTML = getFallbackPlan(location.city, weather, crowdLevel);
  }
  resultContainer.scrollIntoView({ behavior: 'smooth' });
};

// ==================== 旅行攻略聊天窗 ====================

function createChatDialog() {
  if (document.getElementById('travel-chat-overlay')) return;
  const overlay = document.createElement('div');
  overlay.id = 'travel-chat-overlay';
  overlay.className = 'chat-overlay';
  overlay.innerHTML = `
    <div class="chat-panel">
      <div class="chat-header">
        <span class="chat-header-title">&#x1f3eF; 登州小吏</span>
        <div style="display:flex;gap:8px;align-items:center;">
          <button id="chat-clear-btn" class="chat-clear-btn" title="清空历史记录"
            style="display:none;" onclick="window.clearChatHistory()">清空</button>
          <button class="chat-close" onclick="window.closeTravelChat()">&times;</button>
        </div>
      </div>
      <div class="chat-messages" id="chat-messages">
        <div class="chat-welcome">
          <p>登州小吏恭候多时</p>
          <p>正在叩问云端...</p>
        </div>
      </div>
      <div class="chat-input-area">
        <input type="text" class="chat-input" id="chat-input"
          placeholder="输入您的问题..." onkeydown="if(event.key==='Enter')window.sendChatMessage()">
        <button class="chat-send-btn" onclick="window.sendChatMessage()">发送</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
}

window.closeTravelChat = function() {
  saveChatToStorage();
  const overlay = document.getElementById('travel-chat-overlay');
  if (overlay) overlay.remove();
  chatContext = null;
  chatHistory = [];
  isTyping = false;
};

window.clearChatHistory = function() {
  chatHistory = [];
  chatContext = null;
  clearChatStorage();
  document.getElementById('chat-messages').innerHTML = '';
  chatBusy = false;
  setChatInputEnabled(true);
  // 触发重新初始化
  window.openTravelChat();
};

window.openTravelChat = async function() {
  createChatDialog();
  const overlay = document.getElementById('travel-chat-overlay');
  overlay.style.display = 'flex';

  if (!chatContext) {
    // 尝试从 localStorage 恢复历史记录
    const saved = loadChatFromStorage();
    if (saved) {
      chatContext = saved.context || { initialized: true, aiAvailable: false };
      chatHistory = saved.history;
      document.getElementById('chat-messages').innerHTML = '';
      // 渲染历史消息（不带动画）
      chatHistory.forEach(m => addChatBubble(m.role, m.content, false, false));
      // 快速检测 AI 状态
      try {
        const res = await chatApi.ask('你好');
        chatContext.aiAvailable = !!(res.status === 'success' && res.answer);
      } catch { chatContext.aiAvailable = false; }
      if (!chatContext.aiAvailable) {
        addChatBubble('warning', '⚠️ AI 服务暂未开启，浏览历史记录中。');
      }
      saveChatToStorage();
      return;
    }

    // 先检测 AI 服务是否可用
    addChatBubble('assistant', '', true);
    setChatInputEnabled(false);
    let aiOk = false;
    try {
      const res = await chatApi.ask('你好');
      if (res.status === 'success' && res.answer) {
        aiOk = true;
        chatContext.aiAvailable = true;
      }
    } catch { /* AI unavailable */ }
    removeLastThinkingBubble();

    const greeting = '在下登州小吏，乃登州博物馆云端导览使。\n\n于此间，我可为您解说馆藏文物之精粹、登州古港之千年沧桑、戚继光之英风烈骨、东方海上丝路之壮阔篇章。\n\n馆中有战国铜剑寒光未褪、西周青铜礼器庄重如初、明清海防火器犹带硝烟——件件皆是蓬莱古港的岁月见证。\n\n若有疑问，尽管道来，小吏愿为君细述。';

    if (!aiOk) {
      addChatBubble('warning', '⚠️ AI 服务暂未开启，小吏暂以预设内容为君导览。');
    }

    chatHistory.push({ role: 'assistant', content: greeting });
    addChatBubble('assistant', greeting, false, true);
    saveChatToStorage();
  }
};

function removeLastThinkingBubble() {
  const msgs = document.getElementById('chat-messages');
  const thinking = msgs.querySelector('.chat-thinking');
  if (thinking) thinking.remove();
}

function addChatBubble(role, text, isThinking, animate) {
  const msgs = document.getElementById('chat-messages');
  const div = document.createElement('div');
  const cls = role === 'user' ? 'chat-user' : role === 'warning' ? 'chat-warning' : 'chat-assistant';
  div.className = 'chat-bubble ' + cls;

  if (isThinking) {
    div.classList.add('chat-thinking');
    div.innerHTML = '<span class="thinking-dots"><span>.</span><span>.</span><span>.</span></span>';
  } else if (animate) {
    // 打字机效果
    div.textContent = '';
    typewriterEffect(div, text);
  } else {
    div.textContent = text;
  }

  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function typewriterEffect(el, text) {
  let i = 0;
  el.textContent = '';
  isTyping = true;
  function tick() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      const msgs = document.getElementById('chat-messages');
      msgs.scrollTop = msgs.scrollHeight;
      setTimeout(tick, 20 + Math.random() * 30);
    } else {
      isTyping = false;
      setChatInputEnabled(true);
    }
  }
  tick();
}

window.sendChatMessage = async function() {
  if (chatBusy) return;
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  setChatInputEnabled(false);

  chatHistory.push({ role: 'user', content: text });
  addChatBubble('user', text);

  // 添加思考动画
  addChatBubble('assistant', '', true);

  // 构建带历史上下文的 prompt
  let historyStr = chatHistory.slice(0, -1).map(m => `${m.role === 'user' ? '用户' : 'AI'}: ${m.content}`).join('\n');
  const prompt = `你是"登州小吏"，登州博物馆的云端导览使，一位学识渊博、谈吐文雅的博物馆讲解员。
登州博物馆位于山东蓬莱，是东方海上丝绸之路始发港，也是戚继光故乡。
馆藏文物涵盖战国至明清：青铜器、陶瓷、书画、海防兵器等。
你的职责是为游客介绍文物背后的历史故事、登州古港的兴衰、戚继光的抗倭事迹、海上丝路的文化交流。
说话风格：半文半白，谦和有力，偶尔引用古诗词。每次回复控制在200字以内。

对话历史：
${historyStr}

游客最新问题：${text}

请以登州小吏的口吻回复：`;

  try {
    if (!chatContext.aiAvailable) throw new Error('AI unavailable');
    const res = await chatApi.ask(prompt);
    if (res.status === 'success' && res.answer) {
      removeLastThinkingBubble();
      chatHistory.push({ role: 'assistant', content: res.answer });
      addChatBubble('assistant', res.answer, false, true);
    } else {
      throw new Error('AI unavailable');
    }
  } catch {
    removeLastThinkingBubble();
    const fallback = 'AI 服务暂未开启，小吏暂时无法作答。\n\n关于"' + text + '"，阁下可在"重点文物"区浏览馆藏精品，或在"研学中心"了解详情。他日AI上线，小吏定当细细道来。';
    chatHistory.push({ role: 'assistant', content: fallback });
    addChatBubble('assistant', fallback, false, true);
  }
  saveChatToStorage();
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
