import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User } from '@/types'
import api from '@/services/api'

export const useUserStore = defineStore('user', () => {
    // 状态
    const user = ref<User | null>(null)
    const token = ref<string | null>(localStorage.getItem('token'))
    const loading = ref(false)

    // 计算属性
    const isLoggedIn = computed(() => !!token.value)
    const username = computed(() => user.value?.username || '')

    // 操作
    async function login(username: string, password: string) {
        loading.value = true
        try {
            const response = await api.post('/auth/login', { username, password })
            const { token: accessToken, user: userData } = response.data.data
            token.value = accessToken
            user.value = userData
            localStorage.setItem('token', accessToken)
            return { success: true }
        } catch (error: any) {
            return { success: false, message: error.response?.data?.message || '登录失败' }
        } finally {
            loading.value = false
        }
    }

    async function logout() {
        token.value = null
        user.value = null
        localStorage.removeItem('token')
    }

    async function fetchUser() {
        if (!token.value) return

        loading.value = true
        try {
            const response = await api.get('/auth/me')
            user.value = response.data.data.user
        } catch (error) {
            logout()
        } finally {
            loading.value = false
        }
    }

    return {
        user,
        token,
        loading,
        isLoggedIn,
        username,
        login,
        logout,
        fetchUser,
    }
})
