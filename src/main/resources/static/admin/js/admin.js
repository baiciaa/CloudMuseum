/* ==================== 登州博物馆 · 管理后台 ==================== */
const API_BASE = '/api';

// ==================== API 客户端 ====================
const api = {
    token: localStorage.getItem('admin_token') || '',
    setToken(t) { this.token = t; localStorage.setItem('admin_token', t); },
    clearToken() { this.token = ''; localStorage.removeItem('admin_token'); },
    headers(extra = {}) {
        const h = { 'Content-Type': 'application/json', ...extra };
        if (this.token) h['X-Admin-Token'] = this.token;
        return h;
    },
    async get(path) {
        const res = await fetch(API_BASE + path, { headers: this.headers() });
        const json = await res.json();
        if (!res.ok && res.status === 401) { auth.logout(); return json; }
        return json;
    },
    async post(path, body) {
        const res = await fetch(API_BASE + path, { method: 'POST', headers: this.headers(), body: JSON.stringify(body) });
        const json = await res.json();
        if (!res.ok && res.status === 401) { auth.logout(); return json; }
        return json;
    },
    async put(path, body) {
        const res = await fetch(API_BASE + path, { method: 'PUT', headers: this.headers(), body: JSON.stringify(body) });
        const json = await res.json();
        if (!res.ok && res.status === 401) { auth.logout(); return json; }
        return json;
    },
    async del(path) {
        const res = await fetch(API_BASE + path, { method: 'DELETE', headers: this.headers() });
        const json = await res.json();
        if (!res.ok && res.status === 401) { auth.logout(); return json; }
        return json;
    }
};

// ==================== Toast ====================
function toast(msg, type = 'success') {
    let c = document.querySelector('.toast-container');
    if (!c) { c = document.createElement('div'); c.className = 'toast-container'; document.body.appendChild(c); }
    const t = document.createElement('div'); t.className = `toast ${type}`; t.textContent = msg;
    c.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 2500);
}

// ==================== 确认对话框 ====================
function confirmDialog(msg) {
    return new Promise(resolve => {
        const overlay = document.createElement('div');
        overlay.className = 'confirm-overlay';
        overlay.innerHTML = `<div class="confirm-box"><p>${msg}</p><div class="actions">
            <button class="btn btn-sm" id="confirm-cancel">取消</button>
            <button class="btn btn-sm btn-danger" id="confirm-ok">确认</button></div></div>`;
        document.body.appendChild(overlay);
        overlay.querySelector('#confirm-ok').onclick = () => { overlay.remove(); resolve(true); };
        overlay.querySelector('#confirm-cancel').onclick = () => { overlay.remove(); resolve(false); };
        overlay.onclick = e => { if (e.target === overlay) { overlay.remove(); resolve(false); } };
    });
}

// ==================== Auth ====================
const auth = {
    async login(username, password) {
        const r = await api.post('/admin/login', { username, password });
        if (r.success) {
            api.setToken(r.data.token);
            app.render();
            return true;
        }
        return false;
    },
    async check() {
        if (!api.token) return false;
        const r = await api.get('/admin/check');
        return r.success;
    },
    logout() {
        api.clearToken();
        app.render();
    },
    isLoggedIn() { return !!api.token; }
};

