<template>
  <div id="app">
    <NavigationSidebar />
  </div>
</template>

<script>
import NavigationSidebar from "./components/NavigationSidebar.vue";
export default {
  components: {
    NavigationSidebar,
  },
  name: "App",
  data: () => ({}),
};
</script>

<style lang="scss">
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  font-family: CircularFontFamily;
  @font-face {
    font-family: "CircularFontFamily";
    src: local("CircularFontFamily"),
      url("./fonts/CircularFontFamily/Gilroy-Regular.ttf");
  }
}
p {
  margin-bottom: 0;
}
</style>
