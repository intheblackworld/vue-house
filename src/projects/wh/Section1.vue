<template>
  <div class="section1">
    <div class="bg fullscreen" v-if="!isMobile">
      <!-- <img src="./s1/bg1.png" alt class="bg-img relative" data-aos="fade" data-aos-delay="600" /> -->

      <!-- 圖淡入
          立刻預約的按鈕點了連預約賞屋
          他的區塊 左邊59% 右邊41%
          除了淡入外有點難幫他做動畫
          看有沒有什麼比較簡單的特效
      可以加上去-->
      <div class="left">
        <img class="img" src="./s1/logo.png" alt />
        <img src="./s1/button.png" alt="" class="btn">
      </div>
      <div class="right">
        <img class="img" src="./s1/img1.jpg" alt />
      </div>
    </div>
    <div class="bg" v-else></div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  background-position: center;
  position: relative;
  height: 100vh;
  display: flex;
  overflow: hidden;
}
// .bg-img {
//   width: 100vw;
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   left: 0;
//   height: auto;
//   display: block;
//   object-fit: cover;
// }

.left {
  width: 59%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  .img {
    display: block;
    width: calc(100vw * 840 / 1920);
    height: auto;
  }

  .btn {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 3%;
    width: calc(100vw * 311 / 1920);
    cursor: pointer;
  }
}

.right {
  width: 41%;
  height: 100%;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
    // max-height: 177.5vw;\
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  mounted() {},

  computed: {},
}
</script>
