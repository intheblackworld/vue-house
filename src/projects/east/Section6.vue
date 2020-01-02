<template>
  <div class="section6">
    <div class="bg">
      <img src="./s6/img1.png" alt class="bg-img" v-if="!isMobile" />
      <img src="./s6/mo/img1.png" alt class="m-img" v-if="isMobile" />
      <div class="content" data-aos="fade">
        <div class="relative">
          <div class="flex-ab">
            <icon class="icon arrow" :data="arrow" />
            <div class="title">優質團隊</div>
            <div class="subtitle">About</div>
          </div>
          <hr />
          <div class="desc">
            <div>莊育士董事長產品規劃定位與整合；</div>
            <div>美國哈佛大學建築暨都市設計碩士姚嘉志建築師精心雕塑建築風情；</div>
            <div>邱秋陽董事長率領帝寶團隊嚴格管理施工品質；</div>
            <div>彭永設計師觸動光源靈感、鑄就空間美學……彰顯名門風範。</div>
          </div>
        </div>
      </div>
      <div class="animate-slide">
        <div class="item" v-for="(item, index) in slideList" :key="`slide1-${index}`">
          <img :src="item.img" alt />
          <div class="item-title">{{item.title}}</div>
        </div>
        <div class="item" v-for="(item, index) in slideList" :key="`slide2-${index}`">
          <img :src="item.img" alt />
          <div class="item-title">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s6/bg.jpg');
  background-position: 100% 0%;
  background-size: cover;background-attachment: fixed;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}

.bg-img {
  width: 100vw;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  &:nth-child(1) {
    position: relative;
  }
}

.content {
  width: 100vw;
  position: absolute;
  height: 100%;
  margin-top: 7%;

  > div {
    width: calc(100vw * (735 / 1920));
    margin-left: 7%;
  }

  .title {
    font-size: calc(100vw * (44 / 1920));
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 1.76px;
    text-align: justify;
    color: #000;
  }

  .subtitle {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: calc(100vw * (26 / 1920));
    font-weight: normal;
    font-stretch: condensed;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000;
    margin-left: 10px;
    margin-bottom: 5px;
  }

  hr {
    position: absolute;
    width: 150%;
    left: calc(100vw * (170 / 1680));
    top: calc(100vw * (30 / 1680));
    background: #a4a4a4;
    color: #a4a4a4;
    border-color: #a4a4a4;
    border-top: 1px solid #a4a4a4;
  }

  .desc {
    height: 144px;
    font-size: calc(100vw * (24 / 1920));
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: 0.3px;
    text-align: justify;
    color: #000;
    margin-top: 30px;
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

.animate-slide {
  display: flex;
  position: absolute;
  z-index: 4;
  bottom: calc(100vw * (64 / 1920));
  left: 0;
  animation: moving 20s linear infinite;
  .item {
    width: calc(100vw / 6);
    padding: 0 1px;
    position: relative;
    img {
      width: 100%;
      height: auto;
    }

    .item-title {
      font-size: calc(100vw * (19 / 1920));
      position: absolute;
      bottom: 10px;
      right: 10px;
      color: #fff;
      text-shadow: 0 0 3px #000;
    }
  }
  &:hover{
  animation-play-state:paused;
  }
}

@keyframes moving {
  0% {
    transform: translateX(0vw);
  }

  100% {
    transform: translateX(-100vw);
  }
}

@media only screen and (min-width: 1281px) and (max-width: 1440px) {
  .content {
    .desc > div {
      margin-bottom: 10px;
    }
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  .content {
    .desc > div {
      margin-bottom: 10px;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .content {
    > div {
      width: calc(100vw * (755 / 1920));
      margin-left: 7%;
    }
    .desc > div {
      margin-bottom: 10px;
    }
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s6/mo/bg.jpg');
  }

  .m-img {
    width: 100vw;
    height: auto;
  }
  .content {
    width: 85vw;
    margin: 40px auto;
    position: relative;

    .title {
      font-size: calc(100vw * (44 / 750));
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: 1.76px;
      text-align: justify;
      color: #000;
    }

    .subtitle {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: calc(100vw * (26 / 750));
      font-weight: normal;
      font-stretch: condensed;
      font-style: normal;
      letter-spacing: normal;
      text-align: center;
      color: #000;
      margin-left: 10px;
      margin-bottom: 5px;
    }

    hr {
      position: absolute;
      width: 100%;
      left: calc(100vw * (250 / 750));
      top: calc(100vw * (25 / 750));
      background: #a4a4a4;
      color: #a4a4a4;
      border-color: #a4a4a4;
      border-top: 1px solid #a4a4a4;
    }

    .desc {
      height: auto;
      font-size: calc(100vw * (24 / 750));
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.67;
      letter-spacing: 1.44px;
      text-align: justify;
      color: #000;
      margin-top: 20px;
      > div {
        margin-bottom: 10px;
      }
    }

    > div {
      width: 100%;
      margin: 0 auto;
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

  .animate-slide {
    display: flex;
    position: relative;
    z-index: 4;
    bottom: calc(100vw * (50 / 750));
    left: 0;
    animation: moving 20s linear infinite;
    .item {
      width: calc(100vw / 2.5);
      padding: 0 1px;
      position: relative;
      img {
        width: 100%;
        height: auto;
      }

      .item-title {
        font-size: calc(100vw * (19 / 750));
        position: absolute;
        bottom: 5px;
        right: 5px;
        color: #fff;
        text-shadow: 0 0 3px #000;
      }
    }
  }

  @keyframes moving {
  0% {
    transform: translateX(0vw);
  }

  100% {
    transform: translateX(-240vw);
  }
}
}
</style>

<script>
import slider from '@/mixins/slider.js'
import { isMobile } from '@/utils'
import arrow from '@/projects/east/arrow.svg'
export default {
  name: 'section6',
  mixins: [slider],

  data() {
    return {
      isMobile,
      arrow,
      slideList: [
        {
          img: require('./s6/1設計師作品-芙蓉匯.jpg'),
          title: '設計師作品-芙蓉匯',
        },
        {
          img: require('./s6/2建築師作品-縱橫天夏.jpg'),
          title: '建築師作品-縱橫天夏',
        },
        {
          img: require('./s6/3設計師作品-芙蓉匯.jpg'),
          title: '設計師作品-芙蓉匯',
        },
        { img: require('./s6/4營造管理-帝寶.jpg'), title: '營造管理-帝寶' },
        {
          img: require('./s6/5設計師作品-將作城心.jpg'),
          title: '設計師作品-將作城心',
        },
        { img: require('./s6/6營造管理-南海苑.jpg'), title: '營造管理-南海苑' },
      ],
    }
  },

  methods: {},
}
</script>
