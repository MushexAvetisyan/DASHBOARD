<template>
  <div class="home">

    <containHeader />

    <div class="line"></div>

    <transition_section />

    <first-chart-container />

    <ChartCyrcleTime />

    <div class="second_chart_container">

      <div class="Review_task_chart" style="width: 580px; height: 380px; background-color: white;">
        <h4>TASKS REVIEW RATE</h4>
        <apexchart width="400" height="380" type="donut" :options="TaskReviewRateOptions" :series="seriesTaskReviewRate"></apexchart>
      </div>

      <div class="completion_rate" style="width: 1047px; height: 380px; background-color: white;">
<!--        <h4>COMPLETION RATE</h4>-->
        <apexchart width="950" height="360" type="bar" :options="CompletionRateChartOptions" :series="seriesForCompletionRate"></apexchart>
      </div>

    </div>

    <RecentTransitions />

    <router-view />
  </div>
</template>


<script>
// @ is an alias to /src
import VueApexCharts from 'vue-apexcharts'
import containHeader from '../components/HomePageComponents/containHeader'
import transition_section from '../components/HomePageComponents/transition_section'
import FirstChartContainer from "../components/HomePageComponents/FirstChartContainer";
import ChartCyrcleTime from "../components/HomePageComponents/ChartCyrcleTime";
import RecentTransitions from "../components/HomePageComponents/RecentTransitions";

export default {
  name: 'Home',
  components: {
    VueApexCharts,
    containHeader,
    transition_section,
    FirstChartContainer,
    ChartCyrcleTime,
    RecentTransitions
  },

  data: () => ({

    CompletionRateChartOptions: {
      chart: {
        id: 'vuechart-example',
      },
      xaxis: {
        categories: ['TASKS', 'knowledge transfer', 'production parallel', 'live execution'],
      },

      yaxis: {
        max: 6,
        min: 0,
        tickAmount: 3,

      },
      colors: ['#43BCCD', '#6D32A5', '#F53361',],

      dataLabels: {
        enabled: false
      },

      title: {
        text: 'COMPLETION RATE',
        floating: true,
        offsetX: 10,
        offsetY: 20,
        style: {
          fontsize: '15px',
          color: '#A3A6B9',
          fontWeight: 600,
          fontFamily: "CircularFontFamily"
        }
      },

      legend: {
        position: 'top',
        show: true,
        horizontalAlign: 'right',
        width: 900,
        height: 50,
        fontSize: '14',
        fontFamily: "CircularFontFamily",
        fontWeight: 900,
        markers: {
          radius: 12,
          offsetX: -20
        },
        itemMargin: {
          horizontal: 20,
        },
      },
      stroke: {
        width: 8,
        colors:  ['color']
      },
      plotOptions:{
        bar:{
          distributed: true,
          borderRadius: 10,
          columnWidth: '35%',
        }
      },
    },
    seriesForCompletionRate: [
      {
      name: 'Completed on time',
      data: [5, 4, 4, 1],
      },
      {
        name: 'Completed over due date',
        data: [1.80,2.80,4, 0.30],
      },
      {
        name: 'Not completed',
        data: [0.5,0.3, 4, 5.20]
      },
    ],

    TaskReviewRateOptions: {
      chart: {
        id: 'TaskReviewRate',
      },
      labels: ['Reviewed tasks (26)', 'Not reviewed tasks (18)'],
      colors: ['#43BCCD', '#6D32A5'],

      dataLabels: {
        enabled: false,
      }
    },
    seriesTaskReviewRate: [26,18],

  }),


  methods: {

  },
}
</script>


<style  lang="scss">
@font-face {
  font-family: "CircularFontFamily";
  src: local("CircularFontFamily"),
  url("../fonts/CircularFontFamily/Gilroy-Regular.ttf");
}
  .home{
    background-color: #f5f5f6;
    min-height: 100vh;
  }

  .second_chart_container{
    display: flex;
    width: 80%;
    div{
      border-radius: 40px;
      margin-top: 15px;
    }
    .completion_rate{
      margin-left: 30px;
      h4{
        text-align: left;
        color: #a3a6b9;
        font-size: 14px;
        padding: 25px 0 0 25px;
        float: left;
      }
    }
    .Review_task_chart{
      h4{
        text-align: left;
        color: #a3a6b9;
        font-size: 14px;
        padding: 25px 0 0 25px;
      }
    }
  }

  .line{
    border-bottom: 2px solid #05081d;
    opacity: 0.1;
    width: 80%;
    margin-top: 25px;
    margin-bottom: 40px;
  }
</style>
