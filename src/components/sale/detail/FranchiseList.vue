<template>
  <section class="franchise-list">
    <article class="top-wrapper">
      <div class="name">프랜차이즈 전체</div>
      <div class="count">000,000개</div>
      <img src="../../../assets/button/arrow_down.png" alt="열기" />
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
        <div class="item">프리미엄 멤버십</div>
        <div class="cost">000,000,000원</div>
        <div class="name">홍길동</div>
        <div class="date">2023.01.01</div>
        <div class="payment">카드결제</div>
        <div class="card">현대카드</div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/scss/main';
.franchise-list {
  .top-wrapper {
    display: flex;
    align-items: center;

    img {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }

  .list-wrapper {
    .name-wrapper {
    }
  }
}
</style>
