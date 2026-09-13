<template>
  <div class="about-page">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card shadow-lg">
            <div class="card-body p-5">
              <div class="text-center mb-5">
                <div class="about-logo mb-4">
                  <i class="bi bi-box-seam"></i>
                </div>
                <h1 class="display-5 fw-bold">关于 Vunex</h1>
                <p class="lead text-muted">现代化全栈 Web 应用项目模板</p>
              </div>

              <div class="about-content">
                <h4 class="mb-3">
                  <i class="bi bi-lightbulb me-2 text-primary"></i>
                  项目简介
                </h4>
                <p class="text-muted mb-4">
                  Vunex 是一个现代化的全栈 Web 应用项目模板，采用 Vue 3 + TypeScript
                  作为前端框架，Node.js + Express + TypeScript 作为后端框架，MySQL
                  作为数据库。项目遵循最佳实践，提供完整的开发工具链和 Docker
                  部署支持。
                </p>

                <h4 class="mb-3">
                  <i class="bi bi-stack me-2 text-primary"></i>
                  技术栈
                </h4>
                <div class="row g-3 mb-4">
                  <div class="col-md-4">
                    <div class="tech-card">
                      <h6 class="mb-2">前端</h6>
                      <ul class="list-unstyled mb-0 small text-muted">
                        <li><i class="bi bi-check2 text-success me-1"></i>Vue 3</li>
                        <li><i class="bi bi-check2 text-success me-1"></i>TypeScript</li>
                        <li><i class="bi bi-check2 text-success me-1"></i>Vite</li>
                        <li><i class="bi bi-check2 text-success me-1"></i>Pinia</li>
                        <li><i class="bi bi-check2 text-success me-1"></i>Bootstrap 5</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="tech-card">
                      <h6 class="mb-2">后端</h6>
                      <ul class="list-unstyled mb-0 small text-muted">
                        <li><i class="bi bi-check2 text-success me-1"></i>Node.js</li>
                        <li><i class="bi bi-check2 text-success me-1"></i>Express</li>
                        <li><i class="bi bi-check2 text-success me-1"></i>TypeScript</li>
                        <li><i class="bi bi-check2 text-success me-1"></i>JWT 认证</li>
                        <li><i class="bi bi-check2 text-success me-1"></i>MySQL</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="tech-card">
                      <h6 class="mb-2">部署</h6>
                      <ul class="list-unstyled mb-0 small text-muted">
                        <li><i class="bi bi-check2 text-success me-1"></i>Docker</li>
                        <li><i class="bi bi-check2 text-success me-1"></i>Docker Compose</li>
                        <li><i class="bi bi-check2 text-success me-1"></i>Nginx</li>
                        <li><i class="bi bi-check2 text-success me-1"></i>多阶段构建</li>
                        <li><i class="bi bi-check2 text-success me-1"></i>生产优化</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h4 class="mb-3">
                  <i class="bi bi-code-slash me-2 text-primary"></i>
                  版本信息
                </h4>
                <table class="table table-bordered mb-0">
                  <tbody>
                    <tr>
                      <td class="text-muted">版本</td>
                      <td><strong>1.0.0</strong></td>
                    </tr>
                    <tr>
                      <td class="text-muted">许可证</td>
                      <td><strong>MIT</strong></td>
                    </tr>
                    <tr>
                      <td class="text-muted">最后更新</td>
                      <td><strong>{{ lastUpdate }}</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { formatDate } from '@/utils'

  const lastUpdate = computed(() => formatDate(new Date()))
</script>

<style lang="scss" scoped>
  .about-page {
    padding: 2rem 0;
  }

  .about-logo {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary-gradient);
    border-radius: 24px;
    color: #fff;

    i {
      font-size: 3rem;
    }
  }

  .tech-card {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 1rem;
    height: 100%;

    h6 {
      color: #495057;
      font-weight: 600;
    }
  }
</style>
