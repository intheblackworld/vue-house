<template>
  <div class="section1">
    <div class="txt">
      <img src="./s1/logo.png" class="logo">
    </div>
      <img src="./s1/bg_mask.png" class="mask">
      <img src="./s1/srtye_1.png" class="style1">
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
 // overflow: hidden;
  position: relative;
  background: url("./s1/bg.jpg") center;
  background-size: 100% auto;
}

.mask{
  position: absolute;
  width:size(1920);
  bottom:size(-30);
  left: 0;
  right:0;
} 
.style1{
  position: absolute;
  width:size(612);
  top:0;
  left: 0;
  mix-blend-mode: hard-light ;
} 

.txt{
position: relative;
  // top:calc(50% + (253 - 540) * 100vw / 1920);
 //  left:size(-260);
 top:calc(37% + (120 - 1080 * 0.37) * 100vw / 1920);
  font-size: size(34);
  line-height: 1.35;
  color: #fff;
  text-align: center;
 // width:size(850);
  letter-spacing:0.02em;
  font-weight: 300;
  //filter: drop-shadow(0 0 7px #eff);
.logo{
  position: relative;
  width:size(800);
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
    background: url("./s1/bg_m.jpg") center;
    background-size: cover;
  }

.mask{
  width:sizem(375);
  bottom:sizem(0);
  left: 0;
  right:0;
} 

.txt{
  font-size: sizem(14);
  top:calc(50% + (180 - 302) * 100vw / 375);
  line-height: 1.1;

.logo{
  width:sizem(300);
  z-index: 10;
  }

}


}
</style>
<script>
// @ is an alias to /src
import info from '@/info'
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
