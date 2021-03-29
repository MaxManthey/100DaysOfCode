<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
//input of artist name and song name
// use api https://rapidapi.com/PlanetTeamSpeak/api/mourits-lyrics?endpoint=apiendpoint_c921a5fd-0109-44a3-ba8e-e8b30a1d3304
// use nice style
// maybe some gradient

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
