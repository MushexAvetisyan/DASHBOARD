<template>
  <div class="app">
    <div class="TaskHeader">
      <PageNavigation />
    </div>

    <p>mushex</p>
    <router-view />
  </div>
</template>



<script>
import PageNavigation from "@/components/TaskTransitionMettingsComponents/PageNavigation";
export default {
  components: {
    PageNavigation,
  },
  data: () => ({}),
};
</script>

<style scoped lang="scss"></style>
