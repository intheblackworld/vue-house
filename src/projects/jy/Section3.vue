<template>
  <div>
    <div class="section3">
      <img
        v-if="isPC"
        src="./s3/bg.jpg"
        alt=""
        class="bg-img"
      >

      <img
        v-if="isMobile"
        src="./s3/bg_m.jpg"
        alt=""
        class="img absolute"
      >
      <div
        class="block absolute"
        data-aos="fade-down"
        data-aos-delay="0"
      >
      </div>
      <div
        class="desc absolute"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        【築億丰盛】居大同區核心部位，區內幹道重慶北路、承德路、民權西路、民族西路包圍，步行生活圈內即享完善生活機能：學區、銀行、家樂福、公園，居家生活沉浸於文教區、公園宅氛圍，飯後養生漫步、假日家庭休閒，綠蔭舒心慢活愜意。騎車約6分鐘，抵淡水河岸自行車道，風光水綠隨時出發。迪化大稻埕，南往龍山華江，北接延平、雙溪、八里左岸，東至大佳、大直河濱，飛輪乘風一路暢遊，樂活享受雙北河濱風光。
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
    height: sizem(320 + 310);
    min-height: auto;
    background-image: none;
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .block {
    display: none;
  }

  .img {
    width: sizem(375);
    top: sizem(320);
    left: sizem(0);
  }
  .icon {
    width: sizem(73);
    top: sizem(240);
    right: sizem(20);
  }
  .desc {
    width: sizem(315);
    top: sizem(32);
    left: sizem(32);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: sizem(0.9);
    text-align: left;
    color: #4d4d4d;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section3',

  mixins: [slider],

  data() {
    return {
      isPC,
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
