<template>
  <section>
    <article class="title-wrapper">
      <div class="title">창업톡 신규 게시글</div>
      <div class="all">전체보기</div>
    </article>

    <article class="new-post-wrapper">
      <div class="post">
        <div class="content">
          [창업준비중] 몇달을 가게자리 알아보다 때마침 신축 빌딩이 있어 괜찮은
          금액으로 임대계약 후 오픈했었습니다. 나름 자신있는 메뉴였고 마케팅도
          블로그랑 인스*등등 ...
        </div>
        <div class="date">2023.01.03</div>
      </div>
      <div class="post">
        <div class="content">
          [자유Talk] 얼마전 전에 다니던 회사 동기모임 다녀와보니 다들 반찬은
          구독하고 있더라구요. ...
        </div>
        <div class="date">2023.01.02</div>
      </div>
      <div class="post">
        <div class="content">
          [오늘 우리 매장은] 창업하신 후 꼭 노란우산공제 가입하세요. ...
        </div>
        <div class="date">2023.01.01</div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/scss/main';
section {
  .title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 20px;

    .title {
      font-size: 18px;
      color: $fontMain;
      font-weight: 500;
    }

    .all {
      font-size: 14px;
      color: $fontSub;
      cursor: pointer;
    }
  }

  .new-post-wrapper {
    background-color: #fafafa;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    .post {
      display: flex;
      justify-content: space-between;
      gap: 30px;
      line-height: 20px;

      .content {
        font-size: 15px;
        color: $fontMain;
        font-weight: 300;
        display: inline-block;
        width: 980px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .date {
        font-size: 13px;
        color: $fontSub;
      }
    }
  }
}

@include mobile {
  section {
    .title-wrapper {
      .title {
        font-size: 16px;
      }

      .all {
        font-size: 12px;
      }
    }

    .new-post-wrapper {
      padding: 20px;
      gap: 20px;
      .post {
        flex-direction: column;
        align-items: flex-end;
        gap: 10px;

        .content {
          font-size: 13px;
          width: 100%;
          white-space: normal;
          word-wrap: break-word;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>
