<template>
  <div>
    <div class="section5">
        <img src="./s5/bg.png" alt="" class="img absolute">
        <div class="tabs absolute">
          <div :class="`tab-btn flex-c ${contentIndex === 0 ? 'active' : ''}`" @click="contentIndex = 0">
            <div class="inside flex-c">
              <img src="./s5/titlew.png" alt="" v-if="contentIndex === 0">
              <img src="./s5/title.png" alt="" v-else>
            </div>
          </div>
          <div :class="`tab-btn flex-c ${contentIndex === 1 ? 'active' : ''}`" @click="contentIndex = 1">
            <h3 class="inside flex-c">
              優越未來新地標
            </h3>
          </div>
          <div :class="`tab-btn flex-c ${contentIndex === 2 ? 'active' : ''}`" @click="contentIndex = 2">
            <h3 class="inside flex-c">
              新營純正市中心
            </h3>
          </div>
        </div>
        <div class="text absolute" v-html="slideList[contentIndex][0].content"></div>
    
      <div class="swipe absolute" data-aos="fade-right" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList[contentIndex]" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="name absolute">{{slide.name}}</div>
            </div>
          </transition-group>
          <div class="pagination absolute flex-ac">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList[contentIndex]" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <!-- <div class="swipe-btns absolute flex-ac flex-jb">
            <div class="prev-btn" @click="decIndex"></div>
            <div class="next-btn" @click="addIndex"></div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import '@/assets/style/function.scss';
.custom-subtitle {
  font-size: size(31);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.9;
  font-weight: bold;
  letter-spacing: size(0.64);
  text-align: justify;
  color: #ffffff;
}

.custom-desc {
  font-size: size(25);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.9;
  letter-spacing: size(0.52);
  text-align: justify;
  color: #491500;
}

