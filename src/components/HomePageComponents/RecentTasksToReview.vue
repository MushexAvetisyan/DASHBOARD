<template>
  <div class="app">
    <div class="main_content">
      <h4>Recent tasks to review</h4>

      <div class="ShortTask"
           v-for="(task, index) in TaskReview"
           :key="index">
        <div class="mush">
          <p>UI/UX DESIGNER</p>
          <div>
            <button class="watchTask"><img src="@/assets/images/upload.svg" alt=""></button>
            <button class="watchTask"><img src="@/assets/images/eye.svg" alt=""></button>
          </div>
          <p>Integrated with Jira</p>
        </div>
        <h4 class="Task_Date">{{task.date}}</h4>
        <h4 class="Task_Title">{{task.title}}</h4>
        <h4 class="Task_Project">{{task.Project}}</h4>
        <div class="text_task">
          <h4 class="Task">{{task.task}}</h4>
        </div>
        <div class="CommentSection">
          <div class="Main_comment_content"
               v-for="(text, icon) in TaskCommentSection"
               :key="icon">
            <img v-if="text.icon" :src="text.icon" alt="icon">
            <span v-if="text.count">{{text.count}}</span>
            <p>{{text.label}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="Second_Content">
      <h4>CURRENT STATE</h4>
      <div class="Percentage_info">
        <div v-for="(info, index) in TaskInfo"
             :key="index">
          <img v-if="info.image" :src="info.image" alt="img">
          <span v-if="info.percentage">{{info.percentage}}</span>
          <p>{{info.info.toUpperCase()}}</p>
          <p class="Tasks">{{info.task}}<span v-if="info.count" class="count">{{info.count}}</span></p>
          <p class="Completion">{{info.rate}}<span v-if="info.count1" class="count">{{info.count1}}</span></p>
          <p class="TimeFrame">{{info.Transition}}<span v-if="info.TimeFrameCount" class="count">{{info.TimeFrameCount}}</span></p>
        </div>
      </div>
      <VueApexCharts type="bar" width="550" height="80" :options="CurrentChartOption" :series="CurrentChartSerries"></VueApexCharts>
    </div>
  </div>
</template>



<script>
import VueApexCharts from "vue-apexcharts";
export default {
  components: {
    VueApexCharts
  },
  data: () => ({

    TaskReview: [
      {
        date: 'OCT 6TH, 2020',
        title: 'Title of the task with a short description',
        Project: 'Name of the project',
        task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      }
    ],

    TaskInfo: [
      {
        image: require("@/assets/images/complete.svg"),
        percentage: 79 + '%',
        info: 'completed',
        task: 'Tasks',
        count: 36+'/'+48,
        rate: 'Completion rate',
        count1: -8+'%'
      },
      {
        image: require("@/assets/images/Waiting.svg"),
        percentage: 22,
        info: 'days to go',
        Transition: 'Transition timeframe',
        TimeFrameCount: 56+'days',
      }
    ],

    TaskCommentSection: [
      {
        count: 10,
        label: 'comments',
        icon: require("@/assets/images/Comment.svg")
      },
      {
        count: 5,
        label: 'attachments',
        icon: require("@/assets/images/paperclip.svg")
      },
      {
        label: 'Normal priority',
        icon: require("@/assets/images/time.svg")
      },
      {
        label: 'High criticality',
        icon: require("@/assets/images/High.svg")
      },
    ],

    CurrentChartOption: {
      chart: {
        id: "CurrentChart",
        stacked: true,
        animation: {
          speed: 900
        },
        toolbar: {
          show: false
        },
      },

      colors: ["#43BCCD", "#6D32A5", "#F53361",],

      fill: {
        opacity: 1
      },

      dataLabels: {
        enabled: false
      },

      plotOptions: {
        bar: {
          horizontal: true,
          borderRadius: 5,
          columnWidth: '50%',
        },
      },


      legend: {
        position: "bottom",
        offsetY: 7,
        offsetX: -41,
        fontSize: '12px',
        fontWeight: 700,
        labels: {
          colors: ['#000000']
        },
        itemMargin: {
          horizontal: 35
        },
        markers: {
          width: 15,
          height: 15,
          offsetY: 0,
          offsetX: -20,
          radius: 20
        }
      },

      yaxis: {
        show: false
      },
      xaxis: {
        min: 0,
        max: 100,
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
      },
      grid: {
        show: false
      }
    },

    CurrentChartSerries: [
      {
        name: "Current state",
        data: [70],
      },
      {
        name: "Agreed timing",
        data: [15],
      },
      {
        name: "Agreed timing",
        data: [15],
      },
    ],

  }),
  methods :{
  }
}
</script>



<style scoped lang="scss">
.app{
  display: flex;
  width: 80%;
  margin-top: 30px;
}
.main_content{
  width: 1047px;
  height: 380px;
  background-color: white;
  border-radius: 40px;
  h4{
    text-align: left;
    color: #a3a6b9;
    font-size: 14px;
    padding: 25px 0 0 30px;
  }
}
.ShortTask{
  background-color: white;
  width: 95%;
  //height: 220px;
  box-shadow: 0 0 7px 6px #f0f0f0;
  margin: 3% auto;
  border-radius: 40px;
  .mush{
    float: right;
    width: 140px;
    height: 175px;
    position: relative;
    right: 20px;
    top: 30px;
    p{
      color: black;
      font-weight: 700;
      font-size: 12px;
    }
    p:last-of-type{
      font-size: 10px;
      color: black;
      font-weight: 600;
      margin-top: 50px;
    }
    div{
      margin-top: 30px;
      img{
        margin: 0 5px 0 5px;
      }
    }
    .watchTask{
      cursor: pointer;
      background-color: white;
      outline: none;
      border: none;
    }
  }
  .Task_Date{
    color: #51C1D1;
    font-size: 12px;
  }
  .Task_Title{
    color: black;
    padding: 10px 25px 0;
    font-size: 25px;
  }
  .text_task{
    width: 74%;
    height: 70px;
    overflow-y: auto;
    margin: 0 25px;
  }
  .Task_Project{
    color: #51C1D1;
    padding: 10px 25px 0;
  }
  .Task{
    padding: 0 0;
    font-size: 11px;
    line-height: 22px;
  }
}
.CommentSection{
  display: flex;
  margin-top: 10px;
  padding-bottom: 15px;
  .Main_comment_content{
    display: flex;
    align-items: center;
    margin: 0 25px;
    cursor: pointer;
    img{
      width: 15px;
    }
    span{
      margin-left: 8px;
      color: black;
      font-weight: bold;
      font-size: 12px;
    }
    p{
      margin-left: 5px;
      font-size: 12px;
      font-weight: bold;
      color: black;
    }
  }
}
.Second_Content{
  width: 580px;
  height: 380px;
  background-color: white;
  margin-left: 30px;
  border-radius: 40px;
  padding: 0 45px 0 0;
  h4{
    text-align: left;
    color: #a3a6b9;
    font-size: 14px;
    padding: 25px 0 0 30px;
  }
}

.Percentage_info{
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0;
  div{
    border-right: 2px solid #EEEEF1;
    height: 180px;
    padding-right: 38px;
    padding-top: 35px;
  }
  div:last-of-type{
    border: none;
  }
  img{
    width: 50px;
    height: 50px;
    margin: -15px 0px;
  }
  span{
    font-size: 55px;
    color: black;
    font-weight: 600;
    margin: 15px;
    letter-spacing: 2px;
    font-family: system-ui;
  }
  p{
    color: #A3A6B9;
    font-weight: 800;
    font-size: 12px;
    text-align: center;
    margin-left: 50px;
  }
  .Tasks{
    color: black;
    margin-top: 50px;
    font-weight: 700;
    margin-left: 0px;
    float: left;
    font-size: 12px;
    .count{
      font-size: 12px;
      color: #91939B;
      margin: 10px;
    }
  }
  .Completion{
    color: black;
    margin-top: 50px;
    font-weight: 700;
    float: right;
    margin-left: 25px;
    margin-right: -30px;
    font-size: 12px;
    .count{
      font-size: 12px;
      color: #91939B;
      margin: 10px;
    }
  }
  .TimeFrame{
    color: black;
    margin-top: 50px;
    font-weight: 700;
    margin-left: 0;
    margin-right: -40px;
    font-size: 12px;
    .count{
      font-size: 12px;
      color: #91939B;
      margin: 10px;
    }
  }
}
</style>
