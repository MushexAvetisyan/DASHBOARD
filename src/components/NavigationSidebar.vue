<template>
  <div class="app">
    <div id="nav">
      <header :class="{ fullSize: isFullSize }" class="header" role="banner">
        <div class="logo">
          <span class="ss" >
            <span>
              <img
                alt=""
                src="@/assets/Logo.svg"
                @click="isFullSize = !isFullSize"
              />
            </span>
            <transition mode="out-in" name="fade">
              <span
                v-if="isFullSize"
                :class="{ Show: isShow }"
                class="pagetitle"
                >TransitPru
              </span>
            </transition>
          </span>
        </div>

        <div class="nav-wrap">
          <nav class="main-nav" role="navigation">
            <ul class="list-hover-slide">
              <router-link to="/Registration">
                <li>
                  <img width="30px" style="filter: grayscale(100%)" height="30px" alt="" src="../assets/images/Creator.svg" />
                  <span v-if="isFullSize" :class="{ Show: isShow }"
                  >Registration</span
                  >
                </li>
              </router-link>
              <router-link to="/">
                <li>
                  <img alt="" src="../assets/images/house.svg" />
                  <span v-if="isFullSize" :class="{ Show: isShow }"
                  >Home</span
                  >
                </li>
              </router-link>
              <router-link to="/Home">
                <li>
                  <img alt="" src="../assets/images/house.svg" />
                  <span v-if="isFullSize" :class="{ Show: isShow }"
                    >Dashboard</span
                  >
                </li>
              </router-link>
              <router-link to="/Refresh">
                <li>
                  <img alt="" src="../assets/images/refresh.svg" />
                  <span v-if="isFullSize" :class="{ Show: isShow }"
                    >Transitions</span
                  >
                </li>
              </router-link>
              <router-link to="/help">
                <li>
                  <img alt="" src="../assets/images/help.svg" />
                  <span v-if="isFullSize" :class="{ Show: isShow }"
                    >Support</span
                  >
                </li>
              </router-link>
            </ul>
          </nav>
          <div class="NewTransition">
            <router-link to="/AddNewTransition">
              <button></button>
            </router-link>
          </div>
        </div>
      </header>
      <div class="account_notify">
        <div class="main_notification">
          <a class="notification" href="">
            <img alt="" src="../assets/images/ring.svg" />
          </a>
          <router-link to="/Profile">
            <img
              alt=""
              class="profile_img"
              src="../assets/images/Person-Curtis.jpg"
            />
          </router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "NavigationSidebar",
  data: () => ({
    isFullSize: false,
    isShow: false,
  }),
};
</script>

<style lang="scss">
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
      filter: brightness(0) saturate(100%) invert(72%) sepia(50%) saturate(551%)
        hue-rotate(139deg) brightness(85%) contrast(87%);
      border-right: 6px solid #43bccd;
    }
  }
}

// FONTS
$sans: "Source Sans Pro", Helvetica, Arial, sans-serif;

// COLORS
$orange: #df4500;
$gray: #35302d;
$gray-shine: #3c3735;
$white-off: #dfdbd9;

// HEADER STYLES
.header {
  width: 96px;
  transition: 0.2s;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background: #05081d 0 0 no-repeat padding-box;
  opacity: 1;

  .ss {
    border: none !important;
    filter: none !important;
    display: flex;
    cursor: pointer;
    margin-top: 15px;
  }
}

.fullSize {
  width: 185px;
  transition: 0.2s;
  transform: translateX(-10px);
}

.logo {
  padding: 0;
  margin: 0;

  a {
    display: block;
    padding: 1em 0;
    color: $white-off;
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }

  span {
    font-weight: 700;
    transition: 0.15s linear color;
  }

  .pagetitle {
    color: white;
    position: relative;
    top: 8px;
    right: 60px;
    font-size: 20px;
  }

  img {
    margin-left: 15px;
    margin-right: 70px;
    padding-left: 10px;
  }
}

// MAIN NAV
.main-nav {
  ul {
    li {
      margin: 75px 0 75px 25px;
      padding: 25px 120px 25px 11px;
      display: flex;
      align-items: center;
    }
  }
}

.nav-wrap {
  position: relative;
}

.account_notify {
  width: 80%;
  padding-top: 2%;
  background-color: #f5f5f6;

  .main_notification {
    display: flex;
    align-items: center;
    margin-left: 90%;

    a {
      border: none !important;
      filter: none !important;
    }
  }

  .profile_img {
    width: 66px;
    height: 66px;
    border-radius: 50%;
  }
}

.NewTransition {
  button {
    width: 55px;
    height: 55px;
    cursor: pointer;
    border: none;
    background: none;
    border-radius: 50%;
    background-image: url("../assets/images/NewTransation.svg");
  }

  a {
    border: none !important;
    filter: none !important;
  }
}

// HOVER SLIDE EFFECT
.list-hover-slide {
  li {
    position: relative;
    overflow: hidden;
  }

  a {
    display: block;
    position: relative;
    z-index: 1;
    transition: 0.35s ease color;
    text-decoration: none;
  }

  span {
    color: white;
    font-weight: 600;
    font-size: 15px;
    margin-left: 15px;
  }
}
</style>
