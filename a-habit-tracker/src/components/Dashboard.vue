<template>
  <div class="wrapper">
    <h1 class="is-size-3"><b>app name</b></h1>
    <div class="btn-wrapper">
      <b-button @click="prompt">new activity</b-button>
      <!-- todo: change to icon -->
      <b-button><router-link to="/account">Account</router-link></b-button>
    </div>
    <br />
    <div v-for="item in activities" :key="item.id" class="list-wrapper">
      <div class="info-wrap">
        <span>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
            />
          </svg>
          <span class="is-size-5">
            {{ item.name }}
          </span>
          <b-tag class="pad"> Start date: {{ item.startDate }} </b-tag>
          <b-tag class="pad"> Missed days: {{ item.missedDays.length }} </b-tag>
        </span>
        <span>
          <b-button class="pad">Done Today</b-button>
          <b-dropdown aria-role="list" class="pad">
            <template #trigger position="is-top-left">
              <b-button>
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
                  />
                </svg>
              </b-button>
              <!-- <b-button
                label="Menu"
                :icon-right="active ? 'menu-up' : 'menu-down'"
              /> -->
            </template>
            <b-dropdown-item aria-role="listitem">Edit Name</b-dropdown-item>
            <b-dropdown-item aria-role="listitem"
              >Delete Activity</b-dropdown-item
            >
          </b-dropdown>
        </span>
      </div>
      <hr />
    </div>
    <!-- <div>
        list of activities
            <div>collapse, name, startdate, numberMissedDays, markTodayAsDone, menu</div>
            <div>menu: edit name, delete activity</div>
            <div>collapse: show all days missed and hit, mark yesterday as done if not already</div>
        </div>    -->
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["activities"]),
  },
  methods: {
    ...mapActions(["addActivity"]),
    prompt() {
      this.$buefy.dialog.prompt({
        message: `What's your new activity?`,
        inputAttrs: {
          placeholder: "e.g. Meditate",
        },
        trapFocus: true,
        onConfirm: (value) => {
          this.$store.dispatch("addActivity", value);
          this.$buefy.toast.open(`Added new activity: ${value}`);
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0% 4%;
}
h1 {
  padding-top: 0%;
  text-align: left;
}
.btn-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 3%;
}
.list-wrapper {
  text-align: left;
}
.info-wrap {
  display: flex;
  justify-content: space-between;
}
.pad {
  margin: 0 5px;
}
</style>
