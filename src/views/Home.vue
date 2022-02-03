<template>
  <div class="home">
    <ProgressHeader />
    <div class="line"></div>
    <TransitionConclude />
    <Transition_DueDate />
    <ChartCyrcleTime />
    <CompletionReviewRate />
    <RecentTransitions />
    <RecentTasksToReview />
    <TasksApprovalRate />
    <router-view />
  </div>
</template>


<script>
// @ is an alias to /src
import VueApexCharts from 'vue-apexcharts'
import ProgressHeader from '../components/HomePageComponents/ProgressHeader'
import TransitionConclude from '../components/HomePageComponents/TransitionConclude'
import Transition_DueDate from "../components/HomePageComponents/Transition_DueDate";
import ChartCyrcleTime from "../components/HomePageComponents/ChartCyrcleTime";
import RecentTransitions from "../components/HomePageComponents/RecentTransitions";
import RecentTasksToReview  from "../components/HomePageComponents/RecentTasksToReview";
import CompletionReviewRate from "@/components/HomePageComponents/Completion&ReviewRate";
import TasksApprovalRate from "@/components/HomePageComponents/TasksApprovalRate";

export default {
  name: 'Home',
  components: {
    VueApexCharts,
    ProgressHeader,
    TransitionConclude,
    Transition_DueDate,
    ChartCyrcleTime,
    RecentTransitions,
    RecentTasksToReview,
    CompletionReviewRate,
    TasksApprovalRate
  },

  data: () => ({

  }),

  methods: {

  },
}
</script>


<style  lang="scss">
@font-face {
  font-family: "CircularFontFamily";
  src: local("CircularFontFamily"),
  url("../fonts/CircularFontFamily/Gilroy-Regular.ttf");
}
  .home{
    background-color: #f5f5f6;
    min-height: 100vh;
  }

  .line{
    border-bottom: 2px solid #05081d;
    opacity: 0.1;
    width: 80%;
    margin-top: 25px;
    margin-bottom: 40px;
  }
</style>
