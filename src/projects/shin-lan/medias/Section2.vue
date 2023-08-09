<template>
  <div class="section2">
    <div class="container container1">
      <transition-group class="item-list flex" name="slide-fade" mode="out-in" tag="div">
        <div v-scroll-to="{ element: `#container2` }" class="item" v-for="(item) in current_media_list" :key="item.title + item.index" @click="handlePlay(item.index);isDialog=true">
          <img :src="item.img" alt="" class="video-img">
          <div class="video-contant">
            <div class="video-title" v-html="item.title"></div>
            <div class="video-hr"></div>
            <div class="video-desc" v-html="item.desc"></div>
          </div>
        </div>
      </transition-group>
        <div class="arrow-left" @click="prevPage" v-if="isMobile"></div>
        <div class="arrow-right" @click="nextPage" v-if="isMobile"></div>
      <div class="head flex-c">
        <div class="pages flex-ac" v-if="isPC">
          <div class="page-btn flex-c" v-for="(page, index) in pages" :key="`page-btn-${index}`" @click="changePage(index)">
            <span :class="`${pageIndex === index ? 'active' : ''}`"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="container container2" id="container2" v-if="isPC">
      <div class="video_box">
        <div :id="`youtube-player-${id}`" ref="player" class="video-ifame"></div>
        <div class="video-title" v-html="media_list[media_index].title"></div>
        <div class="video-hr"></div>
        <div class="video-desc" v-html="media_list[media_index].desc"></div>
      </div>
    </div>
    <!-- <div class="isDialog" v-if="isMobile" @click="isDialog = true">
    </div> -->
    <div class="video video-dialog" v-if="isDialog && isMobile">
      <div class="mask" @click="isDialog = false"></div>
      <div class="video-bg">
        <div class="video_box">
          <iframe title="youtube" :src="`https://www.youtube.com/embed/${id}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <img class="close" @click="isDialog = false" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTP////Pw8PLx8fLw8PLw8PPx8fHx8fLy8vLw8PXr6/Zeio0AAAALdFJOUwADRMS156s3KfgaAiHMOAAAAXtJREFUSMeFlr9qwzAQxnVZajoVLRLZTEMfoBAadywIt11t/AAGETqGhOzGoS/g0r20D1qRxLYsS/oy5Y/uk+/ud/eFnRoWecmcfTzdhX+n/Tf763bhAyJ7Z4l+DErQfdkw+izS0AGutiZY6JeABK2q8/XHMo0JhCXooUqvb/wSXNfXwIVXwjxBOmj5JLiqhzCh5+WkQzVG0bGYlVOscytIvG0cCWq/JjGn7md6YJlNQ5LsefKZfjsHA+cL6QQwdpvZidDevZKx1uZCZJtZ3okauaBVOQeRDmM5uco9tR+b2nPgSgxcjG1023uRGDiYA3KRCAn0EkGBXkKoOjgHC8OFna6nFsVOrvPILBou2tgoGkw6TxemXHTRdWA4iB+AV6CHNGk2UkXS5DqPFgqWGjULthsBA5GzoS19tUDYSzA4Zpzjo7dEw4vGX4IFYjiIryC0xHxr8MbGHy1SuIo5WObQDjgwFApZEnF9tiRkatAWobFCa4bmDv4evP4DsmNwZSA8CfQAAAAASUVORK5CYII=" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
// begin
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  // margin-top: 50px !important;
  opacity: 0;
}
// end
.slide-fade-enter {
  margin-left: 10px !important;
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}

.section2 {
  width: 100%;
  // height: size(715);
  position: relative;
  margin: 0;
  // background: url('s1/bg.jpg') center;
  background-size: cover;
  overflow: hidden;
  text-align: center;
  // background-color: rgba(17, 17, 3, 0.11);

  // 手機版
  @include md {
    // height: 100vh;
    // height: size(604);
    // min-height: calc(604 * 100vw / 375);
    // max-height: calc(812 * 100vw / 375);
  }
}

.container {
  width: size(1240);
  min-height: size(680);
  margin: size(53) auto;
  position: relative;

  @include md {
    width: sizem(310);
    margin: sizem(80) auto;
  }
}

.container1 {
  margin-top: size(160);
}

.item-list {
  width: 100%;
}

.item {
  width: 50%;
  cursor: pointer;
  position: relative;
  padding: 0 0 2em ;
  &::before{content:"";position: absolute;
  top: 0;left: 0;
    width: 100%;
    height:100%;
    border-radius: 50%;
    background: #0362 ;
    transform:scale(0);
    transition: transform 0.3s,border-radius 0.2s 0.2s;}
  &::after{content:"";position: absolute;
  top: calc(35% - 1.5em);left: calc(50% - 1.5em);
    width: 3em;
    height:3em;
    background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none' stroke='%23FFF' stroke-width='.8' stroke-linejoin='round'%3E%3Cpolygon class='st0' points='14.9,10 7.1,14.5 7.1,5.5'/%3E%3Ccircle class='st1' cx='10' cy='10' r='9'/%3E%3C/svg%3E");
    background-size: 100% auto;
    transform:scale(0);
    transition: transform 0.5s 0.1s,border-radius 0.5s 0.3s;}

  &:hover{
    
  &::before,
  &::after{
    border-radius: 0%;
    transform:scale(1);
    }
  }

  @include md {
    width: 100%;
  }
}

