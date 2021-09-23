<template>
  <div class="section2">
    <img src="./s2/map.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isPC">
    <div v-if="isMobile">
      <Map :bgSrc="require('./s2/map_m.jpg')" :hand="require('./s2/hand.png')"></Map>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: 100%;
  // height: size(1080);
  // min-height: size(1080);
  // max-height: size(1080);
  // position: relative;
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width:100%;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.title {
  @include img_r_pc(360, 328, 144);
  font-size: size(36);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.hr {
  @include img_r_pc(316, 393, 187);
  height: 35px;
  border-top: size(0.5) solid #fff9;
}

.desc {
  @include img_r_pc(368, 436, 133);
  font-size: size(21);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.05;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.more {
  @include img_r_pc(309 + 20 + 63, 705, 110);
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.04;
  letter-spacing: size(2.8);
  text-align: left;
  color: #ffffff;
  cursor: pointer;
  white-space: nowrap;

  img {
    width: size(63);
  }
}

/* Swipe */
.swipe {
  width: size(1350);
  height: size(820);
  bottom: size(136);
  left: 0;
  object-fit: cover;
  background: #0344;
  // background-image: url('./s2/bg_noise_bk.gif');
  background-size: cover;
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
    height: size(850);
  }

  .slide-name {
    left: 2em;
    bottom: 1.2em;
    color: #fff;
    font-size: size(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: left;
    text-shadow: 0 0.3em 1em #000;
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
  bottom: size(44);
  right: 0;
  left: 0;
  margin: 0 auto;
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
    background-color: transparent;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #fff;
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
        background: #fff;
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

.dialog {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(to bottom, #004471 80%, #094b76 100%);
  z-index: 1000;


  .dialog-img {
    position: absolute;
    width: size(1350);
    height: auto;
    top: calc(50% - 21.35vw);
    left: 0;
  }

  .dialog-title {
    @include img_r_pc(325, 0, 179);
    top: calc(50% - 22vw);
    font-size: size(36);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.81;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    text-decoration: underline;
  }

  .dialog-close {
    @include div_r_pc(42, 42, 130, 94);
    top: calc(50% - 22vw);
    border: 1px solid #fff;
    cursor: pointer;

    img {
      width: 90%;
    }
  }
  .dialog-name {
    position: absolute;
    left: 2em;
    bottom: calc(50% - 21.35vw + 1.2em);
    color: #fff;
    font-size: size(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: left;
    text-shadow: 0 0.2em 1em #000;
  }

  .dialog-desc {
    @include img_r_pc(448, 303, 52);
    top: auto;
    bottom: calc(50% - 22vw);
    font-size: size(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.39;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    margin: 0 0;
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
  .section2 {
    width: 100vw;
    height: sizem(564);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .title {
    @include img_r_m(260, 409, 71);
    font-size: sizem(26);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .hr {
    @include img_r_m(230, 458, 102);
    height: sizem(0.5);
    background: #fff;
  }

  .desc {
    @include img_r_m(292, 474, 40);
    font-size: sizem(16);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .more {
    @include img_r_m(179 + 7 + 29, 636, 117);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.04;
    letter-spacing: sizem(2.1);
    text-align: left;
    color: #ffffff;
    cursor: pointer;
    white-space: nowrap;

    img {
      width: sizem(29);
    }
  }

  /* Swipe */
  .swipe {
    width: sizem(333);
    height: sizem(333);
    min-height: auto;
    top: sizem(50);
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
      height: 100%;
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
    .slide-name {
      right: auto;
      bottom: auto;
      top: 1.2rem;
      left: 1.2rem;
      font-size: sizem(15);
    }
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

  .dialog {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, #004471 80%, #3780b1 100%);
    z-index: 1000;
    overflow-y: scroll;

    .dialog-bg {
      width: 100%;
      height: 112%;
      background-image: url('~@/projects/lj/s1/bg_m.png');
      // padding-top: $nav_pc_height;
      background-attachment: fixed;
      background-size: auto;
      background-position: center center;
      background-repeat: repeat;
    }

    .dialog-img {
      position: absolute;
      width: sizem(333);
      height: sizem(333);
      top: sizem(57);
      left: 0;
    }

    .dialog-title {
      @include img_r_m(302, 405, 34);
      font-size: sizem(22);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.81;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
      text-decoration: underline;
    }

    .dialog-close {
      @include div_r_m(31, 32, 10, 10);
      border: 1px solid #fff;
      cursor: pointer;

      img {
        width: 90%;
      }
    }
    .dialog-name {
      right: auto;
      bottom: auto;
      top: calc(15.2vw + 1.2rem);
      left: 1.2rem;
      font-size: sizem(15);
      z-index: 2;
    }

    .dialog-desc {
      @include img_r_m(313, 454, 18);
      font-size: sizem(12);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.39;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
      height: auto;
      margin: 0 0 5em;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import Map from '@/components/Map.vue'
import info from '@/info'

export default {
  name: 'section2',

  components: {
    Map,
  },

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
