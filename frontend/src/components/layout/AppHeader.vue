<template>
  <header class="app-header">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <i class="bi bi-box-seam me-2"></i>
          <span class="fw-bold">Vunex</span>
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="切换导航"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active">
                首页
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" active-class="active">
                关于
              </router-link>
            </li>
          </ul>

          <div class="d-flex align-items-center">
            <template v-if="userStore.isLoggedIn">
              <span class="text-light me-3">
                {{ userStore.username }}
              </span>
              <button class="btn btn-outline-light btn-sm" @click="handleLogout">
                退出
              </button>
            </template>
            <template v-else>
              <button class="btn btn-light btn-sm" @click="$router.push('/login')">
                登录
              </button>
            </template>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
  import { useUserStore } from '@/stores/useUserStore'

  const userStore = useUserStore()

  const handleLogout = () => {
    userStore.logout()
  }
</script>

<style lang="scss" scoped>
  .app-header {
    .navbar {
      background: var(--primary-gradient);
      box-shadow: var(--shadow-md);
      padding: 0.75rem 0;
    }

    .navbar-brand {
      font-size: 1.5rem;
      transition: opacity var(--transition-fast);

      &:hover {
        opacity: 0.9;
      }
    }

    .nav-link {
      padding: 0.5rem 1rem;
      position: relative;
      color: rgba(255, 255, 255, 0.8) !important;
      transition: all var(--transition-fast);

      &:hover {
        color: #fff !important;
        transform: translateY(-1px);
      }

      &.active {
        color: #fff !important;
        font-weight: 600;

        &::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 1rem;
          right: 1rem;
          height: 2px;
          background-color: #fff;
          border-radius: 2px;
          animation: slideIn 0.3s ease;
        }
      }
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: scaleX(0);
      }
      to {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
</style>
