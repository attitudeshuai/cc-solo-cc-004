# 开发文档

## 开发环境要求

如需本地开发（不使用 Docker），请安装以下依赖：

- Node.js 18+
- MySQL 8.0
- npm 或 yarn

---

## 本地开发

### 1. 启动数据库

使用 Docker 启动 MySQL（推荐）：

```bash
docker compose up mysql -d
```

或使用本地 MySQL 服务。

### 2. 后端开发

```bash
# 进入后端目录
cd backend

# 安装依赖
npm install

# 复制环境变量
cp .env.example .env
# 编辑 .env 文件配置数据库连接

# 启动开发服务器（支持热重载）
npm run dev
```

后端将在 http://localhost:8000 启动。

### 3. 前端开发

```bash
# 进入前端目录
cd frontend

# 安装依赖
npm install

# 复制环境变量
cp .env.example .env

# 启动开发服务器（支持热重载）
npm run dev
```

前端将在 http://localhost:5173 启动（开发模式）。

---

## 目录结构

### 前端结构

```
frontend/
├── public/              # 静态资源
├── src/
│   ├── assets/          # 样式和图片
│   │   └── styles/      # SCSS 样式
│   ├── components/      # 组件
│   │   ├── common/      # 通用组件
│   │   └── layout/      # 布局组件
│   ├── pages/           # 页面
│   ├── router/          # 路由配置
│   ├── services/        # API 服务
│   ├── stores/          # Pinia 状态管理
│   ├── types/           # TypeScript 类型
│   ├── utils/           # 工具函数
│   ├── App.vue          # 根组件
│   └── main.ts          # 入口文件
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### 后端结构

```
backend/
├── src/
│   ├── config/          # 配置文件
│   ├── controllers/     # 控制器层
│   ├── middlewares/     # 中间件
│   ├── models/          # 数据模型
│   ├── routes/          # 路由层
│   ├── services/        # 业务逻辑层
│   ├── types/           # TypeScript 类型
│   ├── utils/           # 工具函数
│   ├── app.ts           # Express 应用
│   └── server.ts        # 服务器入口
├── package.json
└── tsconfig.json
```

---

## 开发命令

### 前端

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览生产构建 |
| `npm run lint` | 代码检查 |
| `npm run format` | 代码格式化 |

### 后端

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器（热重载） |
| `npm run build` | 编译 TypeScript |
| `npm start` | 启动生产服务器 |
| `npm run lint` | 代码检查 |
| `npm run format` | 代码格式化 |
| `npm run db:test` | 测试数据库连接 |

---

## 代码规范

### 前端规范

- 使用 Vue 3 Composition API
- 组件文件名使用 PascalCase
- 工具函数使用 camelCase
- 样式使用 SCSS

### 后端规范

- 使用 TypeScript 严格模式
- 采用 MVC 分层架构
- 使用 async/await 处理异步
- 所有接口返回统一格式

### 代码格式化

项目使用 ESLint + Prettier 进行代码格式化：

```bash
# 检查代码
npm run lint

# 格式化代码
npm run format
```

---

## Git 提交规范

提交信息格式：

```
<type>(<scope>): <subject>

<body>

<footer>
```

类型（type）：
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 重构
- `test`: 测试相关
- `chore`: 构建/工具相关

示例：
```
feat(auth): 添加用户登录功能

- 实现 JWT 认证
- 添加登录 API
- 添加认证中间件
```

---

## 调试技巧

### 前端调试

1. 使用 Vue DevTools 浏览器扩展
2. 使用 `console.log()` 或断点调试
3. 检查网络请求（Network 面板）

### 后端调试

1. 查看终端日志输出
2. 使用 VS Code 断点调试
3. 使用 Postman 测试 API
