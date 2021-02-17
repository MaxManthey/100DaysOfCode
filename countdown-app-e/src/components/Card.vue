<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <span v-if="inputType === 'day'">
          Please select amount of days
        </span>
        <span v-else-if="inputType === 'hour'">
          Please select amount of hours
          <dropdown />
        </span>
        <span v-else-if="inputType === 'minute'">
          Please select amount of minutes
        </span>
        <span v-else-if="inputType === 'second'">
          Please select amount of seconds
        </span>
        <span v-else>ERROR {{ inputType }}</span>
        <div>
          <span class="btn">
            <b-button
              v-if="getSteps() > 0"
              type="is-danger"
              outlined
              @click="decreaseStep()"
            >
              Back
            </b-button>
            <b-button v-else disabled>
              Back
            </b-button>
          </span>
          <span class="btn">
            <b-button
              v-if="getSteps() < 3"
              type="is-success"
              @click="increaseStep()"
            >
              Next
            </b-button>
            <b-button v-else type="is-success">
              <router-link to="/about">About</router-link>
            </b-button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Dropdown from "./Dropdown.vue";

export default {
  components: { Dropdown },
  props: {
    inputType: String,
  },
  computed: {
    ...mapState(["steps"]),
  },
  methods: {
    getMinutesSeconds() {
      return Array.from(Array(60).keys());
    },
    getHours() {
      return Array.from(Array(24).keys());
    },
    getSteps() {
      return this.$store.state.steps;
    },
    increaseStep() {
      this.$store.dispatch("incrementSteps");
    },
    decreaseStep() {
      this.$store.dispatch("decrementSteps");
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 50%;
  height: 50%;
  margin: 0 auto;
  overflow: hidden;
}
.btn {
  padding: 10%;
  margin-top: 100%;
}
</style>
