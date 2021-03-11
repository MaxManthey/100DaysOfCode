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