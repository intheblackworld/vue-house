<template>
  <div>
    <div class="section8">
      <img src="./s8/logo.png" alt="" class="logo">
      <div class="title">
        威地段，輕首付，訂製宅，幸福住
      </div>
      <div class="subtitle">
        悅峰WE時代，我們的威時代
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width: size(1920);
  height: size(900);
  max-height: size(900);
  position: relative;
  background: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: size(900);
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

.logo {
  @include img_c_pc(482, 112);
}

.title {
  @include img_c_pc(824, 636);
  font-size: size(56);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.48;
  letter-spacing: size(-1.12);
  text-align: center;
  color: #000000;
  white-space: nowrap;
}

.subtitle {
  @include img_c_pc(830, 720);
  font-size: size(66);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.48;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
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
  .section8 {
    width: 100vw;
    height: sizem(656);
    min-height: auto;
    max-height: initial;
    overflow: hidden;
  }

  .title-d {
    width: sizem(120);
    top: sizem(0);
    font-size: sizem(30);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: normal;
    text-align: center;
    color: #005369;

    &::after {
      content: '';
      display: block;
      position: absolute;
      right: sizem(-45);
      width: sizem(28);
      height: sizem(28);
      top: sizem(4);
      background-image: url('./s2/title.png');
      background-size: cover;
      transform: rotate(180deg);
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: sizem(-45);
      width: sizem(28);
      height: sizem(28);
      top: size(8);
      background-image: url('./s2/title.png');
      background-size: cover;
    }
  }

  .hr {
    width: 100vw;
    top: size(-18);
    left: 0;
    opacity: 1;
  }

  .title {
    width: sizem(104);
    top: sizem(411 - 120);
    left: sizem(32);
    font-size: sizem(25);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(1.25);
    text-align: left;
    color: #005369;
    white-space: nowrap;
  }

  .subtitle {
    width: sizem(300);
    top: sizem(455 - 120);
    left: sizem(32);
    font-size: sizem(20);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(1);
    text-align: left;
    color: #2c9899;
    white-space: normal;
  }
  .line {
    background-color: #888;
    width: sizem(310);
    top: sizem(532 - 120 - 20);
    left: sizem(32);
    height: sizem(2);
  }
  .desc {
    width: sizem(310);
    top: sizem(548 - 120 - 20);
    left: sizem(32);
    font-size: sizem(15);
    line-height: 1.73;
  }

  /* Swipe */
  .swipe {
    width: 100vw;
    height: sizem(250);
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
    .slide-name {
      right: 1em;
      font-size: sizem(13);
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
import slider from '@/mixins/slider.js'

export default {
  name: 'section8',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s8/1景觀戲水池.jpg'),
          name: '景觀戲水池 3D情境示意圖',
        },
        {
          img: require('./s8/2頂樓星空bar.jpg'),
          name: '頂樓星空bar 3D情境示意圖',
        },
        {
          img: require('./s8/3CASA迎賓大廳.jpg'),
          name: 'CASA迎賓大廳 3D情境示意圖',
        },
        {
          img: require('./s8/4人文交誼廳.jpg'),
          name: '人文交誼廳 3D情境示意圖',
        },
        {
          img: require('./s8/5地下停車場.jpg'),
          name: '社區出入空間 3D情境示意圖',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    viewIndex() {
      if (this.viewIndex === 8) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
