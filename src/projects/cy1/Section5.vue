<template>
  <div class="section5">
    <img src="./s5/05_people_img1.png" :alt="`${info.caseName}_people1`" class="people1">
    <img src="./s5/05_people_img2.png" :alt="`${info.caseName}_people2`" class="people2">
    <img src="./s5/05_tree_img.png" :alt="`${info.caseName}_tree`" class="tree">
    <div class="container flex-as flex-jb wrap">
      <div class="swipe swipe1" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(1)" v-touch:swipe.right="() => addMultiIndex(1)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList1" v-show="slideIndex1 === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="() => decMultiIndex(1)">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="() => addMultiIndex(1)">
          </div>
          <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="500" data-aos-offset="-500">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList1" :key="slide.img + '-dot'" @click="goToMultiIndex(1, index)"><span :class="`${slideIndex1 === index ? 'active' : ''}`"></span></div>
          </div>
        </div>
      </div>
      <div class="title-block title-block1 flex-c">
        馥郁書香環繞<br />
        滿園芬芳桃李
      </div>
      <div class="desc-block desc-block1 flex-c">
        以蘆洲百年學風氣韻薈萃滋養下一代，<br />
        出家門5分鐘抵達忠義國小、鷺江國中明星學校，<br />
        替家長省下9年接送孩子的時間，<br />
        孩子睡飽，學習效率更好。<br /><br />
        【九揚盧登堡】是小寶貝的成長堡壘，<br />
        更是小學霸的搖籃!
      </div>
      <div class="swipe swipe2" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(2)" v-touch:swipe.right="() => addMultiIndex(2)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList2" v-show="slideIndex2 === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="() => decMultiIndex(2)">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="() => addMultiIndex(2)">
          </div>
          <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="500" data-aos-offset="-500">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList2" :key="slide.img + '-dot'" @click="goToMultiIndex(2, index)"><span :class="`${slideIndex2 === index ? 'active' : ''}`"></span></div>
          </div>
        </div>
      </div>
      <div class="title-block title-block2 flex-c">
        300米捷運蘆洲站<br />
        美好連成線
      </div>
      <div class="swipe swipe3" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(3)" v-touch:swipe.right="() => addMultiIndex(3)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList3" v-show="slideIndex3 === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="() => decMultiIndex(3)">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="() => addMultiIndex(3)">
          </div>
          <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="500" data-aos-offset="-500">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList3" :key="slide.img + '-dot'" @click="goToMultiIndex(3, index)"><span :class="`${slideIndex3 === index ? 'active' : ''}`"></span></div>
          </div>
        </div>
      </div>
      <div class="swipe swipe4" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(4)" v-touch:swipe.right="() => addMultiIndex(4)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList4" v-show="slideIndex4 === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="() => decMultiIndex(4)">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="() => addMultiIndex(4)">
          </div>
          <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="500" data-aos-offset="-500">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList4" :key="slide.img + '-dot'" @click="goToMultiIndex(4, index)"><span :class="`${slideIndex4 === index ? 'active' : ''}`"></span></div>
          </div>
        </div>
      </div>
      <div class="desc-block desc-block2 flex-c">
        距離捷運蘆洲站300米，五股交流道10分鐘，<br />
        開車族15分鐘可輕鬆抵達台北市，<br />
        也可透過永安大橋輕易連結64快速道路<br />
        串聯三重、 板橋、中和等區域。<br /><br />
        未來更規畫捷運環狀線與五股輕軌建設，<br />
        串聯大台北美好生活圈。
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  // height: size(540 + 460);
  // max-height: size(1080);
  position: relative;
  // background: #5fc8ce url('./s5/rb.png') fixed no-repeat bottom right;
  // background-size: size(1200) auto;
  // min-height: size(1238 + 200);
  // background-image: url('./s5/bg.jpg');
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

.container {
  width: size(1284);
  margin: size(80) auto size(85);
}

.title-block {
  width: size(638.5);
  background-color: #542e71;
  font-size: size(30.7);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin-bottom: size(6.5);
}

.title-block1 {
  height: size(444.5);
}

.title-block2 {
  height: size(452.6);
}

.desc-block {
  width: size(638.5);
  font-size: size(15);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.07;
  letter-spacing: normal;
  text-align: center;
  color: #606060;
  margin-bottom: size(6.5);
}

.desc-block1 {
  height: size(488.5);
}

.desc-block2 {
  height: size(504);
}

.tree {
  @include img_r_pc(600, 50, -150);
  top: auto;
  bottom: 0;
  animation: tree 4s ease-out infinite alternate;
  transform: skewX(2deg);
  transform-origin: 50% 100%;
}

@keyframes tree {
  to {
    transform: skewX(-2deg);
  }
}

