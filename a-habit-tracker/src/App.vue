<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Login</router-link> -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
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
// Dev Plan
//   - set up login component with Vuelidate
//     - when logging in just check if data correct
//   - set up register component
//   - connect firebase to app
//     - make sure not to copy credentials to github
//   - make registration and login work with firebase auth
//   - set up database for user
//   - show data for user on dashboard
//   - account options
//     - change password
//     - delete account
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
