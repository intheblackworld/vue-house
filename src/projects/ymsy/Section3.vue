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
    <div class="subtitle-text" v-if="isMobile">
      現場實景
    </div>
    <div class="new-text">銷售企劃：興益發建設自建自售</div>
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
 // overflow-x: hidden;
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
  @include img_r_pc(1000, -31, -238);
  top:calc(50% + ( -31 - 1080 * 0.5) * 100vw / 1920);
  animation: flash 1s ease-in-out alternate infinite;
  opacity: 0;
  z-index: 3;
}
.new-text {
  @include img_r_pc(500, 980, 30);
  top:calc(40% + ( 980 - 1080 * 0.4) * 100vw / 1920);
  font-size: size(25);
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
  z-index: 3;
  white-space: nowrap;
  text-shadow: 0em 0em 0.3em #000;
}

@keyframes flash {
  to {
    opacity: 1;
  }
}

.img {
  @include img_r_pc(1920, 409, 0);
  top:calc(50% + ( 409 - 1080 * 0.5) * 100vw / 1920);
  bottom: 0;
}

.bird {
  @include img_r_pc(706, 322, 0);
  top:calc(50% + ( 322 - 1080 * 0.5) * 100vw / 1920);
}

.title {
  @include img_c_pc(1020, 146);
  top:calc(50% + ( 146 - 1080 * 0.5) * 100vw / 1920);
  font-size: size(75);
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
  @include img_c_pc(1560, 300);
  top:calc(50% + ( 300 - 1080 * 0.5) * 100vw / 1920);
  font-size: size(22);
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
  }

    .new-text {
  @include img_c_pc(1100, 1010);
  top:calc(50% + ( 670 - 667 * 0.5) * 100vw / 375);
  font-size: size(80);
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  z-index: 3;
  white-space: nowrap;
  text-shadow: 0em 0em 0.3em #000;
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
