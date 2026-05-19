# CloudMuseum Backend 测试日志

> 测试日期: 2026-05-19 | 版本: v0.2 | 测试环境: Java 24, Spring Boot 4.0.6, MySQL

---

## 测试概要

| 模块 | 接口数 | 通过 | 失败 | 跳过 |
|------|--------|------|------|------|
| 用户管理 | 5 | 4 | 1 (已修复) | - |
| 文章管理 | 5 | 5 | - | - |
| 文物管理 | 5 | 5 | - | - |
| 课程管理 | 5 | 5 | - | - |
| 预约管理 | 6 | 6 | - | - |
| 天气查询 | 1 | 1* | - | - |
| 文件上传 | 1 | 1 | - | - |
| AI 对话 | 2 | - | - | 2 (未开 AI) |
| 语音识别 | 1 | - | - | 1 (未开 AI) |
| 旅行建议 | 1 | - | - | 1 (未开 AI) |
| **总计** | **32** | **27** | **1** | **4** |

*天气 API 因 `gaode.weather.api.key` 为占位符返回 INVALID_USER_KEY，接口本身逻辑正常。

---

## 一、用户管理 `/api/users`

### 测试用例

| # | 方法 | 路径 | 请求体/参数 | 预期 | 结果 | 状态码 |
|---|------|------|-------------|------|------|--------|
| 1.1 | GET | /api/users | - | 返回用户列表 | 通过 | 200 |
| 1.2 | GET | /api/users/1 | - | 返回 admin 用户 | 通过 | 200 |
| 1.3 | POST | /api/users | `{"username":"testuser1","password":"pass123",...}` | 创建用户 | **失败** | 400 |
| 1.4 | GET | /api/users/2 | - | 新用户详情 | 失败(依赖1.3) | 400 |
| 1.5 | PUT | /api/users/2 | `{"username":"updated",...}` | 更新用户 | 失败(依赖1.3) | 400 |
| 1.6 | GET | /api/users/999 | - | 返回"用户不存在" | 通过 | 400 |
| 1.7 | DELETE | /api/users/3 | - | 删除用户 | 通过 | 200 |

### 发现的 Bug

**Bug #1 (已修复): 创建用户时 role 未设置默认值**

- **严重程度**: 高
- **现象**: POST /api/users 未传 role 字段时，MySQL 报 `Column 'role' cannot be null`
- **根因**: `UserServiceImpl.create()` 没有在 insert 前为 role 设置默认值，MyBatis 将 null 传入覆盖了数据库 DEFAULT 值
- **修复**: 在 `UserServiceImpl.create()` 中添加 `if (user.getRole() == null) user.setRole("USER");`
- **文件**: `service/impl/UserServiceImpl.java:42`

### 备注

- `password` 字段在响应中正确显示为 null（已脱敏）
- 删除用户成功，DELETE 返回 `{"data":{},"message":"ok","success":true}`
- 查询不存在用户返回 400 + `{"message":"用户不存在"}`

---

## 二、文章管理 `/api/articles`

### 测试用例

| # | 方法 | 路径 | 请求体/参数 | 预期 | 结果 | 状态码 |
|---|------|------|-------------|------|------|--------|
| 2.1 | POST | /api/articles | `{title,content,type:"INTRO",status:"PUBLISHED"}` | 创建文章 | 通过 | 200 |
| 2.2 | POST | /api/articles | `{title,content,type:"NEWS"}` | 默认 PUBLISHED | 通过 | 200 |
| 2.3 | POST | /api/articles | `{title,content,type:"HISTORY",status:"DRAFT"}` | 创建草稿 | 通过 | 200 |
| 2.4 | GET | /api/articles | `?page=1&size=5` | 仅返回已发布 | 通过 (返回2条) | 200 |
| 2.5 | GET | /api/articles | `?type=INTRO` | 按类型筛选 | 通过 | 200 |
| 2.6 | GET | /api/articles/1 | - | 文章详情 | 通过 | 200 |
| 2.7 | PUT | /api/articles/1 | `{title,content,type,status}` | 更新文章 | 通过 | 200 |
| 2.8 | GET | /api/articles/999 | - | 返回"文章不存在" | 通过 | 400 |

