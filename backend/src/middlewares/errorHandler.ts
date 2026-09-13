import { Request, Response, NextFunction } from 'express';

// 自定义错误类
export class AppError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number = 500) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

// 全局错误处理中间件
export const errorHandler = (
    err: Error | AppError,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    console.error('错误:', err);

    // 如果是自定义错误
    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
        return;
    }

    // 数据库相关错误
    if ((err as any).code === 'ER_DUP_ENTRY') {
        res.status(409).json({
            success: false,
            message: '数据已存在',
        });
        return;
    }

    // JWT 相关错误
    if (err.name === 'JsonWebTokenError') {
        res.status(401).json({
            success: false,
            message: '无效的认证令牌',
        });
        return;
    }

    if (err.name === 'TokenExpiredError') {
        res.status(401).json({
            success: false,
            message: '认证令牌已过期',
        });
        return;
    }

    // 默认错误响应
    const statusCode = 500;
    const message = process.env.NODE_ENV === 'production' ? '服务器内部错误' : err.message;

    res.status(statusCode).json({
        success: false,
        message,
    });
};
