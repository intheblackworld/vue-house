<template>
  <div class="section3">
    <div class="tree2">
    <img src="./s1/tree.png" :alt="`${info.caseName}_tree`">
    </div>
    <div class="txt">
      <div class="title1" data-aos="fade" data-aos-delay="100">新莊心帝標</div>
      <div class="desc" data-aos="fade" data-aos-delay="300" v-if="isPC">｜SRC結構｜C.F.T鋼柱｜三大制震｜耐震6級｜<br>
｜捷運290米｜萬坪運動公園｜千坪V.I.P｜崗石外觀｜</div>
      <div class="desc" data-aos="fade" data-aos-delay="300" v-if="isMobile">｜SRC結構｜C.F.T鋼柱｜三大制震｜<br>
｜耐震6級｜捷運290米｜萬坪運動公園｜<br>
｜千坪V.I.P｜崗石外觀｜  </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3{
  width: 100%;
  height:auto;
  position: relative;
  margin: 0;
  &::before{content: "";width:100%;background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 50%,rgba(0,0,0,0) 100%);
  height: size(2000);
  position: absolute;
  bottom:size(-2500);left: 0;
  }
}
.tree2{
  @include img_r_pc(1515,350,-1100);
  transform:rotate(40deg);
  img{width: 100%;
  animation: tree	5s infinite alternate;
  transform: skewY(2deg);
  transform-origin: 100% 50%;}}
  
@keyframes tree {
  to { transform: skewY(3deg);}
}
.txt{
  margin: 4.6em auto 2em auto;
  font-size:size(48);
  line-height:2.3;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.03em;
  color: #FFF;
  .title1{
  color: #fddb77;
  letter-spacing: 0.25em;
  font-size:1.3em;
  transform: scaleX(3);
&::after,
&::before{content: "";width: 6em;height: 2px;background: currentColor;
vertical-align: middle;margin: 0 0.4em 0.2em 0.4em;
display: inline-block;}
}
.desc{
  transform: scaleX(3);}
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section3 {
  &::before{
	    height: sizem(2000);
  bottom:sizem(2000 * -1.3);
  z-index: -1;
  }
}

.tree2{
  @include img_r_m(528,100,-300);
  transform:rotate(15deg);
}
.txt{
  margin: 7.5em auto;
  font-size:sizem(16);

  .title1{
  font-size:1.5em;
&::after,
&::before{width: 2.8em;}



  }
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
