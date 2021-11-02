<template>
  <div class="section1">
    <img src="./s1/top_bg.jpg" :alt="`${info.caseName}_bg-img`" class="bg-img" v-if="isPC">
    <Map :bgSrc="require('./s1/top_bg_m.jpg')" :hand="hand" v-if="isMobile"></Map>
    <img src="./s1/top_logo.png" :alt="`${info.caseName}_logo`" class="logo" data-aos="fade-up" data-aos-delay="200">
    <img src="./s1/top_title_1.png" :alt="`${info.caseName}_title_1`" class="title-1" data-aos="fade-up" data-aos-delay="400">
    <img src="./s1/top_title_2.png" :alt="`${info.caseName}_title_2`" class="title-2" data-aos="fade-up" data-aos-delay="600">
    
    <div class="video_box" v-if="!isMobile" @click="isDialog = true">
      <div :id="`youtube-player-${id}`" ref="player" class="video-ifame"></div>
    </div>

    <div class="isDialog" v-if="isMobile" @click="isDialog = true">
    </div>

    <div class="video video-dialog" v-if="isDialog && isMobile">
      <div class="mask" @click="isDialog = false"></div>
      <div class="video-bg">
        <div class="video_box">
          <iframe title="youtube" src="https://www.youtube.com/embed/yWsRBuYYhMc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <img class="close" @click="isDialog = false" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTP////Pw8PLx8fLw8PLw8PPx8fHx8fLy8vLw8PXr6/Zeio0AAAALdFJOUwADRMS156s3KfgaAiHMOAAAAXtJREFUSMeFlr9qwzAQxnVZajoVLRLZTEMfoBAadywIt11t/AAGETqGhOzGoS/g0r20D1qRxLYsS/oy5Y/uk+/ud/eFnRoWecmcfTzdhX+n/Tf763bhAyJ7Z4l+DErQfdkw+izS0AGutiZY6JeABK2q8/XHMo0JhCXooUqvb/wSXNfXwIVXwjxBOmj5JLiqhzCh5+WkQzVG0bGYlVOscytIvG0cCWq/JjGn7md6YJlNQ5LsefKZfjsHA+cL6QQwdpvZidDevZKx1uZCZJtZ3okauaBVOQeRDmM5uco9tR+b2nPgSgxcjG1023uRGDiYA3KRCAn0EkGBXkKoOjgHC8OFna6nFsVOrvPILBou2tgoGkw6TxemXHTRdWA4iB+AV6CHNGk2UkXS5DqPFgqWGjULthsBA5GzoS19tUDYSzA4Zpzjo7dEw4vGX4IFYjiIryC0xHxr8MbGHy1SuIo5WObQDjgwFApZEnF9tiRkatAWobFCa4bmDv4evP4DsmNwZSA8CfQAAAAASUVORK5CYII=" />
    </div>


    <img src="./s1/top_tree_single.png" :alt="`${info.caseName}_tree1`" class="tree1" data-aos="fade-up" data-aos-delay="800">
    <img src="./s1/top_tree_single.png" :alt="`${info.caseName}_tree2`" class="tree2" data-aos="fade-up" data-aos-delay="900">



    <h1 class="title-3" id="section1-1" data-aos="fade-up" data-aos-delay="200">
      九揚盧登堡
    </h1>
    <h1 class="desc" v-if="isPC" data-aos="fade-up" data-aos-delay="400">
      蘆洲首見17-33坪1-3房新藝術城堡宅，<br />
      距離捷運蘆洲站300米、坐落彩虹公園正對面，<br />
      繁華機能與馥郁美好輕鬆收藏入宅，<br />
      除此之外，還提供完美保固與貼心客變服務，在這裡您將遇見最美麗的成家景色。
    </h1>
    <h1 class="desc" v-if="isMobile" data-aos="fade-up" data-aos-delay="400">
      蘆洲首見17-33坪1-3房新藝術城堡宅，<br />
      距離捷運蘆洲站300米、坐落彩虹公園正對面，<br />
      繁華機能與馥郁美好輕鬆收藏入宅，<br />
      除此之外，還提供完美保固與貼心客變服務，<br />
      在這裡您將遇見最美麗的成家景色。
    </h1>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  // height: 100vh;
  // min-height: size(900);
  // max-height: size(1080);
  overflow: hidden;
  position: relative;
  background: #552e70 fixed;
  background-size: auto;
  z-index: 23;
}

