<template>
  <div>
    <div
      class="section4"
      v-if="!isMobile"
    >
      <img
        src="./s4/1.jpg"
        alt=""
        class="one absolute"
        data-aos="fade-right"
        data-aos-delay="200"
      >
      <h3
        class="txt txt-one absolute"
        data-aos="fade-right"
        data-aos-delay="300"
      >情境示意圖</h3>
      <h3
        class="title absolute"
        data-aos="fade-down"
        data-aos-delay="400"
      >弱水三千取一瓢</h3>
      <div
        class="content absolute"
        data-aos="fade"
        data-aos-delay="400"
      >
        <h3
          class="subtitle"
          data-aos="fade-right"
          data-aos-delay="600"
        >約8分鐘生活圈<br />校園、商圈齊備</h3>
        <h3
          class="desc"
          data-aos="fade-right"
          data-aos-delay="800"
        >利澤國中、利澤國小、五結國中、五結國小….近在咫尺，生活機能便利、自然景點圍繞，近傳統藝術中心、親水公園自行車步道、利澤沙丘海岸，3分鐘五結市區、五結鄉行政中心、冬山河親水公園、羅東轉運站、羅東夜市、喜互惠、全聯、各大超商，6-7分鐘直達羅東市區。<br />
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
    <div
      class="section4"
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
      <h3 class="title">弱水三千取一瓢</h3>
      <div class="toggle-list">
        <div
          class="toggle-item flex-ac flex-jb"
          @click="showDialog(0)"
        >
          <h3 class="toggle-title">約8分鐘生活圈<br />校園、商圈齊備</h3>
          <div class="toggle-btn"></div>
        </div>
      </div>
      <img
        src="./deck/butterfly.png"
        alt=""
        class="absolute butterfly"
      >
      <img
        src="./deck/leaf.png"
        alt=""
        class="absolute leaf"
      >

      <img
        src="./deck/line.png"
        alt=""
        class="absolute line"
      >
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
    height: sizem(300 + 303);
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
    height: sizem(90);
    border-top: solid 1px rgba(142, 138, 116, 0.5);
    border-bottom: solid 1px rgba(142, 138, 116, 0.5);

    // &:nth-last-child(1) {
    //   border-top: none;
    // }
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
  name: 'section4',

  mixins: [slider],

  data() {
    return {
      isMobile,
      isTablet,
      isDialog: false,
      toggleIndex: 0,
      toggleList: [
        {
          title: '弱水三千取一瓢',
          subtitle: '約8分鐘生活圈<br />校園、商圈齊備',
          smalltitle: '',
          desc:
            '利澤國中、利澤國小、五結國中、五結國小….近在咫尺，生活機能便利、自然景點圍繞，近傳統藝術中心、親水公園自行車步道、利澤沙丘海岸，3分鐘五結市區、五結鄉行政中心、冬山河親水公園、羅東轉運站、羅東夜市、喜互惠、全聯、各大超商，6-7分鐘直達羅東市區。<br />羅東轉運站未來發展，目前有HOLA、特力屋、村却國際溫泉酒店，未來自辦興建轉運功能，納入商場、餐廳，規劃四樓做為餐廳與藝文空間、三樓小農市集、二樓餐廳與百貨賣場、一樓是轉運站，地下室則是停車空間，預計2021年完工。另未來計畫延伸鐵路3鐵共構(台鐵、直線鐵路、高鐵)，信大水泥進駐羅東後火車站等。',
        },
      ],
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
      slideList: [
        {
          img: require('./mo/4/1五結國小.jpg'),
          name: '五結國小',
        },
        {
          img: require('./mo/4/2五結國中.jpg'),
          name: '五結國中',
        },
        {
          img: require('./mo/4/3利澤國小.jpg'),
          name: '利澤國小',
        },
        {
          img: require('./mo/4/4利澤國中.jpg'),
          name: '利澤國中',
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
