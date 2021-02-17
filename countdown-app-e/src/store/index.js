import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    steps: 0
  },
  mutations: {
    incrementSteps(state) {
      console.log("Moin")
      state.steps += 1
    },
    decrementSteps(state) {
      state.steps -= 1
    }
  },
  actions: {
    incrementSteps(context) {
      console.log("Moinsen")
      context.commit('incrementSteps')
    },
    decrementSteps(context) {
      console.log("Moin")
      context.commit('decrementSteps')
    }
  },
  modules: {
  }
})
