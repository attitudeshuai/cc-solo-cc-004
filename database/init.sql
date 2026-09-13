-- Vunex 数据库初始化脚本
-- 创建时间: 2024

-- 设置字符集
SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;

-- 创建数据库（如果不存在）
CREATE DATABASE IF NOT EXISTS vunex
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;

-- 使用数据库
USE vunex;

-- 输出信息
SELECT '数据库初始化完成' AS message;
