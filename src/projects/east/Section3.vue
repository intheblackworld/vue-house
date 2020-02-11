<template>
  <div class="section3">
    <div class="bg">
      <div class="slide relative" data-aos="fade">
        <img
          v-for="(slide, index) in slideList"
          :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
          :key="`s3-slide-${index}`"
          :src="slide"
          alt
        />
      </div>
      <div class="content" data-aos="fade">
        <div class="relative">
          <div class="flex-ab">
            <icon class="icon arrow" :data="arrow" />
            <div class="title">{{textList[slideIndex].title}}</div>
            <div class="subtitle">{{textList[slideIndex].subtitle}}</div>
          </div>
          <hr />
          <div class="desc">
            <transition-group name="fade">
              <div v-if="slideIndex == 0" key="index-1">
                <div style="margin-bottom: 30px;">{{textList[0].desc1}}</div>
                <div>{{textList[0].desc2}}</div>
              </div>
              <div v-if="slideIndex == 1" key="index-2">
                <div style="margin-bottom: 30px;">{{textList[1].desc1}}</div>
                <div>{{textList[1].desc2}}</div>
              </div>
            </transition-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s3/bg.jpg');
  background-position: 100% 0%;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

// 過渡範例在這
.fade-enter-active,
.fade-leave-active {
  position: absolute;
  transition: all 0.8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.slide {
  width: calc(100vw * (1021 / 1920));
  z-index: 1;

  .slide-img {
    margin: 0 auto;
    width: 100%;
    height: auto;
    // max-height: 70vh;
    object-fit: cover;
    left: 0;
    right: 0;
  }

  .btn-group {
    bottom: 30px;
  }
}

.content {
  width: calc(100vw * ((1920 - 1021) / 1920));
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: calc(100vw * (622 / 1920));
  }

  .title {
    font-size: calc(100vw * (44 / 1920));
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 1.76px;
    text-align: justify;
    color: #ffffff;
  }

  .subtitle {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: calc(100vw * (26 / 1920));
    font-weight: normal;
    font-stretch: condensed;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    margin-left: 10px;
    margin-bottom: 5px;
  }

  hr {
    position: absolute;
    width: 100%;
    left: calc(100vw * (170 / 1680));
    top: calc(100vw * (30 / 1680));
    background:none;
    //color: #676767;
    border: 0;
    border-top: 2px solid rgba(0,0,0,.25);
  }

  .desc {
    height: 144px;
    font-size: calc(100vw * (24 / 1920));
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: 1.44px;
    text-align: justify;
    color: #e9e8e8;
    margin-bottom: 30px;
    margin-top: 30px;
  }
}

.arrow {
  width: calc(100vw * (40 / 1920));
  margin-left: calc(100vw * (-42 / 1920));
  fill: #e60012;
  .st0 {
    fill: #e60012;
  }
}

@media only screen and (min-width: 1281px) and (max-width: 1440px) {
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  .content {
    hr {
      margin-top: 13px;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .slide {
    .slide-img {
      width: 100%;
      max-height: auto;
    }
  }

  .content {
    hr {
      margin-top: 5px;
      left: calc(100vw * (180 / 1680));
    }
  }
}

@media screen and (max-width: 767px) {
  .bg {
    flex-wrap: wrap;
    background:none;
  }

  .slide {
    .slide-img {
      width: 100vw;
      max-height: auto;
    }
  }

  .content {
    width: 100vw;
    background-image: url('./s3/bg_m.png');
    
    background-size: cover;

    > div {
      width: 90vw;
      margin-top: calc(100vw * (80 / 750));
    }

    .title {
      font-size: calc(100vw * (44 / 750));
    }

    .subtitle {
      font-size: calc(100vw * (26 / 750));
    }

    .desc {
      font-size: calc(100vw * (24 / 750));
    }

    hr {
      left: calc(100vw * (245 / 750));
      top: calc(100vw * (25 / 750));
    }
  }

  .arrow {
    width: calc(100vw * (45 / 750));
    margin-left: -5px;
    fill: #e60012;
    .st0 {
      fill: #e60012;
    }
  }
}
</style>

<script>
import slider from '@/mixins/slider.js'
import { isMobile } from '@/utils'
import arrow from '@/projects/east/arrow.svg'
export default {
  name: 'section3',
  mixins: [slider],

  data() {
    return {
      slideList: [require('./s3/1日景.jpg'), require('./s3/2夜景.jpg')],
      isMobile,
      arrow,
      textList: [
        {
          title: '建築外觀',
          subtitle: 'Building exterior',
          desc1:
            '高低層疊般的屋頂裝飾線條，藉以層次感降低建物硬度，散發出簡約、時尚、沉穩又現代的質感。',
          desc2:
            '永續持久的崗石基座搭配黃金崗石、深色系牆磚、烤漆鋁格柵等材料，勾勒出沈穩又現代的都市意象。',
        },
        {
          title: '建築外觀',
          subtitle: 'Building exterior',
          desc1:
            '垂直的鋁格柵，讓視覺有一個聚焦的所在，經由光影的投射，展現每分每秒的時間痕跡，使建築與大自然共生的存在。',
          desc2:
            '立體框架內側設置LED照明，突顯框架輪廓、創造出夜間美麗的型態，使其成為夜間視覺的焦點。',
        },
      ],
    }
  },

  methods: {},
}
</script>
