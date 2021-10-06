<template>
  <div class="section3">
    <img loading="lazy" src="./s3/03_img.png" :alt="`${info.caseName}_img`" class="bg-img"  v-if="!isMobile">
    <h3 class="title" data-aos="fade-up" data-aos-delay="200">
      洲子洋天空再進化<br v-if="isMobile"><span v-if="!isMobile">　</span>讓雙北人都羨慕
    </h3>
    <div class="hr" data-aos="zoom-in-right" data-aos-delay="400" data-aos-offset="100"></div>
    <div class="desc" data-aos="fade-up" data-aos-delay="600">
      15萬坪寬闊樹海濃蔭，128萬坪大臺北都會水岸公園，藍天、綠邑絕美生活別說你不羨慕！<br />
      這就是洲子洋，宜居大城持續進化，讓雙北人一眼愛上
    </div>
<Map v-if="isMobile" :tagList="tagList" :bgSrc="isMobile ? bgmSrc: bgSrc" :hand="hand">
    </Map>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100%;
  height:auto;
  position: absolute;
  top:calc(60% - 100vw * 1096 * 0.6 / 1920 );
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;
/*
  &:nth-child(1) {
    position: relative;
  }*/
}

.title {
  @include img_c_pc(762, 60);
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(-2.5);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.hr {
  @include img_c_pc(842, 140);
  // height: 35px;
  border-top: size(1) solid #fff;
}

.desc {
  @include img_c_pc(838, 155);
  font-size: size(20);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.25;
  letter-spacing: size(1);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.more {
  @include img_r_pc(309 + 20 + 63, 685, 110);
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.04;
  letter-spacing: size(2.8);
  text-align: left;
  color: #ffffff;
  cursor: pointer;
  white-space: nowrap;

  img {
    width: size(63);
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
  .section3 {
    width: 100%;
    height: auto;
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .title {
    @include img_c_m(220, 22);
    font-size: sizem(26);
    letter-spacing: normal;
    z-index: 9;
  }

  .hr {
    @include img_c_m(325, 104);
    z-index: 9;
  }

  .desc {
    @include img_c_m(320, 119);
    font-size: sizem(12);
    line-height: 1.88;
    letter-spacing: normal;
    white-space:normal;
    z-index: 9;
  }

  .more {
    @include img_r_m(179 + 7 + 29, 636, 117);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.04;
    letter-spacing: sizem(2.1);
    text-align: left;
    color: #ffffff;
    cursor: pointer;
    white-space: nowrap;

    img {
      width: sizem(29);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import Map from '@/components/Map.vue'
import info from '@/info'
// import slider from '@/mixins/slider.js'

export default {
  name: 'section3',

  components: {
    Map,
  },

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      tagList: [],
      bgmSrc: require('./s3/03_img_m.jpg'),
      hand: require('./s3//m_2_mobile_hand.png'),
    }
  },


  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