.video-img {
  width: 100%;
  height: size(330);
  @include md {
    height: sizem(165);
  }
}

.container2 {
  height: size(880);
}

.video_box {
  width: 100%;
  height: size(698);
  top: 0;
  left: 0;
  position: absolute;
  z-index: 3;
  // overflow: hidden;
  opacity: 0;
  cursor: pointer;
  animation: op 1s 3s ease-out forwards;
}
@keyframes op {
  to {
    opacity: 1;
  }
}

.video-contant{
  padding: size(0) size(15);
  @include md {
  padding: 0;
  }
}

.video-title {
  font-size: size(28);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: size(1.4);
  text-align: left;
  color: #000;
  margin-top: size(25);
  @include md {
    margin: sizem(25) auto sizem(0);
    font-size: sizem(18);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.39;
    letter-spacing: normal;
    text-align: center;
    color: #000;
    width: sizem(170);
  }
}

.video-hr {
  margin: size(10) 0 size(10);
  width: size(35);
  border-bottom: 1px solid #000;
  @include md {
    margin: sizem(10) auto;
    width: sizem(70);
  }
}

.video-desc {
  width: 100%;
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: size(1.44);
  text-align: left;
  color: #000;

  @include md {
    width: 100%;
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
}

.pages {
  margin: size(20) auto;
  line-height: 1.2;
  text-align: right;
  font-size: size(15);
}

.page-btn {
  margin: 0 0;
  cursor: pointer;
  z-index: 4;
  font-size: size(15);

  span {
    display: block;
  width: 2em;
  height: 2em;
    // border-radius: 20px;
    // box-shadow: 0 0 0 1px #000;
    position: relative;
  color: #333;
    transition: color 0.3s;
  background: none;
  border-radius: 0;
  &::before{
    content: "";
    width: 50%;
    height:50%;
    background: currentColor;
    display: block;position: relative;
    top: 25%;left: 25%;

  }
  &::after{
    content: "";
    width: 50%;
    height:50%;
    background: #b18863;
    display: block;position: absolute;
    top: 25%;left: 25%;
    border-radius: 50%;
    transform:scale(0);
    transition: transform 0.3s,border-radius 0.2s 0.2s;

    }
  &.active {
  &::after{
    border-radius: 0%;
    transform:scale(1);
    }
  }
  &:hover{
  color: #666;}
  }
}

.mask {
  @include md {
  }
  @include img_c_pc(1920, 0);
  top: auto;
  bottom: size(-245);
  z-index: 8;
}

.arrow-left, .arrow-right {
  @include img_l_m(60,200, 0);
  height: 25px;
 // background-color: rgba(0, 0, 0, .5);
  &::before{
    content: "";
    position: relative;
    left: 20%;
    border: 1px solid #666;
    border-width: 0 0 1px 1px;
    width: 50%;display: block;
    height: 40%;
    transform:skewX(-45deg);

  }
}

.arrow-left{
  left: 0
}
.arrow-right {
  
  left: auto;right: 0;transform: scaleX(-1)
}

@media screen and (max-width: 767px) {
  .isDialog {
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
  }
  .mask {
    width: 100%;
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background: #000 no-repeat center;
    background-size: size-m(50);
    opacity: 0.5;
  }
  .video_box {
    width: 100%;
    position: fixed;height: 100%;
    top: 0;
    left: 0;
    z-index: 5;

    iframe {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
    }
  }
  .video-bg {
    width: 100%;
    position: fixed;
    height: size-m(212);
    overflow: hidden;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    z-index: 5;
    background-color: #000;
  }
  .close {
    position: fixed;
    cursor: pointer;
    right: 15px;
    top: calc(50% - 47vw);
    width: size-m(30);
    z-index: 100;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import { medias } from '@/info/shin-lan'
import _ from 'lodash'

export default {
  name: 'section2',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      pageIndex: 0,
      count: 2,
      media_list: [...medias],
      // blockIndex: 0,
      player: '',
      isDialog: false,
      media_index: 0,
    }
  },
  computed: {
    total() {
      return this.media_list.length
    },
    totalPage() {
      return (
        Math.floor(this.total / this.count) +
          (this.total % this.count > 0 ? 1 : 0) || 1
      )
    },
    current_media_list() {
      return this.media_list.slice(
        this.pageIndex * this.count,
        this.count * (this.pageIndex + 1),
      )
    },
    pages() {
      return _.range(1, this.totalPage + 1)
    },

    id() {
      return this.media_list[this.media_index].id
    },
  },

  methods: {
    init() {
      this.pageIndex = 0
      if (this.isPC) {
        this.count = 2
      } else {
        this.count = 1
      }
    },
    changePage(index) {
      this.pageIndex = index
    },

    nextPage() {
      this.pageIndex =
        this.pageIndex === this.total - 1 ? 0 : this.pageIndex + 1
    },

    prevPage() {
      this.pageIndex =
        this.pageIndex === 0 ? this.total - 1 : this.pageIndex - 1
    },

    handlePlay(index) {
      this.media_index = index
      if (this.isPC) {
        this.player.loadVideoById(this.id)
      }
    },

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

  mounted() {
    this.init()
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

  watch: {},

  created() {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
  },
}
</script>
