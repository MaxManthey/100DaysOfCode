<template>
    <vue-glide>
      <vue-glide-slide v-for="i in 12" :key="i">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image">
        <p>Album</p>
      </vue-glide-slide>
    </vue-glide>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

</style>