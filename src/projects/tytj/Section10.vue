<template>
  <div class="section10">
    <div v-if="!isMobile">
      <div class="flex-jc flex-ab">
        <img
          :src="imgList[imgIndex].img"
          alt="聯上海棠"
          class="highlight-img"
        >
        <div class="content relative">
          <div class="text">
            <h3 class="subtitle" data-aos="fade" data-aos-delay="400">【品牌‧上市上櫃】</h3>
            <h3 class="title" data-aos="fade" data-aos-delay="600">聯上建築，即將為您開啟<br />無價海洋新視野</h3>
            <div class="info" data-aos="fade" data-aos-delay="800">
              聯上建築為全台唯一同時擁有<br />上市(代號：2537)上櫃(代號：4113)的建設品牌
            </div>
            <h3 class="desc" data-aos="fade" data-aos-delay="1000">聯上作品優質榮獲國內外大獎肯定：連續3年獲中華民國建築金石首獎，是全國少數的白金石首獎得主；2010年在天母推出豪宅案「聯上聽瀑」，一推出即獲得亮麗成績，在台北市房市成功插旗，讓高雄出發的聯上建築團隊，品牌能見度擴及至大台北地區，甚至於是全台。</h3>
          </div>
          <img
            v-lazy="require('./s10/img.png')"
            alt="聯上海棠"
            class="painting absolute"
          >

          <img
            v-lazy="require('./s10/lo.png')"
            alt="聯上海棠"
            class="logo absolute"
          >

          <div class="img-row flex absolute">
            <div
              @mouseenter="imgIndex = index"
              v-for="(img, index) in imgList"
              :key="img.img"
            >
              <div class="img">
                <img
                  alt="聯上海棠"
                  :src="img.img"
                >
              </div>
              <div class="img-title">{{img.title}}</div>
              <div class="img-desc">{{img.desc}}</div>
            </div>

          </div>
        </div>
      </div>

    </div>
    <div class="flex animate-row">
      <img
        v-lazy="require('./s8/wave.png')"
        alt="聯上海棠"
        class="wave"
      >
      <img
        v-lazy="require('./s8/wave.png')"
        alt="聯上海棠"
        class="wave"
      >
    </div>
    <div class="flex animate-row animate-row1">
      <img
        v-lazy="require('./s8/wave.png')"
        alt="聯上海棠"
        class="wave"
      >
      <img
        v-lazy="require('./s8/wave.png')"
        alt="聯上海棠"
        class="wave"
      >
    </div>
    <div v-if="isMobile" class="index_z">
      <carousel-3d
        ref="mycarousel"
        :width="imgWidth"
        :height="imgHeight"
        :perspective="0"
        :disable3d="isMobile ? false : false"
        :border="0"
        :display="isMobile ? 3 : 3"
        :space="isMobile ? 'auto' : 'auto'"
        @after-slide-change="onAfterSlideChange"
      >
        <slide
          v-for="(img, index) in imgList"
          :index="index"
          :key="img.img"
          class="img-slide"
        >
          <img
            :src="img.img"
            :class="`img absolute`"
          />
        </slide>
      </carousel-3d>
      <div class="img-title">{{imgList[imgIndex].title}}</div>
      <div class="img-desc">{{imgList[imgIndex].desc}}</div>
      <div class="text">
        <h3 class="subtitle">【品牌‧上市上櫃】</h3>
        <h3 class="title">聯上建築，即將為您開啟<br />無價海洋新視野</h3>
        <div class="info">
          聯上建築為全台唯一同時擁有<br />上市(代號：2537)上櫃(代號：4113)的建設品牌
        </div>
        <h3 class="desc">聯上作品優質榮獲國內外大獎肯定：連續3年獲中華民國建築金石首獎，是全國少數的白金石首獎得主；2010年在天母推出豪宅案「聯上聽瀑」，一推出即獲得亮麗成績，在台北市房市成功插旗，讓高雄出發的聯上建築團隊，品牌能見度擴及至大台北地區，甚至於是全台。</h3>
      </div>
      <img
        src="./mo/plus.png"
        alt="聯上海棠"
        class="add"
        @click="isDialog = true"
      >

      <div class="flex-c bottom-p">
        <img
          src="./s10/lo.png"
          alt="聯上海棠"
          class="logo"
        >
        <img
          src="./s10/img.png"
          alt="聯上海棠"
          class="painting"
        >
      </div>
    </div>
    <div
      class="dialog"
      v-show="isDialog"
          @click="isDialog = false"
    >
      <div class="dialog-content">
        <img
          class="close"
          @click="isDialog = false"
          src="./mo/close.png"
          alt="聯上海棠"
        >
        <h3 class="subtitle">【品牌‧上市上櫃】</h3>
        <h3 class="title">聯上建築，即將為您開啟<br />無價海洋新視野</h3>
        <div class="info">
          聯上建築為全台唯一同時擁有<br />上市(代號：2537)上櫃(代號：4113)<br />的建設品牌
        </div>
        <h3 class="desc">聯上作品優質榮獲國內外大獎肯定：連續3年獲中華民國建築金石首獎，是全國少數的白金石首獎得主；2010年在天母推出豪宅案「聯上聽瀑」，一推出即獲得亮麗成績，在台北市房市成功插旗，讓高雄出發的聯上建築團隊，品牌能見度擴及至大台北地區，甚至於是全台。</h3>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section10 {
  // height: 100vh;
  // overflow: hidden;
  position: relative;
  height:calc(100vh + 18vw);
  background: #fff;
//  z-index: 1;
 // margin: 0 0 -18vw 0;
}

