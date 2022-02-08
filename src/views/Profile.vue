<template>
  <div class="profile_main">
    <div class="profile_header">
      <p>PROFILE</p>
      <h2>JOHN ADAMS</h2>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped lang="scss">
.profile_main {
  min-height: 100vh;
  background-color: #f5f5f6;
  display: flex;
  p {
    color: black;
  }
}
.profile_header {
  p {
    text-align: left;
    font: normal normal medium 15px/50px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0;
    color: #6d32a5;
    text-transform: uppercase;
    opacity: 1;
  }
  h2 {
    font-size: 50px;
    font-weight: 900;
    color: black;
  }
}
</style>
