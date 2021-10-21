<template>
  <div class="section7">
    <picture v-if="isPC">
      <source srcset="./webp/s7/map基地位置空拍.webp" type="image/webp" />
      <source srcset="./s7/map基地位置空拍.jpg" type="image/jpeg" />
      <img src="./s7/map基地位置空拍.jpg" :alt="info.caseName" class="bg-img">
    </picture>
    <picture v-if="isPC">
      <source srcset="./webp/s7/t.webp" type="image/webp" />
      <source srcset="./s7/t.png" type="image/jpeg" />
      <img src="./s7/t.png" :alt="info.caseName" class="bg-img absolute">
    </picture>
    <!-- <div class="title-bg">
      <div class="text" v-if="isMobile">
        <div
          class="title"
          data-aos="fade-down"
          data-aos-delay="0"
        >樹海恬靜學區 爭藏氧森別墅</div>
        <div
          class="desc"
          data-aos="fade-down"
          data-aos-delay="200"
        >步行2分鐘抵高雄大學，自然生態日夜淨化空氣ING</div>
      </div>
    </div> -->
    <Map :bgSrc="bgSrc" :hand="hand" v-if="isMobile">
    </Map>
    <p class="slide-name absolute">基地位置空拍</p>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section7 {
  @include md {
    height: sizem(604);
  }
}
.bg {
  background-color: #fff;
  background-position: 100% 0%;
  background-size: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-image: url('./s2_bg.jpg');
}

.bg-img {
  width: 100vw;
  height: size(900);
  min-height: size(900);
  position: relative;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // &:nth-child(1) {
  //   position: relative;
  // }
}
  .slide-name {
    right: 1.2em;
    bottom: 0.6em;
    color: #fff;
    font-size: size(16);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: left;
    text-shadow: 0 0.3em 1em #000;
  }
@media only screen and (max-width: 1440px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }

  .text {
    top: 40px;
  }

  .title {
    font-size: 90px;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
    background-size: 1920px auto;
    background-position: center;
  }
  .txt {
    height: auto;
    margin-top: 100px;
  }

  .title {
    font-size: 52px;
  }

  .desc {
    font-size: 24px;
  }

  .text {
    top: 0;
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-position: 55%;
    // background-image: url('./s3_bg_m.jpg');
  }

  .logo {
    width: 55vw;
    margin-top: -80px;
  }

  .video-container {
    width: 100%;
    margin: 0 auto;
    right: 0;
    .mask {
      width: 100vw;
      height: calc((100vw * 9) / 16);

      img {
        width: 60px;
      }
    }
    video {
      position: relative;
      width: 100vw;
    }
  }

  .title {
    width: 100vw;
    font-size: 55px;
  }

  .desc {
    width: 100vw;
    font-size: 25px;
  }

  .text {
    top: 0;
    background-size: cover;
  }

  .title-bg {
    background-size: auto;
    height: 270px;
    // background-image: url('./s3_bg_top.png');
    background-size: contain;
    display: flex;
    align-items: center;

    .text {
      position: relative;
    }
  }
    .slide-name {
      right: auto;
      top: auto;
      bottom: 0.8em;
      right: 0.8em;
      z-index: 10;
      font-size: sizem(12);
    }
}
</style>

<script>
import { isMobile, isPC } from '@/utils'
import Map from '@/components/Map.vue'
import info from '@/info'
export default {
  name: 'section7',

  components: {
    Map,
  },

  data() {
    return {
      isMobile,
      isPC,
      info,
      // tagList: [require('./s3_title.png')],

      bgSrc: require('./s7/map基地位置空拍.jpg'),
      // bgmSrc: require('./s3_bg_m.jpg'),
      hand: require('./s7/小手.png'),
    }
  },

  mounted() {},
}
</script>
