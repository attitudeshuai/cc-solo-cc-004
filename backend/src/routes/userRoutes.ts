import { Router } from 'express';
import { body } from 'express-validator';
import * as userController from '../controllers/userController';
import { authenticate } from '../middlewares/auth';
import { validate } from '../middlewares/validator';

const router = Router();

// 用户注册
router.post(
    '/register',
    [
        body('username').trim().isLength({ min: 3, max: 20 }).withMessage('用户名长度必须在3-20之间'),
        body('email').isEmail().withMessage('请输入有效的邮箱地址'),
        body('password').isLength({ min: 6 }).withMessage('密码长度至少为6位'),
    ],
    validate,
    userController.register
);

// 用户登录
router.post(
    '/login',
    [
        body('username').trim().notEmpty().withMessage('用户名不能为空'),
        body('password').notEmpty().withMessage('密码不能为空'),
    ],
    validate,
    userController.login
);

// 获取当前用户信息
router.get('/me', authenticate, userController.getCurrentUser);

// 获取用户列表
router.get('/', authenticate, userController.getUsers);

// 获取单个用户
router.get('/:id', authenticate, userController.getUserById);

// 更新用户
router.put(
    '/:id',
    authenticate,
    [
        body('username')
            .optional()
            .trim()
            .isLength({ min: 3, max: 20 })
            .withMessage('用户名长度必须在3-20之间'),
        body('email').optional().isEmail().withMessage('请输入有效的邮箱地址'),
    ],
    validate,
    userController.updateUser
);

// 删除用户
router.delete('/:id', authenticate, userController.deleteUser);

export default router;
