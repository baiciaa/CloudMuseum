/**
 * main.js — 主导航、滚动监听、动态内容加载
 */
import './styles/style.css';
import './styles/components.css';
import './styles/animations.css';
import { articleApi, relicApi, courseApi, reservationApi, announcementApi } from './api/index.js';
import { IMAGES } from './config/images.js';
import { initDigitalHuman } from './three/DigitalHuman.js';

// ==================== 图片初始化 ====================

function initImages() {
  // Hero 背景轮播
  const slideshow = document.getElementById('heroBgSlideshow');
  if (slideshow && IMAGES.heroSlides.length > 0) {
    slideshow.innerHTML = IMAGES.heroSlides.map((url, i) =>
      `<div class="hero-bg-slide" style="background-image:url('${url}');"></div>`
    ).join('');
  }

  // 云端漫游入口背景
  if (IMAGES.exploreCover) {
    const entranceBg = document.querySelector('.tour-entrance-bg');
    if (entranceBg) {
      entranceBg.style.backgroundImage = `url('${IMAGES.exploreCover}')`;
      entranceBg.classList.add('has-image');
      entranceBg.querySelector('div').style.color = '#fff';
    }
  }

  // 板块背景 (启用视差 class)
  if (IMAGES.textures.history) {
    document.getElementById('section-history')?.classList.add('has-bg');
    document.getElementById('section-history').style.backgroundImage = `url('${IMAGES.textures.history}')`;
  }
}

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
  const floatBtn = document.querySelector('.float-dengzhou');
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
    // 划出首页时显示数字人，在首页时隐藏
    if (floatBtn) {
      floatBtn.classList.toggle('hidden', current === 'home');
    }
  });
  // 初始状态隐藏
  if (floatBtn) floatBtn.classList.add('hidden');
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
let relicsState = { allRelics: [], currentPage: 0, perPage: 24, totalPages: 0 };

function calcPerPage() {
  const grid = document.getElementById('relic-grid');
  if (!grid) return 24;
  const gridWidth = grid.clientWidth;
  const minCardWidth = 240;
  const gap = 20;
  const cols = Math.max(1, Math.floor((gridWidth + gap) / (minCardWidth + gap)));
  const rows = 4;
  return cols * rows;
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
        ${relic.era ? `<span class="img-label">${relic.era}</span>` : ''}
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

  const result = await relicApi.list('', '', 1, 500);
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

import { getUserLocation, fetchWeather, estimateCrowdLevel } from './utils/weather.js';
import { chatApi } from './api/index.js';

// ==================== 聊天窗状态 ====================
const CHAT_STORAGE_KEY = 'dengzhou_chat_history';
const AI_CHECK_COOLDOWN = 60000;
let chatContext = null;
let chatHistory = [];
let isTyping = false;
let chatBusy = false;
let abortController = null;
let typewriterState = null;   // { el, fullText, currentIndex, timerId }
let aiCheckCache = { timestamp: 0, available: false };

async function checkAiAvailability() {
  const now = Date.now();
  if (now - aiCheckCache.timestamp < AI_CHECK_COOLDOWN) {
    return aiCheckCache.available;
  }
  try {
    const res = await chatApi.ask('测试');
    aiCheckCache.available = !!(res.status === 'success' && res.answer);
  } catch {
    aiCheckCache.available = false;
  }
  aiCheckCache.timestamp = now;
  return aiCheckCache.available;
}

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
  // 数字人回到原位
  const dh = document.querySelector('.float-dengzhou');
  if (dh) dh.classList.remove('chat-open');
  // 取消进行中的 AI 请求
  if (abortController) {
    abortController.abort();
    abortController = null;
    chatBusy = false;
    setChatInputEnabled(true);
  }
  // 暂停打字机动画
  if (typewriterState && typewriterState.timerId) {
    clearTimeout(typewriterState.timerId);
    typewriterState.timerId = null;
  }
  isTyping = false;
  removeLastThinkingBubble();
  saveChatToStorage();
  const overlay = document.getElementById('travel-chat-overlay');
  if (overlay) overlay.style.display = 'none';
};

