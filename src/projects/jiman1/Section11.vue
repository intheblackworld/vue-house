<template>
  <div class="section11">
    <img src="./s11/11_bg.jpg" :alt="`${info.caseName}_img`" class="bg-img" v-if="isPC">
    <img src="./mobile/11/11_bg_m.jpg" :alt="`${info.caseName}_img`" class="bg-img" v-if="isMobile">
    <img src="./s11/11_flower.png" :alt="`${info.caseName}_f3`" class="f10" v-if="isPC">
    <img src="./mobile/11/11_flower_m.png" :alt="`${info.caseName}_f3`" class="f10" v-if="isMobile">
    <img src="./s11/11_house.png" :alt="`${info.caseName}_img`" class="house">
    <img src="./s11/11_text.png" :alt="`${info.caseName}_img`" class="text" data-aos="fade-up" data-aos-delay="400">
    <h3 class="title" data-aos="fade-up" data-aos-delay="200">
      見識越高 越是深藏不露
    </h3>
    <div class="content" data-aos="fade-up" data-aos-delay="600">
      <div class="content-title">
        羅斯福.汀洲路最自慢收藏
      </div>
      <div class="content-desc">
        敬邀山水知己及名流雅士 自慢珍藏
      </div>
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
  text-align: center;
  line-height: 1.4;
}

.content-title {
  font-size: size(50);
  font-weight: 800;
  color: #231815;
}

.content-desc {
  font-size: size(36.1);
  letter-spacing: 0.03em;
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
    min-height: sizem(825.7);
    max-height: sizem(825.7);
    height: sizem(825.7);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
    background-color: #fff;
  }

  .bg-img {
    width: 100vw;
    height: sizem(614);
    min-height: size(614);
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

  .f10 {
    @include img_l_m(327, 198, -80);
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
    @include img_c_m(303, 0);
    top: auto;
    bottom: 0;
  }

  .text {
    @include img_c_m(234, 200);
  }

  .title {
    @include img_c_m(295, 66.7);
    font-size: sizem(31.2);
    line-height: sizem(37.2);
    letter-spacing: sizem(0.69);
    text-align: left;
    font-weight: 500;
    color: #000;
    white-space: nowrap;
  }

  .content {
    @include div_c_m(289.2, 75.4, 111.7);
    padding: sizem(6) sizem(12);
    border: 1px solid #000;
  }

  .content-title {
    font-size: sizem(23.2);
    line-height: sizem(28.8);
    // letter-spacing: sizem(2.44);
    text-align: center;
    font-weight: 800;
    color: #231815;
    white-space: nowrap;
  }

  .content-desc {
    font-size: sizem(16.7);
    line-height: sizem(29.8);
    // letter-spacing: sizem(2.44);
    text-align: center;
    font-weight: 400;
    color: #cb7f76;
    white-space: nowrap;
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
