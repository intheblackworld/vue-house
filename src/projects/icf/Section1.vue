<template>
  <div class="section1">
    <img src="./s1/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img" v-if="isPC">
    <img src="./mobile/01/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img" v-if="isMobile">
    <div class="linear-dark absolute" data-aos="fade-right" data-aos-delay="0" v-if="isPC"></div>
    <div class="linear-dark absolute" data-aos="fade-down" data-aos-delay="0" v-if="isMobile"></div>
    <div class="partical-bg absolute">
      <vue-particles color="#fff" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle" :particleSize="4" linesColor="#fff" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
      </vue-particles>
    </div>

    <img src="./s1/logo.png" :alt="`${info.caseName}_img`" class="logo">
    <div class="title" data-aos="fade-up" data-aos-delay="200">
      企業門面升級首選
    </div>
    <div class="subtitle" data-aos="fade-up" data-aos-delay="400">
      更具國際發展的 凹子底商業特區
    </div>
    <div class="desc" data-aos="fade-up" data-aos-delay="600">
      最好的地段 最好的企業總部
    </div>
    <div class="label" data-aos="fade-up" data-aos-delay="800">
      農16特區 唯一A級商辦
    </div>
    <div class="btn flex-c" data-aos="fade-up" data-aos-delay="1000">
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
  height: 100%;
  // min-height: size(1080);
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
    min-height: sizem(670);
    max-height: sizem(670);
    height: sizem(670);
    // margin: 0 0 -12vw 0;
    // background-size: auto size-m(750);
    z-index: initial;
    // &:before {
    //   background-image: url('./s1/bg_m.jpg');
    // }
  }

  .logo {
    @include img_c_m(184, 126);
  }

  .linear-dark {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, .7), transparent);
  }

  .partical-bg {
    @include div_l_m(375, 667, -320, 100);
    transform: rotate(-65deg);
    overflow: hidden;

    > div {
      position: absolute;
      width: 100%;
      height: sizem(667);
    }
  }
  .title {
    @include img_c_m(254, 244);
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
    font-size: sizem(30);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.88;
    letter-spacing: sizem(1.8);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(302, 312);
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
    font-size: sizem(20);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.4;
    letter-spacing: sizem(1.2);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }

  .desc {
    @include div_c_m(303, 35, 372);
    text-shadow: none;
    font-size: sizem(20);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: sizem(1.2);
    text-align: center;
    color: #253a7e;
    background-color: rgba(255, 255, 255, 0.82);
  }

  .label {
    @include div_c_m(239, 61, 487);
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
    font-size: sizem(16);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.42;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    background-color: #0097e2;
  }

  .btn {
    @include img_c_m(168, 526);
    font-size: sizem(18);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    background-color: #0097e2;
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
