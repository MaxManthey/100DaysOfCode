<template>
  <div>
    Register name email password
    <form @submit.prevent="submit">
      <div>
        <div class="labels">
          <label>Name</label>
          <b-input type="text" v-model="form.name"></b-input>
        </div>
        <div class="labels">
          <label>Email</label>
          <b-input type="email" v-model="form.email"></b-input>
        </div>
        <div class="labels">
          <label>Password</label>
          <b-input type="text" v-model="form.password"></b-input>
        </div>
      </div>
      <div class="submit-btn">
        <b-button type="submit">
          Register
        </b-button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  validations: {
    form: {
      name: { required, min: minLength(3) },
      email: { required, email },
      password: { required }
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
.submit-btn {
  margin-top: 3%;
}
</style>
