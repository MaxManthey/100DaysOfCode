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
        <div :class="countdownTime()">Countdown: {{ timer }}</div>
        <div class="futureDate()">Your set time: {{ futureTime }}</div>
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
      futureTime: moment(),
      timer: "",
    };
  },
  created() {
    this.futureDate();
    setInterval(function run() {
      this.currentDate;
      this.countdownTime;
      this.test;
    }, 1000);
  },
  computed: {
    ...mapState(["days", "hours", "minutes", "seconds"]),
  },
  methods: {
    decrementSeconds() {
      this.$store.dispatch("decrementSeconds");
    },
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

      this.timer = future
        .subtract(now.year(), "year")
        .subtract(now.month(), "months")
        .subtract(now.date(), "d")
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
