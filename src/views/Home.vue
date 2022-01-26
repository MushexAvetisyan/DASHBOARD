<template>
  <div class="home">
    <div class="contain_header">
      <div class="dashboard_Header">
        <p>DASHBOARD</p>
        <h2>Insights</h2>
      </div>
      <div class="progress">

        <p>TOTAL TRANSITION</p>
        <span>15</span>

        <span>
        <p>INITIATED</p>
        <p>15</p>
      </span>
        <span>
        IN PROGRESS
        <p>15</p>
      </span>
        <span>
        COMPLETED
        <p>15</p>
      </span>
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
  }
}
</script>


<style scoped lang="scss">
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
    }
  }
</style>
