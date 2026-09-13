<template>
  <div class="home-page">
    <div class="container">
      <!-- 欢迎横幅 -->
      <section class="hero-section text-center mb-5 fade-in">
        <div class="hero-content">
          <h1 class="display-4 fw-bold mb-3">
            欢迎使用 <span class="text-gradient">Vunex</span>
          </h1>
          <p class="lead text-muted mb-4">
            现代化的 Vue3 + Node.js + MySQL 全栈项目模板
          </p>
          <div class="d-flex gap-3 justify-content-center">
            <button class="btn btn-primary btn-lg">
              <i class="bi bi-rocket-takeoff me-2"></i>
              开始使用
            </button>
            <button class="btn btn-outline-secondary btn-lg">
              <i class="bi bi-book me-2"></i>
              查看文档
            </button>
          </div>
        </div>
      </section>

      <!-- 功能卡片 -->
      <section class="features-section mb-5">
        <h2 class="section-title text-center mb-4">核心特性</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100 feature-card">
              <div class="card-body text-center p-4">
                <div class="feature-icon mb-3">
                  <i class="bi bi-lightning-charge-fill"></i>
                </div>
                <h5 class="card-title">高性能</h5>
                <p class="card-text text-muted">
                  基于 Vite 构建，享受极速的开发体验和优化的生产构建。
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 feature-card">
              <div class="card-body text-center p-4">
                <div class="feature-icon mb-3">
                  <i class="bi bi-shield-check"></i>
                </div>
                <h5 class="card-title">类型安全</h5>
                <p class="card-text text-muted">
                  全栈 TypeScript 支持，提供完整的类型检查和智能提示。
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 feature-card">
              <div class="card-body text-center p-4">
                <div class="feature-icon mb-3">
                  <i class="bi bi-box-seam"></i>
                </div>
                <h5 class="card-title">开箱即用</h5>
                <p class="card-text text-muted">
                  Docker 一键部署，无需复杂配置即可启动完整应用。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 统计数据 -->
      <section class="stats-section mb-5">
        <div class="row g-4">
          <div class="col-6 col-md-3">
            <div class="stat-card text-center p-4">
              <div class="stat-number">{{ stats.users }}</div>
              <div class="stat-label">用户数</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="stat-card text-center p-4">
              <div class="stat-number">{{ stats.projects }}</div>
              <div class="stat-label">项目数</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="stat-card text-center p-4">
              <div class="stat-number">{{ stats.commits }}</div>
              <div class="stat-label">提交数</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="stat-card text-center p-4">
              <div class="stat-number">{{ stats.uptime }}</div>
              <div class="stat-label">运行时间</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 图表展示 -->
      <section class="chart-section mb-5">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="bi bi-graph-up me-2"></i>
              数据统计
            </h5>
          </div>
          <div class="card-body">
            <v-chart class="chart" :option="chartOption" autoresize />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import VChart from 'vue-echarts'
  import { use } from 'echarts/core'
  import { CanvasRenderer } from 'echarts/renderers'
  import { LineChart, BarChart } from 'echarts/charts'
  import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent,
  } from 'echarts/components'

  // 注册 ECharts 组件
  use([
    CanvasRenderer,
    LineChart,
    BarChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent,
  ])

  // 统计数据
  const stats = ref({
    users: '1,234',
    projects: '567',
    commits: '8,901',
    uptime: '99.9%',
  })

  // 图表配置
  const chartOption = ref({
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['访问量', '用户数'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '访问量',
        type: 'line',
        smooth: true,
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(102, 126, 234, 0.5)' },
              { offset: 1, color: 'rgba(102, 126, 234, 0.05)' },
            ],
          },
        },
        lineStyle: {
          color: '#667eea',
          width: 3,
        },
        itemStyle: {
          color: '#667eea',
        },
      },
      {
        name: '用户数',
        type: 'line',
        smooth: true,
        data: [220, 182, 191, 234, 290, 330, 310],
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(118, 75, 162, 0.5)' },
              { offset: 1, color: 'rgba(118, 75, 162, 0.05)' },
            ],
          },
        },
        lineStyle: {
          color: '#764ba2',
          width: 3,
        },
        itemStyle: {
          color: '#764ba2',
        },
      },
    ],
  })

  onMounted(() => {
    // 可以在这里加载真实数据
  })
</script>

<style lang="scss" scoped>
  .home-page {
    padding: 2rem 0;
  }

  .hero-section {
    padding: 4rem 0;

    .text-gradient {
      background: var(--primary-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .section-title {
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: var(--primary-gradient);
      border-radius: 2px;
    }
  }

  .feature-card {
    .feature-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--primary-gradient);
      border-radius: 20px;
      color: #fff;

      i {
        font-size: 2rem;
      }
    }
  }

  .stat-card {
    background: #fff;
    border-radius: 16px;
    box-shadow: var(--shadow-md);
    transition: transform var(--transition-normal);

    &:hover {
      transform: translateY(-4px);
    }

    .stat-number {
      font-size: 2rem;
      font-weight: 700;
      background: var(--primary-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .stat-label {
      color: #6c757d;
      font-size: 0.9rem;
    }
  }

  .chart {
    height: 400px;
  }
</style>
