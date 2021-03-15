<template>
    <div @click="openCloseBurgerMenu()">
        <div v-if="!this.$store.state.showBurger">
            <svg style="width:30px;height:30px" viewBox="0 0 24 24">
                <path fill="#F9233B" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
        </div>
        <div v-else>
            <svg style="width:30px;height:30px" viewBox="0 0 24 24">
                <path fill="#F9233B" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState([
            'showBurger',
        ])
    },
    methods: {
        openCloseBurgerMenu() {            
            this.$store.dispatch("changeBurgerState")
        }
    }
}
</script>

<style lang="scss" scoped>

</style>