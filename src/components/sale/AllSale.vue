<template>
  <section>
    <article class="top-wrapper">
      <div v-if="getDevice === 'pc'" class="title">전체 매출</div>
      <MobileHeader v-else title="전체 매출" />
    </article>

    <article class="   "></article>
  </section>
</template>

<script lang="ts" setup>
import MobileHeader from '../common/MobileHeader.vue'
import { storeToRefs } from 'pinia'
import { useWindowStore } from '../../store/window'

const windowStore = useWindowStore()
const { getDevice } = storeToRefs(windowStore)
</script>

<style lang="scss" scoped>
@import '@/scss/main';
</style>
