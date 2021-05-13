<template>
  <div>
    <div class="section2 flex-c">
      <div class="opacity-3-bg">
        <div class="ink-1 absolute" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200"><img src="./s2/ink1.png" alt="ink"></div>
        <div class="ink-2 absolute" v-if="isMobile" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200"><img src="./s2/ink1.png" alt="ink"></div>
        <div class="ink-3 absolute" v-if="isMobile" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200"><img src="./s2/ink2.png" alt="ink"></div>
        <div class="ink-4 absolute" v-if="isMobile" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200"><img src="./s2/ink2.png" alt="ink"></div>
      </div>
      <div class="bg">
        <div class="leaf-1 absolute" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1200">
          <img src="./s2/leaf (1).png" alt="leaf">
        </div>
        <div class="leaf-2 absolute" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1200">
          <img src="./s2/leaf (2).png" alt="leaf">
        </div>
      </div>
      <div class="container relative flex-c wrap" v-if="!isMobile">
        <div class="text-item flex-ac wrap">
          <div class="title" data-aos="fade-right" data-aos-delay="600">
            2.7萬坪<br />巴克禮生態公園
          </div>
          <div class="hr" data-aos="fade-right" data-aos-delay="700"></div>
          <div class="desc" data-aos="fade-right" data-aos-delay="800">
            位於東區南側，緊臨市立文化中心、德安百貨、台糖長榮酒店等商業文教設施，台南市第一座生態公園，全國10大優良公園、第一屆全國景觀大獎、國家卓越建設獎優選。
          </div>
        </div>
        <div class="img-item" data-aos="fade-left" data-aos-delay="1000">
          <img src="./s2/1.jpg" alt="">
        </div>
      </div>
      <div class="container relative flex-c wrap" v-if="isMobile">
        <div class="img-item" data-aos="fade-left" data-aos-delay="1000">
          <img src="./s2/1.jpg" alt="">
        </div>
        <div class="text-item flex-ac wrap">
          <div class="title" data-aos="fade-right" data-aos-delay="600">
            2.7萬坪<br />巴克禮生態公園
          </div>
          <img src="./s2/hr.png" alt="" class="hr" data-aos="fade-right" data-aos-delay="700">
          <div class="desc" data-aos="fade-right" data-aos-delay="800">
            位於東區南側，緊臨市立文化中心、德安百貨、台糖長榮酒店等商業文教設施，台南市第一座生態公園，全國10大優良公園、第一屆全國景觀大獎、國家卓越建設獎優選。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.hr {
  width: 15vw;
  height: 0.3vw;
  background: #08607f;
  display: inline-block;
  margin: 0.8vw auto;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0 50%);
}
@keyframes leaf {
  to {
    transform: skewY(0deg);
  }
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

.text-item {
  width: size(464);
  margin-right: size(116);
  font-stretch: normal;
  font-style: normal;
  .title {
    font-size: size(59.1);
    font-weight: bold;
    line-height: 1.3;
    letter-spacing: size(8.28);
    text-align: center;
    color: #2e627f;
    white-space: nowrap;
  }

  .desc {
    font-size: size(25);
    font-weight: normal;
    line-height: 1.92;
    letter-spacing: size(2);
    text-align: justify;
    color: #2e627f;
  }
}

.img-item {
  width: size(1114);
  img {
    width: 100%;
  }
}

.ink-1 {
  width: size(1600);
  top: size(-180);
  right: calc(50% - 7vw);
  img {
    width: 100%;
    transform: scaleX(-1);
  }
}

.leaf-1 {
  width: size(950);
  top: size(-180);
  right: size(0);
  img {
    width: 100%;
    animation: leaf 3s ease-in-out infinite alternate;
    transform: skewY(5deg);
    transform-origin: 100% 50%;
  }
}

.leaf-2 {
  width: size(317);
  top: size(782);
  right: size(0);
  img {
    width: 100%;
    animation: leaf 3s ease-in-out infinite alternate;
    transform: skewY(8deg);
    transform-origin: 100% 70%;
  }
}

.opacity-3-bg {
  opacity: 0.3;
}

.opacity-5-bg {
  opacity: 0.5;
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
    height: auto;
    min-height: sizem(500);
    max-height: sizem(812);
    background-size: cover;
    background-attachment: scroll;
    align-items: flex-start;
  }

  .text-item {
    width: sizem(310);
    margin-right: auto;
    margin: sizem(30) auto;
    > * {
      width: sizem(310);
    }
    .hr {
      width: sizem(288);
      height: sizem(4);
      display: inline-block;
      margin: sizem(15) auto;
    }

    .title {
      font-size: sizem(25);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.44;
      letter-spacing: sizem(3.5);
      text-align: center;
      color: #2e627f;
      white-space: nowrap;
    }

    .desc {
      font-size: sizem(15);
      font-weight: normal;
      line-height: 1.73;
      letter-spacing: sizem(1.2);
      color: #2e627f;
    }
  }

  .img-item {
    width: sizem(375);
    img {
      width: 100%;
    }
  }

  .ink-1 {
    width: sizem(250);
    top: sizem(123);
    left: sizem(-100);
  }

  .ink-2 {
    width: sizem(390);
    top: sizem(81);
    left: sizem(-200);
    img {
      width: 100%;
      transform: scaleX(-1);
    }
  }
  .ink-3 {
    width: sizem(200);
    bottom: sizem(-130);
    right: sizem(-100);
    img {
      width: 100%;
      transform: scaleX(1);
    }
  }
  .ink-4 {
    width: sizem(300);
    bottom: sizem(-150);
    right: sizem(-150);
    img {
      width: 100%;
      transform: rotate(-70deg) scaleX(-1);
    }
  }

  .leaf-1 {
    display: none;
  }

  .leaf-2 {
    width: sizem(116);
    top: sizem(248);
    right: sizem(0);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section2',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
