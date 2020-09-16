<template>
  <div>
    <div class="section4 flex-c">
      <div class="opacity-3-bg">
        <img src="./s2/ink1.png" alt="" class="ink-1 absolute" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200">
        <img src="./s2/ink1.png" alt="" class="ink-2 absolute" data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="1200">
        <img src="./s2/ink2.png" alt="" class="ink-3 absolute" data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="1200">
      </div>
      <div class="opacity-5-bg">
        <img src="./s4/leaf (3).png" alt="" class="leaf-3 absolute" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1200">
      </div>
      <div class="container relative flex-c wrap" v-if="!isMobile">
        <div class="text-item flex-ac wrap">
          <div class="title" data-aos="fade-right" data-aos-delay="600">
            4.5萬坪國家級<br />科學教育體驗未來館
          </div>
          <img src="./s2/hr.png" alt="" class="hr" data-aos="fade-right" data-aos-delay="700">
          <div class="desc" data-aos="fade-right" data-aos-delay="800">
            因應科技新世代的來臨及數位經濟的發展趨勢，台南將誕生一處國家級科學教育館，位於佔地約15公頃的東區新都心段27地號土地建置「國立科學教育體驗未來館」。
          </div>
        </div>
        <div class="img-item" data-aos="fade-left" data-aos-delay="1000">
          <img src="./s4/1.jpg" alt="">
        </div>
      </div>
      <div class="container relative flex-c wrap" v-if="isMobile">
        <div class="img-item" data-aos="fade-left" data-aos-delay="1000">
          <img src="./s4/1.jpg" alt="">
        </div>
        <div class="text-item flex-ac wrap">
          <div class="title" data-aos="fade-right" data-aos-delay="600">
            4.5萬坪國家級<br />科學教育體驗未來館
          </div>
          <img src="./s2/hr.png" alt="" class="hr" data-aos="fade-right" data-aos-delay="700">
          <div class="desc" data-aos="fade-right" data-aos-delay="800">
            因應科技新世代的來臨及數位經濟的發展趨勢，台南將誕生一處國家級科學教育館，位於佔地約15公頃的東區新都心段27地號土地建置「國立科學教育體驗未來館」。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
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
  width: size(600);
  margin-right: size(57);
  > * {
    width: size(600);
  }

  .desc {
    width: size(471);
    margin: 0 auto;
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

.leaf-3 {
  width: size(439);
  bottom: size(0);
  left: size(0);
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
  .section4 {
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
      width: sizem(310);
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
}
</style>
<script>
// @ is an alias to /src
import { icPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section4',

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
