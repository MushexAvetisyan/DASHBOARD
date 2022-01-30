<template>
  <div class="app">
    <div class="Recent_container">
      <h4>RECENT TRANSITIONS</h4>
      <div class="Transitions" v-for="(item, index) in Transitions" :key="index">
        <h2>{{ item.title }}</h2>
        <div class="main_transitions">
          <span>MY ROLE</span>
          <p class="role second">{{item.role}}</p>
        </div>
        <div class="main_transitions">
          <span>STATUS</span>
          <p class="status">{{item.status.toUpperCase()}}</p>
        </div>
        <div class="main_transitions">
          <span>DAYS TO GO</span>
          <p>{{item.day}}</p>
        </div>
        <img v-if="item.icon" :src="item.icon" alt="icon">
      </div>
<!--      <div class="Transitions">-->

<!--      </div>-->
<!--      <div class="Transitions">-->

<!--      </div>-->
    </div>
  </div>
</template>



<script>
export default {
  name: "RecentTransitions",
  data: () => ({
    Transitions: [
      {
        title: "UI/UX Designer",
        role: 'Creator',
        status: 'Ready To Be Concluded',
        day: 26,
        icon: require("@/assets/images/chevron-thin-down.svg"),
      },
      {
        title: "Tech Lead",
        role: 'Collaborator',
        status: 'production parallel',
        day: 26,
        icon: require("@/assets/images/chevron-thin-down.svg"),
      },
      {
        title: "HR Manager",
        role: 'Transitor',
        status: 'knowledge transfer',
        day: 26,
        icon: require("@/assets/images/chevron-thin-down.svg"),
      },
    ],
  })
}
</script>



<style scoped lang="scss">
.Recent_container{
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
  }
}
.Transitions{
  width: 97%;
  height: 90px;
  background-color: white;
  margin: 25px 0 0 25px;
  box-shadow: 0 0 8px 12px #f0f0f0;
  border-radius: 25px;
  border-left: 25px solid #F53361;
  display: flex;
  align-items: center;

  h2{
    font-weight: bold;
  }
  .role{
    font-weight: bold;
    font-size: 16px;
  }
  .status{
    background-color: #F53361;
    padding: 8px 20px;
    border-radius: 20px;
    color: white;
    font-weight: 800;
    letter-spacing: 2px;
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
}
</style>
