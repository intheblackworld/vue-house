<template>
  <div class="section2">
    <div class="txt">
    <div class="title1" title="壇悅">悦式精工<span v-if="isPC"> &nbsp;</span><br v-if="isMobile">悦式奢華</div>
    <div class="title2" title="壇悅">新莊副都心｜30層地標建築｜SRC百坪精工</div>
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
 transition: all 1s;
  font-size:size(130);
  margin: 0 0 1.1em;
}
.title2{
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
    height: sizem(490);
  background-image: url("./s1/bg2-m.jpg");
}
.title1{
  font-size:sizem(53);
  margin: 0 0 .4em;
  }
.txt{
  @include img_c_m(375, 170);
  font-size:sizem(16);
  line-height: 1.3;

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
