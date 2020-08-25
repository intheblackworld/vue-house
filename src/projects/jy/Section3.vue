<template>
  <div>
    <div class="section3">
      <img
        src="./s3/bg.jpg"
        alt=""
        class="bg-img"
      >
      <div class="block absolute" data-aos="fade-down"
        data-aos-delay="0">
      </div>
      <div class="desc absolute" data-aos="fade-down"
        data-aos-delay="400">
        【築藝丰盛】居大同區核心部位，區內幹道重慶北路、承德路、民權西路、民族西路包圍，步行生活圈內即享完善生活機能：學區、銀行、家樂福、公園，居家生活沉浸於文教區、公園宅氛圍，飯後養生漫步、假日家庭休閒，綠蔭舒心慢活愜意。騎車約6分鐘，抵淡水河岸自行車道，風光水綠隨時出發。迪化大稻埕，南往龍山華江，北接延平、雙溪、八里左岸，東至大佳、大直河濱，飛輪乘風一路暢遊，樂活享受雙北河濱風光。
      </div>
      <img
        src="./s2/icon.png"
        alt=""
        class="icon absolute"
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: size(1920);
  // height: 100vh;
  height: size(900);
  min-height: size(900);
  // background-image: url('./s3/bg.jpg');
  // background-size: size(1920) size(900);
  // background-position: 0 0;
  // background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: size(900);
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

.block {
  width: size(502);
  height: size(502);
  top: size(188);
  right: size(178);
  background-color: rgba(255, 255, 255, 0.85);
}

.desc {
  width: size(378);
  top: size(254);
  right: size(256);
  font-size: size(16);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.2;
  letter-spacing: 1.6px;
  text-align: left;
  color: #4d4d4d;
}

.icon {
  width: size(76);
  top: size(588);
  right: size(204);
  transform: rotate(180deg);
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
  .section3 {
    width: 100vw;
    height: sizem(602);
    min-height: auto;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .swipe {
    width: 100vw;
    height: sizem(300);
    top: sizem(0);
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
    opacity: 0;
    transition: opacity 1s ease-in-out;
    z-index: 0;
    object-fit: cover;

    img {
      width: 100%;
    }

    &.base {
      z-index: 1;
      left: 0;
      opacity: 1;
    }
    &.active {
      z-index: 2;
      left: 0;
      opacity: 1;
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

  .name {
    right: 15px;
    bottom: 15px;
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.92;
    letter-spacing: 3.12px;
    text-align: left;
    color: #ffffff;
    z-index: 5;
  }

  .title {
    writing-mode: initial;
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    margin-top: sizem(32 + 300);
    margin-left: sizem(56);
  }

  .toggle-list {
    width: sizem(324);
    margin: 0 auto;
    margin-top: sizem(10);
  }

  .toggle-item {
    width: 100%;
    height: sizem(61);
    border-top: solid 1px rgba(142, 138, 116, 0.5);
    border-bottom: solid 1px rgba(142, 138, 116, 0.5);

    &:nth-last-child(1) {
      border-top: none;
    }
  }

  .toggle-title {
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.09;
    letter-spacing: 0.4px;
    text-align: left;
    color: #333333;
  }

  .toggle-btn {
    background-color: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: relative;
    &:before {
      content: '';
      background: #707070;
      width: 1px;
      height: 14px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      right: 0;
      margin: 0 auto;
    }
    &:after {
      content: '';
      background: #707070;
      width: 14px;
      height: 1px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }

  .butterfly {
    width: sizem(52);
    top: sizem(307);
    right: auto;
    left: 0;
  }
  .line {
    width: sizem(330);
    top: auto;
    bottom: sizem(10);
    right: auto;
    left: 0;
  }
  .leaf {
    width: sizem(163);
    top: auto;
    bottom: sizem(-90);
    right: sizem(-20);
  }

  .dialog {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: scroll;

    .dialog-content {
      width: sizem(340);
      height: sizem(556);
      background-color: #fff;
      border-radius: 20px;
      padding: sizem(15);
      overflow: scroll;
    }

    .close {
      width: 35px;
      background: rgba(0, 0, 0, 0.7);
      padding: 5px;
      position: absolute;
      right: sizem(30);
      top: sizem(68);
    }

    .dialog-title {
      font-size: sizem(25);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.44;
      letter-spacing: normal;
      text-align: left;
      color: #000000;
      margin-top: sizem(45);
    }
    .dialog-subtitle {
      font-size: sizem(20);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.09;
      letter-spacing: 1.6px;
      text-align: left;
      color: #333333;
      margin-top: sizem(10);
    }
    .dialog-smalltitle {
      font-size: sizem(18);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.33;
      letter-spacing: 3.24px;
      text-align: left;
      color: #8e8a74;
    }
    .dialog-desc {
      font-size: sizem(15);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.17;
      letter-spacing: normal;
      text-align: left;
      color: #8e8a74;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section3',

  mixins: [slider],

  data() {
    return {
      isMobile,
      isTablet,
      isDialog: false,
      toggleIndex: 0,
      toggleList: [
        {
          title: '走遍大城居小城',
          subtitle: '靜享五結鄉居悠然情調',
          smalltitle: '宜居宜遊宜置產',
          desc:
            '宜蘭縣以觀光立縣，文創結合旅遊、觀光交通動線，致力於環境美化，推展生活多元化、休閒多樣化。宜蘭縣並且為全台投資保障最高的地區之一、擁有令人嚮往的風土民情，兼具交通、自然環境、人文氣息自成一格。<br />年度旅客人次最多的3大景點為「冬山河親水公園」、「傳統藝術中心」和「梅花湖」，【小城故事】就位於其中兩處周邊，宜居宜遊宜置產，追求多元房產效益的首選。',
        },
        {
          title: '走遍大城居小城',
          subtitle: '約3分鐘宜蘭人氣No.1羅東夜市',
          smalltitle: '人潮錢潮含金量超高地段',
          desc:
            '國5雪隧開通，帶動宜蘭觀光潮，週休2日小型度假、雙北休閒養生輕移民，帶動人潮錢潮湧入。羅東夜市排隊美食，小春糕渣卜肉、照燒皮蛋、羅東肉羹番國宴上等肉捲七巧味、三星蔥多餅、鄭記潤餅捲、嘟好燒、皇佳三星蔥肉串、阿灶伯當歸羊肉、羅東紅豆湯圓、東山鴨頭…..美食環繞、商機無限。',
        },
      ],
      slideList: [
        {
          img: require('./mo/3/1國立宜蘭傳統藝術中心.jpg'),
          name: '國立宜蘭傳統藝術中心',
        },
        {
          img: require('./mo/3/2五結行政中心.jpg'),
          name: '五結行政中心',
        },
        {
          img: require('./mo/3/3冬山河親水公園.jpg'),
          name: '冬山河親水公園',
        },
        {
          img: require('./mo/3/4便利商店.jpg'),
          name: '便利商店',
        },
        {
          img: require('./mo/3/5羅東夜市.jpg'),
          name: '羅東夜市',
        },
      ],
    }
  },

  methods: {
    showDialog(index) {
      this.toggleIndex = index
      this.isDialog = true
    },
  },

  created() {},

  mounted() {},

  computed: {},
}
</script>
