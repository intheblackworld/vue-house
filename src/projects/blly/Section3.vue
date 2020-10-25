<template>
  <div>
    <div class="section2">
      <img src="./s3/bg.jpg" alt="" class="bg-img" v-if="isPC">
      <img src="./m/3/bg.jpg" alt="" class="img absolute" v-if="isMobile">
      <h3 class="subtitle absolute" data-aos="fade-right" data-aos-delay="200">Relax resorts</h3>
      <h3 class="title absolute" data-aos="fade-right" data-aos-delay="400">
        城市與河岸最舒適的距離
      </h3>
      <div class="hr absolute" v-if="isMobile" />
      <div class="desc absolute" data-aos="fade-right" data-aos-delay="600">
        八里，擁有宜居環境，左右更續接了雙北生活圈，交通便利，透過快速道路、關渡大橋淡江大橋連接了新市鎮生活圈。在這有著深度的文化蘊藏，十三行博物館、左岸公園、左岸劇場，相佐水岸綠道，如此舒心閑適的居所，只有「八里 龍躍」。
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: 100vh;
  min-height: size(1080);
  background-size: cover;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: auto;
  min-height: size(1080);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.subtitle {
  width: size(485);
  top: size(93);
  right: auto;
  left: size(138);
  font-size: size(67.2);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: size(-2.69);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.title {
  width: size(640);
  top: size(724);
  left: size(150);
  font-size: size(55.2);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: size(3.3);
  text-align: left;
  color: #231815;
  white-space: nowrap;
}

.desc {
  width: size(640);
  top: size(846);
  left: size(153);
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: size(1.14);
  text-align: left;
  color: #595757;
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
    min-height: 0;
    max-height: 500vh;
    height: calc(100vh);
    background: #fff;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
    position: relative;
  }

  .subtitle {
    width: sizem(128);
    top: sizem(80 - 55);
    right: auto;
    left: sizem(32.5);
    font-size: sizem(22);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.64;
    letter-spacing: sizem(-0.88);
    text-align: left;
    color: #808080;
    white-space: nowrap;
  }

  .title {
    width: sizem(291);
    top: sizem(120 - 55);
    right: auto;
    left: sizem(32.5);
    font-size: sizem(25);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(1.5);
    text-align: left;
    color: #231815;
    white-space: nowrap;
  }

  .img {
    width: sizem(340);
    left: sizem(18);
    top: sizem(299);
  }

  .desc {
    width: sizem(291);
    top: sizem(194 - 55);
    right: auto;
    left: sizem(32.5);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: sizem(0.9);
    text-align: left;
    color: #595757;
  }

  .hr {
    width: sizem(291);
    height: 1px;
    background-color: #595757;
    top: sizem(164 - 55);
    right: auto;
    left: sizem(32.5);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
// import Map from '@/components/Map.vue'

export default {
  name: 'section2',

  // components: {
  //   Map,
  // },

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
}
</script>
