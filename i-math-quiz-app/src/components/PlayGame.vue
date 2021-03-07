<template>
  <div>
    <p class="is-size-4">{{ randomQuestion }}</p>
    <ul>
      <li v-for="answer in possibleAnswers" :key="answer.id">
        <answer-button :answer="answer" class="answer-btn" />
      </li>
    </ul>
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
    this.randomQuestion = this.$store.state.question;
  },
  computed: {
    ...mapState(["question", "answers"]),
  },
};
</script>

<style lang="scss" scoped>
ul li {
  display: inline;
}
.answer-btn {
  margin-left: 5%;
  margin-right: 5%;
}
</style>
