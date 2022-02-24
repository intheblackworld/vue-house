<template>
  <div class="login-hint flex-c">
    <div class="content">
      對不起，您沒有權限瀏覽此頁面<br />
      請先<a href="/login">登入</a><br />
      如需有加入會員需求,歡迎聯絡專員,由專人為您服務
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessengerDialog',
  components: {},
  props: ['link', 'address'],
  data() {
    return {
      window,
    }
  },

  methods: {},
}
</script>


<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.login-hint {
  padding: size(70) 0;
  @include md {

  }
}
.content {
  font-size: size(21);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.1;
  letter-spacing: size(4.58);
  text-align: center;
  color: #323333;

  @include md {
    font-size: sizem(20);
  }

  a {
    color: #c59c63;
  }

  @include md {

  }
}
</style>
