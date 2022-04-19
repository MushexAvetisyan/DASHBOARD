<template>
  <div>
    <transition name="fade" v-if="show">
      <div class="Welcome">
<!--        <GridLoader :size="200" :color="'#6D32A5'" />-->
      </div>
    </transition>
    <div class="Main_Container" v-show="LoaderOff">
      <div class="welcome">
        <div class="first_container">
          <h1>DASHBOARD</h1>
          <h2>Welcome on board!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="start_transition">
          <router-link to="/Home"
            ><button>START A TRANSITION</button></router-link
          >
        </div>
      </div>
      <div class="line"></div>
      <div class="users_content">
        <h2>Users involved</h2>
        <div class="users_type">
          <div v-for="(item, index) in UserTypes" :key="index">
            <img :src="item.img" alt="user" />
            <h2>{{ item.Rule }}</h2>
            <p>{{ item.Description }}</p>
          </div>
        </div>
      </div>
      <div class="Type_content">
        <h1>Transition steps</h1>
        <div class="Transition_Steps">
          <div class="Box" v-for="(item, index) in TransitionSteps" :key="index">
            <h3>{{item.title}}</h3>
            <img v-show="ShowColorIcons" v-if="ShowColorIcons === true" :src="item.TypeIcon" alt="">
            <img :src="item.TypeIconColor" v-else alt="">
            <p>{{item.StepDescription}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GridLoader } from "vue-spinners-css";
export default {
  data: () => ({
    icon: require("@/assets/LoadLogo.svg"),
    icon1: require("@/assets/Logo.svg"),
    show: false,
    ShowColorIcons: true,
    LoaderOff: true,
    UserTypes: [
      {
        img: require("@/assets/images/Creator.svg"),
        Rule: "Creator",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
      {
        img: require("@/assets/images/Transitor.svg"),
        Rule: "Transitor",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
      {
        img: require("@/assets/images/Transite.svg"),
        Rule: "Transitee(s)",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
      {
        img: require("@/assets/images/Company.svg"),
        Rule: "Collaborator(s)",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
    ],
    TransitionSteps: [
      {
        title: "Initiated",
        TypeIcon: require("@/assets/images/Telegram.svg"),
        TypeIconColor: require("@/assets/images/Telegram.svg"),
        StepDescription: "Lorem ipsum dolor sit amet, commodo consequat.",
      },
      {
        title: "Tasks created",
        TypeIcon: require("@/assets/images/Task.svg"),
        TypeIconColor: require("@/assets/images/TaskColor.svg"),
        StepDescription: "Lorem ipsum dolor sit amet, commodo consequat.",
      },
      {
        title: "Tasks approved",
        TypeIcon: require("@/assets/images/TaskDone.svg"),
        TypeIconColor: require("@/assets/images/TaskDoneColor.svg"),
        StepDescription: "Lorem ipsum dolor sit amet, commodo consequat.",
      },
      {
        title: "Knowledge Transfer",
        TypeIcon: require("@/assets/images/Knowledge.svg"),
        TypeIconColor: require("@/assets/images/KnowledgeColor.svg"),
        StepDescription: "Lorem ipsum dolor sit amet, commodo consequat.",
      },
      {
        title: "Production Parallel",
        TypeIcon: require("@/assets/images/Production.svg"),
        TypeIconColor: require("@/assets/images/ProductionColor.svg"),
        StepDescription: "Lorem ipsum dolor sit amet, commodo consequat.",
      },
      {
        title: "Live execution",
        TypeIcon: require("@/assets/images/Live.svg"),
        TypeIconColor: require("@/assets/images/LiveColor.svg"),
        StepDescription: "Lorem ipsum dolor sit amet, commodo consequat.",
      },
      {
        title: "Completed",
        TypeIcon: require("@/assets/images/DoneTask.svg"),
        TypeIconColor: require("@/assets/images/DoneTaskColor.svg"),
        StepDescription: "Lorem ipsum dolor sit amet, commodo consequat.",
      }
    ]
  }),


  components: {
    GridLoader,
  },


  mounted() {
    setTimeout(() => {
      this.show = false;
    }, 1000);
    clearTimeout(() => {
      this.LoaderOff = false;
    });
    setTimeout(() => {
      this.ShowColorIcons = false
      this.TransitionSteps.title.style.color = "black"
    }, 2000)
  },

};
</script>

<style scoped lang="scss">
.Welcome {
  width: 100%;
  height: 100vh;
  background-color: white;
  position: absolute;
  top: 0;
  border-bottom: 1px solid black;
  left: 0;
  right: 0;
  ::v-deep {
    .lds-grid {
      position: relative;
      top: 40%;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
}
.line {
  border-bottom: 2px solid #dfdcdc;
  width: 80%;
  margin-top: 25px;
  margin-bottom: 40px;
}
.users_content {
  width: 80%;
  h2 {
    text-align: left;
    color: black;
    font-size: 35px;
  }
  .users_type {
    height: 250px;
    margin-top: 30px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    align-items: center;
    div {
      width: 250px;
      h2 {
        text-align: center !important;
        font-size: 20px;
        font-weight: 500;
        margin: 10px 0 10px 0;
      }
      p{
        font-size: 13px;
        line-height: 25px;
      }
    }
    img{
      margin-left: 20px;
    }
  }
}
.Main_Container {
  height: 100vh;
  background-color: #f5f5f6;
  z-index: 11;
  .welcome {
    display: flex;
    align-items: flex-end;
    width: 80%;
    .first_container {
      text-align: left;
      width: 70%;
      h1 {
        color: #6d32a5;
        font-weight: 700;
        font-size: 16px;
      }
      h2 {
        font-size: 60px;
        color: #05081d;
        font-weight: bold;
      }
      p {
        color: #b1b2b8;
        font-weight: 700;
        font-size: 15px;
        margin-top: 10px;
        line-height: 30px;
      }
    }
  }
}
.start_transition {
  button {
    color: white;
    font-weight: 700;
    letter-spacing: 1px;
    width: 441px;
    border: none;
    height: 51px;
    border-radius: 10px;
    box-shadow: 0 3px 16px #0000001a;
    background: #6d32a5;
    cursor: pointer;
  }
}
.Type_content{
  width: 80%;
  h1{
    margin: 30px 0 30px 0;
    text-align: left;
    color: black;
    font-size: 35px;
  }
}
.Transition_Steps{
  display: flex;
  border-radius: 20px;
  align-items: center;
  height: 250px;
  background-color: white;
  margin-top: 25px;
  .Box{
    width: 180px;
  }
  img{
    margin: 15px 0 15px 0;
  }
  h3{
    color: #727176;
  }
  p{
    color: #727176;
  }

}
</style>
