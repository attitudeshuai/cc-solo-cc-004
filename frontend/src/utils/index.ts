import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

// 设置 dayjs 默认语言为中文
dayjs.locale('zh-cn')

/**
 * 格式化日期
 */
export function formatDate(date: string | Date, format = 'YYYY-MM-DD'): string {
    return dayjs(date).format(format)
}

/**
 * 格式化日期时间
 */
export function formatDateTime(date: string | Date): string {
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
}

/**
 * 格式化相对时间
 */
export function formatRelativeTime(date: string | Date): string {
    const now = dayjs()
    const target = dayjs(date)
    const diffSeconds = now.diff(target, 'second')

    if (diffSeconds < 60) return '刚刚'
    if (diffSeconds < 3600) return `${Math.floor(diffSeconds / 60)} 分钟前`
    if (diffSeconds < 86400) return `${Math.floor(diffSeconds / 3600)} 小时前`
    if (diffSeconds < 604800) return `${Math.floor(diffSeconds / 86400)} 天前`

    return formatDate(date)
}

/**
 * 防抖函数
 */
export function debounce<T extends (...args: any[]) => any>(
    fn: T,
    delay: number
): (...args: Parameters<T>) => void {
    let timer: ReturnType<typeof setTimeout> | null = null
    return function (this: any, ...args: Parameters<T>) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => fn.apply(this, args), delay)
    }
}

/**
 * 节流函数
 */
export function throttle<T extends (...args: any[]) => any>(
    fn: T,
    delay: number
): (...args: Parameters<T>) => void {
    let lastTime = 0
    return function (this: any, ...args: Parameters<T>) {
        const now = Date.now()
        if (now - lastTime >= delay) {
            fn.apply(this, args)
            lastTime = now
        }
    }
}

/**
 * 复制文本到剪贴板
 */
export async function copyToClipboard(text: string): Promise<boolean> {
    try {
        await navigator.clipboard.writeText(text)
        return true
    } catch {
        return false
    }
}

/**
 * 格式化文件大小
 */
export function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}
