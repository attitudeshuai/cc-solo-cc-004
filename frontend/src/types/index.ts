// 用户类型
export interface User {
    id: number
    username: string
    email: string
    avatar?: string
    createdAt: string
    updatedAt: string
}

// API 响应类型
export interface ApiResponse<T = any> {
    success: boolean
    message: string
    data?: T
}

// 分页参数
export interface PaginationParams {
    page: number
    pageSize: number
}

// 分页响应
export interface PaginatedResponse<T> {
    items: T[]
    total: number
    page: number
    pageSize: number
    totalPages: number
}

// Toast 消息类型
export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface ToastMessage {
    id: string
    type: ToastType
    message: string
    duration?: number
}
