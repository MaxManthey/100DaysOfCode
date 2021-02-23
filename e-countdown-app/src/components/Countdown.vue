<template>
  <div class="card">
    <div class="card-header">
      <div class="media-content">
        <p class="title is-4">Countdown</p>
      </div>
    </div>
    <div class="card-content">
      <div class="content">
        <div :class="currentDate()">Current time: {{ currentTime }}</div>
        <b-button @click="futureDate()">test</b-button>
        <div>Your time: {{ futureTime }}</div>
        <div>Countdown: {{ timer }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      currentTime: "",
      futureTime: "",
      timer: "",
    };
  },
  created() {
    setInterval(this.currentDate, 1000);
  },
  computed: {
    ...mapState(["days", "hours", "minutes", "seconds"]),
  },
  methods: {
    currentDate() {
      this.currentTime = moment().format("HH:mm:ss DD-MM-YYYY");
    },
    futureDate() {
      this.futureTime = moment()
        .add(this.$store.state.days, "d")
        .add(this.$store.state.hours, "h")
        .add(this.$store.state.minutes, "m")
        .add(this.$store.state.seconds, "s")
        .format("HH:mm:ss DD-MM-YYYY");
      this.countdownTime();
    },
    countdownTime() {
      let future = moment()
        .add(this.$store.state.days, "d")
        .add(this.$store.state.hours, "h")
        .add(this.$store.state.minutes, "m")
        .add(this.$store.state.seconds, "s");
      let now = moment();
      console.log(now.year());
      console.log(now.month() + 1);
      console.log(now.day());
      console.log(now.hour());
      console.log(now.minute());
      console.log(now.second());
      this.timer = future
        .subtract(now.year(), "year")
        .subtract(now.month(), "months")
        .subtract(now.day(), "d")
        .subtract(now.hour(), "h")
        .subtract(now.minute(), "m")
        .subtract(now.second(), "s")
        .format("HH:mm:ss DD-MM-YYYY");
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 60%;
  margin: 0 auto;
}
.card-header {
  padding: 2%;
}
</style>
