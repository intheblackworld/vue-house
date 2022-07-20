<template>
  <div class="section7">
      <div class="txt">
      <h3 class="title" data-aos="zoom-in" data-aos-delay="200">祖父母節影片_宣傳</h3>
      </div>
    <div class="video_box" v-if="!isMobile" @click="isDialog = true">
      <div :id="`youtube-player-${id}`" ref="player" class="video-ifame"></div>
    </div>

    <div class="isDialog" v-if="isMobile" @click="isDialog = true">
    </div>

    <div class="video video-dialog" v-if="isDialog && isMobile">
      <div class="mask" @click="isDialog = false"></div>
      <div class="video-bg">
        <div class="video_box">
          <iframe title="youtube" src="https://www.youtube.com/embed/0LkS_wNIyQo?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <img class="close" @click="isDialog = false" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTP////Pw8PLx8fLw8PLw8PPx8fHx8fLy8vLw8PXr6/Zeio0AAAALdFJOUwADRMS156s3KfgaAiHMOAAAAXtJREFUSMeFlr9qwzAQxnVZajoVLRLZTEMfoBAadywIt11t/AAGETqGhOzGoS/g0r20D1qRxLYsS/oy5Y/uk+/ud/eFnRoWecmcfTzdhX+n/Tf763bhAyJ7Z4l+DErQfdkw+izS0AGutiZY6JeABK2q8/XHMo0JhCXooUqvb/wSXNfXwIVXwjxBOmj5JLiqhzCh5+WkQzVG0bGYlVOscytIvG0cCWq/JjGn7md6YJlNQ5LsefKZfjsHA+cL6QQwdpvZidDevZKx1uZCZJtZ3okauaBVOQeRDmM5uco9tR+b2nPgSgxcjG1023uRGDiYA3KRCAn0EkGBXkKoOjgHC8OFna6nFsVOrvPILBou2tgoGkw6TxemXHTRdWA4iB+AV6CHNGk2UkXS5DqPFgqWGjULthsBA5GzoS19tUDYSzA4Zpzjo7dEw4vGX4IFYjiIryC0xHxr8MbGHy1SuIo5WObQDjgwFApZEnF9tiRkatAWobFCa4bmDv4evP4DsmNwZSA8CfQAAAAASUVORK5CYII=" />
    </div>

  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width:100%;
  overflow: hidden;
  position: relative;
  background-size: auto;
  padding: 4vw 0 6vw 0;
  background: #bacf0099 ;
  &::after{content: "";clear: both;display: block;height: 1px;}
}
.txt{
  position: relative;
  width: size(1500);
  margin: 0 auto 1em auto;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  font-size: size(19);
  font-weight: 600;
  line-height: 1.4;
  z-index: 3;

.title{
  font-size:2.3em;
  margin:0 auto 0;
  font-weight: 900;
  color: #222;
}
}

.video_box {
  width: size(1300);
  height: 38.2vw;
  margin: auto;
 // top: 67vw;
 // left: calc(50% - 50vw * 1300 / 1920);
  z-index: 3;
  overflow: hidden;
}

@media screen and (max-width: 767px) {
  .txt{
    position: relative;
    width: sizem(320);
    margin:1.5em auto 1em;
    left:0;
    top:0;
    font-size: sizem(14);
    .title{
      font-size:1.5em;
    }
  }
  .isDialog {
    width: 100%;
    height:sizem(199);
    top:sizem(604);
    left: 0;
    background: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 60 60' xml:space='preserve'%3E%3Ccircle fill='%23C00' cx='30' cy='30' r='30'/%3E%3Cpolygon fill='%23FFF' points='21.6,15.3 44.4,30 21.6,44.7 '/%3E%3C/svg%3E") no-repeat center,url('./s6/v.jpg');
    background-size:10vw auto, cover;
  }
  .mask {
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background: #000  no-repeat center url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin: auto;display: block; shape-rendering: auto;' width='200px' height='200px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'%3E%3Cg transform='rotate(0 50 50)'%3E%3Crect x='49' y='30' rx='0' ry='0' width='2' height='12' fill='%23ffffff'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.9166666666666666s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(30 50 50)'%3E%3Crect x='49' y='30' rx='0' ry='0' width='2' height='12' fill='%23ffffff'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.8333333333333334s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(60 50 50)'%3E%3Crect x='49' y='30' rx='0' ry='0' width='2' height='12' fill='%23ffffff'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.75s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(90 50 50)'%3E%3Crect x='49' y='30' rx='0' ry='0' width='2' height='12' fill='%23ffffff'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.6666666666666666s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(120 50 50)'%3E%3Crect x='49' y='30' rx='0' ry='0' width='2' height='12' fill='%23ffffff'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.5833333333333334s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(150 50 50)'%3E%3Crect x='49' y='30' rx='0' ry='0' width='2' height='12' fill='%23ffffff'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.5s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(180 50 50)'%3E%3Crect x='49' y='30' rx='0' ry='0' width='2' height='12' fill='%23ffffff'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.4166666666666667s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(210 50 50)'%3E%3Crect x='49' y='30' rx='0' ry='0' width='2' height='12' fill='%23ffffff'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.3333333333333333s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(240 50 50)'%3E%3Crect x='49' y='30' rx='0' ry='0' width='2' height='12' fill='%23ffffff'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.25s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(270 50 50)'%3E%3Crect x='49' y='30' rx='0' ry='0' width='2' height='12' fill='%23ffffff'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.16666666666666666s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(300 50 50)'%3E%3Crect x='49' y='30' rx='0' ry='0' width='2' height='12' fill='%23ffffff'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.08333333333333333s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(330 50 50)'%3E%3Crect x='49' y='30' rx='0' ry='0' width='2' height='12' fill='%23ffffff'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='0s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3C/svg%3E");
    background-size: size-m(150);
    opacity: 0.5;
  }
  .video_box {
    width: 100%;
    position: absolute;
    height: 100%;
    top:0;
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
 .play-btn {
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
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section7',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      player: '',
      id: '0LkS_wNIyQo',
      isDialog: false,
    }
  },

  components: {
    Map,
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
          autoplay: 0,
          loop: 1,
          controls: 1,
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
         // window.onYouTubeIframeAPIReady = this.loadVideo
          this.loadVideo()
        } else {
          this.loadVideo()
        }
      }
    }, 2500)
  },

  computed: {},
}
</script>
