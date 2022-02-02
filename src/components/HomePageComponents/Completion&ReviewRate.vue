<template>
  <div class="app">
    <div class="second_chart_container">

      <div class="TaskReviewRate" style="width: 580px; height: 380px; background-color: white;">
        <h4>TASKS REVIEW RATE</h4>
        <div class="Review_Filter">
          <select class="Review_control" v-model="ReviewFilter">
            <option class="FilterTr" v-for="n in ReviewTags" v-bind:key="n" v-bind:value="n">{{ n.trim()}}</option>
          </select>
        </div>
        <apexchart width="430" height="380" type="donut" :options="TaskReviewRateOptions" :series="seriesTaskReviewRate"></apexchart>
      </div>

      <div class="completion_rate" style="width: 1047px; height: 380px; background-color: white;">
                <h4>COMPLETION RATE</h4>
        <div class="completion_Filter">
          <select class="Completion_control" v-model="Completion_Filter">
            <option v-for="n in CompletionTags" v-bind:key="n" v-bind:value="n">{{ n.trim()}}</option>
          </select>
        </div>
        <apexchart width="950" height="330" type="bar" :options="CompletionRateChartOptions" :series="seriesForCompletionRate"></apexchart>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: 'Completion&ReviewRate.vue',

    ReviewTags: ["All phases", "New", "Latest"],
    ReviewFilter: "All phases",

    Completion_Filter: ["All", "New", "Last"],
    CompletionTags: "All",

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
      legend: {
        position: 'top',
        show: true,
        horizontalAlign: 'right',
        width: 900,
        height: 50,
        fontSize: '14',
        offsetY: -3,
        fontFamily: "CircularFontFamily",
        fontWeight: 900,
        markers: {
          radius: 12,
          offsetX: -10,
          offsetY: 2,
          width: 15,
          height: 15,
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
          columnWidth: '40%',
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
      },
      legend: {
        show: true,
        position: "left",
        fontSize: '12px',
        fontWeight: 600,
        offsetX: -20,
        offsetY: 30,
        itemMargin: {
          vertical: 20
        },
        markers: {
          width: 15,
          height: 15,
          offsetY: 2,
          offsetX: -10
        }
      },
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          offsetY: 40,
          customScale: 1.1,
          donut: {
            size: '55%',
          },
        }
      }
    },

    seriesTaskReviewRate: [26,18],
  })
}
</script>

<style scoped lang="scss">
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
  .TaskReviewRate{
    h4{
      text-align: left;
      color: #a3a6b9;
      font-size: 14px;
      padding: 25px 0 0 25px;
      float: left;
    }
  }
  .Review_Filter{
    cursor: pointer;
    position: relative;
    right: 120px;
    top: 22px;
    margin-top: 0;
  }
  .completion_Filter{
    cursor: pointer;
    position: relative;
    right: 345px;
    top: 22px;
    margin-top: 0;
  }
  .Review_control{
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
  .Completion_control{
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
}
</style>
