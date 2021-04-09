<template>
  <div class="section2">
    <div class="bottom"></div>
    <div class="title" data-aos="fade" data-aos-delay="400">用最真誠的心<br />為台灣房市注入一份<br v-if="isMobile" />勇於前進的信念</div>
    <div class="subtitle" data-aos="fade" data-aos-delay="600">
      對於銷售的偏執，我們絕不妥協<br />對於客戶，以真誠款待......................
    </div>
    <div class="line"></div>
    <img src="./s2/title.png" :alt="`${info.caseName}_關於得幫廣告`" class="title-img" data-aos="fade-right" data-aos-delay="100" v-if="isPC">
    <img src="../about/s1/title.png" :alt="`${info.caseName}_關於得幫廣告`" class="title-img" data-aos="fade-right" data-aos-delay="100" v-if="isMobile">
    <div class="title_t" v-if="isMobile">關於<svg version="1.1" id="圖層_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 268.7 59" style="enable-background:new 0 0 268.7 59;" xml:space="preserve">
<path style="fill:#FFE900;" d="M0,15.9c6.6-3,11.6-8.7,13.7-15.7h3.6C15.4,8.7,9.6,14.8,0,18.5V15.9z M0,31.4 c7.1-3.4,11.6-8.6,13.4-15.7h3.8c-0.9,3.7-2.7,7.2-5.1,10.1v32.7H8.3V29.4C5.8,31.3,3,32.8,0,33.9V31.4z M59,38.2v2.5h-8.6v10.6 c0.2,4.2-1.9,6.2-6.3,6.1h-6.3v-2.5h5.6c2.4,0.2,3.5-1.1,3.3-3.8V40.8H17.5v-2.5h29.1v-6.3H20v-2.5h37.7v2.5h-7.3v6.3H59z M23.3,23.8v-21h30.9v14.9c0.2,4.2-2,6.2-6.6,6.1L23.3,23.8z M27.6,43.5c1.9,2.9,3.4,6,4.3,9.4h-3.8c-0.7-3.3-2-6.5-3.8-9.4H27.6z M27.1,5.3v6.6h23.3V5.3H27.1z M50.4,17.7v-3.3H27.1v6.8h19.8C49.4,21.3,50.5,20.1,50.4,17.7z M71.8,10.9V8.4h12.4V1h3.8v7.4h12.4 v2.5H87.9v10.9h11.1v2.5H87.9v3c0,3-0.1,5.8-0.2,8.4h13.4v2.5H87.4c-1,8.4-6.6,15.4-16.7,20.8v-2.8c7.4-4.9,11.7-10.9,12.7-18H70.5 v-2.5h13.4c0.2-2.4,0.3-5.1,0.3-8.1v-3.3H73.3v-2.5h10.9V10.9H71.8z M122.1,24.5c3.5,3.3,5.5,7.9,5.6,12.7 c0.3,8.8-4.4,13.2-14.2,13.2v-3c7.4,0.3,11-3.2,10.6-10.6c0-4.2-1.9-8.2-5.6-11.9c3.6-5.5,5.4-12.1,5.1-18.7H109v52.6h-4V3.3h22.5 v2.8C127.6,12.6,125.7,19.1,122.1,24.5z M212.7,18.7v-2.5c5.6-3.9,8.9-8.7,10.1-14.4h3.8c-0.5,2.1-1.1,4.1-2,6.1h14.2V0h4v7.8h22.3 v3h-22.2v12.5h25.8v3h-58.7v-3h28.9V10.9h-16C221.2,13.4,217.8,16,212.7,18.7z M218.6,56.5v-22h42.3v14.6c0.3,5.1-2.5,7.5-8.4,7.3 L218.6,56.5z M256.8,49.1V37.2h-34.4v16.5H252C255.3,53.8,256.9,52.3,256.8,49.1z M198.2,10.1h-45.8v18.7c0,8.3-0.9,14.4-2.6,18.5 c-1.3,3.9-4.5,7.7-9.4,11.4v-3c5.7-4.9,8.3-12.7,7.8-23.3V7.3h23V0.5h4.3v6.8h22.5L198.2,10.1z M167.2,50.1h4 c-2.8,5-8.9,6.5-18.2,7.9v-2.2C160,54.2,164.7,53.4,167.2,50.1z M154.2,30v-2.5H197V30h-19.6v2.9h17.5v10.7c0.2,4.5-2.1,5.5-6.7,5.3 h-32.3v-16h17.8V30H154.2z M159.6,35.4v4h14.1v-4H159.6z M159.6,41.7v4.7h14.1v-4.7H159.6z M191.2,35.4h-13.7v4h13.7L191.2,35.4z M191.2,43.6v-1.9h-13.7v4.7h8.5C188.4,46.4,191.2,46.3,191.2,43.6z M183.9,50.1c2.5,3.3,7.2,4.1,14.2,5.6V58 c-9.4-1.3-15.4-2.9-18.2-7.9L183.9,50.1z M191.2,15.5v-3.9h-3.6v3.9h-23.7v-3.9h-3.6v3.9H156v2.5h4.4v6.7H184c5.4,0,7.2-2.2,7.2-5.4 v-1.3h5.1v-2.5H191.2z M187.6,19.5c0,2.2-0.8,2.5-4.2,2.5h-19.4v-4h23.7L187.6,19.5z"/>
</svg></div>
    <img src="./s2/icon.png" :alt="`${info.caseName}_icon`" class="icon" data-aos="fade" data-aos-delay="400">
    <div class="btn" @click="$router.push('/about')" data-aos="fade" data-aos-delay="600">LEARN MORE</div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: size(680);
  // overflow: hidden;
  position: relative;
  background: #008fbb;
  background-size: auto;
  z-index: 1;
}

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

