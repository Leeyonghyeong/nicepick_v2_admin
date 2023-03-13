<template>
  <section>
    <article class="payment-list">
      <div class="name-wrapper">
        <div class="name">항목</div>
        <div class="name">건수</div>
        <div class="name">금액</div>
      </div>

      <div class="list-wrapper">
        <div class="list">
          <div class="name">프리미엄 멤버십</div>
          <div class="count">100</div>
          <div class="cost">000,000,000원</div>
        </div>

        <div class="list">
          <div class="name">프리미엄 멤버십</div>
          <div class="count">100</div>
          <div class="cost">000,000,000원</div>
        </div>
      </div>

      <div class="total">
        <div class="name">합계</div>
        <div class="count">1,000</div>
        <div class="cost">000,000,000원</div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/scss/main';
.payment-list {
  .name-wrapper {
    height: 50px;
    background-color: #eceff5;
    display: flex;
    align-items: center;
    border-radius: 10px;

    .name {
      width: 520px;
      text-align: center;
      font-size: 15px;
      color: $fontMain;
      font-weight: 500;

      &:nth-child(2) {
        width: 230px;
      }
    }
  }

  .list-wrapper {
    .list {
      height: 50px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      border-bottom: 1px solid $sectionLine;
      text-align: center;

      &:last-child {
        border-bottom: none;
      }

      .name,
      .cost {
        width: 520px;
        font-size: 14px;
        color: $fontMain;
      }

      .count {
        width: 230px;
        font-size: 14px;
        color: $fontSub;
      }
    }
  }

  .total {
    height: 60px;
    display: flex;
    align-items: center;
    border-top: 1px solid $fontMain;

    div {
      font-size: 18px;
      color: $fontMain;
      font-weight: 600;
      text-align: center;
    }

    .name,
    .cost {
      width: 520px;
    }

    .count {
      width: 230px;
    }
  }
}

@include mobile {
  .payment-list {
    padding: 0 24px 80px;

    .name-wrapper {
      display: flex;
      justify-content: space-between;
      gap: 7px;

      .name {
        width: 100%;
        font-size: 12px;

        &:nth-child(2) {
          width: 100%;
        }
      }
    }

    .list-wrapper {
      .list {
        height: 50px;

        .name,
        .cost,
        .count {
          width: 100%;
          font-size: 12px;
        }
      }
    }

    .total {
      height: 50px;

      div {
        font-size: 14px;
      }

      .name,
      .cost,
      .count {
        width: 100%;
      }
    }
  }
}
</style>
