<template>
  <div class="section2">
    <div class="title" data-aos="fade-up" data-aos-delay="0" v-if="isPC">一樣的台北市，不一樣的樹山丘</div>
    <div class="title" data-aos="fade-up" data-aos-delay="0" v-if="isMobile">一樣的台北市 <br />不一樣的樹山丘</div>
    <div class="new-text">銷售企劃：興益發建設自建自售</div>
    <div class="new-text-l">3D透視合成示意圖</div>
    <img loading="lazy" src="./s2/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img" v-if="isPC">
    <img loading="lazy" src="./s2/flash.png" :alt="`${info.caseName}_img`" class="flash">
    <Map :bgSrc="bgSrc" v-if="isMobile" :hand="hand">
    </Map>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section2 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
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
  z-index: 2;
}

.flash {
  @include img_r_pc(1000, -40, -238);
  animation: flash 1s ease-in-out alternate infinite;
  opacity: 0;
  z-index: 3;
}

@keyframes flash {
  to {
    opacity: 1;
  }
}

.title {
  @include img_c_pc(1300, 80);
  top:calc(40% + ( 80 - 1080 * 0.4) * 100vw / 1920);
  font-family: 'Noto Sans TC';
  font-weight: 600;
  font-size: size(60);
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 0.06em;
  text-align: center;
  color: #ffffff;
  z-index: 3;
  white-space: nowrap;
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
.new-text-l {
  @include img_l_pc(500, 1010, 0);
  font-family: 'Noto Sans TC';
  top:auto;
  bottom: 1em;
  left:1.2em;
  opacity: 0.9;
  font-size: size(18);
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.06em;
  text-align: left;
  color: #ffffff;
  z-index: 10;
  white-space: nowrap;
  text-shadow: 0em 0em 0.3em #000;
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
    min-height: sizem(604);
    max-height: sizem(760);
    height: sizem(604);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
    overflow: visible;
  }


  .bg-img {
    top: auto;
    height: auto;
    min-height: 100%;
    width: 108%;
    left: -4%;
    bottom: 0;
  
  
  .new-text {
    @include img_c_m(375, 0);
    top:auto;
    bottom: 1em;
    font-size: sizem(15);
    text-align: center;
  }
.new-text-l {
    @include img_c_m(375, 0);
    top:auto;
    bottom: 3.5em;
    font-size: sizem(13);
    text-align: center;
  }
}

  .flash {
    @include img_l_m(1041, 709, -232);
    top:calc(50% + ( -13 - 667 * 0.5) * 100vw / 375);
    z-index: 3;
  }

  .title {
    @include img_c_m(350, 30);
    font-size: sizem(35);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import Map from '@/components/Map.vue'

export default {
  name: 'section2',
  components: {
    Map,
  },

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isShow: true,
      bgSrc: require('./mobile/02/bg.jpg'),
      hand: require('./mobile/02/swipe-here.png'),
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
