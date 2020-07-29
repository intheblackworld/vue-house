<template>
  <div class="section1">
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section1 {
  position: relative;
  height: size(1080);
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
  position: relative;
  height: size(1080);
}
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section1',
  data() {
    return {
      isMobile,
    }
  },

  methods: {
  },
  created() {},

  mounted() {},

  computed: {},
}
</script>