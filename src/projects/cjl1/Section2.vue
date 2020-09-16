<template>
  <div>
    <div class="section2 flex-c">
      <div class="opacity-3-bg">
        <img src="./s2/ink1.png" alt="" class="ink-1 absolute" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200">
        <img src="./s2/ink1.png" alt="" class="ink-2 absolute" data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="1200">
        <img src="./s2/ink2.png" alt="" class="ink-3 absolute" data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="1200">
      </div>
      <div class="opacity-5-bg">
        <img src="./s2/leaf (1).png" alt="" class="leaf-1 absolute" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1200">
        <img src="./s2/leaf (2).png" alt="" class="leaf-2 absolute" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1200">
      </div>
      <div class="container relative flex-c wrap" v-if="!isMobile">
        <div class="text-item flex-ac wrap">
          <div class="title" data-aos="fade-right" data-aos-delay="600">
            2.7萬坪<br />巴克禮生態公園
          </div>
          <img src="./s2/hr.png" alt="" class="hr" data-aos="fade-right" data-aos-delay="700">
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
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  min-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  position: relative;
}

.bg-img {
  width: size(1920);
  height: 100vh;
  min-height: 900px;
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
  > * {
    width: size(464);
  }
  .hr {
    width: size(288);
    display: inline-block;
    margin: 15px auto;
  }

  .title {
    font-size: size(59.1);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: size(8.28);
    text-align: center;
    color: #2e627f;
    white-space: nowrap;
  }

  .desc {
    font-size: size(25);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: size(2);
    text-align: left;
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
  height: size(1693);
  top: size(-500);
  left: size(-800);
}

.ink-2 {
  height: size(1581);
  top: size(872);
  left: size(-600);
}

.ink-3 {
  height: size(1720);
  top: size(1064);
  left: size(564);
}

.leaf-1 {
  width: size(950);
  top: size(-180);
  right: size(0);
  animation: leaf 3s ease-in-out infinite alternate-reverse;
}

.leaf-2 {
  width: size(317);
  top: size(782);
  right: size(0);
  animation: leaf 3s ease-in-out infinite alternate-reverse;
}

.opacity-3-bg {
  opacity: 0.3;
}

.opacity-5-bg {
  opacity: 0.5;
}

@keyframes leaf {
  to {
    transform: skewX(5deg) translateX(20px);
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
  .section2 {
    width: 100vw;
    min-height: auto;
    height: sizem(514);
    //background-image: url('./mo/1/00.jpg');
    background-size: cover;
    background-attachment: scroll;
  }

  .text-item {
    width: sizem(310);
    margin-right: auto;
    margin: 30px auto;
    > * {
      width: sizem(310);
    }
    .hr {
      width: sizem(288);
      display: inline-block;
      margin: 15px auto;
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
      font-stretch: normal;
      font-style: normal;
      line-height: 1.73;
      letter-spacing: sizem(1.2);
      text-align: left;
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
    height: size(1693);
    top: size(-500);
    left: size(-800);
  }

  .ink-2 {
    height: size(1581);
    top: size(872);
    left: size(-600);
  }

  .ink-3 {
    height: size(1720);
    top: size(1064);
    left: size(564);
  }

  .leaf-1 {
    width: size(950);
    top: size(-180);
    right: size(0);
    animation: leaf 3s ease-in-out infinite alternate-reverse;
  }

  .leaf-2 {
    width: size(317);
    top: size(782);
    right: size(0);
    animation: leaf 3s ease-in-out infinite alternate-reverse;
  }
}
</style>
<script>
// @ is an alias to /src
import { icPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section2',

  data() {
    return {
      icPC,
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
