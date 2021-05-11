<template>
  <div class="section2">
    <div class="fullscreen bg">
      <img src="./s2_bg_txt.png" alt class="txt fullscreen" v-if="!isMobile" data-aos="fade" data-aos-delay="0" />
      <img src="./s2_bg_txt1_m.png" alt class="txt-m" v-if="isMobile" data-aos="fade" data-aos-delay="0" />
      <div class="video-container relative" data-aos="fade" data-aos-delay="500">
        <!-- <div :class="`mask absolute ${isPlay ? 'hide' : ''}`">
          <img src="./s2_play_btn.png" @click="handlePlay" alt="" />
        </div> -->
        <img :class="`mask absolute ${isPlay ? 'hide' : ''}`" src="./s2_video.jpg" @click="handlePlay" alt="" />
        <!-- <video ref="video">
          <source src="./s2_video.mp4" type="video/mp4" />
        </video> -->
        <iframe
            id="ytplayer"
            type="text/html"
            width="100%"
            height="100%"
            v-if="isPlay"
            src="https://www.youtube.com/embed/xOEsaB3KiUw?rel=0&autoplay=1"
            frameborder="0"
            class="video"
            allowfullscreen
          ></iframe>
      </div>
      <img src="./s2_bg_txt2_m.png" alt class="txt-m" v-if="isMobile" data-aos="fade" data-aos-delay="300" />
    </div>
    <img v-if="!isMobile" src="./s2_bg_bottom.png" alt class="bg-bottom" />
    <img v-if="isMobile" src="./s2_bg_bottom_m.png" alt class="bg-bottom" />
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-color: #fff;
  background-position: 100% 0%;
  background-size: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('./s2_bg.jpg');
  margin-top: -1px;
}

.txt {
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100vw;
}

.video-container {
  width: calc(100vw * (1020 / 1920));
  position: absolute;
  right: 10vw;
  top: 50%;
  z-index: 3;
  .mask {
    z-index: 1;
    left: 0;
    top: 0;
    width: calc(100vw * 1020 / 1920);
    height: calc(100vw * 574 / 1920);
    // background: rgba(0, 0, 0, 0);
    object-fit: cover;
    top: 50%;
    transform: translateY(-50%);

    &.hide {
      display: none;
    }

    // img {
    //   width: 70px;
    //   margin-top: -30px;
    //   cursor: pointer;
    //   position: relative;
    //   z-index: 2;
    // }
  }
  .video {
    position: absolute;
    left: 0;
    width: 100%;
    height: calc(100vw * (574 / 1920));
    right: 10vw;
    top: 50%;
    transform: translateY(-50%);

  }
}

.bg-bottom {
  width: 100vw;
  height: auto;
  margin-top: calc(-100vw * (570 / 1920));
  display: block;
  position: relative;
  z-index: 2;
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
    background-size: 1920px auto;
    background-position: center;
  }
  .txt {
    height: auto;
    margin-top: 100px;
  }
  .video-container {
    width: 750px;
    margin: 0 auto;
    right: -12vw;
    .mask {
      width: 532px;
      height: 300px;

      img {
        width: 60px;
      }
    }
    .video {
      width: 532px;
    }
  }
}

@media screen and (max-width: 767px) {
  .section2{overflow: hidden;position: relative;}
  .bg {
    background-position: 55%;
    background-size: cover;
    background-image: url('./s2_bg_m.jpg');
    display: block;
    width: 100%;
    height: 100%;
  }

  .logo {
    width: 55vw;
    margin-top: -80px;
  }

  .video-container {
    width: 100%;
    margin: 0 auto;
    position: absolute;
    top: calc(50% - (100vw * 100 / 375));left: 0;
    .mask {
      width: 100vw;
      height: calc((100vw * 9) / 16);
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 60px;
        margin-top: 0;
      }
    }
    .video {
      position: relative;
      top: 0;
      transform: none;
      width: 100vw;
      height: calc(100vw * (420 / 750));
    }
  }

  .bg-bottom {
   // margin-top: calc(-100vw * (1270 / 1920));
    position: absolute;
    bottom:0;
  }

  .txt-m {
    width: 100vw;
    margin-bottom: 20px;
    position: absolute;
    bottom:0;left: 0;
  }
}
</style>

<script>
import { isMobile } from '@/utils'
export default {
  name: 'section2',

  data() {
    return {
      isMobile,
      isPlay: false,
    }
  },

  mounted() {},

  methods: {
    handlePlay() {
      if (this.isPlay) {
        this.isPlay = false
        this.$refs.video.pause()
      } else {
        this.isPlay = true
        this.$refs.video.play()
      }
    },
  },
}
</script>