.people1 {
  @include img_l_pc(271, 730, 78);
}

.people2 {
  @include img_r_pc(295, 540, 540);
  top: auto;
  bottom: size(-40);
}

/* Swipe */
.swipe {
  width: size(638.5);
  margin-bottom: size(6.5);
  // width: size(1500);
  // height: size(844);
  // top: size(260);
  // left: size(210);
  // object-fit: cover;
}

.swipe1 {
  height: size(444.5);
}

.swipe2 {
  height: size(488.5);
}

.swipe3 {
  height: size(620);
}

.swipe4 {
  height: size(664);
  margin-top: size(-165);
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
    left: 1.5em;
    bottom: 1em;
    color: #fff;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.89px;
    text-align: left;
    color: #ffffff;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
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
  bottom: size(28);
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
    width: size(14.5);
    height: size(14.5);
    border-radius: size(14.5);
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
      border-radius: size(14.5);
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
        background: #fff;
        border-radius: size(14.5);
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
  .section5 {
    min-height: auto;
    max-height: initial;
    height: sizem(2140 - 84);
    background-position: right calc(100% - 63px);
    background-size: 100% auto;
  }

  .container {
    width: sizem(375);
    margin: 0 auto;
  }

  .title-block {
    width: 100vw;
    background-color: #542e71;
    font-size: sizem(20);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    margin-bottom: 0;
    position: absolute;
  }

  .title-block1 {
    height: sizem(147);
    top: 0;
    left: 0;
  }

  .title-block2 {
    top: sizem(261 + 147 + 246 + 286);
    height: sizem(142);
  }

  .desc-block {
    width: 100vw;
    font-size: sizem(13);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: normal;
    text-align: center;
    color: #606060;
    margin-bottom: 0;
    position: absolute;
  }

  .desc-block1 {
    height: sizem(246);
    top: sizem(261 + 147);
    left: 0;
  }

  .desc-block2 {
    top: sizem(261 + 147 + 246 + 286 + 142 + 364);
    height: sizem(223);
  }

  .tree {
    @include img_r_m(300, 50, -150);
    top: auto;
    bottom: sizem(385);
    animation: tree 4s ease-out infinite alternate;
    transform: skewX(2deg);
    transform-origin: 50% 100%;
  }

  @keyframes tree {
    to {
      transform: skewX(-2deg);
    }
  }

  .people1 {
    @include img_l_m(167, 612 - 74, 7);
  }

  .people2 {
    display: none;
    // @include img_r_pc(295, 540, 540);
    // top: auto;
    // bottom: size(-40);
  }

  .swipe1 {
    height: sizem(261);
    top: sizem(147) !important;
    left: 0;
  }

  .swipe2 {
    height: sizem(286);
    left: 0;
    top: sizem(261 + 147 + 246);
  }

  .swipe3 {
    height: sizem(364);
    top: sizem(261 + 147 + 246 + 286 + 142);
  }

  .swipe4 {
    height: sizem(390);
    margin-top: 0;
    top: sizem(261 + 147 + 246 + 286 + 142 + 364 + 223)
  }

  /* Swipe */
  .swipe {
    width: 100vw;
    // height: sizem(211);
    min-height: auto;
    // top: sizem(149);
    position: absolute;
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
    bottom: sizem(14);
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
      width: sizem(8.5);
      height: sizem(8.5);
      border-radius: sizem(8.5);
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
        border-radius: sizem(8.5);
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
          background: #fff;
          border-radius: sizem(8.5);
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
      slideIndex1: 0,
      slideIndex2: 0,
      slideIndex3: 0,
      slideIndex4: 0,
      slideList1: [
        {
          img: require('./s5/05_slider1_1.jpg'),
          name: '三民高中',
        },
        {
          img: require('./s5/05_slider1_2.jpg'),
          name: '忠義國小',
        },
        {
          img: require('./s5/05_slider1_3.jpg'),
          name: '鷺江國民小學',
        },
      ],
      slideList2: [
        {
          img: require('./s5/05_slider2_1.jpg'),
          name: '空中大學',
        },
        {
          img: require('./s5/05_slider2_2.jpg'),
          name: '林建生紀念圖書館',
        },
      ],
      slideList3: [
        {
          img: require('./s5/05_slider3_1.jpg'),
          name: '64快速道路',
        },
        {
          img: require('./s5/05_slider3_2.jpg'),
          name: '蘆洲捷運站',
        },
      ],
      slideList4: [
        {
          img: require('./s5/05_slider4_1.jpg'),
          name: '重陽橋',
        },
        {
          img: require('./s5/05_slider4_2.jpg'),
          name: '永安大橋',
        },
        {
          img: require('./s5/05_slider4_3.jpg'),
          name: '成蘆橋',
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
      if (this.viewIndex === 3) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>