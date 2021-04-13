<template>
  <div class="section1" v-scroll-to="{ element: `#top` }">
    <img src="./s1/bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img an">
    <h1 class="title">關於<span  v-if="isPC">我們</span>
    <svg version="1.1" id="圖層_1" v-if="isMobile" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 268.7 59" style="enable-background:new 0 0 268.7 59;" xml:space="preserve" >
<path style="fill:#000;" d="M0,15.9c6.6-3,11.6-8.7,13.7-15.7h3.6C15.4,8.7,9.6,14.8,0,18.5V15.9z M0,31.4 c7.1-3.4,11.6-8.6,13.4-15.7h3.8c-0.9,3.7-2.7,7.2-5.1,10.1v32.7H8.3V29.4C5.8,31.3,3,32.8,0,33.9V31.4z M59,38.2v2.5h-8.6v10.6 c0.2,4.2-1.9,6.2-6.3,6.1h-6.3v-2.5h5.6c2.4,0.2,3.5-1.1,3.3-3.8V40.8H17.5v-2.5h29.1v-6.3H20v-2.5h37.7v2.5h-7.3v6.3H59z M23.3,23.8v-21h30.9v14.9c0.2,4.2-2,6.2-6.6,6.1L23.3,23.8z M27.6,43.5c1.9,2.9,3.4,6,4.3,9.4h-3.8c-0.7-3.3-2-6.5-3.8-9.4H27.6z M27.1,5.3v6.6h23.3V5.3H27.1z M50.4,17.7v-3.3H27.1v6.8h19.8C49.4,21.3,50.5,20.1,50.4,17.7z M71.8,10.9V8.4h12.4V1h3.8v7.4h12.4 v2.5H87.9v10.9h11.1v2.5H87.9v3c0,3-0.1,5.8-0.2,8.4h13.4v2.5H87.4c-1,8.4-6.6,15.4-16.7,20.8v-2.8c7.4-4.9,11.7-10.9,12.7-18H70.5 v-2.5h13.4c0.2-2.4,0.3-5.1,0.3-8.1v-3.3H73.3v-2.5h10.9V10.9H71.8z M122.1,24.5c3.5,3.3,5.5,7.9,5.6,12.7 c0.3,8.8-4.4,13.2-14.2,13.2v-3c7.4,0.3,11-3.2,10.6-10.6c0-4.2-1.9-8.2-5.6-11.9c3.6-5.5,5.4-12.1,5.1-18.7H109v52.6h-4V3.3h22.5 v2.8C127.6,12.6,125.7,19.1,122.1,24.5z M212.7,18.7v-2.5c5.6-3.9,8.9-8.7,10.1-14.4h3.8c-0.5,2.1-1.1,4.1-2,6.1h14.2V0h4v7.8h22.3 v3h-22.2v12.5h25.8v3h-58.7v-3h28.9V10.9h-16C221.2,13.4,217.8,16,212.7,18.7z M218.6,56.5v-22h42.3v14.6c0.3,5.1-2.5,7.5-8.4,7.3 L218.6,56.5z M256.8,49.1V37.2h-34.4v16.5H252C255.3,53.8,256.9,52.3,256.8,49.1z M198.2,10.1h-45.8v18.7c0,8.3-0.9,14.4-2.6,18.5 c-1.3,3.9-4.5,7.7-9.4,11.4v-3c5.7-4.9,8.3-12.7,7.8-23.3V7.3h23V0.5h4.3v6.8h22.5L198.2,10.1z M167.2,50.1h4 c-2.8,5-8.9,6.5-18.2,7.9v-2.2C160,54.2,164.7,53.4,167.2,50.1z M154.2,30v-2.5H197V30h-19.6v2.9h17.5v10.7c0.2,4.5-2.1,5.5-6.7,5.3 h-32.3v-16h17.8V30H154.2z M159.6,35.4v4h14.1v-4H159.6z M159.6,41.7v4.7h14.1v-4.7H159.6z M191.2,35.4h-13.7v4h13.7L191.2,35.4z M191.2,43.6v-1.9h-13.7v4.7h8.5C188.4,46.4,191.2,46.3,191.2,43.6z M183.9,50.1c2.5,3.3,7.2,4.1,14.2,5.6V58 c-9.4-1.3-15.4-2.9-18.2-7.9L183.9,50.1z M191.2,15.5v-3.9h-3.6v3.9h-23.7v-3.9h-3.6v3.9H156v2.5h4.4v6.7H184c5.4,0,7.2-2.2,7.2-5.4 v-1.3h5.1v-2.5H191.2z M187.6,19.5c0,2.2-0.8,2.5-4.2,2.5h-19.4v-4h23.7L187.6,19.5z"/>
</svg></h1>
    <div class="line"></div>
    <img src="./s1/title.png" :alt="`${info.caseName}_title`" class="title-img">
    <div class="bottom"></div>
    <div id="top" class="link_in"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: calc(100vh + 15.5vw);
  min-height: size(1100);
  max-height: size(1235);
  //overflow: hidden;
  position: relative;
  background-image: #008fbb;
  background-size: auto;
}
.link_in{
  position: absolute;
  bottom:size(470);
  left: 0;}

