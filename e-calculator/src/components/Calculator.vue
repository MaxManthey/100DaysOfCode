<template>
  <div class="calc-wrapper">
    <div class="result-display">
      <span id="result-text">{{ display }}</span>
    </div>

    <button class="top-btn" @click="resetToDefault()">AC</button>
    <button class="top-btn" @click="plusminus()">+/-</button>
    <button class="top-btn" @click="percent()">%</button>
    <button class="side-btn" @click="division()">/</button>

    <button class="num-btn" @click="addToDisplay('7')">7</button>
    <button class="num-btn" @click="addToDisplay('8')">8</button>
    <button class="num-btn" @click="addToDisplay('9')">9</button>
    <button class="side-btn" @click="multiply()">*</button>

    <button class="num-btn" @click="addToDisplay('4')">4</button>
    <button class="num-btn" @click="addToDisplay('5')">5</button>
    <button class="num-btn" @click="addToDisplay('6')">6</button>
    <button class="side-btn" id="sub-btn" @click="subtract()">-</button>

    <button class="num-btn" id="one-btn" @click="addToDisplay('1')">1</button>
    <button class="num-btn" @click="addToDisplay('2')">2</button>
    <button class="num-btn" @click="addToDisplay('3')">3</button>
    <button class="side-btn" @click="add()">+</button>

    <button
      class="num-btn zero-btn"
      id="bottom-left-btn"
      @click="addToDisplay('0')"
    >
      0
    </button>
    <button class="num-btn" @click="addToDisplay('.')">.</button>
    <button class="side-btn" id="bottom-right-btn" @click="equals()">=</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: "0",
      savedNum: "0",
      oldExec: "+",
      showSavedNum: false,
    };
  },
  methods: {
    resetToDefault() {
      this.showSavedNum = false;
      this.display = "0";
      this.savedNum = "0";
      this.oldExec = "+";
    },
    addToDisplay(num) {
      if (this.showSavedNum === true) {
        this.showSavedNum = false;
        this.display = "";
      }
      if (this.display === "0") {
        this.display = num;
      } else {
        this.display += num;
      }
    },
    executeSavedData() {
      if (this.showSavedNum === true) {
        return;
      }
      if (this.display.includes(".") || this.savedNum.includes(".")) {
        this.executeFloat();
      } else {
        this.executeInt();
      }
      this.display = this.savedNum;
      this.showSavedNum = true;
    },
    executeInt() {
      if (this.oldExec === "+") {
        this.savedNum = (
          parseInt(this.savedNum) + parseInt(this.display)
        ).toString();
      } else if (this.oldExec === "-") {
        this.savedNum = (
          parseInt(this.savedNum) - parseInt(this.display)
        ).toString();
      } else if (this.oldExec === "/") {
        this.savedNum = (
          parseInt(this.savedNum) / parseInt(this.display)
        ).toString();
      } else if (this.oldExec === "*") {
        this.savedNum = (
          parseInt(this.savedNum) * parseInt(this.display)
        ).toString();
      }
    },
    executeFloat() {
      if (this.oldExec === "+") {
        this.savedNum = (
          parseFloat(this.savedNum) + parseFloat(this.display)
        ).toString();
      } else if (this.oldExec === "-") {
        this.savedNum = (
          parseFloat(this.savedNum) - parseFloat(this.display)
        ).toString();
      } else if (this.oldExec === "/") {
        this.savedNum = (
          parseFloat(this.savedNum) / parseFloat(this.display)
        ).toString();
      } else if (this.oldExec === "*") {
        this.savedNum = (
          parseFloat(this.savedNum) * parseFloat(this.display)
        ).toString();
      }
    },
    division() {
      this.executeSavedData();
      this.oldExec = "/";
    },
    multiply() {
      this.executeSavedData();
      this.oldExec = "*";
    },
    subtract() {
      this.executeSavedData();
      this.oldExec = "-";
    },
    add() {
      this.executeSavedData();
      this.oldExec = "+";
    },
    plusminus() {
      if (this.display === "0") {
        return;
      }
      let changeDisplay = this.display.split("");
      if (changeDisplay[0] === "-") {
        changeDisplay.shift();
      } else {
        changeDisplay.unshift("-");
      }
      this.display = changeDisplay.join("");
    },
    percent() {
      this.display = (parseFloat(this.display) / 100).toString();
    },
    equals() {
      this.executeSavedData();
      this.display = this.savedNum;
      this.showSavedNum = true;
      this.oldExec = "+";
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
