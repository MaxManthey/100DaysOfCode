<template>
    <div class="content-wrapper">
        <div class="is-size-3 has-text-weight-bold pt-5 text-wrapper">Listen Now</div>
        <hr class="break-line">
        <div class="text-wrapper has-text-weight-bold">Top Picks</div>
        <album class="album-wrapper"/>
        <hr class="break-line">
        <div class="text-wrapper has-text-weight-bold">Recently Played</div>
        <album class="album-wrapper"/>
        <hr class="break-line">
        <div class="text-wrapper has-text-weight-bold">New Releases</div>
        <album class="album-wrapper"/>
        <hr class="break-line">
        <div class="text-wrapper has-text-weight-bold">New Songs Added</div>
        <album class="album-wrapper"/>
        <hr class="break-line">
        <div class="text-wrapper has-text-weight-bold">Pop</div>
        <album class="album-wrapper"/>
        <hr class="break-line">
        <div class="text-wrapper has-text-weight-bold">Dance</div>
        <album class="album-wrapper"/>
        <hr class="break-line">
        <div class="text-wrapper has-text-weight-bold">Hip-Hop/Rap</div>
        <album class="album-wrapper"/>
        <bottom-text />
    </div>
</template>

<script>
import Album from './Album.vue'
import BottomText from './BottomText.vue'
    export default {
  components: { Album, BottomText },
        
    }
</script>

<style lang="scss" scoped>
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";
hr.break-line {
    border-top: 1px solid #d4d4d4;
    width: 90%;
    margin: 0% 5%;
}
.content-wrapper {
    text-align: left;
}

.text-wrapper {
    padding-left: 5%;
}
.album-wrapper {
    padding-left: 5%;
}
</style>