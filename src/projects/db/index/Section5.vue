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
    min-height: sizem(667);
    // max-height: sizem(812);
    // height: 100vh;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height: sizem(667);
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
    @include div_l_m(136, 40, 581, 33);
    font-size: sizem(28);
    text-align: center;
  }

  .title-img {
    @include img_l_m(255, 479, 33);
  }

  .btn {
    @include img_r_m(151, 598, 32);
    cursor: pointer;
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
