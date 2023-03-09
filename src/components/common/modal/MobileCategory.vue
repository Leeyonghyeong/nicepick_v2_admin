<template>
  <section class="mobile-category">
    <div class="modal-wrapper">
      <article class="top-wrapper">
        <div class="close">
          <img
            src="../../../assets/button/close.png"
            @click="$emit('showAndCloseCategory')"
            alt="닫기"
          />
        </div>

        <div class="logo">
          <img src="../../../assets/logo/logo_white.png" alt="로고" />
        </div>

        <div class="name">samhwa_administrator</div>

        <div class="logout">
          <button>로그아웃</button>
        </div>
      </article>

      <article class="category-wrapper">
        <div
          class="category"
          :class="{ select: $route.path.includes('/dashboard') }"
        >
          <img
            v-if="$route.path.includes('/dashboard')"
            src="../../../assets/category/mob/dash_active.png"
            alt="대시보드"
          />
          <img
            v-else
            @click="$router.push('/dashboard')"
            src="../../../assets/category/mob/dash.png"
            alt="대시보드"
          />
        </div>
        <div
          class="category"
          :class="{ select: $route.path.includes('/traffic') }"
        >
          <img
            v-if="$route.path.includes('/traffic')"
            src="../../../assets/category/mob/traffic_active.png"
            alt="트래픽"
          />
          <img
            v-else
            @click="$router.push('/traffic')"
            src="../../../assets/category/mob/traffic.png"
            alt="트래픽"
          />
        </div>
        <div
          class="category"
          :class="{ select: $route.path.includes('/sale') }"
        >
          <img
            v-if="$route.path.includes('/sale')"
            src="../../../assets/category/mob/sale_active.png"
            alt="매출"
          />
          <img
            v-else
            @click="$router.push('/sale')"
            src="../../../assets/category/mob/sale.png"
            alt="매출"
          />
          <img
            v-if="$route.path.includes('/sale')"
            src="../../../assets/category/mob/close.png"
            class="button"
            alt="닫기"
          />
          <img
            v-else
            src="../../../assets/category/mob/open.png"
            class="button"
            alt="열기"
          />
        </div>
        <div
          class="category"
          :class="{ select: $route.path.includes('/member') }"
        >
          <img
            v-if="$route.path.includes('/member')"
            src="../../../assets/category/mob/member_active.png"
            alt="회원"
          />
          <img
            v-else
            @click="$router.push('/member')"
            src="../../../assets/category/mob/member.png"
            alt="회원"
          />
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineEmits<{
  (e: 'showAndCloseCategory'): void
}>()
</script>

<style lang="scss" scoped>
@import '@/scss/main';
.mobile-category {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: $mainColor;

  .modal-wrapper {
    width: 100%;
    height: 100%;

    .top-wrapper {
      width: 100%;
      padding: 110px 0 50px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;

      .close {
        position: absolute;
        top: 15px;
        left: 24px;
        img {
          width: 30px;
          cursor: pointer;
        }
      }

      .logo {
        margin-bottom: 50px;
        img {
          width: 151px;
          height: 22px;
        }
      }

      .name {
        margin-bottom: 10px;
        font-size: 14px;
        color: white;
      }

      .logout {
        button {
          background-color: transparent;
          border: 1px solid white;
          border-radius: 50px;
          padding: 6px 10px;
          font-size: 12px;
          font-family: $pre;
          color: white;
          cursor: pointer;
        }
      }
    }

    .category-wrapper {
      padding: 0 24px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .category {
        width: 100%;
        height: 50px;
        border-radius: 10px;
        img {
          width: 293px;
        }

        &:nth-child(3) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .button {
            width: 20px;
            height: 20px;
            cursor: pointer;
          }
        }
      }

      .select {
        background-color: white;
      }
    }
  }
}
</style>
