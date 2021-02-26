<template>
  <div>
    <button @click="test()">moin</button>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      const testo = process.env.VUE_APP_WEATHER_API_KEY;
      console.log("test ", testo);
      //   fetch(
      //     "api.openweathermap.org/data/2.5/weather?q=Belfast&appid="
      //   )
      //     .then(async function(resp) {
      //       try {
      //         return resp.json();
      //       } catch (e) {
      //         console.log(e);
      //       }
      //     }) // Convert data to json
      //     .then(function(data) {
      //       try {
      //         console.log(JSON.stringify(data));
      //       } catch (e) {
      //         console.log(e);
      //       }
      //     })
      //     .catch(function(e) {
      //       console.error(e);
      //     });
      //console.log(data);
    },
  },
};
</script>

<style lang="scss" scoped></style>
