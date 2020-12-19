<template>
  <div class="section1">
    <div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes letterDraw{
    50%{
        stroke-dashoffset: 0;fill:#FFFFFF00;
    }
    to {
        stroke-dashoffset: 0;fill:#FFFFFF;
    }
}
@keyframes letterDraw3{
    50%{
        stroke-dashoffset: 0;
    }
    to {
        stroke-dashoffset: 0;
    }
}
@keyframes letterDraw2{
    50%{
        stroke-dashoffset: 0;fill:#EEE93A00;
    }
    to {
        stroke-dashoffset: 0;fill:#EEE93A;
    }
}
@keyframes op {
    to {
       fill:#FFFFFF;
    }
}

@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  overflow: hidden;
  position: relative;
  // background: url("./s1/bg.jpg") fixed ;
  background-size: auto;
}

.bg-img {
  width: size(1920);
  height: 100%;
  min-height: size(900);
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;

  &:nth-child(1) {
    position: relative;
  }
}

.logo {
  width: size(743);
  top: calc(50% - 9.5vw);
  left: size(589);
  filter: drop-shadow(0px 10px 5px #044955)
}
/*
.t1 {
  width: size(751);
  top: size(483);
  left: size(585);
}

.t2 {
  width: size(751);
  top: size(711);
  left: size(585);
}
*/
@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    width: 100vw;
    min-height: sizem(470);
    max-height: sizem(812);
    height: calc(100vh - 63px);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .logo {
    width: sizem(308);
    top: sizem(243);
    left: sizem(35);
  }

  .t1 {
    width: sizem(308);
    top: sizem(309);
    left: sizem(35);
  }

  .t2 {
    width: sizem(308);
    top: sizem(403);
    left: sizem(35);
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
    }
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
