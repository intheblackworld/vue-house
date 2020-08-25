<template>
  <div>
    <div
      class="section3"
      v-if="!isMobile"
    >
      <div class="top relative">
        <div class="one absolute">
          <img
            src="./s3/1.jpg"
            alt="國立宜蘭傳統藝術中心"
            data-aos="fade-right"
            data-aos-delay="0"
          >
          <h3
            class="txt txt-one absolute"
            data-aos="fade-right"
            data-aos-delay="100"
          >國立宜蘭傳統藝術中心</h3>
        </div>
        <div class="two absolute">
          <img
            src="./s3/2.jpg"
            alt="五結行政中心"
            data-aos="fade-down"
            data-aos-delay="200"
          >
          <h3
            class="txt txt-two absolute"
            data-aos="fade-right"
            data-aos-delay="300"
          >五結行政中心</h3>
        </div>
        <div class="three absolute">
          <img
            src="./s3/3.jpg"
            alt="冬山河親水公園"
            data-aos="fade-down"
            data-aos-delay="400"
          >
          <h3
            class="txt txt-three absolute"
            data-aos="fade-right"
            data-aos-delay="500"
          >冬山河親水公園</h3>
        </div>
      </div>
      <div class="bottom relative">
        <img
          src="./deck/butterfly.png"
          alt="butterfly"
          class="butterfly absolute"
        >
        <img
          src="./deck/line.png"
          alt="line"
          class="line absolute"
          data-aos="fade"
          data-aos-delay="400"
        >
      <div class="leaf1 absolute"
        data-aos="fade-down-left"
        data-aos-delay="200">
        <img
          src="./deck/leaf.png"
          alt="leaf"
        >
        </div>
      <div class="leaf2 absolute"
        data-aos="fade-down-left"
        data-aos-delay="200">
        <img
          src="./deck/leaf.png"
          alt="leaf"
        >
        </div>
        <div class="four absolute">
        <img
          src="./s3/4.jpg"
          alt=""
          data-aos="fade-down"
          data-aos-delay="600"
        >
        <h3
          class="txt txt-four absolute"
          data-aos="fade-right"
          data-aos-delay="500"
        >便利商店</h3>
        </div>
        <div class="five absolute">
        <img
          src="./s3/5.jpg"
          alt=""
          data-aos="fade-down"
          data-aos-delay="800"
        >
        <h3
          class="txt txt-five absolute"
          data-aos="fade-right"
          data-aos-delay="900"
        >羅東夜市</h3>
        </div>
        <h3
          class="title absolute"
          data-aos="fade-down"
          data-aos-delay="200"
        >走遍大城居小城</h3>
        <div class="content">
          <h3
            class="subtitle"
            data-aos="fade-right"
            data-aos-delay="200"
          >靜享五結鄉居悠然情調</h3>
          <h3
            class="smalltitle"
            data-aos="fade-right"
            data-aos-delay="400"
          >宜居宜遊宜置產</h3>
          <h3
            class="desc"
            data-aos="fade-right"
            data-aos-delay="600"
          >宜蘭縣以觀光立縣，文創結合旅遊、觀光交通動線，致力於環境美化，推展生活多元化、休閒多樣化。宜蘭縣並且為全台投資保障最高的地區之一、擁有令人嚮往的風土民情，兼具交通、自然環境、人文氣息自成一格。<br />
            &nbsp;&nbsp;&nbsp;&nbsp;年度旅客人次最多的3大景點為「冬山河親水公園」、「傳統藝術中心」和「梅花湖」，【小城故事】就位於其中兩處周邊，宜居宜遊宜置產，追求多元房產效益的首選。
          </h3>

          <h3
            class="subtitle"
            data-aos="fade-right"
            data-aos-delay="700"
          >約10分鐘宜蘭人氣No.1羅東夜市 </h3>
          <h3
            class="smalltitle"
            data-aos="fade-right"
            data-aos-delay="900"
          >人潮錢潮含金量超高地段</h3>
          <h3
            class="desc"
            data-aos="fade-right"
            data-aos-delay="1100"
          >國5雪隧開通，帶動宜蘭觀光潮，週休2日小型度假、雙北休閒養生輕移民，帶動人潮錢潮湧入。羅東夜市排隊美食，小春糕渣卜肉、照燒皮蛋、羅東肉羹番國宴上等肉捲七巧味、三星蔥多餅、鄭記潤餅捲、嘟好燒、皇佳三星蔥肉串、阿灶伯當歸羊肉、羅東紅豆湯圓、東山鴨頭…..美食環繞、商機無限。</h3>
        </div>
      </div>
    </div>
    <div
      class="section3"
      v-if="isMobile"
    >
      <div
        class="swipe absolute"
        data-aos="fade-right"
        data-aos-delay="200"
        @mouseenter.stop="toggleTimer = false"
        @mouseleave.stop="toggleTimer = true"
      >
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <div
            v-for="(slide, i) in slideList"
            :key="slide.img"
            :class="`swipe-item absolute ${slideIndex === i ? 'active' : ''} ${(slideIndex === (i + 1) || slideIndex === (i - slideList.length + 1)) ? 'base' : ''}`"
          >
            <img
              :src="slide.img"
              alt=""
            >
            <h3
              class="name absolute"
              v-html="slide.name"
            ></h3>
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
      <h3 class="title">走遍大城居小城</h3>
      <div class="toggle-list">
        <div
          class="toggle-item flex-ac flex-jb"
          @click="showDialog(0)"
        >
          <h3 class="toggle-title">靜享五結鄉居悠然情調</h3>
          <div class="toggle-btn"></div>
        </div>
        <div
          class="toggle-item flex-ac flex-jb"
          @click="showDialog(1)"
        >
          <h3 class="toggle-title">約10分鐘宜蘭人氣No.1羅東夜市</h3>
          <div class="toggle-btn"></div>
        </div>
      </div>
      <img
        src="./deck/butterfly.png"
        alt=""
        class="absolute butterfly"
      >
      <div class="leaf absolute"
        data-aos="fade-down-left"
        data-aos-delay="200">
      <img
        src="./deck/leaf.png"
        alt="leaf"
      ></div>
      <div class="line absolute"
        data-aos="fade-down-left"
        data-aos-delay="200">
      <img
        src="./deck/line.png"
        alt="line"
      ></div>
      <div
        class="dialog flex-c"
        v-show="isDialog"
      >
        <div class="dialog-content">
          <img
            class="close"
            @click="isDialog = false"
            src="./all/close.png"
            alt="close"
          >
          <div
            class="dialog-title"
            v-html="toggleList[toggleIndex].title"
          ></div>
          <div
            class="dialog-subtitle"
            v-html="toggleList[toggleIndex].subtitle"
          ></div>
          <div
            class="dialog-smalltitle"
            v-html="toggleList[toggleIndex].smalltitle"
          ></div>
          <div
            class="dialog-desc"
            v-html="toggleList[toggleIndex].desc"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: size(1920);
  // height: 100vh;
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
.top {
  width: 100vw;
  height: size(605);
  background-color: #8f8a74;
}
.one {
  width: size(1020);
  top: 0;
  left: 0;
    img{width: 100%;}
}

