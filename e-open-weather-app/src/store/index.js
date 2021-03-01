import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weatherData: {}
  },
  mutations: {
    updateCityData(state, data) {
      state.weatherData = data
    }
  },
  actions: {
    async updateCityData(context, city) {
      const key = "13ff8daa980a9d75c862e7f9007a1fc6";
      await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key
      )
        .then(function(resp) {
          return resp.json();
        })
        .then(function(data) {
          context.commit("updateCityData", data)
        })
        .catch(function(e) {
          console.error("ERROR ", e);
        });
    }
  },
  modules: {
  }
})
