<template>
  <div>
    <div v-if="showPlayer()">
      <div class="top-bar-buffer">
        <top-bar />
      </div>
      <div class="top-bar">
        <top-bar />
      </div>
      <user-playlist />
      <music-player class="music-player" />
    </div>
    <div v-else>
      <top-bar class="p-5" />
      <playlists />
    </div>
  </div>
</template>

<script>
import UserPlaylist from "../components/UserPlaylist.vue";
import MusicPlayer from "../components/MusicPlayer.vue";
import CardWrapper from "../components/CardWrapper.vue";
import TopBar from "../components/TopBar.vue";
import Playlists from "../components/Playlists.vue";
import { mapState } from "vuex";
export default {
  components: { UserPlaylist, TopBar, MusicPlayer, Playlists, CardWrapper },
  computed: {
    ...mapState(["showBurger"]),
  },
  methods: {
    showPlayer() {
      return !this.$store.state.showBurger;
    },
  },
};
</script>

<style lang="scss" scoped>
.top-bar {
  // background-color: #f7f7f7;
  position: fixed;
  // padding: 5%;
  left: 0;
  top: 0;
  width: 100%;
  height: 5%;
}
.top-bar-buffer {
  height: 5%;
}
.music-player {
  // background-color: #f7f7f7;
  position: fixed;
  left: 1%;
  right: 0;
  bottom: 1%;
  width: 98%;
}
</style>
