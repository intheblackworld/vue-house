<template>
  <div class="section9">
    <img src="./s10/10_house.png" :alt="`${info.caseName}_house`" class="house">
    <h1 class="label"  data-aos="fade-up" data-aos-delay="200">立瑾建築機構</h1>
    <h1 class="title"  data-aos="fade-up" data-aos-delay="400">Taste Of Building Materials</h1>
    <h1 class="subtitle" v-if="isPC" data-aos="fade-up" data-aos-delay="600">為你營造家的幸福滋味</h1>
    <h1 class="subtitle" v-if="isMobile" data-aos="fade-up" data-aos-delay="600">為你營造<br />家的幸福滋味</h1>
    <div class="hr" data-aos="fade-right" data-aos-delay="400"></div>
    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-txt">完銷佳作</div>
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div :class="`swipe-btns absolute flex-ac ${isMobile ? 'flex-jb' : ''}`">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          <div class="order-index" v-if="isPC">{{slideIndex + 1}}/{{slideList.length}}</div>
        </div>
      </div>
    </div>
    <div class="content-block flex-c wrap">
    </div>
    <div class="block-hr"  data-aos="fade-right" data-aos-delay="400"></div>
    <div class="block-title"  data-aos="fade-up" data-aos-delay="200">
      懂建築 需兩位<br />
      一位懂得蓋 一位懂得住
    </div>
    <div class="block-desc"  data-aos="fade-up" data-aos-delay="600">
對立瑾來說<br />
建築是有感情的作品<br />
我們為你築一個家<br />
更期待有緣知音<br />
在此植下家園的根基  
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section9 {
  width: 100vw;
  height: size(1410 + 350 );
  position: relative;
  // background-color: #fff;
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: size(1080);
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
.house {
  @include img_c_pc(640, 664);
  top: auto;
  bottom: 0;
}

.grass {
  @include img_l_pc(838, 886, 439);

  animation: grass 2s 0s ease-in-out alternate-reverse infinite;
}

@keyframes grass {
  to {
    transform: skew(5deg);
  }
}

.label {
  @include img_l_pc(400, 0 + 153, 104);
  font-size: size(46  - 6);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: size(2.76);
  text-align: left;
  color: #5e5d5e;
  white-space: nowrap;
  span {
    font-weight: normal;
  }
}

.title {
  @include img_l_pc(731, 64 + 153, 105);
  font-size: size(71.5 - 10);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: size(-5.01);
  text-align: left;
  color: #2f2c2c;
  white-space: nowrap;
}
.subtitle {
  @include img_l_pc(731, 68 + 127 + 153, 468);
  font-size: size(75.2 - 10);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: size(4.51);
  text-align: left;
  color: #2f2c2c;
  white-space: nowrap;
}

.hr {
  @include img_l_pc(102, 180 + 60 + 153, 338);
  border-bottom: solid size(5) #009fb1;
}

.content-block {
  @include div_l_pc(760, 520, 720, 1050);
  background: #fff;
  box-shadow:3vw 5vw 40vw #0004;
}

.block-hr {
  @include img_r_pc(53, 950, 460);
  border-bottom: solid size(4) #009fb1;
}

.block-title {
  @include img_r_pc(480, 790, 249);
  font-size: size(40.5);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: size(2.43);
  text-align: center;
  color: #009fb1;
  white-space: nowrap;
}

.block-desc {
  @include img_r_pc(480, 991, 249);
  font-size: size(22);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: normal;
  text-align: center;
  color: #2f2c2c;
}

/* Swipe */
.swipe {
  width: size(998);
  height: size(646);
  top: size(517);
  left: size(104);
  object-fit: cover;
}
.swipe-txt{position: absolute;top: .5em;left: 0.7em;color: #FFF;z-index: 1;font-size: size(40);}
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
  // overflow: hidden;
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

  .slide-name {
    left: 1.5em;
    bottom: 1em;
    color: #fff;
    font-size: size(23);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.89px;
    text-align: left;
    color: #ffffff;
    text-shadow: 0 0.1em 0.3em #000;
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
  bottom: size(188);
  left: calc(50% + 6.95vw);
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 0px;
    box-shadow: 0 0 0 5px #ccc;
    border-radius: 15px;
    position: relative;
    // background-color: #ccc;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: transparent;
      // border-radius: 20px;
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
        box-shadow: 0 0 0 5px #000;
        border-radius: 15px;
        background-image: #000;
        background-size: 70% 70%;
        background-position: center;
        background-repeat: no-repeat;
        // border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 0%;
        // transform: translateY(-50%);
        left: 0%;
        transform: scale(1.1);
      }
    }
  }
}

