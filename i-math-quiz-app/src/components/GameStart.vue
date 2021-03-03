<template>
  <div class="btn-container">
    <b-button class="is-size-4 btn" type="is-success" @click="setExercise('add')"
      ><router-link to="/addition" class="rtr">Addition</router-link></b-button
    >
    <b-button class="is-size-4" type="is-success" @click="setExercise('sub')"
      ><router-link to="/subtraction" class="rtr"
        >Subtraction</router-link
      ></b-button
    >
    <b-button class="is-size-4" type="is-success" @click="setExercise('mult')"
      ><router-link to="/multiplication" class="rtr"
        >Multiplication</router-link
      ></b-button
    >
    <b-button class="is-size-4" type="is-success" @click="setExercise('div')"
      ><router-link to="/division" class="rtr">Division</router-link></b-button
    >
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'question', 'answers'
    ])
  },
  methods: {
    setExercise(type) {
      this.$store.dispatch("setExercise", type)
    }
  }
};
</script>

<style lang="scss" scoped></style>
