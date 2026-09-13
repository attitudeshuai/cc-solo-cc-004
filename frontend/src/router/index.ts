import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/HomePage.vue'),
        meta: {
            title: '首页',
        },
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/pages/AboutPage.vue'),
        meta: {
            title: '关于',
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/pages/NotFoundPage.vue'),
        meta: {
            title: '页面未找到',
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/LoginPage.vue'),
        meta: {
            title: '用户登录',
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
})

// 全局前置守卫
router.beforeEach((to, _from, next) => {
    // 设置页面标题
    const title = to.meta.title as string
    document.title = title ? `${title} - Vunex` : 'Vunex'
    next()
})

export default router
