<template>
  <div class="section6">
    <div>
      <div
        class="sidebar absolute"
        v-if="!isMobile"
      >
        <div class="title-item sidebar-item flex-c">瑞安影片</div>
        <div
          class="sidebar-item flex-c wrap"
          @click="goTo(index)"
          v-for="(slide, index) in slideList"
          :key="slide.title"
        >{{slide.title}}</div>
      </div>
      <div
        class="title absolute"
        v-if="isMobile"
      >隱身公園聚落中的輕豪宅</div>
      <div class="swipe-bottom-btns absolute flex-ac flex-jb" v-if="isMobile">
        <div
          class="prev-btn flex-c"
          @click="decIndex"
        >
          <img
            src="./all/prev-btn.png"
            alt=""
          >
        </div>

        <div class="swipe-title">{{slideList[slideIndex].title}}</div>
        <div
          class="next-btn flex-c"
          @click="addIndex"
        >
          <img
            src="./all/next-btn.png"
            alt=""
          >
        </div>
      </div>
      <div
        class="swipe absolute"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <div
          class="swipe-wrap relative"
          v-show="!showIframe"
        >
          <div
            @click="playVideo"
            v-for="(slide, i) in slideList"
            :key="slide.img + i"
            :class="`video-cover swipe-item absolute ${slideIndex === i ? 'active' : ''} ${(slideIndex === (i + 1) || slideIndex === (i - slideList.length + 1)) ? 'base' : ''}`"
          >
            <img :src="slide.img">
          </div>
          <!-- <img
            v-for="(slide, i) in slideList"
            :src="slide.img"
            :key="slide.img"
            :class="`swipe-item absolute ${slideIndex === i ? 'active' : ''} ${(slideIndex === (i + 1) || slideIndex === (i - slideList.length + 1)) ? 'base' : ''}`"
          > -->
          <!-- <div class="pagination absolute flex-ac">
            <div
              :class="`pagination-dot`"
              v-for="(slide, index) in slideList"
              :key="slide.img + '-dot'"
              @click="goTo(index)"
            ><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div> -->
          <!-- <div class="swipe-btns absolute flex-ac flex-jb">
            <img
              src="./all/prev-btn.png"
              alt=""
              class="prev-btn"
              @click="decIndex"
            >
            <img
              src="./all/next-btn.png"
              alt=""
              class="next-btn"
              @click="addIndex"
            >
          </div> -->
        </div>
        <div
          class="swipe-wrap relative"
          v-show="showIframe"
        >
          <iframe
            :src="slideList[slideIndex].link"
            style="border:none;overflow:hidden"
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  min-height: size(900);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}
.sidebar {
  width: size(396);
  top: size(0);
  left: size(186);
  height: 100%;display: flex;align-items:center;flex-direction:column;justify-content:center;
}
.sidebar-item {
  width: 100%;
  height: size(170);
  border-bottom: 1px solid rgba(35, 24, 21, 0.5);
  color: #000;
  font-size: size(30);
  cursor: pointer;
}
.title-item {
  color: #a58157;
  font-weight: bold;
  font-size: size(35);
}

.swipe {
  width: size(1067);
  height: size(800);
  top:calc(50% - 20.5vw);
  right: size(227);
  object-fit: cover;background: #000;
}

.swipe-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;

  iframe {
    width: 100%;
    height: size(444);
    position: absolute;
    left: 0;
  top:calc(50% - 11.5vw);

  //  margin-top: size((800 - 388) / 2);
  }
}

.swipe-item {
  width: 100%;
  height: 100%;
  left: 100%;
  transition: left 1s ease-in-out;
  z-index: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:nth-child(1) {
    z-index: 1;
    left: 0;
  }

  &.base {
    z-index: 1;
    left: 0;
  }
  &.active {
    z-index: 2;
    left: 0;
  }
}

.pagination {
  width: auto;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    box-shadow: 0 0 0 1px #fff;
    position: relative;
    background-color: rgba(0, 0, 0, 0.01);
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #fff;
      border-radius: 20px;
      opacity: 1;
      position: absolute;
      top: 20%;
      // transform: translateY(-50%);
      left: 20%;
      transition: all 0.3s;
      transform-origin: center;
      transform: scale(0);
    }
    &.active {
      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #fff;
        border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 20%;
        // transform: translateY(-50%);
        left: 20%;
        transform: scale(1);
      }
    }
  }
}

