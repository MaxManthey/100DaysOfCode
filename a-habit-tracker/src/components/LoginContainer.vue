<template>
  <div>
    <login-screen v-if="showLoginScreen" />
    <register-screen v-else />
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
    };
  },
};
</script>

<style lang="scss" scoped></style>
