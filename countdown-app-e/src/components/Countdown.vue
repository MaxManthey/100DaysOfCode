<template>
  <div class="card">
    <div class="card-header">
      <div class="media-content">
        <p class="title is-4">Countdown</p>
      </div>
    </div>
    <div class="card-content">
      <div class="content">
        <div :class="currentDate()">
          {{ currentTime }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      currentTime: "",
      futureTime: "",
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
      console.log();
      const today = new Date();
      const date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = time + " " + date;
      this.currentTime = dateTime;
    },
    futureDate() {
      let addedDay = this.currentDate().getDate() + this.$store.state.days;
      let addedMinute = this.currentDate().getHours();
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
