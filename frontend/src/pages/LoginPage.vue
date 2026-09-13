<template>
  <div class="login-page d-flex align-items-center justify-content-center">
    <div class="card shadow-lg border-0 login-card">
      <div class="card-body p-5">
        <h2 class="text-center mb-4 fw-bold text-primary">欢迎登录</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="username" class="form-label">用户名</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="bi bi-person"></i>
              </span>
              <input
                type="text"
                class="form-control ps-0"
                id="username"
                v-model="username"
                placeholder="请输入用户名"
                required
                :disabled="isLoading"
              />
            </div>
          </div>
          <div class="mb-4">
            <label for="password" class="form-label">密码</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="bi bi-lock"></i>
              </span>
              <input
                type="password"
                class="form-control ps-0"
                id="password"
                v-model="password"
                placeholder="请输入密码"
                required
                :disabled="isLoading"
              />
            </div>
          </div>
          <div class="d-grid mb-3">
            <button type="submit" class="btn btn-primary btn-lg shadow-sm" :disabled="isLoading">
              <span v-if="isLoading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              {{ isLoading ? '登录中...' : '登录' }}
            </button>
          </div>
          <div class="text-center text-muted">
             测试账号: admin / admin123
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useUserStore } from '@/stores/useUserStore'

  const router = useRouter()
  const userStore = useUserStore()

  const username = ref('')
  const password = ref('')
  const isLoading = ref(false)

  const handleLogin = async () => {
    if (!username.value || !password.value) return

    isLoading.value = true
    try {
      await userStore.login(username.value, password.value)
      router.push('/')
    } catch (error) {
      console.error('Login failed:', error)
      alert('登录失败，请检查用户名或密码')
    } finally {
      isLoading.value = false
    }
  }
</script>

<style lang="scss" scoped>
  .login-page {
    min-height: calc(100vh - 60px); // Subtract header height approc
    background-color: #f8f9fa;
  }

  .login-card {
    width: 100%;
    max-width: 400px;
    border-radius: 1rem;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
    }
  }

  // Unified input group styling
  .input-group {
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
    background-color: #f8f9fa; // bs-light
    transition: all 0.2s ease-in-out;
    overflow: hidden;

    &:hover {
      border-color: #adb5bd;
    }

    &:focus-within {
      border-color: #86b7fe;
      box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
      background-color: #fff;
    }

    .input-group-text {
      border: none;
      background-color: transparent;
      color: #6c757d;
    }

    .form-control {
      border: none;
      background-color: transparent;
      
      &:focus {
        box-shadow: none;
      }
    }
  }
</style>
