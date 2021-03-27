<template>
  <div class="top-wrapper">
    <burger-menu />
    <div class="is-size-5"><b>MaxMusic</b></div>
    <account />
  </div>
</template>

<script>
import Account from "./Account.vue";
import BurgerMenu from "./BurgerMenu.vue";
// import CardWrapper from './CardWrapper.vue'
import MusicPlayer from "./MusicPlayer.vue";
export default {
  components: { MusicPlayer, Account, BurgerMenu },
};
</script>

<style lang="scss" scoped>
.top-wrapper {
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 2% 4%;
}
</style>
