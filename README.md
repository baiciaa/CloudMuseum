# CloudMuseum 云端漫游 — 登州博物馆数字平台

基于 Spring Boot 3 + Vue3(Vite) 全栈架构的博物馆数字化解决方案，为登州博物馆（蓬莱）提供全景 VR 导览、文物数字展示、研学预约、AI 智能导览等一站式服务。

## 功能特性

- **360° 全景 VR** — Three.js 驱动的沉浸式全景漫游，多场景切换、键盘/手柄控制
- **3D 数字人导览** — "登州小吏" AI 讲解员，支持打字机风格对话
- **文物数字展厅** — 分页浏览馆藏精品，支持年代/分类筛选
- **研学中心** — 课程展示、团体预约、志愿者/活动招募报名
- **实时资讯** — 公告动态、研学动态发布与分页展示
- **出行助手** — 高德天气集成、人流量预测、地理位置服务
- **语音识别** — 阿里云 DashScope ASR 语音转文字
- **AI 攻略生成** — 自定义 AI 服务生成旅行建议
- **管理后台** — 文物/文章/课程/公告/预约/用户/招募 CRUD 管理
- **网站统计** — 页面访问量 PV 追踪

## 技术栈

### 后端

| 技术 | 说明 |
|------|------|
| Java 17 | 运行时 |
| Spring Boot 4.0.6 | 应用框架 |
| MyBatis 4.0.1 | ORM 持久层 |
| MySQL 8 | 数据库 |
| Spring WebSocket | 实时通信 |
| Spring WebFlux | 响应式 HTTP 客户端 |
| Spring Security Crypto | BCrypt 密码加密 |
| DashScope SDK (阿里云) | 语音识别 ASR |
| 高德天气 API | 实时天气数据 |
| Maven | 构建工具 |

### 前端（主站）

| 技术 | 说明 |
|------|------|
| Vite 6 | 构建工具 |
| Vanilla JS (ES6+) | 核心语言 |
| Three.js r184 | 3D 全景渲染 |
| CSS Variables | 主题系统 |

### 前端（管理后台）

原生 HTML + CSS + JS，无框架依赖。

## 项目结构

```
src/main/java/com/baicai/cloudmuseum_backend/
├── config/          # 全局配置（CORS、WebMVC、拦截器、异常处理）
├── controller/      # RESTful API 控制器
├── service/         # 业务逻辑层
│   └── impl/        # 业务实现
├── mapper/          # MyBatis Mapper 接口
├── entity/          # 数据实体（User/Relic/Article/Course等）
├── dto/             # 数据传输对象与请求/响应封装
└── util/            # 工具类

dengzhou-museum-frontend/
├── src/
│   ├── api/         # API 客户端封装
│   ├── three/       # Three.js 3D 场景（全景/数字人）
│   ├── utils/       # 工具函数（天气定位等）
│   └── config/      # 图片资源配置
└── index.html       # 首页 SPA

src/main/resources/static/
├── admin/           # 管理后台
├── intro-animation/ # 开场动画
├── tour3d/          # 3D 漫游独立页面
├── pano/            # 全景图资源
└── images/          # 静态图片
```

## API 概览

| 端点 | 说明 |
|------|------|
| `/api/articles` | 文章 CRUD（馆舍概况） |
| `/api/relics` | 文物 CRUD |
| `/api/courses` | 研学课程查询 |
| `/api/reservations` | 预约 CRUD |
| `/api/users` | 用户管理 |
| `/api/announcements` | 资讯公告 CRUD |
| `/api/recruitments` | 招募报名 |
| `/api/weather` | 天气查询 |
| `/api/travel/advice` | AI 旅行建议 |
| `/api/chat/ask` | AI 对话 |
| `/api/voice/recognize` | 语音识别 |
| `/api/files/upload` | 文件上传 |
| `/api/admin/**` | 后台管理 |
| `/api/visits/track` | 访问统计 |

## 快速开始

### 前置条件

- JDK 17+
- Maven 3.8+
- MySQL 8.0+
- Node.js 18+（前端开发）

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

### 启动后端

```bash
mvn spring-boot:run
```

### 启动前端开发

```bash
cd dengzhou-museum-frontend
npm install
npm run dev
```

### 前端构建部署

```bash
cd dengzhou-museum-frontend
npm run deploy    # 构建并复制到 Spring Boot static/
```

## 数据库

数据库名：`cloud_museum`

主要表：`user`、`relic`、`article`、`course`、`reservation`、`announcement`、`recruitment`、`site_visit`
