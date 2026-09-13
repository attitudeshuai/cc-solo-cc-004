import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import { errorHandler } from './middlewares/errorHandler';
import config from './config';

// 创建 Express 应用
const app: Application = express();

// 安全中间件
app.use(helmet());

// CORS 配置
app.use(
    cors({
        origin: config.corsOrigin,
        credentials: true,
    })
);

// 请求体解析
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 请求日志（开发环境）
if (config.nodeEnv === 'development') {
    app.use((req, _res, next) => {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
        next();
    });
}

// API 路由
app.use('/api', routes);

// 健康检查端点
app.get('/health', (_req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
    });
});

// 404 处理
app.use((_req, res) => {
    res.status(404).json({
        success: false,
        message: '接口不存在',
    });
});

// 全局错误处理
app.use(errorHandler);

export default app;
