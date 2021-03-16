<template>
    <card-wrapper>
        <div class="media">
            <div class="media-left">
                <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
            </div>
            <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">@johnsmith</p>
            </div>
        </div>
    </card-wrapper>
</template>

<script>
import CardWrapper from './CardWrapper.vue'
    export default {
  components: { CardWrapper },
        
    }
</script>

<style lang="scss" scoped>
// .media {
//     display: flex;
//     justify-content: flex-start;
// }
</style>