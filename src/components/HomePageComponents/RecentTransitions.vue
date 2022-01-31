<template>
  <div class="app">
    <div class="Recent_container">
      <div>
        <h4>RECENT TRANSITIONS</h4>
        <div class="Transitions" v-for="(item, index) in Transitions" :key="index">
          <h2>{{ item.title }}</h2>
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
          <button @click="toggleAccordion()" :aria-expanded="isOpen" :aria-controls="`collapse${_uid}`" class="open_accordion">
            <img v-if="item.icon" :src="item.icon" alt="icon">
            <slot name="content" />
          </button>
      </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "RecentTransitions",
  data: () => ({
    isOpen: true,
    Transitions: [
      {
        title: "UI/UX Designer",
        role: 'Creator',
        status: 'Ready To Be Concluded',
        day: 26,
        icon: require("@/assets/images/chevron-thin-down.svg"),
        color: '#F53361'
      },
      {
        title: "Tech Lead",
        role: 'Collaborator',
        status: 'production parallel',
        day: 26,
        icon: require("@/assets/images/chevron-thin-down.svg"),
        color: '#6D32A5',
      },
      {
        title: "HR Manager",
        role: 'Transitor',
        status: 'knowledge transfer',
        day: 26,
        icon: require("@/assets/images/chevron-thin-down.svg"),
        color: '#43BCCD',
      },
    ],
  }),
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>



<style scoped lang="scss">
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
    color: black;
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
  }
}
</style>
