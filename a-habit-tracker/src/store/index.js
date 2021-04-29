import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activities: [
      {
        name: "meditate",
        startDate: "123BC",
        missedDays: [1, 2, 3, 4]
      },
      {
        name: "read 1 chapter",
        startDate: "123AD",
        missedDays: [1, 4]
      },
      {
        name: "work out",
        startDate: "23454",
        missedDays: [1, 2, 4]
      }
    ]
  },
  mutations: {
    addActivity(state, payload) {
      state.activities.push(payload)
    }
  },
  actions: {
    addActivity(context, payload) {
      const newActivity = {
        name: payload,
        startDate: "today",
        missedDays: []
      }
      context.commit("addActivity", newActivity)
    }
  },
  modules: {
  }
})