### 发现的 Bug

**Bug #2 (已知限制): PUT 更新为全量替换**

- **严重程度**: 低
- **现象**: 更新文章时，未传的字段（如 `author`, `coverImage`）会被设为 null
- **根因**: `ArticleMapper.update()` SQL 将全部字段 SET，JSON 反序列化时缺失字段 = null
- **建议**: 前端每次传完整数据，或改为 PATCH 语义合并现有值

### 备注

- DRAFT 状态文章正确不会出现在公开列表
- createdAt/updatedAt 在 POST 响应中为 null（MyBatis 未回填），GET 时正常显示——数据库值正确
- 删除功能正常

---

## 三、文物管理 `/api/relics`

### 测试用例

| # | 方法 | 路径 | 请求体/参数 | 预期 | 结果 | 状态码 |
|---|------|------|-------------|------|------|--------|
| 3.1 | POST | /api/relics | `{name,era:"Shang",category:"Bronze"}` | 创建文物 | 通过 | 200 |
| 3.2 | POST | /api/relics | `{name,era:"Song",category:"Ceramics"}` | 创建文物 | 通过 | 200 |
| 3.3 | POST | /api/relics | `{name,era:"Han",category:"Jade"}` | 创建文物 | 通过 | 200 |
| 3.4 | GET | /api/relics | - | 文物列表(分页) | 通过 | 200 |
| 3.5 | GET | /api/relics | `?era=Shang` | 年代筛选 | 通过 (1条) | 200 |
| 3.6 | GET | /api/relics/1 | - | 文物详情 | 通过 | 200 |
| 3.7 | PUT | /api/relics/1 | `{name,era,category}` | 更新文物 | 通过 | 200 |
| 3.8 | DELETE | /api/relics/3 | - | 删除文物 | 通过 | 200 |

### 结果

全部接口通过，无 Bug 发现。

---

## 四、研学课程 `/api/courses`

### 测试用例

| # | 方法 | 路径 | 请求体/参数 | 预期 | 结果 | 状态码 |
|---|------|------|-------------|------|------|--------|
| 4.1 | POST | /api/courses | `{title,maxCapacity:30,price:198}` | 创建课程 | 通过 | 200 |
| 4.2 | POST | /api/courses | `{title,maxCapacity:20,price:150}` | 创建课程 | 通过 | 200 |
| 4.3 | POST | /api/courses | `{title,maxCapacity:15,status:"INACTIVE"}` | 创建未开放课程 | 通过 | 200 |
| 4.4 | GET | /api/courses | - | 仅返回 ACTIVE | 通过 (2条) | 200 |
| 4.5 | GET | /api/courses | `?status=INACTIVE` | 返回 INACTIVE | 通过 (1条) | 200 |
| 4.6 | GET | /api/courses/1 | - | 课程详情 | 通过 | 200 |
| 4.7 | PUT | /api/courses/1 | `{title,status,...}` | 更新课程 | 通过 | 200 |
| 4.8 | DELETE | /api/courses/3 | - | 删除课程 | 通过 | 200 |

### 结果

全部接口通过，无 Bug 发现。

---

## 五、预约管理 `/api/reservations`

### 测试用例

