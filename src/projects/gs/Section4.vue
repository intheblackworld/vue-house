<template>
  <div>
    <div class="section4">
      <img
        src="./s4/1.jpg"
        alt=""
        class="one absolute"
        data-aos="fade-right"
        data-aos-delay="200"
      >
      <h3 class="txt txt-one absolute" data-aos="fade-right"
          data-aos-delay="300">情境示意圖</h3>
      <h3 class="title absolute" data-aos="fade-down"
          data-aos-delay="400">弱水三千取一瓢</h3>
      <div class="content absolute" data-aos="fade"
          data-aos-delay="400">
        <h3 class="subtitle" data-aos="fade-right"
          data-aos-delay="600">約8分鐘生活圈<br />校園、商圈齊備</h3>
        <h3 class="desc" data-aos="fade-right"
          data-aos-delay="800">利澤國中、利澤國小、五結國中、五結國小….近在咫尺，生活機能便利、自然景點圍繞，近傳統藝術中心、親水公園自行車步道、利澤沙丘海岸，3分鐘五結市區、五結鄉行政中心、冬山河親水公園、羅東轉運站、羅東夜市、喜互惠、全聯、各大超商，6-7分鐘直達羅東市區。<br />
          &nbsp;&nbsp;&nbsp;&nbsp;羅東轉運站未來發展，目前有HOLA、特力屋、村却國際溫泉酒店，未來自辦興建轉運功能，納入商場、餐廳，規劃四樓做為餐廳與藝文空間、三樓小農市集、二樓餐廳與百貨賣場、一樓是轉運站，地下室則是停車空間，預計2021年完工。另未來計畫延伸鐵路3鐵共構(台鐵、直線鐵路、高鐵)，信大水泥進駐羅東後火車站等。
        </h3>

      </div>
      <img
        src="./deck/butterfly.png"
        alt=""
        class="butterfly absolute"
        data-aos="fade"
        data-aos-delay="800"
      >
      <img
        src="./deck/tree.png"
        alt=""
        class="tree absolute"
        data-aos="fade"
        data-aos-delay="1000"
      >
      <img
        src="./deck/leaf.png"
        alt=""
        class="leaf absolute"
        data-aos="fade"
        data-aos-delay="1100"
      >

      <img
        src="./deck/leaf.png"
        alt=""
        class="leaf2 absolute"
        data-aos="fade"
        data-aos-delay="1200"
      >

      <div class="img-list flex-ac flex-jb wrap absolute">
        <div
          class="img-item relative"
          v-for="(item, index) in img_list"
          :key="item.img"
          data-aos="fade-down"
          :data-aos-delay="600 + (index * 100)"
        >
          <img
            :src="item.img"
            alt=""
          >
          <h3
            class="txt absolute"
            v-html="item.txt"
          ></h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: size(1920);
  height: size(684 + 283);
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
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
.one {
  width: size(1020);
  top: 0;
  left: 0;
}

.txt {
  font-size: size(13);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.64;
  letter-spacing: 3.31px;
  text-align: left;
  color: #ffffff;
}

.txt-one {
  bottom: size(298);
  left: size(922);
}

.butterfly {
  width: size(93);
  top: size(60);
  right: size(341);
}
.tree {
  width: size(144);
  top: size(55);
  right: size(203);
}

.leaf2 {
  width: size(124);
  bottom: size(114);
  left: size(108);
  transform: rotate(-90deg);
}

.leaf {
  width: size(126);
  top: size(500);
  right: size(680);
}

.title {
  top: size(30);
  right: size(801);
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-size: size(56);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.32;
  letter-spacing: 19.04px;
  text-align: left;
  color: #000000;
}

.subtitle {
  font-size: size(30);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 5.4px;
  text-align: left;
  color: #333333;
}

.desc {
  font-size: size(16);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.03;
  letter-spacing: 0.64px;
  text-align: left;
  color: #8e8a74;
  margin-bottom: size(20);
}

.content {
  width: size(578);
  height: size(578);
  border: 7px solid #8e8a74;
  top: size(45);
  right: size(175);
  padding: size(28);
}

.img-list {
  width: size(357 * 4 + 20 * 3);
  bottom: size(48);
  left: 0;
  right: 0;
  margin: 0 auto;
  .img-item {
    width: size(357);

    img {
      width: 100%;
    }
  }

  .txt {
    left: size(20);
    bottom: size(7);
    font-size: size(13);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.64;
    letter-spacing: 3.25px;
    text-align: left;
    color: #ffffff;
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
  .section4 {
    width: 100vw;
    height: calc(100vh - 63px);
    min-height: auto;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .bg-img {
    width: 100vw;
    height: calc(100vh - 63px);
    min-height: auto;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    object-fit: cover;

    &:nth-child(1) {
      position: relative;
    }
  }

  .title {
    width: size-m(268);
    top: size-m(34);
    right: 0;
    left: 0;
    margin: 0 auto;
    li {
      font-size: size-m(25);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.44;
      letter-spacing: 2px;
      text-align: center;
      color: #231815;
      white-space: nowrap;
    }
  }

  .desc {
    bottom: size-m(26);
    right: 0;
    left: 0;
    margin: 0 auto;
    width: size-m(310);
    font-size: size-m(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: 0.3px;
    text-align: justify;
    color: #ffffff;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section4',

  data() {
    return {
      isMobile,
      isTablet,
      img_list: [
        {
          img: require('./s4/2-1.jpg'),
          txt: '五結國小',
        },
        {
          img: require('./s4/2-2.jpg'),
          txt: '五結國中',
        },
        {
          img: require('./s4/2-3.jpg'),
          txt: '利澤國小',
        },
        {
          img: require('./s4/2-4.jpg'),
          txt: '利澤國中',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
