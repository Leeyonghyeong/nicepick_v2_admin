<template>
  <section class="franchise-list">
    <article class="top-wrapper">
      <div class="name">{{ item }}</div>
      <div class="count">000,000개</div>
      <img
        @click="showItemModal = !showItemModal"
        src="../../../assets/button/arrow_down.png"
        alt="열기"
      />
    </article>

    <article class="list-wrapper">
      <div class="name-wrapper">
        <div>결제항목</div>
        <div>금액</div>
        <div>고객명</div>
        <div>결제일</div>
        <div>결제방법</div>
        <div>카드사</div>
      </div>

      <div class="list">
        <div class="item">분양·임대 전체</div>
        <div class="cost">
          000,000,000원
          <span class="sub">(000,000원 + 옵션 000,000원)</span>
        </div>
        <div class="name">홍길동</div>
        <div class="date">2023.01.01</div>
        <div class="payment">카드결제</div>
        <div class="card">현대카드</div>
      </div>

      <div class="list">
        <div class="item">분양·임대 전체</div>
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

    <article class="page-num-wrapper">
      <div class="page-num">
        <img src="../../../assets/button/page_prev.png" alt="이전" />
        <div :class="{ selectPage: pageNum === 1 }" @click="pageNum = 1">1</div>
        <div :class="{ selectPage: pageNum === 2 }" @click="pageNum = 2">2</div>
        <img src="../../../assets/button/page_next.png" alt="다음" />
      </div>
    </article>

    <article class="item-modal" v-if="showItemModal === true">
      <div class="item-wrapper">
        <div
          :class="{ selectItem: item === '분양·임대 전체' }"
          @click="item = '분양·임대 전체'"
        >
          분양·임대 전체
        </div>
        <div
          :class="{ selectItem: item === '분양 등록권' }"
          @click="item = '분양 등록권'"
        >
          분양 등록권
        </div>
        <div
          :class="{ selectItem: item === '임대 등록권' }"
          @click="item = '임대 등록권'"
        >
          임대 등록권
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const pageNum = ref<number>(1)
const item = ref<string>('분양·임대 전체')
const showItemModal = ref<boolean>(false)
</script>

<style lang="scss" scoped>
@import '@/scss/main';
.franchise-list {
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
      height: 80px;
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
</style>
