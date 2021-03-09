<template>
    <div>
        <top-bar class="top-bar"/>
        <main-content class="main-content"/>
        <music-player class="music-player"/>
    </div>
</template>

<script>
import MainContent from './MainContent.vue'
import MusicPlayer from './MusicPlayer.vue'
import TopBar from './TopBar.vue'
export default {
  components: { TopBar, MainContent, MusicPlayer },
}
</script>

<style lang="scss" scoped>
.top-bar {
    background-color: burlywood;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    padding: 3% 0px;
}
.music-player {
    background-color: greenyellow;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 3% 0px
}
.main-content {
    background-color: white
}
</style>