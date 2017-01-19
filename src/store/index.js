import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    getlist (state) {
      console.log(state);
      state.count = 100;
      console.log(state.count);
    }
  },
  actions: {
    getlist (context) {
      context.commit('getlist')
    }   
  }
})

