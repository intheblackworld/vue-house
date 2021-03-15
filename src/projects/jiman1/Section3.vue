<template>
  <div class="section3">
    <div class="swipe absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
        <div class="swipe-btns absolute flex-ac flex-jb" v-if="isPC">
          <img src="./all/slider_left.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/slider_right.png" alt="" class="next-btn" @click="addIndex">
        </div>
      </div>
    </div>
    <img src="./s3/03_flower.png" :alt="`${info.caseName}_f`" class="f4" v-if="isPC">
    <img src="./mobile/03/03_flower_m.png" :alt="`${info.caseName}_f`" class="f4" v-if="isMobile">

    <img src="./s3/03_title.png" :alt="`${info.caseName}_f`" class="title-img">
    <div class="desc" v-if="isPC">
      珍藏大安富境最後一片濱水波光，公園水岸雙景觀，富饒市中心擁攬大山大水無邊眼界；收藏公館師大景美核心繁華，羅斯福路雙商圈齊鳴綻放。集文教區靜謐素雅，商業區富庶豐饒，政經區自若安居，景觀區悠然韻味，入則寧靜，出則富麗，藏景藏靜藏繁華，簡單，也不簡單。
    </div>
    <div class="desc" v-if="isMobile">
      珍藏大安富境最後一片濱水波光，公園水岸雙景觀，富饒市中心擁攬大山大水；收藏公館師大景美核心繁華，羅斯福路雙商圈齊鳴綻放。入則寧靜，出則富麗，簡單，也不簡單。
    </div>
    <div class="content">
      <div class="content-title">
        市集熙攘 得人間百味
      </div>
      <div class="content-desc">
        興隆市場、景美早市、景美夜市、水源市場、公館夜市
      </div>
      <div class="content-title">
        水岸綠帶 化淡泊心境
      </div>
      <div class="content-desc">
        福和河濱公園、萬和一號公園、萬和二號公園、萬和三
        號公園、萬年公園、萬慶公園、大鵬堤外公園
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: size(1920);
  height: size(1080);
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  min-height: size(1080);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}
.f4 {
  @include img_r_pc(556, 0, -50);
  top: auto;
  bottom: 0;
  transform-origin: 100% 80%;
  transform: skewY(2deg);
  animation: flow1 3s 0s ease-in-out infinite alternate;
}
@keyframes flow1 {
  to {
    transform: skewY(0);
  }
}

.title-img {
  @include img_r_pc(125, 137, 181);
}

.desc {
  @include img_l_pc(599, 710, 234);
  font-size: size(23.1);
  line-height: size(48);
  // letter-spacing: size(2.44);
  text-align: left;
  font-weight: 400;
  color: #000;
}

.content {
  @include div_r_pc(542, 232, 712, 508);
  padding: size(16) size(25);
  border: 1px solid #c07f76;
}

.content-title {
  font-size: size(25.1);
  line-height: size(31.2);
  // letter-spacing: size(2.44);
  text-align: left;
  font-weight: 500;
  color: #000;
}

.content-desc {
  font-size: size(20.1);
  line-height: size(31.2);
  // letter-spacing: size(2.44);
  text-align: left;
  font-weight: 400;
  color: #000;
  margin-bottom: size(20);
}

/* Swipe */
.swipe {
  width: size(1178);
  height: size(512);
  top: size(143);
  left: size(235);
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
    object-fit: cover;
  }

  .slide-name {
    left: 20px;
    bottom: 20px;
    color: #fff;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.11;
    letter-spacing: 0.89px;
    text-align: left;
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
  width: 50%;
  bottom: size(20);
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
    width: size(17);
    height: size(17);
    border-radius: size(17);
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
        width: 110%;
        height: 110%;
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
  .section3 {
    width: 100vw;
    height: sizem(666);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .f4 {
    @include img_l_m(158, 133, -10);
    transform-origin: 0% 90%;
    transform: skewY(2deg);
    animation: flow1 4s 0s ease-in-out infinite alternate;
  }
  @keyframes flow1 {
    to {
      transform: skewY(0);
    }
  }

  .title-img {
    @include img_l_m(44.8, 35, 42);
  }

  .desc {
    @include img_r_m(210, 53.6, 26.5);
    font-size: sizem(12.5);
    line-height: sizem(24.3);
    letter-spacing: sizem(0.52);
    text-align: left;
    font-weight: 400;
    color: #000;
  }

  .content {
    @include div_r_m(208, 130, 191, 27.5);
    padding: sizem(8) sizem(12);
    border: 1px solid #c07f76;
  }

  .content-title {
    font-size: sizem(10.8);
    line-height: sizem(14.9);
    // letter-spacing: sizem(2.44);
    text-align: left;
    font-weight: 500;
    color: #000;
  }

  .content-desc {
    font-size: sizem(9.7);
    line-height: sizem(14.9);
    // letter-spacing: sizem(2.44);
    text-align: left;
    font-weight: 400;
    color: #000;
    margin-bottom: sizem(10);
  }

  /* Swipe */
  .swipe {
    width: sizem(321);
    height: sizem(299);
    min-height: auto;
    top: sizem(341);
    left: sizem(27);
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
      height: sizem(300);
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
  }

  .pagination {
    width: auto;
    bottom: sizem(13);
    left: 0;
    right: 0;
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
      width: sizem(8);
      height: sizem(8);
      border-radius: sizem(8);
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
          width: 110%;
          height: 110%;
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
      width: sizem(30);
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
  name: 'section3',

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
            ? require('./mobile/03/03_slider_1_m.jpg')
            : require('./s3/03_sloder_1.jpg'),
        },
        {
          img: isMobile
            ? require('./mobile/03/03_slider_2_m.jpg')
            : require('./s3/03_sloder_2.jpg'),
        },
        {
          img: isMobile
            ? require('./mobile/03/03_slider_3_m.jpg')
            : require('./s3/03_sloder_3.jpg'),
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
