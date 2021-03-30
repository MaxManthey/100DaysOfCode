<template>
  <div class="home">
    <main-screen />
  </div>
</template>

<script>
// @ is an alias to /src
import MainScreen from '../components/MainScreen.vue';
//input of artist name and song name
// use api https://rapidapi.com/PlanetTeamSpeak/api/mourits-lyrics?endpoint=apiendpoint_c921a5fd-0109-44a3-ba8e-e8b30a1d3304
// use nice style
// maybe some gradient

export default {
  name: "Home",
  components: {
    MainScreen,
  },
};
</script>
<style lang="scss" scoped>

</style>