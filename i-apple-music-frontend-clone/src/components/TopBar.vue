<template>
<card-wrapper>
        <div class="wrapper">
        <div class="pl-3">Burger</div>
        <div class="is-size-5"><b>MaxMusic</b></div>
        <div class="pr-3">
          <account />
        </div>
        </div>
</card-wrapper>
</template>

<script>
import Account from './Account.vue'
import CardWrapper from './CardWrapper.vue'
import MusicPlayer from './MusicPlayer.vue'
    export default {
  components: { MusicPlayer, Account, CardWrapper },
        
    }
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
}
</style>