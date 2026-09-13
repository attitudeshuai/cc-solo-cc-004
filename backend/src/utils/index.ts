/**
 * 生成随机字符串
 */
export const generateRandomString = (length: number = 32): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

/**
 * 休眠函数
 */
export const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * 格式化日期
 */
export const formatDate = (date: Date, format: string = 'YYYY-MM-DD HH:mm:ss'): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return format
        .replace('YYYY', String(year))
        .replace('MM', month)
        .replace('DD', day)
        .replace('HH', hours)
        .replace('mm', minutes)
        .replace('ss', seconds);
};

/**
 * 分页参数处理
 */
export const getPagination = (
    page?: string | number,
    pageSize?: string | number
): { offset: number; limit: number } => {
    const currentPage = Math.max(1, parseInt(String(page || 1), 10));
    const limit = Math.min(100, Math.max(1, parseInt(String(pageSize || 10), 10)));
    const offset = (currentPage - 1) * limit;

    return { offset, limit };
};
