<template>
  <div class="home">
    <date-input />
  </div>
</template>

<script>
// @ is an alias to /src
import DateInput from "../components/DateInput.vue";

export default {
  name: "Home",
  components: {
    DateInput,
  },
};
</script>

<style lang="scss" scoped></style>
