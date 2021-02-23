import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    steps: 0,
    days: 1,
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
      console.log("dayzzz ", input , " type: ", typeof input)
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
    setChosenTimeState(context, {timeState, input}) {
      console.log('input in action: ', input)
      console.log('timeState in action: ', timeState)
      if(input !== undefined) {
        if(timeState === "days") {
          console.log("moin setChosenTimeState d ", input)
          context.commit('setDays', input)
        } else if(timeState === "hours") {
          console.log("moin setChosenTimeState h ", input)
          context.commit('setHours', input)
        } else if (timeState === "minutes") {
          console.log("moin setChosenTimeState min ", input)
          context.commit('setMinutes', input)
        } else {
          console.log("moin setChosenTimeState sec ", input)
          context.commit('setSeconds', input)
        }
      }  
    },
    currentDate() {
      return new Date();
    }
  },
  modules: {
  }
})
