<template>
  <section>
    <article class="payment-wrapper">
      <div class="name-btn-wrapper">
        <div class="name">결제방법</div>

        <div class="btn-wrapper">
          <div class="btn">
            <button
              :class="{ select: selectPeriod === 'all' }"
              @click="selectPeriod = 'all'"
            >
              전체
            </button>
            <button
              :class="{ select: selectPeriod === 'cash' }"
              @click="selectPeriod = 'cash'"
            >
              계좌이체
            </button>
            <button
              :class="{ select: selectPeriod === 'card' }"
              @click="selectPeriod = 'card'"
            >
              카드결제
            </button>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectPeriod = ref<string>('all')
</script>

<style lang="scss" scoped>
@import '@/scss/main';
.payment-wrapper {
  display: flex;
  align-items: center;

  .name-btn-wrapper {
    display: flex;
    align-items: center;

    .name {
      font-size: 15px;
      color: $fontMain;
    }

    .btn-wrapper {
      padding: 0 6px 0 48px;

      .btn {
        display: flex;
        gap: 6px;

        button {
          height: 40px;
          padding: 11px 17px;
          border-radius: 10px;
          border: 1px solid $iconLine;
          background-color: white;
          font-family: $pre;
          font-size: 15px;
          color: $fontSub;
          font-weight: 400;
          cursor: pointer;
        }

        .select {
          border: 1px solid $mainColor;
          color: $mainColor;
        }
      }
    }
  }
}

@include mobile {
  .payment-wrapper {
    display: block;

    div {
      &:nth-child(2) {
        padding: 0;
      }
    }

    .name-btn-wrapper {
      padding: 0 24px;
      gap: 13px;

      .name {
        width: 20%;
        font-size: 12px;
      }

      .btn-wrapper {
        width: 100%;
        padding: 0;

        .btn {
          gap: 8px;

          button {
            padding: 13px 13.5px;
            font-size: 12px;
            font-weight: 500;
          }
        }
      }
    }

    .btn-wrapper::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
