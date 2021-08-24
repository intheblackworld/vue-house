<template>
  <div class="section8">
    <img src="./s8/0.jpg" :alt="`${info.caseName}_img`" class="img" data-aos="fade-down" data-aos-delay="600">
    <h3 class="desc" v-if="isPC" data-aos="fade-up" data-aos-delay="400">
      香港巴馬丹拿集團成立於1868年，是東南亞歷史最悠久、規模最龐大、地位最崇高的建築集團，辦事處橫跨亞洲數十座重要城市。兩世紀來操刀無數富紳豪邸、跨國總部、五星酒店，持續締造劃時代建築地標。香港中環金融總部群像，定義維港天際新風貌；上海外灘萬國建築博覽，更有二分之一出自P&T手筆；台北遠企香格里拉飯店、信義計畫區多幢百坪豪邸，亦為P&T經典鉅著。
    </h3>
    <div class="title" v-if="isPC" data-aos="fade-up" data-aos-delay="200">
      縱橫兩世紀<br />全球百年建築巨擘<br />改寫亞洲建築史
    </div>
    <div class="subtitle" v-if="isPC" data-aos="fade-up" data-aos-delay="400">
      香港巴馬丹拿集團
    </div>
    <silent-box data-aos="fade-up" data-aos-delay="400" class="gallery flex-ac flex-jb wrap" :gallery="gallery"></silent-box>
  </div>
