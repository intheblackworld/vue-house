<template>
  <div class="section12">
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
    <div class="video_box" v-if="!isMobile">
      <div :id="`youtube-player-${id}`" ref="player" class="video-ifame"></div>
    </div>
    <div class="video_box" v-else
      @click="isDialog = true">
    <img
      src="data:image/svg+xml,%3Csvg fill='%23069' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Ccircle cx='15' cy='15' r='15'/%3E%3Cpath fill='%23FFF' d='M22.6,15.8l-11.3,6.5c-0.6,0.3-1.3-0.1-1.3-0.8v-13c0-0.7,0.7-1.1,1.3-0.8l11.3,6.5C23.2,14.6,23.2,15.4,22.6,15.8z'/%3E%3C/svg%3E"
      alt=""
      class="play-btn"
    ></div>
    <div class="video" v-if="isDialog && isMobile">
      <div class="video_dialog" @click="isDialog = false">
        <iframe title="youtube" src="https://www.youtube.com/embed/rYH3Tk4jeRg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <img class="close" @click="isDialog = false" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTP////Pw8PLx8fLw8PLw8PPx8fHx8fLy8vLw8PXr6/Zeio0AAAALdFJOUwADRMS156s3KfgaAiHMOAAAAXtJREFUSMeFlr9qwzAQxnVZajoVLRLZTEMfoBAadywIt11t/AAGETqGhOzGoS/g0r20D1qRxLYsS/oy5Y/uk+/ud/eFnRoWecmcfTzdhX+n/Tf763bhAyJ7Z4l+DErQfdkw+izS0AGutiZY6JeABK2q8/XHMo0JhCXooUqvb/wSXNfXwIVXwjxBOmj5JLiqhzCh5+WkQzVG0bGYlVOscytIvG0cCWq/JjGn7md6YJlNQ5LsefKZfjsHA+cL6QQwdpvZidDevZKx1uZCZJtZ3okauaBVOQeRDmM5uco9tR+b2nPgSgxcjG1023uRGDiYA3KRCAn0EkGBXkKoOjgHC8OFna6nFsVOrvPILBou2tgoGkw6TxemXHTRdWA4iB+AV6CHNGk2UkXS5DqPFgqWGjULthsBA5GzoS19tUDYSzA4Zpzjo7dEw4vGX4IFYjiIryC0xHxr8MbGHy1SuIo5WObQDjgwFApZEnF9tiRkatAWobFCa4bmDv4evP4DsmNwZSA8CfQAAAAASUVORK5CYII=" />
    </div>
    <!-- div class="line-bg" data-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAQAAADYv8WvAAAADUlEQVQIHWNkSGOAAAADRABoDg6qmwAAAABJRU5ErkJggg=="></div -->
  </div>
</template>
<style lang="scss">
@import '@/assets/style/function.scss';
.video-ifame {
  width: 100.5%;
  height:100.5%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section12 {
  // height: 100vh;
  overflow: hidden;
  // position: relative;
  height: size(700);
  margin: size(125) 0  0 0;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
}
.video_box {
  width: 100%;
  position: absolute;
  background: url('./s12/v.jpg') no-repeat center;
  background-size: cover;
  z-index: 2;
  top:50%;
  transform: translateY(-50%);
  left: 0;
  overflow: hidden;
  height:100%;
}
.video-bg {
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  //z-index: 3;
}

.line-bg {
  width: 100vw;
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

@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section12 {
    margin: 0;
    overflow: hidden;
    width: 100vw;
    height: size-m(350);
    position: relative;
  }

  .video_box {
    position: absolute;
  z-index: 3;
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
   // @include img_c_m(32, 130);

   position: relative;
   margin:size-m(155) auto;
   width:size-m(40);
    cursor: pointer;
    z-index: 3;
  }

  .video {
    width: 100vw;
    height: 100vh;
    position: fixed;
    
    left: 0
    ;
    top: 0;
    //background: rgba(0, 0, 0, 0.6);
    z-index: 200;
   // transition: opacity 0.5s;
    .video_dialog{
    position: absolute;
    width: 100%;height: 100%;background: rgba(0, 0, 0, 0.6);}

    iframe {
      width: 100vw;
      height: size-m(260);
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 50%;
      transform: translateY(-50%);
      position: absolute;
      background-color: #fff;
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
  name: 'section12',
  data() {
    return {
      isMobile,
      player: '',
      id: 'rYH3Tk4jeRg',
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