.highlight-img {
  display: block;
  object-fit: cover;
  width: size(560);
  margin-right: 16px;
  margin-top: size(-50);
}

.content {
  width: size(1104);
  height: size(800);
  padding-top: size(70);
}

.text {
  width: size(662);
  margin: 0 auto;
}
.title {
  font-size: size(41);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: 2.46px;
  text-align: left;
  color: #595757;
  transform: scaleX(0.93);
}

.subtitle {
  font-size: size(24);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.33;
  letter-spacing: 2.88px;
  text-align: left;
  color: #595757;
  transform: scaleX(0.93);
}

.info {
  font-size: size(22);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1.45px;
  text-align: left;
  color: #595757;
  transform: scaleX(0.93);
}

.desc {
  font-size: size(12);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.1;
  letter-spacing: 1.08px;
  text-align: left;
  color: #595757;
  transform: scaleX(0.93);
}

.logo {
  top: size(150);
  right: size(170);
}

.painting {
  top: size(440);
  right: size(120);
}

.img-row {
  width: 100%;
  bottom: size(-105);
  .img {
    display: block;
    height: size(200);
    margin: 0 4px;
    position: relative;
    cursor: pointer;
    img {
      width: 100%;
    }
    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border: 1px solid #d0a100;
      z-index: 2;
      top: 0;
      left: 0;
      opacity: 0;
      transition: all 0.3s;
    }
    &:hover::before {
      opacity: 1;
      transform: translate(-5px, -8px);
    }
  }

  .img-title {
    font-size: size(20);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height:1.6;
    letter-spacing: 0.23px;
    text-align: center;
    color: #595757;
    transform: scaleX(0.93);
    margin: 0.5em 0 0 0;
  }

  .img-desc {
    font-size: size(12);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height:1.6;
    letter-spacing: 0.23px;
    text-align: center;
    color: #595757;
    transform: scaleX(0.93);
  }
}

.animate-row {
  width: 200vw;
  animation: moving 30s linear infinite;
  position: absolute;
  bottom: size(0);
  z-index: 1;

  img {
    width: 100%;
    height: size(379);

    &:nth-child(2) {
      // margin-left: -0.1%;
    }
  }
  &.animate-row1 {
    animation: moving 15s linear infinite;
  }

  &.animate-row2 {
    bottom: size(260);
    animation: moving 20s linear infinite;

    img {
      height: size(79);
    }
    // animation-delay: 5s;
  }
}

