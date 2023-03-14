<template>
  <section class="search">
    <article class="wrapper">
      <div class="input-btn">
        <div class="input">
          <input type="text" placeholder="검색어 입력" />
        </div>

        <div class="button">
          <img src="../../../assets/button/search.png" alt="검색" />
        </div>
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

    .input-btn {
      display: flex;

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
          cursor: pointer;
        }
      }
    }
  }
}

@include mobile {
  .search {
    .wrapper {
      padding: 0 24px;
      gap: 13px;

      .input-btn {
        width: 100%;
        height: 40px;
        gap: 8px;

        .input {
          padding: 0;

          input {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
