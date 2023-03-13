<template>
  <section class="all-sale">
    <article class="top-wrapper">
      <div v-if="getDevice === 'pc'" class="title">전체 매출</div>
      <MobileHeader v-else title="전체 매출" />
    </article>

    <article class="filter-wrapper">
      <PeriodSet />
    </article>

    <article class="cost-box-wrapper">
      <div class="first-child">
        <div class="cost-box total-box">
          <div class="name">총매출</div>
          <div class="cost">000,000,000원</div>
        </div>
      </div>

      <div class="last-child">
        <div class="cost-box">
          <div class="name">할인금액</div>
          <div class="cost">000,000,000원</div>
        </div>
        <div class="cost-box">
          <div class="name">실매출</div>
          <div class="cost">000,000,000원</div>
        </div>
        <div class="cost-box">
          <div class="name">공급가액</div>
          <div class="cost">000,000,000원</div>
        </div>
        <div class="cost-box">
          <div class="name">부가세</div>
          <div class="cost">000,000,000원</div>
        </div>
        <div class="cost-box">
          <div class="name">건수</div>
          <div class="cost">000,000,000원</div>
        </div>
        <div class="cost-box">
          <div class="name">평균단가</div>
          <div class="cost">000,000,000원</div>
        </div>
      </div>
    </article>

    <article class="payment-wrapper">
      <div class="payment-category">
        <div
          :class="{ select: selectCategory === 'item' }"
          @click="selectCategory = 'item'"
        >
          결제항목
        </div>
        <div
          :class="{ select: selectCategory === 'method' }"
          @click="selectCategory = 'method'"
        >
          결제수단
        </div>
        <div
          :class="{ select: selectCategory === 'card' }"
          @click="selectCategory = 'card'"
        >
          카드사별
        </div>
      </div>

      <PaymentItem v-if="selectCategory === 'item'" />
      <PaymentMethod v-else-if="selectCategory === 'method'" />
      <PaymentCard v-else />
    </article>
  </section>
</template>

<script lang="ts" setup>
import MobileHeader from '../../common/MobileHeader.vue'
import PeriodSet from '../../common/filter/PeriodSet.vue'
import PaymentItem from '../all/PaymentItem.vue'
import PaymentMethod from '../all/PaymentMethod.vue'
import PaymentCard from '../all/PaymentCard.vue'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useWindowStore } from '../../../store/window'

const windowStore = useWindowStore()
const { getDevice } = storeToRefs(windowStore)

const selectCategory = ref<string>('item')
</script>

<style lang="scss" scoped>
@import '@/scss/main';
.all-sale {
  padding: 100px 160px;
  box-sizing: border-box;
  .top-wrapper {
    .title {
      margin-bottom: 50px;
      font-size: 24px;
      color: $fontMain;
      font-weight: 500;
    }
  }

  .cost-box-wrapper {
    padding: 50px 0 80px;
    display: flex;
    gap: 30px;

    .cost-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
    }

    .first-child {
      .total-box {
        width: 360px;
        height: 210px;
        background-color: #f5f7ff;

        .name {
          font-size: 20px;
          color: $fontMain;
          padding-bottom: 20px;
        }

        .cost {
          font-size: 24px;
          color: $mainColor;
          font-weight: 600;
        }
      }
    }

    .last-child {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;

      .cost-box {
        width: 32.5%;
        height: 100px;
        background-color: #fafafa;

        .name {
          font-size: 15px;
          color: $fontMain;
          padding-bottom: 10px;
        }

        .cost {
          font-size: 18px;
          color: $fontSub;
          font-weight: 600;
        }
      }
    }
  }

  .payment-wrapper {
    .payment-category {
      padding-bottom: 40px;
      display: flex;
      gap: 30px;

      div {
        font-size: 20px;
        color: $inputLine;
        font-weight: 600;
        cursor: pointer;
      }

      .select {
        color: $mainColor;
      }
    }
  }
}

@include mobile {
  .all-sale {
    padding: 0;

    .filter-wrapper {
      padding: 20px 0 0;
    }

    .cost-box-wrapper {
      padding: 40px 24px 30px;
      flex-direction: column;
      gap: 20px;
      border-bottom: 10px solid #fafafa;

      .first-child {
        .total-box {
          width: 100%;
          height: 118px;

          .name {
            font-size: 18px;
            padding-bottom: 13px;
          }

          .cost {
            font-size: 20px;
          }
        }
      }

      .last-child {
        gap: 8px;

        .cost-box {
          width: 48.7%;
          height: 82px;

          .name {
            font-size: 13px;
            padding-bottom: 8px;
          }

          .cost {
            font-size: 15px;
          }
        }
      }
    }

    .payment-wrapper {
      .payment-category {
        padding: 50px 0 40px;
        justify-content: center;

        div {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
