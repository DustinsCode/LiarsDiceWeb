import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import * as firebase from "firebase";
import { firebaseConfig } from "./config";
import { createNamespacedHelpers } from 'vuex';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App),
  created () {
   firebase.initializeApp(firebaseConfig)
  }
}).$mount("#app");