// ==================== 字段配置 ====================
const ENTITY_CONFIG = {
    users: {
        label: '用户',
        listUrl: '/users',
        createUrl: '/users',
        updateUrl: id => `/users/${id}`,
        deleteUrl: id => `/users/${id}`,
        fields: [
            { key: 'id', label: 'ID', width: 60 },
            { key: 'username', label: '用户名' },
            { key: 'role', label: '角色', width: 80 },
            { key: 'phone', label: '手机号' },
            { key: 'email', label: '邮箱' },
            { key: 'createdAt', label: '创建时间', width: 160, render: v => v ? new Date(v).toLocaleString() : '-' }
        ],
        formFields: [
            { key: 'username', label: '用户名', required: true },
            { key: 'password', label: '密码', required: true, type: 'password', hint: '创建时必填，编辑留空不修改' },
            { key: 'role', label: '角色', type: 'select', options: ['USER', 'ADMIN'] },
            { key: 'phone', label: '手机号' },
            { key: 'email', label: '邮箱', type: 'email' }
        ]
    },
    articles: {
        label: '文章',
        listUrl: '/admin/articles',
        createUrl: '/articles',
        updateUrl: id => `/articles/${id}`,
        deleteUrl: id => `/articles/${id}`,
        fields: [
            { key: 'id', label: 'ID', width: 60 },
            { key: 'title', label: '标题', render: v => `<span class="cell-truncate">${esc(v)}</span>` },
            { key: 'type', label: '类型', width: 80 },
            { key: 'status', label: '状态', width: 80 },
            { key: 'author', label: '作者', width: 80 },
            { key: 'createdAt', label: '创建时间', width: 160, render: v => v ? new Date(v).toLocaleString() : '-' }
        ],
        formFields: [
            { key: 'title', label: '标题', required: true },
            { key: 'type', label: '类型', type: 'select', options: ['INTRO', 'HISTORY', 'COURSE', 'NEWS'], required: true },
            { key: 'status', label: '状态', type: 'select', options: ['PUBLISHED', 'DRAFT'] },
            { key: 'author', label: '作者' },
            { key: 'coverImage', label: '封面图URL' },
            { key: 'externalLink', label: '外部链接' },
            { key: 'content', label: '内容', type: 'textarea', required: true }
        ]
    },
    relics: {
        label: '文物',
        listUrl: '/admin/articles', // fake, use real
        get listUrlReal() { return '/relics'; },
        createUrl: '/relics',
        updateUrl: id => `/relics/${id}`,
        deleteUrl: id => `/relics/${id}`,
        listFn: async () => { const r = await api.get('/relics?page=1&size=999'); return r; },
        fields: [
            { key: 'id', label: 'ID', width: 60 },
            { key: 'name', label: '名称' },
            { key: 'era', label: '年代', width: 100 },
            { key: 'category', label: '分类', width: 80 },
            { key: 'description', label: '描述', render: v => `<span class="cell-truncate">${esc(v || '')}</span>` },
            { key: 'createdAt', label: '创建时间', width: 160, render: v => v ? new Date(v).toLocaleString() : '-' }
        ],
        formFields: [
            { key: 'name', label: '名称', required: true },
            { key: 'era', label: '年代' },
            { key: 'category', label: '分类' },
            { key: 'description', label: '描述', type: 'textarea' },
            { key: 'imageUrl', label: '图片URL' },
            { key: 'modelUrl', label: '3D模型URL' },
            { key: 'externalLink', label: '外部链接' }
        ]
    },
    courses: {
        label: '课程',
        listUrl: '/admin/courses',
        createUrl: '/courses',
        updateUrl: id => `/courses/${id}`,
        deleteUrl: id => `/courses/${id}`,
        fields: [
            { key: 'id', label: 'ID', width: 60 },
            { key: 'title', label: '标题', render: v => `<span class="cell-truncate">${esc(v)}</span>` },
            { key: 'status', label: '状态', width: 70 },
            { key: 'price', label: '价格', width: 80, render: v => v ? '¥' + v : '-' },
            { key: 'maxCapacity', label: '容量', width: 60 },
            { key: 'currentReserved', label: '已预约', width: 60 },
            { key: 'createdAt', label: '创建时间', width: 160, render: v => v ? new Date(v).toLocaleString() : '-' }
        ],
        formFields: [
            { key: 'title', label: '标题', required: true },
            { key: 'status', label: '状态', type: 'select', options: ['ACTIVE', 'INACTIVE'] },
            { key: 'price', label: '价格', type: 'number' },
            { key: 'maxCapacity', label: '最大容量', type: 'number' },
            { key: 'coverImage', label: '封面图URL' },
            { key: 'description', label: '简介', type: 'textarea' },
            { key: 'content', label: '详情', type: 'textarea' },
            { key: 'scheduleInfo', label: '课程安排(JSON)', type: 'textarea' }
        ]
    },
    reservations: {
        label: '预约',
        listUrl: '/reservations',
        createUrl: '/reservations',
        updateUrl: id => `/reservations/${id}`,
        deleteUrl: id => `/reservations/${id}`,
        listFn: async () => { const r = await api.get('/reservations?page=1&size=999'); return r; },
        fields: [
            { key: 'id', label: 'ID', width: 60 },
            { key: 'contactName', label: '联系人', width: 80 },
            { key: 'contactPhone', label: '电话', width: 120 },
            { key: 'type', label: '类型', width: 70 },
            { key: 'visitDate', label: '参观日期', width: 100 },
            { key: 'visitorCount', label: '人数', width: 50 },
            { key: 'status', label: '状态', width: 80 },
            { key: 'createdAt', label: '创建时间', width: 160, render: v => v ? new Date(v).toLocaleString() : '-' }
        ],
        formFields: [
            { key: 'userId', label: '用户ID', type: 'number', required: true },
            { key: 'type', label: '类型', type: 'select', options: ['INDIVIDUAL', 'GROUP'] },
            { key: 'status', label: '状态', type: 'select', options: ['PENDING', 'CONFIRMED', 'CANCELLED'] },
            { key: 'visitDate', label: '参观日期', type: 'date' },
            { key: 'visitorCount', label: '参观人数', type: 'number' },
            { key: 'contactName', label: '联系人姓名' },
            { key: 'contactPhone', label: '联系人电话' },
            { key: 'remarks', label: '备注', type: 'textarea' }
        ]
    }
};

