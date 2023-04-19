<template>
  <article class="section1">
   <!--  
    <img class="a1" src="./s1/mo.jpg" alt="" />
  -->
    <a href="https://forms.gle/KVymH5wLvLj1cn61A" target="_blank"><img src="./s1/e1.png" v-if="!isMobile" alt="" />
    <img src="./s1/e1m.png" v-else alt="" />
    <img src="./s1/et.png" v-if="!isMobile" class="t" alt="" />
    <img src="./s1/etm.png" v-else class="t" alt="" /></a>


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
