<template>
  <div class="home">

    <div class="contain_header">
      <div class="dashboard_Header">
        <p>DASHBOARD</p>
        <h2>Insights</h2>
      </div>
      <div class="progress">
        <div class="progress_content">
          <p>TOTAL TRANSITION</p>
          <span>15</span>
        </div>
        <div class="progress_content">
          <p>INITIATED <img src="../assets/images/circle-info.svg" alt=""></p>
          <span>2</span>
        </div>
        <div class="progress_content">
          <p>IN PROGRESS <img src="../assets/images/circle-info.svg" alt=""></p>
          <span>5</span>
        </div>
        <div class="progress_content">
          <p>COMPLETED <img src="../assets/images/circle-info.svg" alt=""></p>
          <span>2</span>
        </div>
      </div>
    </div>

    <div class="line"></div>

    <div class="transition_section">
      <div class="flag">
        <img src="../assets/images/flag.svg" alt="">
      </div>
      <div class="transition_included">
        <h2>Transition ready to be concluded</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi harum labore natus voluptate?</p>
      </div>
      <div class="add_or_conclude">
        <button class="btn-task">ADD OTHER TASKS</button>
        <button class="btn-task btn-color-second">CONCLUDE TRANSITION</button>
      </div>
    </div>

    <div class="chart_container">
      <div class="chart_main" style="width: 1047px; height: 380px; background-color: white;">
        <h4>TRANSITION STATE</h4>
        <VueApexCharts class="chart_style" width="900" height="320" type="bar" :options="TransitionChartOptions" :series="seriesForTransitions"></VueApexCharts>
      </div>

      <div class="chart_main second_chart" style="width: 580px; height: 380px; background-color: white;">
        <h4>DUE DATE</h4>
        <apexchart width="400" height="380" type="donut" :options="DueDateChartOptions" :series="seriesDueDate"></apexchart>
      </div>
    </div>


    <div class="second_chart_1">
      <h4>CYCLE TIME</h4>
    </div>

    <div class="second_chart_container">

      <div class="Review_task_chart" style="width: 580px; height: 380px; background-color: white;">
        <h4>TASKS REVIEW RATE</h4>
        <apexchart width="400" height="380" type="donut" :options="TaskReviewRateOptions" :series="seriesTaskReviewRate"></apexchart>
      </div>

      <div class="completion_rate" style="width: 1047px; height: 380px; background-color: white;">
        <h4>COMPLETION RATE</h4>
        <apexchart width="900" height="320" type="bar" :options="CompletionRateChartOptions" :series="seriesForCompletionRate"></apexchart>
      </div>

    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'
import VueApexCharts from 'vue-apexcharts'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    VueApexCharts
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
        tickAmount: 3
      }
    },
    seriesForTransitions: [{
      name: 'series-1',
      data: [1, 5, 4, 3, 2]
    }],

    CompletionRateChartOptions: {
      chart: {
        id: 'vuechart-example',
      },
      xaxis: {
        categories: ['TASKS', 'knowledge transfer', 'production parallel', 'live execution'],
      },
    },
    seriesForCompletionRate: [{
      name: 'series-2',
      data: [1, 5, 4, 3]
    }],

    DueDateChartOptions: {
      chart: {
        id: 'DueDateChart',
      },
      labels: ['Completed due date (3)', 'Nearing due date (2)'],
      colors: ['#43BCCD', '#6D32A5'],

      dataLabels: {
        enabled: false,
      }
    },
    seriesDueDate: [3,2],

    TaskReviewRateOptions: {},
    seriesTaskReviewRate: [26,18],
  }),


  methods: {

  },
}
</script>


<style scoped lang="scss">
*{
  font-family: CircularFontFamily;
}
@font-face {
  font-family: "CircularFontFamily";
  src: local("CircularFontFamily"),
  url("../fonts/CircularFontFamily/Gilroy-Regular.ttf");
}
  .home{
    background-color: #f5f5f6;
    min-height: 100vh;
  }
  .contain_header{
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: 1%;
    .progress{
      display: flex;
      div{
        margin-left: 80px;
      }
    }
  }
  .chart_container{
    display: flex;
    width: 80%;
    div{
      border-radius: 40px;
      margin-top: 15px;
    }
    .chart_main{
      h4{
        text-align: left;
        margin: 30px 0px 0 30px;
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
    }
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
  .second_chart_1{
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
    }
  }
  .transition_section{
    height: 120px;
    background-color: white;
    width: 80%;
    border-radius: 30px;
    display: flex;
    align-items: center;
    padding: 15px;
    .transition_included{
      h2{
        font-size: 26px;
        text-align: left;
        color: #05081d;
        font-weight: bold;
      }
      p{
        font-size: 13px;
        text-align: left;
        color: #a3a6b9;
      }
    }
  }
  .add_or_conclude{

    .btn-task{
      width: 355px;
      height: 45px;
      border-radius: 10px;
      box-shadow: 0 3px 16px #0000001a;
      background: #2B0F4D;
      color: white;
      cursor: pointer;
      font-weight: 600;
      margin-left: 8px;
      border: none;
      padding-top: 5px;
      letter-spacing: 1px;
    }
    .btn-color-second{
      background: #F53361 0 0 no-repeat padding-box;
    }
  }
  .progress_content{
    text-align: left;
    p{
      color: #a3a6b9;
      font-weight: 600;
      font-size: 15px;
    }
    span{
      color: black;
      font-size: 23px;
      font-weight: 700;
    }
    img{
      position: relative;
      top: 1px;
      left: 5px;
      width: 13px;
    }
  }
  .line{
    border-bottom: 2px solid #05081d;
    opacity: 0.1;
    width: 80%;
    margin-top: 25px;
    margin-bottom: 40px;
  }
  .dashboard_Header{
    p{
      text-align: left;
      font: normal normal medium 15px/50px;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0;
      color: #6D32A5;
      text-transform: uppercase;
      opacity: 1;
    }
    h2{
      font-size: 50px;
      font-weight: 900;
      color: black;
    }
  }
</style>
