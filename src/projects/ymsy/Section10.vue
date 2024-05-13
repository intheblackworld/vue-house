<template>
  <div class="section1">
    <img loading="lazy" src="./s1/bg.jpg" :alt="`${info.caseName}_img`" class="bg">
    <img loading="lazy" src="./s1/img.png" :alt="`${info.caseName}_img`" class="img">

    <img loading="lazy" src="./s1/logo.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade-up" data-aos-delay="0" v-if="isPC">
    <img loading="lazy" src="./s1/logol.png" :alt="`${info.caseName}_img`" class="logol" data-aos="fade-up" data-aos-delay="0" v-if="isPC">
    <img loading="lazy" src="./s10/t1.png" :alt="`${info.caseName}_img`" class="title1">
    <div class="new-text">銷售企劃：興益發建設自建自售</div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080); 
 // overflow: hidden;
  position: relative;
 /* background-image: url('./s1/bg.jpg');
  background-size: cover;
  background-attachment: fixed; */
}
.bg{position: absolute;top:0;left: 0;width: 100%;height: 100%;object-fit: cover;}
.img{position: absolute;bottom:size(122);bottom:calc(50% + #{size(122 - 1080 * .5)});right:size(-92);width: size(718);z-index: 3;}
.logo{position: absolute;top:size(370);top:calc(50% + #{size(370 - 1080 * .5)});left:size(150);width: size(766);z-index: 3;filter:drop-shadow(7px 7px 5px #000);}
.logol{position: absolute;top:size(605);top:calc(50% + #{size(605 - 1080 * .5)});left:size(150);width: size(766);z-index: 3;mix-blend-mode: screen;}
.title1{position: absolute;bottom:size(182);bottom:calc(50% + #{size(182 - 1080 * .5)});left:size(163);width: size(996);z-index: 3;filter:drop-shadow(7px 7px 5px #000);}
.new-text {
  @include img_r_pc(500, 1010, 30);
  top:auto;
  bottom: 1em;
  right: 1.2em;
  font-size: size(16);
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.06em;
  text-align: right;
  color: #ffffff;
  z-index: 10;
  white-space: nowrap;
  text-shadow: 0em 0em 0.3em #000;
}


/*
.logo {
  @include img_l_pc(880, 220 , 155);
  top:calc(50% + ( 220 - 1080 * 0.5) * 100vw / 1920);
}

.bird {
  @include img_r_pc(500, 0, 300);
  top:calc(50% + ( 300 - 1080 * 0.5) * 100vw / 1920);
  z-index: 9;
}

@keyframes cloud {
  to {
    transform: translateX(-10%);
  }
}
.cloud1 {
  @include img_r_pc(1200, 750, 100);
  top:calc(50% + ( 750 - 1080 * 0.5) * 100vw / 1920);
  animation: cloud 2.5s ease-in-out alternate infinite;
}
.cloud2 {
  @include img_l_pc(1035, 900, 300);
  top:calc(50% + ( 900 - 1080 * 0.5) * 100vw / 1920);
  animation: cloud 4s ease-in-out alternate infinite;
}
.hill2 {
  @include img_r_pc(1446, 0, 0);
  top: auto;
  bottom: size(-100);
}

.title3 {
  @include img_l_pc(770, 450, 200);
  top:calc(50% + ( 450 - 1080 * 0.5) * 100vw / 1920);
  font-size: size(50);
  font-family: 'Noto Sans TC';
  font-stretch: normal;
  font-weight: 600;
  font-style: normal;
  line-height: 1.2;
  letter-spacing:0.087EM;
  text-align: center;
  color: #ffc74a;
  white-space: nowrap;
}

.title4 {
  @include img_l_pc(1000, 540, 220);
  top:calc(50% + ( 540 - 1080 * 0.5) * 100vw / 1920);
  text-shadow: 0 0 5px #1b4a20;
  font-family: 'Noto Sans TC';
  font-size: size(40);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.09em;
  text-align: left;
  color: #fff;
}*/

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
    background-size: auto size-m(750);
  }

  .new-text {
    @include img_c_m(375, 0);
    top:auto;
    bottom: 1em;
    font-size: sizem(15);
    text-align: center;
  }
  .logo {
    @include img_c_m(250, 30);
  top:calc(40% + ( 30 - 604 * 0.4) * 100vw / 375);
  }

  .bird {
    @include img_c_m(220, 330);
  top:calc(50% + ( 320 - 604 * 0.5) * 100vw / 375);
  }

  .cloud1 {
    @include img_r_m(500, 550, -100);
  top:calc(90% + ( 470 - 604 * 0.9) * 100vw / 375);
  }
  .cloud2 {
    @include img_l_m(300, 620, -90);
  top:calc(80% + ( 480 - 604 * 0.8) * 100vw / 375);
  }
  .hill2 {
    @include img_c_m(435, 0);
    top: auto;
    bottom: 0;
  }
  .title3 {
    @include img_c_m(350, 180);
  top:calc(40% + ( 180 - 604 * 0.4) * 100vw / 375);
    font-size: sizem(23);
  }

  .title4 {
    @include img_c_m(300, 220);
  top:calc(40% + ( 220 - 604 * 0.4) * 100vw / 375);
    text-shadow: 0 0 5px #1b4a20;
    font-family: 'Noto Sans TC';
    font-size: sizem(22);
  text-align:center;
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
      // blockIndex: 0,
    }
  },

  methods: {},

  mounted() {
    // setTimeout(() => {
    //   this.blockIndex = 1
    // }, 6000)
  },

  created() {},

  computed: {},
}
</script>
