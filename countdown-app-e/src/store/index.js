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
      state.days = parseInt(input)
    }, 
    setHours(state, input) {
      state.hours = parseInt(input)
    },
    setMinutes(state, input) {
      state.minutes = parseInt(input)
    },
    setSeconds(state, input) {
      state.seconds = parseInt(input)
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
        console.log("moin setChosenTimeState d", input)
        context.commit('setDays', input)
      } else if(timeState === "hours") {
        console.log("moin setChosenTimeState h")
        context.commit('setHours', input)
      } else if (timeState === "minutes") {
        console.log("moin setChosenTimeState min")
        context.commit('setMinutes', input)
      } else {
        console.log("moin setChosenTimeState sec")
        context.commit('setSeconds', input)
      }
    },
    currentDate() {
      return new Date();
    }
  },
  modules: {
  }
})
