import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  waitingForPlayers: true
};

export default new Vuex.Store({
  state
  // getters,
  // mutations,
  // actions
});
