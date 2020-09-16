<template>
  <div>
    <div class="section10">
      <div class="opacity-3-bg">
        <img src="./s2/ink1.png" alt="" class="ink-1 absolute" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200">
        <!-- <img src="./s2/ink1.png" alt="" class="ink-2 absolute" data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="1200"> -->
        <!-- <img src="./s2/ink2.png" alt="" class="ink-2 absolute" data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="1200"> -->
      </div>
      <div class="opacity-5-bg">
        <img src="./s11/leaf (10).png" alt="" class="leaf-10 absolute" data-aos="fade" data-aos-delay="200" data-aos-duration="1200">
      </div>
      <transition-group name="swipe-fade" data-aos="fade-down" data-aos-delay="400">
        <div class="title absolute" v-for="(slide, index) in slideList" :key="slide.img + 'title'" v-html="slide.title" v-show="slideIndex === index">
        </div>
      </transition-group>
      <transition-group name="swipe-fade" data-aos="fade-down" data-aos-delay="600">
        <div class="desc absolute" v-for="(slide, index) in slideList" :key="slide.img + 'desc'" v-html="slide.desc" v-show="slideIndex === index">
        </div>
      </transition-group>
      <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="1000" v-if="!isMobile">
        <div :class="`pagination-dot relative`" v-for="(slide, index) in slideList" :key="slide.img + '-dot' + index" @click="goTo(index)">
          <svg class="progress absolute" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" fill="none" stroke="#999999" stroke-width="5" />
            <circle class="pagi_circle progress__value" cx="60" cy="60" r="54" fill="none" stroke="#006699" stroke-width="4" v-show="slideIndex === index" />
          </svg>
          <span :class="`${slideIndex === index ? 'active' : ''} flex-c`">{{index + 1}}
          </span></div>
      </div>
      <div class="swipe absolute" data-aos="fade-up" data-aos-delay="800">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <div v-for="(slide, i) in slideList" :key="slide.img" :class="`swipe-item absolute ${slideIndex === i ? 'active' : ''} ${(slideIndex === (i + 1) || slideIndex === (i - slideList.length + 1)) ? 'base' : ''}`">
            <img :src="slide.img" alt="" class="swipe-item">
          </div>
          <!-- <div class="swipe-btns absolute flex-ac flex-jb">
            <div class="prev-btn" @click="decIndex">
              <img src="./s6/l.png" alt="">
              <svg class="progress absolute" width="75" height="75" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#e6e6e6" stroke-width="4" />
                <circle class="dec_circle progress__value" cx="60" cy="60" r="54" fill="none" stroke="#006699" stroke-width="3" />
              </svg>
            </div>
            <div class="next-btn" @click="addIndex">
              <img src="./s6/r.png" alt="">
              <svg class="progress absolute" width="75" height="75" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#e6e6e6" stroke-width="4" />
                <circle class="add_circle progress__value" cx="60" cy="60" r="54" fill="none" stroke="#006699" stroke-width="3" />
              </svg>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section10 {
  width: size(1920);
  height: size(1080);
  min-height: size(1080);
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
    top: 0;
    left: auto;
    right: 0;
    height: auto;
  }
}

.swipe {
  width: size(950);
  height: size(860);
  min-height: size(860);
  top: size(0);
  left: size(154);
  margin: 0 auto;
  object-fit: cover;
}

.swipe-wrap {
  width: 100%;
  height: 100%;
  // overflow: hidden;
}

.swipe-item {
  width: 100%;
  height: 100%;
  opacity: 0;
  left: 0;
  transition: opacity 1s ease-in-out;
  z-index: 0;

  img {
    width: 100%;
  }

  &:nth-child(1) {
    z-index: 1;
    opacity: 1;
  }

  &.base {
    z-index: 1;
    opacity: 1;
  }
  &.active {
    z-index: 2;
    opacity: 1;
  }
}

.pagination {
  width: auto;
  bottom: size(200);
  right: size(260);
  justify-content: center;
}

.pagination-dot {
  padding: size(15);
  cursor: pointer;
  z-index: 4;

  span {
    display: flex;
    width: size(36);
    height: size(36);
    border-radius: size(36);
    // box-shadow: 0 0 0 1px #999999;
    position: relative;
    background-color: rgba(0, 0, 0, 0.01);
    transition: all 0.5s;

    &::before {
      // content: '';
      // width: 60%;
      // height: 60%;
      // display: block;
      // background: #fff;
      // border-radius: size(36);
      // opacity: 1;
      // position: absolute;
      // top: 20%;
      // // transform: translateY(-50%);
      // left: 20%;
      // transition: all 0.3s;
      // transform-origin: center;
      // transform: scale(0);
    }
    &.active {
      &::before {
        // content: '';
        // width: 60%;
        // height: 60%;
        // display: block;
        // background: #fff;
        // border-radius: size(36);
        // opacity: 1;
        // position: absolute;
        // top: 20%;
        // // transform: translateY(-50%);
        // left: 20%;
        // transform: scale(1);
      }
    }
  }
}

.swipe-btns {
  width: 130%;
  left: -15%;
  height: 100%;
  padding: 0 0;
  z-index: 3;

  .prev-btn,
  .next-btn {
    font-size: size-m(10);
    cursor: pointer;
    height: 100%;
    width: 3em;
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 0 1em;

    img {
      width: size(72);
      opacity: 0.5;
    }
  }
}
.title {
  width: size(618);
  height: size(104);
  padding-top: size(10);
  top: size(280);
  right: size(104);
  background-image: url('./s6/title.png');
  background-size: cover;
  font-size: size(35);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.37;
  letter-spacing: size(4.9);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  width: size(572);
  top: size(420);
  right: size(110);
  margin: 0 auto;
  font-size: size(25);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: size(3.5);
  text-align: center;
  color: #000000;
  white-space: nowrap;
}

