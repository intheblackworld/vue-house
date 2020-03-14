<template>
  <div class="section4">
    <div class="bg">
      <div v-if="!isMobile">
        <img v-lazy="require('./s4/bg.png')" alt="" class="bg-img">
        <img v-lazy="require('./s4/title.png')" alt="" class="bg-img" data-aos="fade" data-aos-delay="300">
        <div class="block-img" data-aos="fade" data-aos-delay="300">
          <div class="relative">
            <img v-lazy="require('./s4/img.jpg')" alt="">
            <div class="block-title">外觀3D示意圖</div>
          </div>
        </div>
      </div>
      <div v-else>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  overflow: hidden;
  position: relative;
  height: calc(100vw * 1320 / 1920);
  display: flex;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
  }
}

.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  z-index: 2;

  &:nth-child(1) {
    // position: relative;
  }
}

.block-img {
  position: absolute;
  left: calc(100vw * 37 / 1920);
  top: calc(100vw * 207 / 1920);
  width: calc(100vw * 1124 / 1920);
  z-index: 3;

  img {
    width: 100%;
  }
}

.block-title {
  font-size: size(16);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: 0.48px;
  text-align: right;
  color: #ffffff;
  position: absolute;
  right: size(10);
  bottom: size(10);
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
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
    background-size: cover;
    position: relative;
    overflow: hidden;
    position: relative;
    height: auto;
    display: flex;
    align-items: center;

    > div {
      display: block;
    }
  }

  .swiper-container {
    width: 100vw;
    position: relative;
  }

  .bg-img {
    width: 100vw;
    position: absolute;
    top: auto;
    left: 0;
    bottom: 0;
    height: auto;
    display: block;
    object-fit: cover;
    z-index: 3;

    // &:nth-child(1) {
    //   position: relative;
    // }
  }

  .content {
    width: 90vw;
    padding-left: 0;
    margin: 0 auto;
  }

  .item-title {
    font-size: calc(100vw * 12 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: 0.48px;
    text-align: right;
    color: #ffffff;
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section4',

  data() {
    return {
      isMobile,
      isTablet
    }
  },

  methods: {
  },
}
</script>
