<template>
  <article class="section1">
   <!--  
    <img class="a1" src="./s1/mo.jpg" alt="" />
  -->
    <img src="./s1/bg.png" v-if="!isMobile" alt="" />
    <img src="./s1/bgm.png" v-else alt="" />
    <!-- 
    <img src="./s1/et.png" v-if="!isMobile" class="t" alt="" />
    <img src="./s1/etm.png" v-else class="t" alt="" /> -->


</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  position: relative;
  //background: url("./s1/bg.png");
  // background-size: size(171) auto;
   background: #FDCD00;
  //background: url("./s1/bg.jpg");
  //background-size: cover;
}
img{width: 100%;vertical-align: bottom;}
.t{position: absolute;top: 0;left: 0;z-index: 5;}
.svg{position: absolute;
    bottom: 13vw;
    right: 7vw;
    z-index: 6;//filter: drop-shadow(3px 3px 6px #066);
  width:size(164);
.st4{
fill:none;stroke:#fff;stroke-width:2;
stroke-dasharray:465;transform-origin: 50%;
stroke-dashoffset:465;
animation: letterDraw 3s linear infinite;
}
@keyframes letterDraw {
  48% { stroke-dashoffset: 0;transform: rotate(360deg);}
  52% { stroke-dashoffset: 0;transform: rotate(360deg);}
  100% { stroke-dashoffset: 465;transform: rotate(1080deg);}
}}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  

.section1 {
  width: 100%;
  position: relative;
  //background-size: sizem(40) auto;
  //padding: 0 0 sizem(40);
  background: #FDCD00;
  //background-image: url("./s1/bgm.jpg");
}
.svg{
    bottom: 34vw;
    right: 13vw;
    width: 20vw;
}
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import UIkit from 'uikit';
export default {
  name: 'section1',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      UIkit,
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
