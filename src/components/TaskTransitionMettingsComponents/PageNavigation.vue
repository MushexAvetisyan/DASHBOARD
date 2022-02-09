<template>
  <div class="app">
    <div class="navigation">
      <div class="title">
        <router-link to="/MyTransitions">
          <p>MY TRANSITIONS</p>
        </router-link>
        <span> &nbsp&nbsp <  &nbsp&nbsp UI/UX DESIGNER</span>
      </div>
    </div>
    <div class="Toolbar">
    <div class="navbar">
      <h2>UI/UX Designer</h2>
    </div>
    <div class="menu">
      <ul>
        <li v-for="item in navbars" :key="item.id">
          <router-link :to="{path:item.router}">{{item.names.toUpperCase()}}</router-link>
        </li>
      </ul>
    </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    navbars: [
      {names: 'overview', router: '/Overview', id: 1},
      {names: 'activity log', router: '/ActivityLog', id: 2},
      {names: 'members', router: '/Members', id: 3},
      {names: 'accesses', router: '/Accesses', id: 4},
      {names: 'Tasks', router: '/Tasks', id: 5},
      {names: 'assets', router: '/Assets', id: 6},
      {names: 'Meetings', router: '/TaskTransitionsMettings', id: 7},
    ]
  })
}
</script>

<style scoped lang="scss">
.app{
  background-color: #F5F5F6;
  width: 100%;
}
.navigation{
}
.title{
  font-weight: 600;
  text-align: left;
  width: 80%;
  span{
    color: #6d32a5;
  }
}
.navbar{
  color: black;
  font-weight: 600;
  font-size: 40px;
  width: 80%;
  text-align: left;
}
.Toolbar{
  display: flex;
  width: 80%;
}

.menu{
  width: 80%;
  height: 80px;
  border-radius: 45px;
  background-color: white;
  padding: 0 15px;
  ul{
    display: flex;
    margin-top: 33px;
    li{
      list-style-type: none;
      a{
        color: black;
        font-weight: 600;
        text-decoration: none;
        font-size: 14px;
        &.router-link-exact-active {
          background-color: #2B0F4D;
          padding: 10px 10px;
          border-radius: 25px;
          color: white;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
