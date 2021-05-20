<template>
  <div class="section4">
    <div class="desc desc1" v-if="isPC"  data-aos="fade-up" data-aos-delay="600">
      陽明山溫泉位於大屯山系，擁有豐富的溫泉資源<br />
      溫泉泉質以白磺泉為主、青磺泉次之<br />
      與北投溫泉、關子嶺溫泉、四重溪溫泉並列為臺灣四大溫泉
    </div>
    <div class="desc desc2"  v-if="isPC"  data-aos="fade-up" data-aos-delay="800">
      陽明山除了知名溫泉<br />
      更有稀有的冷泉，如冷水坑及富士坪古道的野溪冷泉<br />
      在盎然綠意的大自然洗禮下<br />
      充分享受著青春的泉源、養生的能量、身心靈徹底放鬆
    </div>
    <div class="desc desc1" v-if="isMobile"  data-aos="fade-up" data-aos-delay="600">
      陽明山溫泉位於大屯山系，擁有豐富的溫泉資源<br />
      溫泉泉質以白磺泉為主、青磺泉次之，與北投溫泉、關子嶺溫泉、四重溪溫泉並列為臺灣四大溫泉
    </div>
    <div class="desc desc2"  v-if="isMobile"  data-aos="fade-up" data-aos-delay="800">
      陽明山除了知名溫泉<br />
      更有稀有的冷泉，如冷水坑及富士坪古道的野溪冷泉，在盎然綠意的大自然洗禮下<br />
      充分享受著青春的泉源、養生的能量、身心靈徹底放鬆
    </div>
    <div class="title" v-if="isMobile"  data-aos="fade-up" data-aos-delay="200">
      陽明青春泉源
    </div>
    <div class="subtitle" v-if="isMobile"  data-aos="fade-up" data-aos-delay="400">
      自然養生能量
    </div>
    <img src="./s4/title.png" :alt="`${info.caseName}_img`" class="title" v-if="isPC"  data-aos="fade-up" data-aos-delay="200">
    <img src="./s4/line_style.png" :alt="`${info.caseName}_img`" class="line_style"  v-if="isPC">
    <img src="./s4/line_style_m.png" :alt="`${info.caseName}_img`" class="line_style"  v-if="isMobile">
    <img src="./s4/img.png" :alt="`${info.caseName}_img`" class="img" v-if="isPC">
    <img src="./s4/img_m.png" :alt="`${info.caseName}_img`" class="img" v-if="isMobile">
    <img src="./s4/t_style.png" :alt="`${info.caseName}_img`" class="t_style">
    <div class="cloud-bg">
      <img src="./s4/style_1.png" :alt="`${info.caseName}_img`" class="cloud cloud1">
      <img src="./s4/style_2.png" :alt="`${info.caseName}_img`" class="cloud cloud2">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section4 {
  width: 100%;
  height: auto;
  min-height: size(1163 + 205);
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

.img {
  @include img_l_pc(1920, 197.3, 0);
}

.mask {
  @include img_c_pc(1920, 0);
  top: auto;
  bottom: size(-175);
  z-index: 8;
}

.title {
  @include img_l_pc(109, 50, 179);
}

.desc {
  font-size: size(20);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.65;
  letter-spacing: size(2);
  text-align: left;
  color: #4d4d4d;
  white-space: nowrap;
}

.desc1 {
  @include img_l_pc(570, 167, 363);
}

.desc2 {
  @include img_l_pc(570, 354, 363);
}

.line_style {
  @include img_l_pc(1920, 380, 0);
  animation: strech 5s ease-in-out alternate infinite;
}
.t_style {
  @include img_l_pc(578, -40, 0);
  animation: strech 5s ease-in-out alternate infinite;
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
    @include img_l_pc(1007, 80, -50);
    top: auto;
    bottom: 0;
    transform: translateX(-10%);
  }

  .cloud2 {
    @include img_r_pc(537, 900, 50);
    top: auto;
    bottom: 0;
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
  .section4 {
    width: 100vw;
    min-height: sizem(740);
    max-height: sizem(750);
    height: sizem(740);
    // margin: 0 0 -12vw 0;
    // background-size: auto size-m(750);
    z-index: initial;
    // &:before {
    //   background-image: url('./s1/bg_m.jpg');
    // }
  }

  .img {
    @include img_l_m(375, 40, 0);
  }

  .mask {
    @include img_c_m(375, 0);
    top: auto;
    bottom: size(-35);
    z-index: 8;
  }

  .title {
    @include img_l_m(133, 72, 32);
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: sizem(2.6);
    text-align: center;
    color: #cc8b00;
    white-space: nowrap;
  }

  .subtitle {
    @include img_l_m(133, 100, 32);
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: sizem(2.6);
    text-align: center;
    color: #000;
    white-space: nowrap;
  }

  .desc {
    font-size: sizem(14);
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
    @include img_c_m(315, 449);
  }

  .desc2 {
    @include img_c_m(315, 563);
  }

  .line_style {
    @include img_l_m(375, 100, 0);
    animation: strech 5s ease-in-out alternate infinite;
  }
  .t_style {
    @include img_l_m(218, 40, 0);
    animation: strech 5s ease-in-out alternate infinite;
  }

  .cloud-bg {
    .cloud {
      animation: cloud 5s ease-in-out alternate infinite;
    }

    .cloud1 {
      @include img_l_m(217, 390, -20);
      transform: translateX(-10%);
    }

    .cloud2 {
      @include img_r_m(145, 370, 20);
      transform: translateX(-15%);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section4',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      // blockIndex: 0,
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
