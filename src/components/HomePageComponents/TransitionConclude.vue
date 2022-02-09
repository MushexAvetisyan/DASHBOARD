<template>
  <div class="app">
    <div class="transition_section">
      <div class="flag">
        <img alt="" src="@/assets/images/flag.svg" />
      </div>
      <div class="transition_included">
        <h2>Transition ready to be concluded</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
          harum labore natus voluptate?
        </p>
      </div>
      <div class="add_or_conclude">
        <router-link to="/TaskTransitionsMettings">
          <button class="btn-task">ADD OTHER TASKS</button>
        </router-link>
        <router-link to="/MyTransitions">
          <button class="btn-task btn-color-second">CONCLUDE TRANSITION</button>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "transitionsection",
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.transition_section {
  height: 120px;
  background-color: white;
  width: 80%;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 15px;

  .transition_included {
    h2 {
      font-size: 26px;
      text-align: left;
      color: #05081d;
      font-weight: bold;
    }

    p {
      font-size: 13px;
      text-align: left;
      color: #a3a6b9;
    }
  }
}

.add_or_conclude {
  .btn-task {
    width: 380px;
    height: 45px;
    border-radius: 10px;
    box-shadow: 0 3px 16px #0000001a;
    background: #2b0f4d;
    color: white;
    cursor: pointer;
    font-weight: 600;
    margin-left: 10px;
    border: none;
    letter-spacing: 2px;
    padding: 17px;
  }

  .btn-color-second {
    background: #f53361 0 0 no-repeat padding-box;
  }
}
</style>
