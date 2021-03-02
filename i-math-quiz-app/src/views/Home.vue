<template>
  <div class="home">
    <game-start />
  </div>
</template>

<script>
import GameStart from "@/components/GameStart.vue";

export default {
  name: "Home",
  components: {
    GameStart,
  },
};
</script>
<style lang="scss">
.btn-container {
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.btn {
  color: black;
}
.rtr {
  color: #424242;
}
</style>
