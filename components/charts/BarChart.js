import { Bar, mixins } from 'vue-chartjs'

export default {
  name: 'bar-chart',
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: ['options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
