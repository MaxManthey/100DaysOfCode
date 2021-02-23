<template>
  <div class="calc-wrapper">
    <div class="result-display">
      <span id="result-text">{{ display }}</span>
    </div>

    <button class="top-btn">AC</button>
    <button class="top-btn">+/-</button>
    <button class="top-btn">%</button>
    <button class="side-btn">/</button>

    <button class="num-btn">7</button>
    <button class="num-btn">8</button>
    <button class="num-btn">9</button>
    <button class="side-btn">*</button>

    <button class="num-btn">4</button>
    <button class="num-btn">5</button>
    <button class="num-btn">6</button>
    <button class="side-btn">-</button>

    <button class="num-btn">1</button>
    <button class="num-btn">2</button>
    <button class="num-btn">3</button>
    <button class="side-btn">+</button>

    <button class="num-btn" id="bottom-left-btn">0</button>
    <button class="num-btn">,</button>
    <button class="side-btn" id="bottom-right-btn">=</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: 0,
    };
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
