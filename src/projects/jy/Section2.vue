<template>
  <div>
    <div class="section1-1">
<img src="./s2/1-1img.jpg" alt="4米2店面 典藏釋出" class="img11 absolute">
<img src="./s2/t.png" alt="4米2店面 典藏釋出">
    </div>
    <!--<div class="section1-1" v-if="isMobile"
        data-aos="fade"
        data-aos-delay="100">
<img src="./s2/1-1img.jpg" alt="4米2店面 典藏釋出" class="img11">
<img src="./s2/t.png" alt="4米2店面 典藏釋出">
    </div>-->
    <div class="section2">
      <img
        v-if="isPC"
        src="./s2/img.jpg"
        alt=""
        class="img absolute"
        data-aos="fade-up"
        data-aos-delay="0"
      >

      <img
        v-if="isMobile"
        src="./s2/img_m.jpg"
        alt=""
        class="img absolute"
        data-aos="fade-up"
        data-aos-delay="0"
      >
      <img
        src="./s2/icon.png"
        alt=""
        class="icon absolute"
        data-aos="fade-up-left"
        data-aos-delay="1000"
      >
      <div class="txt absolute">
      <div
        class="title"
        data-aos="fade-down"
        data-aos-delay="400"
      >食衣住行育樂遊</div>
      <div
        class="subtitle"
        data-aos="fade-down"
        data-aos-delay="600"
      >機能豐盛 繁華近靜</div>
      <div
        class="desc"
        data-aos="fade-down"
        data-aos-delay="800"
      >
      <div>
        人文薈萃與商業豐盛的大同區，未來將因「大同再生計畫」都市更新蓬勃發展，周遭建設規劃豐富水綠、產業、交通、文化歷史及創意氛圍資源，文化觀光及特色商圈整合行銷，循東京車站特區模式，打造台北「丸之內」。</div>
      </div>
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1-1 {
  width: size(1060 + 719);
  height: size(300);
  background: #910003;
  display: flex;
  align-items:center;
  justify-content: center;
  position: absolute;
  right: 0;
  top:size(0);
  padding: 0 0 0 35%;
  img{
  width:auto;
  height:52%;}
  img.img11{
    left: 0;top: 0;
  width:auto;
  height:100%;}
}
.section2 {
  width: size(1920);
  height: size(1181);
  margin: size(-127) 0 0 0;
  background-image: url('./s2/bg.png');
  background-size: cover;z-index: 0;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.img {
  width: size(1568);
  top: size(377);
  left: size(176);
}
.icon {
  width: size(78);
  top: size(434);
  left: size(235);
}
.txt{
  top: size(474);
  left: size(293);
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  text-align: justify;
  color: #4d4d4d;
  font-size: size(16);
  font-weight: bold;
  }
.title {
  font-size: size(39);
  letter-spacing:0.06em;
  color: #000000;
}
.subtitle {
  font-size: size(32);
  letter-spacing:0.16em;
  color: #3e3a39;
}
.desc {
  width:43em;
  margin: 0.3em 0 0 0;
  font-weight: 500;
  line-height: 2.2;
  letter-spacing:0.12em;
}

// .bg-img {
//   width: 100vw;
//   height: size(592);
//   position: absolute;
//   display: block;
//   top: 0;
//   left: 0;
//   object-fit: cover;

//   &:nth-child(1) {
//     position: relative;
//   }
// }

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
.section1-1 {
  width:100%;
  height:auto;
  background: #910003;
  right: 0;
  top:size(0);
  display: block;
  position: relative;padding: 0;
  img{
    margin: 5% 0;
  width: 85%;
  height:auto;}
  img.img11{
  position: relative;
    margin:0 0;
    left: 0;top: 0;
  width:100%;
  height:auto;}
}
  .section2 {
    width: 100vw;
    height: sizem(552);
    //margin-top:sizem(30);
    // height: size-m(804);
    background-image: none;
    background-size: cover;
    background-attachment: scroll;
  }

  .img {
    width: sizem(375);
    top: sizem(280 + 265);
    left: sizem(0);
  }
  .icon {
    width: sizem(73);
    top: sizem(265);
    left: sizem(23);
  }
.txt{
    top: sizem(30 + 265);
    left: sizem(52);
    }
  .title {
    font-size: sizem(25);
  }
  .subtitle {
    font-size: sizem(22);
  }
  .desc {
    width: sizem(290);
    font-size: sizem(15);
    font-weight: normal;
    line-height: 1.73;
    div{transform: scaleX(0.95);width: 101%;transform-origin: 0 0;}
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
// import Map from '@/components/Map.vue'

export default {
  name: 'section2',

  // components: {
  //   Map,
  // },

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
