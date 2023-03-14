<template>
  <section class="detail-sale">
    <article class="top-wrapper">
      <div v-if="getDevice === 'pc'" class="title">상세 매출</div>
      <MobileHeader v-else title="상세 매출" />
    </article>

    <article class="filter-wrapper">
      <PeriodSet />
      <CategorySet />
      <Payment />
      <Search />
    </article>

    <article class="list-wrapper">
      <AllList v-if="selectCategory === 'all'" />
      <FranchiseList v-else-if="selectCategory === 'franchise'" />
      <RealtorList v-else-if="selectCategory === 'realtor'" />
      <SaleRentList v-else />
    </article>
  </section>
</template>

<script lang="ts" setup>
import MobileHeader from '../../common/MobileHeader.vue'
import PeriodSet from '../../common/filter/PeriodSet.vue'
import CategorySet from '../../common/filter/CategorySet.vue'
import Payment from '../../common/filter/Payment.vue'
import Search from '../../common/search/Search.vue'
import AllList from './AllList.vue'
import FranchiseList from './FranchiseList.vue'
import RealtorList from './RealtorList.vue'
import SaleRentList from './SaleRentList.vue'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useWindowStore } from '../../../store/window'

const windowStore = useWindowStore()
const { getDevice } = storeToRefs(windowStore)

const selectCategory = ref<string>('all')
</script>

<style lang="scss" scoped>
@import '@/scss/main';
.detail-sale {
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

  .filter-wrapper {
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

@include mobile {
  .detail-sale {
    padding: 0;

    .filter-wrapper {
      padding: 20px 0 30px;
      border-bottom: 10px solid #fafafa;
    }

    .list-wrapper {
      padding-bottom: 35px;
    }
  }
}
</style>
