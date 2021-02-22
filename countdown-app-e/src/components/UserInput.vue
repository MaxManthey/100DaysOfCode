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
      console.log("aloha", this.userInput, " type ", typeof this.userInput);
      this.$store.dispatch("setChosenTimeState", {
        timeState: this.inputType,
        input: parseInt(this.userInput),
      });
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
