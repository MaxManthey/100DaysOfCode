<template>
  <div>
    <b-switch
      v-model="lightMode"
      class="mode-switch"
      passive-type='is-dark'
      type='is-warning'
      @click.native="changeMode"  
    >
      {{ lightMode ? "Light Mode" : "Dark Mode" }}
    </b-switch>
    <button @click="changeMode">test</button>
    <login-container />
  </div>
</template>

<script>
import LoginContainer from "../components/LoginContainer.vue";
export default {
  components: { LoginContainer },
  data() {
    return {
      lightMode: true
    };
  },
  methods: {
    changeMode() {
      console.log("in changemode")
      localStorage.setItem("lightMode", !this.lightMode)
    }
  }
};
</script>

<style lang="scss" scoped></style>
