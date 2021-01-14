<template>
  <div class="section2">
    <div class="bottom"></div>
    <div class="title" data-aos="fade" data-aos-delay="400">用最真誠的心<br />為台灣房市注入一份<br v-if="isMobile" />勇於前進的信念</div>
    <div class="subtitle" data-aos="fade" data-aos-delay="600">
      對於銷售的偏執，我們絕不妥協<br />對於客戶，以真誠款待......................
    </div>
    <img src="./s2/title.png" :alt="`${info.caseName}_關於得幫廣告`" class="title-img" data-aos="fade-right" data-aos-delay="100">
    <img src="./s2/icon.png" :alt="`${info.caseName}_icon`" class="icon" data-aos="fade" data-aos-delay="400">
    <img src="./s2/more.png" :alt="`${info.caseName}_more`" class="btn" @click="$router.push('/about')" data-aos="fade" data-aos-delay="600">
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: size(680);
  // overflow: hidden;
  position: relative;
  background: #008fbb;
  background-size: auto;
  z-index: 1;
}

.bg-img {
  width: size(1920);
  height: auto;
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

.title {
  @include div_r_pc(974, 176, 100, 177);
  font-size: size(57.2);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.61;
  letter-spacing: size(3.94);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle {
  @include div_r_pc(652, 96, 350, 499);
  font-size: size(23);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.89;
  letter-spacing: size(1.84);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;

  span {
    font-size: size(27);
    color: #ff8200;
  }
}

.title-img {
  @include img_l_pc(509, 118, 170);
}

.icon {
  @include img_r_pc(544, 116, 207);
}

.btn {
  @include img_r_pc(217, 392, 175);
  cursor: pointer;
}

.bottom {
  @include div_r_pc(1920, 78, 0, 0);
  top: auto;
  bottom: size(-300);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: size(300) size(3020) 0 0;
  border-color: #008fbb transparent transparent transparent;
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
    min-height: sizem(544);
    max-height: sizem(812);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height: 100%;
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

  .title {
    @include div_r_m(162, 77, 310, 180);
    font-size: sizem(17);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: sizem(1.17);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .subtitle {
    @include div_r_m(309, 96, 404, 33);
    font-size: sizem(17);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: sizem(1.17);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;

    span {
      font-size: size(27);
      color: #ff8200;
    }
  }

  .title-img {
    @include img_l_m(178, 95, 29);
  }

  .icon {
    @include img_r_m(310, 221, 32);
  }

  .btn {
    @include img_r_m(151, 471, 32);
    cursor: pointer;
  }

  .bottom {
    @include div_r_m(1920, 78, 0, 0);
    top: auto;
    bottom: size(-300);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: size(300) size(3020) 0 0;
    border-color: #008fbb transparent transparent transparent;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
// import slider from '@/mixins/slider.js'
// import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'section2',
  // mixins: [slider],

  // components: {
  //   Carousel3d,
  //   Slide,
  // },

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
