<template>
  <div class="home">
    <weather />
  </div>
</template>

<script>
import Weather from "../components/Weather.vue";

export default {
  name: "Home",
  components: {
    Weather,
  },
};
</script>
