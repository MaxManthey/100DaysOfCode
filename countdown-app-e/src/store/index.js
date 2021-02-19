import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    steps: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  },
  mutations: {
    incrementSteps(state) {
      state.steps += 1
    },
    decrementSteps(state) {
      state.steps -= 1
    },
    setDays(state, input) {
      state.days = input
    }, 
    setHours(state, input) {
      state.hours = input
    },
    setMinutes(state, input) {
      state.minutes = input
    },
    setSeconds(state, input) {
      state.seconds = input
    }
  },
  actions: {
    incrementSteps(context) {
      context.commit('incrementSteps')
    },
    decrementSteps(context) {
      context.commit('decrementSteps')
    },
    setChosenTimeState(context, timeState, input) {
      if(timeState === "days") {
        console.log("moin")
        context.commit('setDays')
      } else if(timeState === "hours") {
        console.log("moin")
        context.commit('setHours')
      } else if (timeState === "minutes") {
        console.log("moin")
        context.commit('setMinutes')
      } else {
        console.log("moin")
        context.commit('setSeconds')
      }
    }
  },
  modules: {
  }
})
