<template>
  <div class="section1">
    <picture>
      <source media="(min-width: 767px)" srcset="./webp/s1/bg.webp" type="image/webp" />
      <source media="(min-width: 767px)" srcset="./s1/bg.jpg" type="image/jpeg" />
      <source media="(max-width: 767px)" srcset="./webp/s1/bgm.webp" />
      <source media="(max-width: 767px)" srcset="./s1/bgm.jpg" type="image/jpeg" />
      <img src="./s1/bg.jpg" :alt="info.caseName" class="bg-img">
    </picture>
    <picture>
      <source media="(min-width: 767px)" srcset="./s1/bg3.gif" type="image/jpeg" />
      <source media="(max-width: 767px)" srcset="./s1/bg3m.gif" type="image/jpeg" />
     <img src="./s1/bg3.gif" :alt="info.caseName" class="bg-img img2">
    </picture>
    <div class="title" v-if="isPC" data-aos="fade-up" data-aos-delay="200">
      中山北路 看見璞真
    </div>
    <div class="title" v-else data-aos="fade-up" data-aos-delay="200">
      中山北路<br />看見璞真
    </div>

    <picture>
      <source srcset="./webp/s1/25675888.webp" type="image/webp" />
      <source srcset="./s1/25675888.png" type="image/jpeg" />
      <img src="./s1/25675888.png" alt="1" class="logo" data-aos="fade-up" data-aos-delay="200">
    </picture>

    <div class="subtitle" v-if="isPC" data-aos="fade-up" data-aos-delay="600">
      Zhongshan Art Mansion
    </div>
    <div class="subtitle" v-else data-aos="fade-up" data-aos-delay="600">
      Zhongshan<br />Art<br />Mansion
    </div>
    <!-- <picture>
      <source media="(min-width: 767px)" srcset="./s1/2.png" />
      <source media="(max-width: 767px)" srcset="./s1/2_m.png" />
      <img src="./s1/2.png" alt="1" class="bg-img img2">
    </picture>
    <picture>
      <source media="(min-width: 767px)" srcset="./s1/t.png" />
      <source media="(max-width: 767px)" srcset="./s1/t_m.png" />
      <img src="./s1/t.png" alt="1" class="t">
    </picture> -->
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section1 {
  width: 100%;
  height: 100vh;
  min-height: calc(900 * 100vw / 1920);
  max-height: calc(1080 * 100vw / 1920);
  position: relative;
  margin: 0;
  // background: url('s1/bg.jpg') center;
  background-size: cover;
  overflow: hidden;
  text-align: center;

  // 手機版
  @include md {
    height: 100vh;
    min-height: calc(667 * 100vw / 375);
    max-height: calc(812 * 100vw / 375);
  }
}
.img2{mix-blend-mode: overlay;}
.bg-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.logo {
  @include img_c_pc(154, 604);

  @include md {
    @include img_l_m(105, 481, 47);
  }
}

.title {
  @include img_c_pc(1092, 309);
  font-size: size(126.9);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: size(4.82);
  text-align: center;
  color: #fff;
  white-space: nowrap;

  @include md {
    font-size: sizem(66);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.03;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
    writing-mode: vertical-lr;
    text-orientation: upright;

    @include img_r_m(154, 129, 42);
  }
}

.subtitle {
  @include img_c_pc(528, 777);
  font-size: size(44.2);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  white-space: nowrap;

  @include md {
    font-size: sizem(19);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.37;
    letter-spacing: sizem(0.19);
    text-align: left;
    color: #fff;
    @include img_l_m(107, 375, 45);
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
