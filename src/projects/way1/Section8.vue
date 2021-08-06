<template>
  <div class="section8">
    <img src="./s8/08_green_style.png" :alt="`${info.caseName}_grass`" class="grass">
    <div class="title" v-if="isPC"  data-aos="fade-up" data-aos-delay="200">
      <span>5</span>米大面寬<br />單層大主臥・尊寵電梯禮遇
    </div>
    <div class="title" v-if="isMobile"  data-aos="fade-up" data-aos-delay="200">
      5米大面寬・單層大主臥・尊寵電梯禮遇
    </div>
    <div class="hr"  data-aos="fade-right" data-aos-delay="200"></div>
    <ul class="desc"  data-aos="fade-up" data-aos-delay="400">
      <li><b>建築語彙之美:</b>新古典建築美學，呈現低調奢華、大器不凡的名宅街廓</li>
<li><b>空間尊寵之美:</b>5米大面寬，專屬電梯規劃，獨門獨院的大戶居住享受</li>
<li><b>景觀意境之美:</b>戶戶享獨立後院，單層主臥景觀大露台，頂樓賞景空間</li>
<li><b>精工品質之美:</b>嚴選高規格建材，以精工細膩的營建品質，提升建築價值</li>

    </ul>
    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true"
    >
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex" v-if="isPC">
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
    <div class="swipe swipe1 absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="isMobile">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList1" v-show="slideIndex1 === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decMultiIndex(1)">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addMultiIndex(1)">
        </div>
      </div>
    </div>
    <div class="swipe swipe2 absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="isMobile">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList2" v-show="slideIndex2 === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decMultiIndex(2)">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addMultiIndex(2)">
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width: 100%;
  height: size(1036);
  max-height: size(1036);
  min-height: size(1036);
  position: relative;
  // background-color: tt;
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width:100%;
  height:100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.grass {
  @include img_l_pc(550, 664, 626);
transform-origin: 50% 0%;
  animation: grass 2s 0s ease-in-out alternate-reverse infinite;
}

@keyframes grass {
  to {
    transform:rotate(3deg)skewX(-2deg);
  }
}

.title {
  @include img_l_pc(616, 267, 117);
  font-size: size(40.5);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: size(2.43);
  text-align: center;
  color: #009fb1;
  white-space: nowrap;
  span {
    font-size: size(49);
  }
}

.hr {
  @include img_l_pc(46, 426, 390);
  border-bottom: solid size(4) #009fb1;
}
.desc {
  @include img_l_pc(505, 467, 168);
  font-size: size(22);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing:0.03em;
  text-align: justify;
  color: #2f2c2c;
  list-style-type: disc;
  margin: 0;
  li{margin: 0 0 0.7em  1.2em;;
  list-style:inherit;
  }
}

/* Swipe */
.swipe {
  width: size(988);
  height: size(646);
  top: size(196);
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
  .prev-btn,
  .next-btn {
    margin-right: 10px;
    width: size(50);
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
  .section8 {
    min-height: auto;
    max-height: initial;
    height: sizem(253 + 580);
  }

  .grass {
    display: none;
  }

  .title {
    @include img_c_m(360, 324);
    font-size: sizem(17.7);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: sizem(1.06);
    text-align: center;
    color: #009fb1;
    white-space: nowrap;
    span {
      font-size: size(17.7);
    }
  }

  .hr {
    @include img_c_m(46, 245 + 18);
    width: 1px;
    height: sizem(50);
    border-left: solid size(4) #009fb1;
  }
  .desc {
    @include img_c_m(330, 118 + 245);
    font-size: sizem(14);
  }

  /* Swipe */
  .swipe {
    width: sizem(375);
    height: sizem(245);
    min-height: auto;
    top: sizem(0);
    left: sizem(0);
    object-fit: cover;
  }

  .swipe2 {
    width: sizem(375);
    height: sizem(245);
    min-height: auto;
    top: auto;
    bottom: sizem(0);
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
        /*
        {
          img: require('./s8/08_slider_01.jpg'),
          name: '文詠閱覽會議區3D示意',
        },
        {
          img: require('./s8/08_slider_02.jpg'),
          name: '澄品多功能資訊室3D示意',
        },
        {
          img: require('./s8/08_slider_03.jpg'),
          name: '采藝媽媽教室3D示意',
        },
        {
          img: require('./s8/08_slider_04.jpg'),
          name: '清寬迎賓門廳3D示意',
        },
        {
          img: require('./s8/08_slider_05.jpg'),
          name: '樂活健身房3D示意',
        },
        {
          img: require('./s8/08_slider_06.jpg'),
          name: '舒韻瑜珈教室3D示意',
        },
        */
        {
          img: require('./s8/08_slider_09.jpg'),
          name: '居家空間示意圖',
        },
        {
          img: require('./s8/08_slider_08.jpg'),
          name: '居家空間示意圖',
        },
        {
          img: require('./s8/08_slider_15.jpg'),
          name: '參考示意圖',
        },
        {
          img: require('./s8/08_slider_12.jpg'),
          name: '參考示意圖',
        },
        {
          img: require('./s8/08_slider_14.jpg'),
          name: '參考示意圖',
        },
      ],
      slideList1: [
        {
          img: require('./s8/08_slider_08.jpg'),
          name: '居家空間示意圖',
        },
        {
          img: require('./s8/08_slider_09.jpg'),
          name: '居家空間示意圖',
        },
      ],
      slideList2: [
        {
          img: require('./s8/08_slider_10.jpg'),
          name: '居家空間示意圖',
        },
        {
          img: require('./s8/08_slider_11.jpg'),
          name: '居家空間示意圖',
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