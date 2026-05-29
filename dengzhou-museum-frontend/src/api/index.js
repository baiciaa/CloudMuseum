/**
 * CloudMuseum API 客户端
 *
 * - 开发环境: Vite proxy 转发 /api -> localhost:8081
 * - 生产环境: 同域或 Nginx 反向代理
 * - 所有接口返回 ApiResponse<T>，通过 .data 取业务数据
 */

const BASE = '/api';

// ==================== 通用请求方法 ====================

async function request(method, path, body, signal) {
  const opts = {
    method,
    headers: { 'Content-Type': 'application/json' },
  };
  if (body) opts.body = JSON.stringify(body);
  if (signal) opts.signal = signal;

  try {
    const res = await fetch(`${BASE}${path}`, opts);
    const json = await res.json();
    return json;
  } catch (err) {
    if (err.name === 'AbortError') throw err;
    console.error(`[API] ${method} ${path} 失败:`, err);
    return { success: false, message: err.message };
  }
}

async function get(path) {
  return request('GET', path);
}

function uploadFile(file, dir = 'images') {
  const form = new FormData();
  form.append('file', file);
  form.append('dir', dir);
  return fetch(`${BASE}/files/upload`, { method: 'POST', body: form }).then(r => r.json());
}

// ==================== 文章 API ====================

export const articleApi = {
  list(type, page = 1, size = 10) {
    let query = `/articles?page=${page}&size=${size}`;
    if (type) query += `&type=${type}`;
    return get(query);
  },

  getById(id) {
    return get(`/articles/${id}`);
  },

  create(data) {
    return request('POST', '/articles', data);
  },

  update(id, data) {
    return request('PUT', `/articles/${id}`, data);
  },

  delete(id) {
    return request('DELETE', `/articles/${id}`);
  },
};

// ==================== 文物 API ====================

export const relicApi = {
  list(era, category, page = 1, size = 20) {
    let query = `/relics?page=${page}&size=${size}`;
    if (era) query += `&era=${encodeURIComponent(era)}`;
    if (category) query += `&category=${encodeURIComponent(category)}`;
    return get(query);
  },

  getById(id) {
    return get(`/relics/${id}`);
  },

  create(data) {
    return request('POST', '/relics', data);
  },

  update(id, data) {
    return request('PUT', `/relics/${id}`, data);
  },

  delete(id) {
    return request('DELETE', `/relics/${id}`);
  },
};

// ==================== 课程 API ====================

export const courseApi = {
  list(status = '') {
    let query = '/courses';
    if (status) query += `?status=${status}`;
    return get(query);
  },

  getById(id) {
    return get(`/courses/${id}`);
  },
};

// ==================== 预约 API ====================

export const reservationApi = {
  list(userId, status, courseId, page = 1, size = 10) {
    let query = `/reservations?page=${page}&size=${size}`;
    if (userId) query += `&userId=${userId}`;
    if (status) query += `&status=${status}`;
    if (courseId) query += `&courseId=${courseId}`;
    return get(query);
  },

  getById(id) {
    return get(`/reservations/${id}`);
  },

  create(data) {
    return request('POST', '/reservations', data);
  },

  updateStatus(id, status) {
    return request('PUT', `/reservations/${id}/status`, { status });
  },

  update(id, data) {
    return request('PUT', `/reservations/${id}`, data);
  },

  delete(id) {
    return request('DELETE', `/reservations/${id}`);
  },
};

// ==================== 用户 API ====================

export const userApi = {
  list() {
    return get('/users');
  },

  getById(id) {
    return get(`/users/${id}`);
  },

  create(data) {
    return request('POST', '/users', data);
  },

  update(id, data) {
    return request('PUT', `/users/${id}`, data);
  },

  delete(id) {
    return request('DELETE', `/users/${id}`);
  },
};

// ==================== 资讯公告 API ====================

export const announcementApi = {
  list(type, page = 1, size = 10) {
    let query = `/announcements?page=${page}&size=${size}`;
    if (type) query += `&type=${type}`;
    return request('GET', query);
  },

  getById(id) {
    return request('GET', `/announcements/${id}`);
  },

  create(data) {
    return request('POST', '/announcements', data);
  },

  update(id, data) {
    return request('PUT', `/announcements/${id}`, data);
  },

  delete(id) {
    return request('DELETE', `/announcements/${id}`);
  },
};

// ==================== 天气 API ====================

export const weatherApi = {
  get(city) {
    return get(`/weather?city=${encodeURIComponent(city)}`);
  },
};

// ==================== 旅行建议 API ====================

export const travelApi = {
  getAdvice(city, date = '', interests = '') {
    return request('POST', '/travel/advice', { city, date, interests });
  },
};

// ==================== AI 对话 API ====================

export const chatApi = {
  ask(question, signal) {
    return request('POST', '/chat/ask', { question }, signal);
  },
};

// ==================== 语音识别 API ====================

export const voiceApi = {
  recognize(audioFile) {
    const form = new FormData();
    form.append('audio', audioFile);
    return fetch(`${BASE}/voice/recognize`, { method: 'POST', body: form }).then(r => r.json());
  },
};

// ==================== 文件上传 ====================

export { uploadFile };

export default {
  article: articleApi,
  relic: relicApi,
  course: courseApi,
  reservation: reservationApi,
  user: userApi,
  weather: weatherApi,
  travel: travelApi,
  chat: chatApi,
  voice: voiceApi,
  announcement: announcementApi,
  uploadFile,
};
