<template>
  <section class="all-list">
    <article class="top-wrapper">
      <div class="name">전체</div>
      <div class="count">000,000개</div>
    </article>

    <article v-if="getDevice === 'pc'" class="list-wrapper">
      <div class="name-wrapper">
        <div>결제항목</div>
        <div>금액</div>
        <div>고객명</div>
        <div>결제일</div>
        <div>결제방법</div>
        <div>카드사</div>
      </div>

      <div class="list">
        <div class="item">프리미엄 멤버십</div>
        <div class="cost">000,000,000원</div>
        <div class="name">홍길동</div>
        <div class="date">2023.01.01</div>
        <div class="payment">카드결제</div>
        <div class="card">현대카드</div>
      </div>

      <div class="list">
        <div class="item">상권 지역플러스+</div>
        <div class="cost">000,000,000원</div>
        <div class="name">홍길동</div>
        <div class="date">2023.01.01</div>
        <div class="payment">카드결제</div>
        <div class="card">현대카드</div>
      </div>

      <div class="list cost-sub">
        <div class="item">분양 등록권</div>
        <div class="cost">
          000,000,000원
          <span class="sub">(000,000원 + 옵션 000,000원)</span>
        </div>
        <div class="name">홍길동</div>
        <div class="date">2023.01.01</div>
        <div class="payment">카드결제</div>
        <div class="card">현대카드</div>
      </div>
    </article>

    <article v-else class="mobile-list-wrapper">
      <div class="list">
        <div class="flex">
          <div class="item">프리미엄 멤버십</div>
          <div class="cost">000,000,000원</div>
        </div>
        <div class="flex">
          <div class="name">홍길동</div>
          <div class="sub">2023.01.01 · 카드결제(현대카드)</div>
        </div>
      </div>

      <div class="list">
        <div class="flex">
          <div class="item">상권 지역플러스+</div>
          <div class="cost">000,000,000원</div>
        </div>
        <div class="flex">
          <div class="name">홍길동</div>
          <div class="sub">2023.01.01 · 카드결제(현대카드)</div>
        </div>
      </div>

      <div class="list cost-sub">
        <div class="flex">
          <div class="item">분양 등록권</div>
          <div class="cost">
            000,000,000원
            <span class="sub">(000,000원 + 옵션 000,000원)</span>
          </div>
        </div>
        <div class="flex">
          <div class="name">홍길동</div>
          <div class="sub">2023.01.01 · 카드결제(현대카드)</div>
        </div>
      </div>
    </article>

    <article class="page-num-wrapper">
      <div class="page-num">
        <img src="../../../assets/button/page_prev.png" alt="이전" />
        <div :class="{ selectPage: pageNum === 1 }" @click="pageNum = 1">1</div>
        <div :class="{ selectPage: pageNum === 2 }" @click="pageNum = 2">2</div>
        <img src="../../../assets/button/page_next.png" alt="다음" />
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useWindowStore } from '../../../store/window'

const windowStore = useWindowStore()
const { getDevice } = storeToRefs(windowStore)

const pageNum = ref<number>(1)
</script>

<style lang="scss" scoped>
@import '@/scss/main';
.all-list {
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

  .list-wrapper {
    .name-wrapper {
      height: 50px;
      display: flex;
      justify-content: center;
      gap: 30px;
      background-color: #eceff5;
      border-radius: 10px;

      div {
        width: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        color: $fontMain;
        font-weight: 500;
      }
    }

    .list {
      height: 50px;
      display: flex;
      justify-content: center;
      gap: 30px;

      div {
        width: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid $sectionLine;
      }

      .item,
      .cost,
      .name,
      .payment {
        font-size: 14px;
        color: $fontMain;
      }

      .date,
      .card {
        font-size: 14px;
        color: $fontSub;
      }
    }

    .cost-sub {
      height: 80px;

      .cost {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .sub {
          font-size: 12px;
          color: $fontSub;
        }
      }
    }
  }

  .page-num-wrapper {
    width: 100%;
    padding-top: 55px;
    display: flex;
    justify-content: center;

    .page-num {
      display: flex;
      align-items: center;
      gap: 8px;

      img {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }

      div {
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        cursor: pointer;
      }

      .selectPage {
        background-color: $mainColor;
        color: white;
        border-radius: 50px;
      }
    }
  }
}

@include mobile {
  .all-list {
    .top-wrapper {
      padding: 30px 24px;

      .name,
      .count {
        font-size: 12px;
      }
    }

    .mobile-list-wrapper {
      .list {
        color: $fontMain;
        border-bottom: 10px solid #fafafa;

        .flex {
          display: flex;

          &:first-child {
            height: 58px;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid $iconLine;
            margin: 0 24px;

            .item {
              font-size: 15px;
            }

            .cost {
              font-size: 15px;
              font-weight: 500;
            }
          }

          &:nth-child(2) {
            flex-direction: column;
            gap: 10px;
            padding: 20px 24px;

            .name {
              font-size: 14px;
            }

            .sub {
              font-size: 12px;
              color: $fontSub;
            }
          }
        }
      }

      .cost-sub {
        .flex {
          &:first-child {
            height: 86px;
            padding-top: 20px;
            box-sizing: border-box;
            align-items: flex-start;

            .cost {
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              gap: 10px;

              .sub {
                font-size: 13px;
                color: $fontSub;
                font-weight: 400;
              }
            }
          }
        }
      }
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
