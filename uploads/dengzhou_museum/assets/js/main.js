/**
 * main.js — 主导航与页面切换交互 + 漫游入口
 */

// ==================== 导航系统 ====================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
});

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const sectionId = item.getAttribute('data-section');

            // 更新导航激活状态
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // 滚动到目标区域
            scrollToSection(sectionId);
        });

        // 导航hover动画
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(8px)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });
}

function scrollToSection(sectionId) {
    const target = document.getElementById(`section-${sectionId}`);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ==================== 滚动监听：自动更新导航激活项 ====================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-item');
    let current = 'home';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
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

// ==================== 漫游入口 ====================
function enterMuseumTour() {
    window.location.href = 'tour.html';
}
// ==================== 动态内容加载 ====================

/**
 * 加载历史背景文章
 */
async function loadHistoryContent() {
    const articles = await getArticlesByType('HISTORY');
    const grid = document.getElementById('history-grid');

    if (!grid) return;

    if (articles.length === 0) {
        grid.innerHTML = '<p style="color:var(--text-secondary);">暂无历史内容</p>';
        return;
    }

    grid.innerHTML = articles.map((article, index) => {
        const excerpt = article.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
        return `
        <div class="timeline-item fade-in-up delay-${index + 1}">
            <div class="timeline-marker">
                <div class="timeline-dot"></div>
                ${index < articles.length - 1 ? '<div class="timeline-line"></div>' : ''}
            </div>
            <div class="timeline-content">
                <h3 class="timeline-title">${article.title}</h3>
                <p class="timeline-excerpt">${excerpt}</p>
                <button class="timeline-more" onclick="showHistoryDetail(${article.id})">阅读更多 →</button>
            </div>
        </div>
        `;
    }).join('');
}

function showHistoryDetail(id) {
    getArticleById(id).then(article => {
        if (!article) return;
        const overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:2000;display:flex;align-items:center;justify-content:center;';
        overlay.innerHTML = `
        <div style="background:var(--bg-main);max-width:800px;width:90%;max-height:85vh;overflow-y:auto;border-radius:4px;padding:40px;position:relative;border:1px solid var(--border-subtle);">
            <button onclick="this.closest('div').parentElement.remove()" style="position:absolute;top:16px;right:16px;background:none;border:1px solid var(--border-subtle);color:var(--text-secondary);font-size:20px;cursor:pointer;width:36px;height:36px;">&times;</button>
            <h2 style="font-family:var(--font-display); color:var(--gold); letter-spacing:2px; margin-bottom:20px;">${article.title}</h2>
            <div style="line-height:2; color:var(--text-primary); white-space:pre-wrap;">${article.content.replace(/<[^>]*>/g, '')}</div>
        </div>
        `;
        overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
        document.body.appendChild(overlay);
    });
}

/**
 * 加载重点文物
 */
async function loadRelics() {
    const data = await getRelics('', '', 1, 8);
    const grid = document.getElementById('relic-grid');

    if (!grid) return;

    const relics = data ? data.list : [];

    if (relics.length === 0) {
        grid.innerHTML = '<p style="color:var(--text-secondary); grid-column:1/-1;">暂无文物数据</p>';
        return;
    }

    // 渲染文物卡片
    grid.innerHTML = relics.map(relic => `
        <div class="relic-card fade-in-up" onclick="showRelicDetail(${relic.id})">
            <div class="card-img" style="background-image:url('${API_BASE}${relic.imageUrl || ''}'); background-size:cover; background-position:center;">
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

/**
 * 显示文物详情（可以后续做弹窗）
 */
function showRelicDetail(id) {
    // TODO: 弹出文物详情模态窗，调用 getRelicById(id)
    alert(`查看文物 ID: ${id} 的详情（待实现弹窗）`);
}

// 页面加载时自动执行
document.addEventListener('DOMContentLoaded', () => {
    loadHistoryContent();
    loadRelics();
});