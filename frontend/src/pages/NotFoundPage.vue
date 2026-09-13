<template>
  <div class="not-found-page">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center">
          <div class="error-code mb-4">404</div>
          <h1 class="mb-3">页面未找到</h1>
          <p class="text-muted mb-4">抱歉，您访问的页面不存在或已被移除。</p>
          <router-link to="/" class="btn btn-primary btn-lg">
            <i class="bi bi-house me-2"></i>
            返回首页
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // 404 页面无需特殊逻辑
</script>

<style lang="scss" scoped>
  .not-found-page {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    padding: 2rem 0;
  }

  .error-code {
    font-size: 8rem;
    font-weight: 700;
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
  }
</style>
