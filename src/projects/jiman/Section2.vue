<template>
  <div class="section2">
    <div v-if="!isMobile">
      <img src="./s2/bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img">
      <div class="animate-bg">
        <img src="./s2/f3.png" :alt="`${info.caseName}_f3`" class="f3">
      </div>
      <img src="./s2/t1.png" :alt="`${info.caseName}_t1`" class="t1" data-aos="fade" data-aos-delay="200">
      <img src="./s2/t2.png" :alt="`${info.caseName}_t2`" class="t2" data-aos="fade" data-aos-delay="200">
      <img src="./s2/t3.png" :alt="`${info.caseName}_t3`" class="t3" data-aos="fade" data-aos-delay="400">
      <img src="./s2/t4.png" :alt="`${info.caseName}_t4`" class="t4" data-aos="fade" data-aos-delay="800">
      <div class="desc" data-aos="fade" data-aos-delay="600">
        藏山藏水藏台大，藏景藏靜藏繁華<br />
        沅利建設40年自慢代表作<br />
        謹獻予懂品味、更懂收藏的人
      </div>
      <!-- <img src="./s1/logo.png" :alt="`${info.caseName}_logo`" class="logo" data-aos="fade" data-aos-delay="600"> -->
      <!-- <div class="desc" data-aos="fade" data-aos-delay="800">
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

      </div> -->
    </div>
    <div v-else>
      <img src="./mo/2/bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img">
      <div class="animate-bg">
        <img src="./mo/2/f3.png" :alt="`${info.caseName}_f3`" class="f3">
        <img src="./mo/2/f4.png" :alt="`${info.caseName}_f4`" class="f4">
      </div>
      <img src="./mo/2/t1.png" :alt="`${info.caseName}_t1`" class="t1" data-aos="fade" data-aos-delay="200">
      <img src="./mo/2/t2.png" :alt="`${info.caseName}_t2`" class="t2" data-aos="fade" data-aos-delay="200">
      <img src="./mo/2/t3.png" :alt="`${info.caseName}_t3`" class="t3" data-aos="fade" data-aos-delay="400">
      <img src="./s2/t4.png" :alt="`${info.caseName}_t4`" class="t4" data-aos="fade" data-aos-delay="800">

      <img src="./mo/2/st1.png" :alt="`${info.caseName}_st1`" class="st1" data-aos="fade" data-aos-delay="400">
      <img src="./mo/2/st2.png" :alt="`${info.caseName}_st2`" class="st2" data-aos="fade" data-aos-delay="400">
      <img src="./mo/2/st3.png" :alt="`${info.caseName}_st3`" class="st3" data-aos="fade" data-aos-delay="400">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
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

.f3 {
  @include img_l_pc(694, 190, 0);
  transform-origin: left;
  animation: flow1 3s 0s ease-in-out infinite alternate-reverse;
}
@keyframes flow1 {
  to {
    transform: skewY(4.3deg) translateY(-15px);
  }
}

.t1 {
  @include img_l_pc(843, 204, 173);
}
.t2 {
  @include img_l_pc(398, 281, 618);
}
.t3 {
  @include img_r_pc(548, 206, 229);
}
.t4 {
  @include img_r_pc(554, 610, 224);
}

.logo {
  @include img_r_pc(479, 707, 310);
}

.desc {
  @include img_r_pc(514, 377, 245);
  font-size: size(34);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.79;
  letter-spacing: size(0.34);
  text-align: center;
  color: #d67f76;
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
    min-height: sizem(470);
    max-height: sizem(1337);
    height: sizem(1337);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
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
    @include img_r_m(233, 418, 0);
    transform-origin: left;
    animation: flow1 3s 0s ease-in-out infinite alternate-reverse;
  }

  .f4 {
    @include img_l_m(250, 190, 0);
    top: auto;
    bottom: 0;
    transform-origin: left;
    animation: flow1 2.3s 0s ease-in-out infinite alternate-reverse;
  }
  @keyframes flow1 {
    to {
      transform: skewY(4.3deg) translateY(-15px);
    }
  }

  .t1 {
    @include img_r_m(21.2, 70, 90);
  }
  .t2 {
    @include img_r_m(10.1, 305, 66);
  }
  .t3 {
    @include img_r_m(292, 934, 38);
  }
  .t4 {
    @include img_r_m(298, 610, 34);
    top: auto;
    bottom: sizem(185);
  }

  // .logo {
  //   @include img_r_m(479, 707, 310);
  // }

  .st1 {
    @include img_l_m(17, 128, 157);
  }

  .st2 {
    @include img_l_m(16, 128, 128);
  }

  .st3 {
    @include img_l_m(17, 128, 97);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

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

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
