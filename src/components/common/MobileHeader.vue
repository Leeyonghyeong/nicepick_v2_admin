<template>
  <section>
    <div class="menu">
      <img src="../../assets/button/hammenu.png" alt="메뉴" />
    </div>
    <div class="title">{{ title }}</div>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<style lang="scss" scoped>
@import '@/scss/main';
section {
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $sectionLine;
  box-sizing: border-box;
  position: relative;

  img {
    width: 30px;
    height: 30px;
    margin-left: 24px;
    cursor: pointer;
  }

  .title {
    color: $fontMain;
    font-weight: 500;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
  }
}
</style>
