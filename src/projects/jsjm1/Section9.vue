<template>
  <div>
    <div class="section9">
      <div class="swipe absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div>
        </div>
      </div>
      <!-- <div v-if="!isMobile">
        <img src="./s9/img.png" alt="" class="img absolute">
        <img src="./s9/t.png" alt="" class="t absolute">
      </div> -->
      <div class="txt absolute">
        <div class="subtitle">
          抓住中山國小站，享受城市快遞
        </div>
        <div class="title">
          三捷線軸心 直角環遊學
        </div>
        <div class="hr"></div>
        <div class="desc">
          <span>坐擁中山生活最夯熱點「中山國小站」，</span>
          <span>與「中山站Ｘ雙連站」形成幾近等距軸心，</span>
          <span>締造中和新蘆線、松山新店線、信義淡水線，</span>
          <span class="p">三大通行主脈，一次接收！</span>
          <span>完美享受<br v-if="isMobile" />「以一個四角矩陣、大台北全向無敵」</span>
          <span>展開城市暢快計畫。</span>
        </div>
        <img src="./s9/img.png" alt="" class="img">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section9 {
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
.txt{
  width: size(380);
  top:calc(50% - 18.2vw);
  right: size(172);
  display: flex;
  flex-direction:row-reverse;
  padding: 0 0 0 0;
  }
  .title {
    width: 1.2em;
    font-size: size(44);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing:0.06em;
    text-align: left;
    color: #af1f24;
    position: relative;right:0;top:-0.15em;
    //white-space: nowrap;
  }
  .subtitle {
    width: 1.2em;
    font-size: size(25);
    font-weight: bold;
    letter-spacing:0.07em;
    text-align: left;
    position: relative;right: size(-6);
    color: #323333;word-break: break-all;
  flex-direction:row-reverse;word-wrap:break-word;
  }
  .desc {   
    font-size: size(21);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.1em;
    text-align: left;
    color: #323333;
    position: relative;margin:size(0) size(53) 0 size(-10);
  display: flex;align-items:flex-start; word-break: break-all;
  flex-direction:row-reverse;word-wrap:break-word;
    //white-space: nowrap;
    span{writing-mode: vertical-rl;
      width: 1.4em; 
      margin:0 0 0 0.1em;
      &.p{
      margin:0 0 0 0.8em;}
    }
  }
  .s-title{
  width: size(28);
  position: relative;
  top: -0.35Em;
  left:0.35em;
  height: auto;}


  .hr {
    width:size(380);
    height:size(3);
    position: absolute;
    top:0;
    left:size(274);
    background-color: #af1f24;
    transform: rotate(90deg);
    transform-origin: top left;
  }
.t {
  width: size(332);
  top: size(105);
  right: size(172);
}

.img {
  width: size(230);
  top: size(490);
  right: size(110);
  position: absolute;
}

/* Swipe */
.swipe {
  width: size(1310);
  height: size(703);
  top:calc(50% - 18.3vw);
  left: 0;
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
  .section9 {
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
.txt{
  width: sizem(310);
  top: sizem(320);
  left: sizem(32.5);display: block;
  }


  .title {
    width: 100%;
    line-height: 1.6;
    font-size: sizem(25);right:0;top:sizem(3);
  }

  .hr {
    width: 100%;
    height: sizem(2);
    position: relative;right: sizem(0);
    margin: sizem(12) 0;
    transform: rotate(0);
    left: 0;
    top: 0;
  }

  .s-title {
    top:0;
    left: sizem(0);
    width: sizem(279);
  }

  .subtitle {
    width: 100%;
    font-size: sizem(18);right: sizem(-1);
  }

  .desc {
    font-size: sizem(15);
    line-height: 1.6;
    letter-spacing: sizem(2.09);
    white-space: nowrap;display: block;
    span{writing-mode:initial;display: block;
      width:auto; 
      margin:0 0 0.0em;
      &.p{
      margin:0 0 0.8em;}
      &.p2{
      margin:0 0 0.8em -0.5em;}
    }
  }

  .img {
    width: sizem(142);
    top:sizem(30);
    left: sizem(-3);
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
import slider from '@/mixins/slider.js'

export default {
  name: 'section9',

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
          img: require('./s9/1捷運中山國小站.jpg'),
          name: '捷運中山國小站',
        },
        {
          img: require('./s9/2捷運中山站.jpg'),
          name: '捷運中山站',
        },
        {
          img: require('./s9/3捷運雙連站.jpg'),
          name: '捷運雙連站',
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
      if (this.viewIndex === 5) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
