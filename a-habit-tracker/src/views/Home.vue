<template>
  <div class="home">
    <dashboard />
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue'
export default {
  name: 'Home',
  components: {
    Dashboard
  },
}
</script>
<style lang="scss">
// html, body {
//   background-color: $dark;
// }
</style>