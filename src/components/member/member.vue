<template>
  <section class="member">
    <article class="top-wrapper">
      <div v-if="getDevice === 'pc'" class="title">회원 관리</div>
      <MobileHeader v-else title="회원 관리" />
    </article>

    <article class="category-box-wrapper">
      <div class="mobile-flex">
        <div
          :class="{ select: selectCategoryBox === 'total' }"
          @click="selectCategoryBox = 'total'"
          class="category-box"
        >
          <div class="name">TOTAL</div>
          <div class="count">000,000,000명</div>
        </div>
        <div
          :class="{ select: selectCategoryBox === 'user' }"
          @click="selectCategoryBox = 'user'"
          class="category-box"
        >
          <div class="name">개인회원</div>
          <div class="count">000,000명</div>
        </div>
      </div>
      <div class="mobile-flex">
        <div
          :class="{ select: selectCategoryBox === 'partner' }"
          @click="selectCategoryBox = 'partner'"
          class="category-box"
        >
          <div class="name">파트너 회원</div>
          <div class="count">000,000명</div>
        </div>
        <div
          :class="{ select: selectCategoryBox === 'withdrawal' }"
          @click="selectCategoryBox = 'withdrawal'"
          class="category-box"
        >
          <div class="name">탈퇴 회원</div>
          <div class="count">000,000명</div>
        </div>
      </div>
    </article>

    <article class="filter-wrapper">
      <PeriodSet />
      <NoNameSearch v-if="getDevice === 'pc'" />
      <Search v-else />
    </article>

    <article class="list-wrapper">
      <AllList v-if="selectCategoryBox === 'total'" />
      <UserList v-else-if="selectCategoryBox === 'user'" />
      <PartnerList v-else-if="selectCategoryBox === 'partner'" />
      <WithdrawalList v-else />
    </article>
  </section>
</template>

<script lang="ts" setup>
import MobileHeader from '../common/MobileHeader.vue'
import PeriodSet from '../common/filter/PeriodSet.vue'
import NoNameSearch from '../common/search/NoNameSearch.vue'
import Search from '../common/search/Search.vue'
import AllList from './TotalList.vue'
import UserList from './UserList.vue'
import PartnerList from './partner/PartnerList.vue'
import WithdrawalList from './WithdrawalList.vue'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useWindowStore } from '../../store/window'

const windowStore = useWindowStore()
const { getDevice } = storeToRefs(windowStore)

const selectCategoryBox = ref<string>('total')
</script>

<style lang="scss" scoped>
@import '@/scss/main';
.member {
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

  .category-box-wrapper {
    padding-bottom: 50px;
    display: flex;
    gap: 30px;
    border-bottom: 1px solid $sectionLine;

    .mobile-flex {
      width: 100%;
      display: flex;
      gap: 30px;

      .category-box {
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background-color: #fafafa;
        border-radius: 10px;
        color: $fontMain;
        cursor: pointer;

        .name {
          font-size: 15px;
        }

        .count {
          font-size: 18px;
          font-weight: 600;
        }
      }

      .select {
        background-color: #f5f7ff;
        box-shadow: 0 0 0 1px $mainColor inset;

        .count {
          color: $mainColor;
        }
      }
    }
  }

  .filter-wrapper {
    padding: 30px 0 50px;
    display: flex;
    justify-content: space-between;
  }
}

@include mobile {
  .member {
    padding: 0;

    .category-box-wrapper {
      padding: 20px 24px 30px;
      flex-direction: column;
      gap: 10px;
      border-bottom: 10px solid #fafafa;

      .mobile-flex {
        gap: 8px;

        .category-box {
          .name {
            font-size: 13px;
          }

          .count {
            font-size: 16px;
          }
        }
      }
    }

    .filter-wrapper {
      padding: 30px 0 20px;
      flex-direction: column;
      gap: 20px;
      border-bottom: 10px solid #fafafa;
    }

    .list-wrapper {
      padding-bottom: 35px;
    }
  }
}
</style>
