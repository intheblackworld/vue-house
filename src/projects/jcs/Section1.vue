<template>
  <div class="section1">
    <img src="./s1/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img">
    <img src="./s1/bg.png" :alt="`${info.caseName}_img`" class="grass">
    <div>
      <img src="./s1/logo.png" :alt="`${info.caseName}_top`" class="logo" v-if="isPC" data-aos="fade-top" data-aos-delay="200">
      <h3 class="title" data-aos="fade-top" data-aos-delay="400">
        ｜植感生活．職人建築｜
      </h3>
      <h3 class="subtitle">
        豐景 <span>2~4</span> 房
      </h3>
      <h3 class="hint">
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
    margin: 0 0 -12vw 0;
    background-size: auto size-m(750);
    z-index: initial;
  }

  .title1 {
    @include img_c_m(313, 258);
    // top: calc(50% + 100vw * (505 - 540) / 1920);
    font-size: sizem(33);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #fff000;
    white-space: nowrap;
    span {
      font-size: sizem(38);
    }
  }

  .title2 {
    @include img_c_m(306, 310);
    // top: calc(50% + 100vw * (586 - 540) / 1920);
    font-size: sizem(26);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    span {
      font-size: sizem(29);
    }
  }

  .top {
    position: absolute;
    width: sizem(310);
    left: 0;
    right: 0;
    margin: 0 auto;
    top: calc(50% + 100vw * (70 - 302) / 375);
  }
  .c1 {
    left: 0;
    top: calc(50% - 77vw);
    width: sizem(97);
    transform: translateX(-10%);
  }
  .c2 {
    left: -6.7vw;
    top: calc(50% + 48vw);
    width: sizem(262);
    transform: translateX(-8%);
  }
  .c3 {
    right: 55vw;
    top: calc(50% + 72vw);
    width: sizem(132);
    transform: translateX(30%);
    animation-direction: alternate-reverse;
  }
  .c4 {
    right: -1.5vw;
    top: calc(50% + 60vw);
    width: sizem(369);
    transform: translateX(5%);
    animation-direction: alternate-reverse;
  }

  .t {
    position: absolute;
    width: sizem(310);
    left: 0;
    right: 0;
    margin: 0 auto;
    top: calc(50% + 100vw * (650 - 302) / 375);
  }
  .o {
    width: sizem(40);
    right: 19.7vw;
    top: calc(50% + 100vw * (676 - 302) / 375);
  }

  .top-logo {
    @include img_c_m(315, 135);
  }

  .top-title1 {
    @include img_c_m(315, 274);
  }

  .top-title2 {
    @include img_c_m(312, 409);
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
