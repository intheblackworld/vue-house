<template>
  <div class="section3">
    <div class="bg fullscreen">
      <carousel-3d :width="960" :height="536" :perspective="0">
        <slide v-for="(slide, i) in slides" :index="i" :key="slide.img" class="video-slide">
          <img
            src="./s3/play_btn.png"
            alt
            :class="`play-btn absolute-c ${slide.isPlay ? 'hide' : ''}`"
            @click="handlePlay(i)"
          />
          <img :src="slide.img" :class="`video-img absolute ${slide.isPlay ? 'hide' : ''}`" />
          <video :ref="`video${i}`" class="video" @click="pauseAll">
            <source :src="slide.video" type="video/mp4" />
          </video>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-color: #3c2d2e;
  background-image: url('./generic_bg.png');
  position: relative;
  overflow: hidden;
  position: relative;
  padding: 50px 0;
}

.video-slide {
  .play-btn {
    width: 125px;
    cursor: pointer;
    z-index: 2;

    display: block;

    &.hide {
      display: none;
    }
  }

  .video-img {
    width: 960px;
    display: block;

    &.hide {
      display: none;
    }
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: auto;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
  }

  .fullscreen {
    height: auto !important;
  }

  .img1 {
    top: 0;
    left: 0;
    width: 30vw;
  }

  .img2 {
    position: relative;
  }

  .text {
    position: relative;
    left: 0;
    right: 0;
    top: auto;
    margin: 0 auto;
    margin-top: 30px;
    width: 90vw;

    .title {
      font-size: 24px;
    }

    .desc {
      font-size: 16px;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'section3',
  components: {
    Carousel3d,
    Slide,
  },

  data() {
    return {
      isMobile,
      slides: [
        {
          img: require('./s3/1.jpg'),
          video: require('./s3/20S_世紀地王篇_20190708.mp4'),
          isPlay: false,
        },
        {
          img: require('./s3/2.jpg'),
          video: require('./s3/30S_時間價值篇_20190708.mp4'),
          isPlay: false,
        },
        {
          img: require('./s3/4.jpg'),
          video: require('./s3/45S_永恆篇_20190708.mp4'),
          isPlay: false,
        },
      ],
    }
  },

  methods: {
    pauseAll() {
      this.slides[0].isPlay = false
      this.$refs[`video${0}`][0].pause()
      this.slides[1].isPlay = false
      this.$refs[`video${1}`][0].pause()
      this.slides[2].isPlay = false
      this.$refs[`video${2}`][0].pause()
    },
    // pausePlay(index) {
    //   this.slides[index].isPlay = false
    //   this.$refs[`video${index}`][0].pause()
    // },
    handlePlay(index) {
      if (this.slides[index].isPlay) {
        this.slides[index].isPlay = false
        this.$refs[`video${index}`][0].pause()
      } else {
        this.slides[index].isPlay = true
        this.$refs[`video${index}`][0].play()
      }
    },
  },
}
</script>
