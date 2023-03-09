<template>
  <section class="franchise">
    <article class="month-qna-wrapper">
      <div class="wrapper">
        <div>
          <div class="name">창업픽 월간 방문자수</div>
          <input type="number" placeholder="0" />
        </div>
        <div>
          <div class="name">실시간 문의 건수</div>
          <input type="number" placeholder="0" />
        </div>
      </div>
    </article>

    <article class="day-wrapper">
      <div class="wrapper">
        <div class="name">요일별 분석</div>

        <div class="day-input-wrapper">
          <div>
            <div class="day">월</div>
            <input type="number" placeholder="0" />
          </div>
          <div>
            <div class="day">화</div>
            <input type="number" placeholder="0" />
          </div>
          <div>
            <div class="day">수</div>
            <input type="number" placeholder="0" />
          </div>
          <div>
            <div class="day">목</div>
            <input type="number" placeholder="0" />
          </div>
          <div>
            <div class="day">금</div>
            <input type="number" placeholder="0" />
          </div>
          <div>
            <div class="day">토</div>
            <input type="number" placeholder="0" />
          </div>
          <div>
            <div class="day">일</div>
            <input type="number" placeholder="0" />
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/scss/main';
.franchise {
  input {
    width: 360px;
    height: 50px;
    padding: 0 16px 0;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid $iconLine;
    text-align: right;
    font-size: 16px;
    font-family: $pre;
    color: $fontMain;
  }

  input::placeholder {
    font-size: 16px;
    font-family: $pre;
    color: $inputLine;
  }

  input::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  .month-qna-wrapper {
    padding: 40px 0;
    border-bottom: 1px solid $sectionLine;

    .wrapper {
      width: 620px;
      display: flex;
      flex-direction: column;
      gap: 30px;
      color: $fontMain;

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

  .day-wrapper {
    padding: 40px 0;

    .wrapper {
      width: 620px;
      display: flex;
      justify-content: space-between;
      color: $fontMain;

      .name {
        padding-top: 15px;
      }

      .day-input-wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;

        div {
          display: flex;
          align-items: center;
          gap: 30px;
        }
      }
    }
  }
}

@include mobile {
  .franchise {
    input {
      width: 100%;
    }

    .month-qna-wrapper {
      padding: 30px 24px;
      border-bottom: 10px solid #fafafa;

      .wrapper {
        width: 100%;

        div {
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          font-size: 14px;
        }
      }
    }

    .day-wrapper {
      padding: 30px 24px 0;

      .wrapper {
        width: 100%;
        flex-direction: column;

        .name {
          padding: 0 0 8px;
        }

        .day-input-wrapper {
          div {
            font-size: 14px;
          }

          .day {
            padding-left: 17px;
          }
        }
      }
    }
  }
}
</style>
