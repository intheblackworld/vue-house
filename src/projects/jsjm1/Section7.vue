<template>
  <div>
    <div class="section7">
      <div class="swipe absolute" data-aos="fade-up" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="!isDialog">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name" v-if="isMobile"></div>
            </div>
          </transition-group>
          <div class="img-pagination absolute flex-ac" v-if="!isMobile">
            <div v-for="(slide, i) in slideList" :key="slide.img" :class="`img-item relative`" @click="openDialog(i)">
              <img src="./s7/icon.png" alt="" class="icon absolute">
              <img :src="slide.img" alt="">
              <div class="img-name absolute">{{slide.name}}</div>
            </div>
          </div>
          <!-- <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div> -->
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div>
        </div>
      </div>
      <div :class="`dialog ${isDialog ? 'show' : ''}`">
        <img :src="slideList[imgIndex].img" alt="" class="dialog-img absolute">
        <img src="~@/assets/img/close.png" alt class="close" @click="closeDialog" />
        <img src="./s7/img.png" alt="" class="dialog-ink absolute">
        <div class="dialog-text absolute">{{slideList[imgIndex].name}}</div>
        <div class="dialog-title absolute">文創新鮮度 永遠逛不膩</div>
        <div class="dialog-subtitle absolute">
          台北光點為軸，品味生活比想像更簡單
        </div>
      </div>
      <div v-if="!isMobile">
        <img src="./s7/img.png" alt="" class="img absolute">
        <img src="./s7/t.png" alt="" class="t absolute">
      </div>
      <div v-else>
        <div class="subtitle absolute">
          台北光點為軸，品味生活比想像更簡單
        </div>
        <div class="title absolute">
          文創新鮮度 永遠逛不膩
        </div>
        <div class="hr absolute"></div>
        <div class="desc absolute">
          就讓台北光點的戶外午茶、藝術電影，<br />
          成為週末休閒雙核心！<br /><br />
          再順手採收一旁巷弄的文青好店、美食！<br />
          或把時光交給北美館、蔡瑞月舞蹈社、<br />
          當代藝術館、南西誠品、赤峰小器…<br />
          屬於中山北的浪漫知性，一放縱便填滿清單！<br /><br />
          品味生活比想像更簡單。
        </div>
        <img src="./s7/img.png" alt="" class="img absolute">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: size(1920);
  height: size(900);
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

.t {
  width: size(332);
  top: size(105);
  right: size(172);
}

.img {
  width: size(208);
  top: size(626);
  right: size(288);
}

.dialog {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background: #fff;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s;
  display: none;
  overflow: scroll;

  &.show {
    display: block;
    z-index: 210;
    opacity: 1;
  }

  .dialog-img {
    width: size(1160);
    top: size(164);
    left: size(176);
    object-fit: cover;
    height: auto;
  }

  .dialog-ink {
    width: size(250);
    top: size(605);
    right: size(172);
  }

  .dialog-text {
    width: size(297);
    height: size(32.4);
    top: size(890);
    right: size(177);
    border-bottom: solid 1px #9d0c1a;
    border-right: solid 1px #9d0c1a;
    text-align: right;
    font-size: size(23.6);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: size(5.66);
    padding: 0 5px;
    color: #262626;
  }

  .dialog-title {
    top: size(170);
    right: size(423);
    font-size: size(44);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.06;
    letter-spacing: size(2.6);
    text-align: left;
    color: #af1f24;
    writing-mode: vertical-rl;
    text-orientation: upright;
  }

  .dialog-subtitle {
    top: size(170);
    right: size(388);
    font-size: size(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.1;
    letter-spacing: size(1.48);
    text-align: left;
    color: #323333;
    writing-mode: vertical-rl;
    text-orientation: upright;
  }

  .close {
    position: fixed;
    cursor: pointer;
    right: size(186);
    top: size(192);
    width: size(56);
    background-color: #9d0c1a;
  }
}

/* Swipe */
.swipe {
  width: size(1160);
  height: size(703);
  top: size(99);
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
      background: #b50005;
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
        background: #b50005;
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
    height: sizem(790);
    min-height: auto;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .title {
    width: sizem(270);
    top: sizem(348);
    left: sizem(32);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.52;
    letter-spacing: sizem(1.48);
    text-align: left;
    color: #af1f24;
    white-space: nowrap;
  }

  .hr {
    width: sizem(310);
    height: 2px;
    top: sizem(397);
    left: sizem(32.5);
    background-color: #af1f24;
  }

  .subtitle {
    width: sizem(300);
    top: sizem(324);
    left: sizem(33);
    font-size: sizem(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: sizem(1.06);
    text-align: left;
    color: #323333;
    white-space: nowrap;
  }

  .desc {
    width: sizem(300);
    top: sizem(410);
    left: sizem(33);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: sizem(0.65);
    text-align: left;
    color: #323333;
    white-space: nowrap;
  }

  .img {
    width: sizem(135);
    top: auto;
    left: auto;
    bottom: sizem(14);
    right: sizem(120);
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
import slider from '@/mixins/slider.js'

export default {
  name: 'section7',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      imgIndex: 0,
      isDialog: false,
      slideList: [
        {
          img: require('./s7/1台北光點.jpg'),
          name: '台北光點',
        },
        {
          img: require('./s7/2北美館.jpg'),
          name: '北美館',
        },
        {
          img: require('./s7/3蔡瑞月舞蹈社.jpg'),
          name: '蔡瑞月舞蹈社',
        },
        {
          img: require('./s7/4當代藝術館.jpg'),
          name: '當代藝術館',
        },
        {
          img: require('./s7/5南西誠品.jpg'),
          name: '南西誠品',
        },
        {
          img: require('./s7/6光點旁的巷弄生活.jpg'),
          name: '光點旁的巷弄生活',
        },
        {
          img: require('./s7/7赤峰街小器.jpg'),
          name: '赤峰街小器',
        },
      ],
    }
  },

  methods: {
    openDialog(index) {
      this.imgIndex = index
      this.isDialog = true
    },
    closeDialog() {
      this.isDialog = false
    },
  },

  created() {},

  mounted() {
    if (this.isPC) {
      this.stopAutoPlay = true
    } else {
      this.stopAutoPlay = false
    }
  },

  computed: {},

  watch: {
    viewIndex() {
      if (this.viewIndex === 3) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
