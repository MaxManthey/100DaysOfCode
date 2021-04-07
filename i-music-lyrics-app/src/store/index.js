import Vue from 'vue'
import Vuex from 'vuex'
import lyricsFinder from 'lyrics-finder';

Vue.use(Vuex)
Vue.use(lyricsFinder)


export default new Vuex.Store({
  state: {
    lyrics: "",
    song: "",
    artist: ""
  },
  mutations: {
    updateLyrics(state, payload) {
      state.lyrics = payload.lyrics;
      state.song = payload.song;
      state.artist = payload.artist;
    }
  },
  actions: {
    async updateLyrics(context, payload) {
      let lyrics = await lyricsFinder(payload.artist, payload.song) || "nf";
      payload.lyrics = lyrics
      context.commit("updateLyrics", payload)
    }
  },
  modules: {
  }
})
