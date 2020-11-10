<template>
  <div>
    <div class="section6">
      <div class="title-d absolute-jc" data-aos="fade-down" data-aos-delay="200">大師團隊</div>
      <div class="swipe swipe1 absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(1)" v-touch:swipe.right="() => addMultiIndex(1)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList1" v-show="slideIndex1 === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList1" :key="slide.img + '-dot'" @click="goToMultiIndex(1, index)"><span :class="`${slideIndex1 === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decMultiIndex(1)">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addMultiIndex(1)">
          </div>
        </div>
      </div>
      <div class="swipe swipe2 absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(2)" v-touch:swipe.right="() => addMultiIndex(2)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList2" v-show="slideIndex2 === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList2" :key="slide.img + '-dot'" @click="goToMultiIndex(2, index)"><span :class="`${slideIndex2 === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decMultiIndex(2)">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addMultiIndex(2)">
          </div>
        </div>
      </div>
      <div class="title1 absolute" data-aos="fade-down" data-aos-delay="200">
        瑞天開發
      </div>
      <div class="desc1 absolute" data-aos="fade-up" data-aos-delay="600">
        在大台北有不少精品建築的瑞天開發，可以說是「精緻豪宅」代言人，推案足跡遍及台北市中心、天母、汐止、土城…，擅長打造高坪效空間，讓每一塊珍稀土地，注入全新價值
      </div>
      <div class="title2 absolute" data-aos="fade-down" data-aos-delay="400">
        晏京機構
      </div>
      <div class="desc2 absolute" data-aos="fade-up" data-aos-delay="800">
        「好建築，應該以居住者的立場出發，走在人們還沒想到的地方。」以優良品質、專業技術、創意延伸、貼心服務四大核心為企業精神，建築品質屢獲國家金獎肯定。
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: size(1920);
  height: size(1030);
  min-height: size(1030);
  max-height: size(1080);
  position: relative;
  background: #0004;
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
  color: #fff;

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: size(-60);
    width: size(36);
    height: size(36);
    background-image: url('./s6/title.png');
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
    background-image: url('./s6/title.png');
    background-size: cover;
  }
}

.title1,
.title2 {
  width: size(725);
  top: size(766);
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
}

.title1,
.desc1 {
  left: size(210);
}

.title2,
.desc2 {
  left: size(980);
}

.desc1,
.desc2 {
  width: size(730);
  top: size(812);
  font-size: size(18);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing:0.03em;
  text-align: justify;
  color: #e0fcfc;
}

/* Swipe */
.swipe {
  width: size(1310);
  height: size(703);
  top: calc(50% - 18.3vw);
  right: 0;
  object-fit: cover;
  &.swipe1 {
    width: size(730);
    height: size(470);
    top: size(260);
    left: size(210);
  }

  &.swipe2 {
    width: size(730);
    height: size(470);
    top: size(260);
    right: size(210);
  }
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
  bottom: size(-35);
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
      background: #eee93a;
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
        background: #eee93a;
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
  .section6 {
    width: 100vw;
    height: sizem(1094);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .title-d {
    width: sizem(120);
    top: sizem(51);
    font-size: sizem(30);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: normal;
    text-align: center;
    color: #fff;

    &::after {
      content: '';
      display: block;
      position: absolute;
      right: sizem(-45);
      width: sizem(28);
      height: sizem(28);
      top: sizem(4);
      background-image: url('./s6/title.png');
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
      background-image: url('./s6/title.png');
      background-size: cover;
    }
  }

  .title1,
  .title2 {
    width: sizem(100);
    left: sizem(33);
    font-size: sizem(25);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }

  .title1 {
    top: sizem(410);
  }

  .desc1 {
    top: sizem(455);
  }

  .title2 {
    top: sizem(883);
  }
  .desc2 {
    top: sizem(932);
  }

  .desc1,
  .desc2 {
    width: sizem(310);
    left: sizem(33);
    font-size: sizem(15);
    line-height: 1.73;
  }
  /* Swipe */
  .swipe {
    width: 100vw;
    height: sizem(241);
    min-height: auto;
    top: sizem(0);
    left: sizem(0);
    object-fit: cover;

    &.swipe1 {
      width: sizem(375);
      height: sizem(240);
      top: sizem(140);
      left: sizem(0);
    }

    &.swipe2 {
      width: sizem(375);
      height: sizem(240);
      top: sizem(612);
      right: sizem(0);
    }
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
  name: 'section6',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList1: [
        {
          img: require('./s6/1-1仁愛禮藏.jpg'),
          name: '仁愛禮藏',
        },
        {
          img: require('./s6/1-2半島花園.jpg'),
          name: '半島花園',
        },
      ],

      slideList2: [
        {
          img: require('./s6/2-1中正晏京.jpg'),
          name: '中正晏京',
        },
        {
          img: require('./s6/2-2宜蘭山嶼海.jpg'),
          name: '宜蘭山嶼海',
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
      if (this.viewIndex === 6) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
