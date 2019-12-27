<template>
  <div class="section4">
    <div class="bg" v-if="!isMobile">
      <img src="./s4/bg.jpg" alt class="bg-img" />
      <div class="content" data-aos="fade">
        <div class="flex-ab">
          <icon class="icon arrow" :data="arrow" />
          <div class="title">黃金級綠建築</div>
          <div class="subtitle">Features</div>
        </div>
        <div class="big-desc">生態、節能、減廢、健康</div>
        <div class="desc">
          <div
            style="margin-bottom: 30px;"
          >『大道東』外牆採用隔熱砂漿作為節能隔熱材，經實驗測試，夏季室內溫度約可降低攝氏4.2度，冬季室內溫度約可提升攝氏5.7度，全年平均空調負荷量約可減少21.2度%。</div>
          <div>『大道東』各戶玻璃採用5+5節能膠合LOW-R玻璃，利用膠合膜設計，有效阻隔太陽的直接輻射熱。</div>
        </div>
      </div>
    </div>
    <div class="bg" v-if="isMobile">
      <img src="./s4/mo/img1.png" alt class="bg-img" />
      <div class="relative">
        <img src="./s4/mo/bg.png" alt class="bg-img" />
        <div class="content" data-aos="fade">
          <div class="flex-ab">
            <icon class="icon arrow" :data="arrow" />
            <div class="title">黃金級綠建築</div>
            <div class="subtitle">Features</div>
          </div>
          <hr />
          <div class="big-desc">生態、節能、減廢、健康</div>
          <div class="desc">
            <div
              style="margin-bottom: 10px;"
            >『大道東』外牆採用隔熱砂漿作為節能隔熱材，經實驗測試，夏季室內溫度約可降低攝氏4.2度，冬季室內溫度約可提升攝氏5.7度，全年平均空調負荷量約可減少21.2度%。</div>
            <div>『大道東』各戶玻璃採用5+5節能膠合LOW-R玻璃，利用膠合膜設計，有效阻隔太陽的直接輻射熱。</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  // background-image: url('./s3/bg.jpg');
  background-position: 100% 0%;
  background-size: cover;
  position: relative;
  // display: flex;
  // align-items: center;
  // justify-content: flex-end;
}

.bg-img {
  width: 100vw;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  &:nth-child(1) {
    position: relative;
  }
}

.content {
  width: calc(100vw * ((636) / 1920));
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 10%;

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
    font-size: calc(100vw * (96 / 1920));
    font-weight: 500;
    font-stretch: condensed;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: rgba(105, 114, 42, 0.45);
    margin-left: 10px;
    margin-bottom: -8px;
  }

  .big-desc {
    font-size: calc(100vw * (35 / 1920));
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: 1.4px;
    text-align: justify;
    color: #000000;
    margin-top: 20px;
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
    color: #000;
    margin-bottom: 30px;
    margin-top: 20px;
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
    .big-desc {
      margin-top: 10px;
    }

    .desc {
      margin-top: 10px;
    }
  }
}

@media screen and (max-width: 767px) {
  .bg {
    flex-wrap: wrap;
    background-image: url('./s3/bg_m.png');
  }

  .slide {
    .slide-img {
      width: 100vw;
      max-height: auto;
    }
  }

  .content {
    width: 90vw;
    top: 0;

    > div {
      width: 90vw;
      margin-top: calc(100vw * (80 / 750));
    }

    .title {
      font-size: calc(100vw * (44 / 750));
    }

    .subtitle {
      color: #666666;
      font-size: calc(100vw * (26 / 750));
      margin-bottom: 5px;
    }

    .big-desc {
      font-size: calc(100vw * (35 / 750));
      margin-top: 10px;
    }

    .desc {
      font-size: calc(100vw * (24 / 750));
      margin-top: 10px;
    }

    hr {
      position: absolute;
      width: 100%;
      left: calc(100vw * (170 / 1680));
      top: calc(100vw * (30 / 1680));
      background: #999;
      color: #999;
      border-color: #999;
      border-top: 1px solid #999;
    }

    hr {
      left: calc(100vw * (340 / 750));
      top: calc(100vw * (105 / 750));
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
  name: 'section4',
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
