<template>
  <div class="section1">
    <div class="bg fullscreen relative">
      <div class="container">
        <img src="./s1_logo.png" alt class="logo" />
        <div class="subtitle">HEALTHY LIFESTYLE</div>
        <div class="title">捷運 ｜  森活  ｜  校園</div>
        <div class="desc">1180萬起 買捷運2房</div>
        <div class="desc">景觀3房 訂簽180萬起</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s1_bg.jpg');
  background-size: cover;
}

.container {
  width: 750px;
  margin: 0 auto;
}

.logo {
  width: 100%;
  margin: 0 auto;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s1_bg.jpg');
    background-size: cover;
  }
}
</style>

<script>
// @ is an alias to /src

export default {
  name: 'section1',

  data() {
    return {}
  },

  methods: {},

  created() {},
}
</script>
