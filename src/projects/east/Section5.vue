<template>
  <div class="section5">
    <div class="bg">
      <div class="slide relative" data-aos="fade">
        <img
          v-for="(slide, index) in (slideList)"
          :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
          :key="`s3-slide-${index}`"
          :src="slide.img"
          alt
        />
        <div class="slide-title">{{slideList[slideIndex].title}}</div>
        <div class="btn-group flex-jb flex-ac flex-mobile-jb">
          <!-- <div
            class="dot"
            v-for="(slide, index) in slideList"
            :key="`s3-dot-${index}`"
            @click="slideIndex = index"
          ></div>-->
          <icon class="icon arrow-btn prev" :data="arrow" @click="decIndex" />
          <icon class="icon arrow-btn next" :data="arrow" @click="addIndex" />
        </div>
      </div>
      <div class="content" data-aos="fade">
        <div class="relative">
          <div class="flex-ab">
            <icon class="icon arrow" :data="arrow" />
            <div class="title">設計規劃</div>
            <div class="subtitle">Planning</div>
          </div>
          <hr />
          <div class="desc">
            <div>大道東全區零店面純住宅，搭配中興保全多重安全門禁管制系統。</div>
            <div>
              戶外區:
              <br />禮賓駐車道、戶外兒童遊憩區、石板步道、機車停車區。
            </div>
            <div>
              室內區:
              <br />社區大廳、多功能交誼廳、垃圾冷藏資源回收室、健身房。
            </div>
            <div>
              高層區:
              <br />景觀空中花園、星空吧、品茗區、陽光曬衣場。
            </div>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="content" data-aos="fade">
          <div class="relative">
            <div class="flex-ab">
              <icon class="icon arrow" :data="arrow" />
              <div class="title">雙衛浴.雙主臥</div>
              <div class="subtitle"></div>
            </div>
            <hr />
            <div class="big-desc">戶戶邊間 X 大面採光 X 衛浴開窗</div>
            <div class="desc">
              <div>
                氣派客廳主牆收納櫃，處處大面採光
                <br />中島廚具搭配開放式廚房，完美結合
                <br />景觀多功能陽台，主浴開窗通風佳
                <br />戶戶挑高3.5米，生活空間無壓迫
                <br />旗艦型精品格局，體貼每個生活細節
              </div>
            </div>
          </div>
        </div>
        <img src="./s5/3d.png" alt class="three-d" data-aos="rotate" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s5/bg.jpg');
  background-position: 100% 0%;
  background-size: cover;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}

.slide {
  width: calc(100vw * (1021 / 1920));
  height: calc(100vw * (900 / 1920));
  z-index: 1;

  .slide-img {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 0;
    right: 0;
  }

  .btn-group {
    // bottom: 30px;
    img {
      width: 40px;
      margin: 0 10px;
    }
  }

  .slide-title {
    font-size: 20px;
    text-shadow: 0 0 2px #000;
    color: #fff;
    position: absolute;
    width: 100%;
    right: 20px;
    bottom: 20px;
    text-align: right;
    z-index: 2;
  }
}

