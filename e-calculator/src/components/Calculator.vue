<template>
  <div class="calc-wrapper">
    <div class="result-display">
      <span id="result-text">{{ display }}</span>
    </div>

    <button class="top-btn" @click="resetDisplay()">AC</button>
    <button class="top-btn">+/-</button>
    <button class="top-btn">%</button>
    <button class="side-btn">/</button>

    <button class="num-btn" @click="addToDisplay('7')">7</button>
    <button class="num-btn" @click="addToDisplay('8')">8</button>
    <button class="num-btn" @click="addToDisplay('9')">9</button>
    <button class="side-btn">*</button>

    <button class="num-btn" @click="addToDisplay('4')">4</button>
    <button class="num-btn" @click="addToDisplay('5')">5</button>
    <button class="num-btn" @click="addToDisplay('6')">6</button>
    <button class="side-btn">-</button>

    <button class="num-btn" @click="addToDisplay('1')">1</button>
    <button class="num-btn" @click="addToDisplay('2')">2</button>
    <button class="num-btn" @click="addToDisplay('3')">3</button>
    <button class="side-btn">+</button>

    <button class="num-btn zero-btn" id="bottom-left-btn">0</button>
    <button class="num-btn" @click="addToDisplay(',')">,</button>
    <button class="side-btn" id="bottom-right-btn">=</button>
  </div>
</template>

<script>
// DevPlan:
// - set up logic
//   - dont use parse int because nums could be double with comma
//   - add plus minus etc.
//   - use another data to add
// - logic to improve
//   - numbers can't have length > 9 because it will overflow on display
// - write some tests for coverage
export default {
  data() {
    return {
      display: "0",
    };
  },
  methods: {
    resetDisplay() {
      this.display = "0";
    },
    addToDisplay(num) {
      if (this.display === "0") {
        this.display = num;
      } else {
        this.display += num;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 10vh;
  height: 10vh;
  border: 1px solid black;
  color: #e8e8e8;
  font-size: 170%;
}
button:focus {
  outline: 0;
}
.calc-wrapper {
  width: 40vh;
  margin: 0 auto;
  color: #e8e8e8;
}
.result-display {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 40vh;
  height: 12vh;
  text-align: right;
  background-color: #474747;
  font-size: 300%;
}
.top-btn {
  background-color: #545454;
}
.top-btn:focus {
  background-color: #6e6e6e;
}
.side-btn {
  background-color: #f7a202;
}
.side-btn:focus {
  background-color: #de9202;
}
.num-btn {
  background-color: #727375;
}
.num-btn:focus {
  background-color: #8c8d8f;
}
.zero-btn {
  width: 20vh;
}
#bottom-right-btn {
  border-bottom-right-radius: 15px;
}
#bottom-left-btn {
  border-bottom-left-radius: 15px;
}
#result-text {
  padding-right: 3vh;
}
</style>
