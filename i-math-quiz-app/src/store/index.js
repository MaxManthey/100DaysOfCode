import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function getQuestion(numbers, sign){
  return numbers[0].toString() + sign + numbers[1].toString()
}
function getAnswers(numbers) {
  return numbers.splice(2)
}
function randomNumber() {
  return Math.floor(Math.random() * 100) + 1  
}
function getNumbers() {
  let result = [] //0, 1 == question, 2 - 4 answers
  for(let i = 0; i < 5; ++i) {
    result.push(randomNumber())
  }
  return result;
}
function addition() {
  let numbers = getNumbers()
  const solution = numbers[0] + numbers[1]
  numbers.push(solution)
  return numbers
}
function subtraction() {
  let numbers = getNumbers()
  const solution = numbers[0] - numbers[1]
  numbers.push(solution)
  return numbers
}
function multiplication() {
  let numbers = getNumbers()
  const solution = numbers[0] * numbers[1]
  numbers.push(solution)
  return numbers
}
function division() {
  let numbers = getNumbers()
  const solution = numbers[0] / numbers[1]
  numbers.push(solution)
  return numbers
}

export default new Vuex.Store({
  state: {
    question: "",
    answers: []
  },
  mutations: {
    setQuestion(state, question) {
      state.question = question
    },
    setAnswers(state, answers) {
      state.answers = answers
    }
  },
  actions: {
    setExercise(context, type) {
      if (type == "add") {
        let numbers = addition()
        context.commit("setQuestion", getQuestion(numbers, " + "))
        context.commit("setAnswers", getAnswers(numbers))        
      } else if(type == "sub") {
        let numbers = subtraction()
        context.commit("setQuestion", getQuestion(numbers, " - "))
        context.commit("setAnswers", getAnswers(numbers))        
      } else if(type == "mult") {
        let numbers = multiplication()
        context.commit("setQuestion", getQuestion(numbers, " * "))
        context.commit("setAnswers", getAnswers(numbers))        
      } else if(type == "div") {
        let numbers = division()
        context.commit("setQuestion", getQuestion(numbers, " / "))
        context.commit("setAnswers", getAnswers(numbers))        
      }
    },
  },
  modules: {
  }
})
