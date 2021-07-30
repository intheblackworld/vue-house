<template>
  <div class="section1">
    <img src="./s1/logo.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade-up" data-aos-delay="0" data-aos-offset="-300">
    <img src="./s1/0.png" :alt="`${info.caseName}_img`" class="bg-img" v-if="isPC">
   <!-- <img src="./s1/0_m.png" :alt="`${info.caseName}_img`" class="bg-img" v-if="isMobile"> -->
    <img src="./s1/1.png" :alt="`${info.caseName}_img`" class="bg-img img1">
    <img src="./s1/5.png" :alt="`${info.caseName}_img`" class="img-train" data-aos="fade" data-aos-delay="100" data-aos-offset="-300">
    <img src="./s1/2.png" :alt="`${info.caseName}_img`" class="bg-img img2">
    <img src="./s1/3.png" :alt="`${info.caseName}_img`" class="bg-img img3">
    <img src="./s1/4.png" :alt="`${info.caseName}_img`" class="bg-img img4">
    <h3 class="title" data-aos="fade-up" data-aos-delay="200" data-aos-offset="-300">
      海灣新樂園 城市心天地
    </h3>
    <h3 class="subtitle" data-aos="fade-up" data-aos-delay="300" data-aos-offset="-300">
      淡海最大6000坪俱樂部宅
    </h3>
    <h3 class="btn flex-c" v-scroll-to="{ element: `#contact` }" data-aos="fade-up" data-aos-delay="400" data-aos-offset="-300">
      搶先預約
    </h3>
    <!-- <div class="hr1" v-if="isMobile"></div>
    <div class="hr2" v-if="isMobile"></div> -->
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  overflow: hidden;
  position: relative;
  // background-image: url('./s1/01_bg.jpg');
  background-size: cover;
  z-index: 3;
  // margin: 0 0 size(400) 0;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: auto;bottom: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;

  &:nth-child(1) {
    position: relative;
  }
}

.logo {
  @include img_l_pc(363, 190, 306);
  top: calc(50% + (190 - 540) * 100vw / 1920);
}

.img-train {
  @include img_r_pc(436, 0, 600);
  top: auto;
  bottom: -1px;
  transform: scale(0.5);
  transform-origin: 80% 80%
}

.subtitle {
  @include img_l_pc(545, 532, 222);
  top: calc(50% + (532 - 540) * 100vw / 1920);
  padding: size(10) 0;
  font-size: size(38.6);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing:0.14em;
  text-align: center;
  color: #fff000;
  border: solid 2px #fff000;
    white-space: nowrap;
}

.title {
  @include img_l_pc(600, 310, 787);
  top: calc(50% + (310 - 540) * 100vw / 1920);
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing:0.15em;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.btn {
  @include div_l_pc(260, 63.6, 622, 354);
  top: calc(50% + (622 - 540) * 100vw / 1920);
  background-image: linear-gradient(to right, #b81c22 0%, #e95504 100%);
  font-size: size(38.6);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing:0.14em;
  text-align: center;
  color: #ffffff;
  border-radius:0.72em;
  cursor: pointer;
  flex-wrap:nowrap;
  white-space: nowrap;
}
.img1{
  height: auto;
  animation: img 3s 0s ease-in-out infinite alternate;
  transform-origin: 92% 77%;
    transform: rotate(3deg);
    bottom:-3vw;
}
.img2{
  height: auto;
  animation: img 3s 0s ease-in-out infinite alternate;
    transform: translateY(3%);
}
.img3{
  height: auto;
  animation: img 3s 1s ease-in-out infinite alternate;
    transform: translateY(3%);
}
.img4{
  height: auto;
  animation: img 6s 0s ease-in-out infinite alternate;
    transform: translateX(-3%);
}
@keyframes img {
  to {
    transform:translate(0);
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    width: 100%;
    height: calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
    margin: 0 ;
    overflow: hidden;
    // background-size: auto size-m(750);
    z-index: initial;
  }

  .bg-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: auto;
    bottom:0;
    left: auto;
    right: 0%;
    display: block;
    object-fit: cover;
    margin-top: 0;

    &:nth-child(1) {
      position: relative;
    }
  }
.img1{
  width:auto;
  height:sizem(241);
  left:sizem(-53);
}
.img2{
  width:auto;
  height:sizem(288);
  left:sizem(-136);
}
.img3{
  width:auto;
  height:sizem(222);
  left:sizem(-36);
}
.img4{
  width:auto;
  height:sizem(222);
  left:sizem(0);
}
  .logo {
    @include img_c_m(250, 84);
  }

  .img-train {
    @include img_l_m(207, 0, 39);
    top: auto;
  bottom: -1px;
  z-index: 2
  }

  .subtitle {
    @include img_c_m(343, 324);
    padding: sizem(10) 0;
    font-size: sizem(24);
  }

  .title {
   // display: none;459.61
    @include img_l_m(300, 460, 14);
    top: auto;
    bottom: sizem(140);
    font-size: sizem(20);
  }

  .btn {
    @include div_c_m(180, 42, 382);
    background-image: linear-gradient(to right, #b81c22 0%, #e95504 100%);
    font-size: sizem(25);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section1',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      // blockIndex: 0,
    }
  },

  methods: {},

  mounted() {
    // setTimeout(() => {
    //   this.blockIndex = 1
    // }, 6000)
  },

  created() {},

  computed: {},
}
</script>
