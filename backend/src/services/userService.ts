import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User, UserUpdate } from '../models/User';
import { query } from '../config/database';
import config from '../config';

// 创建用户
export const createUser = async (
    username: string,
    email: string,
    password: string
): Promise<{ user: Omit<User, 'password'>; token: string }> => {
    // 检查用户名是否已存在
    const existingUsers = await query<User[]>(
        'SELECT * FROM users WHERE username = ? OR email = ?',
        [username, email]
    );

    if (existingUsers.length > 0) {
        throw new Error('用户名或邮箱已存在');
    }

    // 加密密码
    const hashedPassword = await bcrypt.hash(password, 10);

    // 插入用户
    const result = await query<any>(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, hashedPassword]
    );

    const userId = result.insertId;

    // 生成 JWT
    const token = jwt.sign({ userId }, config.jwt.secret, {
        expiresIn: config.jwt.expiresIn as any,
    });

    // 返回用户信息（不包含密码）
    const user = {
        id: userId,
        username,
        email,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };

    return { user, token };
};

// 用户登录
export const loginUser = async (
    username: string,
    password: string
): Promise<{ user: Omit<User, 'password'>; token: string }> => {
    // 查找用户
    const users = await query<User[]>('SELECT * FROM users WHERE username = ?', [username]);

    if (users.length === 0) {
        throw new Error('用户名或密码错误');
    }

    const user = users[0];

    // 验证密码
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        throw new Error('用户名或密码错误');
    }

    // 生成 JWT
    const token = jwt.sign({ userId: user.id }, config.jwt.secret, {
        expiresIn: config.jwt.expiresIn as any,
    });

    // 返回用户信息（不包含密码）
    const { password: _, ...userWithoutPassword } = user;

    return { user: userWithoutPassword, token };
};

// 获取所有用户
export const getAllUsers = async (): Promise<Omit<User, 'password'>[]> => {
    const users = await query<User[]>(
        'SELECT id, username, email, created_at as createdAt, updated_at as updatedAt FROM users'
    );
    return users;
};

// 根据 ID 获取用户
export const getUserById = async (id: number): Promise<Omit<User, 'password'>> => {
    const users = await query<User[]>(
        'SELECT id, username, email, created_at as createdAt, updated_at as updatedAt FROM users WHERE id = ?',
        [id]
    );

    if (users.length === 0) {
        throw new Error('用户不存在');
    }

    return users[0];
};

// 更新用户
export const updateUser = async (
    id: number,
    data: UserUpdate
): Promise<Omit<User, 'password'>> => {
    const updates: string[] = [];
    const values: unknown[] = [];

    if (data.username) {
        updates.push('username = ?');
        values.push(data.username);
    }

    if (data.email) {
        updates.push('email = ?');
        values.push(data.email);
    }

    if (data.password) {
        updates.push('password = ?');
        values.push(await bcrypt.hash(data.password, 10));
    }

    if (updates.length === 0) {
        return getUserById(id);
    }

    values.push(id);

    await query(`UPDATE users SET ${updates.join(', ')}, updated_at = NOW() WHERE id = ?`, values);

    return getUserById(id);
};

// 删除用户
export const deleteUser = async (id: number): Promise<void> => {
    const result = await query<any>('DELETE FROM users WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
        throw new Error('用户不存在');
    }
};
