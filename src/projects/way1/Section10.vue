<template>
  <div class="section10">
    <img src="./s10/10_house.png" :alt="`${info.caseName}_house`" class="house">
    <div class="hr" v-if="isMobile"></div>
    <div class="big-title" v-if="isPC" data-aos="fade-up" data-aos-delay="200">
      嚴選頂規建材 滿足你講究的品味
    </div>
    <div class="big-title" v-if="isMobile" data-aos="fade-up" data-aos-delay="200">
      嚴選頂規建材<br />滿足你講究的品味
    </div>
    <div class="content">
      <div class="title"  data-aos="fade-up" data-aos-delay="200">
        靜音舒適工學
      </div>
      <div class="desc"  data-aos="fade-up" data-aos-delay="300">
      ●力霸氣密隔音窗
      </div>
      <div class="title"  data-aos="fade-up" data-aos-delay="400">
        創新進化工學
      </div>
      <div class="desc"  data-aos="fade-up" data-aos-delay="500">
      ●冷熱水管採不鏽鋼管保溫披覆<br />
      ●10年防水保固＋5年建材保固
      </div>
      <div class="title"  data-aos="fade-up" data-aos-delay="600">
        防疫健康工學
      </div>
      <div class="desc"  data-aos="fade-up" data-aos-delay="700">
      ●ICI金利登水泥漆＋長庚健康塗料
      </div>
      <div class="title"  data-aos="fade-up" data-aos-delay="800">
        嚴選頂規建材
      </div>
      <div class="desc"  data-aos="fade-up" data-aos-delay="900">
      ●戶戶配備太平洋電梯<br />
      ●RAKＸROMAN精品磁磚<br />
      ●INAX日本質感衛浴<br />
      ●hansgrohe德國衞浴五金<br />
      ●櫻花整體廚具
      </div>
     <!-- 
      <div class="title"  data-aos="fade-up" data-aos-delay="200">
        靜音舒適工學
      </div>
      <div class="desc"  data-aos="fade-up" data-aos-delay="300">
        ●台灣MUCA美木家隔音樓板<br />
        ●力霸氣密隔音窗<br />
        ●5+5mm膠合玻璃
      </div>
      <div class="title"  data-aos="fade-up" data-aos-delay="400">
        創新進化工學
      </div>
      <div class="desc"  data-aos="fade-up" data-aos-delay="500">
        ●立瑾承諾10年防水保固＋5年建材保固<br />
        ●B1臨停車位配置電動車充電設備<br />
        ●冷熱水管皆採用明管配置、保溫披覆
      </div>
      <div class="title"  data-aos="fade-up" data-aos-delay="600">
        防疫健康工學
      </div>
      <div class="desc"  data-aos="fade-up" data-aos-delay="700">
        ●STUDOR排水通氣防疫系統<br />
        ●三菱電梯車廂配備空氣清淨機
      </div>
      <div class="title"  data-aos="fade-up" data-aos-delay="800">
        嚴選頂規建材
      </div>
      <div class="desc"  data-aos="fade-up" data-aos-delay="900">
        ●INAX日本質感衛浴 ●櫻花整體廚具<br />
        ●hansgrohe德國衞浴五金<br />
        ●APD指紋電子密碼鎖
      </div>
      -->
    </div>
    <div class="swipe absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div :class="`swipe-btns absolute flex-ac ${isMobile ? 'flex-jb' : ''}`">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          <div class="order-index" v-if="isPC">{{slideIndex + 1}}/{{slideList.length}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section10 {
  width: 100vw;
  height: size(1236);
  max-height: size(1236);
  min-height: size(1236);
  position: relative;
  // background-color: tt;
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: size(1080);
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

.house {
  @include img_c_pc(640, 664);
  top: auto;
  bottom: 0;
}

.big-title {
  @include img_r_pc(808, 0, 95);
  font-size: size(53.6);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: size(3.22);
  text-align: center;
  color: #2f2c2c;
  white-space: nowrap;
}

.content {
  @include img_l_pc(558, 15, 99);
  font-size: size(25.4);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing:0.02em;
  text-align: left;
  color: #302d2c;
}
.title {
  font-size: 1.24em;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing:0.06em;
  color: #009fb1;
  margin:0.5em 0 0.3em;
  span {
    font-size:1.55em;
  }
}

/* Swipe */
.swipe {
  width: size(988);
  height: size(646);
  top: size(113);
  right: size(98);
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
    right: 1.5em;
    bottom: 1em;
    color: #fff;
    font-size: size(23);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.89px;
    text-align: left;
    color: #ffffff;
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
  bottom: size(188);
  left: calc(50% + 6.95vw);
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
    box-shadow: 0 0 0 5px #ccc;
    border-radius: 15px;
    position: relative;
    // background-color: #ccc;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: transparent;
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
        box-shadow: 0 0 0 5px #000;
        border-radius: 15px;
        background-image: #000;
        background-size: 70% 70%;
        background-position: center;
        background-repeat: no-repeat;
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
  width: 20%;
  height: size(50);
  padding: 0;
  z-index: 3;
  right: 0;
  bottom: size(-60);

  .prev-btn {
    margin-right: 10px;
  }
  .prev-btn,
  .next-btn {
    width: size(50);
    margin-right: 10px;
    cursor: pointer;
  }

  .order-index {
    font-size: size(26);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.21;
    letter-spacing: size(3.67);
    text-align: left;
    color: #070304;
    margin-right: 10px;
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
  .section10 {
    min-height: auto;
    max-height: initial;
    height: sizem(1025 + 104);
  }

  .house {
    @include img_c_m(274, 664);
    top: auto;
    bottom: 0;
  }

  .big-title {
    @include img_c_m(196, 82);
    font-size: sizem(23.2);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: sizem(1.39);
    text-align: center;
    color: #302d2c;
    white-space: nowrap;
  }

  .hr {
    @include img_c_m(32, 56);
    border-bottom: solid sizem(3) #009fb1;
  }

  .content {
    @include img_l_m(314, 456, 27);
  }

  .title {
    font-size: sizem(17.7);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: sizem(1.06);
    text-align: left;
    color: #009fb1;
    margin: sizem(15) 0 sizem(5);
    span {
      font-size: sizem(49);
    }
  }

  .desc {
    font-size: sizem(14.3);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.61;
    letter-spacing: sizem(0.29);
    text-align: left;
    color: #302d2c;
  }

  /* Swipe */
  .swipe {
    width: sizem(375);
    height: sizem(265);
    min-height: auto;
    top: sizem(169);
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
    bottom: 0;

    .prev-btn,
    .next-btn {
      width: sizem(30);
      background-color: #fff;
      border-radius: 999px;
      margin-right: 0;
      
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
      slideList: [
        {
          img: require('./s10/10_slider_01.jpg'),
          name: '樣品屋實景',
        },
        {
          img: require('./s10/10_slider_02.jpg'),
          name: '樣品屋實景',
        },
        {
          img: require('./s10/10_slider_03.jpg'),
          name: '樣品屋實景',
        },
        {
          img: require('./s10/10_slider_04.jpg'),
          name: '樣品屋實景',
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
    //   if (this.viewIndex === 3) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>