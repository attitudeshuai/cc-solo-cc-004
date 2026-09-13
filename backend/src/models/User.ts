// 用户接口
export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
}

// 创建用户参数
export interface UserCreate {
    username: string;
    email: string;
    password: string;
}

// 更新用户参数
export interface UserUpdate {
    username?: string;
    email?: string;
    password?: string;
}
