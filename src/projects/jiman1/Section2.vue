<template>
  <div class="section2">
    <div v-if="!isMobile">
      <img src="./s2/02_flower_l.png" :alt="`${info.caseName}_f3`" class="f3">
      <img src="./s2/02_img.jpg" :alt="`${info.caseName}_img`" class="img">
      <h3 class="title" data-aos="fade-up" data-aos-delay="200">
        「 我不是收藏家，我就是一座美術館。」
      </h3>
      <div class="subtitle" data-aos="fade-up" data-aos-delay="400">
        紐約名門收藏家 佩姬‧古根漢
      </div>
      <div class="desc" data-aos="fade-up" data-aos-delay="600">
        懂收藏的人，有旁人難及的自豪氣概<br />
        自豪於收藏從不看價格，而是看故事<br />
        罐裡的玻璃彈珠，藏著孩提時的單純快樂<br />
        整頁護貝的球員卡，藏著昂揚熱血的青春<br />
        滿櫃名錶的價值，在於留藏難以復返的時間<br />
        若問其中最引以為傲的藏品<br />
        莫過一席水岸豪景，典藏了成功人生的自慢閱歷
      </div>
    </div>
    <div v-else>
      <img src="./mobile/02/02_flower_m.png" :alt="`${info.caseName}_f3`" class="f3">
      <!-- <div class="img">
        <img src="./mobile/02/02_img_m.jpg" :alt="`${info.caseName}_img`">
      </div> -->
      <div class="custom-scrollbar-container img">
        <div ref="wrapper" class="custom-scrollbar-wrapper">
          <img @load="onload" class="custom-scrollbar-content" :src="require('./mobile/02/02_img_m.jpg')" alt="">
          <!-- custom-vertical-scrollbar-->
          <!-- <div class="custom-vertical-scrollbar" ref="vertical">
            <div class="custom-vertical-indicator"></div>
          </div> -->
          <!-- custom-horizontal-scrollbar-->
          <div class="custom-horizontal-scrollbar" ref="horizontal">
            <div class="custom-horizontal-indicator"></div>
          </div>
        </div>
      </div>
      <div class="scrollbar-mask"></div>
      <img src="./mobile/02/02_text_m.png" :alt="`${info.caseName}_img`" class="text" data-aos="fade-up" data-aos-delay="200">
      <div class="desc" data-aos="fade-up" data-aos-delay="400">
        懂收藏的人，有旁人難及的自豪氣概<br />
        自豪於收藏從不看價格，而是看故事<br />
        玻璃彈珠藏著孩提時的單純快樂<br />
        球員卡藏著昂揚熱血的青春<br />
        滿櫃名錶留藏難以復返的時間<br />
        若問其中最引以為傲的藏品<br />
        莫過一席水岸豪景<br />
        典藏了成功人生的自慢閱歷
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  // overflow: hidden;
  position: relative;
  background-size: auto;
  background-color: #d67f76;
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

  &:nth-child(1) {
    //  position: relative;
  }
}

.f3 {
  @include img_l_pc(1100, -350, -530);
  transform-origin: 0% 90%;
  transform: skewY(2deg);
  animation: flow1 4s 0s ease-in-out infinite alternate;
}
@keyframes flow1 {
  to {
    transform: skewY(0);
  }
}

.img {
  @include img_l_pc(430, 0, 0);
  width: 100%;
  top: auto;
  bottom: 0;
}

.title {
  @include img_l_pc(917, 243, 241);
  top: calc(50% + 100vw * (260 - 540) / 1920);
  font-size: size(53.1);
  line-height: 1.5;
  letter-spacing: 0.046em;
  text-align: left;
  font-weight: 300;
  color: #000;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(406, 314, 727);
  top: calc(50% + 100vw * (345 - 540) / 1920);
  font-size: size(30.7);
  line-height: 1.5;
  text-align: left;
  font-weight: 400;
  color: #000;
  white-space: nowrap;
}

.desc {
  @include img_r_pc(618, 98, 48);
  top: calc(50% + 100vw * (134 - 540) / 1920);
  font-size: size(23);
  line-height: 2.48;
  letter-spacing: 0.02em;
  text-align: left;
  font-weight: 400;
  color: #fff;
  white-space: nowrap;
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
  .section2 {
    width: 100vw;
    min-height: sizem(690);
    max-height: sizem(690);
    height: sizem(690);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .scrollbar-mask {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: sizem(247);
    transform: translateX(0px) translateY(0px) translateZ(2px);
    // background-color: rgba(0, 0, 0, .2);
    z-index: 1;
  }

  // .custom-scrollbar-container .custom-scrollbar-wrapper {
  //   position: relative;
  //   width: 280px;
  //   height: 280px;
  //   overflow: hidden;
  // }
  .custom-scrollbar-content {
    max-width: none;
  }
  .custom-vertical-scrollbar {
    position: absolute;
    top: 50%;
    right: 10px;
    height: 100px;
    width: 7px;
    border-radius: 6px;
    transform: translateY(-50%) translateZ(0);
    background-color: rgb(200, 200, 200, 0.3);
  }

  .custom-vertical-indicator {
    width: 100%;
    height: 20px;
    border-radius: 6px;
    background-color: #db8090;
  }

  .custom-horizontal-scrollbar {
    position: absolute;
    left: 50%;
    top: sizem(21.5);
    width: sizem(154.5);
    height: 7px;
    border-radius: 6px;
    transform: translateX(-50%) translateZ(3px);
    background-color: transparent;
    border: 1px solid #fff;
    z-index: 10;
  }
  .custom-horizontal-indicator {
    height: sizem(11.2);
    width: sizem(11.2);
    border-radius: sizem(11.2);
    margin-top: sizem(-3);
    background-color: #fff;
  }

  .bg-img {
    width: 100vw;
    height: 100%;
    min-height: size(900);
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;
    margin-top: 0;

    &:nth-child(1) {
      position: relative;
    }
  }

  .f3 {
    @include img_r_m(308, -30, -70);
    transform-origin: 100% 80%;
    transform: skewY(2deg);
    animation: flow1 3s 0s ease-in-out infinite alternate;
  }
  .text {
    @include img_l_m(48, 31, 50);
  }

  .img {
    @include div_l_m(375, 247, 0, 0);
    width: 100%;
    top: auto;
    bottom: 0;
    // overflow: auto;
    img {
      height: sizem(247);
    }
  }

  .desc {
    @include img_r_m(300, 164, 55);
    font-size: sizem(12.5);
    line-height: 2.4;
    letter-spacing: 0.03em;
    text-align: right;
    font-weight: 400;
    color: #fff;
    white-space: nowrap;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

import BScroll from '@better-scroll/core'
import ScrollBar from '@better-scroll/scroll-bar'
BScroll.use(ScrollBar)

export default {
  name: 'section2',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
    }
  },

  methods: {
    initBscroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        freeScroll: true,
        click: true,
        scrollbar: {
          customElements: [this.$refs.horizontal, this.$refs.vertical],
          fade: false,
          interactive: true,
          scrollbarTrackClickable: true,
        },
      })
    },
    onload() {
      this.initBscroll()
    },
  },

  mounted() {},

  created() {},

  computed: {},
}
</script>
