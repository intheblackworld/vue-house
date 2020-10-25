<template>
  <div>
    <div class="section2">
      <img src="./s2/bg.jpg" alt="" class="bg-img" v-if="isPC">
      <img src="./m/2/bg.jpg" alt="" class="bg-img" v-if="isMobile">
      <div class="hr absolute" v-if="isMobile" />
      <h3 class="title absolute" data-aos="fade-right" data-aos-delay="400">
        你的左岸 極景.極美.極品
      </h3>
      <h3 class="subtitle absolute" data-aos="fade-right" data-aos-delay="200">
        Polar view
      </h3>
      <div class="desc absolute" data-aos="fade-right" data-aos-delay="600">
        這是淡水河岸最美的一角，迎面藍帶涓流波潾，後倚綠意青山壯闊，蟠踞270度藍天碧水，釋放身心壓力，給心靈一個安適的停靠，到這裡重新感受生活，順著季節四時變化，入住山水懷抱的「八里 龍躍」。
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

.title {
  width: size(640);
  top: size(257);
  right: size(322);
  font-size: size(54.9);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: size(3.3);
  text-align: left;
  color: #231815;
  white-space: nowrap;
}

.subtitle {
  width: size(389);
  top: size(375);
  left: size(526);
  font-size: size(67);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: size(-2.68);
  text-align: left;
  color: #808080;
  white-space: nowrap;
}

.desc {
  width: size(670);
  top: size(378);
  right: size(289);
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
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .subtitle {
    width: sizem(128);
    top: sizem(80);
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
    top: sizem(120);
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

  .desc {
    width: sizem(291);
    top: sizem(194);
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
    top: sizem(164);
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
