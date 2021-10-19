<template>
  <div class="section6">
    <div class="label">
      P&T GROUP香港巴馬丹拿集團
    </div>
    <picture>
      <source srcset="./webp/s9/m.webp" type="image/webp" />
      <source srcset="./s9/m.jpg" type="image/jpeg" />
      <img src="./s9/m.jpg" alt="1" class="person">
    </picture>
    <picture>
      <source srcset="./webp/s9/rr_m.webp" type="image/webp" />
      <source srcset="./s9/rr_m.png" type="image/jpeg" />
      <img src="./s9/rr_m.png" alt="1" class="sign">
    </picture>
    <div class="title">
      縱橫兩世紀 全球百年建築巨擘<br />
      改寫亞洲建築史
    </div>

    <h3 class="desc">
      香港巴馬丹拿集團成立於1868年，是東南亞歷史最悠久、規模最龐大、聲譽最崇高的建築集團，辦事處橫跨亞洲一線城市。兩世紀來操刀無數富紳豪邸、跨國總部、五星酒店。香港匯豐總行大廈、渣打銀行總部群像，定義中環維港新風貌；上海外灘萬國建築博覽，二分之一出自P&T手筆，奠定劃時代建築標竿；台北遠企香格里拉飯店、信義計畫區多幢百坪豪邸，亦是P&T經典鉅著。
    </h3>

    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade-down" data-aos-delay="800">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img + i" :class="`swipe-item absolute`">
            <picture>
              <source media="(min-width: 767px)" :srcset="slide.webp" type="image/webp" />
              <source media="(min-width: 767px)" :srcset="slide.img" type="image/jpeg" />
              <source media="(max-width: 767px)" :srcset="slide.webpm" type="image/webp" />
              <source media="(max-width: 767px)" :srcset="slide.imgm" type="image/webp" />
              <img :src="slide.img" :alt="info.caseName" class="">
            </picture>
            <h3 class="slide-name absolute" v-html="slide.name"></h3>
          </div>
        </transition-group>
      </div>
      <div class="swipe-btns absolute flex-ac flex-jb">
        <div class="prev-btn" @click="decIndex"></div>
        <div class="next-btn" @click="addIndex"></div>
      </div>
    </div>
    <!-- <div class="pagination absolute flex-ac" v-if="isPC">
      <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot' + index" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
    </div> -->
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section6 {
  width: 100%;
  height: size(900);
  min-height: size(900);
  max-height: auto;
  background-size: cover;
  background-attachment: fixed;
  background-color: #f7f8f8;

  @include md {
    width: 100vw;
    height: sizem(782);
    min-height: auto;
    max-height: initial;
    overflow: visible;
  }
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;
}

.person {
  @include img_l_pc(180, 177, 184);

  @include md {
    @include img_c_m(154, 604);
  }
}

.sign {
  @include img_l_pc(172, 370, 409);

  @include md {
    @include img_c_m(154, 604);
  }
}

.label {
  @include img_l_pc(428, 109, 185);
  font-size: size(29);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(1.45);
  text-align: left;
  color: #c9a063;
  white-space: nowrap;
  @include md {
  }
}
.title {
  @include img_l_pc(464, 474, 185);
  font-size: size(35);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #3e3a39;
  white-space: nowrap;

  @include md {
    @include img_c_m(154, 604);
  }
}

.desc {
  @include img_l_pc(660, 586, 185);
  font-size: size(21);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.76;
  letter-spacing: normal;
  text-align: left;
  color: #3e3a39;

  @include md {
    @include img_c_m(154, 604);
  }
}

/* Swipe */
.swipe {
  @include div_r_pc(660, 660, 118, 185);
  object-fit: cover;

  @include md {
    @include div_c_pc(310, 357, 255);
  }
}

.slide-title {
  @include img_r_pc(660, 120 - 195, 0);
  font-size: size(34);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: normal;
  text-align: left;
  color: #3e3a39;

  @include md {
  }
}
.slide-label {
  @include img_r_pc(660, 654 - 195, 0);
  font-size: size(24);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(1.2);
  text-align: left;
  color: #c9a063;
  @include md {
  }
}

