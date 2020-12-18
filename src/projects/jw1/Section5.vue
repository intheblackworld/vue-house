<template>
  <div>
    <div class="section5">
      <div class="swipe absolute" v-if="isMobile" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
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
          <div class="swipe-btns absolute flex-ac flex-jb">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div>
        </div>
      </div>

      <div class="items flex wrap flex-jb" v-if="isPC">
        <div class="item"></div>
        <div class="item" v-for="slide in slideList" :key="slide.name">
          <img :src="slide.img" alt="" class="item-img">
          <div class="flex-ac">
            <h3 v-html="slide.title" class="item-title"></h3>
            <h3 v-html="slide.subtitle" class="item-subtitle"></h3>
          </div>
          <div class="item-desc" v-html="slide.desc"></div>
        </div>
      </div>

      <h1 class="s-title" data-aos="fade" data-aos-delay="200">
        Craft
      </h1>
      <h1 class="subtitle" data-aos="fade" data-aos-delay="400">
        五星團隊<span></span>首席藝匠
      </h1>
      <h1 class="desc" data-aos="fade" data-aos-delay="600" v-if="isPC">
        繼〔京旺三重奏〕之後，京旺開發特聘北市豪宅御用建築師呂建勳首獻二重重劃區左岸，強強聯手，首席團隊精鑄雙園首席之家。
      </h1>

      <h3 v-html="slideList[slideIndex].title" class="item-title" v-if="isMobile"></h3>
      <h3 v-html="slideList[slideIndex].subtitle" class="item-subtitle" v-if="isMobile"></h3>
      <div class="item-desc" v-html="slideList[slideIndex].desc" v-if="isMobile"></div>  
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: size(1920);
  height:size(1500);
 /* min-height: size(1550);
  max-height: size(1550);*/
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
  height: 100%;
  //min-height: size(900);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.s-title {
  @include img_l_pc(180, 100, 177);
  font-size: size(90);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(-1.71);
  text-align: left;
  color: #e7ecec;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(303, 250, 181);
  font-size: size(32);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: size(1.94);
  text-align: left;
  color: #248184;
  white-space: nowrap;

  span {
    width: 1.2em;
    height: 1.2em;
    position: relative;
    display: inline-block;
    text-align: center;
  }

  span:before,
  span:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    background-color: #000;
    top: 0.2em;
  }

  span:before {
    transform: rotate(45deg) translateX(-50%);
  }
  span:after {
    transform: rotate(-45deg) translateX(-50%);
  }
}

.desc {
  @include img_l_pc(440, 360, 181);
  font-size: size(20);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.2;
  letter-spacing:0.3em;
  text-align: justify;
  color: #221815;
}

.items {
  @include img_l_pc(1562, 100, 177);
}

.item {
  width: size(490);
  margin-bottom: size(100);
}

.item-img {
  width: 100%;
  margin-bottom: size(27);
}

.item-title {
  font-size: size(32);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(1.25);
  text-align: left;
  color: #000000;
  margin-bottom: size(57);
  margin-right: size(15);
}

.item-subtitle {
  font-size: size(23);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(1.36);
  text-align: left;
  color: #000000;
  margin-bottom: size(49);
}

.item-desc {
  font-size: size(22);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing:0.03em;
  text-align: justify;
  color: #248184;
}

/* Swipe */
.swipe {
  width: size(1198);
  height: size(850);
  bottom: 0;
  left: 0;
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
    height: size(850);
  }

  .slide-name {
    left:1.2em;
    bottom:1.2em;
    color: #fff;
    font-size:  size(18);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing:0.03em;
    text-align: left;
    text-shadow: 0 0.3em 1em #0003;
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
  bottom: size(44);
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
  .section5 {
    width: 100vw;
    height: sizem(640);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }
  .s-title {
    @include img_r_m(222, 58, 114);
    font-size: sizem(58);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing:0.03em;
    text-align: left;
    color: #e7ecec;
    white-space: nowrap;
  }

  .subtitle {
    @include img_l_m(222, 140, 40);
    font-size: sizem(19);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1.5);
    text-align: left;
    color: #248184;
    white-space: nowrap;

    span {
      width: 1.2em;
      height: 1.2em;
      position: relative;
      display: inline-block;
      text-align: center;
    }

    span:before,
    span:after {
      content: '';
      position: absolute;
      width: 1px;
      height: 100%;
      background-color: #000;
      top: 0.2em;
    }

    span:before {
      transform: rotate(45deg) translateX(-50%);
    }
    span:after {
      transform: rotate(-45deg) translateX(-50%);
    }
  }


  .item-title {
    @include img_l_m(77, 524, 41);
    font-size: sizem(26);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(-0.3);
    text-align: left;
    color: #000;
    white-space: nowrap;
  }

  .item-subtitle {
    @include img_l_m(157, 533, 140);
    font-size: sizem(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1);
    text-align: left;
    color: #000;
    white-space: nowrap;
  }

  .item-desc {
    @include img_l_m(300, 570, 40);
    font-size: sizem(15);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing:0.02em;
    text-align: justify;
    color: #248184;
  }

  /* Swipe */
  .swipe {
    width: 100vw;
    height: sizem(300);
    min-height: auto;
    top: sizem(194);
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
  .slide-name {
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
  name: 'section5',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s5/1.jpg'),
          title: '張嘉群',
          subtitle: '京旺開發董事長',
          desc:
            '建築業不是製造業、而是服務業，建商最重要的任務是如何幫住戶解決問題。',
        },
        {
          img: require('./s5/2.jpg'),
          title: '呂建勳',
          subtitle: '哈佛建築碩士',
          desc:
            '每座建築皆應有其所屬的『Manifesto』，就像一種態度，向觀者宣示它存在的姿態。',
        },
        {
          img: require('./s5/3.jpg'),
          title: '陳昫吟',
          subtitle: '如榆公設設計',
          desc:
            '好的室內設計必須與建築語彙相互回應，將建築理念延續、傳遞給居住之人。',
        },
        {
          img: require('./s5/4.jpg'),
          title: '鄭如珊',
          subtitle: '三十三景觀設計',
          desc:
            '人生活在景觀之上，植栽不單是觀看的過程，景觀設計應從人與自然的互動為出發。',
        },
        {
          img: require('./s5/5.jpg'),
          title: '賴晨旭',
          subtitle: '結構工程博士',
          desc:
            '結構規劃不是紙上談兵，除了對抗地震、颱風，還必須通盤考量，預防人為性的不當施工。',
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