@media screen and (max-width: 767px) {
  .custom-subtitle {
    font-size: sizem(22) !important;;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.51 !important;
    font-weight: bold;
    letter-spacing: sizem(0.44) !important;;
    text-align: left;
    color: #ffffff;
  }

  .custom-desc {
    font-size: sizem(15) !important;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71 !important;
    letter-spacing: sizem(0.32) !important;;
    text-align: left;
    color: #491500;
  }
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: size(1920);
  height: 100vh;
  background-color: #eb5b29;
  min-height: size(900);
  overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  //min-height: size(900);
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

.img {
  width: size(540);
  top: size(0);
  left: size(0);
}

.tabs {
  width: size(590);
  top: calc(50% - 18vw);
  left: size(112);

  .tab-btn {
    width: 100%;
    height: size(68);
    margin-bottom: size(23);
    position: relative;
    cursor: pointer;
    .inside {
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      font-size: size(43);
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.34;
      letter-spacing: size(5.16);
      text-align: center;
      color: #491500;
      position: relative;
      z-index: 1;
    }

    &::after {
      width: 100%;
      height: 100%;
      border: 1px solid #491500;
      position: absolute;
      content: '';
      top: 10px;
      left: -10px;
      z-index: 0;
    }

    &.active {
      .inside {
        background-color: #491500;
        color: #fff;
      }
    }
    img {
      width: size(287);
    }
  }
}

.text {
  width: size(600);
  top:calc(50% - 3vw);
  left: size(101);
}

.swipe {
  width: size(1160);
  height: 100%;
  top: size(0);
  right: 0;
  margin: 0 auto;
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
  }

  .name {
    right: 20px;
    bottom: 20px;
    font-size: size(15.7);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: size(0.89);
    text-align: center;
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
  .section5 {
    width: 100vw;
    height: sizem(850);
    min-height: auto;
    max-height: initial;
  }

  .bg-img {
    width: 100vw;
    height: 100vh;
    //min-height: size(900);
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

  .img {
    width: sizem(375);
    top: size(0);
    left: size(0);
  }

  .tabs {
    width: sizem(315);
    top: sizem(30);
    left: sizem(40);

    .tab-btn {
      width: 100%;
      height: sizem(37);
      margin-bottom: sizem(23);
      position: relative;
      cursor: pointer;
      .inside {
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        font-size: sizem(22);
        font-weight: 900;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.34;
        letter-spacing: sizem(2.64);
        text-align: center;
        color: #491500;
        position: relative;
        z-index: 1;
      }

      &::after {
        width: 100%;
        height: 100%;
        border: 1px solid #491500;
        position: absolute;
        content: '';
        top: 10px;
        left: -10px;
        z-index: 0;
      }

      &.active {
        .inside {
          background-color: #491500;
          color: #fff;
        }
      }
      img {
        width: sizem(153);
      }
    }
  }

  .text {
    width: sizem(310);
    top: sizem(213);
    left: sizem(33);
  }

  .swipe {
    width: 100vw;
    height: sizem(350);
    // height: calc(100vh - 63px);
    top: sizem(500);
    left: 0;
    object-fit: cover;
  }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
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
      font-size: size-m(10);
      cursor: pointer;
      height: 100%;
      width: 3em;
      display: flex;
      align-items: center;
      justify-items: center;
      padding: 0 1em;
    }
    .prev-btn::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 1em 1em 1em 0;
      border-color: transparent #0005 transparent transparent;
    }
    .next-btn::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 1em 0 1em 1em;
      border-color: transparent transparent transparent #0005;
    }
  }

  .name {
    right: 10px !important;
    bottom: 10px !important;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section5',

  mixins: [slider],

  components: {},

  data() {
    return {
      isMobile,
      isTablet,
      contentIndex: 0,
      slideList: [
        [
          {
            img: require('./s5/1-1.jpg'),
            name: 'Top Location',
            content:
              '<div class="custom-subtitle">民治路／隋唐街<br />地王角窗絕版身價</div><br /><br /><div class="custom-desc">地段門牌，就是身價。民治路、隋唐街勾勒出新營繁華軸線，寶雅全聯買進美好生活，文化中心與南瀛綠都心公園共構藝文書香，UNIQLO、家樂福、星巴克、Gogoro皆有設點，住在市中心地王，高人一等先天價值締造絕版身價。</div>',
          },
          {
            img: require('./s5/1-2.jpg'),
            name: 'Top Location',
            content:
              '<div class="custom-subtitle">民治路／隋唐街<br />地王角窗絕版身價</div><br /><br /><div class="custom-desc">地段門牌，就是身價。民治路、隋唐街勾勒出新營繁華軸線，寶雅全聯買進美好生活，文化中心與南瀛綠都心公園共構藝文書香，UNIQLO、家樂福、星巴克、Gogoro皆有設點，住在市中心地王，高人一等先天價值締造絕版身價。</div>',
          },
          {
            img: require('./s5/1-3.jpg'),
            name: 'Top Location',
            content:
              '<div class="custom-subtitle">民治路／隋唐街<br />地王角窗絕版身價</div><br /><br /><div class="custom-desc">地段門牌，就是身價。民治路、隋唐街勾勒出新營繁華軸線，寶雅全聯買進美好生活，文化中心與南瀛綠都心公園共構藝文書香，UNIQLO、家樂福、星巴克、Gogoro皆有設點，住在市中心地王，高人一等先天價值締造絕版身價。</div>',
          },
          {
            img: require('./s5/1-4.jpg'),
            name: 'Top Location',
            content:
              '<div class="custom-subtitle">民治路／隋唐街<br />地王角窗絕版身價</div><br /><br /><div class="custom-desc">地段門牌，就是身價。民治路、隋唐街勾勒出新營繁華軸線，寶雅全聯買進美好生活，文化中心與南瀛綠都心公園共構藝文書香，UNIQLO、家樂福、星巴克、Gogoro皆有設點，住在市中心地王，高人一等先天價值締造絕版身價。</div>',
          },
        ],
        [
          {
            img: require('./s5/2-1.jpg'),
            name: '優越未來新地標',
            content:
              '<div class="custom-subtitle">優越未來新地標</div><div class="custom-desc">整合客運、公車、計程車，900公尺距離接軌新營交流道，未來更將引進百貨賣場及豪華商旅，驗收作業已進入最後階段，新營軌道經濟由此展開。</div><div class="custom-subtitle">國家圖書館南部分院</div><div class="custom-desc">34億工程預算，義大利設計大師Carlo Ratti跨海操刀全台首座循環圖書館，高綠覆率結合太陽能科技，打造台南全新藝文聖地，預計2022年正式啟用。</div>',
          },

          {
            img: require('./s5/2-2.jpg'),
            name: '優越未來新地標',
            content:
              '<div class="custom-subtitle">優越未來新地標</div><div class="custom-desc">整合客運、公車、計程車，900公尺距離接軌新營交流道，未來更將引進百貨賣場及豪華商旅，驗收作業已進入最後階段，新營軌道經濟由此展開。</div><div class="custom-subtitle">國家圖書館南部分院</div><div class="custom-desc">34億工程預算，義大利設計大師Carlo Ratti跨海操刀全台首座循環圖書館，高綠覆率結合太陽能科技，打造台南全新藝文聖地，預計2022年正式啟用。</div>',
          },
        ],
        [
          {
            img: require('./s5/3.jpg'),
            name: '新營純正市中心',
          },
        ],
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