function esc(s) {
    if (s == null) return '';
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ==================== 页面渲染 ====================
const app = {
    currentPage: 'dashboard',
    async render() {
        const loggedIn = await auth.check();
        if (!loggedIn) {
            this.renderLogin();
            return;
        }
        this.renderAdmin();
    },

    renderLogin() {
        document.getElementById('app').innerHTML = `
            <div class="login-page">
                <div class="login-box">
                    <div class="login-title">登州博物馆</div>
                    <div class="login-subtitle">后台管理系统</div>
                    <div class="login-error" id="login-error"></div>
                    <div class="form-group">
                        <label>用户名</label>
                        <input type="text" id="login-user" placeholder="admin" autocomplete="username">
                    </div>
                    <div class="form-group">
                        <label>密码</label>
                        <input type="password" id="login-pass" placeholder="密码" autocomplete="current-password">
                    </div>
                    <button class="btn-primary" id="login-btn">登 录</button>
                </div>
            </div>`;
        document.getElementById('login-btn').onclick = () => this.handleLogin();
        document.getElementById('login-pass').onkeydown = e => { if (e.key === 'Enter') this.handleLogin(); };
        document.getElementById('login-user').onkeydown = e => { if (e.key === 'Enter') document.getElementById('login-pass').focus(); };
        document.getElementById('login-user').focus();
    },

    async handleLogin() {
        const user = document.getElementById('login-user').value.trim();
        const pass = document.getElementById('login-pass').value;
        const errEl = document.getElementById('login-error');
        const btn = document.getElementById('login-btn');
        if (!user || !pass) { errEl.textContent = '请输入用户名和密码'; return; }
        btn.disabled = true; btn.textContent = '登录中...';
        const ok = await auth.login(user, pass);
        if (!ok) {
            errEl.textContent = '用户名或密码错误';
            btn.disabled = false; btn.textContent = '登 录';
        }
    },

    renderAdmin() {
        const hash = location.hash.slice(1) || 'dashboard';
        this.currentPage = hash;
        document.getElementById('app').innerHTML = `
            <div class="admin-layout">
                <aside class="sidebar">
                    <div class="sidebar-header">
                        <h1>登州博物馆</h1>
                        <p>后台管理</p>
                    </div>
                    <ul class="sidebar-nav">
                        <li class="nav-item ${hash === 'dashboard' ? 'active' : ''}" data-page="dashboard">
                            <span class="icon">&#9783;</span><span>控制台</span>
                        </li>
                        <li class="nav-item ${hash === 'users' ? 'active' : ''}" data-page="users">
                            <span class="icon">&#9787;</span><span>用户管理</span>
                        </li>
                        <li class="nav-item ${hash === 'articles' ? 'active' : ''}" data-page="articles">
                            <span class="icon">&#9998;</span><span>文章管理</span>
                        </li>
                        <li class="nav-item ${hash === 'relics' ? 'active' : ''}" data-page="relics">
                            <span class="icon">&#9733;</span><span>文物管理</span>
                        </li>
                        <li class="nav-item ${hash === 'courses' ? 'active' : ''}" data-page="courses">
                            <span class="icon">&#9776;</span><span>课程管理</span>
                        </li>
                        <li class="nav-item ${hash === 'reservations' ? 'active' : ''}" data-page="reservations">
                            <span class="icon">&#9992;</span><span>预约管理</span>
                        </li>
                    </ul>
                    <div class="sidebar-footer">
                        <span>管理员</span>
                        <button class="logout-btn" id="logout-btn">退出</button>
                    </div>
                </aside>
                <main class="main-area" id="main-area">
                    <div class="loading"><div class="spinner"></div></div>
                </main>
            </div>`;

        document.querySelectorAll('.nav-item').forEach(el => {
            el.onclick = () => { location.hash = el.dataset.page; };
        });
        document.getElementById('logout-btn').onclick = () => auth.logout();

        this.renderPage(hash);
    },

    async renderPage(page) {
        const main = document.getElementById('main-area');
        if (!main) return;
        switch (page) {
            case 'dashboard': await this.renderDashboard(main); break;
            case 'users': await this.renderEntityList(main, 'users'); break;
            case 'articles': await this.renderEntityList(main, 'articles'); break;
            case 'relics': await this.renderRelicGrid(main); break;
            case 'courses': await this.renderEntityList(main, 'courses'); break;
            case 'reservations': await this.renderEntityList(main, 'reservations'); break;
        }
    },

    async renderDashboard(main) {
        main.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
        const r = await api.get('/admin/stats');
        if (!r.success) { main.innerHTML = '<p>加载失败</p>'; return; }
        const stats = r.data;
        main.innerHTML = `
            <div class="page-header">
                <h2>控制台</h2>
                <p>系统数据概览</p>
            </div>
            <div class="stats-grid">
                ${Object.entries(stats).map(([k, v]) => `
                    <div class="stat-card" data-page="${k}" style="cursor:pointer">
                        <div class="stat-value">${v}</div>
                        <div class="stat-label">${ENTITY_CONFIG[k] ? ENTITY_CONFIG[k].label : k}</div>
                    </div>`).join('')}
            </div>`;
        main.querySelectorAll('.stat-card').forEach(el => {
            el.onclick = () => { location.hash = el.dataset.page; };
        });
    },

    async renderEntityList(main, entity) {
        const cfg = ENTITY_CONFIG[entity];
        if (!cfg) return;
        main.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
        const r = await (cfg.listFn ? cfg.listFn() : api.get(cfg.listUrl));
        if (!r.success) { main.innerHTML = '<p>加载失败: ' + esc(r.message) + '</p>'; return; }
        const list = Array.isArray(r.data) ? r.data : (r.data.list || []);
        main.innerHTML = `
            <div class="page-header">
                <h2>${cfg.label}管理</h2>
                <p>共 ${list.length} 条记录</p>
            </div>
            <div class="table-toolbar">
                <div class="left"></div>
                <div class="right">
                    <button class="btn btn-accent" id="create-btn">+ 新建${cfg.label}</button>
                </div>
            </div>
            <table class="data-table">
                <thead><tr>
                    ${cfg.fields.map(f => `<th${f.width ? ' style="width:' + f.width + 'px"' : ''}>${f.label}</th>`).join('')}
                    <th style="width:100px">操作</th>
                </tr></thead>
                <tbody>
                    ${list.length === 0 ? '<tr><td colspan="99" class="empty">暂无数据</td></tr>' :
                    list.map(item => `<tr>
                        ${cfg.fields.map(f => `<td>${f.render ? f.render(item[f.key]) : esc(item[f.key] ?? '-')}</td>`).join('')}
                        <td><div class="actions">
                            <button class="btn btn-sm edit-btn" data-id="${item.id}">编辑</button>
                            <button class="btn btn-sm btn-danger delete-btn" data-id="${item.id}">删除</button>
                        </div></td>
                    </tr>`).join('')}
                </tbody>
            </table>`;
        main.querySelector('#create-btn').onclick = () => this.showForm(entity, null);
        main.querySelectorAll('.edit-btn').forEach(el => {
            el.onclick = () => this.showForm(entity, parseInt(el.dataset.id));
        });
        main.querySelectorAll('.delete-btn').forEach(el => {
            el.onclick = async () => {
                const id = parseInt(el.dataset.id);
                const ok = await confirmDialog('确认删除此记录？');
                if (!ok) return;
                const rr = await api.del(cfg.deleteUrl(id));
                if (rr.success) { toast('删除成功'); this.renderEntityList(main, entity); }
                else toast(rr.message || '删除失败', 'error');
            };
        });
    },

    async renderRelicGrid(main) {
        main.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
        const r = await api.get('/relics?page=1&size=999');
        if (!r.success) { main.innerHTML = '<p>加载失败: ' + esc(r.message) + '</p>'; return; }
        const list = r.data.list || [];
        main.innerHTML = `
            <div class="page-header">
                <h2>文物管理</h2>
                <p>共 ${list.length} 件文物</p>
            </div>
            <div class="table-toolbar">
                <div class="left"></div>
                <div class="right">
                    <button class="btn btn-accent" id="create-btn">+ 新建文物</button>
                </div>
            </div>
            <div class="relic-grid-admin">
                ${list.length === 0 ? '<div class="relic-grid-empty">暂无文物</div>' :
                list.map(item => `
                    <div class="relic-card-admin" data-id="${item.id}">
                        <div class="relic-card-img">
                            ${item.imageUrl
                                ? `<img src="${esc(item.imageUrl)}" alt="${esc(item.name)}" loading="lazy">`
                                : `<div class="relic-card-placeholder">${esc(item.name[0] || '?')}</div>`}
                        </div>
                        <div class="relic-card-body">
                            <div class="relic-card-name">${esc(item.name)}</div>
                            <div class="relic-card-meta">${[item.era, item.category].filter(Boolean).join(' · ') || '未分类'}</div>
                        </div>
                        <div class="relic-card-actions">
                            <button class="btn btn-sm edit-btn" data-id="${item.id}">编辑</button>
                            <button class="btn btn-sm btn-danger delete-btn" data-id="${item.id}">删除</button>
                        </div>
                    </div>`).join('')}
            </div>`;
        main.querySelector('#create-btn').onclick = () => this.showForm('relics', null);
        main.querySelectorAll('.relic-card-admin').forEach(el => {
            el.onclick = () => {
                const id = parseInt(el.dataset.id);
                const item = list.find(x => x.id === id);
                if (item) this.showRelicDetail(item);
            };
        });
        main.querySelectorAll('.edit-btn').forEach(el => {
            el.onclick = e => { e.stopPropagation(); this.showForm('relics', parseInt(el.dataset.id)); };
        });
        main.querySelectorAll('.delete-btn').forEach(el => {
            el.onclick = async e => {
                e.stopPropagation();
                const id = parseInt(el.dataset.id);
                const ok = await confirmDialog('确认删除此文物？');
                if (!ok) return;
                const rr = await api.del(`/relics/${id}`);
                if (rr.success) { toast('删除成功'); this.renderRelicGrid(main); }
                else toast(rr.message || '删除失败', 'error');
            };
        });
    },

    showRelicDetail(item) {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `<div class="modal-box modal-lg">
            <div class="modal-header">
                <h3>${esc(item.name)}</h3>
                <button class="modal-close" id="detail-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="relic-detail-layout">
                    <div class="relic-detail-image">
                        ${item.imageUrl
                            ? `<img src="${esc(item.imageUrl)}" alt="${esc(item.name)}">`
                            : `<div class="relic-detail-placeholder">${esc(item.name[0] || '?')}</div>`}
                    </div>
                    <div class="relic-detail-info">
                        <table class="relic-detail-table">
                            <tr><th>ID</th><td>${item.id}</td></tr>
                            <tr><th>名称</th><td>${esc(item.name)}</td></tr>
                            <tr><th>年代</th><td>${esc(item.era || '-')}</td></tr>
                            <tr><th>分类</th><td>${esc(item.category || '-')}</td></tr>
                            <tr><th>描述</th><td style="white-space:pre-wrap">${esc(item.description || '暂无描述')}</td></tr>
                            ${item.imageUrl ? `<tr><th>图片</th><td><a href="${esc(item.imageUrl)}" target="_blank">查看原图</a></td></tr>` : ''}
                            ${item.modelUrl ? `<tr><th>3D模型</th><td><a href="${esc(item.modelUrl)}" target="_blank">${esc(item.modelUrl)}</a></td></tr>` : ''}
                            ${item.externalLink ? `<tr><th>外部链接</th><td><a href="${esc(item.externalLink)}" target="_blank">查看详情</a></td></tr>` : ''}
                            <tr><th>创建时间</th><td>${item.createdAt ? new Date(item.createdAt).toLocaleString() : '-'}</tr>
                            <tr><th>更新时间</th><td>${item.updatedAt ? new Date(item.updatedAt).toLocaleString() : '-'}</tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn" id="detail-close-btn">关闭</button>
            </div>
        </div>`;
        document.body.appendChild(overlay);
        const close = () => overlay.remove();
        overlay.querySelector('#detail-close').onclick = close;
        overlay.querySelector('#detail-close-btn').onclick = close;
        overlay.onclick = e => { if (e.target === overlay) close(); };
    },

    async showForm(entity, id) {
        const cfg = ENTITY_CONFIG[entity];
        if (!cfg) return;
        let item = {};
        if (id) {
            let items = [];
            if (cfg.listFn) {
                const r = await cfg.listFn();
                if (r.success) items = Array.isArray(r.data) ? r.data : (r.data.list || []);
            } else {
                const r = await api.get(cfg.listUrl + (cfg.listUrl.includes('?') ? '&' : '?') + '_=' + Date.now());
                if (r.success) items = Array.isArray(r.data) ? r.data : (r.data.list || []);
            }
            item = items.find(x => x.id === id) || {};
        }
        const isEdit = !!id;
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `<div class="modal-box ${cfg.formFields.length > 6 ? 'modal-lg' : ''}">
            <div class="modal-header">
                <h3>${isEdit ? '编辑' : '新建'}${cfg.label}</h3>
                <button class="modal-close" id="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                ${cfg.formFields.map(f => {
                    const val = item[f.key] ?? '';
                    if (f.type === 'select') {
                        const opts = f.options.map(o => `<option value="${o}" ${val === o ? 'selected' : ''}>${o}</option>`).join('');
                        return `<div class="form-group"><label>${f.label}${f.required ? ' *' : ''}</label>
                            <select id="field-${f.key}">${opts}</select></div>`;
                    }
                    if (f.type === 'textarea') {
                        return `<div class="form-group"><label>${f.label}${f.required ? ' *' : ''}</label>
                            <textarea id="field-${f.key}">${esc(val)}</textarea></div>`;
                    }
                    const inputType = f.type || 'text';
                    return `<div class="form-group"><label>${f.label}${f.required ? ' *' : ''}</label>
                        <input type="${inputType}" id="field-${f.key}" value="${esc(val)}" ${f.required && !isEdit ? 'required' : ''}>
                        ${f.hint ? `<small style="color:#999;font-size:11px">${f.hint}</small>` : ''}</div>`;
                }).join('')}
            </div>
            <div class="modal-footer">
                <button class="btn" id="form-cancel">取消</button>
                <button class="btn btn-accent" id="form-save">${isEdit ? '保存修改' : '创建'}</button>
            </div>
        </div>`;
        document.body.appendChild(overlay);
        overlay.querySelector('#modal-close').onclick = () => overlay.remove();
        overlay.querySelector('#form-cancel').onclick = () => overlay.remove();
        overlay.onclick = e => { if (e.target === overlay) overlay.remove(); };
        overlay.querySelector('#form-save').onclick = async () => {
            const data = {};
            for (const f of cfg.formFields) {
                const el = document.getElementById('field-' + f.key);
                if (el) data[f.key] = el.value;
            }
            if (!isEdit && entity === 'users' && !data.password) {
                toast('密码不能为空', 'error'); return;
            }
            const r = isEdit
                ? await api.put(cfg.updateUrl(id), data)
                : await api.post(cfg.createUrl, data);
            if (r.success) {
                overlay.remove();
                toast(isEdit ? '更新成功' : '创建成功');
                this.renderEntityList(document.getElementById('main-area'), entity);
            } else {
                toast(r.message || '操作失败', 'error');
            }
        };
    }
};

// ==================== 路由 ====================
window.onhashchange = () => { if (api.token) app.render(); };
app.render();
