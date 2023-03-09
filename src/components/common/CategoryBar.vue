<template>
  <section>
    <article class="top-wrapper">
      <div class="logo">
        <img src="../../assets/logo/logo_white.png" alt="로고" />
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
          src="../../assets/category/dash_active.png"
          alt="대시보드"
        />
        <img
          v-else
          @click="router.push('/dashboard')"
          src="../../assets/category/dash.png"
          alt="대시보드"
        />
      </div>

      <div
        class="category"
        :class="{ select: $route.path.includes('/traffic') }"
      >
        <img
          v-if="$route.path.includes('/traffic')"
          src="../../assets/category/traffic_active.png"
          alt="트래픽"
        />
        <img
          v-else
          @click="router.push('/traffic')"
          src="../../assets/category/traffic.png"
          alt="트래픽"
        />
      </div>

      <div class="category" :class="{ select: $route.path.includes('/sale/') }">
        <img
          v-if="$route.path.includes('/sale/')"
          src="../../assets/category/sale_active.png"
          alt="매출"
        />
        <img
          v-else
          @click="router.push('/sale/all')"
          src="../../assets/category/sale.png"
          alt="매출"
        />
        <div v-if="$route.path.includes('/sale/')" class="sub-category">
          <img
            v-if="$route.path.includes('/sale/all')"
            src="../../assets/category/sale_all_active.png"
            alt="전체매출"
          />
          <img
            v-else
            @click="router.push('/sale/all')"
            src="../../assets/category/sale_all.png"
            alt="전체매출"
          />
          <img
            v-if="$route.path.includes('/sale/detail')"
            src="../../assets/category/sale_detail_active.png"
            alt="상세매출"
          />
          <img
            v-else
            @click="router.push('/sale/detail')"
            src="../../assets/category/sale_detail.png"
            alt="상세매출"
          />
        </div>
      </div>

      <div
        class="category"
        :class="{ select: $route.path.includes('/member') }"
      >
        <img
          v-if="$route.path.includes('/member')"
          src="../../assets/category/member_active.png"
          alt="회원"
        />
        <img
          v-else
          @click="router.push('/member')"
          src="../../assets/category/member.png"
          alt="회원"
        />
      </div>

      <div class="category" :class="{ select: $route.path.includes('/user') }">
        <img
          v-if="$route.path.includes('/user')"
          src="../../assets/category/user_active.png"
          alt="사용자"
        />
        <img
          v-else
          @click="router.push('/user')"
          src="../../assets/category/user.png"
          alt="사용자"
        />
      </div>

      <div
        class="category"
        :class="{ select: $route.path.includes('/partner') }"
      >
        <img
          v-if="$route.path.includes('/partner')"
          src="../../assets/category/partner_active.png"
          alt="파트너"
        />
        <img
          v-else
          @click="router.push('/partner')"
          src="../../assets/category/partner.png"
          alt="파트너"
        />
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import router from '../../router'
</script>

<style lang="scss" scoped>
@import '@/scss/main';
section {
  background-color: $mainColor;
  width: 330px;
  height: 100vh;
  box-sizing: border-box;
  position: sticky;
  top: 0;

  .top-wrapper {
    padding: 80px 30px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

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
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .category {
      width: 270px;

      img {
        width: 300px;
        cursor: pointer;
      }

      .sub-category {
        padding: 0 15px 10px;
        img {
          width: 240px;
        }
      }
    }

    .select {
      background-color: white;
      border-radius: 10px;
    }
  }
}
</style>
