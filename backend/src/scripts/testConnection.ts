import { testConnection } from '../config/database';

// 测试数据库连接脚本
const main = async () => {
    try {
        console.log('正在测试数据库连接...');
        await testConnection();
        console.log('✅ 数据库连接成功！');
        process.exit(0);
    } catch (error) {
        console.error('❌ 数据库连接失败:', error);
        process.exit(1);
    }
};

main();
