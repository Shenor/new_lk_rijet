<template>
  <div class="grid text-center">
    <div class="main-chart box">
      <line-chart class="mb-3" :chart-data="mainChart.chartData" :options="mainChart.options"></line-chart>
    </div>
    <div class="second-chart box">
      <doughnut-chart class="mb-3" :chart-data="secondChart.chartData" :options="secondChart.options"></doughnut-chart>
    </div>
    <div class="third-chart box">
      <bar-chart class="mb-3" :chart-data="thirdChart.chartData" :options="thirdChart.options"></bar-chart>
    </div>
    <!-- <vs-row>
      <vs-col w="12">
        <div class="box">
          <div class="pt-2 pb-2">Главный график</div>
          <div class="mb-2" style="height: 100%;">
            <line-chart :chart-data="mainChart.chartData" :options="mainChart.options"></line-chart>
          </div>
        </div>
      </vs-col>
    </vs-row>

    <vs-row>
      <vs-col w="6">
        <div class="box">
        50%
        </div>
      </vs-col>
      <vs-col w="6">
        <div class="box">
        50%
        </div>
      </vs-col>
    </vs-row> -->
  </div>
</template>

<script>
import BarChart from '~/components/charts/BarChart'
import LineChart from '~/components/charts/LineChart'
import DoughnutChart from '~/components/charts/DoughnutChart'

export default {
  data(){
    return{
      datacollection: null,
      mainChart: {
        chartData: {
          datasets: [{
            fill: true,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100]
          }],
          labels: ['ЯНВ', 'ФЕВ', 'МАР', 'АПР', 'МАЙ', 'ИЮН', 'ИЮЛ', 'АВГ', 'СЕН', 'ОКТ', 'НОЯ', 'ДЕК']
        },
        options: {
          title: {
            display: true,
            text: 'Main chart',
          },
          maintainAspectRatio: false,
          legend: { display: false },
          responsive: true,
        }
      },
      secondChart: {
        chartData: {
          labels: ['Blue', 'Red', 'Orange', 'Yellow', 'Green'],
          datasets: [{
            label: 'Dataset 1',
            data: [100, 70, 90, 70, 85],
            backgroundColor: ['#36a2eb', '#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0'],
          }]
        },
         options: {
          title: {
            display: true,
            text: 'Doughnut chart',
          },
          maintainAspectRatio: false,
          legend: { display: false },
          responsive: true,
        }
      },
      thirdChart: {
        chartData: {
          labels: ['ЯНВ', 'ФЕВ', 'МАР', 'АПР', 'МАЙ', 'ИЮН', 'ИЮЛ',],
          datasets: [{
            label: 'Dataset 1',
            data: [100, 40, 90, 70, 35, 10, -50],
            backgroundColor: ['#36a2eb', '#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0', '#1F3A93', '#1E824C'],
          }]
        },
         options: {
          title: {
            display: true,
            text: 'Bar chart',
          },
          maintainAspectRatio: false,
          legend: { display: false },
          responsive: true,
        }
      }
    }
  },
  mounted () {
    this.fillData()
  },
  components: {
    BarChart,
    LineChart,
    DoughnutChart
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }, {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>

<style lang="scss" scoped>
  .grid{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    gap: 10px;
  }
  .main-chart{
    grid-column: 1/7;
  }
  .second-chart{
    grid-column: 1/4;
    grid-row: 2/3;
  }
  .third-chart{
    grid-column: 4/7;
    grid-row: 2/3;
  }
</style>
