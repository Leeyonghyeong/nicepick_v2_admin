<template>
  <RouterLink to="/">main</RouterLink>
  <RouterView />
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/scss/main';

.test {
  color: $primary;
}
</style>
