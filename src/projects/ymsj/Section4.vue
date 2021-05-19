<template>
  <div class="section4">
    <div class="desc desc1">
      陽明山溫泉位於大屯山系，擁有豐富的溫泉資源<br />
      溫泉泉質以白磺泉為主、青磺泉次之<br />
      與北投溫泉、關子嶺溫泉、四重溪溫泉並列為臺灣四大溫泉
    </div>
    <div class="desc desc2">
      陽明山除了知名溫泉<br />
      更有稀有的冷泉，如冷水坑及富士坪古道的野溪冷泉<br />
      在盎然綠意的大自然洗禮下<br />
      充分享受著青春的泉源、養生的能量、身心靈徹底放鬆
    </div>
    <img src="./s4/title.png" :alt="`${info.caseName}_img`" class="title">
    <img src="./s4/line_style.png" :alt="`${info.caseName}_img`" class="line_style">
    <img src="./s4/img.png" :alt="`${info.caseName}_img`" class="img">
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

.logo {
  @include img_c_pc(406, 266);
}

.btn {
  @include img_c_pc(290, 644);
  cursor: pointer;
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
    min-height: sizem(604);
    max-height: sizem(750);
    height: calc(100vh - 63px);
    // margin: 0 0 -12vw 0;
    // background-size: auto size-m(750);
    z-index: initial;
    &:before {
      background-image: url('./s1/bg_m.jpg');
    }
  }

  .grass {
    @include img_r_m(375, 0, -40);
    top: auto;
    bottom: 0;
    transform-origin: bottom;
    animation: grass 4s ease-in-out alternate infinite;
  }

  .logo {
    @include img_l_m(195, 50, 88);
  }
  .logo1 {
    @include img_l_m(195, 50, 88);
  }

  @keyframes grass {
    to {
      transform: skewX(3deg);
    }
  }

  .title {
    @include img_r_m(290, 409, 43);
    font-size: sizem(23);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: sizem(3.68);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }

  .subtitle {
    @include img_l_m(290, 437, 46);
    font-size: sizem(54);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: normal;
    text-align: left;
    color: #231815;
    white-space: nowrap;
    span {
      font-size: sizem(56);
      font-weight: 500;
    }
  }

  .hint {
    @include img_r_m(113, 363, 52);
    font-size: sizem(16);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: sizem(0.32);
    text-align: left;
    color: #00101d;
    span {
      font-weight: 500;
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
