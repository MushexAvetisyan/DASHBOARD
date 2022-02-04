<template>
  <div class="app">
    <section class="Approval_rate">
      <h4>TASKS APPROVAL RATE</h4>
      <div class="TasksFilter">
        <select class="Tasks_Phases" v-model="Tasks_filter">
          <option class="FilterTr" v-for="item in TasksTags" v-bind:key="item" v-bind:value="item">{{ item.trim()}}</option>
        </select>
      </div>
      <apexchart
          class="apex_task"
            width="580"
          height="300"
          type="bar"
          :options="Tasks_Approval_Options"
          :series="Approval_Tasks_Series">
      </apexchart>
    </section>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  components: {
    VueApexCharts
  },
  data: () => ({
    TasksTags: ["All Phases", "Last", "New",],
    Tasks_filter: "All Phases",

    Tasks_Approval_Options: {
      chart: {
        id: 'Tasks_Approval_Chart',
        animation:{
          speed: 900
        },
      },


      labels: ['Reviewed tasks (26)', 'Not Reviewed tasks (18)'],
      colors: ['#43BCCD', '#6D32A5'],

      yaxis:{
        show: false
      },

      xaxis: {
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },

      dataLabels: {
        enabled: true,
        formatter: function (val, opts) {
          return val + '%'
        },
        offsetY: -20,
        style: {
          colors:  ['#000000']
        }
      },

      legend: {
        show: true,
        position: 'left',
        offsetY: 80,
        offsetX: 0,
        fontSize: '13px',
        fontWeight: 600,
        markers: {
          radius: 20,
          width: 15,
          height: 15,
          offsetY: 2,
          offsetX: -5,
        },
        itemMargin: {
          vertical: 15
        }
      },



      plotOptions:{
        bar:{
          distributed: true,
          borderRadius: 10,
          columnWidth: '35%',
          dataLabels: {
            position: 'top',

          },
        },
      },

      grid: {
        show: false
      },
    },

    Approval_Tasks_Series: [{
      name: '',
      data: [71, 29,]
    }]
  })
}
</script>

<style scoped lang="scss">
.app{
  padding-bottom: 150px;
}
.Approval_rate{
  width: 580px;
  height: 380px;
  background-color: white;
  margin-top: 35px;
  margin-left: 185px;
  border-radius: 40px;
  h4{
    text-align: left;
    color: #a3a6b9;
    font-size: 14px;
    padding: 25px 0 0 30px;
  }
}
.Tasks_Phases{
  ::v-deep{
    outline: none;
    border: none;
    background-color: white;
    cursor: pointer;
    color: black;
    font-weight: 600;
    font-size: 14px;
    margin-top: 3px;
    text-align: center;
  }
}
.TasksFilter{
  cursor: pointer;
  position: relative;
  right: 60px;
  top: -20px;
}

.apex_task{
  ::v-deep{
    .apexcharts-legend-series:first-of-type{
      padding-right: 22px;
    }
  }
}
</style>