window.clearChatHistory = function() {
  if (abortController) {
    abortController.abort();
    abortController = null;
  }
  if (typewriterState && typewriterState.timerId) {
    clearTimeout(typewriterState.timerId);
  }
  typewriterState = null;
  isTyping = false;
  chatHistory = [];
  chatContext = null;
  clearChatStorage();
  document.getElementById('chat-messages').innerHTML = '';
  chatBusy = false;
  setChatInputEnabled(true);
  window.openTravelChat();
};

window.toggleDengzhouChat = function() {
  const overlay = document.getElementById('travel-chat-overlay');
  if (overlay && overlay.style.display !== 'none') {
    window.closeTravelChat();
  } else {
    window.openTravelChat();
  }
};

window.openTravelChat = async function() {
  createChatDialog();
  const overlay = document.getElementById('travel-chat-overlay');
  overlay.style.display = 'flex';
  // 数字人移到左下角
  const dh = document.querySelector('.float-dengzhou');
  if (dh) dh.classList.add('chat-open');

  // 恢复暂停的打字机动画
  if (typewriterState && typewriterState.fullText) {
    resumeTypewriter();
    return;
  }

  if (!chatContext) {
    const saved = loadChatFromStorage();
    if (saved) {
      chatContext = saved.context || { initialized: true, aiAvailable: true };
      chatHistory = saved.history;
      document.getElementById('chat-messages').innerHTML = '';
      chatHistory.forEach(m => addChatBubble(m.role, m.content, false, false));
      setChatInputEnabled(!chatBusy);
      saveChatToStorage();
      return;
    }

    const greeting = '在下登州小吏，乃登州博物馆云端导览使。\n\n于此间，我可为您解说馆藏文物之精粹、登州古港之千年沧桑、戚继光之英风烈骨、东方海上丝路之壮阔篇章。\n\n馆中有战国铜剑寒光未褪、西周青铜礼器庄重如初、明清海防火器犹带硝烟——件件皆是蓬莱古港的岁月见证。\n\n若有疑问，尽管道来，小吏愿为君细述。';

    chatContext = { initialized: true, aiAvailable: true };
    chatHistory.push({ role: 'assistant', content: greeting });
    addChatBubble('assistant', greeting, false, true);
    saveChatToStorage();
    setChatInputEnabled(!chatBusy);

    checkAiAvailability().then(available => {
      chatContext.aiAvailable = available;
      saveChatToStorage();
    });
  } else {
    setChatInputEnabled(!chatBusy);
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

function typewriterEffect(el, text, startIndex = 0) {
  if (startIndex === 0) el.textContent = '';
  isTyping = true;
  typewriterState = { el, fullText: text, currentIndex: startIndex };

  function tick() {
    const state = typewriterState;
    if (!state) return;
    if (state.currentIndex < state.fullText.length) {
      state.el.textContent += state.fullText.charAt(state.currentIndex);
      state.currentIndex++;
      const msgs = document.getElementById('chat-messages');
      if (msgs) msgs.scrollTop = msgs.scrollHeight;
      state.timerId = setTimeout(tick, 20 + Math.random() * 30);
    } else {
      isTyping = false;
      typewriterState = null;
      setChatInputEnabled(true);
    }
  }
  tick();
}

function resumeTypewriter() {
  if (!typewriterState) return;
  isTyping = true;
  setChatInputEnabled(false);

  function tick() {
    const state = typewriterState;
    if (!state) return;
    if (state.currentIndex < state.fullText.length) {
      state.el.textContent += state.fullText.charAt(state.currentIndex);
      state.currentIndex++;
      const msgs = document.getElementById('chat-messages');
      if (msgs) msgs.scrollTop = msgs.scrollHeight;
      state.timerId = setTimeout(tick, 20 + Math.random() * 30);
    } else {
      isTyping = false;
      typewriterState = null;
      setChatInputEnabled(true);
    }
  }
  tick();
}

window.sendChatMessage = async function() {
  if (chatBusy || isTyping) return;
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  setChatInputEnabled(false);

  chatHistory.push({ role: 'user', content: text });
  addChatBubble('user', text);
  addChatBubble('assistant', '', true);

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

  abortController = new AbortController();

  try {
    const res = await chatApi.ask(prompt, abortController.signal);
    if (res.status === 'success' && res.answer) {
      removeLastThinkingBubble();
      chatHistory.push({ role: 'assistant', content: res.answer });
      addChatBubble('assistant', res.answer, false, true);
    } else {
      throw new Error('AI unavailable');
    }
  } catch (err) {
    if (err.name === 'AbortError') {
      // 聊天窗关闭中断请求，closeTravelChat 已处理清理
      return;
    }
    removeLastThinkingBubble();
    const fallback = '小吏暂时无法作答，请稍后再试。\n\n关于"' + text + '"，阁下可在"重点文物"区浏览馆藏精品，或在"研学中心"了解详情。';
    chatHistory.push({ role: 'assistant', content: fallback });
    addChatBubble('assistant', fallback, false, true);
  }
  abortController = null;
  saveChatToStorage();
};

// ==================== 页面初始化 ====================

document.addEventListener('DOMContentLoaded', async () => {
  initImages();
  // 启动 3D 数字人
  requestAnimationFrame(() => {
    const container = document.getElementById('digitalHumanContainer');
    if (container) initDigitalHuman(container);
  });
  initNavigation();
  initScrollSpy();
  loadHistoryContent();
  loadRelics();

  // 加载天气面板
  const loc = await getUserLocation();
  const w = await fetchWeather(loc.adcode);
  if (w) {
    const locEl = document.getElementById('user-location');
    if (locEl) locEl.textContent = loc.city;
    const weatherEl = document.getElementById('weather-info');
    if (weatherEl) {
      const today = w.current;
      weatherEl.innerHTML = `${today.dayweather} ${today.nighttemp}°~${today.daytemp}°`;
    }
    const crowdEl = document.getElementById('crowd-info');
    if (crowdEl) crowdEl.textContent = `预计人流量：${estimateCrowdLevel(new Date().toISOString().split('T')[0])}`;
  }

  // 加载资讯公告
  loadNotices(1, true);
  // 加载研学动态
  loadEduNews(1);

  window.loadMoreNotices = () => loadNotices(noticePage + 1, false);
  window.loadMoreEdu = () => loadEduNews(eduPage + 1);
});

// ==================== 资讯公告 & 研学动态 ====================
let noticePage = 1;
let eduPage = 1;

async function loadNotices(page, reset) {
  const container = document.getElementById('notice-list');
  if (!container) return;
  if (reset) container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-secondary);font-size:13px;">加载中...</div>';
  const r = await announcementApi.list('NOTICE', page, 5);
  const list = r.data?.list || [];
  if (reset) container.innerHTML = '';
  if (list.length === 0) {
    if (reset) container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-secondary);font-size:13px;">暂无公告</div>';
    return;
  }
  list.forEach(item => {
    const d = document.createElement('div');
    d.style.cssText = 'padding:20px 0;border-bottom:1px solid var(--border-subtle);cursor:pointer;';
    const date = item.createdAt ? new Date(item.createdAt).toLocaleDateString('zh-CN') : '';
    d.innerHTML =
      '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">' +
        '<span style="font-family:var(--font-display);font-size:15px;letter-spacing:1px;color:var(--text-primary);">' + escHtml(item.title) + '</span>' +
        '<span style="font-size:11px;color:var(--text-muted);white-space:nowrap;">' + date + '</span>' +
      '</div>' +
      '<div style="font-size:13px;color:var(--text-secondary);margin-top:6px;line-height:1.6;">' + escHtml((item.content||'').slice(0,120)) + (item.content&&item.content.length>120?'...':'') + '</div>';
    d.onclick = () => showAnnouncementDetail(item);
    container.appendChild(d);
  });
  const total = r.data?.total || 0;
  renderNoticePager(container, page, total, 5);
}

