# Vue3 + Node.js + MySQL 全栈项目创建

基于项目规则创建一个完整的全栈项目，包含前端（Vue3 + TypeScript + Vite）、后端（Node.js + Express + TypeScript）和数据库（MySQL）。

## 用户审核事项

> [!IMPORTANT]
> 项目规则要求使用 Tailwind CSS，但您的需求指定使用 Bootstrap 5。本计划将按您的需求使用 **Bootstrap 5 + Bootstrap Icons**。

> [!NOTE]
> 前端默认端口将使用 3000，后端使用 8000，符合项目规则的端口映射标准。

---

## 项目目录结构

```
vunex/
├── README.md                    # 项目说明书
├── docker-compose.yml           # Docker Compose 配置
├── .gitignore                   # Git 忽略文件
│
├── frontend/                    # Vue3 前端项目
│   ├── Dockerfile               # 前端 Docker 配置
│   ├── nginx.conf               # Nginx 配置
│   ├── package.json             # 前端依赖
│   ├── vite.config.ts           # Vite 配置
│   ├── tsconfig.json            # TypeScript 配置
│   ├── .env.example             # 环境变量模板
│   ├── .eslintrc.cjs            # ESLint 配置
│   ├── .prettierrc              # Prettier 配置
│   ├── index.html               # 入口 HTML
│   └── src/
│       ├── main.ts              # 应用入口
│       ├── App.vue              # 根组件
│       ├── vite-env.d.ts        # Vite 类型声明
│       ├── assets/              # 静态资源
│       │   └── styles/
│       │       └── main.scss    # 全局样式
│       ├── components/          # 公共组件
│       │   ├── common/          # 通用组件
│       │   │   ├── LoadingSpinner.vue
│       │   │   └── ToastMessage.vue
│       │   └── layout/          # 布局组件
│       │       ├── AppHeader.vue
│       │       ├── AppFooter.vue
│       │       └── AppSidebar.vue
│       ├── pages/               # 页面组件
│       │   ├── HomePage.vue
│       │   ├── LoginPage.vue    # 👈 新增登录页
│       │   └── AboutPage.vue
│       ├── router/              # 路由配置
│       │   └── index.ts
│       ├── stores/              # Pinia 状态管理
│       │   ├── index.ts
│       │   └── useUserStore.ts
│       ├── services/            # API 服务
│       │   └── api.ts
│       ├── utils/               # 工具函数
│       │   └── index.ts
│       └── types/               # TypeScript 类型定义
│           └── index.ts
│
├── backend/                     # Node.js 后端项目
│   ├── Dockerfile               # 后端 Docker 配置
│   ├── package.json             # 后端依赖
│   ├── tsconfig.json            # TypeScript 配置
│   ├── .env.example             # 环境变量模板
│   ├── .eslintrc.cjs            # ESLint 配置
│   ├── .prettierrc              # Prettier 配置
│   └── src/
│       ├── app.ts               # 应用入口
│       ├── server.ts            # 服务器启动
│       ├── config/              # 配置文件
│       │   ├── database.ts      # 数据库配置
│       │   └── index.ts
│       ├── controllers/         # 控制器层
│       │   └── userController.ts
│       ├── models/              # 数据模型层
│       │   └── User.ts
│       ├── routes/              # 路由层
│       │   ├── index.ts
│       │   └── userRoutes.ts
│       ├── services/            # 业务逻辑层
│       │   └── userService.ts
│       ├── middlewares/         # 中间件
│       │   ├── auth.ts
│       │   ├── errorHandler.ts
│       │   └── validator.ts
│       ├── utils/               # 工具函数
│       │   └── index.ts
│       └── types/               # TypeScript 类型定义
│           └── index.ts
│
├── database/                    # 数据库脚本
│   ├── init.sql                 # 初始化脚本
│   └── migrations/              # 迁移脚本
│       └── 001_create_users.sql
│
└── docs/                        # 项目文档
    ├── api.md                   # API 文档
    ├── deployment.md            # 部署文档
    └── development.md           # 开发文档
```

---

## 实施计划

### 第一阶段：项目基础结构

#### [NEW] [docker-compose.yml](file:///Users/jack.yan/Downloads/labeleases/vunex/docker-compose.yml)
- 定义三个服务：frontend、backend、mysql
- 配置网络和数据卷
- 设置环境变量

#### [NEW] [.gitignore](file:///Users/jack.yan/Downloads/labeleases/vunex/.gitignore)
- 忽略 node_modules、.env、dist 等

#### [NEW] [README.md](file:///Users/jack.yan/Downloads/labeleases/vunex/README.md)
- 项目说明、技术栈、快速启动指南

---

### 第二阶段：前端项目初始化

