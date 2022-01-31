<template>
  <div class="contain_header">
    <div class="dashboard_Header">
      <p>DASHBOARD</p>
      <h2>Insights</h2>
    </div>
    <div class="progress">
      <div class="progress_content" v-for="(item, index) in taskInfoData" :key="index">
        <p>{{ item.title }} <img v-if="item.icon" :src="item.icon" alt="icon"></p>
        <span>{{ item.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "containHeader",
  data: () => ({
    taskInfoData: [
      {
        title: "TOTAL TRANSITION",
        count: 15,
      },
      {
        title: "INITIATED ",
        count: 2,
        icon: require("@/assets/images/circle-info.svg"),
      },
      {
        title: "IN PROGRESS",
        count: 5,
        icon: require("@/assets/images/circle-info.svg"),
      },
      {
        title: "COMPLETED",
        count: 2,
        icon: require("@/assets/images/circle-info.svg"),
      }

    ],
  })
}
</script>

<style lang="scss">
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
</style>
