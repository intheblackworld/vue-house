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
    <!-- <img
        src="./s1/bg_video.jpg"
        alt=""
        class="video-bg"
        v-if="isMobile"
      > -->
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
      :id="`youtube-player-${id}`"
      ref="player"
    ></div>
    <div class="video-bg"></div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  position: relative;
  height: size(1080);
}

.video-bg {
  width: 100vw;
  height: size(1080);
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}

.logo {
  width: size(318);
  left: size(58);
  top: size(64);
}

.txt {
  width: size(525);
  top: size(396);
  right: size(113);
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
    height: size-m(667);
  }

  .video-bg {
    width: 100vw;
    height: size-m(667);
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    object-fit: cover;
    object-position: center;
    z-index: 2;
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
          mute: 1,
          suggestedQuality: 'default',
        },
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange,
        },
      })
      this.$refs.player.click()
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
      if (!window.YT) {
        window.onYouTubeIframeAPIReady = this.loadVideo
      } else {
        this.loadVideo()
      }
    }, 500)
  },

  computed: {},
}
</script>
