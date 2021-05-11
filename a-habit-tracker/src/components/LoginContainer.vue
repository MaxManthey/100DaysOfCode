<template>
  <div class="dark-mode">
    <div class="wrapper">
      <login-screen v-if="showLoginScreen" />
      <register-screen v-else />
      <p class="change-screen-text" v-if="showLoginScreen">Don't have an account yet? <a @click="showLoginScreen = !showLoginScreen">Register</a></p>
      <p class="change-screen-text" v-else>Back to <a @click="showLoginScreen = !showLoginScreen">Login</a></p>
      <b-button v-if="showLoginScreen"><router-link to="/home">Dashboard</router-link></b-button>
    </div>
  </div>
</template>

<script>
import LoginScreen from "./LoginScreen.vue";
import RegisterScreen from "./RegisterScreen.vue";
export default {
  components: { LoginScreen, RegisterScreen },
  data() {
    return {
      showLoginScreen: true,
      lightMode: true,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../public/style/darkMode.scss';
// html, body, .wrapper {
//   background-color: $dark;
// }
.mode-switch {
  display: flex;
  justify-content: flex-end;
}
.wrapper {
  display: grid;
  grid-template-columns:
    1fr
    calc(min(40ch, calc(100% - 64px)))
    1fr;
  grid-column-gap: 32px;
}
.wrapper > * {
  grid-column: 2;
}
.change-screen-text {
  margin-top: 3%;
}
</style>
