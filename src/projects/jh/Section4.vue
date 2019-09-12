<template>
  <div class="section4">
    <div class="bg fullscreen">
      <div class="dialog">
        <div class="close"></div>
        <img :src="mapSrc" alt="">
      </div>
      <div class="container">
        <img src="./s4/map1.png" alt="" @click="showDialog(1)">
        <img src="./s4/map2.png" alt="" @click="showDialog(2)">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-color: #3c2d2e;
  background-image: url('./generic_bg.png');
  position: relative;
  overflow: hidden;
  position: relative;
  padding: 50px 0;
  display: flex;
  align-items: center;
}

.container {
  width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  img {
    width: 700px;
    cursor: pointer;
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .container {
    width: 1240px;
    > img {
      width: 600px;
    }
  }
  .fullscreen {
    height: auto;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
  }

  .fullscreen {
    height: auto !important;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section4',

  data() {
    return {
      isMobile,
      isFirstDialogShow: false,
      isSecondDialogShow: false,
      mapSrc1: require('./s4/maptxt1.png'),
      mapSrc2: require('./s4/maptxt2.png'),
    }
  },

  methods: {
  },
}
</script>
