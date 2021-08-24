<template>
  <div class="section10">
    <div v-if="!isMobile">
      <img src="./s10/bg.jpg" alt="" class="bg-img" >
      <div class="text">
        基地位置空拍
      </div>
    </div>
    <Map :bgSrc="bgSrc" :hand="hand" v-else>
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
  height: size(900);
  min-height: size(900);
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

.text {
  @include img_r_pc(80, 0, 22);
  top: auto;
  bottom: size(17);
  font-size: size(12.2);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: size(1.22);
  text-align: right;
  color: #fff;
  white-space: nowrap;
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
  name: 'section10',

  components: {
    Map,
  },

  data() {
    return {
      isMobile,
      // tagList: [require('./s3_title.png')],

      bgSrc: require('./s10/bg.jpg'),
      // bgmSrc: require('./s3_bg_m.jpg'),
      hand: require('./s10/小手.png'),
    }
  },

  mounted() {},
}
</script>
