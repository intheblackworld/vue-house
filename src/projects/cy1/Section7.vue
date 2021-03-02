<template>
  <div class="section7">
    <img src="./s7/06_img.jpg" :alt="`${info.caseName}_img`" class="img" v-if="isPC">
    <img src="./s7/06_bg_m.jpg" :alt="`${info.caseName}_img`" class="img" v-if="isMobile">
    <h1 class="title" data-aos="fade-up" data-aos-delay="200">
      彩虹公園第一排　明媚風光生活
    </h1>
    <h1 class="desc" data-aos="fade-up" data-aos-delay="400">
      坐落綠意公園正對面，獨覽蘆洲四季豐采；私人歐式景觀花園，開窗即享舒活芬多精。<br />
      5分鐘蘆洲國民運動中心，天天樂在運動、享受休閒，生活自然健康，健康就是如此自然。
    </h1>
    <div class="name">
      彩虹公園
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: size(1920);
  height: size(1168);
  // min-height: size(900);
  // max-height: size(1080);
  // overflow: hidden;
  position: relative;
  // background: #552e70 fixed;
  background-size: auto;
  // z-index: 23;
}

.bg-img {
  width: size(1920);
  // height: 100%;
  // min-height: size(900);
  position: absolute;
  top: -1px;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;

  &:nth-child(1) {
    position: relative;
  }
}

.img {
  @include img_c_pc(1571, 0);
}

.title {
  @include img_c_pc(736, 72);
  font-size: size(30.7);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.44;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  text-shadow: 0 0 5px rgba(3, 27, 114, 0.75);
}

.desc {
  @include img_c_pc(736, 140);
  font-size: size(18);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.44;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  text-shadow: 0 0 5px rgba(3, 27, 114, 0.75);
}

.name {
  @include img_l_pc(736, 880, 198);
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
}

@keyframes tree {
  to {
    transform: skewX(-2deg);
  }
}

.swipe-fade-leave-to {
  opacity: 0;
  z-index: 0;
}
// end
.swipe-fade-enter {
  opacity: 0;
  z-index: 1;
}

.swipe-fade-enter-active {
  transition: all 0.5s ease;
}

.swipe-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
/*
.t1 {
  width: size(751);
  top: size(483);
  left: size(585);
}

.t2 {
  width: size(751);
  top: size(711);
  left: size(585);
}
*/
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
  .section7 {
    width: 100vw;
    height: sizem(656);
    min-height: sizem(656);
    max-height: sizem(750);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
    background: transparent;
  }
  .img {
    @include img_c_m(375, 0);
    height: sizem(656);
  }

  .title {
    @include img_c_m(325, 30);
    font-size: sizem(20);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.2;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    text-shadow: 0 0 5px rgba(3, 27, 114, 0.75);
  }

  .desc {
    @include img_c_m(325, 70);
    font-size: sizem(13);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    text-shadow: 0 0 5px rgba(3, 27, 114, 0.75);
  }

  .name {
    @include img_l_m(325, 880, 20);
    top: auto;
    bottom: sizem(20);
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
  }
}
</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section7',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
