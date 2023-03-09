<template>
  <section>
    <div id="menu">
      <img
        src="../../assets/button/hammenu.png"
        alt="메뉴"
        @click="showAndCloseCategory"
      />
    </div>
    <div class="title">{{ title }}</div>
    <MobileCategory
      v-if="isShowCategory"
      @showAndCloseCategory="showAndCloseCategory"
    />
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import MobileCategory from './modal/MobileCategory.vue'

defineProps<{
  title: string
}>()

const isShowCategory = ref<boolean>(false)

const showAndCloseCategory = () => {
  isShowCategory.value = !isShowCategory.value
}
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
