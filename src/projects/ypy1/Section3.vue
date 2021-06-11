<template>
  <div class="section2">
    <img src="./s3/bg_02.jpg" :alt="`${info.caseName}_img`" class="bg-img" v-if="!isMobile">
    <img src="./s3/bg_01.png" :alt="`${info.caseName}_img`" class="bg-img bg-t" v-if="!isMobile">
    <img src="./s3/bg_03.png" :alt="`${info.caseName}_img`" class="bg-img bg-b" v-if="!isMobile">
    <img src="./m/3/bg_02.jpg" :alt="`${info.caseName}_img`" class="bg-img" v-if="isMobile">
    <img src="./m/3/bg_01.png" :alt="`${info.caseName}_img`" class="bg-img bg-t" v-if="isMobile">
    <img src="./m/3/bg_03.png" :alt="`${info.caseName}_img`" class="bg-img bg-b" v-if="isMobile">
    <div class="hr" data-aos="zoom-in-up" data-aos-delay="0"></div>
    <h3 class="label" data-aos="fade-up" data-aos-delay="0">氣度一品</h3>
    <h3 class="title" data-aos="fade-up" data-aos-delay="100">
      天際皇冠 24層領空帝標
    </h3>
    <h3 class="subtitle" data-aos="fade-up" data-aos-delay="200">
      【嘉璟一品硯】
    </h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="300">
      正臨60米大興西路，拔高24層凌雲尺度，<br />
      左右對稱黃金比例美學，基座列柱群圍塑護城氣勢。<br />
      頂端以圓型皇冠加冕，成就璀璨的天際景觀美學。
    </p>
    <div class="bg-name">3D外觀示意圖</div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: 100%;
  height:auto;
 /* min-height: size(900);
  max-height: size(1080);*/
  position: relative;
  z-index: 2;
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
  &:first-child{position: relative;}
  &.bg-t{
  height:auto;
  transform: translateY(-99%)
  }
  &.bg-b{
  height:auto;top:auto;bottom: 0;
  transform: translateY(99.5%)
  }
}

.hr {
  @include img_l_pc(4, 163, 1170 - 12);
  height: size(89);
  background: #000;
}

.label {
  @include img_l_pc(300, 157, 1170);
  font-size: size(30);
  font-weight: 500;
  width: auto;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #4d4d4d;
}

.title {
  @include img_l_pc(377, 201, 1170);
  width: auto;
  font-size: size(35);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  white-space: nowrap;
}

.subtitle {
  @include img_r_pc(147, 311, 596);
  width: auto;
  font-size: size(21);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.33;
  letter-spacing: normal;
  text-align: left;
  color: #4d4d4d;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(460, 357, 1170);
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.25;
  letter-spacing: normal;
  text-align: left;
  color: #4d4d4d;
  white-space: nowrap;
}
.bg-name{position: absolute;bottom: 0;
left:1em;
color: #FFF;
font-size:size(15);
text-shadow: 0 0 0.5em #0009; opacity: 0.5; 
  
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
    width: 100%;
  /*  height: sizem(600);
    min-height: sizem(600);
    max-height: sizem(600);*/
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
   // overflow: hidden;
  }

  .hr {
    @include img_l_m(4, 49, 34);
    height: sizem(62);
    background: #000;
  }

  .label {
    @include img_l_m(84, 45, 45);
    font-size: sizem(21);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.62;
    letter-spacing: normal;
    text-align: left;
    color: #4d4d4d;
  width: auto;
  }

  .title {
    @include img_l_m(84, 75, 45);
  width: auto;
    font-size: sizem(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    white-space: nowrap;
  }

  .subtitle {
    @include img_l_m(112, 130, 25);
  width: auto;
    font-size: sizem(16);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.06;
    letter-spacing: normal;
    text-align: left;
    color: #4d4d4d;
    white-space: nowrap;
  }

  .desc {
    @include img_l_m(322, 165, 34);
    font-size: sizem(14);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.07;
    letter-spacing: normal;
    text-align: left;
    color: #4d4d4d;
    white-space: nowrap;
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
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
