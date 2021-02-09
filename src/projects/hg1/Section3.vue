<template>
  <div class="section3">
    <div class="animate-slide" v-if="!isMobile">
      <img src="./s3/漂浮物件_分層/3_class_1.png" :alt="`${info.caseName}_logo`" class="pc1" data-parallax="4">
    </div>
    <div class="animate-slide" v-if="isMobile">
      <!-- <img src="./s1/mo3.png" :alt="`${info.caseName}_bg`" class="mo3" data-parallax="3"> -->
      <img src="./mo/s3/漂浮物件_單一/m_3_single_1.png" :alt="`${info.caseName}_bg`" class="mo1" data-parallax="2">
      <!-- <img src="./s1/mo1.png" :alt="`${info.caseName}_bg`" class="mo1" data-parallax="1"> -->
    </div>
    <img src="./s3/technology_line.png" :alt="`${info.caseName}_technology_line`" class="tech-line" data-aos="fade" data-aos-delay="0">
    <img src="./s3/city.png" :alt="`${info.caseName}_city`" class="city" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
    <img src="./s3/city_m.png" :alt="`${info.caseName}_city`" class="city" data-aos="fade-up" data-aos-delay="200" v-if="isMobile">
    <div class="balloon-1" data-aos="fade-down" data-aos-delay="400">
      <img src="./s3/balloon_1.png" :alt="`${info.caseName}_balloon_1`">
    <div class="item title-1" data-aos="fade-down" data-aos-delay="500">
      南崁台茂<br />生活圈
    </div>
    </div>
    <div class="balloon-2" data-aos="fade-down" data-aos-delay="600">
      <img src="./s3/balloon_2.png" :alt="`${info.caseName}_balloon_2`">
    <div class="item title-2" data-aos="fade-down" data-aos-delay="700">
      春日路<br />商圈
    </div>
    </div>
    <div class="balloon-3" data-aos="fade-down" data-aos-delay="800">
      <img src="./s3/balloon_3.png" :alt="`${info.caseName}_balloon_3`">
    <div class="item title-3" data-aos="fade-down" data-aos-delay="900">
      經國特區<br />商圈
    </div>
    </div>
    <div class="balloon-4" data-aos="fade-down" data-aos-delay="1000">
      <img src="./s3/balloon_4.png" :alt="`${info.caseName}_balloon_4`">
    <div class="item title-4" data-aos="fade-down" data-aos-delay="1100">
      中正藝文<br />商圈
    </div>
    </div>
    <img src="./s3/style_arrow.png" :alt="`${info.caseName}_style_arrow`" class="arrow" data-aos="fade-up" data-aos-delay="200">
    <h1 class="title" :data-aos="isPC ? 'fade-up' : 'fade'" data-aos-delay="400">
      信義區<span>2.0</span>的 超人
    </h1>
    <h1 class="subtitle" :data-aos="isPC ? 'fade-up' : 'fade'" data-aos-delay="600">
      2025<br />
      NEXT FUTURE
    </h1>
    <div class="desc" :data-aos="isPC ? 'fade-up' : 'fade'" data-aos-delay="800">
      「大經國特定計畫區」以生活商業生態的多元發展，遠雄及中悅建設百億資金注入造鎮，加上中國人壽即將進駐，經國特區將躍升為國門最大頂級商辦中心，聚焦繁榮璀璨都心，有望成為台灣第二座信義計畫區！
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  background-image: url('~@/projects/hg1/s3/technology_bg.png');
  background-size: cover;
  background-position: 100%;
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
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

}

.city {
  @include img_l_pc(1885, 139, 0);
}

.tech-line {
  @include img_c_pc(1920, 60);
}

.arrow {
  @include img_l_pc(50, 150 + 60, 545);
}

.balloon-{
  &1,
  &2,
  &3,
  &4{img{width: 100%;position: absolute;left: 0;top: 0;z-index: 3}}
}
.balloon-1 {
  @include img_r_pc(169, 150 + 60, 1024);
}

.balloon-2 {
  @include img_r_pc(169, 150 + 60, 730);
  .item{color: #0296db;}
}

.balloon-3 {
  @include img_r_pc(169, 150 + 60, 460);
}

.balloon-4 {
  @include img_r_pc(169, 150 + 60, 193);
  .item{color: #0296db;}
}

.item {position: relative;
  font-size: size(34.2);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(-1.03);
  text-align: center;
  color: #ffffff;
  top: 1.35em;
  white-space: nowrap;width: 97%;z-index: 4;
}

.title {
  @include img_l_pc(420, 56 + 60, 180);
  font-size: size(53.4);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(0.16);
  text-align: left;
  color: #19191a;
  white-space: nowrap;
  span {
    font-size: size(64.6);
  }
}

.subtitle {
  @include img_l_pc(420, 140 + 60, 180);
  font-size: size(61);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.03;
  letter-spacing: size(1.4);
  text-align: left;
  color: #0296db;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(420, 286 + 60, 180);
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.17;
  letter-spacing: size(1.96);
  text-align: left;
  color: #666666;
}

.animate-slide {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s;
  > img {
    @for $i from 1 through 10 {
      $randomNum: random(4) + 3;
      &:nth-child(#{$i}) {
        transform: translateY((random(10) - 50) + px);
        animation: an ($randomNum + s) 3s infinite alternate;
      }
    }
  }

  .pc1 {
    @include img_l_pc(1980, 0, -60);
    z-index: 1;
  }
}

@keyframes an {
  to {
    transform: translateY(0);
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
  .section3 {
    width: 100vw;
    height: sizem(618);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .city {
    @include img_c_m(375, 35);
  }

  .tech-line {
    @include img_c_m(375, 10);
  }

  .arrow {
    @include img_r_m(37, 370, 34);
    opacity: 1 !important;
  }

  .balloon-1 {
    @include img_l_m(52, 39, 33);
  }

  .balloon-2 {
    @include img_l_m(52, 39, 123);
  }

  .balloon-3 {
    @include img_r_m(52, 39, 116);
  }

  .balloon-4 {
    @include img_r_m(52, 39, 33);
  }

  .item {
    font-size: sizem(10);
  }


  .title {
    @include img_l_m(196, 286, 32);
    font-size: sizem(22);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: sizem(0.3);
    text-align: left;
    color: #19191a;
    white-space: nowrap;
    opacity: 1 !important;
    span {
      font-size: sizem(30);
    }
  }

  .subtitle {
    @include img_l_m(190, 337, 32);
    font-size: sizem(28);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: sizem(0.64);
    text-align: left;
    color: #0296db;
    opacity: 1 !important;
    white-space: nowrap;
  }

  .desc {
    @include img_l_m(308, 428, 33);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: sizem(1.2);
    text-align: left;
    opacity: 1 !important;
    color: #666666;
  }

  .animate-slide {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s;
    > img {
      @for $i from 1 through 10 {
        $randomNum: random(4) + 3;
        &:nth-child(#{$i}) {
          transform: translateY((random(10) - 50) + px);
          animation: an ($randomNum + s) 3s infinite alternate;
        }
      }
    }

    .mo1 {
      @include img_r_m(60, 230, -20);
    }

    // .mo2 {
    //   @include img_c_m(375, -20);
    // }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section3',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {},
}
</script>