.ink-1 {
  height: size(957);
  top: size(0);
  right: size(-400);
}

.ink-2 {
  height: size(1341);
  top: size(-200);
  left: size(-600);
}

.opacity-3-bg {
  opacity: 0.3;
}

.progress {
  width: size(40);
  left: size(15);
  transform: rotate(-90deg) translate(3px, -2px);
}

.progress__value {
  stroke-dasharray: 339.292;
  stroke-dashoffset: 339.292;
  transition: stroke-dashoffset 0.01s linear;
}

.leaf-10 {
  width: 100vw;
  top: size(-320);
  left: size(0);
  animation: leaf 3s ease-in-out infinite alternate-reverse;
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
  .section10 {
    width: 100vw;
    height: sizem(340 + 318);
    min-height: auto;
  }
  .img {
    display: none;
  }

  .swipe {
    width: 100vw;
    height: sizem(340);
    top: 0;
    left: 0;
    object-fit: cover;
  }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .swipe-item {
    background: #4a649f;
    img {
      height: auto;
      position: absolute;
      bottom: 0;
    }
  }
  // .swipe-item {
  //   width: 100%;
  //   height: 100%;
  //   left: 100%;
  //   transition: left 1s ease-in-out;
  //   z-index: 0;
  //   object-fit: cover;

  //   &.base {
  //     z-index: 1;
  //     left: 0;
  //   }
  //   &.active {
  //     z-index: 2;
  //     left: 0;
  //   }
  // }

  .pagination {
    width: auto;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
    display: none;
  }

  .pagination-dot {
    padding: 5px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 14px;
      height: 14px;
      border-radius: 14px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
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
          left: 23%;
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

    .prev-btn,
    .next-btn {
      //   width: size-m(15);
      cursor: pointer;
    }
  }

  .title {
    width: sizem(340);
    height: sizem(84);
    top: sizem(360);
    right: sizem(0);
    left: 0;
    margin: 0 auto;
    padding-top: sizem(20);
    background-size: 100% 100%;
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(3.5);
    text-align: center;
    color: #ffffff;
  }

  .desc {
    width: sizem(310);
    top: sizem(470);
    right: sizem(0);
    left: 0;
    margin: 0 auto;
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: sizem(1.5);
    text-align: center;
    color: #000000;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

import slider from '@/mixins/slider.js'
import $ from 'jquery'

export default {
  name: 'section10',

  mixins: [slider],

  components: {},

  data() {
    return {
      isMobile,
      isTablet,
      i: 0,
      startcalc: null,
      slideList: [
        {
          img: isMobile ? require('./s11/1.jpg') : require('./s11/1.jpg'),
          title: '職人嚴選 清景麟精質精工',
          desc:
            '生活質感 細節體現<br />住友制震系統<br />日本三協氣密窗<br />日本Panasonic / L-CLASS精品廚具設備<br />德國精品衛浴設備',
        },

        {
          img: isMobile ? require('./s11/2.jpg') : require('./s11/2.jpg'),
          title: '職人嚴選 清景麟精質精工',
          desc:
            '生活質感 細節體現<br />住友制震系統<br />日本三協氣密窗<br />日本Panasonic / L-CLASS精品廚具設備<br />德國精品衛浴設備',
        },
        {
          img: isMobile ? require('./s11/3.jpg') : require('./s11/3.jpg'),
          title: '職人嚴選 清景麟精質精工',
          desc:
            '生活質感 細節體現<br />住友制震系統<br />日本三協氣密窗<br />日本Panasonic / L-CLASS精品廚具設備<br />德國精品衛浴設備',
        },
        {
          img: isMobile ? require('./s11/4.jpg') : require('./s11/4.jpg'),
          title: '職人嚴選 清景麟精質精工',
          desc:
            '生活質感 細節體現<br />住友制震系統<br />日本三協氣密窗<br />日本Panasonic / L-CLASS精品廚具設備<br />德國精品衛浴設備',
        },
      ],
    }
  },

  methods: {
    calc() {
      this.i++
      if (this.i == 100) {
        // 一個 = 是給值 二個 == 是判斷
        // $('.progress__value').css('opacity', 0)
        this.i = 0 // i算到101時 i歸0
        // this.stopcalc() //停止時間計算
        // setTimeout(() => {
        //   $('.progress__value').css('opacity', 1)
        //   this.start()
        // }, 1000);
      }
      // console.log(this.i)
    },
    start() {
      //開始計算
      this.startcalc = setInterval(this.calc, 50) // 不停地調用calc函數 每0.1秒觸發
    },
    stopcalc() {
      clearInterval(this.startcalc) //停止調用函數
    },
  },

  created() {},

  mounted() {
    this.start()
    // let a = 50
    // a = a * 3.39
    // a = 339 - a
    // $('.progress__value').css('stroke-dashoffset', a)
    // this.$refs.dec_circle.css('stroke-dashoffset', 300)
  },

  watch: {
    i() {
      $('.progress__value').css('stroke-dashoffset', this.dec_circle_value)
      // if (this.direction === 'add') {
      //   $('.add_circle').css('opacity', 1)
      //   $('.dec_circle').css('opacity', 0)
      // } else {
      //   $('.add_circle').css('opacity', 0)
      //   $('.dec_circle').css('opacity', 1)
      // }
    },
  },

  computed: {
    dec_circle_value() {
      return 339 - this.i * 3.39
    },
  },
}
</script>
