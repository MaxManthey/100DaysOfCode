<template>
    <div>
        <div v-if="showOptions()">
            <div class="top-bar-buffer">
                <top-bar />
            </div>
            <div class="top-bar">
                <top-bar/>
            </div>
            <main-content class="main-content"/>
            <music-player class="music-player"/>
        </div>
        <div v-else>
            <top-bar class="p-5"/>
            <playlists />
        </div>
    </div>
</template>

<script>
import MainContent from './MainContent.vue'
import MusicPlayer from './MusicPlayer.vue'
import CardWrapper from './CardWrapper.vue'
import TopBar from './TopBar.vue'
import { mapState } from 'vuex';
import Playlists from './Playlists.vue';
export default {
  components: { TopBar, MainContent, MusicPlayer, Playlists, CardWrapper },
  computed: {
        ...mapState([
            'showBurger',
        ])
  },
  methods: {
      showOptions() {
          return !this.$store.state.showBurger
      }
  }
}
</script>

<style lang="scss" scoped>
.top-bar {
    // background-color: #f7f7f7;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
}
.top-bar-buffer {
    height: 5%
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