<template>
  <div class="section10">
    <div class="animate-slide" v-if="!isMobile">
      <img src="./s10/漂浮物件_分層/9_class_1.png" :alt="`${info.caseName}_logo`" class="pc1" data-parallax="4">
      <img src="./s10/漂浮物件_分層/9_class_2.png" :alt="`${info.caseName}_logo`" class="pc2" data-parallax="4">
    </div>
    <div class="animate-slide" v-if="isMobile">
      <!-- <img src="./s1/mo3.png" :alt="`${info.caseName}_bg`" class="mo3" data-parallax="3">
      <img src="./s1/mo2.png" :alt="`${info.caseName}_bg`" class="mo2" data-parallax="2"> -->
      <img src="./mo/s10/漂浮物件_分層/m_9_class_1.png" :alt="`${info.caseName}_bg`" class="mo1" data-parallax="1">
    </div>
    <img src="./s10/materials_bg.png" :alt="`${info.caseName}_style_arrow`" class="img1" :data-aos="isPC ? 'fade-up' : 'fade'" data-aos-delay="200" v-if="isPC">
    <img src="./mo/s10/m_materials_bg.png" :alt="`${info.caseName}_style_arrow`" class="img1" :data-aos="isPC ? 'fade-up' : 'fade'" data-aos-delay="200" v-if="isMobile">
    <div class="title" data-aos="fade" data-aos-delay="400">
      精品建材
    </div>
    <div class="subtitle" data-aos="fade" data-aos-delay="600">
      MATERIALS
    </div>
    <div class="desc" data-aos="fade" data-aos-delay="800">
      名品建材 升級享受
    </div>
    <div class="hr" :data-aos="isPC ? 'scale-right' : 'fade'" data-aos-delay="200"></div>
    <img src="./s10/style_arrow_6.png" :alt="`${info.caseName}_style_arrow`" class="arrow" :data-aos="isPC ? 'fade-up' : 'fade'" data-aos-delay="200">
    <div class="item-list flex-c wrap">
      <img :src="item.img" :alt="`${info.caseName}_item`" :data-aos="isPC ? 'fade-up' : 'fade'" :data-aos-delay="200 + index * 50" v-for="(item, index) in item_list" :key="item.img + index">
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section10 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}
.bg {
  background-color: #fff;
  background-position: 100% 0%;
  background-size: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-image: url('./s2_bg.jpg');
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
  &:nth-child(1) {
    position: relative;
  }
}

.img1 {
  @include img_l_pc(1076, 185, -100);
}

.title {
  @include img_l_pc(211, 695, 693);
  font-size: size(53.4);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(-0.9);
  text-align: left;
  color: #fff;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(170, 745, 688);
  font-size: size(85.9);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(0.26);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  @include img_r_pc(299, 772, 178);
  font-size: size(37);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(-0.63);
  text-align: left;
  color: #ffffff;
}

.arrow {
  @include img_l_pc(50, 717, 916);
}

.hr {
  @include img_r_pc(545, 821, 180);
  height: 1px;
  background-color: #fff;
}

.item-list {
  @include img_r_pc(1085, 220, 185);
  img {
    width: size(177);
    margin: size(10) size(20);
  }
}
.animate-slide {
  width: 100%;
  height: 100%;
  position: absolute;
  // z-index: 3;
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
    @include img_l_pc(550, 0, 0);
    // z-index: 1;
  }

  .pc2 {
    @include img_r_pc(160, 73, 68);
    top: auto;
    bottom: 0;
    // z-index: 1;
  }
}

@keyframes an {
  to {
    transform: translateY(0);
  }
}
@media only screen and (max-width: 1440px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
    background-size: 1920px auto;
    background-position: center;
  }
  .txt {
    height: auto;
    margin-top: 100px;
  }

  .title {
    font-size: 52px;
  }

  .desc {
    font-size: 24px;
  }

  .text {
    top: 0;
  }
}

@media screen and (max-width: 767px) {
  .section10 {
    width: 100vw;
    height: sizem(958);
    min-height: auto;
    max-height: initial;
    position: relative;
  }

  .bg-img {
    width: 100vw;
    height: sizem(958);
    min-height: size(1080);
    position: absolute;
    top: 0;
    left: 0;
    height: auto;
    display: block;
    object-fit: cover;
    margin-top: 0;
    &:nth-child(1) {
      position: relative;
    }
  }
  .img1 {
    @include img_l_m(375, 550, 0);
    opacity: 1 !important;
  }

  .title {
    @include img_l_m(100, 60, 32);
    font-size: sizem(25);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.56;
    letter-spacing: sizem(-0.43);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    opacity: 1 !important;
  }

  .subtitle {
    @include img_l_m(283, 94, 28);
    font-size: sizem(54);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.91;
    letter-spacing: sizem(0.16);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    z-index: 10;
    opacity: 1 !important;
  }

  .desc {
    @include img_l_m(162, 187, 30);
    font-size: sizem(20);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.22;
    letter-spacing: sizem(-0.34);
    text-align: left;
    color: #ffffff;
    z-index: 10;
    opacity: 1 !important;
  }

  .arrow {
    @include img_l_m(28, 84, 138);
    opacity: 1 !important;
  }

  .hr {
    @include img_l_m(310, 185, 32);
    height: 1px;
    background-color: #fff;
    opacity: 1 !important;
  }

  .item-list {
    @include img_r_m(375 - 34 + 10, 265, 15);
    z-index: 10;
    img {
      min-width: sizem(78);
      margin: sizem(9) sizem(3);
      opacity: 1 !important;
    }
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
      @include img_l_m(375, 50, -20);
      z-index: 3;
    }

    // .mo2 {
    //   @include img_l_m(95, 360, -30);
    // }
  }
}
</style>

<script>
import { isPC, isMobile } from '@/utils'
import info from '@/info'
export default {
  name: 'section10',

  data() {
    return {
      isPC,
      isMobile,
      info,
      item_list: [
        {
          img: require('./s10/materials_list_ 1.png'),
        },
        {
          img: require('./s10/materials_list_2.png'),
        },
        {
          img: require('./s10/materials_list_3.png'),
        },
        {
          img: require('./s10/materials_list_4.png'),
        },
        {
          img: require('./s10/materials_list_5.png'),
        },
        {
          img: require('./s10/materials_list_6.png'),
        },
        {
          img: require('./s10/materials_list_7.png'),
        },
        {
          img: require('./s10/materials_list_8.png'),
        },
        {
          img: require('./s10/materials_list_9.png'),
        },
        {
          img: require('./s10/materials_list_10.png'),
        },
      ],
    }
  },

  mounted() {},
}
</script>
