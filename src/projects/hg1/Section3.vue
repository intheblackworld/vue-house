<template>
  <div class="section3">
    <div class="animate-slide" v-if="!isMobile">
      <img src="./s3/漂浮物件_分層/3_class_1.png" :alt="`${info.caseName}_logo`" class="pc1" data-parallax="4">
    </div>
    <div class="animate-slide" v-if="isMobile">
      <img src="./s1/mo3.png" :alt="`${info.caseName}_bg`" class="mo3" data-parallax="3">
      <img src="./s1/mo2.png" :alt="`${info.caseName}_bg`" class="mo2" data-parallax="2">
      <img src="./s1/mo1.png" :alt="`${info.caseName}_bg`" class="mo1" data-parallax="1">
    </div>
    <img src="./s3/technology_line.png" :alt="`${info.caseName}_technology_line`" class="tech-line" data-aos="fade" data-aos-delay="0">
    <img src="./s3/city.png" :alt="`${info.caseName}_city`" class="city" data-aos="fade-up" data-aos-delay="200">
    <img src="./s3/balloon_1.png" :alt="`${info.caseName}_balloon_1`" class="balloon-1" data-aos="fade-down" data-aos-delay="400">
    <img src="./s3/balloon_2.png" :alt="`${info.caseName}_balloon_2`" class="balloon-2" data-aos="fade-down" data-aos-delay="600">
    <img src="./s3/balloon_3.png" :alt="`${info.caseName}_balloon_3`" class="balloon-3" data-aos="fade-down" data-aos-delay="800">
    <img src="./s3/balloon_4.png" :alt="`${info.caseName}_balloon_4`" class="balloon-4" data-aos="fade-down" data-aos-delay="1000">
    <img src="./s3/style_arrow.png" :alt="`${info.caseName}_style_arrow`" class="arrow" data-aos="fade-up" data-aos-delay="200">
    <h1 class="title" data-aos="fade-up" data-aos-delay="400">
      信義區<span>2.0</span>的 超人
    </h1>
    <h1 class="subtitle" data-aos="fade-up" data-aos-delay="600">
      2025<br />
      NEXT FUTURE
    </h1>
    <div class="desc" data-aos="fade-up" data-aos-delay="800">
      「大經國特定計畫區」以生活商業生態的多元發展，遠雄及中悅建設百億資金注入造鎮，加上中國人壽即將進駐，經國特區將躍升為國門最大頂級商辦中心，聚焦繁榮璀璨都心，有望成為台灣第二座信義計畫區！
    </div>
    <div class="item title-1" data-aos="fade-down" data-aos-delay="500">
      南崁台茂<br />生活圈
    </div>
    <div class="item title-2" data-aos="fade-down" data-aos-delay="700">
      春日路<br />商圈
    </div>
    <div class="item title-3" data-aos="fade-down" data-aos-delay="900">
      經國特區<br />商圈
    </div>
    <div class="item title-4" data-aos="fade-down" data-aos-delay="1100">
      中正藝文<br />商圈
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  min-height: size(900);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.city {
  @include img_l_pc(1885, 139, 0);
}

.tech-line {
  @include img_c_pc(1920, 60);
}

.arrow {
  @include img_l_pc(50, 150 + 60, 545);
}

.balloon-1 {
  @include img_r_pc(169, 150 + 60, 1024);
}

.balloon-2 {
  @include img_r_pc(169, 150 + 60, 730);
}

.balloon-3 {
  @include img_r_pc(169, 150 + 60, 460);
}

.balloon-4 {
  @include img_r_pc(169, 150 + 60, 193);
}

