<template>
  <div>
    <transition name="fade" v-if="show">
      <div class="Welcome">
        <GridLoader :size="200" :color="'#6D32A5'" />
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
            <img :src="item.img" alt="user">
            <h2>{{item.Rule}}</h2>
            <p>{{item.Description}}</p>
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
    show: true,
    LoaderOff: true,

    UserTypes: [
      {
        img: require("@/assets/images/Creator.svg"),
        Rule: "Creator",
        Description: "lorem ipsum dolor sit amet,lorem ipsum dolor sit amet",
      },
      {
        img: require("@/assets/images/Creator.svg"),
        Rule: "Transitor",
        Description: "lorem ipsum dolor sit amet,lorem ipsum dolor sit amet",
      },
      {
        img: require("@/assets/images/Creator.svg"),
        Rule: "Creator",
        Description: "lorem ipsum dolor sit amet,lorem ipsum dolor sit amet",
      },
      {
        img: require("@/assets/images/Creator.svg"),
        Rule: "Creator",
        Description: "lorem ipsum dolor sit amet,lorem ipsum dolor sit amet",
      },
    ],
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
  }
}
.Main_Container {
  height: 100vh;
  background-color: #f5f5f6;
  z-index: 11;
  .welcome {
    display: flex;
    align-items: center;
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
</style>
