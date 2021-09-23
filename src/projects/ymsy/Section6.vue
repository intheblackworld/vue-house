<template>
  <div class="section6">
    <div class="content">
      <div class="title" data-aos="fade-up" data-aos-delay="200">
        星級莊園人生<br />
        回家逛美術館
      </div>
      <div class="desc" data-aos="fade-up" data-aos-delay="400" v-if="isPC">
        呼吸陽明山的風，漫步近3千坪夢想藍圖，在動感的日常中感動。恰如其分地收納多項匠心公設、精緻飯店物管。<br>知名新銳創作者蔡尉成作品《片片》迎賓，讓藝術之美滋養心靈，才知道最奢侈的不過是生活。
      </div>
      <div class="desc" data-aos="fade-up" data-aos-delay="400" v-if="isMobile">
        呼吸陽明山的風，漫步近3千坪夢想藍圖，在動感的日常中感動。恰如其分地收納多項匠心公設、精緻飯店物管。知名新銳創作者蔡尉成作品《片片》迎賓。
      </div>
    </div>
    <img src="./s2/flash.png" :alt="`${info.caseName}_img`" class="flash" v-if="isMobile">

    <img src="./s6/main.png" :alt="`${info.caseName}_img`" class="main">

    <img src="./s6/img.jpg" :alt="`${info.caseName}_img`" class="img1" data-aos="fade-up" data-aos-delay="800" v-if="isPC">

    <div class="new-text">銷售企劃：興益發建設自建自售</div>
    <div class="new-text-1">蔡尉成雕塑創作《片片》w148 x 129 x H252cm</div>
    <div class="new-text-2">飯店式物業管理服務實景圖</div>


    <div class="swipe"  data-aos="fade" data-aos-delay="800" v-if="isMobile">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
      </div>
      <div class="swipe-btns absolute flex-ac flex-jb">
        <div class="prev-btn" @click="decIndex"></div>
        <div class="next-btn" @click="addIndex"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  //overflow-x: hidden;
  // min-height: size(900);
  background-size: cover;
  // background-position: 0 0;
  background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

.new-text {
  @include img_r_pc(500, 1010, 30);
  top:calc(40% + ( 1010 - 1080 * 0.4) * 100vw / 1920);
  font-size: size(25);
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: right;
  color: #000;
  z-index: 3;
  white-space: nowrap;
}

.new-text-1 {
  @include img_r_pc(500, 1010, 30);
  top:calc(40% + ( 900 - 1080 * 0.4) * 100vw / 1920);
  font-size: size(20);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: right;
  color: #000;
  z-index: 3;
  white-space: nowrap;
}
.new-text-2 {
  @include img_l_pc(500, 950, -230);
  top:calc(40% + ( 950 - 1080 * 0.4) * 100vw / 1920);
  font-family: 'Noto Sans TC';
  font-size: size(20);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: right;
  color: #fff;
  z-index: 3;
  white-space: nowrap;
}

.main {
  @include img_r_pc(320, 370, 20);
}

.label {
  @include img_r_pc(500, 267, 185);
  font-size: size(28.1);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.54;
  letter-spacing: size(5.61);
  text-align: left;
  color: #000000;
  white-space: nowrap;
}

.title {
  @include img_r_pc(597, 200, 84);
  font-size: size(65);
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #006b31;
  white-space: nowrap;
}

.desc {
  @include img_r_pc(390, 520, 295);
  font-size: size(22);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.5;
  letter-spacing: size(0.6);
  text-align: left;
  color: #000000;
}

.fly1 {
  @include img_r_pc(109, 193, 204);
}

.fly2 {
  @include img_r_pc(87, 385, 626);
}

.img1 {
  @include div_l_pc(1172, 901, 95, 0);
}


/* Swipe */
.swipe {
  @include div_l_pc(1172, 901, 95, 0);
  top:calc(50% + ( 901 - 1080 * 0.5) * 100vw / 1920);
  object-fit: cover;
  // background: #0344;
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
  transition: all 1s ease;
}

