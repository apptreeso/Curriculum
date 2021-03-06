import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    flagEnd: "none", // true, false, none
    flagEightSeconds: false,
    flagThreeSecods: false,
    flagSkip: false,
    frustrationLevel: 0,
    flagMute: false
  },
  mutations: {
    setFlagEnd(state, payload) {
      state.flagEnd = payload;
    },
    setFlagEightSeconds(state, payload) {
      state.flagEightSeconds = payload;
    },
    setFlagThreeSeconds(state, payload) {
      state.flagThreeSecods = payload;
    },
    setFlagSkip(state, payload) {
      state.flagSkip = payload;
    },
    setFrustrationLevel(state, payload) {
      state.frustrationLevel = payload;
    },
    setFlagMute(state, payload) {
      state.flagMute = payload;
    }
  },
  actions: {
    setFlagEndAction({ commit }, payload) {
      commit("setFlagEnd", payload);
    },
    setFlagEightSecondsAction({ commit }, payload) {
      commit("setFlagEightSeconds", payload);
    },
    setFlagThreeSecondsAction({ commit }, payload) {
      commit("setFlagThreeSeconds", payload);
    },
    setFlagSkipAction({ commit }, payload) {
      commit("setFlagSkip", payload);
    },
    setFrustrationLevelAction({ commit }, payload) {
      commit("setFrustrationLevel", payload);
    },
    setFlagMuteAction({ commit }, payload) {
      commit("setFlagMute", payload);
    }
  },
  getters: {
    getFlagEnd(state) {
      return state.flagEnd;
    },
    getFlagEightSeconds(state) {
      return state.flagEightSeconds;
    },
    getFlagThreeSeconds(state) {
      return state.flagThreeSeconds;
    },
    getFlagSkip(state) {
      return state.flagSkip;
    },
    getFrustrationLevel(state) {
      return state.frustrationLevel;
    },
    getFlagMute(state) {
      return state.flagMute;
    }
  }
});
