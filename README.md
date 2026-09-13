# Vunex - Vue3 + Node.js + MySQL 全栈项目

一个现代化的全栈 Web 应用项目模板，采用 Vue3 + TypeScript 前端和 Node.js + Express + TypeScript 后端。

## 🛠 技术栈

### 前端
- **框架**: Vue 3 + TypeScript
- **构建工具**: Vite
- **状态管理**: Pinia
- **路由**: Vue Router
- **UI 框架**: Bootstrap 5 + Bootstrap Icons
- **HTTP 客户端**: Axios
- **图表**: ECharts + vue-echarts
- **日期处理**: Day.js

### 后端
- **框架**: Express + TypeScript
- **数据库**: MySQL 8.0 + mysql2
- **认证**: JWT + bcryptjs
- **验证**: express-validator
- **安全**: helmet, cors

### 数据库
- **MySQL 8.0**

## 🚀 快速启动 (Docker)

### 前置条件
- 确保已安装 [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- 无需安装 Node.js、MySQL 或其他依赖

### 启动步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd vunex
   ```

2. **配置环境变量（可选）**
   ```bash
   # 复制环境变量模板
   cp frontend/.env.example frontend/.env
   cp backend/.env.example backend/.env
   ```

3. **启动所有服务**
   ```bash
   docker compose up --build
   ```

4. **访问应用**
   - 🌐 前端：http://localhost:3000
   - 🔧 后端 API：http://localhost:8000
   - 💾 MySQL：localhost:3306

### 停止服务
```bash
docker compose down
```

### 清理数据（包括数据库）
```bash
docker compose down -v
```

## 📁 项目结构

```
vunex/
├── frontend/           # Vue3 前端项目
│   ├── src/
│   │   ├── components/ # 组件
│   │   ├── pages/      # 页面
│   │   ├── router/     # 路由配置
│   │   ├── stores/     # Pinia 状态管理
│   │   ├── services/   # API 服务
│   │   └── types/      # TypeScript 类型
│   └── Dockerfile
├── backend/            # Node.js 后端项目
│   ├── src/
│   │   ├── controllers/ # 控制器
│   │   ├── models/      # 数据模型
│   │   ├── routes/      # 路由
│   │   ├── services/    # 业务逻辑
│   │   └── middlewares/ # 中间件
│   └── Dockerfile
├── database/           # 数据库脚本
│   ├── init.sql        # 初始化脚本
│   └── migrations/     # 迁移脚本
├── docs/               # 项目文档
├── docker-compose.yml  # Docker Compose 配置
└── README.md           # 项目说明
```

## 🧪 测试账号

> 首次启动后，可使用以下测试账号：

- **用户名**: admin
- **密码**: admin123

## � 项目文档

### 核心文档
- [📖 API 接口文档](./docs/api.md)
- [📦 部署指南](./docs/deployment.md)
- [🔧 本地开发指南](./docs/development.md)

### 项目管理工件
- [� 实施计划](./docs/implementation_plan.md)
- [✅ 任务清单](./docs/task.md)
- [📝 完成报告](./docs/walkthrough.md)

## 📄 许可证

MIT License
