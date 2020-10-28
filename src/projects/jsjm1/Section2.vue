<template>
  <div class="section2">
    <canvas id="c2"></canvas>
    <div>
      <img src="./s2/bg.png" alt="" class="bg-img">
      <img src="./s2/title.png" alt="" class="title absolute" @click="playVideo">
      <div :id="`youtube-player-${id}`" ref="player" class="video-iframe absolute"></div>
      <img src="./s2/影片.jpg" alt="" :class="`video-iframe absolute ${(isPlay == true) ? 'hide' : ''}`" @click="playVideo">
    </div>
  </div>
</template>
<style lang="scss">
@import '@/assets/style/function.scss';
.video-iframe {
  width: size(454);
  height: size(806);
  top: size(38);
  right: size(417);
  transition: all 0.3s;
}

@media screen and (max-width: 767px) {
  .video-iframe {
    width: sizem(300);
    height: sizem(532);
    top: sizem(34);
    right: sizem(37);
    z-index: 3;
    border: solid 1px #929292;
    transition: all 0.3s;
  }
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  background: none;
  background-size: auto;
  background-attachment: fixed;
  overflow: hidden;
  position: relative;
}

#c2 {
  opacity: 0.8;
}
canvas {
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: multiply;
}

.bg-img {
  width: size(1920);
  height: 100%;
  min-height: size(900);
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;

  &:nth-child(1) {
    position: relative;
  }
}

.hide {
  opacity: 0;
}

@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section2 {
    width: 100vw;
    min-height: sizem(604);
    max-height: sizem(812);
    height: calc(100vh - 63px);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height: 100%;
    min-height: sizem(667);
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;
    margin-top: 0;

    &:nth-child(1) {
      position: relative;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section2',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isPlay: false,
      player: '',
      id: 'bzNBCmdCaTU',
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

    playVideo() {
      this.loadVideo()
      this.isPlay = true
    },
  },

  mounted() {
    // setTimeout(() => {
    //   if (!this.isMobile) {
    //     if (!window.YT) {
    //       window.onYouTubeIframeAPIReady = this.loadVideo
    //     } else {
    //       this.loadVideo()
    //     }
    //   }
    // }, 2500)
    //initial
    let c = document.getElementById('c2')
    let w = (c.width = window.innerWidth)
    let h = (c.height = window.innerHeight) * 1.5
    let ctx = c.getContext('2d')
    //parameters
    let total = w / 2
    let accelleration = 0.01
    //afterinitial calculations
    let size = (w / total) * 8
    let occupation = w / total
    let repaintColor = 'rgba(255, 255, 255, .07)'
    let colors = []
    let dots = []
    let dotsVel = []
    //setting the colors' hue
    //and y level for all dots
    let portion = 360 / total
    for (let i = 0; i < total; ++i) {
      colors[i] = portion * i

      dots[i] = h
      dotsVel[i] = 10
    }
    function anim() {
      window.requestAnimationFrame(anim)

      ctx.fillStyle = repaintColor
      ctx.fillRect(0, 0, w, h)

      for (let i = 0; i < total; ++i) {
        let currentY = dots[i] - 1
        dots[i] += dotsVel[i] += accelleration

        ctx.fillStyle = '#929292'
        ctx.fillRect(occupation * i, currentY, size, dotsVel[i] + 1)

        if (dots[i] > h && Math.random() < 0.002) {
          dots[i] = dotsVel[i] = 0
        }
      }
    }

    anim()
  },
  created() {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
  },

  computed: {},
}
</script>
