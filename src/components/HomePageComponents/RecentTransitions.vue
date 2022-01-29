<template>
  <div class="app">
    <div class="Recent_container">
      <h4>RECENT TRANSITIONS</h4>
      <div class="Transitions">

      </div>
      <div class="Transitions">

      </div>
      <div class="Transitions">

      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "RecentTransitions",
  data: () => ({

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
}
</style>
