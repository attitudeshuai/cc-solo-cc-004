<template>
  <div class="loading-spinner-wrapper" :class="{ 'full-screen': fullScreen }">
    <div class="spinner-container">
      <div class="spinner-border text-primary" :class="sizeClass" role="status">
        <span class="visually-hidden">加载中...</span>
      </div>
      <p v-if="text" class="loading-text mt-2 mb-0">{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  interface Props {
    size?: 'sm' | 'md' | 'lg'
    text?: string
    fullScreen?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    size: 'md',
    text: '',
    fullScreen: false,
  })

  const sizeClass = computed(() => {
    switch (props.size) {
      case 'sm':
        return 'spinner-border-sm'
      case 'lg':
        return 'spinner-lg'
      default:
        return ''
    }
  })
</script>

<style lang="scss" scoped>
  .loading-spinner-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    &.full-screen {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.9);
      z-index: 9999;
    }
  }

  .spinner-container {
    text-align: center;
  }

  .spinner-lg {
    width: 3rem;
    height: 3rem;
  }

  .loading-text {
    color: #6c757d;
    font-size: 0.9rem;
  }
</style>
