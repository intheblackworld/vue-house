<template>
  <div class="section1">
    <img src="./s1/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img">
    <div class="linear-dark absolute"></div>
    <!-- <div class="partical-bg absolute">
      <vue-particles color="#dedede" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle" :particleSize="4" linesColor="#dedede" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
      </vue-particles>
    </div> -->

    <img src="./s1/logo.png" :alt="`${info.caseName}_img`" class="logo">
    <div class="title">
      企業門面升級首選
    </div>
    <div class="subtitle">
      更具國際發展的 凹子底商業特區
    </div>
    <div class="desc">
      最好的地段 最好的企業總部
    </div>
    <div class="label">
      農16特區 唯一A商辦
    </div>
    <div class="btn flex-c">
      60 ．140 ．680 坪
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(1080);
  // max-height: size(1080);
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
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;
}

.logo {
  @include img_l_pc(279, 329, 166);
}

.linear-dark {
  width: 44%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(to right, #000, transparent);
}

.partical-bg {
  @include div_l_pc(754, 1080, -120, -200);
  transform: rotate(45deg);
  overflow: hidden;

  > div {
    position: absolute;
    width: 100%;
    height: size(1080);
  }
}
.title {
  @include img_l_pc(610, 497, 161);
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
  font-size: size(71.9);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4.32);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(603, 607, 159);
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
  font-size: size(40);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(2.4);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(603, 675, 160);
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
  font-size: size(40);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(2.4);
  text-align: center;
  color: #00c4ff;
}

.label {
  @include img_l_pc(603, 831, 166);
  font-size: size(32.2);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
}

.btn {
  @include div_l_pc(359, 54, 896, 166);
  font-size: size(28.1);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  background-color: #0097e2;
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
  .section1 {
    width: 100vw;
    min-height: sizem(666);
    max-height: sizem(750);
    height: sizem(666);
    // margin: 0 0 -12vw 0;
    // background-size: auto size-m(750);
    z-index: initial;
    // &:before {
    //   background-image: url('./s1/bg_m.jpg');
    // }
  }

  .logo {
    @include img_c_m(236, 177);
  }

  .btn {
    @include img_c_m(216, 416);
    cursor: pointer;
  }

  .mask {
    @include img_c_m(375, 0);
    top: auto;
    bottom: sizem(-35);
  }

  .title {
    @include img_c_m(300, 328);
    font-size: sizem(22);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.23;
    letter-spacing: sizem(1.96);
    text-align: center;
    color: #cc8b00;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(102, 373);
    font-size: sizem(16);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.94;
    letter-spacing: sizem(1.2);
    text-align: center;
    color: #686868;
    white-space: nowrap;

    &::after {
      content: '';
      position: absolute;
      @include img_l_m(90, 8, -100);
      border-top: 1px solid #686868;
    }

    &::before {
      content: '';
      position: absolute;
      @include img_r_m(90, 8, -100);
      border-top: 1px solid #686868;
    }
  }

  .cloud-bg {
    .cloud {
      animation: cloud 5s ease-in-out alternate infinite;
    }

    .cloud1 {
      @include img_l_m(76, 118, -20);
      transform: translateX(-10%);
    }

    .cloud2 {
      @include img_r_m(286, 79, -50);
      transform: translateX(-15%);
    }

    .cloud3 {
      @include img_r_m(151, 104, 20);
      transform: translateX(-8%);
    }

    .cloud4 {
      @include img_r_m(209, 499, -40);
      transform: translateX(20%);
    }

    .cloud5 {
      @include img_l_m(322, 561, -50);
      transform: translateX(-5%);
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