async function loadEduNews(page) {
  const container = document.getElementById('edu-news-list');
  if (!container) return;
  if (page === 1) container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-secondary);font-size:13px;">加载中...</div>';
  const r = await announcementApi.list('EDUCATION', page, 6);
  const list = r.data?.list || [];
  if (page === 1) container.innerHTML = '';
  if (list.length === 0 && page === 1) {
    container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-secondary);font-size:13px;">暂无研学动态</div>';
    return;
  }
  list.forEach(item => {
    const d = document.createElement('div');
    d.className = 'relic-card';
    d.style.cssText = 'cursor:pointer;';
    const imgHtml = item.coverImage
      ? '<div class="card-img"><img src="' + item.coverImage + '" alt="' + escHtml(item.title) + '" style="width:100%;height:100%;object-fit:cover;" loading="lazy"></div>'
      : '<div class="card-img" style="display:flex;align-items:center;justify-content:center;color:#ccc;font-size:36px;">&#x1f4f0;</div>';
    d.innerHTML = imgHtml +
      '<div style="padding:14px;">' +
        '<div style="font-size:13px;font-weight:600;margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + escHtml(item.title) + '</div>' +
        '<div style="font-size:11px;color:var(--text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + escHtml((item.content||'').slice(0,60)) + '</div>' +
      '</div>';
    d.onclick = () => showAnnouncementDetail(item);
    container.appendChild(d);
  });
  const total = r.data?.total || 0;
  renderEduPager(container, page, total, 6);
}

