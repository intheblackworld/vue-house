<template>
  <div class="section4">
    <div class="swipe swipe1 absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" key="swipe-0">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img + i" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + index + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
        <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
          <div class="prev-btn" @click="decIndex"></div>
          <div class="next-btn" @click="addIndex"></div>
        </div>
      </div>
    </div>

    <div class="swipe swipe2 absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" key="swipe-1">
      <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(1)" v-touch:swipe.right="() => addMultiIndex(1)">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, index) in slideList1" v-show="slideIndex1 === index" :key="slide.img + index" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList1" :key="slide.img + index + '-dot'" @click="goToMultiIndex(index, 1)"><span :class="`${slideIndex1 === index ? 'active' : ''}`"></span></div>
        </div>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <div class="prev-btn" @click="decMultiIndex(1)"></div>
          <div class="next-btn" @click="addMultiIndex(1)"></div>
        </div>
      </div>
    </div>
    <div class="hr hr1" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="400"></div>
    <h3 class="title1 title" v-if="!isMobile" data-aos="fade-up" data-aos-delay="0" data-aos-duration="400">三面臨路近二千坪基地‧千坪庭園</h3>
    <h3 class="title1 title" v-if="isMobile" data-aos="fade-up" data-aos-delay="0" data-aos-duration="400">三面臨路近二千坪基地<br>千坪庭園</h3>
    <div class="desc1 desc" data-aos="fade-up" data-aos-delay="100" data-aos-duration="400"><span>【嘉璟一品硯】</span> 坐擁三面臨路醒目地位，廣達近二千坪大器基地，
      規劃千坪庭園景觀，臨路大方謙退，打造桃園國道門面名牌。</div>
    <div class="hr hr2" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="400"></div>
    <h3 class="title2 title" data-aos="fade-up" data-aos-delay="0" data-aos-duration="400">全齡化休閒公設<br />全家樂遊心天地</h3>
    <div class="desc2 desc" data-aos="fade-up" data-aos-delay="100" data-aos-duration="400">是尊榮的禮遇，更是愉悅的生活。規劃星級飯店式禮賓門廳、健身房、交誼廳、兒童遊戲區、KTV、多媒體娛樂室等多元化休閒會館，天天在家，就像渡假般享受</div>
    <img src="./s4/bg_b.png" :alt="`${info.caseName}_img`" class="bg-img bg-b" v-if="isPC">
    <img src="./m/5/bg_b.png" :alt="`${info.caseName}_img`" class="bg-img bg-b" v-if="isMobile">
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: 100%;
  height: size(1740 + 270);
  min-height: size(1740 + 270);
  max-height: size(1740 + 270);
  position: relative;
  // background-color: #fff;
  // min-height: size(900);
  background-image: url('./s4/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  background-attachment: fixed;
  // overflow: hidden;
}

.bg-b {
  position: absolute;
  width: 100%;
  height: auto;
  left: 0;
  top: auto;
  bottom: 0;
}

.hr {
  background-color: #000;
}

.hr1 {
  @include div_l_pc(4, 42.5, 855, 394);
}

.hr2 {
  @include div_l_pc(4, 92, 1728, 394);
}

.title {
  font-size: size(35);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
}

.title1 {
  @include img_l_pc(525, 847, 408);
  width: auto;
}

.title2 {
  @include img_l_pc(323, 1722, 408);
  width: auto;
}

.desc {
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.25;
  letter-spacing: normal;
  text-align: left;
  color: #606060;
  // white-space: nowrap;
  span {
    font-weight: bold;
  }
}

.desc1 {
  @include img_r_pc(627, 847, 325);
}

.desc2 {
  @include img_r_pc(803, 1727, 325);
}

// begin
.fade-up-leave-to {
  transform: translateY(15px);
  opacity: 0;
  z-index: 0;
}
// end
.fade-up-enter {
  transform: translateY(55px);
  opacity: 0;
  z-index: 1;
}

.fade-up-enter-active {
  transition: all 0.5s ease;
}

.fade-up-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

/* Swipe */
.swipe {
  width: size(1231);
  height: size(666);
  left: 0;
  right: 0;
  margin: 0 auto;
  object-fit: cover;
  position: absolute;
  // background: #0344;

  &::before {
    content: '';
    background-color: #909090;
    width: 100%;
    height: 100%;
    position: absolute;
    top: size(-20);
    right: size(-20);
  }

  &::after {
    content: '';
    border: solid size(2.4) #998675;
    width: 100%;
    height: 100%;
    position: absolute;
    top: size(20);
    right: size(20);
  }
}

.swipe1 {
  top: size(117);
}

.swipe2 {
  top: size(1008);
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
  transition: all 0.3s ease;
}

.swipe-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
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
    height: sizem(750 + 145 + 207);
    min-height: auto;
    max-height: initial;
    background-image: url('./m/4/bg.jpg');
    // background-attachment: scroll;
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .hr {
    background-color: #000;
  }

  .hr1 {
    @include div_l_m(4, 64, 49.8, 33);
  }

  .hr2 {
    @include div_l_m(4, 69.3, 495, 33);
  }

  .title {
    font-size: sizem(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
  }

  .title1 {
    @include img_l_m(275, 43, 41);
  width: auto;
  }

  .title2 {
    @include img_l_m(231, 493, 41);
  width: auto;
  }

  .desc {
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: left;
    color: #606060;
    // white-space: nowrap;
    span {
      font-weight: bold;
    }
  }

  .desc1 {
    @include img_l_m(310, 142, 33);
  }

  .desc2 {
    @include img_l_m(310, 589, 33);
  }

  /* Swipe */
  .swipe {
    width: sizem(347);
    height: sizem(187);
    min-height: auto;
    top: auto;
    bottom: 0;
    left: sizem(4);
    object-fit: cover;
  }

  .swipe1 {
    top: sizem(250);
  }

  .swipe2 {
    top: sizem(723);
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
      right: auto;
      top: auto;
      bottom: 1.2rem;
      right: 1.2rem;
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
    width: 100%;
    height: 100%;
    z-index: 3;

    // .btn {
    //   position: absolute;
    //   width: 100%;
    //   height: 100%;
    // }
    .prev-btn,
    .next-btn {
      position: absolute;
      height: 100%;
      width: sizem(28);
      // background: #0003;
      top: 0;
    }

    .prev-btn {
      left: 0;
    }
    .next-btn {
      right: 0;
      transform: scaleX(-1);
    }
    .prev-btn::after,
    .next-btn::after {
      content: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 30 80' xml:space='preserve'%3E%3Cpolygon fill='%23FFFFFF' points='15,40 30,0 15,20 0,40 15,60 30,80 '/%3E%3C/svg%3E");
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
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
  name: 'section4',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      blockIndex: 0,
      slideIndex1: 0,
      slideList: [
        {
          img: require('./s4/1.jpg'),
          name: '',
        },
        {
          img: require('./s4/1.jpg'),
          name: '',
        },
      ],
      slideList1: [
        {
          img: require('./s4/2.jpg'),
          name: '',
        },
        {
          img: require('./s4/2.jpg'),
          name: '',
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
