<template>
  <div class="section1">
    <div class="view view-4" data-aos="fade" data-aos-delay="5000">
      <div class="scroll-indigator"></div>
    </div>
    <div class="view view-1">
      <img src="./s1/1-1/img.png" :alt="`${info.caseName}_img`" class="img-1">
      <h1 class="title-1">
        自然の風景を身近に感じる<br />
        隣の緑と森を満喫する<br />
        職人から提案する心地よく邸宅
      </h1>
    </div>
    <div class="view view-2">
      <div  class="img-2" v-if="isPC">
      <img src="./s1/img1.png" :alt="`${info.caseName}_img`" class="i1">
      <img src="./s1/img2.png" :alt="`${info.caseName}_img`" class="i2">
      </div>
      <img src="./s1/img_m.png" :alt="`${info.caseName}_img`" class="img-2" v-if="isMobile">
    </div>
    <div class="view txt view-3">
      <img src="./s1/logo.png" :alt="`${info.caseName}_logo`" class="logo" v-if="isPC">
      <img src="./s1/logo_m.png" :alt="`${info.caseName}_logo`" class="logo" v-if="isMobile">
      <div class="info1">
        仙岩公園首排 吉村靖孝美學
      </div>
      <div class="info2">靜心學園25-45坪 2-4房
      </div>
      <div class="info3">
        8932-2888
      </div>
      <img src="./s1/logo2.png" :alt="`${info.caseName}_logo2`" class="logo2">
      <div class="btn flex-c" v-scroll-to="{element: `#contact`}">
        立即預約
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  //overflow: hidden;
  position: relative;
  // background: url('./s1/bg.png') fixed;
  background-size: auto;
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
  opacity: 0.5;

  &:nth-child(1) {
    position: relative;
  }
}

.img-1 {
  @include img_c_pc(362, 379);
  top:calc(50% - 9vw);

}

.title-1 {
  @include img_c_pc(529, 596);
  top:calc(50% + 2vw);
  font-size: size(28);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.57;
  letter-spacing: size(5.6);
  text-align: center;
  color: #ffffff;
}

.img-2 {@include img_l_pc(1022, 92, 10);
animation: i1 4s infinite alternate;
transform: skewX(2deg);
height: size(1204);
transform-origin: 50% 100%;
  .i1{@include img_l_pc(1022, 0, 0);}
  .i2{@include img_l_pc(352, 398, 55);
  animation: i1 4s  infinite alternate;transform:rotate(-3deg);
transform-origin: 98% 80%;}
}
@keyframes i1 {
  to {transform: skew(0deg,0deg);
  }
}




.view {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  // animation: fade_out 3s 0s ease-in-out forwards;
}

.view-1 {
  opacity: 1;
  animation: fade_out 4s 2s ease-in-out forwards;
}

.view-2 {
  opacity: 0;
  animation: fade_right 2.5s 4s ease-in-out forwards;
}

.view-3{
  opacity: 0;
  animation: fade_left 2.5s 4s ease-in-out forwards;
}
h1{font-weight: 600}
.txt{
  @include img_r_pc(580, 0, 230);
  height: 100%;
// top:calc(50% - 9vw);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.66;
  letter-spacing: normal;
  text-align: center;
  display: flex;
  color: #ffffff;
 // flex-direction:column;
 flex-wrap: wrap;
  justify-content:center;
  align-items:center;
  align-content:center;
  font-size: size(45);
  padding: 3em 0 0 0;
}

.logo {
  width: size(560);
  // @include img_r_pc(565, 400, 240);
}

.info1 {
  margin: 1.1em 0 0 0;
}

.info2 {
  font-size:1.19em;
  margin:0 0 -0.3em 0;
}

.info3 {
  font-size:2em;display: inline-block;
  margin: -0.05em 0.55em 0 -0.2em;
  letter-spacing:-0.03em;
  font-weight: 500;
  position: relative;
  //transform: scaleX(0.98);
  font-family: "Times New Roman";
  &::after{content: "";
  position: absolute;
  right: -0.25em;
  top: calc(50% - 0.4em);
    width: 1px;
    height: 0.8em;
    background: currentColor;display: inline-block;opacity: 0.7;
  }
}

.logo2 {
  width: size(130);
}

.btn {
  width: size(400);
  height:size(78);
  margin:1em auto 0;
  border: 1px solid #fff;
  font-size: size(28);
  color: #ffffff;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #fff;
    color: #004471;
  }
}

@keyframes fade_out {
  0% {
    opacity: 1;
    transform: scale(1)
  }

  100% {
    opacity: 0;
    transform: scale(0.4);
  }
}

@keyframes fade_right {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade_left {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.scroll-indigator {
  @include div_c_pc(1, 210, 925);
  top: calc(100% - 6vw);
  display: flex;
  z-index: 100;
  color: #fffC;
 // mix-blend-mode: exclusion;

  &::before,
  &::after {
    width: size(1);
    height: size(210);
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: auto;
    content: '';
    background-color: currentColor;
  }

  &::before {
    opacity: 0.2;
  }

  &::after {
    animation: ScrollnavigateAnimation 2s infinite
      cubic-bezier(0.77, 0, 0.18, 1);
  }
}

@keyframes ScrollnavigateAnimation {
  0% {
    height: 0;
  }

  45% {
    height: 100%;
  }

  55% {
    height: 100%;
    top: 0;
  }

  100% {
    height: 0;
    top: 100%;
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
  .section1 {
    width: 100vw;
    min-height: sizem(665);
    max-height: sizem(812);
    height: sizem(665);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .img-1 {
    @include img_c_m(180, 200);
  }

  .title-1 {
    @include img_c_m(320, 300);
    font-size: sizem(20);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.57;
    letter-spacing: sizem(2.6);
    text-align: center;
    color: #ffffff;
  }

  .img-2 {
    @include img_l_m(375, 0, 0);
height: auto;
transform-origin: 100% 100%;
transform: skewY(5deg);
  }

  .logo {
    @include img_l_m(50, 91, 62);
  }

  .info1 {
    @include img_l_m(375 - 58, 380, 58);
    font-size: sizem(21);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.9;
    letter-spacing: sizem(0.15);
    text-align: left;
    color: #ffffff;
  }

  .info2 {
    @include img_l_m(375 - 58, 423, 58);
    font-size: sizem(19);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.66;
    letter-spacing: sizem(0.3);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .logo2 {
    @include img_r_m(62, 473, 58);
  }

  .btn {
    // @include div_r_pc(280, 77, 863, 375);
    @include div_r_m(180, 48, 465, 135);
    border: 1px solid #fff;
    font-size: sizem(17);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #fff;
      color: #004471;
    }
  }

  .view {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    // animation: fade_out 3s 0s ease-in-out forwards;
  }

  .view-1 {
    opacity: 1;
    animation: fade_out 4s 2s ease-in-out forwards;
  }

  .view-2 {
    opacity: 0;
    animation: fade_left 2.5s 4s ease-in-out forwards;
  }

  .view-3 {
    opacity: 0;
    animation: fade_right 2.5s 4s ease-in-out forwards;
  }

  .scroll-indigator {
    @include div_c_m(1, 150, 555);

    &::before,
    &::after {
      width: sizem(1);
      height: sizem(150);
    }
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

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
