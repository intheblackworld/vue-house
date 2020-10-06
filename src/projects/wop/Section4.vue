<template>
  <div>
    <div class="section4">
      <img src="./s4/bg.jpg" alt="" class="bg-img" data-aos="fade-down" data-aos-delay="400" v-if="!isMobile">
      <img src="./s4/title.png" alt="" class="title absolute" data-aos="fade-down" data-aos-delay="400">
      <h3 class="subtitle absolute" data-aos="fade-down" data-aos-delay="600">
        北台南地王 大新營燙金門牌
      </h3>
      <img src="./s4/hr.png" alt="" class="hr absolute" data-aos="fade-down" data-aos-delay="800">
      <h3 class="desc absolute" data-aos="fade-down" data-aos-delay="1000">
        北台南最大城、政經中心最核心，新營生活圈一舉環抱行政中心及都心便利<br>國道一號串聯南科園區、明星學區散步距離，無可匹敵的榮耀地段非此莫屬！
      </h3>
      <Map :bgSrc="require('./s4/bg.jpg')" v-if="isMobile" :hand="require('./mo/4/小手.png')">
      </Map>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-color: #0296c8;
  background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    top: auto;
    bottom: 0;
    left: auto;
    right: 0;
  position: relative;
  }
}

.title {
  width: size(450);
  left: size(720);
  top: size(70);
}

.hr {
  width: size(794);
  left: size(563);
  top: size(200);
}

.subtitle {
  width:100%;
  left: size(0);
  top: size(130);
  font-size: size(43);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: size(1.25);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  width: size(1303);
  left: size(309);
  top: size(215);
  font-size: size(23);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.48;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
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
  .section4 {
    width: 100vw;
  height: sizem(670);
  min-height: sizem(604);
  max-height: sizem(812);
    //background-image: url('./mo/1/00.jpg');
    background-size: cover;
    background-attachment: scroll;
  }

  .title {
    width: sizem(236);
    left: sizem(70);
    top: sizem(40);z-index: 2;
  }

  .hr {
    width: sizem(310);
    left: sizem(33);
    top: sizem(120);z-index: 2;
  }

  .subtitle {
    width: sizem(278);
    left: sizem(49);
    top: sizem(83);
    font-size: sizem(22);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.54;
    letter-spacing: sizem(0.55);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;z-index: 2;
  }

  .desc {
    width: sizem(310);
    left: sizem(33);
    top: sizem(130);
    font-size: sizem(15);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.48;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;z-index: 5;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import Map from '@/components/Map.vue'

export default {
  name: 'section4',

  components: {
    Map,
  },

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
