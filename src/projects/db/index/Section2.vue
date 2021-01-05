<template>
  <div class="section2">
    <div class="bottom"></div>
    <div class="title">用最真誠的心<br />
      為台灣房市注入一份勇於前進的信念</div>
    <div class="subtitle">
      對於銷售的偏執，我們絕不妥協<br />對於客戶，以真誠款待......................
    </div>
    <img src="./s2/title.png" alt="" class="title-img">
    <img src="./s2/icon.png" alt="" class="icon">
    <img src="./s2/more.png" alt="" class="btn" @click="$router.push('/about')">
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
  border-color: #008fbb transparent transparent  transparent;
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
    min-height: sizem(584);
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
    @include div_r_m(375, 41, 72, 0);
    font-size: sizem(28);
  }

  .subtitle {
    @include div_r_m(375, 24, 120, 0);
    font-size: sizem(15);

    span {
      font-size: sizem(16);
    }
  }

  .btn {
    @include div_r_m(140, 37, 476, 117);
    font-size: sizem(18);
    &:hover {
      background-color: #444;
    }
  }

  .carousel-3d-container {
    z-index: 3 !important;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: sizem(200) !important;
  }

  .carousel-3d-item {
    // position: relative;

    &:hover,
    &.current {
      .mask {
        opacity: 1;
      }
    }
  }

  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(255, 130, 0, 0.7);
    padding: sizem(20);
    opacity: 0;
    transition: all 0.3s;
  }

  .border {
    width: 100%;
    height: 100%;
    border: 1px solid #fff;
    color: #fff;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
    font-size: sizem(32);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(6.32);
    text-align: center;
    color: #ffffff;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
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
    }
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
