<template>
  <div class="footer">
    <img src="../assets/img/footerLogo.png" alt />
    <a href=" https://www.h35.tw/admin/test/login.php" target="_blank">網頁製作</a>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 40px;
  margin-bottom: 63px;
  background: #302626;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
    margin-right: 20px;
  }

  p {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
    margin-right: 15px;
    margin-bottom: 0;
  }

  a {
    font-size: 12px;
    color: #fff;
    text-decoration: none;
  }
}

@media only screen and (max-width: 767px) {
}
</style>

<script>
export default {
  name: 'adminFooter',
  components: {},

  methods: {},
}
</script>