.title {
  @include div_r_pc(974, 176, 100, 177);
  font-size: size(57.2);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.61;
  letter-spacing: size(3.94);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle {
  @include div_r_pc(652, 96, 350, 499);
  font-size: size(23);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.89;
  letter-spacing: size(1.84);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;

  span {
    font-size: size(27);
    color: #ff8200;
  }
}
.line{
  @include div_l_pc(3, 3920, 420, 280);background: #ffe900;
}
.title-img {
  @include img_l_pc(509, 118, 170);
}

.icon {
  @include img_r_pc(544, 116, 207);
}

.btn {
  @include img_r_pc(217, 392, 175);
  cursor: pointer;
  font-family: "gothic";
  font-size: size(25);
  color: #000;
  line-height: 1.3;
  z-index:2;
  &::before{content: "";
  background:#ffe900;
  position: absolute;
  transition:all 0.2s;
  top: 0;left: 0;width: 100%;height: 100%;
  transform-origin: 50% 50%;
  animation: btn 0.5s ease-in-out infinite alternate;
  z-index: -1;}
  &:hover:before{
    transform: scaleY(1.3);
  }
}
@keyframes btn {
  to {
  background:#fff;
  }
}

.bottom {
  @include div_r_pc(1920, 78, 0, 0);
  top: auto;
  bottom: size(-300);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: size(300) size(3020) 0 0;
  border-color: #008fbb transparent transparent transparent;
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
  height: sizem(510);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

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
.line{left: sizem(15);top: sizem(70);height:  sizem(9000);}
  .title {
    @include div_l_m(260, 77, 285, 32);
    font-size: sizem(16.5);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: sizem(1.17);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .title_t {
    position: absolute;
    font-size: sizem(30);
    left: sizem(32);
    top: sizem(130);
    color: #ffe900;
    svg{position: relative;
    height:1em;top: 0.1em;margin-left: 0.4em}
  }

  .subtitle {
    @include div_r_m(309, 96, 375, 33);
    font-size: sizem(16.5);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: sizem(1.17);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;

    span {
      font-size: size(27);
      color: #ff8200;
    }
  }

  .title-img {
    @include img_l_m(260, 50,32);
  }

  .icon {
    @include img_r_m(310, 190, 32);
  }
  .btn {
    @include img_r_m(151, 445, 32);
    cursor: pointer;
    font-size: sizem(18);
  }

  .bottom {
    @include div_r_m(1920, 78, 0, 0);
    top: auto;
    bottom: size(-300);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: size(300) size(3020) 0 0;
    border-color: #008fbb transparent transparent transparent;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
// import slider from '@/mixins/slider.js'
// import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'section2',
  // mixins: [slider],

  // components: {
  //   Carousel3d,
  //   Slide,
  // },

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
    }
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
