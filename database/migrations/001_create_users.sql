-- 用户表迁移脚本
-- 版本: 001
-- 描述: 创建用户表

USE vunex;

-- 创建用户表
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT COMMENT '用户ID',
    username VARCHAR(50) NOT NULL UNIQUE COMMENT '用户名',
    email VARCHAR(100) NOT NULL UNIQUE COMMENT '邮箱',
    password VARCHAR(255) NOT NULL COMMENT '密码（加密）',
    avatar VARCHAR(255) DEFAULT NULL COMMENT '头像URL',
    status TINYINT DEFAULT 1 COMMENT '状态：0-禁用，1-正常',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    
    INDEX idx_username (username),
    INDEX idx_email (email),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户表';

-- 插入测试用户（密码: admin123，使用 bcrypt 加密）
-- 密码哈希值对应 'admin123'
INSERT INTO users (username, email, password) VALUES
('admin', 'admin@example.com', '$2a$10$a6OfdkTFLJegdaIr9WbsV.c43/GEApKvb8PX3IlLAYvSzeMgYEI/a')
ON DUPLICATE KEY UPDATE username = username;

SELECT '用户表创建完成' AS message;