.swipe-fade-leave-active {
  transition: all 1s ease;
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

  .slide-name {
    right: 2em;
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
  bottom: size(24);
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
  padding: 0 0;
  z-index: 3;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  .prev-btn,
  .next-btn {
    position: relative;
    height: 100%;
    width: 2em;
    font-size: size(20);
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: translateX(100%);
      background-color: #0004;
      transition: all 0.3s;
    }
    &::after {
      content: '';
      width: 1em;
      height: 1em;
      position: absolute;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.75em);
      border: solid #fff;
      border-width: 0.1em 0.1em 0 0;
      transform: rotate(45deg) translate(-10%, 10%);
    }
    &:hover:before {
      transform: translateX(0%);
    }
    &:hover:after {
      animation: btn 0.5s ease-in-out infinite alternate;
    }
  }
  .prev-btn {
    transform: scaleX(-1);
  }
}
@keyframes btn {
  to {
    transform: rotate(45deg) translate(10%, -10%);
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
  .section6 {
    width: 100vw;
    height: sizem(750);
    min-height: auto;
    max-height: initial;
    // background-attachment: scroll;
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
  }

  .new-text {
  @include img_c_pc(1100, 1010);
  top:calc(50% + ( 670 - 667 * 0.5) * 100vw / 375);
  font-size: size(80);
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  z-index: 3;
  white-space: nowrap;
  text-shadow: 0em 0em 0.3em #000;
}

.new-text-1 {
  @include img_r_m(260, 250, 15);
  top:calc(50% + ( 235 - 667 * 0.5) * 100vw / 375);
  font-size: size(60);
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #000;
  z-index: 3;
  white-space: nowrap;
}

.new-text-2 {
  @include img_r_m(200, 250, 15);
  top:calc(50% + ( 280 - 667 * 0.5) * 100vw / 375);
  font-size: size(80);
  font-stretch: normal;
  font-family: 'Noto Sans TC';
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  z-index: 3;
  white-space: nowrap;
  text-shadow: 0em 0em 0.3em #000;
}
  .flash {
    @include img_l_m(1041, 709, -232);
    top:calc(50% + ( -85 - 667 * 0.5) * 100vw / 375);
    animation: flash 1s ease-in-out alternate infinite;
    opacity: 0;
    z-index: 3;
  }

  @keyframes flash {
    to {
      opacity: 1;
    }
  }

  .main {
    @include img_r_m(140, 50, 15);
  }

  .label {
    @include img_c_m(250, 59);
    font-size: sizem(14);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.54;
    letter-spacing: sizem(2.81);
    text-align: left;
    color: #000000;
    white-space: nowrap;
  }
  .title {
    @include img_l_m(270, 60, 30);
    font-size: sizem(30);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
    text-align: left;
    color: #006b31;
    white-space: nowrap;
  }

  .desc {
    @include img_l_m(220, 160, 30);
    font-size: sizem(12);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.01;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    white-space: normal;
  }

  .flower {
    @include img_r_m(77, 69, 0);
    z-index: 2;
  }

  /* Swipe */
  .swipe {
    @include div_l_m(375, 454, 0, 0);
    top: auto;
    bottom: 0;
    object-fit: cover;
    // background: #0344;
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
      right: 1.2rem;
      top: 1.2rem;
      bottom: auto;
      left: auto;
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
    width: 116%;
    left: -8%;
    .prev-btn,
    .next-btn {
      font-size: sizem(15);
      &::before {
        background-color: #cc5b4e00;
      }
      &::after {
        border-color: #fff;
        border-width: 0.15em 0.15em 0 0;
        animation: btn 0.5s ease-in-out infinite alternate;
      }
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
  name: 'section6',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: isMobile
            ? require('./mobile/06/img.jpg')
            : require('./s6/img.jpg'),
          // name: '綠海景觀',
          // desc: '270度翠綠簇擁<br />開窗就享無垠綠景',
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
    //   if (this.viewIndex === 5) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>
