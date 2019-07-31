<template>
  <div class="section7 fullscreen bg-cover relative">
    <div class="svg" v-scroll-reveal.reset="$fadeIn()">
      <icon class="icon txt" :data="txt" />
    </div>
    <div class="content absolute">
      <h3 class="title" v-scroll-reveal.reset="$fadeIn(300)">穩若泰山，抗震達國家標準</h3>
      <p class="desc" v-scroll-reveal.reset="$fadeIn(600)">▉ 建築基礎工程採用筏式基礎與連續壁工法</p>
      <p class="desc" v-scroll-reveal.reset="$fadeIn(900)">▉ 連續壁工法可預防土壤液化發生傾斜</p>
      <p class="desc" v-scroll-reveal.reset="$fadeIn(1200)">
        ▉ 連續壁深度19米，厚度50公分，鋼性更強
        水密度更高，嚴密防護基樁外緣
      </p>
    </div>
    <img src="./s7_txt_m.png" alt="">
  </div>
</template>
<style lang="scss" scoped>
.section7 {
  width: 100vw;
  height: calc(100vw * (900 / 1440));
  background-image: url('./s7_bg.jpg');

  .svg {
    width: 100vw;
    height: calc(100vw * (900 / 1440));
    fill: #fff;
    width: 100%;
  }

  img {
    display: none;
  }
}

.content {
  width: calc(100vw * (600 / 1440));
  height: calc(100vw * (600 / 1440) * (350 / 600));
  text-align: left;
  right: 120px;
  bottom: 200px;

  .title {
    font-size: 47.5px;
    color: #ffc436;
    margin-bottom: 60px;
    white-space: nowrap;
  }

  .desc {
    font-size: 30.5px;
    margin-bottom: 30px;
    line-height: 1.3;
    color: #fff;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .content {
    right: 20px;
    bottom: 100px;
    .title {
      font-size: 34px;
    }

    .desc {
      font-size: 22px;
    }
  }
}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .section7 {
    width: 100vw;
    height: calc(100vw * (666 / 375));
    background-image: url('./s7_bg_m.jpg');

    img {
      width: 100vw;
      height: auto;
      fill: #fff;
      position: absolute;
      left: 0;
      top: calc(100vh * (270 / 568));
    }

    .svg {
      display: none;
    }
  }

  .content {
    width: 100vw;
    padding: 0 20px;
    height: auto;
    text-align: left;
    top: 20px;
    left: 0;
    right: 0;
    margin: 0 auto;

    .title {
      font-size: 26px;
      color: #ffc436;
      margin-bottom: 20px;
      line-height: 1.5;
      white-space: normal;
    }

    .desc {
      font-size: 15px;
      margin-bottom: 10px;
      line-height: 1.3;
      color: #fff;
    }
  }
}
</style>

<script>
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
import txt from '@/assets/svg/s7_txt.svg'
export default {
  name: 'section7',
  mixins: [slider],

  data() {
    return {
      isMobile,
      txt,
      slideList: [
        {
          src: require('./s4_img_1.jpg'),
          title: '城市翻新浪潮',
          desc:
            '上北市東西翻轉大計劃，包括北門與雙子星特區，將勾勒城市全新樣貌，三重具備第一環的紅利優勢，加上產業趨勢改變，充沛豐富的城市浪潮，即將改寫三重風光，包括玉山金控、群光電子都看見蛻變中的新三重',
        },
        {
          src: require('./s4_img_2.jpg'),
          title: '機捷加速驅動',
          desc:
            '機場捷運是台北捷運系統的第二具引擎，聯繫國門與首都的跨世紀能量，串連北市、新北、桃園近九百萬人口城市，三重驅動大勢，不僅是國門第一站，更連結水岸共生、城市再造的超規格版圖',
        },
        {
          src: require('./s4_img_3.jpg'),
          title: '新北閃耀五星',
          desc:
            '依據產業結構、城市潛力提出的新北五星計劃，將以二重為首，在包括土城、新莊、新店、八里地區，匯聚優勢交通能量、工商產業利多、生態環境等條件，打造新型態城市計劃',
        },
      ],
    }
  },

  methods: {},
}
</script>
