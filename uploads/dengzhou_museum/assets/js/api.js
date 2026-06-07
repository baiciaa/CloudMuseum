const API_BASE = 'http://26.210.211.230:8081';
// ==================== 地理位置获取 ====================
function getUserLocation() {
    return new Promise((resolve) => {
        if (!navigator.geolocation) {
            resolve({ city: '烟台', adcode: '370600' }); // 默认蓬莱所在城市
            return;
        }
        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                // 实际应调用高德逆地理编码获取城市名和adcode
                resolve({ city: '烟台', adcode: '370600' });
            },
            () => resolve({ city: '烟台', adcode: '370600' })
        );
    });
}

// ==================== 天气API（高德地图） ====================
async function fetchWeather(adcode) {
    try {
        // 高德天气API免费版：30万次/日，200次/秒并发
        // 支持实时天气 + 未来4天预报（气温、风力风向、湿度）
        const API_KEY = '352f017239de4d4c42d318127d1c75f0'; // ⚠️ 替换为高德Key
        const url = `https://restapi.amap.com/v3/weather/weatherInfo?city=${adcode}&key=${API_KEY}&extensions=all`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.status === '1' && data.forecasts?.length > 0) {
            return {
                city: data.forecasts[0].city,
                current: data.forecasts[0].casts[0],    // 今日天气
                forecast: data.forecasts[0].casts       // 未来4天
            };
        }
        return null;
    } catch (error) {
        console.error('天气获取失败:', error);
        return null;
    }
}

// ==================== 人流量估算 ====================
function estimateCrowdLevel(date) {
    // 生产环境可接入景区实时人流量API
    // 此处基于日期做简单预估
    const day = new Date(date).getDay();
    const month = new Date(date).getMonth() + 1;

    if (month >= 5 && month <= 10) {
        // 旺季（5-10月）
        return day === 0 || day === 6 ? '高' : '中';
    }
    // 淡季
    return day === 0 || day === 6 ? '中' : '低';
}

// ==================== AI攻略生成 ====================
async function generateTourPlan() {
    // 1. 收集多维信息
    const location = await getUserLocation();
    const weather = await fetchWeather(location.adcode);
    const crowdLevel = estimateCrowdLevel(new Date().toISOString().split('T')[0]);

    // 2. 更新UI面板
    document.getElementById('user-location').textContent = location.city;
    if (weather) {
        const today = weather.current;
        document.getElementById('weather-info').innerHTML =
            `${today.dayweather} ${today.nighttemp}°~${today.daytemp}°<br>
             <small>${today.winddir}风 ${today.windpower}级</small>`;
    }
    document.getElementById('crowd-info').textContent =
        `预计人流量：${crowdLevel}`;

    // 3. 构造AI提示词
    const prompt = `
      请为以下条件生成一份登州博物馆研学旅行攻略：
      - 用户所在城市：${location.city}
      - 今日天气：${weather?.current?.dayweather}, 温度${weather?.current?.nighttemp}°~${weather?.current?.daytemp}°
      - 预计人流量：${crowdLevel}
      - 目标受众：中小学研学团体
      - 博物馆开放时间：5-10月9:00-18:00（17:30停止入馆），11-4月9:00-17:00（16:30停止入馆），每周一闭馆
      - 门票：免费（凭身份证入馆）

      请包含：出行建议、参观路线、重点展厅推荐、研学活动建议、周边景点联游。
    `;

    // 4. 调用AI API（此处以LLM API为例，实际需替换为你的API）
    try {
        // ⚠️ 生产环境应通过后端代理调用，此处仅作演示
        const response = await fetch(`${API_BASE}/api/chat/ask`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.7
            })
        });

        const data = await response.json();
        const planText = data.choices?.[0]?.message?.content || '攻略生成中，请稍候...';

        // 5. 渲染结果
        const resultContainer = document.getElementById('ai-result');
        const resultContent = document.getElementById('ai-result-content');
        resultContainer.style.display = 'block';
        resultContent.innerHTML = planText.replace(/\n/g, '<br>');

        // 滚动到结果区域
        resultContainer.scrollIntoView({ behavior: 'smooth' });

    } catch (error) {
        console.error('AI攻略生成失败:', error);
        // 降级方案：显示预设攻略
        const fallbackPlan = getFallbackPlan(location.city, weather, crowdLevel);
        document.getElementById('ai-result').style.display = 'block';
        document.getElementById('ai-result-content').innerHTML = fallbackPlan;
    }
}

// ==================== 降级攻略（无API时） ====================
function getFallbackPlan(city, weather, crowdLevel) {
    return `
      <strong>【出行建议】</strong><br>
      ─────────────────<br>
      今日${weather?.current?.dayweather || '晴'}，建议携带防晒用品。
      人流量${crowdLevel}级别${
        crowdLevel === '高' ? '，建议错峰出行，选择上午9:00入馆' : '，游览体验佳'
      }。<br><br>

      <strong>【推荐参观路线】</strong><br>
      ─────────────────<br>
      序厅(15min) → 古城遗韵厅(20min) → 千年古港厅(25min) →<br>
      海防重镇厅(20min) → 文物精华厅(30min) → 名人故里厅(15min)<br>
      全程约2小时，适合中小学研学节奏。<br><br>

      <strong>【研学活动建议】</strong><br>
      ─────────────────<br>
      ① 古港寻宝：在千年古港厅寻找海上丝路相关文物<br>
      ② 兵器进化史：在海防重镇厅对比不同朝代兵器<br>
      ③ 画像石临摹：在文物精华厅临摹汉代画像石图案<br><br>

      <strong>【周边联游】</strong><br>
      ─────────────────<br>
      蓬莱阁(步行5分钟) → 蓬莱水城(步行3分钟) →<br>
      戚继光纪念馆(步行10分钟) → 田横山公园(步行8分钟)
    `;
}

