<template>
  <div class="section4">
    <img src="./s1/b.png" alt="" class="b1">
    <img src="./s1/b.png" alt="" class="b2">
    <img src="./s1/b.png" alt="" class="b3">
    <img src="./s1/b.png" alt="" class="b4">
    <img src="./s2/img.png" alt="" class="img1">
    <img src="./s4/img.png" alt="" class="img2">

    <div class="swipe swipe1 absolute" data-aos="fade-up" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList1" v-show="slideIndex1 === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" :alt="slide.name">
            <div class="name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decMultiIndex(1)">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addMultiIndex(1)">
        </div>
        <!-- <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div> -->
      </div>
    </div>
    <div class="swipe swipe2 absolute" data-aos="fade-up" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList2" v-show="slideIndex2 === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" :alt="slide.name">
            <div class="name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decMultiIndex(2)">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addMultiIndex(2)">
        </div>
        <!-- <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div> -->
      </div>
    </div>
    <div class="swipe swipe3 absolute" data-aos="fade-up" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList3" v-show="slideIndex3 === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" :alt="slide.name">
            <div class="name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decMultiIndex(3)">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addMultiIndex(3)">
        </div>
        <!-- <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div> -->
      </div>
    </div>

    <div class="logobg1" data-aos="fade-up" data-aos-delay="400">
      <h3 class="title">
        商圈百貨全數到位<br />
        熟成機能全方位
      </h3>
      <hr>
      <h3 class="desc">散步5分鐘中正北路商圈，美食雜貨一應俱全，全聯、愛買、果菜市場豐富採買，家樂福、Ikea、Costco通通到位。
      </h3>
    </div>

    <div class="logobg2" data-aos="fade-up" data-aos-delay="400">
      <h3 class="title">
        10多座公園+6校環抱<br />
        好環境贏得勝利人生
      </h3>
      <hr>
      <h3 class="desc">散步3分鐘到越堤步道，迎面而來的是氣勢萬千的大台北都會公園美景，多所校園書香環繞，給家人最優質的生活環境。
      </h3>
    </div>

    <div class="logobg3" data-aos="fade-up" data-aos-delay="400">
      <h3 class="title">
        雙捷交會9橋之都<br />
        輕快瞬時移動
      </h3>
      <hr>
      <h3 class="desc">機捷、中和新蘆線交會，車行5分鐘速接快速道路，暢行大台北易如反掌。機捷A2a站延線建設送審中，迎接建設到家門的超級利多。</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: size(1920);
  height: size(2160);
}

.logobg1 {
  // div位置：width: size(656), height: size(708) top: size(113), right: size(182)
  @include div_r_pc(656, 708, 113, 282);
  background-image: url('./s1/logobg.png');
  background-size: cover;
}

.logobg2 {
  @include div_l_pc(656, 708, 716, 252);
  background-image: url('./s1/logobg.png');
  background-size: cover;
}

.logobg3 {
  @include div_r_pc(656, 708, 1367, 282);
  background-image: url('./s1/logobg.png');
  background-size: cover;
}

.title {
  margin-top: size(123);
  font-size: size(45);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4);
  text-align: center;
  color: #ec6300;
  margin-left: size(-40);
  white-space: nowrap;
}

hr {
  width: size(501);
  height: 0;
  border: solid 4px #f6ab00;
  margin: 15px;
  margin-left: size(50);
}

.desc {
  width: size(434);
  margin: 0 auto;
  font-size: size(26);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.83;
  letter-spacing: size(1.89);
  text-align: left;
  color: #231815;
}

.b1 {
  @include img_l_pc(198, 58, 720);
  animation: an2 1.5s infinite alternate;
}

.b2 {
  @include img_l_pc(308, 767, 429);
  animation: an 2.5s infinite alternate;
}

.b3 {
  @include img_l_pc(169, 764, 1141);
  animation: an 2.5s infinite alternate;
}

.b4 {
  @include img_r_pc(671, 0, -300);
  animation: an 4.5s infinite alternate;
}

.img1 {
  @include img_r_pc(348, 457, -180);
  animation: an 2.5s infinite alternate;
}

.img2 {
  @include img_l_pc(548, 857, -280);
  animation: an 2.5s infinite alternate;
}

