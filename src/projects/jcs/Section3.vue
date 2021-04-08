<template>
  <div class="section3">
    <img src="./s3/bg1.jpg" :alt="`${info.caseName}_img`" class="bg-img bg1" v-if="isPC" key="day1">
    <img src="./s3/bg2.jpg" :alt="`${info.caseName}_img`" class="bg-img bg2" v-if="isPC" key="day2">
    <div class="bg-img bg1" v-if="isMobile">
      <img src="./s3/bg1_m.jpg" :alt="`${info.caseName}_img`">
    </div>
    <div class="bg-img bg2" v-if="isMobile">
      <img src="./s3/bg2_m.jpg" :alt="`${info.caseName}_img`">
    </div>
    <img src="./s3/bottom.png" :alt="`${info.caseName}_img`" class="grass">

    <div class="content">
      <div class="line" data-aos="zoom-in-down" data-aos-delay="200">

      </div>
      <div class="label" data-aos="fade-down" data-aos-delay="400">
        ｜六大價值｜
      </div>
      <div class="title" v-if="isPC" data-aos="fade-down" data-aos-delay="600">
        大竹最美 建築大樹 生活豐映
      </div>
      <div class="title" v-if="isMobile" data-aos="fade-down" data-aos-delay="600">
        大竹最美 建築大樹<br />生活豐映
      </div>
      <div class="subtitle" data-aos="fade-down" data-aos-delay="800" data-aos-offset="-50">
        種一株豐盛大樹最好的時間就是現在
      </div>
    </div>

    <div class="items flex-ac flex-jb wrap" v-if="isPC" data-aos="fade-down" data-aos-delay="800">
      <div class="flex-ac flex-jb">
        <div v-for="(slide, i) in slideList.slice(0, 3)" :key="slide.img + i + 'icon'" :class="`item`">
          <img :src="slide.img" alt="">
          <div>
            <div class="item-name" v-html="slide.name"></div>
            <div class="item-desc" v-html="slide.desc"></div>
          </div>
        </div>
      </div>
      <div class="flex-ac flex-jb">
        <div v-for="(slide, i) in slideList.slice(3, 7)" :key="slide.img + i + 'icon'" :class="`item`">
          <img :src="slide.img" alt="">
          <div>
            <div class="item-name" v-html="slide.name"></div>
            <div class="item-desc" v-html="slide.desc"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="isMobile" data-aos="fade-down" data-aos-delay="800">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute ${slideIndex === i ? 'active' : ''}`">

            <div class="half-item">
              <img :src="slide.img" alt="">
              <div class="slide-name" v-html="slide.name"></div>
              <div class="slide-desc" v-html="slide.desc"></div>
            </div>
            <div class="half-item">
              <img :src="slideList[secIndex].img" alt="">
              <div class="slide-name" v-html="slideList[secIndex].name"></div>
              <div class="slide-desc" v-html="slideList[secIndex].desc"></div>
            </div>

          </div>
        </transition-group>
        <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <div class="prev-btn" @click="decIndex"></div>
          <div class="next-btn" @click="addIndex"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: 100%;
  height: calc(100vh - 70px);
  min-height: size(850);
  max-height: size(1010);
  position: relative;
  background-color: #2157c1;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

.grass {
  @include img_l_pc(939, 0, -40);
  top: auto;
  bottom: 0;
  transform-origin: bottom;
  animation: grass 4s ease-in-out alternate infinite;
}

@keyframes grass {
  to {
    transform: skewX(3deg);
  }
}

.bg1 {
  opacity: 0;
  animation: block 4s ease-in-out alternate infinite;
}

.bg2 {
  opacity: 0;
  animation: block 4s 4s ease-in-out alternate infinite;
}

@keyframes block {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

// begin
.block-leave-to {
  opacity: 0;
  z-index: 0;
}
// end
.block-enter {
  opacity: 0;
  z-index: 1;
}

.block-enter-active {
  transition: all 1s ease;
}

.block-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.line {
  @include div_l_pc(14, 180, 168, 202);
  top: calc(50% + 100vw * (168 - 540) / 1920);
  background-color: #ff8700;
}
.label {
  @include img_l_pc(208, 159, 246);
  top: calc(50% + 100vw * (162 - 540) / 1920);
  font-size: size(30.5);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4.89);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
  z-index: 2;
}
.title {
  @include img_l_pc(825, 204, 246);
  top: calc(50% + 100vw * (208 - 540) / 1920);
  font-size: size(66);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
  z-index: 2;
}

.subtitle {
  @include img_l_pc(851, 301, 246);
  top: calc(50% + 100vw * (301 - 540) / 1920);
  font-size: size(37);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(16.04);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
  z-index: 3;
}

.items {
  @include img_l_pc(920, 428, 204);
  top: calc(50% + 100vw * (380 - 540) / 1920);
  > div {
    width: 100%;
    height: size(170);
    border-bottom: 1px solid #0004;
  }

  .item {
    display: flex;
    align-items: center;
    font-stretch: normal;
    font-style: normal;
    font-size: size(17);
    font-weight: normal;
    line-height: 1.4;
    color: #ffffff;
    text-align: left;
    img {
      width: size(90);
      margin-right: size(10);
    }

    .item-name {
      font-size: 2.5em;
      font-weight: 500;
      letter-spacing: normal;
      white-space: nowrap;
    }

    .item-desc {
      letter-spacing: 0.06em;
    }
  }
}

/* Swipe */
.swipe {
  width: size(800);
  height: size(550);
  top: size(105);
  top: calc(50% + 100vw * (105 - 540) / 1920);
  right: size(349);
  object-fit: cover;
  // background: #0344;
}

// begin
.swipe-fade-leave-to {
  margin-top: -10px;
  opacity: 0;
  z-index: 0;
}
// end
.swipe-fade-enter {
  margin-top: 30px;
  opacity: 0;
  z-index: 1;
}

.swipe-fade-enter-active {
  transition: all 0.3s ease;
}

.swipe-fade-leave-active {
  transition: all 0.3s ease;
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
  z-index: 3;
}

.prev-btn,
.next-btn {
  height: 100%;
  width: 50%;
  font-size: size(20);
  right: 0;
  top: 0;
  margin: 0;
  cursor: pointer;
  position: absolute;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: translateX(200%);
    background-color: #df6c0088;
    transition: all 0.3s;
  }
  &::after {
    content: '';
    width: 1em;
    height: 1em;
    position: absolute;
    top: calc(50% - 0.5em);
    left: calc(90% - 0.75em);
    border: solid #fff;
    border-width: 0.1em 0.1em 0 0;
    transform: rotate(45deg) translate(-10%, 10%);
  }
  &:hover:before {
    transform: translateX(0%);
  }
  &:hover:after {
    animation: btn 0.5s ease-in-out infinite alternate;
  }
}
.prev-btn {
  transform: scaleX(-1);
  right: auto;
  left: 0;
}

@keyframes btn {
  to {
    transform: rotate(45deg) translate(10%, -10%);
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
    min-height: sizem(667);
    max-height: sizem(812);
    height: 100vh;
    // background-image: url('./all/section_bg.jpg');
    // background-attachment: scroll;
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .grass {
    @include img_l_m(215, 0, -40);
    top: auto;
    bottom: 0;
  }

  .bg-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    &.bg1,
    &.bg2 {
      img {
        width: 100%;
        position: absolute;
        top: auto;
        bottom: 0;
        left: 0;
      }
    }
    &.bg1 {
      background-color: #2157c1;
    }
    &.bg2 {
      background-color: #22389b;
    }
  }

  .line {
    @include div_l_m(7, 135, 44, 33);
  }
  .label {
    @include img_l_m(208, 40, 56);
    font-size: sizem(17);
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: sizem(2.2);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    z-index: 2;
  }
  .title {
    @include img_l_m(206, 72, 56);
    font-size: sizem(25);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    z-index: 2;
  }

  .subtitle {
    @include img_l_m(270, 157, 56);
    font-size: sizem(16);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;
    letter-spacing: sizem(0.96);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    z-index: 3;
  }

  .items {
    @include img_l_m(920, 428, 204);
    > div {
      width: 100%;
      height: size(151 + 42);
      border-bottom: 1px solid #fff;
    }

    .item {
      display: flex;
      align-items: center;
      img {
        width: size(110);
        margin-right: size(10);
      }

      .item-name {
        font-size: size(44.5);
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.32;
        letter-spacing: normal;
        text-align: left;
        color: #ffffff;
        white-space: nowrap;
      }

      .item-desc {
        font-size: size(18);
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.42;
        letter-spacing: size(1.08);
        text-align: left;
        color: #ffffff;
      }
    }
  }

  /* Swipe */
  .swipe {
    width: 100%;
    height: sizem(259);
    min-height: auto;
    top: sizem(155);
    bottom: auto;
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

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .half-item {
      width: 40%;
      position: relative;
    }
    img {
      width: sizem(65);
      height: sizem(65);
      object-fit: cover;
    }

    .slide-name {
      position: relative;
      right: auto;
      top: auto;
      bottom: auto;
      right: auto;
      font-size: sizem(20);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.65;
      letter-spacing: normal;
      text-align: center;
      color: #ffffff;
    }
    .slide-desc {
      position: relative;
      right: auto;
      top: auto;
      bottom: auto;
      right: auto;
      font-size: sizem(14);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.64;
      letter-spacing: sizem(0.84);
      text-align: center;
      color: #ffffff;
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
    left: 0%;
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
  name: 'section3',

  mixins: [slider],

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
          img: require('./s3/icon1.png'),
          name: '綠海景觀',
          desc: '270度翠綠簇擁<br />開窗就享無垠綠景',
        },
        {
          img: require('./s3/icon2.png'),
          name: '稀有角地',
          desc: '大福路大興路環抱<br />地段價值更珍貴',
        },
        {
          img: require('./s3/icon3.png'),
          name: '公園環繞',
          desc: '埔心溪緩緩河廊<br />228紀念公園樹廊',
        },
        {
          img: require('./s3/icon4.png'),
          name: '十年防水',
          desc: '職人匠心精鑄<br />自信十年防水保固',
        },
        {
          img: require('./s3/icon5.png'),
          name: '中空樓板',
          desc: '獨家制音規劃<br />全區唯一高規設計',
        },
        {
          img: require('./s3/icon6.png'),
          name: '典藏美學',
          desc: '東方文化美學<br />大竹全心建築地標',
        },
      ],
    }
  },

  methods: {
    addIndex() {
      this.slideIndex =
        this.slideIndex === this.slideList.length - 2 ? 0 : this.slideIndex + 2
    },

    decIndex() {
      this.slideIndex =
        this.slideIndex === 0 ? this.slideList.length - 2 : this.slideIndex - 2
    },
  },

  created() {},

  mounted() {
    setInterval(() => {
      this.blockIndex = this.blockIndex === 0 ? 1 : 0
    }, 2000)
  },

  computed: {
    secIndex() {
      return this.slideIndex === this.slideList.length ? 0 : this.slideIndex + 1
    },
  },

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
