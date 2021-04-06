import Vue from 'vue'
import Vuex from 'vuex'
import lyricsFinder from 'lyrics-finder';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lyrics: ""
  },
  mutations: {
    updateLyrics(state, songLyrics) {
      state.lyrics = songLyrics;
    }
  },
  actions: {
    async updateLyrics(context, details) {
      let lyrics = await lyricsFinder("bon jovi", "livin' on a prayer") || "nf";
      console.log("lyrics: ", lyrics);
      context.commit("updateLyrics", lyrics)
    }
  },
  modules: {
  }
})