@keyframes an {
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes an2 {
  to {
    transform: translateY(0) rotate(5deg);
  }
}

/* Swipe */
.swipe {
  width: size(750);
  height: size(470);
  top: 0;
  right: size(0);
  object-fit: cover;

  &.swipe1 {
    top: size(179);
    left: size(171);
  }

  &.swipe2 {
    top: size(821);
    right: size(174);
  }
  &.swipe3 {
    top: size(1442);
    left: size(171);
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .name {
    right: 1.5em;
    bottom: 1em;
    font-size: 0.78125vw;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.89px;
    text-align: left;
    color: #fff;
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
  right: 0;
  top: -35px;
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
    box-shadow: 0 0 0 1px #27a8a8;
    position: relative;
    background-color: rgba(0, 0, 0, 0.01);
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #27a8a8;
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
        background: #27a8a8;
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
  .section4 {
    width: 100vw;
    min-height: sizem(1791);
    height: sizem(1791);
  }
  .logobg1 {
    // div位置：width: size(656), height: size(708) top: size(113), right: size(182)
    @include div_r_m(352,  380, 294,  0);
    background-image: url('./s1/logobg.png');
    background-size: cover;
  }

  .logobg2 {
    @include div_r_m(352,  380, 832,  0);
    background-image: url('./s1/logobg.png');
    background-size: cover;
  }

  .logobg3 {
    @include div_r_m(352,  380, 1373, 0);
    background-image: url('./s1/logobg.png');
    background-size: cover;
  }

  .title {
    margin-top: sizem(66);
    font-size: sizem(24);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2.08);
    text-align: center;
    color: #ec6300;
    margin-left: sizem(-20);
    white-space: nowrap;
  }

  hr {
    width: sizem(269);
    height: 0;
    border: solid 2px #f6ab00;
    margin: 15px;
    margin-left: sizem(30);
  }

  .desc {
    width: sizem(250);
    margin: 0 auto;
    font-size: sizem(15);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: sizem(0.89);
    text-align: left;
    color: #231815;
  }

  .b1 {
    @include img_l_m(80, 60, -20);
    animation: an2 1.5s infinite alternate;
  }

  .b2 {
    @include img_l_m(62, 548, 263);
    animation: an 2.5s infinite alternate;
  }

  .b3 {
    @include img_l_m(134, 560, 12);
    animation: an 2.5s infinite alternate;
  }

  .b4 {
    @include img_r_m(62 , 1117, 63);
    animation: an 4.5s infinite alternate;
  }

  .img1 {
    display: none;
  }

  .img2 {
    @include img_r_m(548, 1250, -280);
    animation: an 2.5s infinite alternate;
  }

  /* Swipe */
  .swipe {
    width: sizem(355);
    height: sizem(222);
    top: 0;
    right: sizem(0);
    object-fit: cover;
    z-index: 1;

    &.swipe1 {
      top: sizem(115);
      left: sizem(10);
    }

    &.swipe2 {
      top: sizem(652);
      right: auto;
      left: sizem(10);
    }
    &.swipe3 {
      top: sizem(1193);
      left: sizem(10);
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

    img {
      width: 100%;
    }
    .name {
      right: 1.5em;
      bottom: 1em;
      font-size: sizem(12);
      font-weight: 400;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: 0.89px;
      text-align: left;
      color: #fff;
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
      box-shadow: 0 0 0 1px #bd2b27;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #bd2b27;
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
          background: #bd2b27;
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
  name: 'section4',

  mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList1: [
        {
          img: require('./s4/1-1.jpg'),
          name: '南紡購物中心',
        },
        {
          img: require('./s4/1-2.jpg'),
          name: '國賓影城',
        },
        {
          img: require('./s4/1-3.jpg'),
          name: '成大商圈',
        },
        {
          img: require('./s4/1-4.jpg'),
          name: '成大商圈',
        },
        {
          img: require('./s4/1-5.jpg'),
          name: '成大商圈',
        },
      ],

      slideList2: [
        {
          img: require('./s4/2-2.jpg'),
          name: '國賓影城',
        },
        {
          img: require('./s4/2-3.jpg'),
          name: '成大商圈',
        },
        {
          img: require('./s4/2-4.jpg'),
          name: '成大商圈',
        },
      ],

      slideList3: [
        {
          img: require('./s4/3-1.jpg'),
          name: '國賓影城',
        },
        {
          img: require('./s4/3-2.jpg'),
          name: '成大商圈',
        },
        {
          img: require('./s4/3-3.jpg'),
          name: '成大商圈',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
