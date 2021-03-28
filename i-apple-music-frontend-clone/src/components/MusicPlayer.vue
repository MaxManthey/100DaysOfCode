<template>
  <div class="music-wrapper">
    <img
      src="https://bulma.io/images/placeholders/48x48.png"
      alt="Placeholder image"
    />
    <div class="music-text">
      <p>Song Name</p>
      <p>Artist Name</p>
    </div>
    <div class="btn-wrapper">
      <svg style="width:36px;height:36px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
      </svg>
      <svg style="width:36px;height:36px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M16,18H18V6H16M6,18L14.5,12L6,6V18Z" />
      </svg>
    </div>
  </div>
</template>

<script>
import CardWrapper from "./CardWrapper.vue";
export default {
  components: { CardWrapper },
};
</script>

<style lang="scss" scoped>
.music-wrapper {
  display: flex;
  //   justify-content: space-between;
  background-color: white;
  padding: 2% 4%;
}
.music-wrapper div:last-child {
  margin-left: auto;
  margin-right: 2%;
}
.music-text {
  text-align: left;
  padding-left: 2%;
}
.btn-wrapper {
  padding-top: 1%;
}
</style>