@keyframes moving {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0) scaleY(1);
  }
  50% {
    -webkit-transform: translateX(0);
    transform: translateX(-25%) scaleY(0.5);
  }

  to {
    -webkit-transform: translateX(-100vw);
    transform: translateX(-50%) scaleY(1);
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
  .section10 {
    height: auto;
  }
.index_z{z-index: 2;position: relative;}
  .text {
    width: size-m(298);
    margin: 0 auto;
    height: size-m(120);
    overflow: hidden;
  }

  .add {
    width: size-m(20);
    // padding: 20px;
    margin-top: 10px;
    position: relative;
    z-index: 10;
  }

  .logo {
    width: size-m(75);
  }

  .painting {
    width: size-m(237);
  }

  .bottom-p {
    margin-bottom: 30px;
  }

  .dialog {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;

    .slide-content {
      left: 0;
    }

    .dialog-content {
      background-color: #fff;
      width: size-m(313);
      height:auto;
      position: relative;
      padding: size-m(15);

      .title,
      .subtitle,
      .info,
      .desc {
        white-space: normal;
        text-align: left;
      }
    }

    .close {
      width: 16px;
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
      .subtitle {
        font-size: size-m(13);
      }
      .title {
        font-size: size-m(20);
        margin-bottom: 15px;
      }

      .info {
        font-size: size-m(13);
      }

      .desc {
        font-size: size-m(13);
      }

  .img-slide {
    &.current {
      img {
        opacity: 1;
      }
    }
    img {
      opacity: 0.5;
    }
  }
  .img-title {
    font-size: size-m(30);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.24px;
    text-align: center;
    color: #595757;
    transform: scaleX(0.93);
  }

  .img-desc {
    font-size: size-m(12);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height:1.6;
    letter-spacing: 0.24px;
    text-align: center;
    color: #595757;
    transform: scaleX(0.93);
    margin-bottom: 1em;
  }

  .animate-row {
    bottom: size-m(-130);

    img {
      height: size-m(200);
    }

    &.animate-row2 {
      bottom: size-m(0);

      img {
        height: size-m(40);
      }
      // animation-delay: 5s;
    }

    &.no-animation {
      img {
        height: size-m(80);
      }
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import { Carousel3d, Slide } from 'vue-carousel-3d'
import slider from '@/mixins/slider.js'

export default {
  name: 'section8',
  components: {
    Carousel3d,
    Slide,
  },

  mixins: [slider],

  data() {
    return {
      isMobile,
      isDialog: false,
      imgIndex: 0,
      imgList: [
        {
          img: require('./s10/1.png'),
          title: '聯上草雲',
          desc: '高雄市前金區明仁路',
        },
        {
          img: require('./s10/2.png'),
          title: '聯上涵玥',
          desc: '台北市士林區福林路',
        },
        {
          img: require('./s10/3.png'),
          title: '聯上聽瀑',
          desc: '台北市士林區天母西路',
        },
        {
          img: require('./s10/4.png'),
          title: '聯上世紀',
          desc: '桃園市中壢區青商路',
        },
        {
          img: require('./s10/5.png'),
          title: '聯上涵景',
          desc: '高雄市左營區政德路',
        },
        {
          img: require('./s10/6.png'),
          title: '聯上V1',
          desc: '高雄市苓雅區七賢路',
        },
        {
          img: require('./s10/7.png'),
          title: '聯上康橋',
          desc: '台南市永康區東橋五路',
        },
      ],
      imgWidth: 960,
      imgHeight: 536,
    }
  },

  methods: {
    onAfterSlideChange(index) {
      this.imgIndex = index
    },
  },

  created() {},

  mounted() {
    if (this.isMobile) {
      this.imgWidth = window.screen.width * (208 / 375)
      this.imgHeight = window.screen.width * (278 / 375)
    }
  },

  computed: {},
}
</script>
