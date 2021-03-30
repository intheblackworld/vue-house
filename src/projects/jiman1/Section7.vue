<template>
  <div class="section7">

    <div class="img0">
      <img src="./s7/07_img_0.jpg" :alt="`${info.caseName}_img`">
    <!-- <img src="./s7/07_img_1.jpg" :alt="`${info.caseName}_img`"><p>東京羽田機場</p>
    </div>
    <div class="img2">
    <img src="./s7/07_img_2.jpg" :alt="`${info.caseName}_img`"><p>關西空港</p></div>
    <div class="img3">
    <img src="./s7/07_img_3.jpg" :alt="`${info.caseName}_img`"><p>瀨戶大橋</p>
    -->
    </div>
    <img src="./s7/07_logo.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade-up" data-aos-delay="200">
    <img src="./s7/07_flower.png" :alt="`${info.caseName}_f`" class="f6" v-if="isPC">

    <div class="title" data-aos="fade-up" data-aos-delay="400">
      台北水岸第一次<br v-if="isMobile">日本國土開發營造商
    </div>
    <div class="desc" v-if="isPC" data-aos="fade-up" data-aos-delay="600">
      創立於1951年的JDC日本國土開發株式會社，以確實的工法技術與匠心獨具的營建方式，創造多項世界級重大建設而聞名於世。自慢藏，日本國土開發營造商獻給台北水岸第一次的純日系SRC鋼骨制震豪景觀邸，承襲70年日本血統的嚴謹職人自慢精工，結合SC及RC雙重優勢，CFT柱內灌漿，以高壓灌漿混凝土入鋼柱；採用最高10000psi高強度混凝土，水泥磅數超越法規標準；SA級鋼筋續接器，與捷運、高鐵、台北101享有同等規格的安全守護。日系精工，最高規格，打造台灣水岸最自慢的建築地標。<br /><br />
      【經典業績】<span>東京羽田機場、關西空港、瀨戶大橋、北陸新幹線、三井花園飯店</span>
    </div>
    <div class="desc" v-if="isMobile" data-aos="fade-up" data-aos-delay="600">
      創立於1951年的JDC日本國土開發株式會社，以創造多項世界級重大建設而聞名於世。自慢藏，日本國土開發營造商獻給台北水岸第一次的純日系SRC鋼骨制震豪景觀邸，承襲70年日本血統的嚴謹職人自慢精工，結合SC及RC雙重優勢，CFT柱內灌漿，最高10000psi高強度混凝土，SA級鋼筋續接器，與捷運、高鐵、台北101同等規格的安全守護。日系精工，最高規格，打造台灣水岸最自慢的建築地標。<br /><br />

      【經典業績】<span>東京羽田機場、關西空港
        瀨戶大橋、北陸新幹線、三井花園飯店</span>
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

.img1 ,
.img2 ,
.img3 {
  img{width: 100%}
  p{position: absolute;
  right: 0.5em;
  bottom: 0.5em;
  font-size: size(18);
  line-height: 1.6;
  color: #fff;
  text-shadow: 0 0 0.3em #000;
  z-index: 6;
  }
}
.img0 {
  @include img_l_pc(1190, 608, 394);
  z-index: 6;
  img{width: 100%
  }
}
.img1 {
  @include img_l_pc(595, 608, 394);
  z-index: 6;
  p{
  right:auto;
  left: 0.5em;
  }
}

.img2 {
  @include img_r_pc(595, 608, 319);
  z-index: 6;
  
}
.img3 {
  @include img_l_pc(1190, 1046, 394);
  z-index: 6;
  top: auto;
  bottom: 0;
  
}

.logo {
  @include img_r_pc(177, 96, 342);
  z-index: 6;
}

.title {
  @include img_l_pc(917, 77, 395);
  font-size: size(60);
  line-height: size(75.6);
  // letter-spacing: size(0.53);
  text-align: left;
  font-weight: 500;
  color: #d67f76;
  white-space: nowrap;
  z-index: 6;
}

.desc {
  @include img_l_pc(909, 189, 402);
  font-size: size(23);
  line-height:2;
  letter-spacing: 0.02em;
  text-align: justify;
  font-weight: 400;
  color: #000;
  // white-space: nowrap;
  z-index: 6;
  span {
    font-size: size(21);
    font-weight: 600;
  line-height:2;
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
    min-height: sizem(567.2 + 85.4);
    max-height: sizem(567.2 + 85.4);
    height: sizem(567.2 + 85.4);
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
.img0 {
  @include img_l_m(375, 0, 0);
    top: auto;
    bottom: 0;
  img{width: 100%}
}
  .img1 {
    @include img_l_m(186.7, 0, 0);
    top: auto;
    bottom: sizem(90.5);
  }

  .img2 {
    @include img_r_m(186.7, 0, 0);
    top: auto;
    bottom: sizem(90.5);
  }
  .img3 {
    @include img_l_m(375, 0, 0);
    top: auto;
    bottom: 0;
  }

  .logo {
    @include img_r_m(47.3, 17.2, 42.7);
  }

  .title {
    @include img_l_m(200, 29.7, 105.2);
    font-size: sizem(19.5);
    line-height: sizem(24.5);
    // letter-spacing: sizem(0.53);
    text-align: left;
    font-weight: 500;
    color: #d67f76;
    white-space: normal;
  }

  .desc {
    @include img_l_m(240, 94.5, 107.5);
    font-size: sizem(12.5);
    line-height: 1.9;
    span {
      font-size: sizem(12.5);
    }
  }

  .f6 {
    @include img_l_m(444, 34, 0);
    transform-origin: 0% 90%;
    transform: skewY(2deg);
    animation: flow1 4s 0s ease-in-out infinite alternate;
  }
  @keyframes flow1 {
    to {
      transform: skewY(0);
    }
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
