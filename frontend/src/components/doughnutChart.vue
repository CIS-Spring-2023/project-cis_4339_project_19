<template>
  <div>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
export default {
  props: ['data'],
  mounted() {
    this.renderChart()
  },
  methods: {
    renderChart() {
      const chartData = {
        labels: ['77001', '77002', '77003', '77004'],
        datasets: [
          {
            data: this.data,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
          }
        ]
      }
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: 'bottom'
        }
      }
      const ctx = this.$refs.chart.getContext('2d')
      new Chart(ctx, {
        type: 'doughnut',
        data: chartData,
        options: chartOptions
      })
    }
  }
}
</script>

<style scoped></style>
