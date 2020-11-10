<template>
  <div>
    <div class="section9">
      <!-- <img src="./s2/hr.png" alt="" class="hr absolute"> -->
      <!-- <div class="title-d absolute-jc">設計美學</div> -->
      <div class="swipe absolute-jc" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
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
      <div class="title absolute" data-aos="fade-down" data-aos-delay="300">園藝設計</div>
      <div class="subtitle absolute" data-aos="fade-down" data-aos-delay="300">太研規劃景觀建築師設計總監吳書原</div>
      <div class="line absolute" data-aos="fade" data-aos-delay="200" ></div>
      <div class="desc absolute" data-aos="fade-up" data-aos-delay="300">
        台中花博植栽策畫、台北「西區門戶計畫」三井倉庫歷史建築景觀推手吳書原，畢業於英國AA建築學院，為英國皇家景觀建築師協會副會員（ALI），對於景觀植物的觀念，有著遠多於視覺感官的深刻認知，跳脫傳統框架，為當代植物哲學的實踐家。
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section9 {
  width: size(1920);
  height: size(1178);
  max-height: size(1358);
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

.title-d {
  width: size(160);
  top: size(90);
  font-size: size(40);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #005369;

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: size(-60);
    width: size(36);
    height: size(36);
    background-image: url('./s2/title.png');
    background-size: cover;
    transform: rotate(180deg);
    top: size(8);
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: size(-60);
    top: size(8);
    width: size(36);
    height: size(36);
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
  width: size(125);
  top: size(1091 - 180);
  left: size(210);
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(1.5);
  text-align: left;
  color: #005369;
  white-space: nowrap;
}

.subtitle {
  width: size(226);
  top: size(1095 - 180);
  left: size(382);
  font-size: size(24);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(1.2);
  text-align: left;
  color: #2c9899;
  white-space: nowrap;
}
.line {
  background-color: #888;
  width: size(1500);
  bottom: size(196);
  left: size(210);
  height: size(2);
}
.desc {
  width: size(1500);
  bottom: size(110);
  left: size(210);
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing:0.05em;
  text-align: justify;
  color: #666666;
}

/* Swipe */
.swipe {
  width: size(1500);
  height: size(844);
  top: size(211 - 180);
  // left: size(210);
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
    right:1.5em;
    bottom:1em;
    color: #fff;
    font-size: size(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.89px;
    text-align: left;
    color: #ffffff;
   text-shadow:0 0.1em 0.3em #000;
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
  bottom: size(-40);
  right: size(-10);
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
    box-shadow: 0 0 0 1px #ccc;
    position: relative;
    background-color: #ccc;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #005369;
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
        background: #005369;
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
    font-size: sizem(18);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(0);
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
    .slide-name{
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
          img: require('./s8/1景觀戲水池.jpg'),
          name: '景觀戲水池',
        },
        {
          img: require('./s8/2頂樓星空bar.jpg'),
          name: '頂樓星空bar',
        },
        {
          img: require('./s8/3CASA迎賓大廳.jpg'),
          name: 'CASA迎賓大廳',
        },
        {
          img: require('./s8/4人文交誼廳.jpg'),
          name: '人文交誼廳',
        },
        {
          img: require('./s8/5地下停車場.jpg'),
          name: '地下停車場',
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
