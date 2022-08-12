<template>
  <div class="footer">
    <img src="../assets/img/footerLogo.gif" alt="" /><!--
      <a href="https://www.h65.tw/admin/test/login.php" target="_blank">網頁製作</a>  -->
  </div>
</template>
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 40px;
  margin-bottom: 0px;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  position: relative;

  img {
    height:14px;
  }
  a {
    margin:0 .8em;
    color: #000;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
}

@media screen and (max-width: 767px) {
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
