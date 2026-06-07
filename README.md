<div align="center">

# 🏛️ CloudMuseum 云端漫游

**登州博物馆 · 数字展示平台**

[![Spring Boot](https://img.shields.io/badge/Spring_Boot-4.0.6-6DB33F?logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Java](https://img.shields.io/badge/Java-17-ED8B00?logo=java&logoColor=white)]()
[![MyBatis](https://img.shields.io/badge/MyBatis-4.0.1-000000?logo=mybatis&logoColor=white)]()
[![MySQL](https://img.shields.io/badge/MySQL-8-4479A1?logo=mysql&logoColor=white)]()
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)]()
[![Three.js](https://img.shields.io/badge/Three.js-r184-000000?logo=threedotjs&logoColor=white)]()
[![License](https://img.shields.io/badge/License-MIT-yellow)]()

> 基于 Spring Boot 4 + MyBatis + MySQL 全栈架构的博物馆数字化解决方案。<br>
> 为**登州博物馆（蓬莱）** 提供全景 VR 导览、文物数字展示、研学预约、AI 智能导览等一站式服务。

</div>

---

## ✨ 功能特性

<div align="center">

| | 功能 | 说明 |
|:-:|------|------|
| 🌐 | **360° 全景 VR** | Three.js 沉浸式漫游，多场景切换，键盘 ♆ 手柄控制 |
| 🤖 | **3D 数字人导览** | "登州小吏" AI 讲解员，打字机风格对话，历史记忆 |
| 🏺 | **文物数字展厅** | 分页浏览馆藏精品，年代/分类筛选，详情弹窗 |
| 📚 | **研学中心** | 课程展示 · 团体预约 · 志愿者/活动招募报名 |
| 📰 | **实时资讯** | 公告动态、研学动态发布与分页展示 |
| 🌤️ | **出行助手** | 高德天气集成，人流量预测，地理定位 |
| 🎙️ | **语音识别** | 阿里云 DashScope ASR 语音转文字 |
| 🤖 | **AI 攻略** | 自定义 AI 服务生成旅行建议 |
| ⚙️ | **管理后台** | 文物/文章/课程/公告/预约/用户 CRUD 管理 |
| 📊 | **网站统计** | 页面访问量 PV 追踪 |

</div>

---

## 🛠️ 技术栈

### 后端

| 技术 | 版本 | 用途 |
|------|------|------|
| ![Java] Java 17 | 17 | 运行时 |
| ![Spring Boot] Spring Boot | 4.0.6 | 应用框架 |
| ![MyBatis] MyBatis | 4.0.1 | ORM 持久层 |
| ![MySQL] MySQL | 8 | 数据库 |
| Spring WebSocket | — | 实时通信 |
| Spring WebFlux | — | 响应式 HTTP 客户端 |
| Spring Security Crypto | — | BCrypt 密码加密 |
| DashScope SDK (阿里云) | 2.22.16 | 语音识别 ASR |
| 高德天气 API | — | 实时天气数据 |

[Java]: https://img.shields.io/badge/-Java-ED8B00?logo=openjdk&logoColor=white&style=flat
[Spring Boot]: https://img.shields.io/badge/-Spring_Boot-6DB33F?logo=springboot&logoColor=white&style=flat
[MyBatis]: https://img.shields.io/badge/-MyBatis-000000?logo=mybatis&logoColor=white&style=flat
[MySQL]: https://img.shields.io/badge/-MySQL-4479A1?logo=mysql&logoColor=white&style=flat

### 前端

| 技术 | 版本 | 用途 |
|------|------|------|
| ![Vite] Vite | 6 | 构建工具 |
| Vanilla JS | ES6+ | 核心语言 |
| Three.js | r184 | 3D 全景渲染 |
| CSS Variables | — | 主题系统 |

[Vite]: https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat

> 管理后台：原生 HTML + CSS + JS，零框架依赖。

---

## 📁 项目结构

```
src/main/java/com/baicai/cloudmuseum_backend/
├── 📂 config/          # 全局配置（CORS、WebMVC、拦截器、异常处理）
├── 📂 controller/      # RESTful API 控制器
├── 📂 service/         # 业务逻辑层
│   └── 📂 impl/        # 业务实现
├── 📂 mapper/          # MyBatis Mapper 接口
├── 📂 entity/          # 数据实体（User/Relic/Article/Course...）
├── 📂 dto/             # 数据传输对象与请求/响应封装
└── 📂 util/            # 工具类

dengzhou-museum-frontend/
├── 📂 src/api/         # API 客户端封装
├── 📂 src/three/       # Three.js 3D 场景（全景/数字人）
├── 📂 src/utils/       # 工具函数（天气、定位等）
├── 📂 src/config/      # 图片资源配置
├── 📄 index.html       # 首页 SPA
└── 📄 tour.html        # 漫游页面

src/main/resources/static/
├── 📂 admin/           # 管理后台
├── 📂 intro-animation/ # 开场动画
├── 📂 tour3d/          # 3D 漫游独立页面
├── 📂 pano/            # 全景图资源
└── 📂 images/          # 静态图片
```

---

## 📡 API 概览

```
┌──────────────┬────────────────────────────────┐
│ 🏺 文物      │ /api/relics                    │
│ 📰 文章      │ /api/articles                  │
│ 📚 课程      │ /api/courses                   │
│ 📅 预约      │ /api/reservations              │
│ 👥 用户      │ /api/users                     │
│ 📢 公告      │ /api/announcements             │
│ 🙋 招募      │ /api/recruitments              │
│ 🌤️ 天气      │ /api/weather                   │
│ 🤖 AI 对话   │ /api/chat/ask                  │
│ 🎙️ 语音识别  │ /api/voice/recognize           │
│ 💡 AI 攻略   │ /api/travel/advice             │
│ 📎 文件上传  │ /api/files/upload              │
│ ⚙️ 后台管理  │ /api/admin/**                  │
│ 📊 访问统计  │ /api/visits/track              │
└──────────────┴────────────────────────────────┘
```

---

## 🚀 快速开始

### 前置条件

- ☕ JDK 17+
- 📦 Maven 3.8+
- 🐬 MySQL 8.0+
- ⚡ Node.js 18+（前端开发）

### 配置

编辑 `src/main/resources/application.properties`：

```properties
# 数据库
spring.datasource.url=jdbc:mysql://localhost:3306/cloud_museum
spring.datasource.username=root
spring.datasource.password=your_password

# 阿里云 DashScope (语音识别)
dashscope.api.key=your_dashscope_key

# AI 对话服务
textchat.api.base-url=http://your-ai-service:5000

# 高德天气
gaode.weather.api.key=your_amap_key
```

### 启动

```bash
# 🖥️ 后端
mvn spring-boot:run

# 🎨 前端开发
cd dengzhou-museum-frontend
npm install
npm run dev

# 📦 前端构建部署
npm run deploy    # 构建并复制到 Spring Boot static/
```

---

## 🗄️ 数据库

**库名：** `cloud_museum`

**主要表：**

| 表 | 说明 |
|----|------|
| `user` | 用户 |
| `relic` | 馆藏文物 |
| `article` | 文章（馆舍概况） |
| `course` | 研学课程 |
| `reservation` | 参观/课程预约 |
| `announcement` | 资讯公告 |
| `recruitment` | 招募报名 |
| `site_visit` | 访问统计 |

---

<div align="center">
  <sub>Built with ❤️ for 登州博物馆 · 东方海上丝绸之路始发港</sub>
</div>
