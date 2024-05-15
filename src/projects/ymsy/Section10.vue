<template>
  <div class="section10">
    <hrV />
    <img loading="lazy" src="./s1/bg.jpg" :alt="`${info.caseName}_img`" class="bg absolute" v-if="isPC">
    <img loading="lazy" src="./s1/bgm.jpg" :alt="`${info.caseName}_img`" class="bg absolute" v-else>
    <div class="img absolute" data-aos="fade-left">
    <img loading="lazy" src="./s1/img.png" :alt="`${info.caseName}_img`" ></div>

    <img loading="lazy" src="./s1/logo.png" :alt="`${info.caseName}_img`" class="logo" data-aos="fade-up" data-aos-delay="0">
    <img loading="lazy" src="./s1/logol.png" :alt="`${info.caseName}_img`" class="logol" data-aos="fade-up" data-aos-delay="0">
    <img loading="lazy" src="./s10/t1.png" :alt="`${info.caseName}_img`" class="title1">
    <div class="new-text">銷售企劃：興益發建設自建自售</div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section10 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080); 
 // overflow: hidden;
  position: relative;
 /* background-image: url('./s1/bg.jpg');
  background-size: cover;
  background-attachment: fixed; */
}
.bg{position: absolute;top:0;left: 0;width: 100%;height: 100%;object-fit: cover;}
.img{bottom:size(122);bottom:calc(50% + #{size(122 - 1080 * .5)});right:size(-92);width: size(718);z-index: 3;
img{width: 100%; animation: 3s bird ease-in-out alternate infinite;
transform-origin: 100% 70%;}}
.logo{position: absolute;top:size(370);top:calc(50% + #{size(370 - 1080 * .5)});left:size(150);width: size(766);z-index: 3;filter:drop-shadow(7px 7px 5px #000);}
.logol{position: absolute;top:size(605);top:calc(50% + #{size(605 - 1080 * .5)});left:size(150);width: size(766);z-index: 3;mix-blend-mode: screen;}
.title1{position: absolute;bottom:size(182);bottom:calc(50% + #{size(182 - 1080 * .5)});left:size(163);width: size(996);z-index: 3;filter:drop-shadow(7px 7px 5px #000);}
.new-text {
  @include img_r_pc(500, 1010, 30);
  top:auto;
  bottom: 1em;
  right: 1.2em;
  font-size: size(16);
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


@keyframes bird {
  to {
    transform: skewX(2deg) rotate(-3deg);
  }
}


/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section10 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
    background-size: auto size-m(750);
  }
.img{
  bottom:calc(60% + #{sizem(123 - 750 * .6)});
  right:sizem(-39);width: sizem(320);
}
.logo{top:calc(15% + #{sizem(88 - 750 * .15)});left:sizem(42);width: sizem(282);filter:drop-shadow(5px 5px 4px #000);}
.logol{top:calc(15% + #{sizem(174 - 750 * .15)});left:sizem(42);width: sizem(282);z-index: 3;mix-blend-mode: screen;}
.title1{bottom: auto;top:calc(20% + #{sizem(227 - 750 * .2)});left:0;right: 0;margin:0 auto;width: sizem(280);filter:drop-shadow(5px 5px 4px #000);}

  .new-text {
    @include img_c_m(375, 0);
    top:auto;
    bottom: 1em;
    font-size: sizem(12);
    text-align: right;padding: 0 1em 0 0;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import hrV from '@/projects/ymsy/hr.vue'

export default {
  name: 'section1',
  components: {
    hrV,
  },

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