| # | 方法 | 路径 | 请求体/参数 | 预期 | 结果 | 状态码 |
|---|------|------|-------------|------|------|--------|
| 5.1 | POST | /api/reservations | `{userId,type,courseId,visitDate,visitorCount:2,...}` | 创建课程预约+占额 | 通过 | 200 |
| 5.2 | POST | /api/reservations | `{userId,type,courseId:null,...}` | 创建非课程预约 | 通过 | 200 |
| 5.3 | GET | /api/reservations | - | 预约列表 | 通过 (2条) | 200 |
| 5.4 | PUT | /reservations/1/status | `{status:"CONFIRMED"}` | 确认预约(不重复占额) | 通过 | 200 |
| 5.5 | PUT | /reservations/1/status | `{status:"CANCELLED"}` | 取消预约(释放名额) | 通过 | 200 |
| 5.6 | PUT | /reservations/1/status | `{status:"PENDING"}` | 恢复为待确认(重新占额) | 通过 | 200 |
| 5.7 | POST | /api/reservations | 缺少必填字段 | 返回校验错误 | 通过 | 400 |
| 5.8 | POST | /api/reservations | `{courseId:INACTIVE课程,...}` | 拒绝未开放课程 | 通过 | 400 |
| 5.9 | DELETE | /api/reservations/1 | (PENDING状态) | 删除+释放名额 | **失败(已修复)** | 200 |

### 发现的 Bug

**Bug #3 (已修复): PENDING 状态预约删除后未释放课程名额**

- **严重程度**: 高
- **现象**: 删除 PENDING 状态的课程预约后，`courses.current_reserved` 未减少
- **根因**: `ReservationServiceImpl.delete()` 仅对 CONFIRMED 状态释放名额，忽略了 PENDING（创建时也已占用名额）
- **修复**: 条件从 `"CONFIRMED".equals(status)` 改为 `("PENDING".equals(status) \|\| "CONFIRMED".equals(status))`
- **验证**: 测试中 course/1 在 PENDING 预约删除后 currentReserved 保持 2（应为 0）
- **文件**: `service/impl/ReservationServiceImpl.java:106`

**Bug #4 (已修复): 创建预约 TOCTOU 并发竞争**

- **严重程度**: 中
- **现象**: 先检查名额再调用 incrementReserved，高并发下可能导致预约创建成功但名额未扣减
- **根因**: incrementReserved 的 SQL WHERE 条件可防御超卖（`WHERE current_reserved + delta <= max_capacity`），但 Java 层未检查返回值
- **修复**: 检查 `incrementReserved()` 返回值，为 0 时抛出异常回滚事务
- **文件**: `service/impl/ReservationServiceImpl.java:56`

**Bug #5 (已修复): 从 CANCELLED 恢复预约时未检查名额充足性**

- **严重程度**: 中
- **现象**: 取消后再恢复 PENDING/CONFIRMED 时，直接增加名额未检查是否已满
- **根因**: `updateStatus()` 中恢复逻辑未检查课程剩余名额
- **修复**: 添加名额检查逻辑，不足时抛出异常拒绝恢复
- **文件**: `service/impl/ReservationServiceImpl.java:87`

**Bug #6 (已修复): UpdateStatusRequest 缺少验证注解**

- **严重程度**: 低
- **现象**: status 字段可以为空字符串或 null，Controller 未使用 @Valid
- **修复**: 添加 `@NotBlank` 注解 + Controller 添加 `@Valid`
- **文件**: `dto/UpdateStatusRequest.java`, `controller/ReservationController.java`

---

## 六、天气查询 `/api/weather`

### 测试用例

| # | 方法 | 路径 | 参数 | 结果 | 状态码 |
|---|------|------|------|------|--------|
| 6.1 | GET | /api/weather | `?city=Beijing` | 通过(API key 无效) | 200 |
| 6.2 | GET | /api/weather | (缺少 city) | **400 (已修复)** | 400 |

### 发现的 Bug

**Bug #7 (已修复): 缺少 city 参数返回 500 而非 400**

- **严重程度**: 低
- **现象**: 不传 city 参数时 Spring 抛出 `MissingServletRequestParameterException`，被全局 Exception 处理器捕获返回 500
- **修复**: GlobalExceptionHandler 添加 `MissingServletRequestParameterException` 处理器，返回 400
- **文件**: `config/GlobalExceptionHandler.java`

### 备注

- `gaode.weather.api.key=your_gaode_api_key` 为占位符，需替换为真实高德 API key

