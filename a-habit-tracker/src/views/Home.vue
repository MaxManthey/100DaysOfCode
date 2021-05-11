<template>
  <div class="home">
    <dashboard />
    <b-switch
      v-model="lightMode"
      class="mode-switch"
      passive-type='is-dark'
      type='is-warning'>
      {{ lightMode ? "Light Mode" : "Dark Mode" }}
    </b-switch>
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue'
// import '../../public/style/darkLightMode.scss'
export default {
  name: 'Home',
  components: {
    Dashboard
  },
  data() {
    return {
      lightMode: true
    };
  },
  methods: {
    changeMode() {
      localStorage.setItem("lightMode", this.lightMode)
    }
  }
}
</script>
<style lang="scss">
@import '../../public/style/darkLightMode.scss';
// html, body {
//   background-color: $dark;
// }
</style>