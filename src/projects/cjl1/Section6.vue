<template>
  <div>
    <div class="section6">
      <div class="opacity-3-bg">
        <img src="./s2/ink1.png" alt="" class="ink-1 absolute" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200">
        <!-- <img src="./s2/ink1.png" alt="" class="ink-2 absolute" data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="1200"> -->
        <img src="./s2/ink2.png" alt="" class="ink-2 absolute" data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="1200">
      </div>
      <div v-if="!isMobile">
        <div class="title absolute" data-aos="fade-down" data-aos-delay="600">
          崇明路、崇德商圈燙金地段
        </div>
        <div class="desc absolute" data-aos="fade-down" data-aos-delay="700">
          食衣住行育樂樣樣具備，在林森路以南、生產路以北、崇善路以西及大同路以東，將台南文化中心包圍在內，尤其崇德公有零售市場周邊最熱鬧，發展時間早，成熟度高，生活機能非常便利。
        </div>
        <div class="swipe absolute" data-aos="fade-up" data-aos-delay="800">
          <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
            <div v-for="(slide, i) in slideList" :key="slide.img" :class="`swipe-item absolute ${slideIndex === i ? 'active' : ''} ${(slideIndex === (i + 1) || slideIndex === (i - slideList.length + 1)) ? 'base' : ''}`">
              <img :src="slide.img" alt="" class="swipe-item">
            </div>
            <!-- <div class="pagination absolute flex-ac">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div> -->
            <div class="swipe-btns absolute flex-ac flex-jb">
              <div class="prev-btn" @click="decIndex">
                <img src="./s6/l.png" alt="">
                <svg class="progress absolute" width="75" height="75" viewBox="0 0 120 120">
                  <!-- <circle cx="60" cy="60" r="54" fill="none" stroke="#e6e6e6" stroke-width="4" /> -->
                  <circle class="dec_circle progress__value" cx="60" cy="60" r="54" fill="none" stroke="#006699" stroke-width="3" />
                </svg>
              </div>
              <div class="next-btn" @click="addIndex">
                <img src="./s6/r.png" alt="">
                <svg class="progress absolute" width="75" height="75" viewBox="0 0 120 120">
                  <!-- <circle cx="60" cy="60" r="54" fill="none" stroke="#e6e6e6" stroke-width="4" /> -->
                  <circle class="add_circle progress__value" cx="60" cy="60" r="54" fill="none" stroke="#006699" stroke-width="3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isMobile">
        <div class="swipe absolute" data-aos="fade-up" data-aos-delay="800">
          <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
            <div v-for="(slide, i) in slideList" :key="slide.img" :class="`swipe-item absolute ${slideIndex === i ? 'active' : ''} ${(slideIndex === (i + 1) || slideIndex === (i - slideList.length + 1)) ? 'base' : ''}`">
              <img :src="slide.img" alt="" class="swipe-item">
            </div>
            <!-- <div class="pagination absolute flex-ac">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div> -->
            <!-- <div class="swipe-btns absolute flex-ac flex-jb">
              <div class="prev-btn" @click="decIndex">
                <img src="./s6/l.png" alt="">
                <svg class="progress absolute" width="75" height="75" viewBox="0 0 120 120">
                  <circle class="dec_circle progress__value" cx="60" cy="60" r="54" fill="none" stroke="#006699" stroke-width="3" />
                </svg>
              </div>
              <div class="next-btn" @click="addIndex">
                <img src="./s6/r.png" alt="">
                <svg class="progress absolute" width="75" height="75" viewBox="0 0 120 120">
                  <circle class="add_circle progress__value" cx="60" cy="60" r="54" fill="none" stroke="#006699" stroke-width="3" />
                </svg>
              </div>
            </div> -->
          </div>
        </div>
        <div class="title absolute" data-aos="fade-down" data-aos-delay="600">
          崇明路、崇德商圈燙金地段
        </div>
        <div class="desc absolute" data-aos="fade-down" data-aos-delay="700">
          食衣住行育樂樣樣具備，在林森路以南、生產路以北、崇善路以西及大同路以東，將台南文化中心包圍在內，尤其崇德公有零售市場周邊最熱鬧，發展時間早，成熟度高，生活機能非常便利。
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: size(1920);
  height: size(900);
  min-height: size(900);
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
  width: size(930);
  height: size(550);
  min-height: size(550);
  top: size(330);
  right: 0;
  left: 0;
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
  bottom: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
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
        left: 20%;
        transform: scale(1);
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
  padding-top: size(20);
  top: size(0);
  right: 0;
  left: 0;
  margin: 0 auto;
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
}

.desc {
  width: size(808);
  height: size(187);
  top: size(150);
  right: 0;
  left: 0;
  margin: 0 auto;
  font-size: size(25);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: size(3.5);
  text-align: center;
  color: #000000;
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
  width: size(75);
  transform: rotate(-90deg) translateY(-1.5px);
}

.progress__value {
  stroke-dasharray: 339.292;
  stroke-dashoffset: 339.292;
  transition: stroke-dashoffset 0.01s linear;
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
    height: sizem(221 + 289);
    min-height: auto;
  }
  .img {
    display: none;
  }

  .swipe {
    width: 100vw;
    height: sizem(221);
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
    padding-top: sizem(10);
    top: sizem(30 + 221);
    right: 0;
    left: 0;
    margin: 0 auto;
    background-image: url('./s6/title.png');
    background-size: 100% 100%;
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }

  .desc {
    width: sizem(310);
    height: auto;
    top: sizem(112 + 221);
    right: 0;
    left: 0;
    margin: 0 auto;
    font-size: sizem(15);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: sizem(2.1);
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
  name: 'section6',

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
          img: isMobile
            ? require('./s6/1德安百貨.jpg')
            : require('./s6/1德安百貨.jpg'),
        },
        {
          img: isMobile
            ? require('./s6/2文化中心.jpg')
            : require('./s6/2文化中心.jpg'),
        },
        {
          img: isMobile
            ? require('./s6/3崇德市場.jpg')
            : require('./s6/3崇德市場.jpg'),
        },
        {
          img: isMobile ? require('./mo/6/3.jpg') : require('./s6/4公園.jpg'),
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
      if (this.direction === 'add') {
        $('.add_circle').css('opacity', 1)
        $('.dec_circle').css('opacity', 0)
      } else {
        $('.add_circle').css('opacity', 0)
        $('.dec_circle').css('opacity', 1)
      }
    },
  },

  computed: {
    dec_circle_value() {
      return 339 - this.i * 3.39
    },
  },
}
</script>
