<template>
  <div>
    <h1 class="is-size-2">Subtraction</h1>
    <play-game />
    <back-button />
  </div>
</template>

<script>
import PlayGame from '../components/PlayGame.vue';
import BackButton from "../components/BackButton.vue";
export default {
  components: { BackButton, PlayGame },
};
</script>

<style lang="scss" scoped></style>
