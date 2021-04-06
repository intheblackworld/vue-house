<template>
  <div class="section1">
    <img src="./s1/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img">
    <img src="./s1/bg.png" :alt="`${info.caseName}_img`" class="grass" data-aos="fade-top" data-aos-delay="800">
    <div>
      <img src="./s1/logo.png" :alt="`${info.caseName}_top`" class="logo" data-aos="fade-top" data-aos-delay="200">
      <h3 class="title" data-aos="fade-top" data-aos-delay="400">
        ｜植感生活．職人建築｜
      </h3>
      <h3 class="subtitle" data-aos="fade-top" data-aos-delay="600">
        豐景 <span>2~4</span> 房
      </h3>
      <h3 class="hint" data-aos="fade-top" data-aos-delay="800">
        寓上春樹<span>NO.2</span>
      </h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(1080);
  max-height: size(1080);
  //overflow: hidden;
  position: relative;
  // background-image: url('./s1/01_bg.jpg');
  background-size: cover;
  background-attachment: fixed;
  z-index: 3;
  // margin: 0 0 size(400) 0;
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

  &:nth-child(1) {
    position: relative;
  }
}

.grass {
  @include img_r_pc(1652, 0, -40);
  top: auto;
  bottom: 0;
  transform-origin: bottom;
  animation: grass 4s ease-in-out alternate infinite;
}

.logo {
  @include img_l_pc(437, 142, 200);
}

@keyframes grass {
  to {
    transform: skewX(3deg);
  }
}

.title {
  @include img_r_pc(680, 353, 388);
  font-size: size(54);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: size(8.64);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(866, 417, 866);
  font-size: size(123.9);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #231815;
  white-space: nowrap;
  span {
    font-size: size(131);
    font-weight: 500;
  }
}

.hint {
  @include img_l_pc(244, 833, 507);
  font-size: size(34.3);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(0.69);
  text-align: left;
  color: #00101d;
  span {
    font-weight: 500;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    width: 100vw;
    min-height: sizem(665);
    max-height: sizem(812);
    height: calc(100vh - 63px);
    // margin: 0 0 -12vw 0;
    // background-size: auto size-m(750);
    z-index: initial;
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
  name: 'section1',

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
