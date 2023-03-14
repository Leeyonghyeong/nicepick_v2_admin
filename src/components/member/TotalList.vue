<template>
  <section class="total-list">
    <article class="top-wrapper">
      <div class="name">전체</div>
      <div class="count">000,000명</div>
    </article>

    <article v-if="getDevice === 'pc'" class="list-wrapper">
      <div class="name-wrapper">
        <div>가입일</div>
        <div>회원구분</div>
        <div>회원명</div>
        <div>연락처</div>
        <div>이메일(아이디)</div>
        <div>비고</div>
      </div>

      <div class="list">
        <div class="date">2023.01.01</div>
        <div class="category">개인</div>
        <div class="name">홍길동</div>
        <div class="phone">01012345678</div>
        <div class="email">abc123@gmail.com</div>
        <div class="note">-</div>
      </div>

      <div class="list">
        <div class="date">2023.01.01</div>
        <div class="category">파트너(프랜차이즈)</div>
        <div class="name">홍길동</div>
        <div class="phone">01012345678</div>
        <div class="email">abc123@gmail.com</div>
        <div class="note">탈퇴</div>
      </div>
    </article>

    <article v-else class="mobile-list-wrapper">
      <div class="list">
        <div class="flex">
          <div class="category">개인</div>
          <div class="date">가입일 2023.01.01</div>
        </div>
        <div class="flex">
          <div class="name">홍길동</div>
          <div class="phone">01012345678</div>
          <div class="email">abc123@gmail.com</div>
          <div class="note">-</div>
        </div>
      </div>

      <div class="list">
        <div class="flex">
          <div class="category">파트너(프랜차이즈)</div>
          <div class="date">가입일 2023.01.01</div>
        </div>
        <div class="flex">
          <div class="name">홍길동</div>
          <div class="phone">01012345678</div>
          <div class="email">abc123@gmail.com</div>
          <div class="note">탈퇴</div>
        </div>
      </div>
    </article>

    <article class="page-num-wrapper">
      <div class="page-num">
        <img src="../../assets/button/page_prev.png" alt="이전" />
        <div :class="{ selectPage: pageNum === 1 }" @click="pageNum = 1">1</div>
        <div :class="{ selectPage: pageNum === 2 }" @click="pageNum = 2">2</div>
        <img src="../../assets/button/page_next.png" alt="다음" />
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useWindowStore } from '../../store/window'

const windowStore = useWindowStore()
const { getDevice } = storeToRefs(windowStore)

const pageNum = ref<number>(1)
</script>

<style lang="scss" scoped>
@import '@/scss/main';
.total-list {
  .top-wrapper {
    height: 20px;
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
      background-color: #eceff5;
      border-radius: 10px;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        font-weight: 500;
        color: $fontMain;

        &:first-child,
        &:nth-child(3) {
          width: 130px;
        }

        &:nth-child(2),
        &:nth-child(4) {
          width: 200px;
        }

        &:nth-child(5) {
          width: 300px;
        }

        &:last-child {
          width: 310px;
        }
      }
    }

    .list {
      padding: 16px 0;
      display: flex;
      border-bottom: 1px solid $sectionLine;
      box-sizing: border-box;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: $fontMain;

        &:first-child,
        &:nth-child(3) {
          width: 130px;
        }

        &:nth-child(2),
        &:nth-child(4) {
          width: 200px;
        }

        &:nth-child(5) {
          width: 300px;
        }

        &:last-child {
          width: 310px;
        }

        &:first-child,
        &:last-child {
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
  .total-list {
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
            padding: 20px 0 10px;
            margin: 0 24px;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid $iconLine;
            font-size: 12px;
            color: $fontSub;
          }

          &:nth-child(2) {
            flex-direction: column;
            gap: 10px;
            padding: 10px 24px 20px;
            font-size: 14px;

            .name {
              font-size: 16px;
              font-weight: 600;
            }

            .note {
              color: $fontSub;
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
