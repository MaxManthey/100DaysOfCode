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
            song: "Mr. Brightside",
            artist: "The Killers"
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
            song: "Holding On",
            artist: "Iann Dior"
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
            artist: "Lil Peep"
          },
        ]
      }
    ],
    selectedPlaylist: "Fav Alternative"
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
