<template>
  <div class="input-wrapper">
    <b-input :class="updateStore" v-model="userInput"></b-input>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    inputType: String,
  },
  data() {
    return {
      userInput: "",
    };
  },
  computed: {
    ...mapState(["days", "hours", "minutes", "seconds"]),
    updateStore() {
      console.log("upd", this.inputType);
      console.log("aloha", this.userInput);
      this.$store.dispatch(
        "setChosenTimeState",
        this.inputType,
        this.userInput
      );
      console.log(this.$store.state.days);
      console.log(this.$store.state.hours);
      console.log(this.$store.state.seconds);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  padding-top: 2%;
  width: 30%;
  margin: 0 auto;
  overflow: hidden;
}
</style>
