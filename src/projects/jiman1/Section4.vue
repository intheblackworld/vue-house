<template>
  <div class="section4">
    <div class="swipe absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
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
    <img src="./s4/04_flower.png" :alt="`${info.caseName}_f`" class="f5">
    <img src="./s4/04_title.png" :alt="`${info.caseName}_f`" class="title-img">
    <div class="desc" v-if="isPC">
      珍藏大安富境最後一片濱水波光，公園水岸雙景觀，富饒市中心擁攬大山大水無邊眼界；收藏公館師大景美核心繁華，羅斯福路雙商圈齊鳴綻放。集文教區靜謐素雅，商業區富庶豐饒，政經區自若安居，景觀區悠然韻味，入則寧靜，出則富麗，藏景藏靜藏繁華，簡單，也不簡單。
    </div>
    <div class="desc" v-if="isMobile">
      乘著綠園道蔥郁濃蔭，悠哉散步4分鐘即可到達捷運萬隆站，6站抵達轉運大站台北車站，南來北往快意暢行。出門直接上水源快速道路，快接萬華、中正、新店；1分鐘進40米寬羅斯福路，收納西門、台北車站、中正紀念堂、古亭、公館於掌心，富裕榮華沿線自藏。
    </div>
    <div class="content" v-if="isPC">
      <div class="content-title">
        捷運萬隆站
      </div>
      <div class="content-desc">
        散步4分鐘
      </div>

      <div class="content-title">
        公館商圈
      </div>
      <div class="content-desc">
        捷運1站
      </div>

      <div class="content-title">
        台北車站
      </div>
      <div class="content-desc">
        捷運12分鐘
      </div>

      <div class="content-title">
        水源快速道路
      </div>
      <div class="content-desc">
        車行1分鐘
      </div>

      <div class="content-title">
        基隆路高架
      </div>
      <div class="content-desc">
        車行3分鐘
      </div>

      <div class="content-title">
        信義計畫區
      </div>
      <div class="content-desc">
        車行8分鐘
      </div>
    </div>
    <div class="content" v-if="isMobile">
      <div class="content-item white flex-c wrap">
        <div class="content-title">
          捷運萬隆站
        </div>
        <div class="content-desc">
          散步4分鐘
        </div>
      </div>

      <div class="content-item white flex-c wrap">
        <div class="content-title">
          公館商圈
        </div>
        <div class="content-desc">
          捷運1站
        </div>
      </div>

      <div class="content-item white flex-c wrap">
        <div class="content-title">
          台北車站
        </div>
        <div class="content-desc">
          捷運12分鐘
        </div>
      </div>

      <div class="content-item">
        <div class="content-title">
          水源快速道路
        </div>
        <div class="content-desc">
          車行1分鐘
        </div>
      </div>

      <div class="content-item">
        <div class="content-title">
          基隆路高架
        </div>
        <div class="content-desc">
          車行3分鐘
        </div>
      </div>

      <div class="content-item">
        <div class="content-title">
          信義計畫區
        </div>
        <div class="content-desc">
          車行8分鐘
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: size(1920);
  height: size(1080);
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  background-color: #c07f76;
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
.f5 {
  @include img_l_pc(485, 524, -120);
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
  @include img_l_pc(129, 123, 222);
}

.desc {
  @include img_l_pc(905, 724, 437);
  font-size: size(23.1);
  line-height: size(48);
  letter-spacing: size(0.1);
  text-align: left;
  font-weight: 400;
  color: #000;
}

.content {
  @include div_r_pc(331, 810, 139, 205);
  border: 1px solid #fff;
  padding: size(60) size(95);
}

.content-title {
  font-size: size(18.1);
  line-height: size(34);
  // letter-spacing: size(2.44);
  text-align: center;
  font-weight: 500;
  color: #fff;
}

.content-desc {
  font-size: size(23.5);
  line-height: size(42);
  // letter-spacing: size(2.44);
  text-align: center;
  font-weight: 400;
  color: #fff;
  margin-bottom: size(45);
}

/* Swipe */
.swipe {
  width: size(904);
  height: size(553);
  top: size(137);
  left: size(442);
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
  .section4 {
    width: 100vw;
    height: sizem(858);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .f5 {
    @include img_r_m(193, 25, -20);
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
    @include img_l_m(46, 39, 40);
  }

  .desc {
    @include img_r_m(224, 157, 28.55);
    font-size: sizem(12.5);
    line-height: sizem(24.3);
    letter-spacing: sizem(0.25);
    text-align: left;
    font-weight: 400;
    color: #000;
  }

  .content {
    @include div_r_m(321, 217, 656, 27);
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .content-item {
    width: sizem(100);
    margin-bottom: sizem(10);
    &.white {
      width: sizem(100);
      height: sizem(100);
      border-radius: 999px;
      background-color: #fff;
      align-content: center;
      .content-title {
        margin-bottom: sizem(10);
      }
      .content-title, .content-desc {
        color: #d37f76;
        line-height: 1;
      }  
    }
    .content-title {
      font-size: sizem(12.8);
      line-height: sizem(21);
      // letter-spacing: sizem(2.44);
      text-align: center;
      font-weight: 600;
      color: #fff;
    }

    .content-desc {
      font-size: sizem(15.8);
      line-height: sizem(21);
      // letter-spacing: sizem(2.44);
      text-align: center;
      font-weight: 400;
      color: #fff;
      margin-bottom: sizem(5);
    }
  }

  /* Swipe */
  .swipe {
    width: sizem(321);
    height: sizem(298);
    min-height: auto;
    top: sizem(343);
    left: sizem(26);
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
      slideList: [
        {
          img: require('./s4/04_sloder_1.jpg'),
        },
        {
          img: require('./s4/04_sloder_2.jpg'),
        },
        {
          img: require('./s4/04_sloder_3.jpg'),
        },
        {
          img: require('./s4/04_sloder_4.jpg'),
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
      if (this.viewIndex === 4) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
