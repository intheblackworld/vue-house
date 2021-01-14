<template>
  <div class="section2">
    <img src="./s1/bg.jpg" :alt="`${info.caseName}_bgimg`" class="bg-img">
    <img src="./s2/bg.png" :alt="`${info.caseName}_bg`" class="bg">
    <img src="./s2/img1.png" :alt="`${info.caseName}_img1`" class="img1">
    <img src="./s2/title_t.png" :alt="`${info.caseName}_title_t`" class="title_t">
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: size(1080);
  min-height: size(1080);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: size(1920);
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.bg {
  @include img_r_pc(1333, 0, 0);
}

.img1 {
  @include img_l_pc(520, 27, 187);
}

.title_t {
  @include img_r_pc(546, 109, 393);
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
    min-height: sizem(1115);
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;

    &:nth-child(1) {
      position: relative;
    }
  }

  .img {
    @include img_r_m(160, 290, -80);
  }

  .title {
    @include img_r_m(305, 10, 34);
    font-size: sizem(35);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2.8);
    text-align: left;
    color: #c61b1f;
    white-space: nowrap;
  }

  .item-container {
    position: relative;
    margin: 0 auto;
    margin-top: sizem(112);
    width: sizem(275);
  }
  .item {
    width: sizem(125);
    margin-bottom: sizem(45);
  }
  .item-img {
    width: sizem(104);
    margin-bottom: sizem(8);
  }

  .item-title {
    font-size: sizem(19);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1.5);
    text-align: center;
    color: #b81c22;
  }

  .item-desc {
    font-size: sizem(15);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.7;
    letter-spacing: sizem(1.05);
    text-align: center;
    color: #231815;
    white-space: nowrap;
  }

  .b1 {
    @include img_l_m(74, 409, 30);
    animation: an2 1.5s infinite alternate;
  }

  .b2 {
    @include img_r_m(150, 230, -100);
    animation: an 2.5s infinite alternate;
  }

  .b3 {
    @include img_l_m(132, 997, -10);
    animation: an 2.5s infinite alternate;
  }
  .b4 {
    @include img_r_m(62, 1100, -10);
    animation: an 2s infinite alternate;
    transform: translate(-10%, -10%);
  }
  .an {
    @include img_r_m(448, 670, -250);
  } /*
  .img2 {
    @include img_r_m(448, 480, -230);
    transform: rotate(45deg);
    transform-origin: center;
  }*/
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section2',

  data() {
    return {
      info,
      isPC,
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
