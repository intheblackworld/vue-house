<template>
  <div>
    <div class="section5">
      <h3
        class="title absolute"
        data-aos="fade-top"
        data-aos-delay="200"
        v-html="slideList[slideIndex].title"
      ></h3>
      <h3
        class="desc absolute"
        data-aos="fade-top"
        data-aos-delay="400"
        v-html="slideList[slideIndex].desc"
      ></h3>
      <div
        class="swipe absolute"
        @mouseenter.stop="toggleTimer = false"
        @mouseleave.stop="toggleTimer = true"
      >
        <div class="swipe-wrap relative">
          <img
            v-for="(slide, i) in slideList"
            :src="slide.img"
            :key="slide.img"
            :alt="slide.btitle"
            :class="`swipe-item absolute ${slideIndex === i ? 'active' : ''} ${(slideIndex === (i + 1) || slideIndex === (i - slideList.length + 1)) ? 'base' : ''}`"
          >
          <div class="pagination absolute flex-ac">
            <div
              :class="`pagination-dot`"
              v-for="(slide, index) in slideList"
              :key="slide.img + '-dot'"
              @click="goTo(index)"
            ><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb">
            <img
              src="./all/prev-btn.png"
              alt=""
              class="prev-btn"
              @click="decIndex"
            >
            <img
              src="./all/next-btn.png"
              alt=""
              class="next-btn"
              @click="addIndex"
            >
          </div>
        </div>
      </div>
      <div
        class="float-block flex-c absolute"
        v-rellax="{
      // Rellax Options
      // See: https://github.com/dixonandmoe/rellax#features
      speed: -1.5,
    }"
      >
        <div>
          <img
            src="./s2/icon.png"
            alt=""
            class="block-icon"
          >
          <h3
            class="block-title"
            v-html="slideList[slideIndex].btitle"
          ></h3>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import '@/assets/style/function.scss';
.year {
  font-size: size(19);
  font-weight: normal;
  white-space: nowrap;
  span {
    color: #c1724b !important;
  }
}

.desc {
  h3 {
    font-weight: normal;
  }
}

.reward {
  width: size(409);
  margin-top: size(30);
}

@media screen and (max-width: 767px) {
  .year {
    line-height: 0.2;
    font-size: size-m(13);
  }

  .reward {
    width: 100%;
    margin-top: size-m(20);
  }
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: 100vw;
  height: size(340 + 720);
  // background-image: url('./s1/bg.jpg');
  // background-size: cover;
  // background-attachment: fixed;
}

.float-block {
  width: size(150);
  // height: size(393);
  top: size(-900);
  right: size(289);
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  z-index: 3;
  font-size: size(40);
  color: #c1724b;
  padding: 1.1em 0;
  .block-icon {
    width: 1em;
    margin-bottom: 0.7em;
  }
  .block-title {
    width: 1em;
    line-height: 1.25;
    font-weight: normal;
  }
}

.title {
  top: size(150);
  left: size(183);
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: left;
  color: #004980;
}

.desc {
  width: size(442);
  top: size(340);
  left: size(180);
  font-size: size(21);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
}

.swipe {
  width: size(1040);
  height: size(720);
  top: 0;
  right: size(183);
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
  left: 100%;
  transition: left 1s ease-in-out;
  z-index: 0;

  &.base {
    z-index: 1;
    left: 0;
  }
  &.active {
    z-index: 2;
    left: 0;
  }
}

.pagination {
  width: auto;
  bottom: 20px;
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
    width: 20px;
    height: 20px;
    border-radius: 20px;
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
        left: 20%;
        transform: scale(1);
      }
    }
  }
}

.swipe-btns {
  width: 100%;
  height: 100%;
  padding: 0 15px;
  z-index: 3;

  .prev-btn,
  .next-btn {
    width: size(20);
    cursor: pointer;
  }
}

.slogan {
  width: 100vw;
  bottom: size(274);
  left: 0;
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: center;
  color: #004980;
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
  .section5 {
    width: 100vw;
    height: size-m(340 + 430);
    // background-image: url('./s1/bg.jpg');
    // background-size: cover;
    // background-attachment: fixed;
  }

  .float-block {
    width: size-m(50);
    // height: size-m(131);
    top: size-m(-520);
    left: auto;
    right: size-m(42);
    font-size: size-m(14);
    .block-icon {
    }
    .block-title {
    }
  }

  .title {
    top: size-m(364);
    right: auto;
    left: size-m(40);
    font-size: size-m(20);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: left;
    color: #004980;
  }

  .desc {
    width: size-m(295);
    top: size-m(445);
    right: auto;
    left: size-m(41);
    font-size: size-m(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.14;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
  }

  .swipe {
    width: 100vw;
    height: size-m(340);
    top: 0;
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
    left: 100%;
    transition: left 1s ease-in-out;
    z-index: 0;

    &.base {
      z-index: 1;
      left: 0;
    }
    &.active {
      z-index: 2;
      left: 0;
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
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import Parallax from 'vue-parallaxy'
import slider from '@/mixins/slider.js'

export default {
  name: 'section5',

  mixins: [slider],

  components: {
    Parallax,
  },

  data() {
    return {
      isMobile,
      isTablet,
      slideList: [
        {
          img: isMobile ? require('./mo/5/1.jpg') : require('./s5/1.jpg'),
          btitle: '展宜Ｘ真實建築',
          title: '有故事的土地<br />志同道合的建築人',
          desc:
            '〔拾秋〕土地原名〈志立樓〉公寓，五十多年來出租給師大學生，小小的石刻樓牌，蘊涵大大的冀望。展宜建築攜手真實建築誠摯開發，福澤深厚的暖巷，創作靜享生活的理想建築。',
        },
        {
          img: isMobile ? require('./mo/5/2.jpg') : require('./s5/2.jpg'),
          btitle: '展宜建築',
          title: '從訂製豪宅到微型小宅<br />十五年專注精品始終如一',
          desc:
            '2005年創立以來，堅持建築不在複製，而在創作，以把房子當Handmade聞名業界。秉持建築藝術化的理念，以設計為本質、藝術為靈魂、品質為骨幹，在千篇一律的建築中，讓城市有著不一樣的美麗表情。',
        },
        {
          img: isMobile ? require('./mo/5/3.jpg') : require('./s5/3.jpg'),
          btitle: '真實建築',
          title: '在城市新與舊的縫隙之間<br />填滿無限可能',
          desc: `重新定義都市更新，也走出更多都市再生的可能。在城市的新與舊之間，偕手以建築延續記憶，成就溫柔的建築。攜手展宜建築共同開發，創作浦城街區理想住宅。<br /><br /><h3 class="year"><span>2020</span> 南港興中路案 許國勝建築師&nbsp;&nbsp;平原英樹建築師  </h3><h3 class="year"><span>2020</span> 大安金華街案 李文勝建築師&nbsp;&nbsp;吳書原景觀設計師</h3>`,
        },
        {
          img: isMobile ? require('./mo/5/4.jpg') : require('./s5/4.jpg'),
          btitle: '創研空間',
          title: '與國際質感對位<br />全台首獲德國紅點設計金獎團隊',
          desc: `<h3>把建築與空間設計當成是一種藝術創作，不做大量產品，只做精緻作品，創造的不是居住容器，而是一種細緻的生活美學，十五年來屢獲國內外建築及空間設計大獎肯定。</h3><img src="${require('./s5/txt.png')}" class="reward"/>`,
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
