<template>
  <div class="section2">
    <div class="fullscreen bg">
      <img src="./s2_bg_txt.png" alt class="txt fullscreen" />
      <div class="video-container relative">
        <div :class="`mask absolute ${isPlay ? 'hide' : ''}`">
          <img src="./s2_play_btn.png" @click="handlePlay" alt="" />
        </div>
        <video ref="video">
          <source src="./s2_video.mp4" type="video/mp4" />
        </video>
      </div>
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
    width: 100%;
    height: 405px;
    background: rgba(0, 0, 0, 0);
    transition: all 0.5s;
    opacity: 1;

    &.hide {
      opacity: 0;
    }

    img {
      width: 70px;
      margin-top: -30px;
      cursor: pointer;
      position: relative;
      z-index: 2;
    }
  }
  video {
    position: absolute;
    left: 0;
    width: 100%;
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
    video {
      width: 532px;
    }
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-position: 55%;
    background-image: url('./s2_bg_m.jpg');
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
