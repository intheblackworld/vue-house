<template>
  <div class="section1">
    <img src="./s1/bg_t.jpg" :alt="`${info.caseName}_img`" class="bg-img bg-t" v-if="isPC">
    <img src="./s1/bg_b.png" :alt="`${info.caseName}_img`" class="bg-img bg-b" v-if="isPC">
    <img src="./m/1/bg_t.jpg" :alt="`${info.caseName}_img`" class="bg-img bg-t" v-if="isMobile">
    <img src="./m/1/bg_t.jpg" :alt="`${info.caseName}_img`" class="bg-img bg-b" v-if="isMobile">
    <img src="./s1/logo.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade-up" data-aos-delay="200">
    <h1 class="title" data-aos="fade-up" data-aos-delay="400">中路一品窗景</h1>
    <h1 class="subtitle" data-aos="fade-up" data-aos-delay="600">風禾公園 詠恆棟距</h1>
    <h1 class="desc" data-aos="fade-up" data-aos-delay="800">
      60米大興西路 ｜ 30、42、53坪 ｜ <span>03-301-3777</span>
    </h1>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height: size(1080);
  min-height: size(1080);
  max-height: size(1080);
  //overflow: hidden;
  position: relative;
  background-color: #fff;
  background-size: cover;
  z-index: 3;
  // margin: 0 0 size(400) 0;
}

.bg-img {
  width: 100%;
  height: auto;
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

.bg-b {
  top: auto;
  bottom: 0;
}

.logo {
  @include img_c_pc(368, 282);
}

.title {
  @include img_c_pc(342, 606);
  font-size: size(57);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.subtitle {
  @include img_c_pc(342, 683);
  font-size: size(40);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  @include img_c_pc(554, 752);
  font-size: size(27);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;

  span {
    font-weight: 900;
    letter-spacing: size(-2.02);
    color: #fff000;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    width: 100vw;
    min-height: sizem(667);
    max-height: sizem(812);
    height: calc(100vh - 63px);
    margin: 0;
    // background-size: auto size-m(750);
    z-index: initial;
  }

  .logo {
    @include img_c_m(234, 161);
  }

  .title {
    @include img_c_m(216, 363);
    font-size: sizem(36);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .subtitle {
    @include img_c_m(213, 410);
    font-size: sizem(25);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .desc {
    @include img_c_m(329, 453);
    font-size: sizem(16);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;

    span {
      font-weight: 900;
      letter-spacing: size(-2.02);
      color: #fff000;
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