window.showAnnouncementDetail = function(item) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  const date = item.createdAt ? new Date(item.createdAt).toLocaleDateString('zh-CN') : '';
  overlay.innerHTML =
    '<div class="modal-panel" style="max-width:640px;">' +
      '<button class="modal-close" onclick="this.closest(\'.modal-overlay\').remove()">&times;</button>' +
      '<h2 class="modal-title" style="padding-right:30px;">' + escHtml(item.title) + '</h2>' +
      '<p style="font-size:11px;color:var(--text-muted);margin-bottom:16px;">' + date + '</p>' +
      '<div style="font-size:14px;line-height:1.9;color:var(--text-primary);white-space:pre-wrap;">' + escHtml(item.content) + '</div>' +
    '</div>';
  document.body.appendChild(overlay);
  overlay.onclick = e => { if (e.target === overlay) overlay.remove(); };
};

function renderNoticePager(container, page, total, perPage) {
  const oldPag = document.getElementById('notice-pagination');
  if (oldPag) oldPag.remove();
  const totalPages = Math.ceil(total / perPage);
  if (totalPages <= 1) return;
  const pag = document.createElement('div');
  pag.id = 'notice-pagination';
  pag.className = 'announce-pager';
  const prv = document.createElement('button');
  prv.innerHTML = '&#8249; 上一页';
  prv.className = 'page-btn' + (page <= 1 ? ' disabled' : '');
  prv.onclick = () => page > 1 && loadNotices(page - 1, true);
  pag.appendChild(prv);
  for (let p = 1; p <= totalPages; p++) {
    const btn = document.createElement('button');
    btn.textContent = p;
    btn.className = 'page-btn' + (p === page ? ' active' : '');
    btn.onclick = () => loadNotices(p, true);
    pag.appendChild(btn);
  }
  const nxt = document.createElement('button');
  nxt.innerHTML = '下一页 &#8250;';
  nxt.className = 'page-btn' + (page >= totalPages ? ' disabled' : '');
  nxt.onclick = () => page < totalPages && loadNotices(page + 1, true);
  pag.appendChild(nxt);
  const info = document.createElement('span');
  info.className = 'page-info';
  info.textContent = `共 ${total} 条`;
  pag.appendChild(info);
  container.after(pag);
}

function renderEduPager(container, page, total, perPage) {
  const oldPag = document.getElementById('edu-pagination');
  if (oldPag) oldPag.remove();
  const totalPages = Math.ceil(total / perPage);
  if (totalPages <= 1) return;
  const pag = document.createElement('div');
  pag.id = 'edu-pagination';
  pag.className = 'announce-pager';
  const prv = document.createElement('button');
  prv.innerHTML = '&#8249; 上一页';
  prv.className = 'page-btn' + (page <= 1 ? ' disabled' : '');
  prv.onclick = () => page > 1 && loadEduNews(page - 1);
  pag.appendChild(prv);
  for (let p = 1; p <= totalPages; p++) {
    const btn = document.createElement('button');
    btn.textContent = p;
    btn.className = 'page-btn' + (p === page ? ' active' : '');
    btn.onclick = () => loadEduNews(p);
    pag.appendChild(btn);
  }
  const nxt = document.createElement('button');
  nxt.innerHTML = '下一页 &#8250;';
  nxt.className = 'page-btn' + (page >= totalPages ? ' disabled' : '');
  nxt.onclick = () => page < totalPages && loadEduNews(page + 1);
  pag.appendChild(nxt);
  const info = document.createElement('span');
  info.className = 'page-info';
  info.textContent = `共 ${total} 条`;
  pag.appendChild(info);
  container.after(pag);
}

function escHtml(s) {
  if (!s) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
