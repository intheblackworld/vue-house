<template>
  <div class="section4 flex-ac">
    <div class="swipe absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img loading="lazy" :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <img loading="lazy" src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img loading="lazy" src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
        </div>
      </div>
    </div>
    <div class="content">
      <img src="./s3/t_bg.png" alt="" class="t_bg">
    </div>
    <div class="border"></div>
    <div class="title">
      內斂不羈，型有獨鍾。
    </div>
    <div class="subtitle">
      你選擇的生活，不僅意味品味，<br />
      更意味著你追求的人生
    </div>
    <h3 class="desc1" v-html="slideList[slideIndex].desc1"></h3>
    <div class="desc2" v-html="slideList[slideIndex].desc2"></div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  // background-image: url('~@/projects/hg1/s3/technology_bg.png');
  background-color: #fff;
  background-size: cover;
  background-position: 100%;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.content {
  @include div_l_pc(654, 234, 0, 179);
  top: auto;
  bottom: size(50);
  background-color: #100b09;

  .t_bg {
    @include img_r_pc(254, 0, 0);
    top: auto;
    bottom: 0;
  }
}

.border {
  @include div_l_pc(654, 234, 0, 189);
  top: auto;
  bottom: size(40);
  border: 2px solid #866231;
}

.title {
  @include img_l_pc(472, 0, 285);
  top: auto;
  bottom: size(193);
  font-size: size(46);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: size(1.38);
  text-align: left;
  color: #c3985b;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(451, 0, 287);
  top: auto;
  bottom: size(80);
  font-size: size(23);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: size(3.68);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.desc1 {
  @include img_r_pc(777, 0, 182);
  top: auto;
  bottom: size(149);
  font-size: size(26.1);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: size(4.18);
  text-align: left;
  color: #100b09;
  white-space: nowrap;
}

.desc2 {
  @include img_r_pc(777, 0, 180);
  top: auto;
  bottom: size(43);
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: size(2.88);
  text-align: left;
  color: #333333;
}

/* Swipe */
.swipe {
  @include img_l_pc(1920, 0, 0);
  height:calc(100% - 11vw);
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
    right: 20px;
    bottom: 0px;
    color: #fff;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.75);
    font-size: 22px;
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
  width: auto;
  bottom: size(20);
  right: size(20);
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
    background-color: #fff;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #c3985b;
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
        background: #c3985b;
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
    height: sizem(505 + 250);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .content {
    @include div_l_m(346, 160, 240, 12);
    background-color: #100b09;

    .t_bg {
      @include img_r_m(170, 0, 0);
      top: auto;
      bottom: 0;
    }
  }

  .border {
    @include div_l_m(346, 160, 245, 17.8);
    border: 2px solid #866231;
  }

  .title {
    @include img_l_m(231, 265, 33);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(0.75);
    text-align: left;
    color: #c3985b;
    white-space: nowrap;
  }

  .subtitle {
    @include img_l_m(310, 310, 33);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.2;
    letter-spacing: sizem(2.4);
    text-align: left;
    color: #ffffff;
    white-space: normal;
  }

  .desc1 {
    @include img_c_m(310, 250 + 176);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.98;
    letter-spacing: sizem(2.7);
    text-align: justify;
    color: #333333;
    white-space: normal;
  }

  .desc2 {
    @include img_c_m(310, 250 + 255);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.98;
    letter-spacing: sizem(1.7);
    text-align: justify;
    color: #333333;
  }

  /* Swipe */
  .swipe {
    @include img_l_m(375, 0, 0);
    height: sizem(250);
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
    overflow: visible;
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
      font-size: sizem(16);
    }
  }

  .pagination {
    width: auto;
    height: sizem(40);
    top: auto;
    bottom: sizem(-40) !important;
    left: 0;
    right: auto;
    margin: auto;
    justify-content: center;
  }

  .pagination-dot {
    padding: 5px;
    margin: 0 5px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 12px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: #fff;
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #d66655;
        border-radius: 12px;
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
          background: #d66655;
          border-radius: 12px;
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
    z-index: 30;

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

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
      isDialog: false,
      slideList: [
        {
          img: require('./s4/1.jpg'),
          desc1: '華山文創園區，空總文化實驗場，前衛創意。',
          desc2:
            '華山每年輪展內容領先全臺灣，從國際到在地、經典到時尚，每個領域的可能性都在這裡發生，也因此吸引了各式風範的生活品牌落址：光點、肯園、克莉絲汀...，甚至跨足電子的舊光華、新三創也都蔓延新生。',
        },
        {
          img: require('./s4/2.jpg'),
          desc1: '齊東詩社，台北琴道館、書畫院，薈萃年華。',
          desc2:
            '不只與時俱進，仔細看進這區，傳統文化是這裡之所以精彩的風骨。齊東詩社保存日治時期細緻而優雅的建築空間，與琴道館、書畫院，共同復育舊人智慧淬鍊的精彩文化。',
        },
        {
          img: require('./s4/3.jpg'),
          desc1: '遠東SOGO商圈，京站新光三越，定義時尚。',
          desc2:
            '法國巴黎第一區，義大利米蘭倫巴底區，如同每座時尚之都都會聚焦在精華地區，台北東區的時尚地位也不必多語。<br />時尚快活，收藏慢享，瀟灑人生可以有一百種方式。',
        },
        {
          img: require('./s4/4.jpg'),
          desc1: '雙捷運忠孝新生、善導寺，交匯只在核心。',
          desc2:
            '忠孝新生橫軸藍線、縱軸橘線，支線延伸等同拿下整座台北城。善導寺鄰近台北車站小國門，更坐擁創意文化與宗教重鎮，無論自用快捷、投資報酬都是最讓人期待的標的。',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {},
}
</script>
