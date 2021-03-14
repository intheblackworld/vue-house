<template>
  <div class="section2">
    <div v-if="!isMobile">
      <img src="./s2/02_flower_l.png" :alt="`${info.caseName}_f3`" class="f3">
      <img src="./s2/02_img.jpg" :alt="`${info.caseName}_img`" class="img">
      <h3 class="title">
        「 我不是收藏家，我就是一座美術館。」
      </h3>
      <div class="subtitle">
        紐約名門收藏家 佩姬‧古根漢
      </div>
      <div class="desc">
        懂收藏的人，有旁人難及的自豪氣概<br />
        自豪於收藏從不看價格，而是看故事<br />
        罐裡的玻璃彈珠，藏著孩提時的單純快樂<br />
        整頁護貝的球員卡，藏著昂揚熱血的青春<br />
        滿櫃名錶的價值，在於留藏難以復返的時間<br />
        若問其中最引以為傲的藏品<br />
        莫過一席水岸豪景，典藏了成功人生的自慢閱歷
      </div>
    </div>
    <div v-else>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: 100%;
  height: size(1080);
  min-height: size(900);
  max-height: size(1080);
  // overflow: hidden;
  position: relative;
  background-size: auto;
  background-color: #c07f76;
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

.f3 {
  @include img_l_pc(1100, -350, -530);
  transform-origin: 0% 90%;
  transform: skewY(2deg);
  animation: flow1 4s 0s ease-in-out infinite alternate;
}
@keyframes flow1 {
  to {
    transform: skewY(0);
  }
}

.img {
  @include img_l_pc(1920, 0, 0);
  top: auto;
  bottom: 0;
}

.title {
  @include img_l_pc(917, 243, 241);
  font-size: size(53.1);
  line-height: size(55.6);
  letter-spacing: size(2.44);
  text-align: left;
  font-weight: 300;
  color: #000;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(406, 314, 727);
  font-size: size(30.7);
  line-height: size(49.6);
  // letter-spacing: size(2.44);
  text-align: left;
  font-weight: 400;
  color: #000;
  white-space: nowrap;
}

.desc {
  @include img_r_pc(618, 98, 48);
  font-size: size(23);
  line-height: size(57.2);
  // letter-spacing: size(2.44);
  text-align: left;
  font-weight: 400;
  color: #fff;
  white-space: nowrap;
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
  .section2 {
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
  name: 'section2',

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
