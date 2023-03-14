<template>
  <section class="partner-list">
    <article class="top-wrapper">
      <div class="name">{{ item }}</div>
      <div class="count">000,000명</div>
      <img
        @click="showItemModal = !showItemModal"
        src="../../../assets/button/arrow_down.png"
        alt="열기"
      />
    </article>

    <article class="list-wrapper">
      <PartnerAll v-if="item === '파트너 전체'" />
      <Franchise v-else-if="item === '프랜차이즈'" />
      <Realtor v-else-if="item === '공인중개사'" />
      <div v-else>내역이 없습니다.</div>
    </article>

    <article class="item-modal" v-if="showItemModal === true">
      <div class="item-wrapper">
        <div
          :class="{ selectItem: item === '파트너 전체' }"
          @click="item = '파트너 전체'"
        >
          파트너 전체
        </div>
        <div
          :class="{ selectItem: item === '프랜차이즈' }"
          @click="item = '프랜차이즈'"
        >
          프랜차이즈
        </div>
        <div
          :class="{ selectItem: item === '공인중개사' }"
          @click="item = '공인중개사'"
        >
          공인중개사
        </div>
        <div :class="{ selectItem: item === '협력' }" @click="item = '협력'">
          협력
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import PartnerAll from './PartnerAll.vue'
import Franchise from './Franchise.vue'
import Realtor from './Realtor.vue'
import { ref } from 'vue'

const item = ref<string>('파트너 전체')
const showItemModal = ref<boolean>(false)
</script>

<style lang="scss" scoped>
@import '@/scss/main';
.partner-list {
  position: relative;

  .top-wrapper {
    padding-bottom: 20px;
    display: flex;
    align-items: center;

    .name {
      color: $fontSub;
    }

    .count {
      padding: 0 10px 0 6px;
      color: $mainColor;
    }

    img {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }

  .item-modal {
    position: absolute;
    top: 30px;
    left: 119px;

    .item-wrapper {
      width: 170px;
      border: 1px solid $sectionLine;
      border-radius: 10px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
      overflow: hidden;

      div {
        height: 50px;
        padding-left: 16px;
        display: flex;
        align-items: center;
        background-color: white;
        font-size: 14px;
        color: $fontMain;
        cursor: pointer;
      }

      .selectItem {
        background-color: #f5f7ff;
        color: $mainColor;
      }
    }
  }
}

@include mobile {
  .partner-list {
    .top-wrapper {
      padding: 30px 24px;

      .name,
      .count {
        font-size: 12px;
      }
    }

    .item-modal {
      top: 60px;
      left: 80px;
    }

    .page-num-wrapper {
      padding-top: 35px;

      .page-num {
        gap: 23px;
      }
    }
  }
}
</style>
