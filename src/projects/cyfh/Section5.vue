<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        src="./s5/bg.jpg"
        alt=""
        class="bg-img"
      >
      <h3 class="title absolute">全陽深耕40載</h3>
      <h3 class="subtitle absolute">打造更值得您引以為傲的士林</h3>
      <hr class="divide absolute">
      <div class="desc absolute">全陽建設榮耀故土鄉里，重磅回歸士林天母，沿著中山北路樹海，<br />
        側身越過綠廊穿堂、雙溪堤岸一彎靚水，在芝山岩前夜夜點亮萬家燈火，<br />
        將最高質感品味注入士林的無限未來，打造更值得您引以為傲的士林！
      </div>

      <img src="./s6/img.png" alt="" class="img absolute">
    </div>
    <div v-if="isMobile">

    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  // overflow: hidden;
  position: relative;
  //height: 100vh;
}

.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;
  &:first-child {
    position: relative;
    margin-top: size(-400);
    mix-blend-mode: darken;
  }
}

.title {
  font-size: size(49);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: #ffffff;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
  text-align: center;
  top: size(700 + 400);
}

.subtitle {
  font-size: size(30);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: 21.87px;
  text-align: center;
  color: #ffffff;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
  text-align: center;
  top: size(770 + 400);
}

.divide {
  width: size(895);
  height: 2px solid;
  background-color: #fff;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
  top: size(840 + 400);
}

.desc {
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: 2.39px;
  text-align: center;
  color: #ffffff;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
  text-align: center;
  top: size(880 + 400);
}

.img {
  width: size(963);
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
  top: size(1100 + 400);
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .relative {
    margin: 0 0 0 0;
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

  created() {},

  mounted() {},

  computed: {},
}
</script>