#### [NEW] [frontend/package.json](file:///Users/jack.yan/Downloads/labeleases/vunex/frontend/package.json)
依赖包括：
- **核心**：vue, vue-router, pinia
- **UI**：bootstrap, bootstrap-icons
- **工具**：axios, echarts, vue-echarts, dayjs
- **开发**：vite, typescript, @vitejs/plugin-vue, sass

#### [NEW] [frontend/vite.config.ts](file:///Users/jack.yan/Downloads/labeleases/vunex/frontend/vite.config.ts)
- 配置 Vue 插件
- 配置路径别名 (@/)
- 配置开发服务器代理（/api -> 后端）
- 配置构建优化

#### [NEW] [frontend/tsconfig.json](file:///Users/jack.yan/Downloads/labeleases/vunex/frontend/tsconfig.json)
- 配置 TypeScript 编译选项
- 配置路径别名映射

#### [NEW] [frontend/.env.example](file:///Users/jack.yan/Downloads/labeleases/vunex/frontend/.env.example)
- VITE_API_BASE_URL
- VITE_APP_TITLE

#### [NEW] [frontend/Dockerfile](file:///Users/jack.yan/Downloads/labeleases/vunex/frontend/Dockerfile)
- 多阶段构建
- 使用 Nginx 作为生产服务器

---

### 第三阶段：后端项目初始化

#### [NEW] [backend/package.json](file:///Users/jack.yan/Downloads/labeleases/vunex/backend/package.json)
依赖包括：
- **核心**：express, cors, helmet, dotenv
- **数据库**：mysql2
- **认证**：jsonwebtoken, bcryptjs
- **验证**：express-validator
- **开发**：typescript, ts-node-dev, @types/*

#### [NEW] [backend/tsconfig.json](file:///Users/jack.yan/Downloads/labeleases/vunex/backend/tsconfig.json)
- 配置 ES2020 目标
- 配置模块解析
- 配置输出目录

#### [NEW] [backend/src/app.ts](file:///Users/jack.yan/Downloads/labeleases/vunex/backend/src/app.ts)
- Express 应用配置
- 中间件注册
- 路由挂载
- 错误处理

#### [NEW] [backend/.env.example](file:///Users/jack.yan/Downloads/labeleases/vunex/backend/.env.example)
- DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD
- JWT_SECRET, JWT_EXPIRES_IN
- PORT

#### [NEW] [backend/Dockerfile](file:///Users/jack.yan/Downloads/labeleases/vunex/backend/Dockerfile)
- 多阶段构建
- 编译 TypeScript 后运行

---

### 第三阶段：数据库和文档

#### [NEW] [database/init.sql](file:///Users/jack.yan/Downloads/labeleases/vunex/database/init.sql)
- 创建数据库
- 设置字符集

#### [NEW] [database/migrations/001_create_users.sql](file:///Users/jack.yan/Downloads/labeleases/vunex/database/migrations/001_create_users.sql)
- 创建用户表示例

#### [NEW] [docs/api.md](file:///Users/jack.yan/Downloads/labeleases/vunex/docs/api.md)
- API 接口文档

#### [NEW] [docs/deployment.md](file:///Users/jack.yan/Downloads/labeleases/vunex/docs/deployment.md)
- 部署说明

#### [NEW] [docs/development.md](file:///Users/jack.yan/Downloads/labeleases/vunex/docs/development.md)
- 开发环境配置说明

---

### 第六阶段：UI 优化与登录功能

#### [NEW] [frontend/src/pages/LoginPage.vue](file:///Users/jack.yan/Downloads/labeleases/vunex/frontend/src/pages/LoginPage.vue)
- 独立的登录页面组件
- 统一的输入框交互样式（Input Group）

#### [MODIFY] [frontend/src/components/layout/AppHeader.vue](file:///Users/jack.yan/Downloads/labeleases/vunex/frontend/src/components/layout/AppHeader.vue)
- 优化导航栏为纯文字+下划线动画风格
- 移除登录按钮（未登录状态下隐藏）

#### [MODIFY] [frontend/src/stores/useUserStore.ts](file:///Users/jack.yan/Downloads/labeleases/vunex/frontend/src/stores/useUserStore.ts)
- 修复 Token 路径解析逻辑

---

## 验证计划

### 自动化测试
```bash
# 1. 构建并启动所有服务
docker compose up --build

# 2. 验证前端访问
curl http://localhost:3000

# 3. 验证后端 API
curl http://localhost:8000/api/health

# 4. 验证数据库连接
docker compose exec backend npm run db:test
```

### 手动验证
- 访问 http://localhost:3000 确认前端页面正常显示
- 访问 http://localhost:8000/api/health 确认后端 API 响应
- 检查 UI 是否符合美观度要求（卡片设计、Hover效果、响应式）