</template>
<style lang="scss">
@import '@/assets/style/function.scss';
.gallery {
  .silentbox-item {
    width: size(83);
    height: size(83);
    margin-top: size(26);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section8 {
  width: 100%;
  height: auto;
  min-height: size(900);
  max-height: auto;
  //overflow: hidden;
  // position: relative;
  // background-image: url('./s1/01_bg.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-color: #fff;

  // margin: 0 0 size(400) 0;

  // &:before {
  //   content: ' ';
  //   position: fixed;
  //   z-index: -1;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: url('./s1/bg.jpg') center 0 no-repeat;
  //   background-size: cover;
  // }
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
}

.title {
  @include img_l_pc(272, 193, 143);
  font-size: size(34);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #267f9c;
  white-space: nowrap;

  &.title2 {
    @include img_l_pc(272, 531, 143);
  }
}

.desc {
  @include img_l_pc(464, 346, 143);
  font-size: size(16);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: size(1.6);
  text-align: left;
  color: #3e3a39;
}

.subtitle {
  @include img_l_pc(32, 100, 54);
  font-size: size(28);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: #f3b2c1;
  writing-mode: vertical-lr;
  text-orientation: upright;
}

.img {
  @include img_r_pc(1050, 101, 136);
}
.gallery {
  @include img_l_pc(403, 608 - 26, 142);
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section8 {
    width: 100vw;
    min-height: sizem(662);
    max-height: sizem(662);
    height: sizem(662);
    // margin: 0 0 -12vw 0;
    // background-size: auto size-m(750);
    z-index: initial;
    // &:before {
    //   background-image: url('./s1/bg_m.jpg');
    // }
  }

  .title {
    @include img_l_m(178, 30, 30);
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: sizem(2.6);
    text-align: center;
    color: #000000;
    white-space: nowrap;
  }

  .subtitle {
    @include img_l_m(223, 60, 30);
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: sizem(2.6);
    text-align: left;
    color: #cc8b00;
    white-space: nowrap;
  }

  .desc {
    font-size: sizem(16);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.86;
    letter-spacing: sizem(0.7);
    text-align: left;
    color: #4d4d4d;
    white-space: normal;
  }

  .desc1 {
    @include img_l_m(315, 140, 30);
  }

  .desc2 {
    @include img_l_m(315, 337, 30);
  }
  .style1 {
    @include img_r_m(158, 385, 0);
  }

  .style2 {
    display: none;
  }

  .img1 {
    @include img_r_m(843, 296, 0);
    display: none;
  }
  .img2 {
    @include img_r_m(843, 769, 0);
    display: none;
  }

  .t_style {
    @include img_l_m(578, 43, 0);
    animation: strech 5s ease-in-out alternate infinite;
  }
  .bird {
    @include img_r_m(117, 0, 0);
  }
  .leaf {
    @include img_l_m(88, 350, -20);
    z-index: 10;
  }

  @keyframes strech {
    to {
      transform: skewX(10deg);
    }
  }

  .cloud-bg {
    .cloud {
      animation: cloud 5s ease-in-out alternate infinite;
    }

    .cloud1 {
      @include img_r_m(745, 80, -150);
      top: auto;
      bottom: size(30);
      transform: translateX(-10%);
      display: none;
    }
  }

  .prev-btn,
  .next-btn {
    height: 100%;
    width: 10em;
    font-size: size(20);
    right: 1em;
    top: -5%;
    margin: 0;
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: translateX(200%);
      // background-color: #df6c0088;
      transition: all 0.3s;
    }
    &::after {
      content: '';
      width: 5em;
      height: 5em;
      position: absolute;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.75em);
      border: solid #fff;
      border-width: 0.1em 0.1em 0 0;
      transform: rotate(45deg) translate(-10%, 10%);
    }
    &:hover:before {
      transform: translateX(0%);
    }
    &:hover:after {
      animation: btn 0.5s ease-in-out infinite alternate;
    }
  }
  .prev-btn {
    transform: scaleX(-1);
    right: auto;
    left: 1em;
  }
  @keyframes btn {
    to {
      transform: rotate(45deg) translate(10%, -10%);
    }
  }

  .swiper-container {
    @include img_c_m(315, 382);
    height: sizem(217);
    // overflow: visible;
  }

  .item {
    p {
      font-size: sizem(12);
    }
  }
  .item-img {
    width: 90%;
    margin: 0 auto;
  }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
    z-index: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    // &:nth-child(1) {
    //   z-index: 1;
    //   // opacity: 1;
    // }

    // &.base {
    //   z-index: 1;
    //   opacity: 1;
    // }
    // &.active {
    //   z-index: 2;
    //   // opacity: 1;
    // }
    .slide-name {
      right: auto;
      top: auto;
      bottom: 1.2rem;
      right: 1.2rem;
      font-size: sizem(15);
    }
  }

  .item-img {
    width: 100%;
    height: sizem(187);
    object-fit: cover;
    margin: 0 auto;
  }

  .swiper-pagination {
    transform: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: auto;
    bottom: 0%;
    left: sizem(0 / 2);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section8',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      gallery: [
        {
          src: require('./s6/01-2009台中勤美誠品.jpg'),
          description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
          alt: 'Blue starry night photo.',
          thumbnailWidth: '20vw',
        },
        {
          src: require('./s6/02-購物-金典綠園道.jpg'),
          description: 'Corno Nero, Italy by Luca Zanon, from Unsplash.',
          alt: 'Landscape photo of mountain with fog.',
          thumbnailWidth: '20vw',
        },
        {
          src: require('./s6/03-2011勤美璞真.jpg'),
          description:
            'Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.',
          alt: 'Low angle photo of pine trees.',
          thumbnailWidth: '20vw',
        },
        {
          src: require('./s6/04-健身房情境示意圖.jpg'),
          description:
            'Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.',
          alt: 'Low angle photo of pine trees.',
          thumbnailWidth: '20vw',
        },
        {
          src: require('./s6/05-飯店情境示意圖.jpg'),
          description:
            'Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.',
          alt: 'Low angle photo of pine trees.',
          thumbnailWidth: '20vw',
        },
        {
          src: require('./s6/06-購物-金典綠園道-(14).jpg'),
          description:
            'Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.',
          alt: 'Low angle photo of pine trees.',
          thumbnailWidth: '20vw',
        },
        {
          src: require('./s6/07-勤美術館2.jpg'),
          description:
            'Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.',
          alt: 'Low angle photo of pine trees.',
          thumbnailWidth: '20vw',
        },
        {
          src: require('./s6/08-勤美術館.jpg'),
          description:
            'Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.',
          alt: 'Low angle photo of pine trees.',
          thumbnailWidth: '20vw',
        },
      ],
    }
  },

  methods: {},

  mounted() {
    // setTimeout(() => {
    //   this.blockIndex = 1
    // }, 6000)
  },

  created() {},

  computed: {},
}
</script>
