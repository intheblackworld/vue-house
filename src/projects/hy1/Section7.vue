<template>
  <div class="section7">
    <img src="./s7/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img" v-if="isPC">
    <img src="./s7/bg_m.jpg" :alt="`${info.caseName}_img`" class="bg-img" v-if="isMobile">
    <img src="./s7/bg.png" :alt="`${info.caseName}_img`" class="img" data-aos="fade-up" data-aos-delay="400" v-if="isPC">
    <img src="./s7/1.png" :alt="`${info.caseName}_img`" class="img1" data-aos="fade-up" data-aos-delay="400" v-if="isMobile">
    <img src="./s7/2.png" :alt="`${info.caseName}_img`" class="img2" data-aos="fade-up" data-aos-delay="400" v-if="isMobile">
    <h1 class="title" data-aos="fade-up" data-aos-delay="0">
      雙雄制震 頂規穩固
    </h1>
    <h3 class="title1" data-aos="fade-up" data-aos-delay="200">
      Alfa Safe耐震結構
    </h3>
    <h3 class="desc1" data-aos="fade-up" data-aos-delay="400">
      「台灣建築結構教父」建築安全履歷協會理事長<br />
      「戴雲發」專利設計<br />
      實驗結果證明「抗震韌性提升100%，<br />
      為傳統柱抗震韌性的2倍」
    </h3>
    <h3 class="title2" data-aos="fade-up" data-aos-delay="200">
      EDS制震壁
    </h3>
    <h3 class="desc2" data-aos="fade-up" data-aos-delay="400">
      普丞土木結構事務所「廖偉信博士」專利研發<br />
      將建築物的振動轉換成制震壁體的相對運動，並利用此相對運動所產生的抵抗力來吸收地震能量。<br />
      鴻苑「獨家採用144 組EDS制震壁，可達六級抗震效能」
    </h3>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: 100%;
  height:100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  // background: linear-gradient(to bottom, #c40000, #000);
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
  // &::after,
  // &::before {
  //   content: '';
  //   width: 120%;
  //   height: size(120);
  //   position: absolute;
  //   bottom: size(-90);
  //   left: -10%;
  //   background: url('./all/section_bg.jpg') fixed;
  //   background-size: cover;
  //   border-radius: 100% 100% 0 0;
  //   z-index: 2;
  // }
  // &::after {
  //   border-radius: 0 0 100% 100%;
  //   top: size(-90);
  //   bottom: auto;
  // }
}

.bg-img {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.img {
  @include img_c_pc(800, 128);
 top: auto;
  bottom: 0;
}

.title {
  @include img_c_pc(800, 128);
  top:calc(50% + 100vw * (160 - 540) / 1920);
  font-size: size(55.1);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #6e0000;
  white-space: nowrap;
}

.title1 {
  @include img_r_pc(490, 396, 1290);
  top:calc(50% + 100vw * (396 - 540) / 1920);
  font-size: size(35);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: size(4.9);
  text-align: right;
  color: #530000;
  white-space: nowrap;
}

.title2 {
  @include img_l_pc(490, 396, 1290);
  top:calc(50% + 100vw * (396 - 540) / 1920);
  font-size: size(35);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: size(4.9);
  text-align: left;
  color: #530000;
  white-space: nowrap;
}

.desc1 {
  @include img_r_pc(500, 443, 1290);
  top:calc(50% + 100vw * (450 - 540) / 1920);
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.89;
  letter-spacing:0.05em;
  text-align: right;
  color: #000000;
  white-space: nowrap;
}

.desc2 {
  @include img_l_pc(500, 443, 1290);
  top:calc(50% + 100vw * (450 - 540) / 1920);
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.89;
  letter-spacing: 0.05em;
  text-align: left;
  color: #000000;
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
    width: 100vw;
    height: sizem(755);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
    &::after,
    &::before {
      display: none;
    }
  }

  .img1 {
    @include img_r_m(187.5, 92, 0);
  }

  .img2 {
    @include img_l_m(187.5, 373, 0);
  }

  .title {
    @include img_c_m(288, 35);
    font-size: sizem(35);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #6e0000;
    white-space: nowrap;
  }

  .title1 {
    @include img_l_m(213, 98, 33);
    font-size: sizem(21);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.48;
    letter-spacing: sizem(2.94);
    text-align: left;
    color: #530000;
    white-space: nowrap;
  }

  .title2 {
    @include img_r_m(121, 472, 103);
    font-size: sizem(21);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.48;
    letter-spacing: sizem(2.94);
    text-align: left;
    color: #530000;
    white-space: nowrap;
  }

  .desc1 {
    @include img_l_m(201, 131, 33);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: sizem(0.75);
    text-align: left;
    color: #000000;
    white-space: normal;
  }

  .desc2 {
    @include img_r_m(191, 504, 33.5);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: sizem(0.75);
    text-align: left;
    color: #000000;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

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
