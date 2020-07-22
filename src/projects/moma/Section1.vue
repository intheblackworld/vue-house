<template>
  <div class="relative">
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
    <div
      v-if="!isMobile"
      :id="`youtube-player-${id}`"
      ref="player"
        class="video-ifame"
    ></div>
    <img
      src="./s1/bg_video.jpg"
      alt=""
      class="video-bg"
      v-if="isMobile"
    >
    <img
      src="./s1/logo.png"
      alt=""
      class="logo absolute"
    >
    <img
      src="./s1/txt.png"
      alt=""
      class="txt absolute"
    >
    <div
      v-if="isMobile"
      class="play-btn"
      @click="isDialog = true"
    >PLAY FULL MOVIE</div>
    <div
      class="video"
      v-if="isDialog && isMobile"
    >
      <iframe
        title="youtube"
        src="https://www.youtube.com/embed/eflYegCFh4M"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <img class="close" @click="isDialog = false" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTP////Pw8PLx8fLw8PLw8PPx8fHx8fLy8vLw8PXr6/Zeio0AAAALdFJOUwADRMS156s3KfgaAiHMOAAAAXtJREFUSMeFlr9qwzAQxnVZajoVLRLZTEMfoBAadywIt11t/AAGETqGhOzGoS/g0r20D1qRxLYsS/oy5Y/uk+/ud/eFnRoWecmcfTzdhX+n/Tf763bhAyJ7Z4l+DErQfdkw+izS0AGutiZY6JeABK2q8/XHMo0JhCXooUqvb/wSXNfXwIVXwjxBOmj5JLiqhzCh5+WkQzVG0bGYlVOscytIvG0cCWq/JjGn7md6YJlNQ5LsefKZfjsHA+cL6QQwdpvZidDevZKx1uZCZJtZ3okauaBVOQeRDmM5uco9tR+b2nPgSgxcjG1023uRGDiYA3KRCAn0EkGBXkKoOjgHC8OFna6nFsVOrvPILBou2tgoGkw6TxemXHTRdWA4iB+AV6CHNGk2UkXS5DqPFgqWGjULthsBA5GzoS19tUDYSzA4Zpzjo7dEw4vGX4IFYjiIryC0xHxr8MbGHy1SuIo5WObQDjgwFApZEnF9tiRkatAWobFCa4bmDv4evP4DsmNwZSA8CfQAAAAASUVORK5CYII=" />
    </div>
    <div class="line-bg" data-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAQAAADYv8WvAAAADUlEQVQIHWNkSGOAAAADRABoDg6qmwAAAABJRU5ErkJggg=="></div>
  </div>
</template>
<style lang="scss">
.video-ifame{
  width: 100vw;height: 56.25vw;position:absolute;top:50%;transform: translateY(-50%);left: 0;}
 </style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  position: relative;
  height:100vh;
  min-height: size(900);
  max-height: size(1080);
  &::after{
    content: "";display: block;position:absolute;top: 0;left: 0;width: 100%;
    height: 100%;z-index: 1;
  }
}

.video-bg {
  width: 100vw;
  height:100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  //z-index: 3;
} 

.line-bg{
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAQAAADYv8WvAAAADUlEQVQIHWNkSGOAAAADRABoDg6qmwAAAABJRU5ErkJggg==");
}


.logo {
  width: size(318);
  left: size(58);
  top: size(64);z-index: 1;
}

.txt {
  width: size(525);
  top: size(396);
  right: size(113);z-index: 1;
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
  .relative {
    margin: 0 0 0 0;
    overflow: hidden;
    width: size-m(1190);
    margin-left: size-m(-415);
    height: calc(100vh - 63px);
  min-height: size-m(604);
  max-height: size(812);
  }

  .video-bg {
    width: size-m(1190);
    height: size-m(667);
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    object-fit: cover;
    object-position: center;
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
    position: absolute;
    top: size-m(309);
    left: size-m(475);
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    width: size-m(245);
    height: size-m(50);
    border-radius: 25px / 25px;
    border: 1px solid #fff;
    cursor: pointer;
    color: #fff;
    text-shadow: 0 0 1px #000;
    background: rgba(0, 0, 0, 0.6);
  }

  .video {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: size-m(0);
    top: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 10;
    transition: opacity 0.5s;

    iframe {
      width: 100vw;
      height: size-m(275);
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 50%;
      transform: translateY(-50%);
      position: absolute;
    }

    .close {
      position: absolute;
      cursor: pointer;
      right: 15px;
      top: 50px;
      width: size-m(30);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section1',
  data() {
    return {
      isMobile,
      player: '',
      id: 'eflYegCFh4M',
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
        width: '1920',
        height: '1080',
        playerVars: {
          autoplay: 1,
          loop: 1,
          controls: 0,
          showinfo: 0,
          autohide: 1,
          modestbranding: 1,
          mute: 1,
          suggestedQuality: 'default',
          iv_load_policy:3,
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
    }, 500)
  },

  computed: {},
}
</script>
