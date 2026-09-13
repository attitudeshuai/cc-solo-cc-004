<template>
  <footer class="app-footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 text-center text-md-start">
          <p class="mb-0">
            <i class="bi bi-box-seam me-1"></i>
            <strong>Vunex</strong> &copy; {{ currentYear }}
          </p>
        </div>
        <div class="col-md-6 text-center text-md-end">
          <div class="social-links">
            <a href="#" class="social-link" title="GitHub">
              <i class="bi bi-github"></i>
            </a>
            <a href="#" class="social-link" title="Twitter">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#" class="social-link" title="Email">
              <i class="bi bi-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  const currentYear = computed(() => new Date().getFullYear())
</script>

<style lang="scss" scoped>
  .app-footer {
    background: var(--dark-gradient);
    color: rgba(255, 255, 255, 0.8);
    padding: 1.5rem 0;
    margin-top: auto;

    .social-links {
      display: flex;
      justify-content: center;
      gap: 1rem;

      @media (min-width: 768px) {
        justify-content: flex-end;
      }
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: all var(--transition-fast);

      &:hover {
        background: rgba(255, 255, 255, 0.2);
        color: #fff;
        transform: translateY(-2px);
      }

      i {
        font-size: 1.1rem;
      }
    }
  }
</style>