.content {
  width: calc(100vw * ((1920 - 1021) / 1920));
  position: relative;
  height: 100%;
  margin-top: 7%;
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
    background: #676767;
    color: #676767;
    border-color: #676767;
    border-top: 1px solid #676767;
  }

  .big-desc {
    font-size: calc(100vw * (35 / 1920));
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: 1.4px;
    text-align: justify;
    color: #fff;
    margin-top: 10px;
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
    color: #fff;
    margin-top: 10px;
    > div {
      margin-bottom: 20px;
    }
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

.arrow-btn {
  width: calc(100vw * (60 / 1920));
  fill: #fff;
  cursor: pointer;

  &.prev {
    transform: rotate(180deg);
  }
}

.block {
  width: 100vw;
  height: calc(100vw * (700 / 1920));
  position: relative;

  .content {
    margin-top: -5.1%;

    hr {
      left: calc(100vw * (280 / 1680));
    }
  }
}

.three-d {
  width: calc(100vw * (1021 / 1920));
  position: absolute;
  right: 0;
  bottom: calc(100vw * (-90 / 1680));
  z-index: 3;
}

[data-aos='rotate'] {
  transform: rotate(20deg);
  opacity: 0;
  transition-property: transform, opacity;
  &.aos-animate {
    transform: rotate(0deg);
    opacity: 1;
  }
}

@media only screen and (min-width: 1281px) and (max-width: 1440px) {
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .block {
    .content {
      margin-top: -25px;
    }
  }

  .three-d {
    bottom: calc(100vw * (-100 / 1680));
  }
  .slide {
    .slide-img {
      width: 100%;
      max-height: auto;
    }
  }
}

@media screen and (max-width: 767px) {
.bg {
  background-image: url('./s5/mo/bg.jpg');
  background-position: 100% 100%;
  }
  .arrow-btn {
    display: block;
    width: calc(100vw * (60 / 750));
    fill: #fff;
    cursor: pointer;

    &.prev {
      transform: rotate(180deg);
    }
  }

  .slide {
  height: 70vw;
    .btn-group {
      width: 100%;
    }

    .slide-img {
      width: 100vw;
      max-height:initial;
    }
  }

  .content {
    width: 85vw;
    margin: 0 auto;
    margin-top: 40px;

    .title {
      font-size: calc(100vw * (44 / 750));
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: 1.76px;
      text-align: justify;
      color: #ffffff;
    }

    .subtitle {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: calc(100vw * (26 / 750));
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
      left: calc(100vw * (250 / 750));
      top: calc(100vw * (25 / 750));
      background: #676767;
      color: #676767;
      border-color: #676767;
      border-top: 1px solid #676767;
    }

    .big-desc {
      font-size: calc(100vw * (35 / 750));
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 2;
      letter-spacing: 1.4px;
      text-align: justify;
      color: #fff;
      margin-top: 10px;
    }

    .desc {
      height: 144px;
      font-size: calc(100vw * (24 / 750));
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.67;
      letter-spacing: 1.44px;
      text-align: justify;
      color: #fff;
      margin-top: 10px;
      > div {
        margin-bottom: 20px;
      }
    }

    > div {
      width: 100%;
    }
  }
  .arrow {
    width: calc(100vw * (40 / 750));
    margin-left: 0;
    fill: #e60012;
    .st0 {
      fill: #e60012;
    }
  }

  .block {
    height: auto;
    margin-top: calc(100vw * (900 / 750));

    hr {
      display: none;
    }
  }

  .three-d {
    width: calc(100vw * (672 / 750));
    position: absolute;
    right: -10%;
    bottom: calc(100vw * (390 / 750));
    z-index: 3;
  }

  [data-aos='rotate'] {
    transform: rotate(0deg);
    opacity: 0;
    transition-property: transform, opacity;
    &.aos-animate {
      transform: rotate(-20deg);
      opacity: 1;
    }
  }
}

@media screen and (max-width: 321px) {
  .three-d {
    bottom: calc(100vw * (440 / 750));
  }
}
</style>

<script>
import slider from '@/mixins/slider.js'
import { isMobile } from '@/utils'
import arrow from '@/projects/east/arrow.svg'
export default {
  name: 'section5',
  mixins: [slider],

  data() {
    return {
      isMobile,
      arrow,
      slideList: [
        { img: require('./s5/1門廳.jpg'), title: '門廳透視圖' },
        { img: require('./s5/2星空吧.jpg'), title: '星空吧透視圖' },
        { img: require('./s5/3健身房.jpg'), title: '健身房透視圖' },
        { img: require('./s5/4品茗區.jpg'), title: '品茗區透視圖' },
        { img: require('./s5/5迎賓車道.jpg'), title: '迎賓車道透視圖' },
      ],
    }
  },

  methods: {},
}
</script>
