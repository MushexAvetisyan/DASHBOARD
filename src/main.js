import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueApexCharts from "vue-apexcharts";
import Vuex from "vuex";
import vSelect from "vue-select";
import Antd from "ant-design-vue";
import * as VueSpinnersCss from "vue-spinners-css";


Vue.use(VueSpinnersCss)
Vue.use(Antd);
Vue.component("v-select", vSelect);
Vue.use(VueApexCharts);
Vue.use(Vuex);
library.add(faUserSecret);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("apexchart", VueApexCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
