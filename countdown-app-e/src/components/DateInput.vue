<template>
  <div class="card-wrapper">
    <card :inputType="getInputOption()" />
  </div>
</template>

<script>
import Card from "./Card.vue";
import { mapState } from "vuex";
export default {
  components: { Card },
  data() {
    return {
      cardOption: ["day", "hour", "minute", "second"],
    };
  },
  computed: {
    ...mapState(["steps"]),
  },
  methods: {
    getInputOption() {
      return this.cardOption[this.$store.state.steps];
    },
  },
};
// DevPlan:
// ✅ make card component prop
// - add cards for day, hour, minute, second (all dropdown except for days)
// - save input on buttonclick in store
// ✅ make buttons on bottom to track state (not in card)
//     ✅ when next button is clicked go to next state (show cards accordingly)
//     ✅ when next button is clicked after seconds go to new window that shows countdown
//     ✅ have back button when state > days
// - when input finished go to page that shows countdown
</script>

<style lang="scss" scoped></style>
