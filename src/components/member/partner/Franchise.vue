<template>
  <section class="franchise-list">
    <article v-if="getDevice === 'pc'" class="list-wrapper">
      <div class="name-wrapper">
        <div>가입일</div>
        <div>회원명</div>
        <div>연락처</div>
        <div>이메일(아이디)</div>
        <div>보유 브랜드</div>
        <div>브랜드명</div>
      </div>

      <div class="list">
        <div class="date">2023.01.01</div>
        <div class="name">홍길동</div>
        <div class="phone">01012345678</div>
        <div class="email">abc123@gmail.com</div>
        <div class="brand">1</div>
        <div class="brand-name">
          <p>크레이저커피(C.Razer Coffee)</p>
        </div>
      </div>

      <div class="list">
        <div class="date">2023.01.01</div>
        <div class="name">홍길동</div>
        <div class="phone">01012345678</div>
        <div class="email">abc123@gmail.com</div>
        <div class="brand">3</div>
        <div class="brand-name">
          <p>뚱삼이와 대삼이</p>
          <p>삼겹파티</p>
          <p>바우네 나주곰탕</p>
        </div>
      </div>
    </article>

    <article v-else class="mobile-list-wrapper">
      <div class="list">
        <div class="flex">
          <div class="category"></div>
          <div class="date">가입일 2023.01.01</div>
        </div>
        <div class="flex">
          <div class="name">홍길동</div>
          <div class="phone">01012345678</div>
          <div class="email">abc123@gmail.com</div>
          <div class="brand">
            보유 브랜드 1
            <div class="brand-name">
              <p>크레이저커피(C.Razer Coffee)</p>
            </div>
          </div>
        </div>
      </div>

      <div class="list">
        <div class="flex">
          <div class="category"></div>
          <div class="date">가입일 2023.01.01</div>
        </div>
        <div class="flex">
          <div class="name">홍길동</div>
          <div class="phone">01012345678</div>
          <div class="email">abc123@gmail.com</div>
          <div class="brand">
            보유 브랜드 3
            <div class="brand-name">
              <p>뚱삼이와 대삼이</p>
              <p>삼겹파티</p>
              <p>바우네 나주곰탕</p>
            </div>
          </div>
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

.franchise-list {
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
        &:nth-child(2) {
          width: 130px;
        }

        &:nth-child(3),
        &:nth-child(5) {
          width: 200px;
        }

        &:nth-child(4) {
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
        &:nth-child(2) {
          width: 130px;
        }

        &:nth-child(3),
        &:nth-child(5) {
          width: 200px;
        }

        &:nth-child(4) {
          width: 300px;
        }

        &:last-child {
          width: 310px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        &:first-child {
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
  .franchise-list {
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
            padding: 20px 24px;
            font-size: 14px;

            .name {
              font-size: 16px;
              font-weight: 600;
            }

            .brand {
              border-top: 1px solid $sectionLine;
              padding-top: 10px;
              display: flex;
              flex-direction: column;
              gap: 15px;
              font-size: 12px;
              color: $fontSub;

              .brand-name {
                display: flex;
                flex-direction: column;
                gap: 10px;
                font-size: 14px;
                color: $fontMain;
              }
            }
          }
        }
      }
    }

    .page-num-wrapper {
      padding-top: 35px;
    }
  }
}
</style>
