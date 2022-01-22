<template>
  <div>
    <div class="section1">
      <img v-if="isPC" class="bg-img" src="./newspc/1.jpg" alt="八里龍躍_1">
      <img v-if="isMobile" class="bg-img" src="./newsmo/1.jpg" alt="八里龍躍_1">
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
 


.section1 {
  width:100%;
  height: 100vh;
  min-height: size(933);
  max-height: size(1080);
  position: relative;
}

.bg-img {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: block;
  position: relative;
  object-fit: cover;
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    height:calc(100vh - 63px);
    min-height:sizem(604);
    max-height:sizem(750);
  }

}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isShow: true,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
