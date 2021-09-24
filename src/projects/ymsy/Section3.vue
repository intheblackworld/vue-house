<template>
  <div class="section3">
    <div class="title" data-aos="fade-up" data-aos-delay="0" v-if="isPC">這是我家<br>樹山丘</div>
    <div class="title" data-aos="fade-up" data-aos-delay="0" v-if="isMobile">這是我家<br />樹山丘</div>
    <div class="subtitle" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
      開窗四季，令人意猶未盡
    </div>
    <div class="subtitle" data-aos="fade-up" data-aos-delay="200" v-if="isMobile">
      開窗四季，令人意猶未盡
    </div>
    <div class="subtitle-text" v-if="isMobile">
      現場實景
    </div>
    <div class="new-text">銷售企劃：興益發建設自建自售</div>
    <img src="./s3/bg.jpg" :alt="`${info.caseName}_img`" class="img" v-if="isPC">
    <img src="./mobile/03/bg.jpg" :alt="`${info.caseName}_img`" class="img" v-if="isMobile">
    <img src="./s2/flash.png" :alt="`${info.caseName}_img`" class="flash">
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section3 {
  width: 100%;
  height:auto;
  /* min-height: size(900);
  max-height: size(1080); */
 // overflow-x: hidden;
  position: relative;
  // background-image: url('./s1/01_bg.jpg');
  background-size: cover;
  background-attachment: fixed;
}

.flash {
  @include img_r_pc(1000, -31, -238);
  top:calc(50% + ( -31 - 1080 * 0.5) * 100vw / 1920);
  animation: flash 1s ease-in-out alternate infinite;
  opacity: 0;
  z-index: 3;
}
.new-text {
  @include img_r_pc(500, 1010, 30);
  top:auto;
  bottom: 1em;
  right: 1.2em;
  font-size: size(18);
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.06em;
  text-align: right;
  color: #ffffff;
  z-index: 10;
  white-space: nowrap;
  text-shadow: 0em 0em 0.3em #000;
}

@keyframes flash {
  to {
    opacity: 1;
  }
}

.img {
  position: relative;
  width: 100%;
  /*
  @include img_c_pc(1902, 0);
  top:calc(50% + ( 10 - 1080 * 0.5) * 100vw / 1920);
  bottom: 0;
  z-index: 1;*/
}

.bird {
  @include img_r_pc(706, 322, 0);
  top:calc(50% + ( 322 - 1080 * 0.5) * 100vw / 1920);
}

.title {
  @include img_l_pc(1020, 80, 530);
  top:calc(50% + ( 80 - 1080 * 0.5) * 100vw / 1920);
  text-shadow: 0.1em 0.1em 0.1em rgba(0, 0, 0, 0.8);
  font-size: size(90);
  font-family: 'Noto Sans TC';
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  white-space: nowrap;
  z-index: 3;
}

.subtitle {
  @include img_l_pc(1560, 300, 530);
  top:calc(50% + ( 300 - 1080 * 0.5) * 100vw / 1920);
  text-shadow: 0.1em 0.1em 0.1em rgba(0, 0, 0, 0.8);
  font-size: size(35);
  font-family: 'Noto Sans TC';
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: size(2);
  text-align: left;
  color: #fff;
  z-index: 3;
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
    min-height: sizem(750);
    max-height: sizem(750);
    height: sizem(750);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .new-text {
    @include img_c_m(375, 0);
    top:auto;
    bottom: 1em;
    font-size: sizem(15);
    text-align: center;
  }
  .bg-img {
    top: auto;
    height: auto;
    min-height: 100%;
    width: 108%;
    left: -4%;
    bottom: 0;
  }
  .flash {
    @include img_l_m(1041, 709, -232);
    top:calc(50% + ( -85 - 667 * 0.5) * 100vw / 375);
    z-index: 3;
  }

  .img {
    @include img_r_m(375, 0, 0);
    height: sizem(750);
    top: auto;
    bottom: 0;
  }

  .bird {
    @include img_r_m(303, 0, 0);
    top: auto;
    bottom: 0;
  }

  .title {
    @include img_l_m(250, 30, 30);
    font-size: sizem(48);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 1px;
    text-align: left;
    color: #fff;
    text-orientation: upright;
    z-index: 3;
    white-space: normal;
  }

  .subtitle {
    @include img_l_m(280, 150, 30);
    font-size: sizem(20);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: size(5.61);
    text-align: left;
    color: #fff;
    text-orientation: upright;
    z-index: 3;
    white-space: normal;
  }

  .subtitle-text {
    @include img_r_m(110, 10, -30);
    font-size: sizem(15);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: size(5.61);
    text-align: left;
    color: #fff;
    text-orientation: upright;
    z-index: 3;
    white-space: normal;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section3',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isShow: true,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
