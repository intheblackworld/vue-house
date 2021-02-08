<template>
  <div class="footer">
  廣告銷售:<a href="https://debang.tw/" target="_blank"><img class="i" src="../projects/jiman/mo/c/dblogo.png" alt="廣告銷售" /></a>
  廣告企劃:<img src="../projects/jiman/mo/c/logo2.png" alt="廣告企劃" class="i" />
  <a href="https://www.h35.tw/admin/test/login.php" target="_blank">網頁製作</a>:<a href="https://www.lixin.com.tw/" target="_blank"><img src="../projects/jiman/mo/footerLogo.gif" alt="立炘數位" /></a>
     
  </div>
</template>
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 40px;
  margin-bottom: 0px;
  background: #b43f36;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.4;
  font-size: 12px;
  vertical-align: middle;
  letter-spacing: 0.02em;
  position: relative;
    color: rgba(255, 255, 255, 0.6);

  img {
    height: 1em;
    margin-right:0.5em;
    vertical-align: inherit;
  }
.i{opacity: 0.7;}
  p {
    margin-right: 15px;
    margin-bottom: 0;
    vertical-align: inherit;
  }

  a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    vertical-align: inherit;
  }
}

@media screen and (max-width: 767px) {
  .footer {
    margin-bottom: 63px;
  }
}

@media only screen and (max-width: 767px) {
  .footer {
    margin-bottom: 63px;
  }
}
</style>

<script>
export default {
  name: 'adminFooter',
  components: {},

  methods: {},
}
</script>
