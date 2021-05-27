<template>
  <div class="section2">
    <!-- https://codepen.io/ciprian/pen/WqLwvE -->
    <!-- https://codepen.io/dudleystorey/pen/PZyMrd -->
    <!-- <iframe
      v-if="!isMobile"
      ref
      class="video-bg"
      src="https://www.youtube.com/embed/eflYegCFh4M?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=eflYegCFh4M"
      frameborder="0"
      allowfullscreen
    ></iframe> -->
    <div class="video_box" v-if="!isMobile" @click="isDialog = true">
      <div :id="`youtube-player-${id}`" ref="player" class="video-ifame"></div>
    </div>

    <div class="isDialog" v-if="isMobile" @click="isDialog = true">
    </div>
    <img src="./s2/style_1.png" :alt="`${info.caseName}_img`" class="style1" data-aos="fade-up" data-aos-delay="200">
    <img src="./s2/style_2.png" :alt="`${info.caseName}_img`" class="style2" data-aos="fade-up" data-aos-delay="400">
    <div class="video video-dialog" v-if="isDialog && isMobile">
      <div class="mask" @click="isDialog = false"></div>
      <div class="video-bg">
        <div class="video_box">
          <iframe title="youtube" src="https://www.youtube.com/embed/7ALBj_-hJLQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <img class="close" @click="isDialog = false" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTP////Pw8PLx8fLw8PLw8PPx8fHx8fLy8vLw8PXr6/Zeio0AAAALdFJOUwADRMS156s3KfgaAiHMOAAAAXtJREFUSMeFlr9qwzAQxnVZajoVLRLZTEMfoBAadywIt11t/AAGETqGhOzGoS/g0r20D1qRxLYsS/oy5Y/uk+/ud/eFnRoWecmcfTzdhX+n/Tf763bhAyJ7Z4l+DErQfdkw+izS0AGutiZY6JeABK2q8/XHMo0JhCXooUqvb/wSXNfXwIVXwjxBOmj5JLiqhzCh5+WkQzVG0bGYlVOscytIvG0cCWq/JjGn7md6YJlNQ5LsefKZfjsHA+cL6QQwdpvZidDevZKx1uZCZJtZ3okauaBVOQeRDmM5uco9tR+b2nPgSgxcjG1023uRGDiYA3KRCAn0EkGBXkKoOjgHC8OFna6nFsVOrvPILBou2tgoGkw6TxemXHTRdWA4iB+AV6CHNGk2UkXS5DqPFgqWGjULthsBA5GzoS19tUDYSzA4Zpzjo7dEw4vGX4IFYjiIryC0xHxr8MbGHy1SuIo5WObQDjgwFApZEnF9tiRkatAWobFCa4bmDv4evP4DsmNwZSA8CfQAAAAASUVORK5CYII=" />
    </div>
    <!-- div class="line-bg" data-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAQAAADYv8WvAAAADUlEQVQIHWNkSGOAAAADRABoDg6qmwAAAABJRU5ErkJggg=="></div -->
  </div>
</template>
<style lang="scss">
@import '@/assets/style/function.scss';
// .video-ifame {
//   width: 100.5%;
//   height: 100.5%;
//   position: absolute;
//   top: 0;
//   left: 0;
// }
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section2 {
  // height: 100vh;
  overflow: hidden;
  height: size(830);
  position: relative;
  // position: relative;
  // height: auto;
  // min-height: calc(1920 * );
  // max-height: size(1080);
  background: transparent;
  background-size: contain;
  // margin: size(-125) 0 0 0;
  // &::after {
  //   content: '';
  //   display: block;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   z-index: 1;
  // }
}

.top-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
}

.bottom-img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
}

.video_box {
  width: size(1475);
  height: calc(100% + 171px * 2);
  top: -171px;
  left: calc(50% - 50vw * 1475 / 1920);
  position: absolute;
  z-index: 3;
  overflow: hidden;
  opacity: 0;
  cursor: pointer;
  animation: op 1s 3s ease-out forwards;
}
@keyframes op {
  to {
    opacity: 1;
  }
}
.video-bg {
}

