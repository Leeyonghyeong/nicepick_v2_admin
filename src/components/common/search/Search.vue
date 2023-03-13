<template>
  <section class="search">
    <article class="wrapper">
      <div class="name">검색</div>

      <div class="input">
        <input type="text" placeholder="검색어 입력" />
      </div>

      <div class="button">
        <img src="../../../assets/button/search.png" alt="검색" />
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/scss/main';
.search {
  .wrapper {
    display: flex;
    align-items: center;

    .name {
      font-size: 15px;
      color: $fontMain;
    }

    .input {
      padding: 0 8px 0 74px;

      input {
        width: 211px;
        height: 40px;
        padding: 0 20px;
        box-sizing: border-box;
        border-radius: 10px;
        border: 1px solid $iconLine;
        font-size: 16px;
        font-family: $pre;
        color: $fontMain;
      }

      input::placeholder {
        font-size: 16px;
        font-family: $pre;
        color: $inputLine;
      }
    }

    .button {
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>
