<template>
  <div class="app">
    <div class="chart_cycle_time">
      <h4>CYCLE TIME</h4>
      <select class="filter_Cyrcle">
<!--        <option v-for="country in countries" v-bind:value="country.code">-->
<!--          {{ country.name }}-->
<!--        </option>-->
      </select>
      <VueApexCharts class="chart_style" width="1450" height="300" type="line" :options="CycleTimeChartOptions" :series="seriesForCycleTime"></VueApexCharts>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  data: () => ({
    CycleTimeChartOptions: {
      chart: {
        id: 'Cycle-example',
        toolbar: {
          show: false
        }
      },
      labels: ['No', 'Yes', ],
      colors: ['#43BCCD', '#6D32A5'],
      dataLabels: {
        enabled: true,
      },
      xaxis:{
        categories: ['TASKS APPROVING','KNOWLEDGE TRANSFER', 'PRODUCTION PARALLEL', 'LIVE EXECUTION', ]
      },
      yaxis: {
        max: 30,
        min: 0,
        tickAmount: 3
      },
    },
    seriesForCycleTime: [
      {
        data: [12, 8, 12, 14]
      },
      {
        data: [9, 9, 18, 10]
      }
    ],
  }),
  components: {
    VueApexCharts
  }
}
</script>

<style scoped lang="scss">
.chart_cycle_time{
  height: 380px;
  width: 80%;
  background-color: white;
  border-radius: 30px;
  margin-top: 25px;
  h4{
    text-align: left;
    color: #a3a6b9;
    font-size: 14px;
    padding: 25px 0 0 25px;
    float: left;
  }
  .filter_Cyrcle{
    position: relative;
    top: 18px;
    right: 43%;
    border: none;
    font-size: 16px;
    font-weight: 800;
    outline: none;
    padding: 5px;
  }

  .chart_style{
    ::v-deep {
      .apexcharts-yaxis-texts-g{
        color: #A3A6B9;
      }
      .apexcharts-ycrosshairs{
        color: #A3A6B9;
      }
      .apexcharts-legend{
        display: none;
      }
      .apexcharts-legend-marker{
        padding-right: 15px;
      }
    }
  }

}
</style>
