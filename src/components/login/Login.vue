<template>
  <section>
    <article class="wrapper">
      <div class="logo">
        <img src="../../assets/logo/logo_white.png" alt="로고" />
      </div>

      <div class="input">
        <input type="text" placeholder="아이디 입력" />
        <input type="password" placeholder="비밀번호 입력" />
      </div>

      <div class="login">
        <button>로그인</button>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/scss/main';
section {
  background-color: $mainColor;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;

  .wrapper {
    width: 328px;
    margin-top: 328px;
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

    .input {
      width: 100%;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      input {
        height: 50px;
        border-radius: 10px;
        border: none;
        font-family: $pre;
        font-size: 16px;
        color: $fontMain;
        padding-left: 16px;
      }
      input::placeholder {
        color: $inputLine;
      }
    }

    .login {
      width: 100%;
      button {
        width: 100%;
        height: 50px;
        border-radius: 10px;
        border: none;
        background-color: $button;
        color: white;
        font-family: $pre;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
}

@include mobile {
  section {
    align-items: center;
    .wrapper {
      @include mobile-container();
      width: 100%;
      margin: 0;
    }
  }
}
</style>
