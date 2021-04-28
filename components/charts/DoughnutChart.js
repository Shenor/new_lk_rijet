import { Doughnut, mixins } from 'vue-chartjs'

export default {
  name: 'doughnut-chart',
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
  props: ['options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
