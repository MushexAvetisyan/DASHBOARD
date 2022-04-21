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
          <router-link to="/NewTransition"
            ><button>START A TRANSITION</button>
          </router-link
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
            <p  class="circle" v-show="index <= dots && index !== 0"></p>
            <h3 class="transition" :style="ShowColorIcons && index <= count ? {color: item.textColor} : '' ">{{item.title}}</h3>
            <img :style=" ShowColorIcons && index <= count ? { filter: item.IconColor } : '' " :src="item.TypeIcon" alt="">
            <p class="transition" :style="ShowColorIcons && index <= count ? {color: item.textColor} : '' ">{{item.StepDescription}}</p>
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
    count: 0,
    dots: 0,
    ShowColorIcons: true,
    ShowDots: true,
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
        textColor: "black",
        StepDescription: "Lorem ipsum dolor sit amet, commodo consequat.",
      },
      {
        title: "Tasks created",
        TypeIcon: require("@/assets/images/Task.svg"),
        IconColor: "invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%)",
        textColor: "black",
        StepDescription: "Lorem ipsum dolor sit amet, commodo consequat.",
      },
      {
        title: "Tasks approved",
        TypeIcon: require("@/assets/images/TaskDone.svg"),
        IconColor: "invert(65%) sepia(50%) saturate(653%) hue-rotate(112deg) brightness(90%) contrast(86%)",
        textColor: "black",
        StepDescription: "Lorem ipsum dolor sit amet, commodo consequat.",
      },
      {
        title: "Knowledge Transfer",
        TypeIcon: require("@/assets/images/Knowledge.svg"),
        IconColor: "invert(68%) sepia(19%) saturate(1111%) hue-rotate(139deg) brightness(94%) contrast(95%)",
        textColor: "black",
        StepDescription: "Lorem ipsum dolor sit amet, commodo consequat.",
      },
      {
        title: "Production Parallel",
        TypeIcon: require("@/assets/images/Production.svg"),
        IconColor: "invert(19%) sepia(75%) saturate(2472%) hue-rotate(259deg) brightness(91%) contrast(85%)",
        textColor: "black",
        StepDescription: "Lorem ipsum dolor sit amet, commodo consequat.",
      },
      {
        title: "Live execution",
        TypeIcon: require("@/assets/images/Live.svg"),
        IconColor: "invert(36%) sepia(58%) saturate(5304%) hue-rotate(328deg) brightness(98%) contrast(96%)",
        textColor: "black",
        StepDescription: "Lorem ipsum dolor sit amet, commodo consequat.",
      },
      {
        title: "Completed",
        TypeIcon: require("@/assets/images/DoneTask.svg"),
        IconColor: "invert(51%) sepia(76%) saturate(2863%) hue-rotate(356deg) brightness(98%) contrast(106%)",
        textColor: "black",
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
    let DotsInterval = setInterval( () => {
      if (this.dots < this.TransitionSteps.length) {
        this.dots++
      }
      else {
        clearInterval(DotsInterval)
      }
    }, 1430)
    let intervalForColor = setInterval(() => {
      console.log('count', this.count)
      console.log('TransitionSteps.length', this.TransitionSteps.length)
      console.log('this.count', this.count)
        if(this.count < this.TransitionSteps.length-1) {
          this.count++
        }
        else {
          clearInterval(intervalForColor)
        }
    }, 1500,)
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
    font-size: 33px;
  }
  .users_type {
    height: 250px;
    margin-top: 30px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 45px -15px rgb(105 96 105 / 55%);
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
    margin: 50px 0 50px 0;
    text-align: left;
    color: black;
    font-size: 33px;
  }
}
.Transition_Steps{
  display: flex;
  border-radius: 20px;
  align-items: center;
  height: 250px;
  background-color: white;
  box-shadow: 0 0 45px -15px rgb(105 96 105 / 55%);
  .Box{
    width: 180px;
    .transition{
      transition: 0.5s;
    }
    .circle{
      width: 8px;
      height: 8px;
      border-radius: 50px;
      background-color: #A3A6B9;
      position: relative;
      right: 105px;
      transition: 0.3s;
      top: 90px;
    }
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