.two {
  width: size(575);
  top: size(53);
  right: size(182);
    img{width: 100%;}
}

.three {
  width: size(575);
  top: size(329);
  right: size(182);
    img{width: 100%;}
}
.four {
  width: size(575);
  top: size(0);
  right: size(182);
    img{width: 100%;}
}
.five {
  width: size(575);
  top: size(276);
  right: size(182);
    img{width: 100%;}
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
  bottom: size(10);
  right: size(10);
}

.txt-two,
.txt-three,
.txt-four,
.txt-five {
  bottom: size(10);
  left: size(10);
}

.bottom {
  width: 100vw;
//  height: size(577);
  background-color: #fff;
  overflow: hidden;
}

.butterfly {
  width: size(106);
  top: size(307);
  right: size(926);transform:rotate(-70deg);

}
.line {
  width: size(565);
  top: size(366);
  right: size(679);
}
.leaf1 {
  width: size(167);
  top: size(338);
  right: size(757);
    img{width: 100%;transform:scaleX(-1) rotate(-90deg);}
}
.leaf2 {
  width: size(107);
  top: size(190);
  right: size(880);
    img{width: 100%;transform: rotate(190deg);}
}

.title {
  top: size(20);
  left: size(221);
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
  white-space: nowrap;
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

.smalltitle {
  font-size: size(24);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.74;
  letter-spacing: 4.32px;
  text-align: left;
  color: #8e8a74;
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
  width: size(570);
  top: size(0);margin: size(29) 0;
  left: size(355);
  position: relative;
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
    line-height:1.8;
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
    width: sizem(400);
    top: auto;
    bottom: sizem(10);
    right: auto;
    left:sizem(-100);
    img{width: 100%;}
  }
  .leaf {
    width: sizem(150);
    top: auto;
    bottom: sizem(-50);
    right: sizem(-20);
    img{width: 100%;transform:scaleX(-1) rotate(-80deg);}
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
          subtitle: '約10分鐘宜蘭人氣No.1羅東夜市',
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