.bg-img {
  width: size(1920);
  height: auto;
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
 .an{
  animation:oxxo 25s ease-in infinite alternate;
}
@keyframes oxxo{
    5%{transform: scale(1);
    }
    95%{transform: scale(1.25);
    }
    100%{transform: scale(1.25);
    }
}

.title {
  @include div_l_pc(274, 86, 800, 711);
  font-size: size(58);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.61;
  letter-spacing: size(18.54);
  text-align: left;
  color: #ffe900;
  white-space: nowrap;
  height: auto;
  top: auto;
  bottom:size(320)
}

.title-img {
  @include img_l_pc(548, 745, 181);
  top: auto;
  bottom:size(320);
}

.line{
  @include div_l_pc(3, 2050, 420, 275);background: linear-gradient(to bottom, rgba(255,233,0,1) 0%,rgba(255,233,0,1) 78%,rgba(255,233,0,0) 100%);z-index: 3;top:calc(100% - 16vw);
}
.bottom {
  @include div_r_pc(1920, 78, 0, 0);
  top: auto;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 size(300) size(3020);
  border-color: transparent transparent #fff transparent;
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
  .section1 {
    width: 100vw;
    min-height: sizem(320);
    max-height: sizem(812);
    height: sizem(320);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
.link_in{
  top:0;
  bottom: auto;}

  .bg-img {
    width: sizem(375);
    height: 100%;
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
.line{
  @include div_l_m(1.5, 1600, 80, 15);
  background: linear-gradient(to bottom, rgba(255,233,0,1) 0%,rgba(255,233,0,1) 78%,rgba(255,233,0,0) 100%);
  z-index: 3;
}

  .title {
    @include div_l_m(118, 37, 295, 32);
    font-size: sizem(30);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 4.2;
    letter-spacing: sizem(6);
    text-align: left;
    color: #000;
    white-space: nowrap;
    z-index: 3;
    svg{position: relative;
    height:0.9em;top: 0.1em;margin-left: 0.3em}
  }

  .subtitle {
    @include div_r_m(168, 29, 255, 32);
    font-size: sizem(20);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 4.59;
    letter-spacing: sizem(1.2);
    text-align: left;
    color: #444444;
    z-index: 10;
  }

  .title-img {
    @include img_l_m(236, 200, 33);
  }

  .bottom {
    @include div_r_m(375, 50, 0, 0);
    top: auto;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 sizem(50) sizem(700);
    border-color: transparent transparent #fff transparent;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section1',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {
    // @slideChangeTransitionEnd="slideChanged"
    // slideChanged(e) {
    //   const swiper = this.$refs.mySwiper.swiper
    //   if (swiper.isEnd) {
    //     this.slideIndex = 0
    //   } else if (swiper.isBeginning) {
    //     this.slideIndex = swiper.slides.length - 3
    //   } else {
    //     this.slideIndex = swiper.activeIndex - 1
    //   }
    // },
  },

  mounted() {},

  created() {},

  computed: {},
}
</script>
