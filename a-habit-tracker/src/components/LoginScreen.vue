<template>
  <div>
    <h1 class="is-size-3">Login</h1>
    Vuelidate Username pw
    <br />
    <form @submit.prevent="submit">
      <div class="labels form-group">
        <label>Email</label>
        <b-input type="email" class="form__input" v-model.trim="$v.form.email.$model" />
      </div>
      <div class="labels form-group">
        <label>Password</label>
        <b-input type="text" class="form__input" v-model.trim="$v.form.password.$model" />
      </div>
      <div class="form-group">
        <b-button type="submit" class="login-btn">
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
        email: "",
        password: ""
      }
    };
  },
  validations: {
    form: {
      email: { required, email },
      password: { required, min: minLength(10) }
    }
  },
  methods: {
    submit() {
      this.$v.form.$touch();
      console.log("active")
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
.login-btn {
  width: 100%;
}
</style>
