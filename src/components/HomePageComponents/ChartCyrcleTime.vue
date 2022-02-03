<template>
  <div class="app">
    <div class="chart_cycle_time">
      <h4>CYCLE TIME</h4>
      <main class="filter_Cyrcle">
        <select class="CyrcleFormControll" v-model.trim="Cyrcle_Filter">
          <option class="FilterTr" v-for="n in CyrcleTags" v-bind:key="n" v-bind:value="n">{{ n.trim()}}</option>
        </select>
        <span></span>
        <select class="CyrcleFormState" v-model.trim="Cyrcle_State_Filter">
          <option class="FilterTr" v-for="n in CyrcleStateTags" v-bind:key="n" v-bind:value="n">{{ n.trim()}}</option>
        </select>
      </main>
      <section class="Dates">
        <span
            v-for="(item, index) in DatesInfo"
            :key="index">
          {{ item.name.toUpperCase() }}
          <p>{{item.day}}</p>
        </span>
      </section>
      <VueApexCharts
          class="chart_style"
          width="1450"
          height="310"
          type="line"
          :options="CycleTimeChartOptions"
          :series="seriesForCycleTime">
      </VueApexCharts>
    </div>
  </div>
</template>



<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  data: () => ({
    CyrcleTags: ["All","New","Last"],
    Cyrcle_Filter: "All",

    CyrcleStateTags: ["Current State","New","Last"],
    Cyrcle_State_Filter: "Current State",

    CycleTimeChartOptions: {
      chart: {
        id: 'Cycle-example',
        toolbar: {
          show: false
        }
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: 'top',
        labels: ['Average Cycle time', 'Agreed TAT', ],
      },
      colors: ['#43BCCD', '#6D32A5'],
      dataLabels: {
        enabled: true,
        background: {
          enabled: true,
          borderRadius: 50,
          foreColor: '#fff',
          padding: 5,
        }
      },
      xaxis:{
        categories: ['TASKS APPROVING','KNOWLEDGE TRANSFER', 'PRODUCTION PARALLEL', 'LIVE EXECUTION', ],
        tickPlacement: 'between',
        labels: {
          style: {
            colors: ['#A3A6B9','#A3A6B9','#A3A6B9','#A3A6B9','#A3A6B9',],
            fontSize: '10px',
            fontWeight: 600
          }
        }
      },
      fill: {
        opacity: 1
      },
      yaxis: {
        max: 30,
        min: 0,
        tickAmount: 3
      },
    },
    seriesForCycleTime: [
      {
        name: 'Average Cycle time',
        data: [12, 5, 14, 17]
      },
      {
        name: 'Agreed TAT',
        data: [9, 9, 18, 10]
      }
    ],
    books: [
      { title: "All" },
      { title: "Last" },
      { title: "New" },
    ],

    DatesInfo: [
      {
        name: 'tasks approving',
        day: '12 days (avg.)'
      },
      {
        name: 'knowledge',
        day: '4 days (avg.)'
      },{
        name: 'production',
        day: '13 days (avg.)'
      },
      {
        name: 'live',
        day: '8 days (avg.)'
      },
      {
        name: 'total',
        day: '37 days (avg.)'
      }
    ]
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
    padding: 27px 0 0 25px;
    float: left;
  }
  .filter_Cyrcle{
    width: 200px;
    cursor: pointer;
    position: relative;
    top: 23px;
    margin-top: 0;
    z-index: 1;
    float: left;
    span{
      border-left: 1px solid grey;
      margin-left: 7px;
      margin-right: 7px;
    }
  }

  .CyrcleFormControll{
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

  .CyrcleFormState{
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

  .Dates{
    display: flex;
    align-items: baseline;
    width: 60%;
    margin: 0 37%;
    padding: 0;
    text-align: left;
    span{
      margin-top: 25px;
      color: #AEB1C2;
      font-weight: 700;
      font-size: 12px;
    }
    p{
      color: black;
      font-weight: 800;
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
  .select_input{
    ::v-deep{
      .vs__dropdown-toggle{
        cursor: pointer;
        border: none;
        padding: 0;
        display: flex;
        align-items: baseline;
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

}
</style>