.item {
  font-size: size(34.2);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(-1.03);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.title-1 {
  @include img_r_pc(169, 195 + 60, 1024);
}
.title-2 {
  @include img_r_pc(169, 195 + 60, 730);
  color: #0296db;
}
.title-3 {
  @include img_r_pc(169, 195 + 60, 460);
}
.title-4 {
  @include img_r_pc(169, 195 + 60, 193);
  color: #0296db;
}

.title {
  @include img_l_pc(420, 56 + 60, 180);
  font-size: size(53.4);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(0.16);
  text-align: left;
  color: #19191a;
  white-space: nowrap;
  span {
    font-size: size(64.6);
  }
}

.subtitle {
  @include img_l_pc(420, 140 + 60, 180);
  font-size: size(61);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.03;
  letter-spacing: size(1.4);
  text-align: left;
  color: #0296db;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(420, 286 + 60, 180);
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.17;
  letter-spacing: size(1.96);
  text-align: left;
  color: #666666;
}

.animate-slide {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s;
  > img {
    @for $i from 1 through 10 {
      $randomNum: random(4) + 3;
      &:nth-child(#{$i}) {
        transform: translateY((random(10) - 50) + px);
        animation: an ($randomNum + s) 3s infinite alternate;
      }
    }
  }

  .pc1 {
    @include img_r_pc(1920, 0, 0);
    z-index: 1;
  }
}

@keyframes an {
  to {
    transform: translateY(0);
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
  .section3 {
    width: 100vw;
    height: sizem(790);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .txt {
    width: sizem(310);
    top: sizem(320);
    left: sizem(32.5);
    display: block;
  }

  .title {
    width: 100%;
    line-height: 1.6;
    font-size: sizem(25);
    span {
      display: inline-block;
    }
  }

  .hr {
    height: sizem(2);
    position: relative;
    right: size(0);
    margin: sizem(12) 0;
  }

  .s-title {
    top: sizem(2);
    left: sizem(0);
    width: sizem(279);
  }

  .subtitle {
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: sizem(2.09);
    text-align: left;
    color: #323333;
    white-space: nowrap;
  }

  .desc {
    font-size: sizem(15);
    line-height: 1.6;
    letter-spacing: sizem(2.09);
    white-space: nowrap;
    display: block;
    span {
      writing-mode: initial;
      display: block;
      width: auto;
      margin: 0 0 0em;
      &.p {
        margin: 0 0 0.8em;
      }
      &.p2 {
        margin: 0 0 0.8em -0.5em;
      }
    }
  }

  .img {
    width: sizem(142);
    top: sizem(30);
    left: sizem(0);
    position: relative;
  }

  /* Swipe */
  .swipe {
    width: 100vw;
    height: sizem(300);
    min-height: auto;
    top: sizem(0);
    left: sizem(0);
    object-fit: cover;
  }

  // begin
  .swipe-fade-leave-to {
    opacity: 0;
    z-index: 0;
  }
  // end
  .swipe-fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .swipe-fade-enter-active {
    transition: all 0.5s ease;
  }

  .swipe-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  // begin
  // .swipe-left-leave-to {
  //   margin-left: -100vw;
  //   z-index: 0;
  // }
  // // end
  // .swipe-left-enter {
  //   opacity: 0.5;
  //   margin-left: 0;
  //   z-index: 1;
  // }

  // .swipe-left-enter-active {
  //   transition: all 0.5s ease;
  // }

  // .swipe-left-leave-active {
  //   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  // }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
    z-index: 0;

    img {
      width: 100%;
      height: sizem(300);
      object-fit: cover;
    }

    // &:nth-child(1) {
    //   z-index: 1;
    //   // opacity: 1;
    // }

    // &.base {
    //   z-index: 1;
    //   opacity: 1;
    // }
    // &.active {
    //   z-index: 2;
    //   // opacity: 1;
    // }
  }

  .pagination {
    width: auto;
    bottom: size(91);
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
  }

  .pagination-dot {
    padding: 5px;
    margin: 0 10px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #004ea2;
        border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 20%;
        // transform: translateY(-50%);
        left: 20%;
        transition: all 0.3s;
        transform-origin: center;
        transform: scale(0);
      }
      &.active {
        &::before {
          content: '';
          width: 100%;
          height: 100%;
          display: block;
          background: #004ea2;
          border-radius: 20px;
          opacity: 1;
          position: absolute;
          top: 0%;
          // transform: translateY(-50%);
          left: 0%;
          transform: scale(1);
        }
      }
    }
  }

  .swipe-btns {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    z-index: 3;

    .prev-btn,
    .next-btn {
      width: sizem(15);
      cursor: pointer;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section3',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {},
}
</script>
