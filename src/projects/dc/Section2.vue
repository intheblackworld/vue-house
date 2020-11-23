<template>
  <div class="section2">
    <img src="./s2/bg.jpg" alt="" class="bg-img" v-if="!isMobile">
    <img src="./s2/logo.png" alt="" class="logo" v-if="!isMobile">
    <img src="./s2/光.jpg" alt="" class="light" v-if="!isMobile">
    <img src="./s2/光.jpg" alt="" class="light animate1" v-if="!isMobile">
    <img src="./s2/光.jpg" alt="" class="light animate2" v-if="!isMobile">
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
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

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
  height: 100vh;
  min-height: size(1080);
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;
  margin-top: 0;
  &:nth-child(1) {
    position: relative;
  }
}

.light {
  @include img_l_pc(403, 359, 985);
  mix-blend-mode: screen;
}

.animate1 {
  animation: pulse 0.8s ease-in-out infinite;
}

.logo {
  @include img_l_pc(126, 546, 1124);
}

// .animate2 {
//   animation: pulse 0.8s 0.3s ease-in-out infinite;
// }

@keyframes pulse {
  0% {
    transform: scaleX(-1);
  }

  50% {
    transform: scaleX(1);
  }

  100% {
    transform: scaleX(-1);
  }
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
}
</style>

<script>
import { isMobile } from '@/utils'
import Map from '@/components/Map.vue'
export default {
  name: 'section2',

  components: {
    Map,
  },

  data() {
    return {
      isMobile,
      // tagList: [require('./s3_title.png')],

      bgSrc: require('./s3/map.jpg'),
      // bgmSrc: require('./s3_bg_m.jpg'),
      hand: require('./s3/小手.png'),
    }
  },

  mounted() {},
}
</script>
