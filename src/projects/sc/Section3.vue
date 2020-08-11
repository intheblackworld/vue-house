<template>
  <div>
    <div class="section3">
      <h3
        class="slogan absolute"
        data-aos="fade-up"
        data-aos-delay="600"
        v-if="!isMobile"
      >漫步城南溫羅汀、康青龍藝文品味街廓，緣牆裡有迷人故事，空氣裡有書香、美味香、咖啡香…</h3>
      <h3
        class="slogan absolute"
        data-aos="fade-up"
        data-aos-delay="600"
        v-if="isMobile"
      >漫步城南溫羅汀、康青龍藝文品味街廓，<br />緣牆裡有迷人故事，<br />空氣裡有書香、美味香、咖啡香…</h3>
      <h3
        class="title absolute"
        data-aos="fade-up"
        data-aos-delay="200"
      >倚師大百年學識書香<br />浦城靜謐街區門牌難得珍稀</h3>
      <h3
        class="desc absolute"
        data-aos="fade-up"
        data-aos-delay="400"
      >師範大學成立於1926年，是培育台灣影響力的教育種子，大師輩出、碩彥鴻儒世代傳承。近倚師大的浦城靜巷，街廓整齊慢活步調，鄰近文學大師梁實秋故居雅舍，人文靜巷幾近於零遷出率，極少推出新案，土地珍稀難得 。</h3>
      <div
        class="swipe absolute"
        @mouseenter.stop="toggleTimer = false"
        @mouseleave.stop="toggleTimer = true"
      >
      <div class="txt absolute" v-html="slideList[slideIndex].txt"></div>
        <div class="swipe-wrap relative">
          <img
            v-for="(slide, i) in slideList"
            :src="slide.img"
            :key="slide.img"
            :alt="slide.alt"
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
        data-aos="fade-down"
        data-aos-delay="800"
      >
        <div>
          <img
            src="./s2/icon.png"
            alt=""
            class="block-icon"
          >
          <h3 class="block-title" v-html="slideList[slideIndex].btitle"></h3>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.Masthead {
  overflow: visible !important;
  z-index: 1 !important;
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: 100vw;
  height: size(490 + 720);
   margin: 0 0 size(80) 0;
  // background-image: url('./s1/bg.jpg');
  // background-size: cover;
  // background-attachment: fixed;
}

.float-block {
  width: size(150);
  height: size(393);
  top: size(-185);
  right: size(289);
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  z-index: 3;
  font-size: size(40);
  color: #c1724b;
  .block-icon {
    width:1em;
    margin-bottom: 0.7em;
  }
  .block-title {
    width:1em;
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
.txt{
  color: #fff;
  z-index: 3;
  top: size(10);
  left: size(10);
  font-size: size(15);
  text-align: left;
  line-height: 1.5;
}
.swipe {
  width: size(1040);
  height: size(720);
  top: 0;
  right: size(183);
  object-fit: cover;
}
/*
.swipe-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 2;
  position: relative;
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
*/
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
  .section3 {
    width: 100vw;
    height: size-m(340 + 503);
    // background-image: url('./s1/bg.jpg');
    // background-size: cover;
    // background-attachment: fixed;
  }

  .float-block {
    width: size-m(50);
    height: size-m(131);
    top: size-m(-45);
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
.txt{
  top: size-m(10);
  left: size-m(10);
  font-size: size-m(13);
  width:size-m(260);

}

  .swipe {
    width: 100vw;
    height: size-m(340);
    top: 0;
    left: 0;
    object-fit: cover;
  }
/*
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
*/
  .slogan {
    width: size-m(300);
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: size-m(80);
    left: 0;
    font-size: size-m(16);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.85;
    letter-spacing: normal;
    text-align: center;
    color: #004980;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import Parallax from 'vue-parallaxy'
import slider from '@/mixins/slider.js'

export default {
  name: 'section3',

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
          img: require('./s3/1.jpg'),
          btitle:"師大賦境",
          alt:"師大賦境",
          txt:""
        },
        {
          img: require('./s3/2.jpg'),
          btitle:"大安富域",
          alt:"大安富域-古亭雙捷",
          txt:"古亭雙捷-松山新店線及中和新蘆線雙線交會，出站5分鐘輕鬆到家"
        },
        {
          img: require('./s3/3.jpg'),
          btitle:"大安富域",
          alt:"大安富域-金融大道",
          txt:"金融大道-羅斯福路匯集各大銀行機構，接壤博愛特區"
        },
        {
          img: require('./s3/4.jpg'),
          btitle:"大安富域",
          alt:"大安富域-繁華商圈",
          txt:"繁華商圈-師大、公館、永康三大商圈核心，地段願景蓬勃發展"
        },
        {
          img: require('./s3/5.jpg'),
          btitle:"大安富域",
          alt:"大安富域-人文流域",
          txt:"人文流域-台師大人文流域底蘊，幅跨中正紀念堂、國家兩廳院"
        },
        {
          img: require('./s3/6.jpg'),
          btitle:"大安富域",
          alt:"大安富域-藝文地景",
          txt:"藝文地景-全國書店密集度最高的溫羅汀街區，漫步康青龍藝文品味"
        },
        {
          img: require('./s3/7.jpg'),
          btitle:"大安富域",
          alt:"大安富域-明星學園",
          txt:"明星學園-金華國中、古亭國小明星學區，緊鄰師大綠園地"
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
