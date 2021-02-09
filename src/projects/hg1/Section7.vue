<template>
  <div class="section7">
    <img src="./s7/structure_img.png" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isPC">
    <img src="./mo/s7/m.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isMobile">
    <div class="m-title" v-if="isMobile">
      ARCHITECTURE
    </div>
    <h1 class="title" :data-aos="isPC ? 'fade-up' : 'fade'" data-aos-delay="400">
      建築新體驗
    </h1>
    <h1 class="subtitle" :data-aos="isPC ? 'fade-up' : 'fade'" data-aos-delay="600">
      全新風潮，新時代鉅獻
    </h1>
    <div class="big-title" :data-aos="isPC ? 'fade-up' : 'fade'" data-aos-delay="800">
      STRUCTURE
    </div>
    <img src="./s7/style_arrow_4.png" :alt="`${info.caseName}_style_arrow`" class="arrow" :data-aos="isPC ? 'fade-up' : 'fade'" data-aos-delay="200">
    <div class="animate-slide" v-if="!isMobile">
      <img src="./s7/漂浮物件_分層/7_class_1.png" :alt="`${info.caseName}_logo`" class="pc1" data-parallax="4">
    </div>
    <div class="animate-slide" v-if="isMobile">
      <!-- <img src="./s1/mo3.png" :alt="`${info.caseName}_bg`" class="mo3" data-parallax="3">
      <img src="./s1/mo2.png" :alt="`${info.caseName}_bg`" class="mo2" data-parallax="2"> -->
      <img src="./mo/s7/漂浮物件_分層/m_7_class_1.png" :alt="`${info.caseName}_bg`" class="mo1" data-parallax="1">
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width:100%;
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
  width:100%;
  height:100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.title {
  @include img_r_pc(431, 320, 268);
  font-size: size(82.1);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(5.17);
  text-align: right;
  color: #0083be;
  white-space: nowrap;
}

.subtitle {
  @include img_r_pc(537, 423, 160);
  font-size: size(53.4);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(-0.91);
  text-align: left;
  color: #666666;
  white-space: nowrap;
}

.arrow {
  @include img_r_pc(77.5, 348, 184);
}

.animate-slide {
  width: 100%;
  height: 100%;
  position: absolute;
  // z-index: 3;
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
    @include img_r_pc(300, 722, -100);
    // z-index: 1;
  }
}

@keyframes an {
  to {
    transform: translateY(0);
  }
}

.big-title {
  @include img_r_pc(1070, 782, 166);
  top: auto;
  bottom: size(20);
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.75);
  font-size: size(189.8);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(0.57);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
  z-index: 3;
}

/* Swipe */
.swipe {
  width: size(1160);
  height: size(703);
  top: calc(50% - 18.3vw);
  left: size(178);
  object-fit: cover;
  z-index: 3;
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
  height: size(530);
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
  }

  .slide-name {
    left: 20px;
    bottom: 20px;
    color: #fff;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.11;
    letter-spacing: 0.89px;
    text-align: left;
    color: #ffffff;
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

.img-pagination {
  width: 100%;
  bottom: size(20);
  right: size(0);
  justify-content: space-between;
  .img-item {
    width: size(150);
    height: size(130);
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .icon {
      width: size(19);
      height: size(19);
      right: size(9);
      bottom: size(9);
    }

    .img-name {
      width: 100%;
      height: size(20);
      right: size(0);
      bottom: size(-20);
      border-right: 1px solid #af1f24;
      border-bottom: 1px solid #af1f24;
      padding: 0 2px;
      text-align: right;
      font-size: size(14.6);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: size(3.5);
      color: #323333;
    }
  }
}

.pagination {
  width: auto;
  bottom: size(20);
  right: size(20);
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
    position: relative;
    background-color: #fff;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #D66655;
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
      box-shadow: none;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background: #D66655;
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
    width: size(20);
    cursor: pointer;
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
    height: sizem(427);
    min-height: auto;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    // overflow: hidden;
  }

  .bg-img {
    height: 100%;
  }
  .m-title {
    @include img_r_m(300, 189, 39);
    font-size: sizem(41);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.8;
    letter-spacing: sizem(0.12);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }

  .arrow {
    @include img_r_m(24, 269, 34);
    z-index: 2;
    opacity: 1 !important;
  }

  .big-title {
    display: none;
    // @include img_r_m(191, 268, 62);
    // top: auto;
    // bottom: size(20);
    // text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.75);
    // font-size: size(189.8);
    // font-weight: 300;
    // font-stretch: normal;
    // font-style: normal;
    // line-height: 1.2;
    // letter-spacing: size(0.57);
    // text-align: center;
    // color: #ffffff;
    // white-space: nowrap;
    // z-index: 3;
  }
  .title {
    @include img_r_m(191, 268, 62);
    font-size: sizem(23);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.78;
    letter-spacing: sizem(1.45);
    text-align: right;
    color: #0083be;
    white-space: nowrap;
    z-index: 2;
    opacity: 1 !important;
  }

  .subtitle {
    @include img_r_m(150, 302, 33);
    font-size: sizem(14.8);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: sizem(-0.25);
    text-align: left;
    color: #666666;
    white-space: nowrap;
    z-index: 2;
    opacity: 1 !important;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
// import slider from '@/mixins/slider.js'

export default {
  name: 'section7',

  // mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
      // isDialog: false,
      // imgIndex: 0,
      // isDialog: false,
    }
  },

  methods: {
    // openDialog(index) {
    //   this.imgIndex = index
    //   this.isDialog = true
    // },
    // closeDialog() {
    //   this.isDialog = false
    // },
  },

  created() {},

  mounted() {},

  computed: {},

  watch: {},
}
</script>
