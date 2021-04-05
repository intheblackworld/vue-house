<template>
  <div>
    <div class="section6">
      <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
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
          <div class="swipe-btns absolute flex-ac flex-jb">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div>
        </div>
      </div>
      <div class="txt">
      <h3 class="title" data-aos="flip-up" data-aos-delay="400">
        迎向天空人生峰景 <span>讓別人都羨慕憧憬</span>
      </h3>
      <div class="hr" data-aos="zoom-in-right" data-aos-delay="600"></div>
      <div class="desc" data-aos="fade-up" data-aos-delay="800">
        洲子洋即將迎來最美的天空，<br />
        「天空之邑」近兩千坪寬闊基地、千坪日式庭園，<br />
        打造稀有24層雙塔地標，晉級洲子洋宜居新指標。
      </div>
      <div class="list">
        <div class="flex-ac item" data-aos="fade-up" data-aos-delay="1000">
          <img src="./s6/06_text_1.png" alt="" class="icon">
          <h3 class="text">
            <span>地標</span> 區域稀有24層雙塔新地標
          </h3>
        </div>
        <div class="flex-ac item" data-aos="fade-up" data-aos-delay="1100">
          <img src="./s6/06_text_2.png" alt="" class="icon">
          <h3 class="text">
            <span>基地</span> 區域稀有近兩千坪寬闊基地
          </h3>
        </div>
        <div class="flex-ac item" data-aos="fade-up" data-aos-delay="1200">
          <img src="./s6/06_text_3.png" alt="" class="icon">
          <h3 class="text">
            <span>生活</span> 區域稀有千坪日式雅致莊園
          </h3>
        </div>
      </div>
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
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
&::after,
&::before{
  content: "";
  width: 120%;
  height: size(120);
  position: absolute;bottom:  size(-90);left:-10%;
  background: url("./all/section_bg.jpg") fixed;
  background-size: cover;
  border-radius: 100% 100% 0 0;z-index: 2;
}
&::after{
  border-radius: 0 0 100% 100%;top:  size(-90);bottom: auto;
}

}

.txt{
  @include img_l_pc(600, 0, 328);
  height: 100%;filter: drop-shadow(0 0 5px #036);
  display: flex;justify-content: center;
    flex-direction:column;
  }
.title {
  font-size: size(50);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing:0.01em;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
  span {
    display: block;
    font-size: size(35);
    letter-spacing: size(3.5);
  }
}

.hr {
  width: 100%;
  // height: 35px;
  border-top: size(1) solid #fff;
  margin: size(15) 0;
}

.desc {
 // text-shadow: 0 2px 5px rgba(0, 0, 0, 0.44);
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.94;
  letter-spacing: size(0.9);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.list {
}

.item {
  .icon {
    width: size(68);
    margin-right: 10px;
  }

  .text {
    font-size: size(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 5.42;
    letter-spacing:0.05em;
    text-align: left;
    color: #fffc;
    span {
      color: #f15a24;
    }
  }
}

/* Swipe */
.swipe {
  width:100%;
  height:100%;
  bottom: size(0);
  left: 0;
  object-fit: cover;
  // background:#0344;
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
    height: sizem(650);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
&::after,
&::before{
  display: none;
}
  }

.txt{
    @include img_l_m(330, 25, 25);
  height:auto;filter: drop-shadow(0 0 5px #036);display: block;
  }
  .title {
   // @include img_r_m(260, 409, 71);
    font-size: sizem(26);
    font-weight: bold;
    letter-spacing: normal;
  line-height: 2;
  span {
    display: block;
    font-size: sizem(20);
    letter-spacing:0.01em;
  }
  }

  .hr {
  //  @include img_r_m(230, 458, 102);
    height: sizem(1);
    margin:sizem(12) 0;
  }

  .desc {
   // @include img_r_m(292, 474, 40);
    font-size: sizem(14);
    font-weight: normal;
    letter-spacing: normal;
    white-space: normal;
    margin: 0 0 1.5em 0;
  }
  .item {
  .icon {
    width: sizem(39);
    margin-right:sizem(4);
  }

  .text {
    font-size: sizem(14);
    letter-spacing: size(0.9);
    line-height: 3.3;
  }
}


  /* Swipe */
  .swipe {
    width: 100%;
    height: 100%;
    min-height: auto;
    top: 0;
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
      height: auto;
      object-fit: cover;
      position: absolute;
      left: 0;bottom: 0;
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
      top: auto;
      bottom: 1.2rem;
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
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: sizem(370);
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
            ? require('./s6/06_slider_8_m.jpg')
            : require('./s6/02_mask.jpg'),
           name: '3D外觀示意',
        },
        {
          img: isMobile
            ? require('./s6/06_slider_10_m.jpg')
            : require('./s6/10_mask.jpg'),
           name: '日式庭園示意圖',
        },
        {
          img: isMobile
            ? require('./s6/06_slider_11_m.jpg')
            : require('./s6/13_mask.jpg'),
           name: '日式庭園示意圖',
        },
  /*      {
          img: isMobile
            ? require('./s6/06_slider_2_m.jpg')
            : require('./s6/02.jpg'),
          // name: '臺北市私立靜心高級中學',
        },
        {
          img: isMobile
            ? require('./s6/06_slider_3_m.jpg')
            : require('./s6/03.jpg'),
          // name: '臺北市私立靜心高級中學',
        },
        {
          img: isMobile
            ? require('./s6/06_slider_4_m.jpg')
            : require('./s6/04.jpg'),
          // name: '臺北市私立靜心高級中學',
        },
        {
          img: isMobile
            ? require('./s6/06_slider_5_m.jpg')
            : require('./s6/05.jpg'),
          // name: '臺北市私立靜心高級中學',
        },
        {
          img: isMobile
            ? require('./s6/06_slider_6_m.jpg')
            : require('./s6/06.jpg'),
          // name: '臺北市私立靜心高級中學',
        },
        {
          img: isMobile
            ? require('./s6/06_slider_7_m.jpg')
            : require('./s6/07.jpg'),
          // name: '臺北市私立靜心高級中學',
        },
        {
          img: isMobile
            ? require('./s6/06_slider_8_m.jpg')
            : require('./s6/08.jpg'),
          // name: '臺北市私立靜心高級中學',
        },
        {
          img: isMobile
            ? require('./s6/06_slider_9_m.jpg')
            : require('./s6/09.jpg'),
          // name: '臺北市私立靜心高級中學',
        }, */
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
