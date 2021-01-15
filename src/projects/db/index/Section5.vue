<template>
  <div class="section5">
    <img src="./s5/bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img">
    <img src="./s5/bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img an">
    <img src="./s5/title.png" :alt="`${info.caseName}_title`" class="title-img" data-aos="fade-right" data-aos-delay="100">
    <div class="title flex-ac" @click="$router.push('/news')" data-aos="fade" data-aos-delay="600">房產資訊</div>
    <img src="./s2/more.png" :alt="`${info.caseName}_more`" class="btn" @click="$router.push('/news')" data-aos="fade" data-aos-delay="600">
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: size(1920);
  height: size(900);
  overflow: hidden;
  position: relative;
  background: #fff;
  background-size: auto;
}

.bg-img {
  width: size(1920);
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  &:nth-child(1) {
    position: relative;
  }
}
.an{
  animation:oxxo 40s linear infinite;
}
@keyframes oxxo{
    90%{transform: scale(1.2);opacity: 1;
    }
    100%{transform: scale(1.22);opacity: 0;
    }
}


.title {
  @include div_r_pc(520, 73, 709, 176);
  font-size: size(58);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.81;
  letter-spacing: size(10.44);
  text-align: left;
  color: #000000;
  white-space: nowrap;
  cursor: pointer;
  background-color: #ffe900;
  padding-left: size(15);
}

.subtitle {
  @include div_l_pc(160, 55, 190, 370);
  font-size: size(37.3);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
  z-index: 10;
}

.title-img {
  @include img_l_pc(517, 632, 178);
}

.btn {
  @include img_r_pc(217, 746, 175);
  cursor: pointer;
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
  .section5 {
    width: 100vw;
    height: calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(812);
    background-size: cover;
    background-attachment: scroll;
    &::before{content:"";width: 100%;height: 100%;top: 0;left: 0;
    background: linear-gradient(to bottom,#0360 40%,#0259 100%);
    position: absolute;z-index: 2;}
  }

  .bg-img {
    width: 100%;
    height:100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;
    margin-top: 0;

    &:nth-child(1) {
      position: relative;
    }
  }

  .title {
    @include div_l_m(149, 45, 415, 32);
    font-size: sizem(30);
    text-align: left;
  letter-spacing:0.251em;
    top:auto;
    height: auto;
    bottom:sizem(48);
    color: #ffe900;
    background: none;z-index: 3;
  }

  .subtitle {
    @include div_l_m(145, 34, 460, 32);
    font-size: sizem(16);
    text-align: left;
    top:auto;
    height: auto;
    bottom:sizem(56);
    color: #666666;z-index: 3;
  }

  .title-img {
    @include img_l_m(179, 474, 32);
    top:auto;
    height: auto;
    bottom:sizem(105);z-index: 3;
  }

  .btn {
    @include img_r_m(151, 456, 32);
    cursor: pointer;
    top:auto;
    bottom:sizem(60);z-index: 3;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import slider from '@/mixins/slider.js'

export default {
  name: 'section5',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
    }
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
