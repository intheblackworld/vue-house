<template>
  <div class="section1">
    <div v-if="!isMobile">
      <div class="animate-bg" data-aos="fade" data-aos-delay="200">
        <img src="./s1/f1.png" :alt="`${info.caseName}_f1`" class="f1">
        <img src="./s1/f2.png" :alt="`${info.caseName}_f2`" class="f2">
      </div>
      <img src="./s1/t1.png" :alt="`${info.caseName}_t1`" class="t1" data-aos="fade" data-aos-delay="400">
      <img src="./s1/logo.png" :alt="`${info.caseName}_logo`" class="logo" data-aos="fade" data-aos-delay="600">
      <div class="desc" data-aos="fade" data-aos-delay="800">
        懂收藏的人，有旁人難及的自豪氣慨<br />
        自豪於收藏從不看價格，而是看故事<br />
        罐裡的玻璃彈珠，藏著孩提時的單純快樂<br />
        整頁護貝的球員卡，藏著昂揚熱血的青春<br />
        滿櫃名錶的價值，在於留藏難以復返的時間<br />
        若問其中最引以為傲的藏品<br />
        莫過一席水岸豪景，典藏了成功人生的自慢閱歷<br /><br />
        懂收藏的人，只願收藏唯一<br />
        藏台大椰林師大樹海，獨一無二雋永人文<br />
        藏台灣水岸第一次，日本國土營造精工手筆<br />
        藏江山於市心，北市最後一塊水岸豪景沃土<br />
        自在、慢活、收藏無法複製的唯一<br />
        頂級收藏家不用說出口的自豪

      </div>
    </div>
    <div v-else>
      <img src="./s1/t1.png" :alt="`${info.caseName}_t1`" class="t1" data-aos="fade" data-aos-delay="400">
      <img src="./s1/logo.png" :alt="`${info.caseName}_logo`" class="logo" data-aos="fade" data-aos-delay="600" data-aos-offset="-400"> 
      <img src="./mo/1/f1.png" :alt="`${info.caseName}_f1`" class="f1">
      <img src="./mo/1/f2.png" :alt="`${info.caseName}_f2`" class="f2">
      <img src="./mo/1/t2.png" :alt="`${info.caseName}_t2`" class="t2">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width:100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  // overflow: hidden;
  position: relative;
  background-size: auto;
}

.bg-img {
  width: size(1920);
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

.f1 {
  @include img_r_pc(1016, 76, 0);
  top:calc(50% + 100vw * (76 - 540) / 1920);
  transform-origin:100% 80%;
  animation: flow1 3s 0s ease-in-out infinite alternate;
    transform: skewY(2deg);
}

.f2 {
  @include img_l_pc(479, 656, 0);
  top:calc(50% + 100vw * (656 - 540) / 1920);
  transform-origin:0% 90%;
  animation: flow1 3s ease-in-out infinite alternate;
    transform: skewY(2.5deg);
  filter: drop-shadow(0 0 .5em #d67f76); 
}

@keyframes flow1 {
  to {
    transform: skewY(0);
  }
}

.t1 {
  @include img_l_pc(148, 131, 248);
  top:calc(50% + 100vw * (131 - 540) / 1920);
  filter: drop-shadow(0 0 .5em #d67f76); 
}

.logo {
  @include img_r_pc(479, 707, 310);
  top:calc(70% + 100vw * (707 - 1080 * .7) / 1920);
  filter: drop-shadow(0 0 .5em #d67f76); 
}

.desc {
  @include img_l_pc(501, 282, 505);
  top:calc(60% + 100vw * (282 - 1080 * .6) / 1920);
  font-size: size(23);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.09;
  letter-spacing: size(0.92);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
  text-shadow: 0 0 .5em #d67f76,0 0 .5em #d67f76;
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
    min-height: sizem(720);
    max-height: sizem(850);
    height: 100vh;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .f1 {
    @include img_r_m(202, 0, 0);
  top:calc(26.7% - 100vw * 220 / 375);
    transform-origin: 100% 0;
    transform: skewX(2.5deg);
  filter: drop-shadow(0 0 .5em #d67f76); 
  }

  .f2 {
    @include img_l_m(146, 540, 0);
  top:calc(80% + 100vw * (525 - 667 * .8) / 375);
    transform-origin: left;
    animation: flow1 2.7s 2s ease-in-out infinite alternate-reverse;
  filter: drop-shadow(0 0 .0em #d67f7600); 
  }

  .t1 {
    @include img_l_m(79, 39, 47);
  top:calc(20% + 100vw * (29 - 667 * .20) / 375);
  }

  .t2 {
    @include img_r_m(250, 291, 33);
  top:calc(80% + 100vw * (240 - 667 * .8) / 375);
  }

  .logo {
    @include img_r_m(144, 291, 39);
  top:calc(85% + 100vw * (548 - 667 * .85) / 375);
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
