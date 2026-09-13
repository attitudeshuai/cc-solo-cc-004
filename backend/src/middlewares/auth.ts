import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

// 扩展 Request 类型
declare global {
    namespace Express {
        interface Request {
            userId?: number;
        }
    }
}

// JWT 认证中间件
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    try {
        // 从请求头获取 token
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            res.status(401).json({
                success: false,
                message: '未提供认证令牌',
            });
            return;
        }

        const token = authHeader.substring(7);

        // 验证 token
        const decoded = jwt.verify(token, config.jwt.secret) as { userId: number };
        req.userId = decoded.userId;

        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: '认证令牌无效或已过期',
        });
    }
};

// 可选认证中间件（token 存在则验证，不存在则继续）
export const optionalAuthenticate = (req: Request, _res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.substring(7);
            const decoded = jwt.verify(token, config.jwt.secret) as { userId: number };
            req.userId = decoded.userId;
        }
        next();
    } catch (error) {
        // Token 无效时不报错，继续执行
        next();
    }
};
