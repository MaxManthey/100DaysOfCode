<template>
    <div class="wrapper">
        <div class="pl-3">Burger</div>
        <div class="is-size-5">MaxMusic</div>
        <div class="pr-3">Account</div>
    </div>
</template>

<script>
import MusicPlayer from './MusicPlayer.vue'
    export default {
  components: { MusicPlayer },
        
    }
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
}
</style>