# 部署文档

## Docker 部署（推荐）

### 前置条件

- 安装 [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- 无需安装 Node.js、MySQL 或其他依赖

### 快速部署

```bash
# 1. 克隆项目
git clone <repository-url>
cd vunex

# 2. 启动所有服务
docker compose up --build -d

# 3. 查看服务状态
docker compose ps

# 4. 查看日志
docker compose logs -f
```

### 访问应用

| 服务 | 地址 |
|------|------|
| 前端 | http://localhost:3000 |
| 后端 API | http://localhost:8000 |
| MySQL | localhost:3306 |

### 停止服务

```bash
# 停止所有服务
docker compose down

# 停止并删除数据卷（会清除数据库数据）
docker compose down -v
```

---

## 环境变量配置

### 生产环境变量

创建 `.env` 文件在项目根目录：

```env
# MySQL 配置
MYSQL_ROOT_PASSWORD=your-strong-root-password
MYSQL_DATABASE=vunex
MYSQL_USER=vunex_user
MYSQL_PASSWORD=your-strong-user-password

# JWT 配置
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=7d
```

### 前端环境变量

复制并修改 `frontend/.env.example`：

```bash
cp frontend/.env.example frontend/.env
```

### 后端环境变量

复制并修改 `backend/.env.example`：

```bash
cp backend/.env.example backend/.env
```

---

## 生产环境注意事项

### 安全配置

1. **修改默认密码**: 修改 MySQL root 密码和用户密码
2. **修改 JWT 密钥**: 使用强随机字符串
3. **启用 HTTPS**: 在生产环境配置 SSL 证书
4. **配置防火墙**: 只开放必要端口

### 性能优化

1. **启用 Gzip 压缩**: 已在 Nginx 配置中启用
2. **配置 CDN**: 静态资源可通过 CDN 分发
3. **数据库优化**: 根据实际情况调整 MySQL 配置

### 监控

建议配置以下监控：

- 应用健康检查: `GET /health`
- API 健康检查: `GET /api/health`
- Docker 容器监控
- MySQL 性能监控

---

## 常见问题

### 端口被占用

```bash
# 查看端口占用
lsof -i :3000
lsof -i :8000
lsof -i :3306

# 修改 docker-compose.yml 中的端口映射
```

### 数据库连接失败

```bash
# 检查 MySQL 容器状态
docker compose logs mysql

# 等待数据库完全启动后重试
docker compose restart backend
```

### 清理 Docker 资源

```bash
# 清理未使用的镜像
docker image prune -a

# 清理所有未使用的资源
docker system prune -a
```
