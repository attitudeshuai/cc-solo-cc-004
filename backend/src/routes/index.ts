import { Router } from 'express';
import userRoutes from './userRoutes';

const router = Router();

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: API 健康检查
 *     tags: [健康检查]
 *     responses:
 *       200:
 *         description: API 服务正常运行
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: API 服务正常运行
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 */
router.get('/health', (_req, res) => {
    res.json({
        success: true,
        message: 'API 服务正常运行',
        timestamp: new Date().toISOString(),
    });
});

// 用户相关路由
router.use('/users', userRoutes);

// 认证相关路由
router.use('/auth', userRoutes);

export default router;
