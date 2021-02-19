<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <span v-if="inputType === 'day'">
          Please input amount of days
          <user-input inputType="days" />
        </span>
        <span v-else-if="inputType === 'hour'">
          Please input amount of hours
          <user-input />
        </span>
        <span v-else-if="inputType === 'minute'">
          Please input amount of minutes
          <user-input />
        </span>
        <span v-else-if="inputType === 'second'">
          Please input amount of seconds
          <user-input />
        </span>
        <span v-else>ERROR {{ inputType }}</span>
        <div class="btn-wrapper">
          <span class="back-btn">
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
          <span class="next-btn">
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
import UserInput from "./UserInput.vue";

export default {
  components: { UserInput },
  props: {
    inputType: String,
  },
  computed: {
    ...mapState(["steps"]),
  },
  methods: {
    getSteps() {
      return this.$store.state.steps;
    },
    increaseStep() {
      console.log(this.inputType);
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
  margin: 0 auto;
  overflow: hidden;
}
.btn-wrapper {
  margin-top: 5%;
}
.back-btn {
  padding-left: 0%;
  padding-right: 10%;
}
.next-btn {
  padding-left: 10%;
  padding-right: 0%;
}
</style>
