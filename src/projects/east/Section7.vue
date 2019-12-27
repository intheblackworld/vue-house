<template>
  <div class="section7">
    <div class="bg">
      <img src="./s7/bg.jpg" alt class="bg-img" v-if="!isMobile" />
      <!-- <img src="./s7/bg_m.jpg" alt class="m-img" v-if="isMobile" /> -->
      <icon class="icon left-btn prev" :data="arrow" @click="decIndex" v-if="!isMobile" />
      <icon class="icon right-btn next" :data="arrow" @click="addIndex" v-if="!isMobile" />
      <div class="block flex-jb">
        <div class="slide relative" data-aos="fade">
          <img
            v-for="(slide, index) in (slideList)"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s3-slide-${index}`"
            :src="slide.img"
            alt
          />
          <div class="btn-group flex-jb flex-ac flex-mobile-jb" v-if="isMobile">
            <icon class="icon arrow-btn prev" :data="arrow" @click="decIndex" />
            <icon class="icon arrow-btn next" :data="arrow" @click="addIndex" />
          </div>
        </div>
        <transition-group name="fade" tag="div" class="text">
          <div
            v-for="(item, index) in slideList"
            :key="`slideText-${index}`"
            v-if="slideIndex == index"
          >
            <div class="flex-ab">
              <icon class="icon arrow" :data="arrow" />
              <div class="title">{{slideList[slideIndex].title}}</div>
            </div>
            <div class="desc">{{slideList[slideIndex].desc}}</div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-position: 100% 0%;
  background-size: cover;
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
  z-index: 1;
  &:nth-child(1) {
    position: relative;
  }
}

.block {
  width: 90vw;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: calc(100vw * (130 / 1920));
  z-index: 2;
}
.slide {
  width: calc(100vw * (953 / 1920));
  height: calc(100vw * (635 / 1920));
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
.text {
  width: calc(100vw * ((1920 - 953) / 1920));
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: calc(100vw * (624 / 1920));
  }
  .arrow {
    width: calc(100vw * (40 / 1920));
    margin-left: calc(100vw * (-42 / 1920));
    fill: #e60012;
    .st0 {
      fill: #e60012;
    }
  }
  .title {
    font-size: calc(100vw * (44 / 1920));
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.91;
    letter-spacing: 1.76px;
    text-align: justify;
    color: #ffffff;
  }

  .desc {
    font-size: calc(100vw * (24 / 1920));
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: 1.44px;
    text-align: justify;
    color: #ffffff;
    margin-top: 30px;
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

.left-btn {
  width: calc(100vw * (60 / 1920));
  position: absolute;
  fill: #fff;
  cursor: pointer;
  left: 10px;
  top: 50%;
  z-index: 5;
  transform: rotate(180deg) translateY(-50%);
  margin-top: calc(100vw * (-60 / 1920));
}

.right-btn {
  width: calc(100vw * (60 / 1920));
  position: absolute;
  fill: #fff;
  cursor: pointer;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
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

@media only screen and (min-width: 1281px) and (max-width: 1440px) {
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
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
}

@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s7/bg_m.jpg');
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

  .block {
    position: relative;
    display: block;
    width: 100vw;
    top: 0;

    .arrow {
      width: calc(100vw * (40 / 750));
      margin-left: 0;
      fill: #e60012;
      .st0 {
        fill: #e60012;
      }
    }
  }

  .text {
    width: 90vw;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 70px;
    height: calc(100vw * (375 / 750));

    .title {
      font-size: calc(100vw * (44 / 750));
    }

    .desc {
      font-size: calc(100vw * (24 / 750));
      margin-top: 15px;
    }

    > div {
      width: 90vw;
    }
  }

  .slide {
    width: 100vw;
    height: auto;
    .btn-group {
      width: 100%;
    }

    .slide-img {
      width: 100vw;
      max-height: auto;
    }
  }
}
</style>

<script>
import slider from '@/mixins/slider.js'
import { isMobile } from '@/utils'
import arrow from '@/projects/east/arrow.svg'
export default {
  name: 'section7',
  mixins: [slider],

  data() {
    return {
      isMobile,
      arrow,
      slideList: [
        {
          img: require('./s7/1盡享生活版圖.jpg'),
          title: '松山信義大直 到哪都是隔壁',
          desc:
            '上午就近到內湖好市多完成採買，下午就近在松山蔦屋書店喝個咖啡。星期六就近到信義計劃鼎泰豐大快朵頤，星期天就近在大直美麗華欣賞摩天輪夜景。「大道東」和東區生活臍帶相連，到哪就是這麼近。',
        },
        {
          img: require('./s7/2快攻交通版圖.jpg'),
          title: '啟動高速樞紐 差旅就像通勤',
          desc:
            '內湖交通不是問題，問題是你住內湖哪裡。「大道東」條條大道出路暢通—中山高約4分鐘、松山車站約6分鐘、南港高鐵約8分鐘、松山機場約10分鐘、機場捷運台北站約15分鐘，地上空中都是飛快效率。',
        },
        {
          img: require('./s7/3輕取事業版圖.jpg'),
          title: '台北東區門戶 台灣經濟櫥窗',
          desc:
            '內湖科學園區、南港經貿園區、信義計劃區、南京敦北商圈，國際在地專業菁英匯聚。工作在哪生活就在哪，才是最理想的居住模式。南京東路六段一巷進，「大道東」為你找到工作居住兩點最近的距離。',
        },
        {
          img: require('./s7/4優遊休閒版圖.jpg'),
          title: '微風水岸草地 有綠意才愜意',
          desc:
            '不像大直水岸、內湖湖岸那樣貴鬆鬆，「大道東」不自抬身價更顯身段輕鬆。出門最近的就是河濱公園，台北市內基隆河右岸約20.6公里長，騎車賞花看煙火，一路美景相連，真正感受得到內湖的高綠地比。',
        },
      ],
    }
  },

  methods: {},
}
</script>
