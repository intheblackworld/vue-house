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
    <div class="video_box">
      <div v-if="!isMobile" :id="`youtube-player-${id}`" ref="player" class="video-ifame"></div>
    </div>
    <img src="./s12/madia_flower_2.png" :alt="`${info.caseName}_f3`" class="f12">
    <img src="./s12/madia_flower_1.png" :alt="`${info.caseName}_f3`" class="f13">
    <img src="./s12/player_icon.png" alt="" class="play-btn" v-if="isMobile" @click="isDialog = true">
    <div class="video" v-if="isDialog && isMobile">
      <div class="video_box_dialog">
        <iframe title="youtube" src="https://www.youtube.com/embed/ay9pp7TRauo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <img class="close" @click="isDialog = false" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTP////Pw8PLx8fLw8PLw8PPx8fHx8fLy8vLw8PXr6/Zeio0AAAALdFJOUwADRMS156s3KfgaAiHMOAAAAXtJREFUSMeFlr9qwzAQxnVZajoVLRLZTEMfoBAadywIt11t/AAGETqGhOzGoS/g0r20D1qRxLYsS/oy5Y/uk+/ud/eFnRoWecmcfTzdhX+n/Tf763bhAyJ7Z4l+DErQfdkw+izS0AGutiZY6JeABK2q8/XHMo0JhCXooUqvb/wSXNfXwIVXwjxBOmj5JLiqhzCh5+WkQzVG0bGYlVOscytIvG0cCWq/JjGn7md6YJlNQ5LsefKZfjsHA+cL6QQwdpvZidDevZKx1uZCZJtZ3okauaBVOQeRDmM5uco9tR+b2nPgSgxcjG1023uRGDiYA3KRCAn0EkGBXkKoOjgHC8OFna6nFsVOrvPILBou2tgoGkw6TxemXHTRdWA4iB+AV6CHNGk2UkXS5DqPFgqWGjULthsBA5GzoS19tUDYSzA4Zpzjo7dEw4vGX4IFYjiIryC0xHxr8MbGHy1SuIo5WObQDjgwFApZEnF9tiRkatAWobFCa4bmDv4evP4DsmNwZSA8CfQAAAAASUVORK5CYII=" />
    </div>
    <h3 class="title" data-aos="fade-up" data-aos-delay="200">
      新聞報導
    </h3>
    <div class="line" data-aos="zoom-in-right" data-aos-delay="200"></div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- <div class="content"> -->
      <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.img" class="item">
        <a :href="slide.link" target="_blank">
          <img :src="slide.src" :class="`item-img`" />
          <div class="item-title" v-html="slide.title"></div>
          <div class="item-desc" v-html="slide.desc"></div>
        </a>
      </swiper-slide>
      <!-- </div> -->
      <div class="swiper-pagination" slot="pagination" v-if="isMobile"></div>
      <div class="swiper-button-prev" slot="button-prev">
        <img src="./all/prev-btn.png" alt />
      </div>
      <div class="swiper-button-next" slot="button-next">
        <img src="./all/next-btn.png" alt />
      </div>
    </swiper>

    <!-- div class="line-bg" data-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAQAAADYv8WvAAAADUlEQVQIHWNkSGOAAAADRABoDg6qmwAAAABJRU5ErkJggg=="></div -->
  </div>
</template>
<style lang="scss">
@import '@/assets/style/function.scss';
.video-ifame {
  width: 100.5%;
  height: 100.5%;
  position: absolute;
  top: 0;
  left: 0;
}
.swiper-pagination-bullet {
  background-color: transparent;
  box-shadow: inset 0 0 0 1px #fff;
  width: 15px;
  height: 15px;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background-color: #fff;
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section12 {
  // height: 100vh;
  overflow: hidden;
  // position: relative;
  height: size(907 + 893);
  background-size: cover;
  // margin: size(-125) 0  0 0;
  // &::after {
  //   content: '';
  //   display: block;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   z-index: 1;
  // }
}
.video_box {
  @include div_c_pc(1920, 907, 0);
  background: #000 url('./s12/news_img.jpg') no-repeat center;
  position: absolute;
  z-index: 2;
  left: 0;
  overflow: hidden;

  iframe {
    opacity: 0;
    animation: op 1s 3s ease-out forwards;
  }
}
@keyframes op {
  to {
    opacity: 1;
  }
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
.title {
  @include img_l_pc(300, 215 + 907, 240);
  font-size: size(73);
  font-weight: 400;
  color: #fff;
  white-space: nowrap;
}

.line {
  @include div_l_pc(1136, 5, 257 + 907, 560);
  background-color: #fff;
}
.swiper-container {
  @include div_c_pc(472 * 3 + 21 * 2, 480, 312 + 907);
  // overflow: visible;

  a {
    display: block;
    width: size(472);
    height: 100%;
    text-decoration: none;
    background-color: #d67f76;
  }

  .item-title {
    width: size(472);
    height: size(39);
    margin-top: size(15);
    font-size: size(24);
    line-height: 1.6;
    color: #c07f76;
    text-align: left;
    padding-left: size(10);
    background-color: #fff;
    text-decoration: none;
  }

  .item-desc {
    width: size(472);
    margin-top: size(10);
    font-size: size(24);
    line-height: 1.3;
    color: #000;
    text-align: left;
    padding-left: 0;
  }
}

.item-img {
  width: size(472);
  margin: 0 auto;
}

.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  left: size(-50);
}

.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  right: size(-50);
}

