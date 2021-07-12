<template>
  <div class="section3">
    <div class="title" data-aos="fade-up" data-aos-delay="0" v-if="isPC">開門見山，陽明森悅 來了！</div>
    <div class="title" data-aos="fade-up" data-aos-delay="0" v-if="isMobile">開門見山<br />陽明森悅 來了！</div>
    <div class="subtitle" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
      台北市難得近三千坪的夢想藍圖，後收陽明山系豪景，前攏關渡平原胸襟，大地的畫布，任您恣意揮灑。<br />
      且讓稻香、花香交響名為生活的樂章。
    </div>
    <div class="subtitle" data-aos="fade-up" data-aos-delay="200" v-if="isMobile">
      台北市難得近三千坪的夢想藍圖，<br />後收陽明山系豪景，前攏關渡平原胸襟，<br />大地的畫布，任您恣意揮灑。<br /><br />
      且讓稻香、花香交響名為生活的樂章。
    </div>
    <img src="./s3/bg.jpg" :alt="`${info.caseName}_img`" class="img" v-if="isPC">
    <img src="./mobile/03/bg.jpg" :alt="`${info.caseName}_img`" class="img" v-if="isMobile">
    <img src="./s3/bird.png" :alt="`${info.caseName}_img`" class="bird" data-aos="fade-left" data-aos-delay="400">
    <img src="./s2/flash.png" :alt="`${info.caseName}_img`" class="flash">
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section3 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  overflow-x: hidden;
  position: relative;
  // background-image: url('./s1/01_bg.jpg');
  background-size: cover;
  background-attachment: fixed;
}
.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
}

.flash {
  @include img_r_pc(1000, -45, -238);
}

.img {
  @include img_r_pc(1920, 0, 0);
  top: auto;
  bottom: 0;
}

.bird {
  @include img_r_pc(706, 369, 0);
}

.title {
  @include img_c_pc(1020, 146);
  font-size: size(83.4);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #006b31;
  white-space: nowrap;
}

.subtitle {
  @include img_c_pc(1560, 331);
  font-size: size(28.1);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: size(5.61);
  text-align: center;
  color: #000000;
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
    overflow: visible;
    overflow-x: hidden;
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
    @include img_r_m(1000, -45, -438);
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
    @include img_r_m(88, 76, 30);
    font-size: sizem(38);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 1px;
    text-align: left;
    color: #fff;
    writing-mode: vertical-rl;
    text-orientation: upright;
    z-index: 3;
    white-space: normal;
  }

  .subtitle {
    @include img_r_m(110, 75, 157);
    font-size: sizem(13);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: size(5.61);
    text-align: left;
    color: #fff;
    writing-mode: vertical-rl;
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
