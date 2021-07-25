<template>
  <div class="section4">
    <img src="./s4/balloon.png" :alt="`${info.caseName}_img`" class="balloon">
    <img src="./s4/map.png" :alt="`${info.caseName}_img`" class="map" v-if="isPC">
    <img src="./s4/map.png" :alt="`${info.caseName}_img`" class="map" v-if="isPC" @click="showDialog">
    <img src="./s4/style.png" :alt="`${info.caseName}_img`" class="style1">
    <img src="./s4/mouse.png" :alt="`${info.caseName}_img`" class="mouse">
    <div class="btn flex-c" v-if="isMobile" @click="showDialog">點擊圖片放大觀看</div>
    <transition name="swipe-fade" mode="out-in">
      <div class="dialog" v-if="isDialog" @scroll="handleScroll">
        <div class="dialog-bg">
          <div class="dialog-close flex-c" @click="isDialog = false">
            <img src="../../assets/img/close.png" alt>
          </div>
          <img src="./s4/map.png" alt class="dialog-img">
          <div :class="`mask ${showMask ? 'active' : ''}`"></div>
          <img src="./mobile/06/swipe-here.png" alt :class="`dialog-hand ${showMask ? 'active' : ''}`">
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";
.section4 {
  width: 100%;
  height: 100vh;
  min-height: size(1080);
  // max-height: size(1080);
  //overflow: hidden;
  // position: relative;
  // background-image: url('./s1/01_bg.jpg');
  background: #bccf00;
  background-size: cover;
  background-attachment: fixed;

  // margin: 0 0 size(400) 0;

  // &:before {
  //   content: ' ';
  //   position: fixed;
  //   z-index: -1;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: url('./s1/bg.jpg') center 0 no-repeat;
  //   background-size: cover;
  // }
}

.bg-img {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;
}

.balloon {
  @include img_l_pc(228, 92, 45);
}
.map {
  @include img_c_pc(1458, 0);
}
.mouse {
  @include img_l_pc(325, 0, 85);
  top: auto;
  bottom: 0;
}

.style1 {
  @include img_r_pc(416, 577, -208);
  opacity: 0.3;
  animation: bling 1s 0.3s ease-in-out infinite alternate;
}

@keyframes bling {
  to {
    opacity: 1;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section4 {
    width: 100vw;
    min-height: sizem(398);
    max-height: sizem(750);
    height: sizem(398);
    // margin: 0 0 -12vw 0;
    // background-size: auto size-m(750);
    z-index: initial;
    // &:before {
    //   background-image: url('./s1/bg_m.jpg');
    // }
  }

  .balloon {
    @include img_r_m(88, 17, 11);
  }
  .map {
    @include img_c_m(375, 62);
  }
  .mouse {
    @include img_l_m(79, 318, 20);
    top: auto;
    bottom: 0;
    z-index: 1;
  }

  .style1 {
    @include img_r_m(416, 577, -208);
    opacity: 0.3;
    animation: bling 1s 0.3s ease-in-out infinite alternate;
  }

  @keyframes bling {
    to {
      opacity: 1;
    }
  }
  .btn {
    @include div_l_m(227, 46, 0, 118);
    top: auto;
    bottom: 0;
    font-size: sizem(20);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: sizem(1.2);
    text-align: center;
    background-color: #cf0065;
    color: #fff;
  }

  .dialog {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.34);
    z-index: 1000;
    overflow-y: scroll;

    .dialog-bg {
      width: 100%;
      height: 100%;
      // padding-top: $nav_pc_height;
      background-attachment: fixed;
      background-size: auto;
      background-position: center center;
      background-repeat: repeat;
    }

    .dialog-img {
      position: absolute;
      width: auto;
      height: 100vh;
      top: 0;
      left: 0;
      background-color: #bccf00;
    }

    .dialog-close {
      @include div_r_m(31, 32, 10, 10);
      // border: 1px solid #fff;
      position: fixed;
      cursor: pointer;
      background-color: rgba(54, 54, 54, 0.8);
      z-index: 2;

      img {
        width: 90%;
      }
    }

    .dialog-hand {
      @include img_l_m(80, 334, 148);
      opacity: 0;
      transition: opacity 0.5s;
      &.active {
        opacity: 1;
      }
      animation: swing 1.5s ease-in-out 0s infinite alternate-reverse;
    }

    .mask {
      width: 100vw;
      height: 100vh;
      background-color: rgba(54, 54, 54, 0.4);
      position: absolute;
      opacity: 0;
      transition: opacity 0.1s;
      &.active {
        opacity: 1;
      }
    }

    @keyframes swing {
      to {
        transform: translateX(-25%);
      }
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from "@/utils";
import info from "@/info";

export default {
  name: "section4",

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      showMask: false
      // blockIndex: 0,
    };
  },

  methods: {
    showDialog() {
      this.isDialog = true;
      this.showMask = true;
    },

    handleScroll() {
      this.showMask = false;
    }
  },

  mounted() {
    // setTimeout(() => {
    //   this.blockIndex = 1
    // }, 6000)
  },

  created() {},

  computed: {}
};
</script>
