<template>
  <div>
    <div class="section2">
      <div class="desc absolute-c">
        <h1 data-aos="fade-down" data-aos-delay="200">百年前稻香花香交響</h1>
        <h1 data-aos="fade-down" data-aos-delay="300">未來，書香樹香合奏</h1>
        <h1 data-aos="fade-down" data-aos-delay="400">靜聽雙園輕唱主旋綠</h1>
        <h1 data-aos="fade-down" data-aos-delay="500"></h1>
        <h1 data-aos="fade-down" data-aos-delay="600">入住︹京旺協奏曲︺</h1>
        <h1 data-aos="fade-down" data-aos-delay="700">當美好生活的指揮家</h1>
      </div>

    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  // min-height: size(900);
  background-color: #fff;
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  min-height: size(900);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.desc {
  width: size(300);
  font-size: size(30);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(5.37);
  text-align: left;
  color: #248184;
  display: flex;
  align-items: flex-start;
  word-break: break-all;
  flex-direction: row-reverse;
  word-wrap: break-word;
  //white-space: nowrap;
  h1 {
    writing-mode: vertical-rl;
    width: 1.4em;
    margin: 0 0 0 0.3em;
    &.p {
      margin: 0 0 0 0.9em;
    }
    &.p2 {
      margin: -0.5em 0 0 0.9em;
    }
  }
}

@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section2 {
    width: 100vw;
    height: sizem(346);
    min-height: auto;
    max-height: initial;
    margin: -60vw 0 0 0 ;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .desc {
    width: sizem(170);z-index: 5;
    font-size: sizem(17);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: size(3.07);
    text-align: left;
    color: #248184;
    display: flex;
    align-items: flex-start;
    word-break: break-all;
    flex-direction: row-reverse;
    word-wrap: break-word;
    //white-space: nowrap;
    h1 {
      writing-mode: vertical-rl;
      width: 1.4em;
      margin: 0 0 0 0.3em;
      &.p {
        margin: 0 0 0 0.9em;
      }
      &.p2 {
        margin: -0.5em 0 0 0.9em;
      }
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section2',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {},
}
</script>
