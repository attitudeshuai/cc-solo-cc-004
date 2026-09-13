import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/userService';

// 用户注册
export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, email, password } = req.body;
        const result = await userService.createUser(username, email, password);

        res.status(201).json({
            success: true,
            message: '注册成功',
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

// 用户登录
export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;
        const result = await userService.loginUser(username, password);

        res.json({
            success: true,
            message: '登录成功',
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

// 获取当前用户信息
export const getCurrentUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = (req as any).userId;
        const user = await userService.getUserById(userId);

        res.json({
            success: true,
            data: { user },
        });
    } catch (error) {
        next(error);
    }
};

// 获取用户列表
export const getUsers = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userService.getAllUsers();

        res.json({
            success: true,
            data: { users },
        });
    } catch (error) {
        next(error);
    }
};

// 获取单个用户
export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const user = await userService.getUserById(parseInt(id, 10));

        res.json({
            success: true,
            data: { user },
        });
    } catch (error) {
        next(error);
    }
};

// 更新用户
export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const user = await userService.updateUser(parseInt(id, 10), updateData);

        res.json({
            success: true,
            message: '更新成功',
            data: { user },
        });
    } catch (error) {
        next(error);
    }
};

// 删除用户
export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await userService.deleteUser(parseInt(id, 10));

        res.json({
            success: true,
            message: '删除成功',
        });
    } catch (error) {
        next(error);
    }
};
