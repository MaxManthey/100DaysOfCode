<template>
  <div>
    <b-field label="City Name" class="city-input">
      <b-input v-model="cityName"></b-input>
    </b-field>
    <b-button @click="openWeatherAPICall()">set</b-button>
    <b-button @click="getWeather()">get</b-button>
    <div v-if="citySet">
      <h1 class="is-size-2">Weather in {{ displayCityName }}</h1>
      <p>Current temperature: {{ temp }} deg Celsius</p>
      <p>Feels like: {{ feelsLike }} deg Celsius</p>
      <p>Max temperature: {{ maxTemp }} deg Celsius</p>
      <p>Min temperature: {{ minTemp }} deg Celsius</p>
      <p>Wind speed: {{ windSpeed }} mph</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      cityName: "",
      displayCityName: "",
      citySet: false,
      temp: 0,
      feelsLike: 0,
      maxTemp: 0,
      minTemp: 0,
      windSpeed: 0,
    };
  },
  computed: {
    ...mapState(["weatherData"]),
  },
  methods: {
    roundData(num) {
      console.log(Math.round(parseFloat(num)*10)/10)
      // return num
      return Math.round(parseFloat(num)*10)/10
    },
    getWeather() {
      this.citySet = true;
      this.displayCityName = this.cityName;
      const data = this.$store.state.weatherData;
      this.temp = this.roundData(this.kelvinToCelsius(data.main.temp));
      this.feelsLike = this.roundData(this.kelvinToCelsius(data.main.feels_like));
      this.maxTemp = this.roundData(this.kelvinToCelsius(data.main.temp_max));
      this.minTemp = this.roundData(this.kelvinToCelsius(data.main.temp_min));
      this.windSpeed = this.roundData(data.wind.speed);
    },
    openWeatherAPICall() {
      if (this.cityName.length) {
        this.$store.dispatch("updateCityData", this.cityName);
      }
    },
    kelvinToCelsius(kelvin) {
      return kelvin - 273.15;
    },
  },
};
</script>

<style lang="scss" scoped>
.city-input {
  margin: 0 auto;
  width: 30%;
}
</style>
