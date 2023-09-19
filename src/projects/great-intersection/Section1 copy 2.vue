<template>
  <article class="section1">
   <!--  
    <img class="a1" src="./s1/mo.jpg" alt="" />
  -->
  <img src="./s1/pc.jpg" v-if="!isMobile" alt="" />
  <img src="./s1/mo.jpg" v-else alt="" /><!--
    <a href="https://forms.gle/KVymH5wLvLj1cn61A" target="_blank"><img src="./s1/e1.png" v-if="!isMobile" alt="" />
    <img src="./s1/e1m.png" v-else alt="" />
    <img src="./s1/et.png" v-if="!isMobile" class="t" alt="" />
    <img src="./s1/etm.png" v-else class="t" alt="" />
    <svg class="svg" width="164" height="164" viewBox="0 0 164 164" xmlns="http://www.w3.org/2000/svg">

<circle fill="#A0386E" cx="82" cy="82" r="82"/>
<path fill="#CE5F9D" d="M136.4,27.6c30.1,30.1,30.1,78.8,0,108.9s-78.8,30.1-108.9,0"/>
<path fill="#BF5187" d="M27.6,136.4c-30.1-30.1-30.1-78.8,0-108.9s78.8-30.1,108.9,0"/>
<path fill="#FFF" d="M42.3,70.1l4.1-0.5c0.5,2.7,0.9,6.2,0.9,8.5l-4.4,0.5C42.9,76.2,42.6,72.7,42.3,70.1z M39.1,80.5l-4.5-2.3c1.7-2.1,2.9-5.3,3.4-8.4l4.6,1.4C42.6,71.2,41.6,77.7,39.1,80.5z M55.2,77.7c-0.5-2.2-1.8-5.5-3.2-7.9l4.2-1.5c0,0,3.3,6.3,3.5,7.7L55.2,77.7z M59.1,57.4h6.1V34.8h6.8v9.6h8.8v6.4h-8.8v6.5h7.3v22.8h-6.6v-1.4h-7.2v1.6h-6.3V57.4z M35.9,69.1l-0.2-5.8l8.4-0.1v-8.1h-7.4v-19H58v19h-7.7V63l8.2-0.2l-0.1,5.4L35.9,69.1z M37.1,61.7v-5.2h20.6v5.2H37.1z M42.6,49.4l-1.1-6.9l2.5-0.8l1.8,6.6L42.6,49.4z M45.2,40.6h-3.3v9.9h3.3V40.6z M51.2,69.3c0.9,2.6,1.7,5.9,1.9,8.1l-4.2,0.9C48.8,76,48,72.6,47.2,70L51.2,69.3zM51.2,49.3l-2.3-0.9l1.6-6.7l3.3,1.2L51.2,49.3z M52.7,40.6h-3.4v9.9h3.4V40.6z M72.6,63.7h-7.2v8.8h7.2V63.7z M105.3,79.1c-1-1.7-2.9-4.1-4.7-5.7c6.8-2.7,15.9-9.6,20.1-17.4l6.2,2.6C122.2,67.4,112.1,76,105.3,79.1z M122.2,73.6c0.8,0,1.3-2.3,1.6-7.7c1.5,1.6,3.9,3.3,5.7,4c-1.1,8.8-3.2,10.8-8,10.8c-11.4,0-13.8-29.3-13.8-45.5h7.3C115,59,119.5,73.6,122.2,73.6z M84.2,54.7v-6.6H128v6.6H84.2z M83.7,38.8c6.8-0.8,14.1-2.3,19.2-3.9l4.7,6c-2.5,0.7-5.1,1.3-7.9,1.8v29.8c0,3.6-0.7,5.4-2.8,6.5c-2.2,1.1-5.2,1.3-9.1,1.3c-0.3-2-1.4-5.1-2.5-7.1c2.5,0.1,5.3,0.1,6.2,0.1c0.9,0,1.2-0.2,1.2-1V43.9c-2.4,0.3-4.8,0.6-7,0.8L83.7,38.8z M84.8,68.5l-1.6-7.1l23.5-3.5l0.5,6.4L84.8,68.5z M122.4,47.6c-1.1-2.3-4-5.6-6.5-7.9l5.2-3.6c2.5,2.2,5.5,5.2,6.9,7.6L122.4,47.6z M36.8,99.4v-5.7h19.3v5.7H36.8z M47.9,112.6l2.3-5.7l5.5,1.5c-0.7,1.4-1.4,2.9-2,4.2h2.6v5.8h-6.3v16.9h-6.4v-16.9h-6.8v-5.8H47.9z M39.9,113.6l-1.9-5.2l5-1.6l2,5.1L39.9,113.6z M35.4,107.7v-5.8h8V90h6.4v11.9h7.3v5.8H35.4z M35.4,127.3v-5.8h21.7v5.8H35.4z M64.4,135.4h-6.3V91.7h20.6v9c0,2.8-0.6,4.5-2.7,5.4c-2.1,0.9-4.8,1-8.2,1c-0.2-1.8-1.1-4.3-1.9-6c2,0.1,4.7,0.1,5.4,0.1c0.7,0,1-0.1,1-0.7v-2.8h-7.9V135.4z M74.7,108.4l5.2,1.3c-1.9,15.2-8.7,22.4-12.8,25.9l-3.8-5.3c5.1-4.3,7.5-8.9,9.5-16.4h-4c3,7.6,6.2,12.4,12.8,15.8c-1.5,1.3-3.5,3.8-4.5,5.5c-6.8-3.5-13.7-14.9-14.2-26.8H74.7z M123.6,96.9c-3.1,6.6-7.9,11.9-13.9,16h13.9v22.5h-7.3v-1.9h-16.2v1.8h-7v-14.4c-2.2,0.7-4.4,1.3-6.6,1.9l-3.6-6.4c5.6-1.1,11.1-2.9,16-5.2c-1.8-1.9-4.4-4.1-6.6-5.9c-1.2,0.7-2.5,1.3-3.8,2l-4.8-5.6c7.9-3.3,13.1-7.8,16.1-12.4l7.9,1.7c-0.8,1.2-1.6,2.3-2.5,3.3h12.4L123.6,96.9z M97.9,101.5c2.5,1.8,5.4,4.1,7.4,6.1c3-2,5.6-4.3,7.6-6.8H98.8L97.9,101.5z M116.3,127.3v-8h-16.2v8H116.3z"/>
<circle class="st4" cx="82" cy="82" r="74"/>
</svg>
</a>-->


</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  position: relative;
  background: url("./s1/bg.png");
  background-size: size(171) auto;
}
img{width: 100%;vertical-align: bottom;}
.t{position: absolute;top: 0;left: 0;z-index: 5;}
.svg{position: absolute;bottom:size(240);right: size(55);z-index: 6;filter: drop-shadow(3px 3px 6px #066);width:size(164);
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
  background-size: sizem(40) auto;
}
.svg{bottom:sizem(20);right: sizem(10);filter: drop-shadow(3px 3px 6px #066);width:sizem(60);}
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
