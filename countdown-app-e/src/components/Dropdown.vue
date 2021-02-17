<template>
  <div>
    <b-dropdown aria-role="list">
      <template #trigger="{ active }">
        <b-button
          label="Click me!"
          :icon-right="active ? 'menu-up' : 'menu-down'"
        />
      </template>

      <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
