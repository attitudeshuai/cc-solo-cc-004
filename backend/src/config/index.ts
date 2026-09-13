import dotenv from 'dotenv';

// 加载环境变量
dotenv.config();

const config = {
    // 服务器配置
    port: parseInt(process.env.PORT || '8000', 10),
    nodeEnv: process.env.NODE_ENV || 'development',

    // 数据库配置
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '3306', 10),
        name: process.env.DB_NAME || 'vunex',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
    },

    // JWT 配置
    jwt: {
        secret: process.env.JWT_SECRET || 'your-secret-key',
        expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    },

    // CORS 配置
    corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
};

export default config;
