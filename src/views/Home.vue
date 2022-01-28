<template>
  <div class="home">

    <containHeader />

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
        <h4>DUE DATE</h4>
        <apexchart width="400" height="380" type="donut" :options="DueDateChartOptions" :series="seriesDueDate"></apexchart>
      </div>
    </div>


    <div class="chart_cycle_time">
      <h4>CYCLE TIME</h4>
      <select class="filter_Cyrcle" v-model="selected">
        <option v-for="country in countries" v-bind:value="country.code">
          {{ country.name }}
        </option>
      </select>
      <VueApexCharts class="chart_style" width="1450" height="300" type="line" :options="CycleTimeChartOptions" :series="seriesForCycleTime"></VueApexCharts>
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
import VueApexCharts from 'vue-apexcharts'
import containHeader from '../components/HomePageComponents/containHeader'
export default {
  name: 'Home',
  components: {
    VueApexCharts,
    containHeader
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
      }
    }
    .chart_Due_date{
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
      .apexcharts-legend-marker{
        padding-right: 15px;
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

  .line{
    border-bottom: 2px solid #05081d;
    opacity: 0.1;
    width: 80%;
    margin-top: 25px;
    margin-bottom: 40px;
  }



</style>
