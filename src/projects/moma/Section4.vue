<template>
  <div class="relative">
    <!-- https://codepen.io/ciprian/pen/WqLwvE -->
    <!-- https://codepen.io/dudleystorey/pen/PZyMrd -->
    <iframe
      v-if="!isMobile"
      class="video-bg"
      src="https://www.youtube.com/embed/pagQjsWtntM?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=pagQjsWtntM"
      frameborder="0"
      allowfullscreen
    ></iframe>
    <h3 class="title absolute">俯瞰萬家燈光 高空視覺饗宴！</h3>
    <h3 class="item flex-c absolute item1">全台最長50米空中泳池會館</h3>
    <h3 class="item flex-c absolute item2">擎天29層美國EPS制震系統</h3>
    <div
      :id="`youtube-player-${id}`"
      v-if="isMobile"
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

.title {
  text-shadow: 3px 3px 2px rgba(26, 19, 17, 0.75);
  font-size: size(44);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 5.23px;
  text-align: left;
  color: #ffffff;
  top: size(110);
  right: size(90);
}

.item {
  width: size(443);
  height: size(73);
  opacity: 0.92;
  border-radius: 36.5px;
  background-color: #1a1311;
  font-size: size(24);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 2.88px;
  text-align: left;
  color: #9c7244;
}

.item1 {
  top: size(190);
  right: size(315);
}

.item2 {
  top: size(287);
  right: size(315);
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
  }

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

  .title {
    width: size-m(328);
    text-shadow: 3px 3px 2px rgba(26, 19, 17, 0.75);
    font-size: size-m(20);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 5.23px;
    text-align: center;
    color: #ffffff;
    top: size-m(30);
    right: 0;
    left: 0;
    margin: 0 auto;
    white-space: nowrap;
  }

  .item {
    width: size-m(303);
    height: size-m(39);
    opacity: 0.92;
    border-radius: 36.5px;
    background-color: #1a1311;
    font-size: size-m(15);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 2.88px;
    text-align: left;
    color: #9c7244;
  }

  .item1 {
    top: size-m(81);
    right: 0;
    left: 0;
    margin: 0 auto;
  }

  .item2 {
    top: size-m(130);
    right: 0;
    left: 0;
    margin: 0 auto;
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
      player: '',
      id: 'pagQjsWtntM',
    }
  },

  methods: {
    onPlayerReady(event) {
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
    },

    onPlayerStateChange(e) {
      if (e.data === window.YT.PlayerState.ENDED) {
        this.player.loadVideoById(this.id)
      }
    },
  },

  created() {
    // const tag = document.createElement('script')
    // tag.src = 'https://www.youtube.com/iframe_api'
    // const firstScriptTag = document.getElementsByTagName('script')[0]
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
  },

  mounted() {
    setTimeout(() => {
      if (this.isMobile) {
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
