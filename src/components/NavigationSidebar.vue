<template>
  <div class="app">
    <div id="nav">
      <header
          class="header"
          :class="{ fullSize : isFullSize }"
          role="banner">

        <div class="logo">
          <router-link to="/" class="ss">
              <span>
                <img src="@/assets/Logo.svg"
                     alt=""
                     @click="isFullSize = !isFullSize">
              </span>
            <transition
                name="fade"
                mode="out-in">
              <span
                  v-if="isFullSize"
                  :class="{ Show : isShow }"
                  class="pagetitle">TransitPru
              </span>
            </transition>
          </router-link>
        </div>

        <div class="nav-wrap">
          <nav class="main-nav" role="navigation">
            <ul class="list-hover-slide">
              <router-link to="/">
                <li>
                  <img src="../assets/images/house.svg" alt=""/>
                  <span v-if="isFullSize" :class="{ Show : isShow }" >Dashboard</span>
                </li>
              </router-link>
              <router-link to="/Refresh">
                <li>
                  <img src="../assets/images/refresh.svg" alt="">
                  <span v-if="isFullSize" :class="{ Show : isShow }" >Transitions</span>
                </li>
              </router-link>
              <router-link to="/help">
                <li>
                  <img src="../assets/images/help.svg" alt="">
                  <span v-if="isFullSize" :class="{ Show : isShow }" >Support</span>
                </li>
              </router-link>
            </ul>
          </nav>
          <div class="NewTransition">
            <router-link to="/AddingNewTransition">
              <button></button>
            </router-link>
          </div>
        </div>

      </header>
      <div class="account_notify">
        <div class="main_notification">
          <a href="" class="notification">
            <img src="../assets/images/ring.svg" alt="" />
          </a>
          <router-link to="/Profile">
            <img src="../assets/images/Person-Curtis.jpg" alt="" class="profile_img">
          </router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>




<script>
export default {
  name: 'NavigationSidebar',
  data: () => ({
    isFullSize: false,
    isShow: false,
  })
}
</script>



<style  lang="scss">
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
    transition: all 0.1s ease;
    &.router-link-exact-active {
      filter: brightness(0) saturate(100%) invert(72%) sepia(50%) saturate(551%) hue-rotate(139deg) brightness(85%) contrast(87%);
      border-right: 6px solid #43bccd;
    }
  }
}
// FONTS
$sans: 'Source Sans Pro', Helvetica, Arial, sans-serif;

// COLORS
$orange: #DF4500;
$gray: #35302D;
$gray-shine: #3C3735;
$white-off: #DFDBD9;


// HEADER STYLES
.header{
  width: 96px;
  transition: 0.2s;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background: #05081D 0 0 no-repeat padding-box;
  opacity: 1;
  .ss{
    border: none !important;
    filter: none !important;
    display: flex;
  }
}
.fullSize {
  width: 185px;
  transition: 0.2s;
  transform: translateX(-10px);
}
.logo{
  padding: 0; margin: 0;

  a{
    display: block;
    padding: 1em 0;
    color: $white-off;
    text-decoration: none;

    &:hover{
      color: #fff;
    }
  }
  span{
    font-weight: 700;
    transition: .15s linear color;
  }
  .pagetitle{
    color: white;
    position: relative;
    top: 8px;
    right: 60px;
    font-size: 20px;
}
  img{
  margin-left: 15px;
  margin-right: 70px;
  padding-left: 10px;
  }
}
// MAIN NAV
.main-nav{
  ul{
    li{
      margin: 75px 0 75px 25px;
      padding: 25px 120px 25px 15px;
      display: flex;
      align-items: center;
    }
  }
}

  .nav-wrap{
  position: relative;
  top: 15%;
  }

  .account_notify{
      width: 80%;
      padding-top: 2%;
      background-color: #f5f5f6;
    .main_notification{
      display: flex;
      align-items: center;
      margin-left: 90%;

      a{
      border: none !important;
      filter: none !important;
      }
    }
    .profile_img{
      width: 66px;
      height: 66px;
      border-radius: 50%;
    }
  }

  .NewTransition{
    position: relative;
    top: 110px;
    button{
      width: 55px;
      height: 55px;
      cursor: pointer;
      border: none;
      background: none;
      border-radius: 50%;
      background-image: url("../assets/images/NewTransation.svg");
    }
    a{
      border: none !important;
      filter: none !important;
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
text-decoration: none;
}
span{
  color: white;
  font-weight: 600;
  font-size: 15px;
  margin-left: 15px;
  }
}
</style>
