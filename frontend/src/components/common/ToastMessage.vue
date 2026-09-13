<template>
  <Teleport to="body">
    <div class="toast-container position-fixed top-0 end-0 p-3">
      <TransitionGroup name="toast">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          class="toast show"
          :class="toastClass(toast.type)"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            <i :class="iconClass(toast.type)" class="me-2"></i>
            <strong class="me-auto">{{ toastTitle(toast.type) }}</strong>
            <button
              type="button"
              class="btn-close"
              @click="removeToast(toast.id)"
              aria-label="关闭"
            ></button>
          </div>
          <div class="toast-body">
            {{ toast.message }}
          </div>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import type { ToastMessage, ToastType } from '@/types'

  const toasts = ref<ToastMessage[]>([])

  const toastClass = (type: ToastType) => {
    const classes: Record<ToastType, string> = {
      success: 'border-success',
      error: 'border-danger',
      warning: 'border-warning',
      info: 'border-info',
    }
    return classes[type]
  }

  const iconClass = (type: ToastType) => {
    const icons: Record<ToastType, string> = {
      success: 'bi bi-check-circle-fill text-success',
      error: 'bi bi-x-circle-fill text-danger',
      warning: 'bi bi-exclamation-triangle-fill text-warning',
      info: 'bi bi-info-circle-fill text-info',
    }
    return icons[type]
  }

  const toastTitle = (type: ToastType) => {
    const titles: Record<ToastType, string> = {
      success: '成功',
      error: '错误',
      warning: '警告',
      info: '提示',
    }
    return titles[type]
  }

  const removeToast = (id: string) => {
    const index = toasts.value.findIndex((t) => t.id === id)
    if (index !== -1) {
      toasts.value.splice(index, 1)
    }
  }

  const showToast = (type: ToastType, message: string, duration = 3000) => {
    const id = Date.now().toString()
    toasts.value.push({ id, type, message, duration })

    if (duration > 0) {
      setTimeout(() => removeToast(id), duration)
    }
  }

  // 暴露方法供外部调用
  defineExpose({
    showToast,
    success: (message: string) => showToast('success', message),
    error: (message: string) => showToast('error', message),
    warning: (message: string) => showToast('warning', message),
    info: (message: string) => showToast('info', message),
  })
</script>

<style lang="scss" scoped>
  .toast-container {
    z-index: 9999;
  }

  .toast {
    min-width: 300px;
    border-left-width: 4px;
    box-shadow: var(--shadow-lg);

    &.show {
      opacity: 1;
    }
  }

  .toast-enter-active,
  .toast-leave-active {
    transition: all 0.3s ease;
  }

  .toast-enter-from {
    opacity: 0;
    transform: translateX(100%);
  }

  .toast-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
</style>
