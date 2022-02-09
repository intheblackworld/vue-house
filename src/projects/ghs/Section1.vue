<template>
  <div class="section1">
    <div>
 	<!-- <img src="./s1/1.jpg" alt="" class="t0"> -->
      <img loading="lazy" src="./s1/bg.jpg" 
          :alt="`${info.caseName}bg`" class="bg" v-if="isPC">
      <img loading="lazy" src="./s1/bg-m.jpg" 
          :alt="`${info.caseName}bg`" class="bg" v-if="isMobile">

   	<!--   <img src="./s1/bg.jpg" alt="" class="bg">
	<img src="./s1/pc.jpg" alt="" class="t0">
		<img src="./s1/imgbg.png" alt="" data-aos="fade" data-aos-duration="2000" data-aos-delay="0" class="imgbg">
		<img src="./s1/img.png" alt="" data-aos="fade" data-aos-duration="800" data-aos-delay="700" class="img">  -->
<div class="txt">
		<img loading="lazy" src="./all/light.png" 
          :alt="`${info.caseName}light`" data-aos="fade" data-aos-duration="1500" data-aos-delay="600" class="light">
		<img loading="lazy" src="./s1/logo.png" 
          :alt="`${info.caseName}logo`" data-aos="fade" data-aos-duration="1500" data-aos-delay="200" class="logo">
		<img loading="lazy" src="./s1/t.png" 
          :alt="`${info.caseName}t`" data-aos="fade" data-aos-duration="1500" data-aos-delay="300" class="t">
    </div>
    </div>
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
  z-index: 2; 
}
.t0{
  position: absolute;
  width: 100%;height: 100%;
  top: 0;left: 0;object-fit: cover;
  }
.bg{
  position: absolute;
  width: 100%;height: 100%;
  top: 0;left: 0;object-fit: cover;
  }
.txt{
  position: absolute;
  top:calc(50% - 15.3vw);
  right: size(235);
  width:size(437);
  font-size: size(29);
  font-weight: 700;
  line-height: 1.53;
  color: #000;
  letter-spacing: 0.1em;
.logo{
  position: relative;
  width:size(387);
  transform: translateY(-10%)scale(1.5);
  margin: auto auto 1.15em auto;
  }
.t{
  position: relative;
  width:size(437);
  transform: translateY(-10%)scale(1.5);
  margin: auto auto 1.3em auto;
  }
  .light{
  position: absolute;
  top:size(35);
  left:size(-289);
  width:size(415);
  transform: translate(40%,-20%) rotate(-30deg) scale(0.4);

  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    min-height: sizem(604);
    max-height: sizem(750);
    height: calc(100vh - 63px);
  }



.txt{
  font-size: sizem(15);
  width:100%;
  top:calc(40% - 44vw);
  left:0;
.logo{
  width:sizem(165);
  }
.t{
  width:sizem(280);
  }
  .light{
  top:sizem(17);
  left:sizem(3);
  width:sizem(180);

  }

}

}
</style>
<script>
// @ is an alias to /src
import info from "@/info";
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

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
