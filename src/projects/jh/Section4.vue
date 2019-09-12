<template>
  <div class="section4">
    <div class="bg fullscreen">
      <div :class="`dialog ${isDialogShow ? 'show' : ''}`">
        <div class="relative">
          <img src="./s4/close.png" alt class="close" @click="isDialogShow = false" />
          <img :src="mapSrc" alt class="map-detail" />
        </div>
      </div>
      <div>
        <h3 class="title">交響導聆</h3>
        <div class="container">
          <img src="./s4/map1.png" alt @click="showDialog(1)" />
          <img src="./s4/map2.png" alt @click="showDialog(2)" />
        </div>
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
  justify-content: center;
}

.title {
  font-size: 50px;
  font-weight: bold;
  line-height: 0.88;
  text-align: center;
  color: #ffffff;
  margin-bottom: 80px;
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

.dialog {
  display: none;
  position: absolute;
  width: 100vw;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
  &.show {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close {
    cursor: pointer;
    position: absolute;
    top: -70px;
    right: -70px;
    z-index: 2;
  }
}

.map-detail {
  width: calc(100vw * (1022 / 1920));
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
      isDialogShow: false,
      mapSrc1: require('./s4/maptxt1.png'),
      mapSrc2: require('./s4/maptxt2.png'),
    }
  },

  methods: {
    showDialog(index) {
      this.isDialogShow = true
      this.mapSrc = this[`mapSrc${index}`]
    },
  },
}
</script>