.bg-img {
  width: 100%;
  // height: 100%;
  // min-height: size(900);
    position: relative;
  display: block;
  object-fit: cover;
  margin-top:34vw;

}

.video_box {
  width: size(1300);
  height: 38.2vw;
  top: 12vw;
  left: calc(50% - 50vw * 1300 / 1920);
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
.logo {
  @include img_l_pc(553, 50,300);
  // top: calc(50% - 9vw);
}

.title-1 {
 // @include img_c_pc(539, 387);
  @include img_r_pc(539, 60,300);
  // top: calc(50% - 9vw);
}

.title-2 {
 // @include img_c_pc(539, 466);
  @include img_r_pc(539, 160,300);
  // top: calc(50% - 9vw);
}

.tree1 {
  @include img_r_pc(439, 950, 787);
  animation: tree 4s ease-out infinite alternate;
  transform: skewX(2deg);
  transform-origin: 50% 100%;z-index: 3;
}

.tree2 {
  @include img_r_pc(610, 827, 96);
  animation: tree 4s ease-out infinite alternate;
  transform: skewX(2deg);
  transform-origin: 50% 100%;z-index: 3;
}

.title-3 {
  @include img_c_pc(280, 466);
  top: auto;
  bottom: size(844);
  font-size: size(51.8);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.97;
  letter-spacing: 0.1em;
  text-align: center;
  color: #542e71;
  white-space: nowrap;
}

.desc {
  @include img_c_pc(592, 450);
  top: auto;
  bottom: size(680);
  //text-shadow: 0 0 6px #061247,0 0 4px #061247;
  font-size: size(18);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: 0.06em;
  text-align: center;
  color: #542e71;
  white-space: nowrap;
}

@keyframes tree {
  to {
    transform: skewX(-2deg);
  }
}

.swipe-fade-leave-to {
  opacity: 0;
  z-index: 0;
}
// end
.swipe-fade-enter {
  opacity: 0;
  z-index: 1;
}

.swipe-fade-enter-active {
  transition: all 0.5s ease;
}

.swipe-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
/*
.t1 {
  width: size(751);
  top: size(483);
  left: size(585);
}

.t2 {
  width: size(751);
  top: size(711);
  left: size(585);
}
*/
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
  .section1 {
    width: 100vw;
    height: sizem(1232);
    min-height: sizem(604);
    // max-height: sizem(750);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
    background: transparent;
  }
  .logo {
    @include img_c_m(291, 61);
    // top: calc(50% - 9vw);
  }

  .title-1 {
    @include img_c_m(279, 162);
    // top: calc(50% - 9vw);
  }

  .title-2 {
    @include img_c_m(287, 203);
    // top: calc(50% - 9vw);
  }

  .tree1 {
    @include img_l_m(280, 440,0);
    // top: auto;
    // bottom: 0;
    animation: tree 4s ease-out infinite alternate;
    transform: skewX(2deg);
    transform-origin: 50% 100%;
  }

  .tree2 {
    display: none;
  }

  .title-3 {
    @include img_c_m(184, 719);
    // top: auto;
    bottom: auto;
    font-size: sizem(34);
  }

  .desc {
    @include img_c_m(296, 773);
    // top: auto;
    bottom: auto;
    text-shadow: 0 0 6px #fff;
    font-size: sizem(13);
  }

  .isDialog {
    width: 100%;
    position: absolute;
    height:sizem(199);
    top:sizem(270);
    left: 0;
    background: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 60 60' xml:space='preserve'%3E%3Ccircle fill='%23552E70' cx='30' cy='30' r='30'/%3E%3Cpolygon fill='%23FFF' points='21.6,15.3 44.4,30 21.6,44.7 '/%3E%3C/svg%3E") no-repeat center,url('./s1/vbg.jpg');
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
    height: calc(100% + 200px * 2);
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
import info from '@/info'
import Map from '@/components/Map.vue'
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      hand: require('./s1/m_2_mobile_hand.png'),
      player: '',
      id: 'yWsRBuYYhMc',
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