.swipe-btns {
  width: 100%;
  height: 100%;
  padding: 0 15px;
  z-index: 3;

  .prev-btn,
  .next-btn {
    width: size(20);
    cursor: pointer;
  }
}

.video-cover {
  width: 100%;
  height: 100%;
  background: #000;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    z-index: 10;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: block;
    margin: auto;
    width: 100px;
    height: 100px;
    background: #ac1919;
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 15px;
    display: block;
    margin: auto;
    width: 0;
    height: 0;
    border-color: transparent transparent transparent #fff;
    border-style: solid;
    border-width: 17.5px 0 17.5px 30.31px;
    z-index: 10;
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
  .section6 {
    width: 100vw;
    height: calc(100vh - 63px);
    min-height: auto;
    // background-image: url('./s1/bg.jpg');
    // background-size: cover;
    // background-attachment: fixed;
  }

  .title {
    width: 100%;
    top: sizem(84);
    left: 0;
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.78;
    letter-spacing: 3px;
    text-align: center;
    color: #a68367;
    white-space: nowrap;
  }

  .swipe {
    width: 100vw;
    height: size-m(280);
    top: sizem(168);
    left: 0;
    object-fit: cover;
  }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
    left: 100%;
    transition: left 1s ease-in-out;
    z-index: 0;

    &.base {
      z-index: 1;
      left: 0;
    }
    &.active {
      z-index: 2;
      left: 0;
    }
  }

  .pagination {
    width: auto;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
  }

  .pagination-dot {
    padding: 5px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 14px;
      height: 14px;
      border-radius: 14px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #fff;
        border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 20%;
        // transform: translateY(-50%);
        left: 20%;
        transition: all 0.3s;
        transform-origin: center;
        transform: scale(0);
      }
      &.active {
        &::before {
          content: '';
          width: 60%;
          height: 60%;
          display: block;
          background: #fff;
          border-radius: 20px;
          opacity: 1;
          position: absolute;
          top: 20%;
          // transform: translateY(-50%);
          left: 23%;
          transform: scale(1);
        }
      }
    }
  }

  .swipe-btns {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    z-index: 3;

    .prev-btn,
    .next-btn {
      width: size-m(15);
      cursor: pointer;
    }
  }

  .swipe-bottom-btns {
    width: 100vw;
    height: sizem(70);
    // padding: 0 10px;
    z-index: 3;
    top: sizem(447);
    left: 0;
    background-color: rgba(166, 131, 103, 0.2);
    .swipe-title {
      font-size: sizem(18);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: normal;
      text-align: center;
      color: #000000;
    }

    .prev-btn,
    .next-btn {
      width: sizem(55);
      height: sizem(70);
      background-color: rgba(166, 131, 103, 0.3);
      cursor: pointer;

      img {
        width: sizem(10);
      }
    }
  }

  .video-cover {
    width: 100%;
    height: 100%;
    background: #000;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      z-index: 10;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: block;
      margin: auto;
      width: 30px;
      height: 30px;
      background: #ac1919;
      border-radius: 50%;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 5px;
      display: block;
      margin: auto;
      width: 0;
      height: 0;
      border-color: transparent transparent transparent #fff;
      border-style: solid;
      border-width: 6px 0 6px 10px;
      z-index: 10;
    }
  }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;

    iframe {
      width: 100%;
      height: 100%;
      margin-top: sizem((279 - 157) / 2);top:0;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import Parallax from 'vue-parallaxy'
import slider from '@/mixins/slider.js'

export default {
  name: 'section6',

  mixins: [slider],

  components: {
    Parallax,
  },

  watch: {
    slideIndex(val) {
      this.showIframe = false
    },
  },

  data() {
    return {
      isMobile,
      isTablet,
      slideList: [
        {
          title: '隱身公園聚落中的輕豪宅',
          link:
            'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fforevercollect%2Fvideos%2F312820629270130%2F&show_text=0',
          img: isMobile ? require('./mo/5/1.jpg') : require('./s6/1.jpg'),
        },
        // {
        //   title: '標題2',
        //   link: '',
        //   img: isMobile ? require('./mo/5/2.jpg') : require('./s6/1.jpg'),
        // },
        // {
        //   title: '標題3',
        //   link: '',
        //   img: isMobile ? require('./mo/5/3.jpg') : require('./s6/1.jpg'),
        // },
      ],
      showIframe: false,
    }
  },

  methods: {
    playVideo() {
      this.showIframe = true
    },
  },

  created() {
    this.toggleTimer = false
  },

  mounted() {},

  computed: {},
}
</script>
