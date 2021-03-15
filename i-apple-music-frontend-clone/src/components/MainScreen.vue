<template>
    <div>
        <div v-if="showPlayer()">
            <card-wrapper>
                <top-bar />
            </card-wrapper>
            <card-wrapper class="top-bar">
                <top-bar/>
            </card-wrapper>
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
      showPlayer() {
          return !this.$store.state.showBurger
      }
  }
}
</script>

<style lang="scss" scoped>
.top-bar {
    background-color: #f7f7f7;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
}
.music-player {
    background-color: #f7f7f7;
    position: fixed;
    left: 1%;
    right: 0;
    bottom: 1%;
    width: 98%;
}
.main-content {
    background-color: #f7f7f7;
}
</style>