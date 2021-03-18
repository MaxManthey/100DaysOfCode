<template>
  <div class="home">
    <main-screen />
  </div>
</template>

<script>
import MainScreen from '../components/MainScreen.vue'
export default {
  name: 'Home',
  components: {
    MainScreen
  }
}
</script>
<style lang="scss">
a {
  color: #0C0C0C;
}
a:visited {
  color: #0C0C0C;
}
</style>