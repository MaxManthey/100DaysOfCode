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
            artist: "Hozier",
            time: "3:15"
          },
          {
            song: "Mr. Brightside",
            artist: "The Killers",
            time: "3:49"
          },
          {
            song: "Hills Have Eyes",
            artist: "POORSTACY",
            time: "2:52"
          },
        ]
      },
      {
        title: "Fav Alternative",
        songs: [
          {
            song: "Movement",
            artist: "Hozier",
            time: "3:34"
          },
          {
            song: "Holding On",
            artist: "Iann Dior",
            time: "2:59"
          },
          {
            song: "Cigarette Daydreams",
            artist: "Cage the Elephant",
            time: "4:04"
          },
          {
            song: "Breezeblocks",
            artist: "alt-J",
            time: "4:31"
          },
        ]
      },
      {
        title: "Lil Peep stuff",
        songs: [
          {
            song: "Star Shopping",
            artist: "Lil Peep",
            time: "2:34"
          },
          {
            song: "Awful Things",
            artist: "Lil Peep",
            time: "3:11"
          },
          {
            song: "I've been waiting",
            artist: "Lil Peep",
            time: "3:38"
          },
        ]
      }
    ],
    selectedPlaylist: ""
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
