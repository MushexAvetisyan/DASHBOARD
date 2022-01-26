<template>
  <div id="app">
    <div id="nav">
      <header class="header" role="banner">
        <h1 class="logo">
          <a href="#"><span><img src="@/assets/Logo.svg" alt=""></span></a>
        </h1>
        <div class="nav-wrap">
          <nav class="main-nav" role="navigation">
            <ul class="unstyled list-hover-slide">
              <li><a href="#" class="house"><router-link to="/">.</router-link></a></li>
              <li><a href="#" class="refresh"><router-link to="/Refresh">.</router-link></a></li>
              <li><a href="#" class="help"><router-link to="/Help">.</router-link></a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Home from "@/views/Home";
export default {
  data: () => ({

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
  a {
    font-weight: bold;
    color: #2c3e50;


    &.router-link-exact-active {
      color: #42b983;
      display: none;
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
  .house{
    background: transparent url("assets/images/house.svg") 0 0 no-repeat padding-box;
    width: 22px;
    height: 20px;
  }
  .help{
    background: transparent url("assets/images/help.svg") 0 0 no-repeat padding-box;
    width: 22px;
    height: 20px;
  }
  .refresh{
    background: transparent url("assets/images/refresh.svg") 0 0 no-repeat padding-box;
    width: 22px;
    height: 20px;
  }
  ul{
    li{
      margin: 75px 0 75px 0;
      padding: 30%;
      &:hover{
        border-right: 4px solid #43bccd;
        cursor: pointer;
      }
    }
  }
}

.nav-wrap{
  position: relative;
  top: 10%;
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
