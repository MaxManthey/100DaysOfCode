<template>
  <div>
    <p @click="test()">{{ randomQuestion }}</p>
    <li v-for="answer in possibleAnswers" :key="answer">
      <answer-button :answer="answer" />
    </li>
  </div>
</template>

<script>
import AnswerButton from "./AnswerButton.vue";
import { mapState } from "vuex";
export default {
  components: { AnswerButton },
  data() {
    return {
      randomQuestion: "",
      possibleAnswers: [],
    };
  },
  created() {
    this.randomQuestion = this.$store.state.question;
    this.possibleAnswers = this.$store.state.answers;
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
