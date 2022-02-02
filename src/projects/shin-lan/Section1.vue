<template>
  <div class="section1">
    <!-- <picture>
      <source media="(min-width: 767px)" srcset="./webp/s1/bg.webp" type="image/webp" />
      <source media="(min-width: 767px)" srcset="./s1/bg.jpg" type="image/jpeg" />
      <source media="(max-width: 767px)" srcset="./webp/s1/bgm.webp" />
      <source media="(max-width: 767px)" srcset="./s1/bgm.jpg" type="image/jpeg" />
      <img src="./s1/bg.jpg" :alt="info.caseName" class="bg-img">
    </picture> -->
    <img src="../../assets/img/shin-lan/index/1/topbg.jpg" alt="" class="bg-img">
    <div class="title" data-aos="fade-up" data-aos-delay="200">
      建築不只是良心事業，更是腳踏實地<br />始終如一的堅持
    </div>

    <img src="@/assets/img/shin-lan/all/logo.png" alt="" class="logo">

    <!-- <picture>
      <source srcset="./webp/s1/25675888.webp" type="image/webp" />
      <source srcset="./s1/25675888.png" type="image/jpeg" />
      <img src="./s1/25675888.png" alt="1" class="logo" data-aos="fade-up" data-aos-delay="200">
    </picture> -->
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
    // height: 100vh;
    height: size(604);
    min-height: calc(604 * 100vw / 375);
    max-height: calc(812 * 100vw / 375);
  }
}
.bg-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.logo {
  @include img_c_pc(614, 410);

  @include md {
    @include img_c_m(325, 237);
  }
}

.title {
  @include img_c_pc(600, 536);
  font-size: size(21);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.9;
  letter-spacing: size(17.64);
  text-align: center;
  color: #333;
  white-space: nowrap;

  @include md {
    font-size: size(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.93;
    letter-spacing: size(3.3);
    text-align: center;
    color: #333;

    @include img_c_m(290, 295);
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
