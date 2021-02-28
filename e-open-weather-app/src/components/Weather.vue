<template>
  <div>
    <button @click="setTemperature()">moin</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      temperature: 0,
    };
  },
  methods: {
    async setTemperature() {
      let test = await this.openWeatherAPICall();
      console.log("ja moin ", test);
    },
    async openWeatherAPICall() {
      var key = "13ff8daa980a9d75c862e7f9007a1fc6";
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Belfast&appid=" + key
      )
        .then(function(resp) {
          return resp.json();
        }) // Convert data to json
        .then(function(data) {
          console.log(data);
          console.log(data.main.temp);
          return data;
        })
        .catch(function(e) {
          console.error("ERROR ", e);
        });
    },
    kelvinToCelsius(kelvin) {
      return kelvin - 273.15;
    },
  },
};
</script>

<style lang="scss" scoped></style>
