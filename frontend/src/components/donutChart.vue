<script>
// This file is taken from the barchart component and modified to work with a donut chart. I also used code from the Chart.js Donut Chart documentation.
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  props: {
    label: {
      type: Array
    },
    chartData: {
      type: Array
    }
  },
  // currently unnecessary async function because the data is hardcoded. Will use later.
  async mounted() {
    await new Chart(this.$refs.donutChart, {
      type: 'doughnut',
      data: {
        labels: [
          '77006',
          '77005',
          '77004',
          '77003',
          '77002',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100, 40, 120],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 255)',
          ],
          hoverOffset: 4
        }]
      },
    })
  },
}
</script>

<template>
  <div class="shadow-lg rounded-lg overflow-hidden">
    <canvas class="p-10" ref="donutChart"></canvas>
  </div>
</template>