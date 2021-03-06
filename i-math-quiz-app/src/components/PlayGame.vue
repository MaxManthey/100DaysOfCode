<template>
  <div>
    <p @click="test()">{{ randomQuestion }}</p>
    <ul>
      <li v-for="answer in possibleAnswers" :key="answer">
        {{ answer }}
        <!-- <answer-button :answer="answer" /> -->
      </li>
    </ul>
    <b-button @click="test">test</b-button>
  </div>
</template>

<script>
import AnswerButton from "./AnswerButton.vue";
import { mapState } from "vuex";
import Addition from "../views/Addition.vue";
export default {
  components: { AnswerButton, Addition },
  data() {
    return {
      randomQuestion: "",
      possibleAnswers: [],
    };
  },
  created() {
    this.possibleAnswers = this.$store.state.answers;
    // this.randomQuestion = this.$store.state.question;
  },
  computed: {
    ...mapState(["question", "answers"]),
  },
  methods: {
    test() {
      console.log(this.possibleAnswers);
    },
  },
};
</script>

<style lang="scss" scoped></style>
