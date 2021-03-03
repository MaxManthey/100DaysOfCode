import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    question: "",
    answers: []
  },
  mutations: {
    setExercise(state, question, answers) {
      state.question = question
      state.answers = answers
    }
  },
  actions: {
    setExercise(context, type) {
      if (type == "add") {
        let numbers = dispatch("addition")
        context.commit("setExercise", getQuestion(numbers, "+ "), getAnswers(numbers))
      } else if(type == "sub") {
        let numbers = subtraction()
        context.commit("setExercise", getQuestion(numbers, " - "), getAnswers(numbers))
      } else if(type == "mult") {
        let numbers = multiplication()
        context.commit("setExercise", getQuestion(numbers, " * "), getAnswers(numbers))
      } else if(type == "div") {
        let numbers = division()
        context.commit("setExercise", getQuestion(numbers, " / "), getAnswers(numbers))
      }
    },
    getQuestion(numbers, sign){
      return numbers[0].toString() + sign + numbers[1].toString()
    },
    getAnswers(numbers) {
      return numbers.splice(2)
    },
    randomNumber() {
      return Math.floor(Math.random() * 100) + 1  
    },
    getNumbers() {
      let result = [] //0, 1 == question, 2 - 4 answers
      for(let i = 0; i < 5; ++i) {
        result.push(randomNumber())
      }
      return result;
    },
    addition() {
      let numbers = getNumbers()
      const solution = numbers[0] + numbers[1]
      numbers.push(solution)
      return numbers
    },
    subtraction() {
      let numbers = getNumbers()
      const solution = numbers[0] - numbers[1]
      numbers.push(solution)
      return numbers
    },
    multiplication() {
      let numbers = getNumbers()
      const solution = numbers[0] * numbers[1]
      numbers.push(solution)
      return numbers
    },
    division() {
      let numbers = getNumbers()
      const solution = numbers[0] / numbers[1]
      numbers.push(solution)
      return numbers
    }
  },
  modules: {
  }
})
