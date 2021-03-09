<template>
    <div class="section1">
    <img src="./s11/1.jpg" v-if="!isMobile" alt="睿洋水樣_" class="bg-img">
    <img src="./s11/1m.jpg" v-if="isMobile" alt="睿洋水樣_" class="bg-img">
    <img src="./s11/2.jpg" v-if="!isMobile" alt="睿洋水樣_" class="bg-img">
    <img src="./s11/2m.jpg" v-if="isMobile" alt="睿洋水樣_" class="bg-img">
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section1 {
  width:100%;
}

.bg-img {
  width:100%;
  display: block;
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
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
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
