# CloudMuseum 后端 API 文档

> 版本: v0.2 | Base URL: `http://localhost:8081` | 字符编码: UTF-8

---

## 目录

- [1. 通用说明](#1-通用说明)
- [2. 文章管理](#2-文章管理)
- [3. 文物管理](#3-文物管理)
- [4. 研学课程](#4-研学课程)
- [5. 预约管理](#5-预约管理)
- [6. 用户管理](#6-用户管理)
- [7. 天气查询](#7-天气查询)
- [8. 旅行建议](#8-旅行建议)
- [9. 文件上传](#9-文件上传)
- [10. AI 文本对话](#10-ai-文本对话)
- [11. 语音识别](#11-语音识别)

---

## 1. 通用说明

### 1.1 统一响应格式

所有接口返回统一的 JSON 结构 `ApiResponse<T>`：

```json
{
  "success": true,
  "message": "ok",
  "data": <T>
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| `success` | boolean | `true` 成功 / `false` 失败 |
| `message` | string | 提示信息，成功时固定 `"ok"` |
| `data` | any | 业务数据，具体结构见各接口 |

### 1.2 错误响应

```json
{
  "success": false,
  "message": "错误描述信息",
  "data": null
}
```

HTTP 状态码: `400` 表示业务异常，`500` 表示服务器内部错误。

### 1.3 分页响应

带分页的列表接口，`data` 结构如下：

```json
{
  "success": true,
  "message": "ok",
  "data": {
    "list": [ ... ],
    "total": 25,
    "page": 1,
    "size": 10
  }
}
```

---

## 2. 文章管理

> 路径前缀: `/api/articles`
>
> 文章类型 (`type`): `INTRO` 博物馆介绍 | `HISTORY` 历史沿革 | `COURSE` 研学课程文章 | `NEWS` 新闻动态
>
> 文章状态 (`status`): `PUBLISHED` 已发布 | `DRAFT` 草稿

### 2.1 文章列表（分页）

```
GET /api/articles
```

**Query 参数:**

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| `type` | string | 否 | - | 筛选文章类型: INTRO / HISTORY / COURSE / NEWS |
| `page` | int | 否 | 1 | 页码，从 1 开始 |
| `size` | int | 否 | 10 | 每页条数 |

> 注意: 此接口仅返回 `status = PUBLISHED` 的文章。后台管理请用 [2.2 全量列表](#22-全量列表管理后台)。

**响应 `data.list` 中每条记录的字段:**

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | long | 文章ID |
| `title` | string | 标题 |
| `content` | string | 正文内容（富文本或 Markdown） |
| `type` | string | 类型枚举 |
| `coverImage` | string | 封面图 URL |
| `externalLink` | string | 外部跳转链接（可选） |
| `author` | string | 作者 |
| `status` | string | 状态 |
| `createdAt` | string | 创建时间 (ISO 8601) |
| `updatedAt` | string | 更新时间 (ISO 8601) |

**请求示例:**

```bash
curl "http://localhost:8081/api/articles?type=INTRO&page=1&size=5"
```

**响应示例:**

```json
{
  "success": true,
  "message": "ok",
  "data": {
    "list": [
      {
        "id": 1,
        "title": "博物馆简介",
        "content": "<p>这是一座承载千年文明的博物馆...</p>",
        "type": "INTRO",
        "coverImage": "/uploads/images/abc123.jpg",
        "externalLink": "https://www.example-museum.com",
        "author": "管理员",
        "status": "PUBLISHED",
        "createdAt": "2026-05-18T10:00:00",
        "updatedAt": "2026-05-18T10:00:00"
      }
    ],
    "total": 1,
    "page": 1,
    "size": 5
  }
}
```

---

### 2.2 全量列表（管理后台用）

```
GET /api/articles/all
```

> TODO: 如果你需要后台查询全部文章（含草稿），目前后端在 `GET /api/articles` 仅返回已发布。需要新增此接口时告知。

**替代方案**：直接使用 `/api/articles`，如需含草稿，可在 URL 加 `status` 参数 → 需要后端扩展。当前请先使用以下方式查询所有已发布文章。

---

### 2.3 文章详情

```
GET /api/articles/{id}
```

**路径参数:**

| 参数 | 类型 | 说明 |
|------|------|------|
| `id` | long | 文章ID |

**请求示例:**

```bash
curl "http://localhost:8081/api/articles/1"
```

---

### 2.4 新增文章

```
POST /api/articles
Content-Type: application/json
```

**请求体 (JSON):**

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `title` | string | 是 | 标题 |
| `content` | string | 是 | 正文内容 |
| `type` | string | 是 | INTRO / HISTORY / COURSE / NEWS |
| `coverImage` | string | 否 | 封面图 URL |
| `externalLink` | string | 否 | 外部跳转链接 |
| `author` | string | 否 | 作者 |
| `status` | string | 否 | 默认 PUBLISHED，可选 DRAFT |

**请求示例:**

```bash
curl -X POST "http://localhost:8081/api/articles" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "新展览预告",
    "content": "<p>即将推出重磅展览...</p>",
    "type": "NEWS",
    "coverImage": "/uploads/images/xyz789.jpg",
    "author": "管理员",
    "status": "PUBLISHED"
  }'
```

**响应:** 返回创建后的 `Article` 对象（含自动生成的 `id`）。

---

### 2.5 更新文章

```
PUT /api/articles/{id}
Content-Type: application/json
```

**路径参数:**

| 参数 | 类型 | 说明 |
|------|------|------|
| `id` | long | 文章ID |

**请求体:** 同 [2.4 新增文章](#24-新增文章)

---

### 2.6 删除文章

```
DELETE /api/articles/{id}
```

**路径参数:** `id` — 文章ID

**响应:** `data: {}`

---

## 3. 文物管理

> 路径前缀: `/api/relics`

### 3.1 文物列表（分页 + 筛选）

```
GET /api/relics
```

**Query 参数:**

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| `era` | string | 否 | - | 年代筛选 |
| `category` | string | 否 | - | 分类筛选 |
| `page` | int | 否 | 1 | 页码 |
| `size` | int | 否 | 10 | 每页条数 |

**响应 `data.list` 中每条记录的字段:**

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | long | 文物ID |
| `name` | string | 文物名称 |
| `description` | string | 文物描述 |
| `era` | string | 年代 |
| `category` | string | 分类 |
| `imageUrl` | string | 图片 URL |
| `modelUrl` | string | 3D 模型 / Unity 漫游包路径 |
| `externalLink` | string | 跳转官方介绍页链接 |
| `createdAt` | string | 创建时间 |
| `updatedAt` | string | 更新时间 |

**请求示例:**

```bash
curl "http://localhost:8081/api/relics?era=唐代&category=青铜器&page=1&size=10"
```

---

### 3.2 文物详情

```
GET /api/relics/{id}
```

---

### 3.3 新增文物

```
POST /api/relics
Content-Type: application/json
```

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `name` | string | 是 | 文物名称 |
| `description` | string | 否 | 描述 |
| `era` | string | 否 | 年代 |
| `category` | string | 否 | 分类 |
| `imageUrl` | string | 否 | 图片 URL |
| `modelUrl` | string | 否 | Unity 漫游包路径 |
| `externalLink` | string | 否 | 官方介绍页链接 |

**请求示例:**

```bash
curl -X POST "http://localhost:8081/api/relics" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "青铜爵",
    "description": "商代晚期青铜酒器，纹饰精美...",
    "era": "商代",
    "category": "青铜器",
    "imageUrl": "/uploads/images/bronze.jpg",
    "modelUrl": "/uploads/unity/bronze.unity3d",
    "externalLink": "https://www.example-museum.com/relic/123"
  }'
```

---

### 3.4 更新文物

```
PUT /api/relics/{id}
Content-Type: application/json
```

请求体同 [3.3 新增文物](#33-新增文物)。

---

### 3.5 删除文物

```
DELETE /api/relics/{id}
```

---

## 4. 研学课程

> 路径前缀: `/api/courses`
>
> 课程状态 (`status`): `ACTIVE` 开放预约 | `INACTIVE` 暂未开放

### 4.1 课程列表

```
GET /api/courses
```

**Query 参数:**

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| `status` | string | 否 | - | 状态筛选。**不传则仅返回 ACTIVE**，传值则按指定状态返回 |

**响应 `data` 中每条记录的字段:**

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | long | 课程ID |
| `title` | string | 课程标题 |
| `description` | string | 课程简介 |
| `content` | string | 课程详情 |
| `coverImage` | string | 封面图 URL |
| `maxCapacity` | int | 最大容量（人数上限） |
| `currentReserved` | int | 当前已预约人数 |
| `price` | number | 价格（元） |
| `scheduleInfo` | string | 课程安排（JSON 字符串） |
| `status` | string | ACTIVE / INACTIVE |
| `createdAt` | string | 创建时间 |
| `updatedAt` | string | 更新时间 |

**请求示例:**

```bash
# 仅获取开放课程（默认）
curl "http://localhost:8081/api/courses"

# 后台查看所有课程（含下架）
curl "http://localhost:8081/api/courses?status=INACTIVE"
```

---

### 4.2 课程详情

```
GET /api/courses/{id}
```

---

### 4.3 新增课程

```
POST /api/courses
Content-Type: application/json
```

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `title` | string | 是 | 课程标题 |
| `description` | string | 否 | 简介 |
| `content` | string | 否 | 详情 |
| `coverImage` | string | 否 | 封面图 URL |
| `maxCapacity` | int | 否 | 最大容量，默认 30 |
| `currentReserved` | int | 否 | 初始已预约数，默认 0 |
| `price` | number | 否 | 价格 |
| `scheduleInfo` | string | 否 | 课程安排 (JSON) |
| `status` | string | 否 | 默认 ACTIVE |

**请求示例:**

```bash
curl -X POST "http://localhost:8081/api/courses" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "青铜文化研学营",
    "description": "适合 8-14 岁青少年的青铜文化研学课程",
    "content": "<h2>课程大纲</h2><ul><li>青铜器铸造工艺</li><li>纹饰解读</li></ul>",
    "maxCapacity": 30,
    "price": 198.00,
    "scheduleInfo": "{\"weeks\": [\"周六\", \"周日\"], \"time\": \"09:00-11:30\"}"
  }'
```

---

### 4.4 更新课程

```
PUT /api/courses/{id}
Content-Type: application/json
```

请求体同 [4.3 新增课程](#43-新增课程)。

---

### 4.5 删除课程

```
DELETE /api/courses/{id}
```

---

## 5. 预约管理

> 路径前缀: `/api/reservations`
>
> 预约类型 (`type`): `INDIVIDUAL` 个人预约 | `GROUP` 团体预约
>
> 预约状态 (`status`): `PENDING` 待确认 | `CONFIRMED` 已确认 | `CANCELLED` 已取消
>
> **额度控制规则:**
> - 创建预约时：自动校验课程剩余名额，不足则拒绝
> - PENDING/CONFIRMED → CANCELLED：释放名额
> - CANCELLED → PENDING/CONFIRMED：重新占用名额

### 5.1 预约列表（分页 + 多条件筛选）

```
GET /api/reservations
```

**Query 参数:**

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| `userId` | long | 否 | - | 按用户筛选（个人查看自己预约时传） |
| `status` | string | 否 | - | 按状态筛选: PENDING / CONFIRMED / CANCELLED |
| `courseId` | long | 否 | - | 按课程筛选 |
| `page` | int | 否 | 1 | 页码 |
| `size` | int | 否 | 10 | 每页条数 |

**响应 `data.list` 中每条记录的字段:**

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | long | 预约ID |
| `userId` | long | 用户ID |
| `type` | string | INDIVIDUAL / GROUP |
| `courseId` | long | 关联课程ID（可为 null） |
| `visitDate` | string | 参观日期 (yyyy-MM-dd) |
| `visitorCount` | int | 参观人数 |
| `status` | string | PENDING / CONFIRMED / CANCELLED |
| `contactName` | string | 联系人姓名 |
| `contactPhone` | string | 联系人电话 |
| `remarks` | string | 备注 |
| `createdAt` | string | 创建时间 |
| `updatedAt` | string | 更新时间 |

**请求示例:**

```bash
# 查看某用户的所有预约
curl "http://localhost:8081/api/reservations?userId=1"

# 后台查看所有待确认的预约
curl "http://localhost:8081/api/reservations?status=PENDING"

# 查看某课程的所有确认预约
curl "http://localhost:8081/api/reservations?courseId=3&status=CONFIRMED"
```

---

### 5.2 预约详情

```
GET /api/reservations/{id}
```

---

### 5.3 创建预约

```
POST /api/reservations
Content-Type: application/json
```

**请求体 (JSON):**

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `userId` | long | **是** | 用户ID |
| `type` | string | **是** | 预约类型: INDIVIDUAL / GROUP |
| `courseId` | long | 否 | 关联课程ID（课程类预约必传） |
| `visitDate` | string | **是** | 参观日期，格式 `yyyy-MM-dd` |
| `visitorCount` | int | **是** | 参观人数（≥1） |
| `contactName` | string | **是** | 联系人姓名 |
| `contactPhone` | string | **是** | 联系人电话 |
| `remarks` | string | 否 | 备注说明 |

> **校验规则:**
> - `userId`、`visitDate`、`visitorCount`、`contactName`、`contactPhone`、`type` 为必填，缺失返回 400 并提示具体字段
> - 若 `courseId` 不为空，自动校验该课程 `currentReserved + visitorCount ≤ maxCapacity`，超出则返回错误 `"该课程仅剩 X 个名额"`
> - 创建成功后自动占用课程名额，状态初始为 `PENDING`

**请求示例:**

```bash
curl -X POST "http://localhost:8081/api/reservations" \
  -H "Content-Type: application/json" \
  -d '{
    "userId": 1,
    "type": "INDIVIDUAL",
    "courseId": 3,
    "visitDate": "2026-06-15",
    "visitorCount": 2,
    "contactName": "张三",
    "contactPhone": "13800138000",
    "remarks": "孩子对青铜文化很感兴趣"
  }'
```

**成功响应:**

```json
{
  "success": true,
  "message": "ok",
  "data": {
    "id": 42,
    "userId": 1,
    "type": "INDIVIDUAL",
    "courseId": 3,
    "visitDate": "2026-06-15",
    "visitorCount": 2,
    "status": "PENDING",
    "contactName": "张三",
    "contactPhone": "13800138000",
    "remarks": "孩子对青铜文化很感兴趣",
    "createdAt": "2026-05-18T12:00:00",
    "updatedAt": "2026-05-18T12:00:00"
  }
}
```

**失败响应（名额不足）:**

```json
{
  "success": false,
  "message": "该课程仅剩 1 个名额",
  "data": null
}
```

---

### 5.4 更新预约状态（确认 / 取消）

```
PUT /api/reservations/{id}/status
Content-Type: application/json
```

**路径参数:** `id` — 预约ID

**请求体:**

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `status` | string | **是** | 目标状态: PENDING / CONFIRMED / CANCELLED |

**请求示例:**

```bash
# 确认预约
curl -X PUT "http://localhost:8081/api/reservations/42/status" \
  -H "Content-Type: application/json" \
  -d '{"status": "CONFIRMED"}'

# 取消预约
curl -X PUT "http://localhost:8081/api/reservations/42/status" \
  -H "Content-Type: application/json" \
  -d '{"status": "CANCELLED"}'
```

**响应:** 返回更新后的 `Reservation` 对象。

---

### 5.5 修改预约信息

```
PUT /api/reservations/{id}
Content-Type: application/json
```

可修改 `contactName`、`contactPhone`、`remarks`、`visitDate`、`visitorCount` 等字段。

> 注意: 此接口不触发额度流转。修改人数建议通过取消旧预约 + 新建预约实现。

---

### 5.6 删除预约

```
DELETE /api/reservations/{id}
```

> 如被删除的是 CONFIRMED 状态的课程预约，将自动释放对应名额。

---

## 6. 用户管理

> 路径前缀: `/api/users`
>
> 角色 (`role`): `USER` 普通用户 | `ADMIN` 管理员
>
> 密码使用 BCrypt 加密存储，响应中 **不返回密码字段**。

### 6.1 用户列表

```
GET /api/users
```

**响应字段:**

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | long | 用户ID |
| `username` | string | 用户名 |
| `role` | string | USER / ADMIN |
| `phone` | string | 手机号 |
| `email` | string | 邮箱 |
| `createdAt` | string | 创建时间 |
| `updatedAt` | string | 更新时间 |

> `password` 字段不会出现在响应中。

---

### 6.2 用户详情

```
GET /api/users/{id}
```

---

### 6.3 新增用户

```
POST /api/users
Content-Type: application/json
```

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `username` | string | 是 | 用户名（需唯一） |
| `password` | string | 是 | 明文密码，服务端自动 BCrypt 加密 |
| `role` | string | 否 | 默认 USER |
| `phone` | string | 否 | 手机号 |
| `email` | string | 否 | 邮箱 |

**请求示例:**

```bash
curl -X POST "http://localhost:8081/api/users" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "zhangsan",
    "password": "mypassword123",
    "phone": "13800138000",
    "email": "zhangsan@example.com"
  }'
```

---

### 6.4 更新用户

```
PUT /api/users/{id}
Content-Type: application/json
```

可修改 `username`、`role`、`phone`、`email`。

> 修改密码请使用专门的密码重置接口（待实现）或在后台操作数据库。

---

### 6.5 删除用户

```
DELETE /api/users/{id}
```

---

## 7. 天气查询

> 后端代理高德天气 API

```
GET /api/weather
```

**Query 参数:**

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `city` | string | **是** | 城市名称或行政区划代码 |

**响应字段:**

| 字段 | 类型 | 说明 |
|------|------|------|
| `city` | string | 查询城市 |
| `weather` | string | 天气现象（如"晴"、"多云"、"小雨"） |
| `temperature` | string | 温度（℃） |
| `windDirection` | string | 风向 |
| `humidity` | string | 湿度（%） |
| `reportTime` | string | 数据发布时间 |
| `raw` | object | 高德 API 原始响应（用于调试验证） |

**请求示例:**

```bash
curl "http://localhost:8081/api/weather?city=北京"
```

**响应示例:**

```json
{
  "success": true,
  "message": "ok",
  "data": {
    "city": "北京",
    "weather": "晴",
    "temperature": "25",
    "windDirection": "南",
    "humidity": "45",
    "reportTime": "2026-05-18 12:00:00",
    "raw": { ... }
  }
}
```

---

## 8. 旅行建议

> 结合天气数据 + AI 大模型，生成个性化博物馆参观建议

```
POST /api/travel/advice
Content-Type: application/json
```

**请求体:**

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `city` | string | **是** | 目标城市 |
| `date` | string | 否 | 计划日期，如 `"2026-06-01"` |
| `interests` | string | 否 | 兴趣偏好，如 `"青铜器, 古代书画"` |

**请求示例:**

```bash
curl -X POST "http://localhost:8081/api/travel/advice" \
  -H "Content-Type: application/json" \
  -d '{
    "city": "西安",
    "date": "2026-06-01",
    "interests": "唐代文物, 碑刻书法"
  }'
```

**响应 `data` 字段:**

```json
{
  "success": true,
  "message": "ok",
  "data": {
    "weather": {
      "city": "西安",
      "weather": "多云",
      "temperature": "28",
      "windDirection": "东风",
      "humidity": "55",
      "reportTime": "2026-05-18 12:00:00",
      "raw": { ... }
    },
    "advice": "根据当前多云天气（28℃），建议您在上午9:00抵达博物馆..."
  }
}
```

| 子字段 | 说明 |
|--------|------|
| `weather` | 天气数据对象，结构同 [7. 天气查询](#7-天气查询) |
| `advice` | AI 生成的个性化旅行建议文本（约300字），包含出行建议、推荐路线、注意事项 |

---

## 9. 文件上传

> 上传图片、Unity 漫游包等静态资源，返回可访问 URL

```
POST /api/files/upload
Content-Type: multipart/form-data
```

**表单参数:**

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `file` | file | **是** | 上传的文件 |
| `dir` | string | 否 | 子目录名，默认 `"images"`。如传入 `"unity"` 则存储到 `/uploads/unity/` |

**响应:** `data` 为文件访问路径（相对路径），可直接拼接到 Base URL 使用。

**请求示例:**

```bash
# 上传图片
curl -X POST "http://localhost:8081/api/files/upload" \
  -F "file=@cover.jpg" \
  -F "dir=images"

# 上传 Unity 漫游包
curl -X POST "http://localhost:8081/api/files/upload" \
  -F "file=@relic_001.unity3d" \
  -F "dir=unity"
```

**响应示例:**

```json
{
  "success": true,
  "message": "ok",
  "data": "/uploads/images/f7c3a1b2-9d4e-4f5a-8c6e-123456789abc.jpg"
}
```

文件最终访问 URL: `http://localhost:8081/uploads/images/f7c3a1b2-9d4e-4f5a-8c6e-123456789abc.jpg`

> 文件存储位置: `./uploads/{dir}/{uuid}.{ext}`，文件名自动生成 UUID 避免冲突。

---

## 10. AI 文本对话

> 路径前缀: `/api/chat`

### 10.1 发送对话 (GET)

```
GET /api/chat/ask
```

**Query 参数:**

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `question` | string | **是** | 对话问题 |

### 10.2 发送对话 (POST)

```
POST /api/chat/ask
Content-Type: application/json
```

**请求体:**

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `question` | string | **是** | 对话问题 |

**响应字段:**

| 字段 | 类型 | 说明 |
|------|------|------|
| `answer` | string | AI 回答内容 |
| `status` | string | `"success"` / `"error"` |

**请求示例:**

```bash
curl -X POST "http://localhost:8081/api/chat/ask" \
  -H "Content-Type: application/json" \
  -d '{"question": "博物馆的镇馆之宝是什么？"}'
```

---

## 11. 语音识别

> 上传音频文件，返回识别文本（基于阿里云 DashScope 实时 ASR）

```
POST /api/voice/recognize
Content-Type: multipart/form-data
```

**表单参数:**

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `audio` | file | **是** | 音频文件（推荐 WAV 格式，16kHz 采样率） |

**请求示例:**

```bash
curl -X POST "http://localhost:8081/api/voice/recognize" \
  -F "audio=@recording.wav"
```

**响应示例:**

```json
{
  "success": true,
  "text": "请问博物馆的开馆时间是什么时候"
}
```

**失败响应:**

```json
{
  "success": false,
  "message": "语音识别失败: 文件格式不支持"
}
```

---

## 附录: 完整接口速查表

| 方法 | 路径 | 说明 |
|------|------|------|
| `GET` | `/api/articles` | 文章分页列表（已发布） |
| `GET` | `/api/articles/{id}` | 文章详情 |
| `POST` | `/api/articles` | 新增文章 |
| `PUT` | `/api/articles/{id}` | 更新文章 |
| `DELETE` | `/api/articles/{id}` | 删除文章 |
| `GET` | `/api/relics` | 文物分页列表 |
| `GET` | `/api/relics/{id}` | 文物详情 |
| `POST` | `/api/relics` | 新增文物 |
| `PUT` | `/api/relics/{id}` | 更新文物 |
| `DELETE` | `/api/relics/{id}` | 删除文物 |
| `GET` | `/api/courses` | 课程列表（默认仅 ACTIVE） |
| `GET` | `/api/courses/{id}` | 课程详情 |
| `POST` | `/api/courses` | 新增课程 |
| `PUT` | `/api/courses/{id}` | 更新课程 |
| `DELETE` | `/api/courses/{id}` | 删除课程 |
| `GET` | `/api/reservations` | 预约分页列表 |
| `GET` | `/api/reservations/{id}` | 预约详情 |
| `POST` | `/api/reservations` | 创建预约 |
| `PUT` | `/api/reservations/{id}/status` | 更新预约状态 |
| `PUT` | `/api/reservations/{id}` | 修改预约信息 |
| `DELETE` | `/api/reservations/{id}` | 删除预约 |
| `GET` | `/api/users` | 用户列表 |
| `GET` | `/api/users/{id}` | 用户详情 |
| `POST` | `/api/users` | 新增用户 |
| `PUT` | `/api/users/{id}` | 更新用户 |
| `DELETE` | `/api/users/{id}` | 删除用户 |
| `GET` | `/api/weather` | 天气查询 |
| `POST` | `/api/travel/advice` | 个性化旅行建议 |
| `POST` | `/api/files/upload` | 文件上传 |
| `GET` | `/api/chat/ask` | AI 对话 (GET) |
| `POST` | `/api/chat/ask` | AI 对话 (POST) |
| `POST` | `/api/voice/recognize` | 语音识别 |

---

> 文档生成时间: 2026-05-18 | 适用于 CloudMuseum Backend v0.2 | 如有疑问请联系后端开发
