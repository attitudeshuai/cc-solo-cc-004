import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

// 验证中间件
export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => ({
            field: (error as any).path,
            message: error.msg,
        }));

        res.status(400).json({
            success: false,
            message: '请求参数验证失败',
            errors: errorMessages,
        });
        return;
    }

    next();
};