.slide-desc {
  @include img_r_pc(660, 708 - 195, 0);
  font-size: size(20);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: size(1);
  text-align: left;
  color: #727171;

  @include md {
  }
}
.slide-logo {
  position: absolute;
  top: size(700 - 195);
  width: size(120);
  right: 0;
  @include md {
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
  transition: all 1s ease;
}

.swipe-fade-leave-active {
  transition: all 1s ease;
}

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
    right: 1.2em;
    bottom: 0.6em;
    color: #fff;
    font-size: size(16);
    font-weight: 300;
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
  bottom: size(238);
  left: auto;
  right: size(186);
  margin: 0 auto;
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 0px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 0px;
    box-shadow: 0 0 0 1px #c9a063;
    position: relative;
    background-color: transparent;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: transparent;
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
        background: #c9a063;
        border-radius: 0px;
        opacity: 1;
        position: absolute;
        top: 0%;
        box-shadow: 0 0 0 1px #c9a063;
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
  padding: 0 0;
  z-index: 3;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  .prev-btn,
  .next-btn {
    position: relative;
    height: 100%;
    width: 4em;
    font-size: size(20);
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: translateX(100%);
      background-color: #0004;
      transition: all 0.3s;
    }
    &::after {
      content: '';
      width: 2em;
      height: 2em;
      position: absolute;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.75em);
      border: solid #fff;
      border-width: 0.15em 0.15em 0 0;
      transform: rotate(45deg) translate(-10%, 10%);
    }
    // &:hover:before {
    //   transform: translateX(0%);
    // }
    &:hover:after {
      animation: btn 0.5s ease-in-out infinite alternate;
    }
  }
  .prev-btn {
    transform: scaleX(-1);
  }
}
@keyframes btn {
  to {
    transform: rotate(45deg) translate(10%, -10%);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section6 {
    width: 100vw;
    height: sizem(782);
    min-height: auto;
    max-height: initial;
    // background-image: url('./all/section_bg.jpg');
    // background-attachment: scroll;
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: visible;
  }
  .grass {
    @include img_r_m(173, 0, 0);
    top: auto;
    bottom: sizem(-80);
    transform-origin: bottom;
    animation: grass 4s ease-in-out alternate infinite;
  }

  @keyframes grass {
    to {
      transform: skewX(3deg);
    }
  }

  // begin
  .trans-leave-to {
    opacity: 0;
    z-index: 0;
  }
  // end
  .trans-enter {
    opacity: 0;
    z-index: 1;
  }

  .trans-enter-active {
    transition: all 1.8s ease;
  }

  .trans-leave-active {
    transition: all 1.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .line {
    @include div_l_m(7, 177, 39, 33);
    background-color: #40220f;
  }
  .label {
    @include img_l_m(116, 39, 55);
    font-size: sizem(17);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: sizem(2.72);
    text-align: left;
    color: #40220f;
    color: #40220f;
    white-space: nowrap;
    z-index: 2;
  }
  .title {
    @include img_l_m(250, 69, 55);
    font-size: sizem(25);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: left;
    color: #40220f;
    white-space: nowrap;
    z-index: 2;
  }

  .subtitle {
    @include img_l_m(300, 116, 55);
    font-size: sizem(16);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;
    letter-spacing: sizem(0.96);
    text-align: left;
    color: #40220f;
    white-space: normal;
    z-index: 3;
  }

  .work-title {
    @include img_l_m(255, 626, 20);
    top: auto;
    bottom: sizem(123);
    font-size: sizem(22);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.98;
    letter-spacing: sizem(1.32);
    text-align: left;
    color: #40220f;
    white-space: nowrap;
  }
  .work-desc {
    @include img_l_m(170, 301, 33);
    top: auto;
    bottom: sizem(40);
    font-size: sizem(15);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.7;
    letter-spacing: sizem(0.9);
    text-align: left;
    color: #40220f;
    white-space: normal;
  }

  /* Swipe */
  .swipe {
    width: sizem(310);
    height: sizem(357);
    min-height: auto;
    top: sizem(255);
    bottom: auto;
    left: sizem(33);
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
    width: 116%;
    left: -8%;
    .prev-btn,
    .next-btn {
      font-size: sizem(15);
      &::before {
        background-color: #cc5b4e00;
      }
      &::after {
        border-color: #fff;
        border-width: 0.15em 0.15em 0 0;
        animation: btn 0.5s ease-in-out infinite alternate;
      }
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
  name: 'section6',

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
          img: require('./s9/1台北 Bellavita.jpg'),
          webp: require('./webp/s9/1台北 Bellavita.webp'),
          name: '台北 Bellavita',
        },
        {
          img: require('./s9/2上海國際金融中心.jpg'),
          webp: require('./webp/s9/2上海國際金融中心.webp'),
          name: '上海國際金融中心',
        },
        {
          img: require('./s9/3新加玻LeNouvel Ardmore.jpg'),
          webp: require('./webp/s9/3新加玻LeNouvel Ardmore.webp'),
          name: '新加玻LeNouvel Ardmore',
        },
        {
          img: require('./s9/4曼谷Sathorn Square.jpg'),
          webp: require('./webp/s9/4曼谷Sathorn Square.webp'),
          name: '曼谷Sathorn Square',
        },
        {
          img: require('./s9/5杜拜Viceroy Palm Jumeirah.jpg'),
          webp: require('./webp/s9/5杜拜Viceroy Palm Jumeirah.webp'),
          name: '杜拜Viceroy Palm Jumeirah',
        },
        {
          img: require('./s9/6香港交易廣場.jpg'),
          webp: require('./webp/s9/6香港交易廣場.webp'),
          name: '香港交易廣場',
        },
        {
          img: require('./s9/7香港怡和大厦.jpg'),
          webp: require('./webp/s9/7香港怡和大厦.webp'),
          name: '香港怡和大厦',
        },
        {
          img: require('./s9/8上海和平飯店.jpg'),
          webp: require('./webp/s9/8上海和平飯店.webp'),
          name: '上海和平飯店',
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
