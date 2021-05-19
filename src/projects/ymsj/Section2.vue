<template>
  <div class="section2">
    <div class="video absolute">
      <div :id="`youtube-player-${id}`" ref="player" class="video-iframe absolute"></div>
      <img src="./s2/video_img.jpg" alt="" :class="`video-img absolute ${(isPlay == true) ? 'hide' : ''}`" @click="playVideo">
      <img src="./s2/mask.png" :alt="`${info.caseName}_img`" class="mask">
      <img src="./s2/style_1.png" :alt="`${info.caseName}_img`" class="style1">
      <img src="./s2/style_2.png" :alt="`${info.caseName}_img`" class="style2">
    </div>
  </div>
</template>
<style lang="scss">
@import '@/assets/style/function.scss';
.video-iframe {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  transition: all 0.3s;
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  background: none;
  background-size: auto;
  background-attachment: fixed;
  overflow: hidden;
  position: relative;
}

.video {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
}

.video-img {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  transition: all 0.3s;
}

.mask {
  @include img_c_pc(1920, 0);
  top: auto;
  bottom: size(-175);
	z-index: 8;
}

.style1 {
  @include img_l_pc(310, -350, 0);
	z-index: 8;
}

.style2 {
  @include img_r_pc(455, 320, 0);
	z-index: 8;
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
  .video {
    width: sizem(300);
    height: sizem(530);
    top: sizem(34);
    right: sizem(37);
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
import info from '@/info'

export default {
  name: 'section2',

  data() {
    return {
      info,
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
