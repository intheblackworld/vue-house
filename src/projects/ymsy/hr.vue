<template>
  <div class="hr absolute">
    <img loading="lazy" src="./s2/light.png" :alt="`${info.caseName}_img`" class="light absolute" />
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
@keyframes light {
  0% {
    transform: rotate(0deg)scale(0);
  }
  50% {
    transform: rotate(0deg)scale(0);
  }
  75% {
    transform: rotate(90deg)scale(1);
  }
  100% {
    transform: rotate(180deg)scale(0);
  }
}
.hr{
  top: size(-4);
  right: size(-10);
  z-index: 3;width: 50%;
  height: size(8);
  background: radial-gradient(ellipse at center, #FFF 0%,#FFF0 70%);
  mix-blend-mode: screen;
  .light{
    width: size(168);
    mix-blend-mode: screen;
    left: 0;right: 0;margin: auto;top:size(-168 * .5 + 4);animation: light 4s linear infinite;
  }
}
@media screen and (max-width: 767px) {
  .hr{
    top: sizem(-3);right: -35%;
    width: 100%;height: sizem(6);
    .light{width: sizem(100);top:sizem(-100 * .5 + 3);}
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'hr',

  data() {
    return {
      info,
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
