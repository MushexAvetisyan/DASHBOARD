<template>
  <div class="app">
    <accordion>
      <accordion-item class="Transitions" v-for="(item, index) in Transitions" :key="index" id="index">
        <template slot="accordion-trigger">
          <h2>{{item.title}}</h2>
          <div class="main_transitions">
            <span>MY ROLE</span>
            <p class="role second">{{item.role}}</p>
          </div>
          <div class="main_transitions">
            <span>STATUS</span>
            <p class="status" :style="`background: ${item.color}`">{{item.status.toUpperCase()}}</p>
          </div>
          <div class="main_transitions">
            <span>DAYS TO GO</span>
            <p class="data">{{item.day}}</p>
          </div>
          <div class="comment">
            <span>{{item.commentCount}}</span>
            <img :src="item.comments" />
            <button class="open_accordion">
              <img v-if="item.icon" :src="item.icon" alt="icon">
            </button>
          </div>
        </template>



        <template slot="accordion-content">

          <div class="main_content_dropdown">
            <div class="TransitionInformation">
              <div class="main">
                <div class="Creator" v-for="(name, job) in TransitionContent" :key="job">
                  <span>{{name.titleHead.toUpperCase()}}</span>
                  <p>{{name.name}}</p>
                </div>
              </div>
            </div>


            <div class="percentage">
              <span>COMPLETION PERCENTAGE</span>
              <a-progress :percent="98" />
            </div>



            <div class="TaskInformation">
              <div class="main">
                <div class="Tasks" v-for="(task, count) in TransitionTasks" :key="count">
                  <span>{{task.title.toUpperCase()}}</span>
                  <p>{{task.counts}}</p>
                </div>
              </div>
            </div>
          </div>





        </template>
      </accordion-item>
    </accordion>
  </div>
</template>





<script>
import accordion from "@/components/HomePageComponents/Accordion/accordion";
import AccordionItem from "@/components/HomePageComponents/Accordion/AccordionItem";
import Antd from "ant-design-vue";

export default {
  name: "RecentTransitions",
  components: {
    accordion,
    AccordionItem,
    Antd
  },
  data: () => ({

    Transitions: [
      {
        title: "UI/UX Designer",
        role: 'Creator',
        status: 'Ready To Be Concluded',
        day: 26,
        icon: require("@/assets/images/chevron-thin-down.svg"),
        color: '#F53361',
        comments:require("@/assets/images/commentlitle.svg"),
        commentCount: 15
      },
      {
        title: "Tech Lead",
        role: 'Collaborator',
        status: 'production parallel',
        day: 26,
        icon: require("@/assets/images/chevron-thin-down.svg"),
        color: '#6D32A5',
        comments:require("@/assets/images/commentlitle.svg"),
        commentCount: 15
      },
      {
        title: "HR Manager",
        role: 'Transitor',
        status: 'knowledge transfer',
        day: 26,
        icon: require("@/assets/images/chevron-thin-down.svg"),
        color: '#43BCCD',
        comments:require("@/assets/images/commentlitle.svg"),
        commentCount: 15
      },
    ],

    TransitionContent: [
      {
        titleHead: "creator",
        name: "John Adams",
        id: 1
      },
      {
        titleHead: "collaborator(s)",
        name: "Nishant Mehra | Lu Shih",
        id: 2
      },
      {
        titleHead: "transitor",
        name: "Sammy Jo",
        id: 3
      },
      {
        titleHead: "transitee(s)",
        name: "Vladimir Nikolsky",
        id: 4
      }
    ],

    TransitionTasks: [
      {
        title: "tasks",
        counts: 26
      },
      {
        title: "knowledge transefer",
        counts: 12
      },
      {
        title: "production parallel",
        counts: 6
      },
      {
        title: "LIVE EXECUTION",
        counts: "N/A"
      }
    ]

  }),
}
</script>



<style scoped lang="scss">

.accordionOne{
  ::v-deep{
   margin: 0 auto;
  }
}
.Recent_container{
  height: 420px;
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

.TransitionInformation{
  height: 60px;
  margin-top: 10px;
  border-top: 1px solid #F1F1F3;
}

.main_content_dropdown{
  width: 95%;
}

.TaskInformation{
  margin-top: 15px;
  p{
    color: black;
    font-weight: 600;
  }
  span{
    color: #A3A6B9!important;
    font-weight: 600!important;
  }
}
.main{
  display: flex;
  text-align: left;
  width: 100%;
  padding-right: 95px;
  margin-left: -70px;
  .Creator{
    margin-top: 20px;
    p{
      color: black;
      font-weight: 600;
    }
  }
}

.comment{
  display: flex;
  align-items: center;
  width: 50px;
  span{
    color: black!important;
    font-weight: 700!important;
    margin-right: 15px!important;
  }
}
.message{
  max-width: 78%;
  margin-left: auto;
  margin-right: auto;
  background-color: red;
  border-radius: 20px;
}

.percentage{
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 91%;
  padding-right: 55px;
  span{
    color: #F53361!important;
    margin-left: -25px!important;
  }
  ::v-deep{
    .ant-progress-line{
      width: 88%;
    }
    .ant-progress-bg{
      margin: 0;
      background-color: #F53361;
      height: 10px!important;
    }
    .ant-progress-text{
      color: #F53361;
      font-weight: 600;
      position: relative;
      bottom: 25px;
      right: -46%;
    }
  }
}

.message-header{
  height: 60px;
  display: flex;
  align-items: center;
}
.message-body{
  padding: 0;
  max-height: 10em;
  overflow: hidden;
  transition: 0.3s ease all;
}

.is-closed .message-body{
  max-height: 0;
}

.message-content{
  padding: 20px;
}

.Transitions{
  width: 96%;
  background-color: white;
  margin: 25px 0 0 25px;
  box-shadow: 0 0 15px 10px #f0f0f0;
  border-radius: 25px;
  align-items: center;
  &:first-of-type{
    border-left: 25px solid #F53361;
  }
  &:nth-of-type(2){
    border-left: 25px solid #6D32A5;
  }
  &:nth-of-type(3){
    border-left: 25px solid #43BCCD;
  }

  h2{
    font-weight: bold;
    color: black;
    margin-bottom: 0;
  }
  .role{
    font-weight: bold;
    font-size: 16px;
    color: black;
  }
  .status{
    background-color: #F53361;
    padding: 8px 20px;
    border-radius: 20px;
    color: white;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .data{
    color: black;
    font-weight: 800;
  }
  img{
    cursor: pointer;
  }
  span{
    color: #C3C5D1;
    font-size: 12px;
    font-weight: 800;
  }
  .main_transitions{
    text-align: left;
  }
  .open_accordion{
    background: none;
    border: none;
    margin-left: 25px;
  }
}
</style>
