<template>
  <div class="section7">
    <!-- <img src="./s1/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img"> -->
    <!-- <img src="./s1/btn.png" :alt="`${info.caseName}_img`" class="btn" v-scroll-to="{ element: `#contact`, offset: 0 }"> -->
    <Map :bgSrc="bgSrc" :hand="hand" v-if="isMobile"></Map>
    <h1 class="title" data-aos="fade-up" data-aos-delay="200">
      陽明山國家公園旁、13萬6千坪度假別墅
    </h1>
    <img src="./s7/logo.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade-up" data-aos-delay="400">
    <h1 class="subtitle subtitle1" data-aos="fade-up" data-aos-delay="600">
      樂活養生新天地 即將登場
    </h1>
    <h3 class="desc desc1" v-if="isPC" data-aos="fade-up" data-aos-delay="800">
      一個隱於山林的別墅聚落 、 一個全新設計概念的別墅美學
    </h3>
    <h3 class="desc desc1" v-if="isMobile" data-aos="fade-up" data-aos-delay="800">
      一個隱於山林的別墅聚落<br />一個全新設計概念的別墅美學
    </h3>
    <div class="items flex-ac flex-jb">
      <img src="./s7/item_1.png" :alt="`${info.caseName}_img`" data-aos="fade-up" data-aos-delay="900">
      <img src="./s7/item_2.png" :alt="`${info.caseName}_img`" data-aos="fade-up" data-aos-delay="1000">
      <img src="./s7/item_3.png" :alt="`${info.caseName}_img`" data-aos="fade-up" data-aos-delay="1100">
    </div>
    <h3 class="desc desc2">
      為您量身打造<br />
      輕鬆擁有陽明山的萬頃綠意景觀<br />
      輕鬆享有山林裡的 <span>溫泉養生</span> 與休閒樂活
    </h3>
    <div class="cloud-bg">
      <img src="./s7/style_1.png" :alt="`${info.caseName}_img`" class="cloud cloud1">
      <img src="./s7/style_2.png" :alt="`${info.caseName}_img`" class="cloud cloud2">
    </div>
    <div class="subtitle subtitle2">
      野奢莊園 ・ 即將展開 ・ 敬請期待
    </div>
    
    <img src="./s7/img_line.png" class="img_line" data-aos="fade-up" data-aos-delay="400">
    <img src="./s7/img.jpg" alt="" class="img" v-if="isPC">
    <img src="./s7/img_style_1.png" class="img_style_1" data-aos="fade-up" data-aos-delay="600">
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section7 {
  width: 100%;
  height: size(1737);
  min-height: size(1737);
  max-height: auto;
  //overflow: hidden;
  // position: relative;
  // background-image: url('./s1/01_bg.jpg');
  background-size: cover;
  background-attachment: fixed;

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

.logo {
  @include img_c_pc(357, 200);
}

.img {
  @include img_c_pc(1920, 0);
  top: auto;
  bottom: 0;
}

.img_line {
  @include img_c_pc(1920, 0);
  top: auto;
  bottom: 0;
}

.img_style_1 {
  @include img_l_pc(401, 1080, 0);
}

.title {
  @include img_c_pc(770, 90);
  font-size: size(40);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(2.6);
  text-align: center;
  color: #000000;
  white-space: nowrap;
}

.subtitle {
  font-size: size(40);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(5.2);
  text-align: center;
  color: #cc8b00;
  white-space: nowrap;
}
.subtitle1 {
  @include img_c_pc(508, 303);
}
.subtitle2 {
  @include img_c_pc(680, 885);
}

.items {
  @include img_c_pc(141 * 3 + 63 * 2, 478);

  img {
    width: size(141);
  }
}

.desc {
  font-size: size(20);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.65;
  letter-spacing: size(2);
  text-align: center;
  color: #4d4d4d;
  white-space: nowrap;
}

.desc1 {
  @include img_c_pc(562, 378);
}

.desc2 {
  @include img_c_pc(386, 717);
  span {
    font-weight: bold;
    color: #cc8b00;
  }
}

.cloud-bg {
  .cloud {
    animation: cloud 5s ease-in-out alternate infinite;
  }

  .cloud1 {
    @include img_l_pc(606, 218, -80);
    transform: translateX(-10%);
  }

  .cloud2 {
    @include img_r_pc(597, 391, -60);
    transform: translateX(-15%);
  }
}
@keyframes cloud {
  to {
    transform: translateX(0);
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section7 {
    width: 100vw;
    min-height: sizem(753);
    max-height: sizem(753);
    height: sizem(753);
    // margin: 0 0 -12vw 0;
    // background-size: auto size-m(750);
    z-index: initial;
    // &:before {
    //   background-image: url('./s1/bg_m.jpg');
    // }
  }

  .logo {
    @include img_c_m(161, 58);
  }

  .img {
    @include img_c_m(375, 0);
    top: auto;
    bottom: 0;
  }

  .img_line {
    @include img_c_m(375, 0);
    top: auto;
    bottom: 0;
  }

  .img_style_1 {
    @include img_l_m(126, 518, 0);
    z-index: 5;
  }

  .title {
    @include img_c_m(308, 22);
    font-size: sizem(16);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1.04);
    text-align: center;
    color: #000000;
    white-space: nowrap;
  }

  .subtitle {
    font-size: sizem(14);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: sizem(1.82);
    text-align: center;
    color: #cc8b00;
    white-space: nowrap;
  }
  .subtitle1 {
    @include img_c_m(178, 114);
  }
  .subtitle2 {
    font-size: sizem(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.94;
    letter-spacing: sizem(1.04);
    text-align: center;
    color: #cc8b00;
    @include img_c_m(288, 462);
  }

  .items {
    @include img_c_m(81 * 3 + 36 * 2, 264);

    img {
      width: sizem(81);
    }
  }

  .desc {
    font-size: sizem(14);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.86;
    letter-spacing: sizem(0.7);
    text-align: center;
    color: #4d4d4d;
    white-space: nowrap;
  }

  .desc1 {
    @include img_c_m(198, 147);
  }

  .desc2 {
    @include img_c_m(258, 383);
    span {
      font-weight: bold;
      color: #cc8b00;
    }
  }

  .cloud-bg {
    .cloud {
      animation: cloud 5s ease-in-out alternate infinite;
    }

    .cloud1 {
      @include img_l_m(206, 197, -40);
      transform: translateX(-10%);
    }

    .cloud2 {
      @include img_r_m(190, 215, -50);
      transform: translateX(-15%);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import Map from '@/components/Map.vue'
import info from '@/info'

export default {
  name: 'section7',
  components: {
    Map,
  },
  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      // blockIndex: 0,
      bgSrc: require('./s7/img.jpg'),
      // bgmSrc: require('./s3_bg_m.jpg'),
      hand: require('./s7/arrow_hand.png'),
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
