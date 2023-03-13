<template>
  <section class="traffic">
    <article class="top-wrapper">
      <div v-if="getDevice === 'pc'" class="title">트래픽 관리</div>
      <MobileHeader v-else title="트래픽 관리" />

      <div class="category-wrapper">
        <div class="width" @click="selectCategory = 'franchise'">
          <div
            class="category"
            :class="{ select: selectCategory === 'franchise' }"
          >
            프랜차이즈
          </div>
        </div>
        <div class="width" @click="selectCategory = 'realtor'">
          <div
            class="category"
            :class="{ select: selectCategory === 'realtor' }"
          >
            공인중개사
          </div>
        </div>
        <div class="width">
          <div style="cursor: default" class="category">협력</div>
        </div>
      </div>
    </article>

    <Franchise v-if="selectCategory === 'franchise'" />
    <Realtor v-if="selectCategory === 'realtor'" />

    <div class="save">
      <button>저장</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import MobileHeader from '../common/MobileHeader.vue'
import Franchise from './Franchise.vue'
import Realtor from './Realtor.vue'
import { storeToRefs } from 'pinia'
import { useWindowStore } from '../../store/window'

const windowStore = useWindowStore()
const { getDevice } = storeToRefs(windowStore)

const selectCategory = ref<string>('franchise')
</script>

<style lang="scss" scoped>
@import '@/scss/main';
.traffic {
  padding: 100px 160px;
  box-sizing: border-box;

  .top-wrapper {
    padding-bottom: 50px;
    border-bottom: 1px solid $sectionLine;

    .title {
      margin-bottom: 50px;
      font-size: 24px;
      color: $fontMain;
      font-weight: 500;
    }

    .category-wrapper {
      display: flex;
      gap: 30px;
      color: $inputLine;

      .category {
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
      }

      .select {
        color: $mainColor;
      }
    }
  }

  .save {
    padding-top: 30px;
    display: flex;
    justify-content: center;
    border-top: 1px solid $sectionLine;

    button {
      width: 100px;
      height: 50px;
      background-color: $mainColor;
      border-radius: 10px;
      border: none;
      font-family: $pre;
      font-size: 16px;
      color: white;
      cursor: pointer;
    }
  }
}

@include mobile {
  .traffic {
    padding: 0;

    .top-wrapper {
      padding-bottom: 0;

      .category-wrapper {
        padding: 0 24px;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        text-align: center;

        .width {
          width: 100%;
          padding: 17px 0;

          .category {
            font-size: 14px;
            display: inline;
            padding-bottom: 17px;
          }

          .select {
            border-bottom: 2px solid $mainColor;
          }
        }
      }
    }

    .save {
      padding: 40px 24px 60px;
      border-top: none;

      button {
        width: 100%;
        font-size: 14px;
      }
    }
  }
}
</style>
