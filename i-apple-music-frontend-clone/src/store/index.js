import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showBurger: false,
    playlists: [
      {
        title: "Max PL",
        songs: [
          {
            song: "Someone new",
            artist: "Hozier"
          },
          {
            song: "Valerie",
            artist: "Amy Winehouse"
          },
          {
            song: "Hills Have Eyes",
            artist: "POORSTACY"
          },
        ]
      },
      {
        title: "Fav Alternative",
        songs: [
          {
            song: "Shake it out",
            artist: "Hozier"
          },
          {
            song: "Video Games",
            artist: "Lana Del Rey"
          },
          {
            song: "Cigarette Daydreams",
            artist: "Cage the Elephant"
          },
          {
            song: "Breezeblocks",
            artist: "alt-J"
          },
        ]
      },
      {
        title: "Lil Peep stuff",
        songs: [
          {
            song: "Star Shopping",
            artist: "Lil Peep"
          },
          {
            song: "Awful Things",
            artist: "Lil Peep"
          },
          {
            song: "I've been waiting",
            artist: "Lil Peep & iLoveMakonnen"
          },
        ]
      }
    ],
    selectedPlaylist: "Max PL"
  },
  mutations: {
    changeBurgerState(state) {
      state.showBurger = !state.showBurger
    },
    addPlaylist(state, playlist) {
      state.playlists.push(playlist)
    },
    selectedPlaylist(state, playlist) {
      state.selectedPlaylist = playlist
    },
  },
  actions: {
    changeBurgerState(context) {
      context.commit("changeBurgerState")
    },
    addPlaylist(context, playlist) {
      context.commit("addPlaylist", playlist)
    },
    selectedPlaylist(context, playlist) {
      context.commit("selectedPlaylist", playlist)
    }
  },
  modules: {
  }
})
