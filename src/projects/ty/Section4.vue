<template>
  <div class="section4">
</div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4{
  width: 100%;
  height: size(1080);
  position: relative;
  z-index: 3;
  margin: 0;
  background: url("./s1/bg4.jpg") center;
  background-size: cover;
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section4 {
    height: sizem(490);
  background-image: url("./s1/bg4m.jpg");
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
  name: 'section4',

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
