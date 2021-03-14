<template>
  <div class="section11">
    <div v-if="!isMobile">
      <img src="./s11/11_bg.jpg" :alt="`${info.caseName}_img`" class="bg-img">
      <img src="./s11/11_flower.png" :alt="`${info.caseName}_f3`" class="f10">
      <img src="./s11/11_house.png" :alt="`${info.caseName}_img`" class="house">
      <img src="./s11/11_text.png" :alt="`${info.caseName}_img`" class="text">
      <h3 class="title">
        見識越高 越是深藏不露
      </h3>
      <div class="content">
        <div class="content-title">
          羅斯福.汀洲路最自慢收藏
        </div>
        <div class="content-desc">
          敬邀山水知己及名流雅士  自慢珍藏
        </div>
      </div>
    </div>
    <div v-else>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section11 {
  width: 100%;
  height: size(1113);
  min-height: size(900);
  max-height: size(1113);
  // overflow: hidden;
  position: relative;
  background-size: auto;
  // background-color: #c07f76;
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

.f10 {
  @include img_l_pc(641, -550, -270);
  transform-origin: 0% 90%;
  transform: skewY(2deg);
  animation: flow1 4s 0s ease-in-out infinite alternate;
}
@keyframes flow1 {
  to {
    transform: skewY(0);
  }
}

.house {
  @include img_r_pc(851, 0, 153);
  top: auto;
  bottom: 0;
}

.text {
  @include img_l_pc(507, 591, 312);
}

.title {
  @include img_l_pc(638, 303, 246);
  font-size: size(67);
  line-height: size(80);
  letter-spacing: size(1.48);
  text-align: left;
  font-weight: 500;
  color: #000;
  white-space: nowrap;
}

.content {
  @include div_l_pc(625, 163, 398, 252);
  padding: size(17) size(26);
  border: 1px solid #000;
}

.content-title {
  font-size: size(50);
  line-height: size(62.2);
  // letter-spacing: size(2.44);
  text-align: center;
  font-weight: 800;
  color: #231815;
}

.content-desc {
  font-size: size(36.1);
  line-height: size(64.2);
  // letter-spacing: size(2.44);
  text-align: center;
  font-weight: 300;
  color: #cb7f76;
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
  .section11 {
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
  name: 'section11',

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
