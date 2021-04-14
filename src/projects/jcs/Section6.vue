<template>
  <div class="section6">
    <img src="./s6/bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isPC">
    <img src="./s6/bg_m.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isMobile" data-aos="fade" data-aos-delay="0" data-aos-offset="-500">
    <img src="./s6/t.png" :alt="`${info.caseName}_img`" class="grass">

    <div class="content">
      <div class="line" data-aos="zoom-in-down" data-aos-delay="200">
      </div>
      <div class="label" data-aos="fade-down" data-aos-delay="400">
        ｜精心規劃｜
      </div>
      <div class="title" v-if="isPC" data-aos="fade-down" data-aos-delay="600">
        感心規劃 有質感的家分享受
      </div>
      <div class="title" v-if="isMobile" data-aos="fade-down" data-aos-delay="600">
        感心規劃<br />有質感的家分享受
      </div>
      <div class="subtitle" data-aos="fade-down" data-aos-delay="800" data-aos-offset="-50">
        A級規劃／中空樓板設計／十年防水保固
      </div>
    </div>
      <div class="list-info">
        <div v-for="item in list" :key="item.title" class="info flex-ac" data-aos="fade-down" data-aos-delay="800" data-aos-offset="-50">
          <div class="info-title" v-html="item.title"></div>
          <div class="info-desc" v-html="item.desc"></div>
        </div>
      </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: 100%;
  height: calc(100vh + 80px);
  min-height: calc(46.875vw + 80px);
  max-height: calc(56.25vw + 80px);
  position: relative;
  background-color: #efd8ae;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
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

  // &:nth-child(1) {
  //   position: relative;
  // }
}

.grass {
  @include img_l_pc(280, 351, -30);
  top:calc(55% + 100vw * (351 - 1080 * .55) / 1920);
  transform-origin: bottom;
  animation: grass 4s ease-in-out alternate infinite;
}

@keyframes grass {
  to {
    transform: skewX(3deg);
  }
}

.content{ @include img_l_pc(825,168, 202);
  top:calc(50% + 100vw * (168 - 540) / 1920);
width: auto;
font-size: size(30);
padding: 0 0 0 1.5em;
  font-stretch: normal;
  font-style: normal;
  color: #3d2f25;
  text-align: left;
  line-height: 1.5;
  z-index: 2;
}
.line {
  @include div_l_pc(14, 180, 0, 0);
  width: 0.5em;
  height: 100%;
  z-index: 2;
  background-color: #40220f;
}
.label {
  position: relative;
  font-size: 1em;
  font-weight: 400;
  letter-spacing:0.16em;
  left: -0.3em;
}
.title {
  font-size: 2.2em;
  font-weight: 500;
  line-height: 1.2;
  margin: 0.3em 0;
}

.subtitle {
  font-size: 1.27em;
  font-weight: 300;
  letter-spacing:0.24em;
}

.work-title {
  @include img_l_pc(458, 301, 476);
  top:calc(50% + 100vw * (301 - 540) / 1920);
  top: auto;
  bottom: size(123);
  font-size: size(36.3);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(5.81);
  text-align: left;
  color: #40220f;
  white-space: nowrap;
}
.work-desc {
  @include img_l_pc(514, 301, 496);
  top:calc(50% + 100vw * (301 - 540) / 1920);
  top: auto;
  bottom: size(88);
  font-size: size(18);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: size(1.08);
  text-align: left;
  color: #40220f;
  white-space: nowrap;
}

.list-info {
  @include img_l_pc(227 + 70 + 678, 429, 250);
  top:calc(65% + 100vw * (429 - 1080 * .65) / 1920);
  height: calc(100% - 27vw);
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  .info-title {
    width: size(250);
    font-size: size(48);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: size(71);
    letter-spacing: size(11.52);
    text-align: right;
    color: #3d2f25;
    white-space: nowrap;
    margin-right: size(34);
  }

  .info-desc {
    font-size: size(29.6);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: size(71);
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    white-space: nowrap;
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
  .section6 {
    width: 100vw;
    height: auto;
    min-height: auto;
    max-height: initial;
    // background-image: url('./all/section_bg.jpg');
    // background-attachment: scroll;
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .bg-img {
  height:auto;
  top: auto;
  bottom: 0;
}
  .grass {
    @include img_l_m(172, 757, -40);
    top: auto;
    bottom: 0;
    transform-origin: bottom;
    animation: grass 4s ease-in-out alternate infinite;
  }

  @keyframes grass {
    to {
      transform: skewX(3deg);
    }
  }
  .content{@include img_l_m(7, 44, 20);
width: auto;
    font-size: sizem(17);
    position: relative;
  }
  .title {
    font-size: 1.47em;
  }
  .subtitle {
    font-size:0.9em;
  letter-spacing:0.06em;
  padding-right: 1.5em;
  }

  .list-info {
    @include img_c_m(310,60);
    position: relative;
  height:auto;
      margin-bottom: sizem(320);

    .info {
      margin-bottom: sizem(20);
      flex-wrap: wrap;
    }

    .info-title {
      width: sizem(310);
      font-size: sizem(25);
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.36;
      letter-spacing: sizem(6);
      text-align: left;
      color: #3d2f25;
      white-space: nowrap;
      margin-right: sizem(0);
    }

    .info-desc {
      width: sizem(320);
      font-size: sizem(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.73;
      letter-spacing: normal;
      text-align: left;
      color: #000000;
      white-space: normal;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section6',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      list: [
        {
          title: '十年',
          desc: '防水保固，自信工程品質勇敢承諾',
        },
        {
          title: 'LOW-E',
          desc: '採用台玻LOW-E隔熱玻璃，隔絕熱能紫外線',
        },
        {
          title: '中空樓板',
          desc: '樓板厚度22.5公分，制音隔熱效果更明顯',
        },
        {
          title: '電動車',
          desc: '預留電動車充電線槽，可自行升級充電系統',
        },
        {
          title: '防疫',
          desc: 'STUDOR吸氣閥、紫外線殺菌燈，降低疫病傳染風險',
        },
        {
          title: '精品配備',
          desc: isMobile ? '櫻花系統廚具、KARAT凱樂衛浴<br/>完美頂規享受' : '櫻花系統廚具、KARAT凱樂衛浴，完美頂規享受',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    // viewIndex() {
    //   if (this.viewIndex === 5) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>
