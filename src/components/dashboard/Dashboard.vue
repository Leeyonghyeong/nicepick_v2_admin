<template>
  <section class="dashboard">
    <article class="dashboard-wrapper">
      <div v-if="getDevice === 'pc'" class="title">대시보드</div>
      <MobileHeader v-else title="대시보드" />

      <div class="box-wrapper">
        <div class="box">
          <div class="name">총 매출</div>
          <div class="count">000,000,000,000원</div>
        </div>
        <div class="box">
          <div class="left-wrapper">
            <div class="name">개인 회원</div>
            <div class="count">
              <span class="point">3</span> <span class="regular">/</span> 1,226
              <span class="sub">명</span>
            </div>
          </div>
          <div class="border">
            <img src="../../assets/dashboard/line.png" alt="구분선" />
          </div>
          <div class="right-wrapper">
            <div class="name">파트너 회원</div>
            <div class="count">
              <span class="point">5</span> <span class="regular">/</span> 134
              <span class="sub">명</span>
            </div>
          </div>
        </div>

        <div class="mobile-wrapper">
          <div class="box">
            <div class="name">브랜드 MATCH</div>
            <div class="count">
              <span class="point">5</span> <span class="regular">/</span> 24
              <span class="sub">건</span>
            </div>
          </div>
          <div class="box">
            <div class="name">미가입 브랜드 문의</div>
            <div class="count">
              <span class="point">3</span> <span class="regular">/</span> 250
              <span class="sub">건</span>
            </div>
          </div>
        </div>
      </div>
    </article>

    <CommunityNewPost class="community-post" />
  </section>
</template>

<script lang="ts" setup>
import CommunityNewPost from '../../components/dashboard/CommunityNewPost.vue'
import MobileHeader from '../common/MobileHeader.vue'
import { storeToRefs } from 'pinia'
import { useWindowStore } from '../../store/window'

const windowStore = useWindowStore()
const { getDevice } = storeToRefs(windowStore)
</script>

<style lang="scss" scoped>
@import '@/scss/main';
.dashboard {
  padding: 100px 160px 0;
  box-sizing: border-box;

  .dashboard-wrapper {
    margin-bottom: 80px;

    .title {
      font-size: 24px;
      color: $fontMain;
      font-weight: 500;
      margin-bottom: 50px;
    }

    .box-wrapper {
      display: flex;
      gap: 30px;

      .box {
        width: 360px;
        height: 130px;
        border: 1px solid $iconLine;
        border-radius: 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .name {
          color: $fontSub;
          margin-bottom: 10px;
        }

        .count {
          font-size: 24px;
          color: $fontMain;
          font-weight: 600;

          .point {
            color: $mainColor;
          }
          .regular {
            font-weight: 400;
          }
          .sub {
            font-size: 18px;
            font-weight: 400;
          }
        }

        &:nth-child(2) {
          flex-direction: row;

          div {
            text-align: center;
          }

          .left-wrapper,
          .right-wrapper {
            width: 50%;
          }
        }
      }

      .mobile-wrapper {
        display: flex;
        gap: 30px;

        .box {
          &:first-child,
          &:last-child {
            width: 230px;
          }

          &:last-child {
            flex-direction: column;
            gap: 0;
          }
        }
      }
    }
  }
}

@include mobile {
  .dashboard {
    padding: 0;

    .dashboard-wrapper {
      margin-bottom: 60px;
      .box-wrapper {
        padding: 30px 24px 0;
        flex-direction: column;
        gap: 10px;

        .box {
          width: 100%;

          .count {
            font-size: 20px;
          }
        }

        .mobile-wrapper {
          gap: 8px;
        }
      }
    }

    .community-post {
      padding: 0 24px 60px;
    }
  }
}
</style>
