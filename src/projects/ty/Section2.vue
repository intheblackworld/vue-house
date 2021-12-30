<template>
  <div class="section2">
    <div class="txt">
    <div class="title1" uk-parallax="viewport:0.3;y:-200,0;blur:5,0;scale:3,1;opacity: 0,1">悦式精工 &nbsp;悦式奢華</div>
    <div class="title2" uk-parallax="viewport:0.2;y:-200,0;blur:5,0;scale:3,1;opacity: 0,1">新莊副都心｜30層地標建築｜SRC百坪精工</div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2{
  width: 100%;
  height: size(957);
  position: relative;
  z-index: 3;
  margin: 0;
  background: url("./s1/bg2.jpg") center;
  background-size: cover;
}


.title1{
  //transform: translateY(-50%)scaleY(1.2);filter: blur(6px);
 transition: all 1s;
  font-size:size(130);
  margin: 0 0 1.1em;
}
.title2{
 // transform: translateY(-50%)scaleY(1.2);filter: blur(6px);
 //transition: all 1s 1.5s;
 transition: all 0.8s;
}
.txt{
  @include img_c_pc(1800, 200);
  font-size:size(80);
  line-height: 1.6;
  letter-spacing: 0;
  color: #FFF;
  transform:scaleX(0.9);
  transform-origin: 50% 0;
  text-align: center;
  text-shadow:0 0 0.2em #000,0 0 0.5em #000,0 0 1em #000;
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section2 {
    width: 100%;
    min-height: sizem(667);
    max-height: sizem(812);
    height: calc(100vh - 63px);
  margin: 0 0 32vw;
  }

.logo {
  @include img_l_m(200, 108,48);
top:calc(50% + 100vw * (140 - 667 * .5) / 375);
}
.title1{
  top: calc(50% + (110 - 333.5) * 100vw / 375);
  right:sizem(85);
  font-size:sizem(16);
  line-height: 1.25;
}
.title2{
  top: calc(50% + (190 - 333.5) * 100vw / 375);
  right:sizem(50);
  font-size:sizem(16);
  line-height: 1.25;
}
.txt{
  width: 100%;
  font-size:sizem(15);
  top: calc(50% + (585 - 333.5) * 100vw / 375);
  letter-spacing: 0.2em;
  span{width: 2em}
  

}

}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import UIkit from 'uikit';
export default {
  name: 'section2',

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
