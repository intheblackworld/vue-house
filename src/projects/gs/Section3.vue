<template>
  <div>
    <div class="section3">
      <div class="top relative">
        <img src="./s3/1.jpg" alt="" class="one absolute">
        <img src="./s3/2.jpg" alt="" class="two absolute">
        <img src="./s3/3.jpg" alt="" class="three absolute">
        <h3 class="txt txt-one absolute">國立宜蘭傳統藝術中心</h3>
        <h3 class="txt txt-two absolute">五結行政中心</h3>
        <h3 class="txt txt-three absolute">冬山河親水公園</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: size(1920);
  // height: 100vh;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  overflow: hidden;
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
.top {
  width: 100vw;
  height: size(605);
  background-color: #8f8a74;
}
.one {
  width: size(1020);
  top: 0;
  left: 0;
}

.two {
  width: size(575);
  top: size(53);
  right: size(182);
}

.three {
  width: size(575);
  top: size(329);
  right: size(182);
}

.txt {
  font-size: size(13);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.64;
  letter-spacing: 3.31px;
  text-align: left;
  color: #ffffff;
}

.txt-one {
  bottom: size(14);
  left: size(843);
}

.txt-two {
  top: size(289);
  right: size(646);
}

.txt-three {
  bottom: size(20);
  right: size(630);
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
  .section3 {
    width: 100vw;
    height: calc(100vh - 63px);
    min-height: auto;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .bg-img {
    width: 100vw;
    height: calc(100vh - 63px);
    min-height: auto;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    object-fit: cover;

    &:nth-child(1) {
      position: relative;
    }
  }

  .title {
    width: size-m(268);
    top: size-m(34);
    right: 0;
    left: 0;
    margin: 0 auto;
    li {
      font-size: size-m(25);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.44;
      letter-spacing: 2px;
      text-align: center;
      color: #231815;
      white-space: nowrap;
    }
  }

  .desc {
    bottom: size-m(26);
    right: 0;
    left: 0;
    margin: 0 auto;
    width: size-m(310);
    font-size: size-m(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: 0.3px;
    text-align: justify;
    color: #ffffff;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section3',

  data() {
    return {
      isMobile,
      isTablet,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
