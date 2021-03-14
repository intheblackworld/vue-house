<template>
  <div class="section7">
    <div v-if="!isMobile">
      <img src="./s7/07_img_1.jpg" :alt="`${info.caseName}_img`" class="img1">
      <img src="./s7/07_img_2.jpg" :alt="`${info.caseName}_img`" class="img2">
      <img src="./s7/07_img_3.jpg" :alt="`${info.caseName}_img`" class="img3">
      <img src="./s7/07_logo.png" :alt="`${info.caseName}_img`" class="logo">
      <img src="./s7/07_flower.png" :alt="`${info.caseName}_f`" class="f6">

      <div class="title">
        台北水岸第一次 日本國土開發營造
      </div>
      <div class="desc">
        創立於1951年的JDC日本國土開發株式會社，以確實的工法技術與匠心獨具的營建方式，創造多項世界級重大建設而聞名於世。自慢藏，日本國土開發獻給台北水岸第一次的純日系SRC鋼骨制震豪景觀邸，承襲70年日本血統的嚴謹職人自慢精工，結合SC及RC雙重優勢，CFT柱內灌漿，以高壓灌漿混凝土入鋼柱；採用最高10000psi高強度混凝土，水泥磅數超越法規標準；SA級鋼筋續接器，與捷運、高鐵、台北101享有同等規格的安全守護。日系精工，最高規格，打造台灣水岸最自慢的建築地標。<br /><br />
        【經典業績】<span>東京羽田機場、關西空港、瀨戶大橋、北陸新幹線、三井花園飯店</span>
      </div>
    </div>
    <div v-else>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: 100%;
  height: size(1046 + 270);
  min-height: size(1046 + 270);
  max-height: size(1046 + 270);
  // overflow: hidden;
  position: relative;
  background-size: auto;
  background-color: #fff;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;

  &:nth-child(1) {
    //  position: relative;
  }
}

.img1 {
  @include img_l_pc(592, 608, 394);
}

.img2 {
  @include img_r_pc(592, 608, 337);
}
.img3 {
  @include img_l_pc(1190, 1046, 394);
  top: auto;
  bottom: 0;
}

.logo {
  @include img_r_pc(177, 96, 342);
}

.title {
  @include img_l_pc(917, 77, 395);
  font-size: size(60);
  line-height: size(75.6);
  // letter-spacing: size(0.53);
  text-align: left;
  font-weight: 500;
  color: #c07f76;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(909, 189, 402);
  font-size: size(23);
  line-height: size(48);
  letter-spacing: size(0.83);
  text-align: left;
  font-weight: 400;
  color: #000;
  // white-space: nowrap;
  span {
    font-size: size(23);
    line-height: size(48);
    letter-spacing: size(0.76);
    text-align: left;
    font-weight: 600;
    color: #000;
  }
}

.f6 {
  @include img_l_pc(444, 34, 0);
  transform-origin: 0% 90%;
  transform: skewY(2deg);
  animation: flow1 4s 0s ease-in-out infinite alternate;
}
@keyframes flow1 {
  to {
    transform: skewY(0);
  }
}

@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section7 {
    width: 100vw;
    min-height: sizem(470);
    max-height: sizem(1337);
    height: sizem(1337);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: 100vw;
    height: 100%;
    min-height: size(900);
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;
    margin-top: 0;

    &:nth-child(1) {
      position: relative;
    }
  }
  .f3 {
    @include img_r_m(233, 418, 0);
    transform-origin: 100% 90%;
    transform: skewY(2deg);
    animation: flow1 3s 0s ease-in-out infinite alternate-reverse;
    z-index: 3;
  }

  .f4 {
    @include img_l_m(250, 0, 0);
    top: auto;
    bottom: sizem(-30);
    transform-origin: 0% 90%;
    animation: flow1 2.3s 0s ease-in-out infinite alternate;
    transform: skewY(2deg);
    z-index: 3;
  }
  .f5 {
    @include img_r_m(160, 0, 0);
    top: auto;
    bottom: sizem(-780);
    transform-origin: 100% 90%;
    animation: flow1 2.3s 0s ease-in-out infinite alternate;
    transform: skewY(3deg);
    z-index: 3;
    img {
      width: 100%;
      transform: scaleY(-1);
    }
  }

  .t1 {
    @include img_r_m(21.2, 70, 90);
  }
  .t2 {
    @include img_r_m(10.1, 305, 66);
  }
  .t3 {
    @include img_r_m(292, 934, 38);
  }
  .t4 {
    @include img_r_m(298, 610, 34);
    top: auto;
    bottom: sizem(185);
  }

  // .logo {
  //   @include img_r_m(479, 707, 310);
  // }

  .st1 {
    @include img_l_m(17, 128, 157);
  }

  .st2 {
    @include img_l_m(16, 128, 128);
  }

  .st3 {
    @include img_l_m(17, 128, 97);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section7',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
    }
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
