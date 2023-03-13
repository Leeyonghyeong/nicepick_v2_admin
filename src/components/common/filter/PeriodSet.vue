<template>
  <section>
    <article class="period-wrapper">
      <div class="name-btn-wrapper">
        <div class="name">조회기간</div>

        <div class="btn-wrapper">
          <div class="btn">
            <button
              :class="{ select: selectPeriod === 'all' }"
              @click="selectPeriod = 'all'"
            >
              전체
            </button>
            <button
              :class="{ select: selectPeriod === 'today' }"
              @click="selectPeriod = 'today'"
            >
              오늘
            </button>
            <button
              :class="{ select: selectPeriod === 'week' }"
              @click="selectPeriod = 'week'"
            >
              1주일
            </button>
            <button
              :class="{ select: selectPeriod === 'month' }"
              @click="selectPeriod = 'month'"
            >
              1개월
            </button>
            <button
              :class="{ select: selectPeriod === 'threeMonth' }"
              @click="selectPeriod = 'threeMonth'"
            >
              3개월
            </button>
            <button
              :class="{ select: selectPeriod === 'sixMonth' }"
              @click="selectPeriod = 'sixMonth'"
            >
              6개월
            </button>
            <button
              :class="{ select: selectPeriod === 'year' }"
              @click="selectPeriod = 'year'"
            >
              1년
            </button>
          </div>
        </div>
      </div>

      <div class="date">
        <input type="date" value="2023-03-13" />
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
.period-wrapper {
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
          width: 60px;
          height: 40px;
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

  .date {
    input {
      height: 40px;
      padding: 11px 20px;
      box-sizing: border-box;
      background-color: white;
      border-radius: 10px;
      border: 1px solid $sectionLine;
      font-size: 15px;
      font-family: $pre;
      color: $fontSub;
    }
  }
}

@include mobile {
  .period-wrapper {
    display: block;

    div {
      &:nth-child(2) {
        padding: 0;
      }
    }

    .name-btn-wrapper {
      padding: 0 24px 10px;
      gap: 13px;

      .name {
        width: 20%;
        font-size: 12px;
      }

      .btn-wrapper {
        width: 100%;
        padding: 0;
        white-space: nowrap;
        overflow-x: auto;
        touch-action: auto;

        .btn {
          width: 384px;
          gap: 8px;

          button {
            width: 48px;
            font-size: 12px;
            font-weight: 500;
          }
        }
      }
    }

    .btn-wrapper::-webkit-scrollbar {
      display: none;
    }

    .date {
      margin: 0 24px;
      display: flex;
      justify-content: center;

      input {
        width: 100vw;
      }
    }
  }
}
</style>
