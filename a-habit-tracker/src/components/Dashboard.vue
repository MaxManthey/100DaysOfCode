<template>
    <div>
        <h1 class="is-size-3">app name</h1>
        <b-button>new activity</b-button>
        <!-- todo: change to icon -->
        <b-button><router-link to="/account">Account</router-link></b-button>
        <br>
        <div>
        list of activities
            <div>name, markTodayAsDone, startdate, numberMissedDays, menu, collapse</div>
            <div>menu: edit name, delete activity</div>
            <div>collapse: show all days missed and hit, mark yesterday as done if not already</div>
        </div>   
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>