.swiper-button-prev,
.swiper-button-next {
  top: 33%;
}

.f12 {
  @include img_l_pc(588, -200, -70);
  transform-origin: 0% 90%;
  transform: skewY(2deg);
  z-index: 5;
  animation: flow1 4s 0s ease-in-out infinite alternate;
}

.f13 {
  @include img_r_pc(786, 590, -100);
  transform-origin: 100% 80%;
  transform: skewY(2deg);
  z-index: 5;
  animation: flow1 3s 0s ease-in-out infinite alternate;
}
@keyframes flow1 {
  to {
    transform: skewY(0);
  }
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
  .section12 {
    margin: 0 0 0 0;
    overflow: hidden;
    width: 100vw;
    height: sizem(177 + 381);
    min-height: sizem(177 + 381);
    max-height: sizem(177 + 381);
    // margin-top: sizem(-60);
  }

  .video_box {
    width: 100%;
    position: absolute;
    height: size-m(170);
    background: #000 url('./s12/news_img.jpg') no-repeat center;
    background-size: cover;
    // top: 50%;
    // transform: translateY(-50%);
    // left: 0;
    // overflow: hidden;
    // height: size(910);
    opacity: 1;
    // animation: op 1s 3s ease-out forwards;
  }

  .video_box_dialog {
    width: 100%;
    position: absolute;
    height: size-m(260);
    background: #000 url('./s12/news_img.jpg') no-repeat center;
    background-size: cover;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    overflow: hidden;
    // height: size(910);
    opacity: 1;
    // animation: op 1s 3s ease-out forwards;
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

  .title {
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
    @include img_c_m(32, 80);
    cursor: pointer;
    z-index: 3;
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
      width: 100vw;
      height: size-m(260);
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
      top: 50px;
      width: size-m(30);
    }
  }

  .title {
    @include img_l_m(108, 177 + 44, 35);
    font-size: sizem(30);
    font-weight: 400;
    color: #fff;
    white-space: nowrap;
  }

  .line {
    @include div_l_m(186, 3, 59 + 177, 154);
    background-color: #fff;
  }
  .swiper-container {
    @include div_c_m(375, 280, 177 + 98);
    // overflow: visible;

    .item {
      top: 0;
    }

    a {
      display: block;
      width: 90%;
      height: 100%;
      margin: 0 auto;
      text-decoration: none;
    }

    .item-title {
      width: sizem(304);
      height: sizem(25);
      margin: 0 auto;
      margin-top: sizem(10);
      font-size: sizem(14);
      line-height: 1.6;
      color: #c07f76;
      text-align: left;
      padding-left: sizem(6);
      background-color: #fff;
    }

    .item-desc {
      width: sizem(304);
      margin: 0 auto;
      margin-top: sizem(10);
      font-size: sizem(12);
      line-height: 1.3;
      color: #000;
      text-align: left;
      padding-left: 0;
    }
  }

  .item-img {
    width: sizem(304);
    margin: 0 auto;
  }

  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    left: size(0);
  }

  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: size(0);
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: 40%;
    z-index: 10;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
import info from '@/info'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section12',
  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
    // Parallax,
  },
  data() {
    return {
      isMobile,
      info,
      player: '',
      id: 'ay9pp7TRauo',
      isDialog: false,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 3,
        centeredSlides: true,
        spaceBetween: isMobile ? 15 : 30,
        slidesPerColumn: isMobile ? 1 : 1,

        // autoplay: {
        //   delay: 30000,
        //   disableOnInteraction: true,
        // },
        effect: isMobile ? 'fade' : '',
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },

      slideList: [
        {
          src: require('./s12/news_img_1.jpg'),
          title: '中時新聞',
          link: 'https://house.chinatimes.com/20210330002195-264401',
          desc: '沅利建設攜手日本國土開發營造商，推出40年代表作「自慢藏」...',
        },
        {
          src: require('./s12/news_img_2.jpg'),
          title: '蘋果新聞',
          link:
            'https://tw.feature.appledaily.com/house/homenews/article/212375?utm_source=line&utm_medium=messenger&utm_campaign=house_article_share&utm_content=share_link',
          desc:
            '成立40年的老字號建設公司沅利建設，在台北市有不少經典業績作品...',
        },
        {
          src: require('./s12/news_img_3.jpg'),
          title: '聯合新聞',
          link: 'https://house.udn.com/house/story/11132/5356658',
          desc:
            '台北城南人文薈萃，擁有豐富的人文地景與歷史文化，捷運帶來交通上的便利...',
        },
      ],
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