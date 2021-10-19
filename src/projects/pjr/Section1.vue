<template>
  <div class="section1">
    <picture>
      <source media="(min-width: 767px)" srcset="./webp/s1/bg.webp" type="image/webp" />
      <source media="(min-width: 767px)" srcset="./s1/bg.jpg" type="image/jpeg" />
      <source media="(max-width: 767px)" srcset="./webp/s1/bgm.webp" />
      <source media="(max-width: 767px)" srcset="./s1/bgm.jpg" type="image/jpeg" />
      <img src="./s1/bg.jpg" :alt="info.caseName" class="bg-img">
    </picture>
    <div class="title">
      中山北路 看見璞真
    </div>

    <picture>
      <source srcset="./webp/s1/25675888.webp" type="image/webp" />
      <source srcset="./s1/25675888.png" type="image/jpeg" />
      <img src="./s1/25675888.png" alt="1" class="logo">
    </picture>

    <div class="subtitle">
      Zhongshan Art Mansion
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
    height: calc(100vh - 63px);
    min-height: calc(667 * 100vw / 375 - 63px);
    max-height: calc(812 * 100vw / 375 - 63px);
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
  @include img_c_pc(154, 604);

  @include md {
    @include img_c_m(154, 604);
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
    @include img_c_m(154, 604);
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
    @include img_c_m(154, 604);
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
