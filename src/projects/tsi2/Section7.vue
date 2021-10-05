<template>
  <div class="section7">
  <!--  <img loading="lazy" src="./s7/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img"> -->
    <img loading="lazy" src="./s7/360山河美景.png" :alt="`${info.caseName}_img`" class="title-img"  data-aos="fade" data-aos-delay="200">
    <div class="line"  data-aos="fade-down" data-aos-delay="400"></div>
    <h3 class="title"  data-aos="fade" data-aos-delay="600">洲子洋史上最強 層峰景觀頭等艙</h3>
    <h3 class="desc"  data-aos="fade" data-aos-delay="800">
      「天空之邑」以區域稀有24層地標，獨佔洲子<br v-if="isMobile" />洋極景制高點，<br v-if="isPC"/>觀音山、大台北都會公園山河<br v-if="isMobile" />美景360°環繞，彷如坐擁景觀頭等艙，美景無<br v-if="isMobile" />界盡在您視線。
    </h3>
    <div class="name">高樓層景觀 實景拍攝</div>

  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: 100%;
  height: size(1500);
  position: relative;
  // background-color: #fff;
  // min-height: size(900);
   background:linear-gradient(to top, rgba(255,255,255,0) 30% , rgba(255,255,255,.95) 70%,rgba(255,255,255,1) 100%) fixed, url('./s7/bg.jpg') no-repeat fixed 50% 100%;
   background-size: cover, cover;
  // background-attachment:scroll;
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  //  overflow: hidden;
 /*  z-index: 1;
  &::before{width: 100%;content: "";display: block;position: fixed;height: 30vw;
  left: 0;
  top: 0;
  background: linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,.95) 60%,rgba(255,255,255,1) 100%);}

  */
  &::after{width: 100%;content: "";display: block;position: absolute;height: 10vw;
  left: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,.95) 90%,rgba(255,255,255,1) 100%);}
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

  &:nth-child(1) {
    position: fixed;
    z-index: -1;
    top: auto;bottom: 0
  }
}

.title-img {
  @include img_c_pc(132, 286);
}

.line {
  @include div_c_pc(1, 224, 652);
  background-color: #003177;
}

.title {
  @include img_c_pc(372, 919);
  font-size: size(25);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(1.25);
  text-align: center;
  color: #003177;
  white-space: nowrap;
}

.desc {
  @include img_c_pc(1342, 964);
  font-size: size(20);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(1.25);
  text-align: center;
  color: #636363;
  white-space: nowrap;
}
.name{
  position: absolute;
  right: 1em;
  bottom:4em;
  z-index:2;
  font-family: "Noto Sans TC", serif;
  font-size: size(15);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: 0.1em;
  text-align: center;
  color: #666;
  white-space: nowrap;
  text-shadow:0 0 1em #fff,0 0 0.5em #fff,0 0 0.2em #fff;
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
  .section7 {
    width: 100%;
    height:100vh;
    min-height: calc(66700vw / 375 - 123px);
    max-height: calc(81200vw / 375 - 123px);
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
   background:linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 20vw, rgba(255,255,255,.95) 60vw, rgba(255,255,255,1) 75vw, rgba(255,255,255,1) 100%), url('./s7/bg.jpg') no-repeat 50% 100%;
   background-size:cover,170% auto;
  }

  .title-img {
    @include img_c_m(57, 63);
  }

  .line {
    @include div_c_m(1, 97, 220);
    background-color: #003177;
  }

  .title {
    @include img_c_m(284, 330);
    font-size: sizem(19);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.74;
    letter-spacing: normal;
    text-align: center;
    color: #003177;
    white-space: nowrap;
  }

  .desc {
    @include img_c_m(310, 374);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: center;
    color: #636363;
    white-space: nowrap;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
// import slider from '@/mixins/slider.js'

export default {
  name: 'section7',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },
  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