.swipe-btns {
  width: 20%;
  height: size(50);
  padding: 0;
  z-index: 3;
  left: 0;
  bottom: size(-60);

  .prev-btn,
  .next-btn {
    width: size(50);
    margin-right: 10px;
    cursor: pointer;
  }

  .order-index {
    font-size: size(26);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.21;
    letter-spacing: size(3.67);
    text-align: left;
    color: #070304;
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
  .section9 {
    min-height: auto;
    max-height: initial;
    height: sizem(455 + 340 + 220);
  }
  .house {
    @include img_c_m(274, 664);
    top: auto;
    bottom: 0;
  }

  .label {
    @include img_l_m(131, 80, 30);
    font-size: sizem(17.8);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: sizem(1.07);
    text-align: left;
    color: #5f5e5e;
    white-space: nowrap;
    span {
      font-weight: normal;
    }
  }

  .title {
    @include img_l_m(283, 103, 30);
    font-size: sizem(27.7);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: sizem(-1.94);
    text-align: left;
    color: #302d2c;
    white-space: nowrap;
  }
  .subtitle {
    @include img_l_m(177, 212, 27);
    font-size: sizem(33.7);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: sizem(2.02);
    text-align: left;
    color: #302d2c;
    white-space: nowrap;
  }

  .hr {
    @include img_l_m(40, 172, 33);
    border-bottom: solid sizem(5) #009fb1;
  }

  .content-block {
    display: none;
  }

  .block-hr {
    display: none;
  }

  .block-title {
    @include img_l_m(225, 324, 29);
    font-size: sizem(17.7);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: sizem(2.13);
    text-align: left;
    color: #009fb1;
    white-space: nowrap;
  }

  .block-desc {
    @include img_l_m(314, 388, 29);
    font-size: sizem(14.3);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.61;
    letter-spacing: sizem(0.57);
    text-align: left;
    color: #302d2c;
  }

  /* Swipe */
  .swipe {
    width: sizem(375);
    height: sizem(270);
    min-height: auto;
    top: sizem(525);
    left: sizem(0);
    object-fit: cover;
  }
.swipe-txt{font-size: sizem(20);}

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
    bottom: 0;

    .prev-btn,
    .next-btn {
      width: sizem(30);
      background-color: #fff;
      border-radius: 999px;
      margin-right: 0;
      
      cursor: pointer;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import slider from '@/mixins/slider.js'
export default {
  mixins: [slider],
  // props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        /*
        {
          img: require('./s9/09_slider_01.jpg'),
          name: '樣品屋實景',
        },
        {
          img: require('./s9/09_slider_02.jpg'),
          name: '樣品屋實景',
        },
        {
          img: require('./s9/09_slider_03.jpg'),
          name: '樣品屋實景',
        },
        {
          img: require('./s9/09_slider_04.jpg'),
          name: '樣品屋實景',
        },
        {
          img: require('./s9/09_slider_05.jpg'),
          name: '樣品屋實景',
        },
        {
          img: require('./s9/09_slider_06.jpg'),
          name: '樣品屋實景',
        },*/
        {
          img: require('./s9/09_slider_07.jpg'),
          name: '立瑾Way3D外觀示意圖',
        },
        {
          img: require('./s9/09_slider_08.jpg'),
          name: '立瑾醞3D外觀示意圖',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    // viewIndex() {
    //   if (this.viewIndex === 3) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>