// ==================== 页面加载时获取天气 ====================
document.addEventListener('DOMContentLoaded', async () => {
    const location = await getUserLocation();
    const weather = await fetchWeather(location.adcode);
    if (weather) {
        document.getElementById('user-location').textContent = location.city;
        const today = weather.current;
        document.getElementById('weather-info').innerHTML =
            `${today.dayweather} ${today.nighttemp}°~${today.daytemp}°`;
        document.getElementById('crowd-info').textContent =
            `预计人流量：${estimateCrowdLevel(new Date().toISOString().split('T')[0])}`;
    }
});
// ==================== 后端 API 基础配置 ====================


/**
 * 通用 GET 请求
 */
async function apiGet(path) {
    try {
        const response = await fetch(`${API_BASE}${path}`);
        const result = await response.json();
        if (result.success) {
            return result.data;
        }
        console.error('API 请求失败:', result.message);
        return null;
    } catch (error) {
        console.error('网络请求失败:', error);
        return null;
    }
}

/**
 * 通用 POST 请求
 */
async function apiPost(path, body) {
    try {
        const response = await fetch(`${API_BASE}${path}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('网络请求失败:', error);
        return { success: false, message: error.message };
    }
}

/**
 * 通用 PUT 请求
 */
async function apiPut(path, body) {
    try {
        const response = await fetch(`${API_BASE}${path}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('网络请求失败:', error);
        return { success: false, message: error.message };
    }
}

/**
 * 通用 DELETE 请求
 */
async function apiDelete(path) {
    try {
        const response = await fetch(`${API_BASE}${path}`, { method: 'DELETE' });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('网络请求失败:', error);
        return { success: false, message: error.message };
    }
}

// ==================== 文章相关 API ====================

/**
 * 获取指定类型的文章（用于首页动态渲染）
 * @param {string} type - INTRO / HISTORY / COURSE / NEWS
 */
async function getArticlesByType(type) {
    const data = await apiGet(`/api/articles?type=${type}&page=1&size=5`);
    return data ? data.list : [];
}

/**
 * 获取所有文章（管理后台用）
 */
async function getAllArticles(page = 1, size = 20) {
    return await apiGet(`/api/articles?page=${page}&size=${size}`);
}

/**
 * 获取文章详情
 */
async function getArticleById(id) {
    return await apiGet(`/api/articles/${id}`);
}

/**
 * 创建文章
 */
async function createArticle(articleData) {
    return await apiPost('/api/articles', articleData);
}

/**
 * 更新文章
 */
async function updateArticle(id, articleData) {
    return await apiPut(`/api/articles/${id}`, articleData);
}

/**
 * 删除文章
 */
async function deleteArticle(id) {
    return await apiDelete(`/api/articles/${id}`);
}

// ==================== 文物相关 API ====================

/**
 * 获取文物列表（用于首页动态渲染）
 */
async function getRelics(era = '', category = '', page = 1, size = 20) {
    let query = `/api/relics?page=${page}&size=${size}`;
    if (era) query += `&era=${encodeURIComponent(era)}`;
    if (category) query += `&category=${encodeURIComponent(category)}`;
    return await apiGet(query);
}

/**
 * 获取文物详情
 */
async function getRelicById(id) {
    return await apiGet(`/api/relics/${id}`);
}

/**
 * 创建文物
 */
async function createRelic(relicData) {
    return await apiPost('/api/relics', relicData);
}

/**
 * 更新文物
 */
async function updateRelic(id, relicData) {
    return await apiPut(`/api/relics/${id}`, relicData);
}

/**
 * 删除文物
 */
async function deleteRelic(id) {
    return await apiDelete(`/api/relics/${id}`);
}

// ==================== 研学课程 API ====================

/**
 * 获取课程列表
 */
async function getCourses(status = '') {
    let query = '/api/courses';
    if (status) query += `?status=${status}`;
    return await apiGet(query);
}

/**
 * 获取课程详情
 */
async function getCourseById(id) {
    return await apiGet(`/api/courses/${id}`);
}

// ==================== 预约 API ====================

/**
 * 创建预约
 */
async function createReservation(reservationData) {
    return await apiPost('/api/reservations', reservationData);
}

/**
 * 查询用户预约
 */
async function getUserReservations(userId) {
    return await apiGet(`/api/reservations?userId=${userId}`);
}

// ==================== 旅行建议 API ====================

/**
 * 获取 AI 旅行建议（替代之前的天气+攻略逻辑）
 */
async function getTravelAdvice(city, date = '', interests = '') {
    const body = { city };
    if (date) body.date = date;
    if (interests) body.interests = interests;
    return await apiPost('/api/travel/advice', body);
}

// ==================== 文件上传 API ====================

/**
 * 上传文件
 * @param {File} file - 文件对象
 * @param {string} dir - 子目录（images / unity）
 */
async function uploadFile(file, dir = 'images') {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('dir', dir);

    try {
        const response = await fetch(`${API_BASE}/api/files/upload`, {
            method: 'POST',
            body: formData
        });
        return await response.json();
    } catch (error) {
        console.error('文件上传失败:', error);
        return { success: false, message: error.message };
    }
}