.line-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAQAAADYv8WvAAAADUlEQVQIHWNkSGOAAAADRABoDg6qmwAAAABJRU5ErkJggg==');
}

.logo {
  width: size(318);
  left: size(58);
  top: size(64);
  z-index: 1;
}

.txt {
  width: size(525);
  top: size(396);
  right: size(113);
  z-index: 1;
}

.mask {
  @include img_c_pc(1920, 0);
  top: auto;
  bottom: size(-245);
  z-index: 8;
}

.style1 {
  @include img_l_pc(310, -180, 0);
  z-index: 8;
}

.style2 {
  @include img_r_pc(455, 180, 0);
  z-index: 8;
}

.hide {
  opacity: 0;
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section2 {
    margin: 0 0 0 0;
    overflow: hidden;
    width: 100vw;
    height: sizem(270);
    min-height: sizem(270);
    max-height: sizem(270);
    background-size: cover;
    background: #000 url('./s2/video_img.jpg') no-repeat center;
    // margin-top: sizem(-60);
    z-index: 3;
  }

  .style1 {
    @include img_l_m(110, -30, 0);
    z-index: 8;
  }

  .style2 {
    @include img_r_m(165, 60, 0);
    z-index: 8;
  }

  .isDialog {
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
  }
  .mask {
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background: #000 url('./s2/load.gif') no-repeat center;
    background-size: size-m(50);
    opacity: 0.5;
  }
  .video_box {
    width: 100%;
    position: absolute;
    height: calc(100% + 200px * 2);
    top: -200px;
    left: 0;
    z-index: 5;
  }
  .video-bg {
    width: 100%;
    position: absolute;
    height: size-m(212);
    overflow: hidden;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    z-index: 5;
  }

  .logo {
    width: size-m(154);
    left: 0;
    right: 0;
    margin: 0 auto;
    top: size-m(240);
  }

  .txt {
    width: size-m(157);
    top: auto;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: size-m(47);
  }

  .play-btn {
    @include img_c_m(32, 80);
    cursor: pointer;
    z-index: 10;
  }

  .video {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: size-m(0);
    top: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 200;
    transition: opacity 0.5s;

    iframe {
      width: 100%;
      height: 100%;
      left: 0;
      right: 0;
      margin: 0 auto;
      // top: 50%;
      // transform: translateY(-50%);
      position: absolute;
      background-color: #fff;
    }

    .close {
      position: absolute;
      cursor: pointer;
      right: 15px;
      top: calc(50% - 47vw);
      width: size-m(30);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import info from '@/info'

export default {
  name: 'section2',
  data() {
    return {
      info,
      isMobile,
      player: '',
      id: '7ALBj_-hJLQ',
      isDialog: false,
    }
  },

  methods: {
    onPlayerReady(event) {
      console.log('load')
      event.target.playVideo()
    },
    loadVideo() {
      this.player = new window.YT.Player(`youtube-player-${this.id}`, {
        videoId: this.id,
        width: '100%',
        height: '100%',
        playerVars: {
          autoplay: 1,
          loop: 1,
          controls: 0,
          showinfo: 0,
          autohide: 1,
          modestbranding: 1,
          mute: 0,
          suggestedQuality: 'default',
          iv_load_policy: 3,
        },
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange,
        },
      })
    },

    onPlayerStateChange(e) {
      if (e.data === window.YT.PlayerState.ENDED) {
        this.player.loadVideoById(this.id)
      }
    },
  },

  created() {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
  },

  mounted() {
    setTimeout(() => {
      if (!this.isMobile) {
        if (!window.YT) {
          window.onYouTubeIframeAPIReady = this.loadVideo
        } else {
          this.loadVideo()
        }
      }
    }, 2500)
  },

  computed: {},
}
</script>