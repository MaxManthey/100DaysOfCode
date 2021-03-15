import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showBurger: false,
    playlists: [
      {
        title: "Max PL",
        songs: []
      },
      {
        title: "Fav Alternative",
        songs: []
      },
      {
        title: "Lil Peep stuff",
        songs: []
      }
    ]
  },
  mutations: {
    changeBurgerState(state) {
      state.showBurger = !state.showBurger
    },
    addPlaylist(state, playlist) {
      state.playlists.push(playlist)
    }
  },
  actions: {
    changeBurgerState(context) {
      context.commit("changeBurgerState")
    },
    addPlaylist(context, playlist) {
      context.commit("addPlaylist", playlist)
    }
  },
  modules: {
  }
})
