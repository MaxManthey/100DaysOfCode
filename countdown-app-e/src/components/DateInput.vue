<template>
  <div>
    <card />
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: { Card },
};
// DevPlan:
// - make card component slot
// - add cards for day, hour, minute, second (all dropdown except for days)
// - save input on buttonclick in store
// - make buttons on bottom to track state (not in card)
//     - when next button is clicked go to next state (show cards accordingly)
//     - when next button is clicked after seconds go to new window that shows countdown
//     - have back button when state > days
// - when input finished go to page that shows countdown
</script>

<style lang="scss" scoped></style>
