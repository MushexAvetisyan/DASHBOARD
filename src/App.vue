<template>
  <div id="app">
    <div id="nav">
      <header class="header" role="banner" v-bind:class="active" v-on:click.prevent>
        <h1 class="logo">
          <router-link to="/">
            <span><img src="@/assets/Logo.svg" alt=""></span>
          </router-link>
        </h1>
        <div class="nav-wrap">
          <nav class="main-nav" role="navigation">
            <ul class="unstyled list-hover-slide">
              <router-link to="/"><li><img src="./assets/images/house.svg" alt=""/></li></router-link>
              <router-link to="/Refresh"><li><img src="./assets/images/refresh.svg" alt=""></li></router-link>
              <router-link to="/help"><li><img src="./assets/images/help.svg" alt=""></li></router-link>
            </ul>
          </nav>
        </div>
      </header>
      <div class="account_notify">
        <div class="main_notification">
          <a href="" class="notification">
            <img src="./assets/images/ring.svg" alt="" />
          </a>
          <router-link to="/Profile">
            <img src="./assets/images/Person-Curtis.jpg" alt="" class="profile_img">
          </router-link>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Home from "@/views/Home";
export default {
  data: () => ({
    nav_item: {

    }
  }),
  components: {
    Home,
  }
}
</script>

<style lang="scss">
*{
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background: #f5f5f6;
  a {
    font-weight: bold;
    color: #2c3e50;


    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
*, :before, :after{ box-sizing: border-box; }
// FONTS
$sans: 'Source Sans Pro', Helvetica, Arial, sans-serif;

// COLORS
$orange: #DF4500;
$gray: #35302D;
$gray-shine: #3C3735;
$white-off: #DFDBD9;

// REUSABLE STYLES
.unstyled{ list-style: none; padding: 0; margin: 0;
  a{ text-decoration: none; }
}
.list-inline{ overflow: hidden;
  li{ float: left; }
}

// HEADER STYLES
.header{
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 95px;
  background: #05081D 0 0 no-repeat padding-box;
  opacity: 1;
}

.logo{
  text-transform: lowercase;
  font: 300 2em $sans;
  text-align: center;
  padding: 0; margin: 0;

  a{
    display: block;
    padding: 1em 0;
    color: $white-off;
    text-decoration: none;
    transition: .15s linear color;

    &:hover{
      color: #fff;
      span{ color: $orange; }
    }
  }

  span{
    font-weight: 700;
    transition: .15s linear color;
  }
}

// MAIN NAV
.main-nav{

  ul{
    li{
      margin: 75px 0 75px 0;
      padding: 30%;
      &:hover{
        border-right: 5px solid #43bccd;
        cursor: pointer;
      }
      img{
        filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(213deg) brightness(105%) contrast(103%);
      }
    }
  }
}

.nav-wrap{
  position: relative;
  top: 10%;
}

.account_notify{
  //text-align: right;
  width: 80%;
  padding-top: 2%;
  background-color: #f5f5f6;
  .main_notification{
    display: flex;
    align-items: center;
    margin-left: 90%;
  }
  .profile_img{
    width: 66px;
    height: 66px;
    border-radius: 50%;
  }
}


// HOVER SLIDE EFFECT
.list-hover-slide{
  li{
    position: relative;
    overflow: hidden;
  }

  a{
    display: block;
    position: relative;
    z-index: 1;
    transition: .35s ease color;
  }
}
</style>
