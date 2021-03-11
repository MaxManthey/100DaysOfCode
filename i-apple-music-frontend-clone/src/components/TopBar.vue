<template>
<card-wrapper>
        <div class="wrapper">        
        <burger-menu />
        <div class="is-size-5"><b>MaxMusic</b></div>        
        <account />
        </div>
</card-wrapper>
</template>

<script>
import Account from './Account.vue'
import BurgerMenu from './BurgerMenu.vue'
import CardWrapper from './CardWrapper.vue'
import MusicPlayer from './MusicPlayer.vue'
export default {
  components: { MusicPlayer, Account, CardWrapper, BurgerMenu },
        
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
}
</style>