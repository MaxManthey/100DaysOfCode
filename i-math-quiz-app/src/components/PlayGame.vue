<template>
  <div>
    <p>test</p>
    <p>{{ questions }}</p>
    <answer-button :answer="12" />
  </div>
</template>

<script>
import AnswerButton from './AnswerButton.vue';
import { mapState } from 'vuex';
export default {
  components: { AnswerButton },
  data() {
    return {
      questions: "a"
    }
  },
  created() {
    //this.questions = this.$store.state.question
  },
  computed: {
    ...mapState([
      'question', 'answers'
    ])
  },
};
</script>

<style lang="scss" scoped></style>
