<template>
  <aside class="app-sidebar" :class="{ collapsed: isCollapsed }">
    <div class="sidebar-header">
      <h5 class="mb-0">菜单</h5>
      <button class="btn btn-link btn-sm" @click="toggleSidebar">
        <i :class="isCollapsed ? 'bi bi-chevron-right' : 'bi bi-chevron-left'"></i>
      </button>
    </div>

    <nav class="sidebar-nav">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            <i class="bi bi-speedometer2 me-2"></i>
            <span class="nav-text">仪表板</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/users" class="nav-link">
            <i class="bi bi-people me-2"></i>
            <span class="nav-text">用户管理</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/settings" class="nav-link">
            <i class="bi bi-gear me-2"></i>
            <span class="nav-text">系统设置</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const isCollapsed = ref(false)

  const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value
  }
</script>

<style lang="scss" scoped>
  .app-sidebar {
    width: 250px;
    min-height: 100vh;
    background: #fff;
    box-shadow: var(--shadow-md);
    transition: width var(--transition-normal);

    &.collapsed {
      width: 80px;

      .nav-text {
        display: none;
      }
    }

    .sidebar-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      border-bottom: 1px solid #e9ecef;
    }

    .sidebar-nav {
      padding: 1rem 0;
    }

    .nav-link {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      color: #495057;
      transition: all var(--transition-fast);

      &:hover {
        background: rgba(102, 126, 234, 0.1);
        color: #667eea;
      }

      &.router-link-active {
        background: var(--primary-gradient);
        color: #fff;
      }

      i {
        font-size: 1.2rem;
      }
    }
  }
</style>
