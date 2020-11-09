<template>
  <div class="section2">
    <div>
      <img src="./s2/hr.png" alt="" class="hr absolute">
      <div class="title-d absolute-jc">
        繁華核心　轉身瞬靜
      </div>
      <div class="subtitle absolute">
        信義計劃生活圈　萬坪自然保護區
      </div>
      <div class="video absolute">
        <div :id="`youtube-player-${id}`" ref="player" class="video-iframe absolute"></div>
        <img src="" alt="" :class="`video-img absolute ${(isPlay == true) ? 'hide' : ''}`" @click="playVideo">
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import '@/assets/style/function.scss';
.video-iframe {
  width: 100%;
  height: 200%;
  top: -50%;
  left: 0;
  z-index: 3;
  transition: all 0.3s;
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: size(900);
  min-height: size(900);
  // max-height: size(1080);
  background: rgba(255, 255, 255, 0.5);
  background-size: auto;
  background-attachment: fixed;
  // overflow: hidden;
  position: relative;
}

.video {
  width: size(990);
  height: size(556);
  top: size(230);
  right: size(466);
  z-index: 3;
  box-shadow: 0 0 0 size(23) rgba(0, 63, 68, 0.37);
  transition: all 0.3s;
  overflow: hidden;
}

.video-img {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  transition: all 0.3s;
}

.title-d {
  width: size(360);
  top: size(70);
  font-size: size(40);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #005369;

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: size(-60);
    width: size(36);
    height: size(36);
    background-image: url('./s2/title.png');
    background-size: cover;
    transform: rotate(180deg);
    top: size(8);
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: size(-60);
    top: size(8);
    width: size(36);
    height: size(36);
    background-image: url('./s2/title.png');
    background-size: cover;
  }
}

.subtitle {
  width: size(360);
  top: size(133);
  left: size(781);
  font-size: size(24);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
}

.hr {
  width: 100vw;
  top: size(-18);
  left: 0;
  opacity: 0.5;
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
    width: sizem(365);
    height: sizem(205);
    top: sizem(179);
    right: sizem(5.7);
    z-index: 3;
    box-shadow: 0 0 0 sizem(7.4) rgba(0, 63, 68, 0.37);
    transition: all 0.3s;
    overflow: hidden;
  }

  .video-img {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 3;
    transition: all 0.3s;
  }

  .title-d {
    width: sizem(270);
    top: sizem(50);
    font-size: sizem(30);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: normal;
    text-align: center;
    color: #005369;

    &::after {
      content: '';
      display: block;
      position: absolute;
      right: sizem(-45);
      width: sizem(28);
      height: sizem(28);
      top: sizem(4);
      background-image: url('./s2/title.png');
      background-size: cover;
      transform: rotate(180deg);
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: sizem(-45);
      width: sizem(28);
      height: sizem(28);
      top: size(8);
      background-image: url('./s2/title.png');
      background-size: cover;
    }
  }

  .subtitle {
    width: sizem(255);
    top: sizem(107);
    left: sizem(61);
    font-size: sizem(17);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
  }

  .hr {
    width: auto;
    height: sizem(10);
    top: sizem(-10);
    left: 0;
    opacity: 0.5;
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

  mounted() {},
  created() {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
  },

  computed: {},
}
</script>
