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
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data: () => ({

  })
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
    padding-top: 6%;
    .progress{
      display: flex;
      div{
        margin-left: 80px;
      }
    }
  }
  .transition_section{
    height: 120px;
    background-color: white;
    width: 80%;
    border-radius: 30px;
    display: flex;
    align-items: center;
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
      width: 240px;
      height: 40px;
      border-radius: 10px;
      box-shadow: 0 3px 16px #0000001a;
      background: #2B0F4D;
      color: white;
      cursor: pointer;
      font-weight: 600;
      margin-left: 8px;
      border: none;
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
      font-size: 20px;
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
      font-size: 10px;
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
