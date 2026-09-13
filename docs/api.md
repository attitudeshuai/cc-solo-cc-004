# API 接口文档

## 概述

Vunex 后端 API 基于 RESTful 架构设计，所有接口返回 JSON 格式数据。

**基础 URL**: `http://localhost:8000/api`

## 响应格式

### 成功响应

```json
{
  "success": true,
  "message": "操作成功",
  "data": { ... }
}
```

### 错误响应

```json
{
  "success": false,
  "message": "错误信息",
  "errors": [
    {
      "field": "字段名",
      "message": "错误详情"
    }
  ]
}
```

---

## 认证

除公开接口外，所有接口需要在请求头中携带 JWT Token：

```
Authorization: Bearer <token>
```

---

## 接口列表

### 健康检查

#### GET /api/health

检查 API 服务状态。

**请求示例**:
```bash
curl http://localhost:8000/api/health
```

**响应示例**:
```json
{
  "success": true,
  "message": "API 服务正常运行",
  "timestamp": "2024-01-21T08:00:00.000Z"
}
```

---

### 用户认证

#### POST /api/auth/register

用户注册。

**请求体**:
```json
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123"
}
```

**响应示例**:
```json
{
  "success": true,
  "message": "注册成功",
  "data": {
    "user": {
      "id": 1,
      "username": "testuser",
      "email": "test@example.com",
      "createdAt": "2024-01-21T08:00:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

#### POST /api/auth/login

用户登录。

**请求体**:
```json
{
  "username": "testuser",
  "password": "password123"
}
```

**响应示例**:
```json
{
  "success": true,
  "message": "登录成功",
  "data": {
    "user": {
      "id": 1,
      "username": "testuser",
      "email": "test@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

#### GET /api/auth/me

获取当前登录用户信息（需认证）。

**请求头**:
```
Authorization: Bearer <token>
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "username": "testuser",
      "email": "test@example.com",
      "createdAt": "2024-01-21T08:00:00.000Z"
    }
  }
}
```

---

### 用户管理

#### GET /api/users

获取用户列表（需认证）。

**响应示例**:
```json
{
  "success": true,
  "data": {
    "users": [
      {
        "id": 1,
        "username": "admin",
        "email": "admin@example.com",
        "createdAt": "2024-01-21T08:00:00.000Z"
      }
    ]
  }
}
```

---

#### GET /api/users/:id

获取单个用户信息（需认证）。

**响应示例**:
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "username": "admin",
      "email": "admin@example.com",
      "createdAt": "2024-01-21T08:00:00.000Z"
    }
  }
}
```

---

#### PUT /api/users/:id

更新用户信息（需认证）。

**请求体**:
```json
{
  "username": "newusername",
  "email": "newemail@example.com"
}
```

---

#### DELETE /api/users/:id

删除用户（需认证）。

**响应示例**:
```json
{
  "success": true,
  "message": "删除成功"
}
```

---

## 错误码

| HTTP 状态码 | 说明 |
|------------|------|
| 200 | 请求成功 |
| 201 | 创建成功 |
| 400 | 请求参数错误 |
| 401 | 未认证或认证失败 |
| 403 | 无权限 |
| 404 | 资源不存在 |
| 409 | 资源冲突（如用户名已存在） |
| 500 | 服务器内部错误 |
