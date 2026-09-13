import mysql from 'mysql2/promise';
import config from './index';

// 创建连接池
const pool = mysql.createPool({
    host: config.db.host,
    port: config.db.port,
    database: config.db.name,
    user: config.db.user,
    password: config.db.password,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
});

// 测试数据库连接
export const testConnection = async (): Promise<void> => {
    const connection = await pool.getConnection();
    try {
        await connection.ping();
    } finally {
        connection.release();
    }
};

// 执行查询
export const query = async <T>(sql: string, params?: unknown[]): Promise<T> => {
    const [rows] = await pool.execute(sql, params);
    return rows as T;
};

// 执行事务
export const transaction = async <T>(
    callback: (connection: mysql.PoolConnection) => Promise<T>
): Promise<T> => {
    const connection = await pool.getConnection();
    await connection.beginTransaction();

    try {
        const result = await callback(connection);
        await connection.commit();
        return result;
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.release();
    }
};

export default pool;
