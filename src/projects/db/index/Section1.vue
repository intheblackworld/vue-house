<template>
  <div class="section1">
    <img src="./s1/bg.jpg" :alt="`${inf}_bg`" o.caseNameclass="bg-img" v-if="isPC">
    <img src="./s1/bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img an" v-if="isPC">
    <img src="./s1/bg_m.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isMobile">
    <img src="./s1/t.png" :alt="`${info.caseName}_t`" class="t" v-if="isPC" data-aos="fade" data-aos-delay="200">
    <img src="./s1/t_m.png" :alt="`${info.caseName}_t`" class="t" v-if="isMobile" data-aos="fade" data-aos-delay="200">
    <div class="title" data-aos="fade-down" data-aos-delay="300">
      What is great in man<br />
      is that he is a bridge<br />
      and not an end.
    </div>
    <div data-aos="fade" data-aos-delay="600">
    <div class="subtitle">
      「人之所以偉大，<br v-if="isMobile" />是因為他是一座橋樑，而非目的。」
    </div>
    <div class="hr"></div>
    <div class="name">
      弗里德里希·<span>尼采</span>
    </div>
    </div>
    <!-- <div class="cloud">
    <img src="./s1/cloud1.png" alt="cloud" class="cloud1">
    <img src="./s1/cloud2.png" alt="cloud" class="cloud2">
    <img src="./s1/cloud3.png" alt="cloud" class="cloud3">
    <img src="./s1/cloud4.png" alt="cloud" class="cloud4">
    </div>
    <img src="./s1/bg.png" alt="bg" class="bg-img bg1" v-if="isPC">
    <img src="./s1/bg_m.png" alt="bg_m" class="bg-img bg1" v-if="isMobile">
    <img src="./s1/2.png" alt="2" class="bg-img bg2">
    <h1 class="title">立瑾建築機構</h1>
    <h1 class="desc">
      百年建築 將心構築<br /><br />

      以人為本，用心建設。<br />
      致力打造百年穩固、永世怡居的好建築。
    </h1> -->
    <div class="bottom"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: calc(100vh + 15.5vw);
  min-height: size(1100);
  max-height: size(1235);
  overflow: hidden;
  position: relative;
  background: #fff;
  background-size: auto;
  background: linear-gradient(
    to bottom,
    rgba(29, 125, 209, 1) 0%,
    rgba(20, 135, 241, 1) 21%,
    rgba(59, 183, 255, 1) 65%,
    rgba(171, 220, 255, 1) 99%
  );
}
.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;}
 .an{
  animation:oxxo 20s ease-in forwards;
}
@keyframes oxxo{
    100%{transform: scale(1.2);opacity: 1;
    }
}

.bottom {
  @include div_r_pc(1920, 78, 0, 0);
  top: auto;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 size(300) size(3020);
  border-color: transparent transparent #008fbb transparent;
}

.t {
  @include img_r_pc(1400, 0, 0);
  top:calc(35% - 21vw);
  
}

.title {
  @include div_l_pc(876, 409, 615, 180);
  height: auto;
  top: auto;
  bottom:size(320);
  font-size: size(93);
  font-weight: normal;
  font-family:'gothic';
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: -0.04em;
  text-align: left;
  color: #ffe900;
}

.subtitle {
  @include div_r_pc(628, 69, 757, 167);
  height: auto;
  top: auto;
  bottom:size(375);
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.58);
  font-size: size(26.2);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
  white-space: nowrap;
}

.hr {
  @include div_r_pc(444, 1, 821, 338);
  top: auto;
  bottom:size(345);
  background-color: #fff;
}

.name {
  @include div_r_pc(146, 34, 795, 180);
  height: auto;
  top: auto;
  bottom:size(330);
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.58);
  font-size: size(17.9);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
  white-space: nowrap;
  span {
    font-size: size(23.2);
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
  .section1 {
    width: 100vw;
    min-height: sizem(670);
    max-height: sizem(812);
    height: sizem(670);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .t {
    @include img_r_m(375, 0, 0);
  }

  .hr {
    @include div_r_m(190, 1, 611, 148);
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.58);
    background-color: #fff;
  }

  .name {
    @include div_r_m(113, 22, 599, 22);
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.58);
    font-size: sizem(15);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: right;
    color: #ffffff;
    white-space: nowrap;
    span {
      font-size: sizem(15);
      white-space: nowrap;
    }
  }

  .bottom {
    @include div_r_m(375, 34, 0, 0);
    top: auto;
    bottom: -10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 size(300) size(3020);
    border-color: transparent transparent #008fbb transparent;
  }

  .title {
    @include div_r_m(302, 149, 420, 35);
    font-size: sizem(32);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.16;
    letter-spacing: sizem(-1.28);
    text-align: left;
    color: #ffe900;
    white-space: nowrap;
  }

  .subtitle {
    @include div_r_m(253, 56, 551, 93);
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.58);
    font-size: sizem(15);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .desc {
    @include div_r_m(325, 192, 93, 27);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(3);
    text-align: center;
    color: #ffffff;
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

  methods: {
    // @slideChangeTransitionEnd="slideChanged"
    // slideChanged(e) {
    //   const swiper = this.$refs.mySwiper.swiper
    //   if (swiper.isEnd) {
    //     this.slideIndex = 0
    //   } else if (swiper.isBeginning) {
    //     this.slideIndex = swiper.slides.length - 3
    //   } else {
    //     this.slideIndex = swiper.activeIndex - 1
    //   }
    // },
  },

  mounted() {},

  created() {},

  computed: {},
}
</script>
