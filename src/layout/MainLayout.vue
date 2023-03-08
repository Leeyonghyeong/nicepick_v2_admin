<template>
  <div>
    <CategoryBar v-if="getDevice === 'pc'" />
    <RouterView class="width" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useWindowStore } from '../store/window'
import { storeToRefs } from 'pinia'
import CategoryBar from '../components/common/CategoryBar.vue'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

onMounted(() => {
  store.windowWidth = window.innerWidth

  window.addEventListener('resize', () => {
    store.$patch({ windowWidth: window.innerWidth })
  })
})
</script>

<style lang="scss" scoped>
@import '@/scss/main';
div {
  display: flex;

  .width {
    width: calc(100% - 330px);
  }
}

@include mobile {
  div {
    .width {
      width: 100%;
    }
  }
}
</style>
