import { createStore } from 'vuex'

export default createStore({
  state: {
    CurrentView: "home",
    Version: {
      selectedVersion: "1.1.0",
      array: ["1.1.0", "1.0.0"] // Newest version should be at first.
    }
  },
  mutations: {
    UpdateCurrentView(state, payload) {
      state.CurrentView = payload;
    },
    UpdateVersion(state, payload) {
      state.Version = payload;
    },
  },
  actions: {
    UpdateCurrentView({ commit }, payload) {
      commit('UpdateCurrentView', payload);
    },
    UpdateVersion({ commit }, payload) {
      commit('UpdateVersion', payload);
    }
  },
  modules: {
  }
})