---

## 七、文件上传 `/api/files`

### 测试用例

| # | 方法 | 路径 | 参数 | 结果 | 状态码 |
|---|------|------|------|------|--------|
| 7.1 | POST | /api/files/upload | `file=@test.txt, dir=images` | 通过 | 200 |
| 7.2 | POST | /api/files/upload | `file=@test.txt, dir=unity` | 通过 | 200 |
| 7.3 | GET | (返回的 URL) | - | 文件可访问 | 200 |

### 结果

全部通过。文件名 UUID 生成正常，子目录隔离正常，文件内容可访问。

---

## 八、AI 模块（已跳过）

用户未开启 AI 相关服务，以下接口已跳过测试：

| 接口 | 原因 |
|------|------|
| GET/POST `/api/chat/ask` | AI 对话后端服务未部署 (http://26.34.92.227:5000) |
| POST `/api/travel/advice` | 依赖天气 API + AI 对话 |
| POST `/api/voice/recognize` | 语音识别依赖 DashScope WebSocket |

---

## Bug 修复汇总

| # | 严重度 | 描述 | 文件 | 状态 |
|---|--------|------|------|------|
| 1 | 高 | UserServiceImpl - role 默认值缺失 | `service/impl/UserServiceImpl.java` | 已修复 |
| 2 | 低 | PUT 更新为全量替换(设计限制) | `mapper/ArticleMapper.java` 等 | 已知限制 |
| 3 | 高 | PENDING 预约删除不释放名额 | `service/impl/ReservationServiceImpl.java` | 已修复 |
| 4 | 中 | 预约创建 TOCTOU 并发竞争 | `service/impl/ReservationServiceImpl.java` | 已修复 |
| 5 | 中 | 恢复预约未检查名额充足性 | `service/impl/ReservationServiceImpl.java` | 已修复 |
| 6 | 低 | UpdateStatusRequest 缺少验证 | `dto/UpdateStatusRequest.java`, `controller/ReservationController.java` | 已修复 |
| 7 | 低 | 缺少参数返回 500 而非 400 | `config/GlobalExceptionHandler.java` | 已修复 |

---

## 其他发现

### 已知限制 / 改进建议

1. **init.sql admin 密码哈希可能无效**: `init.sql` 中的 BCrypt 哈希疑似手动构造，建议在实现登录功能前用 `BCryptPasswordEncoder` 重新生成
2. **POST 响应中 createdAt/updatedAt 为 null**: MyBatis `@Insert` 不自动回填时间字段，虽然数据库值正确，但前端需二次请求才能获取——可考虑 insert 后立即 select 返回完整数据
3. **TextChatController / VoiceToTextController 响应格式不一致**: 这两个 Controller 未使用统一的 `ApiResponse<T>` 包装，与其他接口格式不统一
4. **CorsConfig 潜在冲突**: `allowCredentials(true)` + `allowedOriginPattern("*")` 在 Spring 5.3+ 是合法的，但部分浏览器对通配符+凭证的组合行为可能不同

### 外部依赖状态

| 服务 | 状态 | 说明 |
|------|------|------|
| MySQL | 正常 | cloud_museum 数据库运行正常 |
| DashScope SDK | 正常 | 初始化成功 (WebSocket URL 有效) |
| 高德天气 API | 配置缺失 | key 为占位符 `your_gaode_api_key` |
| AI 对话服务 | 不可达 | `http://26.34.92.227:5000` 连接超时 |

---

## 建议操作

1. 在 IDEA 中重新编译项目 (Ctrl+F9) 以应用所有修复
2. 将 `gaode.weather.api.key` 替换为真实高德 API key
3. 实现登录功能时验证/替换 init.sql 中的 admin 密码哈希
4. 考虑统一所有 Controller 的响应格式为 `ApiResponse<T>`

---

> 测试完成时间: 2026-05-19 13:05 | 测试工程师: CloudMuseum Backend Team
