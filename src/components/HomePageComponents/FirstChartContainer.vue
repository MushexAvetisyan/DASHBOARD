<template>
  <div class="app">
    <div class="chart_container">
      <div class="chart_transition" style="width: 1047px; height: 380px; background-color: white;">
        <h4>TRANSITION STATE</h4>
        <div class="Transition_Filter">
        </div>
        <VueApexCharts
            class="chart_style"
            width="900"
            height="320"
            type="bar"
            :options="TransitionChartOptions"
            :series="seriesForTransitions"></VueApexCharts>
      </div>
      <div class="chart_Due_date second_chart" style="width: 580px; height: 380px; background-color: white;">
        <h4>DUE DATE</h4>
        <div class="Due_Dat_Filter">
        </div>
        <apexchart
            width="480"
            height="380"
            type="donut"
            :options="DueDateChartOptions"
            :series="seriesDueDate">
        </apexchart>
      </div>
    </div>
  </div>
</template>

<script>
import "vue-select/src/scss/vue-select.scss";
import VueApexCharts from 'vue-apexcharts'
export default {
  name: "FirstChartContainer",
  components: {
    VueApexCharts,

  },
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
          borderRadius: 15,
          columnWidth: '35%',
        }
      },
      xaxis: {
        categories: ['TASKS', 'KNOWLEDGE TRANSFER', 'PRODUCTION PARALLEL', 'LIVE EXECUTION', 'COMPLETED'],
      },
      yaxis: {
        max: 6,
        min: 0,
        tickAmount: 3,
        labels: {

          style: {
            colors: ['#A3A6B9']
          }
        }
      }
    },
    seriesForTransitions: [{
      name: '',
      data: [1, 5, 4, 3, 2]
    }],

    DueDateChartOptions: {
      chart: {
        id: 'DueDateChart',
      },
      labels: ['Completed due date (3)', 'Nearing due date (2)'],


      colors: ['#43BCCD', '#6D32A5'],

      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: "left",
        fontSize: '12px',
        fontWeight: 600,
        offsetX: -20,
        offsetY: 10,
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
          offsetY: -25,
          customScale: 0.9,
          donut: {
            size: '55%',
          },
        }
      }
    },
    seriesDueDate: [3,2],

    books: [
      { title: "All" },
      { title: "Last" },
      { title: "New" },
    ],
  }),
}
</script>

<style scoped lang="scss">
.chart_container{
  display: flex;
  width: 80%;
  div{
    border-radius: 40px;
    margin-top: 21px;
  }
  .chart_transition, {
    h4{
      text-align: left;
      margin: 30px 0 0 30px;
      color: #a3a6b9;
      font-size: 14px;
      float: left;
    }
    .filter_transition{
      position: relative;
      top: 24px;
      right: 37%;
      border: none;
      font-size: 16px;
      font-weight: 800;
      outline: none;
      padding: 5px 0 0 0;
      cursor: pointer;
      background: none;
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

.Due_Dat_Filter{
  width: 90px;
  cursor: pointer;
  position: relative;
  right: 55px;
  top: -42px;
  margin-top: 0;
}

.Transition_Filter,{
  width: 90px;
  cursor: pointer;
  position: relative;
  right: 250px;
  top: 5px;
  margin-top: 0;
}
.select_input{
  ::v-deep{
    .vs__dropdown-toggle{
      cursor: pointer;
      border: none;
      padding: 0;
      display: flex;
      align-items: center;
    }
    .vs__actions{
      padding: 0 30px 0 3px;
      display: block;
      svg{
        fill: black;
      }
    }
    .vs__dropdown-menu{
      min-width: 75px;
    }
    .vs__clear{
      display: none;
    }
    .vs__search{
      //display: none;
      width: 65%;
      margin: -2px 0 0 0;
      padding: 0;
      color: black;
      font-weight: 800;
    }
    .vs__selected{
      margin: 0;
      color: black;
      font-weight: 800;
      width: 45px;
    }
    .vs__selected-options{
      flex-wrap: nowrap;
      align-items: center;
    }
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
