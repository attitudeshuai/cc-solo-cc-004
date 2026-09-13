import app from './app';
import config from './config';
import { testConnection } from './config/database';

const startServer = async () => {
    try {
        // 测试数据库连接
        await testConnection();
        console.log('✅ 数据库连接成功');

        // 启动服务器
        app.listen(config.port, () => {
            console.log(`
========================================
🚀 Vunex 后端服务已启动
----------------------------------------
📍 地址: http://localhost:${config.port}
🔧 环境: ${config.nodeEnv}
📊 API: http://localhost:${config.port}/api
❤️  健康检查: http://localhost:${config.port}/health
========================================
      `);
        });
    } catch (error) {
        console.error('❌ 服务器启动失败:', error);
        process.exit(1);
    }
};

// 启动服务器
startServer();

// 优雅关闭
process.on('SIGTERM', () => {
    console.log('收到 SIGTERM 信号，正在关闭服务器...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('收到 SIGINT 信号，正在关闭服务器...');
    process.exit(0);
});
