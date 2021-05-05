<template>
  <div>
    <h1 class="is-size-3">app name</h1>
    Vuelidate Username pw
    <br />
    <form @submit.prevent="submit">
      <div>
        <div class="labels">
          <label>Email</label>
          <b-input type="email" v-model="form.email"></b-input>
        </div>
        <div class="labels">
          <label>Password</label>
          <b-input type="text" v-model="form.password"></b-input>
        </div>
      </div>
      <div>
        <b-button type="submit">
          Login
        </b-button>
      </div>
    </form>
    <p></p>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      form: {
        name: "",
        email: ""
      }
    };
  },
  validations: {
    form: {
      name: { required, min: minLength(10) },
      email: { required, email }
    }
  },
  methods: {
    submit() {
      console.log("active")
      // this.$v.form.$touch();
      // if(this.$v.form.$error) {
      //   console.error("galsdf")
      //   return
      // }
      // // to form submit after this
      // console.log('Form submitted')
    }
  }
};
</script>

<style lang="scss" scoped>
.labels {
  text-align: left;
  margin: 3% 0%;
}
</style>
