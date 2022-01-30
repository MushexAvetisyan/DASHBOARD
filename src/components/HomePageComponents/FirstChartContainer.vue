<template>
  <div class="app">
    <div class="chart_container">
      <div class="chart_transition" style="width: 1047px; height: 380px; background-color: white;">
        <h4>TRANSITION STATE</h4>
        <select class="filter_transition" v-model="selected">
          <option v-for="filter in filters" :key="filter.name" :value="filter.value">
            {{ filter.name }}
          </option>
        </select>
        <VueApexCharts class="chart_style" width="900" height="320" type="bar" :options="TransitionChartOptions" :series="seriesForTransitions"></VueApexCharts>
      </div>
      <div class="chart_Due_date second_chart" style="width: 580px; height: 380px; background-color: white;">
<!--        <h4>DUE DATE</h4>-->
        <apexchart width="480" height="380" type="donut" :options="DueDateChartOptions" :series="seriesDueDate"></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  name: "FirstChartContainer",
  data: () => ({
    TransitionChartOptions: {
      chart: {
        id: 'vuechart-example',
        animations: {
          speed: 900
        }
      },
      colors: ['#1FC599', '#43BCCD', '#6D32A5', '#F53361', '#F2A201' ],
      dataLabels: {
        enabled: false
      },
      plotOptions:{
        bar:{
          distributed: true,
          borderRadius: 10,
          columnWidth: '35%',
        }
      },
      xaxis: {
        categories: ['TASKS', 'KNOWLEDGE TRANSFER', 'PRODUCTION PARALLEL', 'LIVE EXECUTION', 'COMPLETED'],
      },
      yaxis: {
        max: 6,
        min: 0,
        tickAmount: 3
      }
    },
    seriesForTransitions: [{
      name: 'series-1',
      data: [1, 5, 4, 3, 2]
    }],

    DueDateChartOptions: {
      chart: {
        id: 'DueDateChart',
      },
      labels: ['Completed due date (3)', 'Nearing due date (2)'],

      title: {
        text: 'DUE DATE',
        floating: true,
        offsetX: -10,
        offsetY: 10,
        style: {
          fontsize: '15px',
          color: '#A3A6B9',
          fontWeight: 600,
          fontFamily: "CircularFontFamily"
        }

      },

      colors: ['#43BCCD', '#6D32A5'],

      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: "left",
        fontSize: '14px',
        fontWeight: 600,
        offsetX: -30,
        offsetY: 100,
        itemMargin: {
          vertical: 20
        },
        markers: {
          width: 15,
          height: 15,
          offsetY: 2,
          offsetX: -5
        }
      },
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          offsetY: 55,
          customScale: 0.9,
          donut: {
            size: '55%',
          },
        }
      }
    },
    seriesDueDate: [3,2],



    selected: 'all',

    filters: [
      {
        name: 'All',
        value: 'all'
      },
      {
        name: 'Last',
        value: 'last',
      },
      {
        name: 'New',
        value: 'new',
      },
    ],
  }),
  components: {
    VueApexCharts,

  }
}
</script>

<style scoped lang="scss">
.chart_container{
  display: flex;
  width: 80%;
  div{
    border-radius: 40px;
    margin-top: 15px;
  }
  .chart_transition, {
    h4{
      text-align: left;
      margin: 30px 0px 0 30px;
      color: #a3a6b9;
      font-size: 14px;
      float: left;
    }
    .filter_transition{
      position: relative;
      top: 22px;
      right: 37%;
      border: none;
      font-size: 16px;
      font-weight: 800;
      outline: none;
      padding: 5px;
      cursor: pointer;
    }
  }
  .chart_Due_date{
    h4{
      text-align: left;
      margin: 30px 0 0 30px;
      color: #a3a6b9;
      font-size: 14px;
    }
  }
  .second_chart{
    margin-left: 30px;
  }
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
</style>
