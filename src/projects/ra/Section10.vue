<template>
  <div>
    <div class="section10">
      <img
        src="./s10/bg.png"
        alt=""
        class="bg-img"
      >
      <div
        class="swipe absolute"
        data-aos="fade-right"
        data-aos-delay="200"
        @mouseenter.stop="toggleTimer = false"
        @mouseleave.stop="toggleTimer = true"
      >
        <div class="swipe-wrap relative">
          <div
            v-for="(slide, i) in slideList"
            :key="slide.img"
            :class="`swipe-item absolute ${slideIndex === i ? 'active' : ''} ${(slideIndex === (i + 1) || slideIndex === (i - slideList.length + 1)) ? 'base' : ''}`"
          >
      <div class="txt absolute">
            <div
              :class="`title ${slideIndex === i ? 'active' : ''}`"
              v-html="slide.title"
            ></div>
            <div
              :class="`desc ${slideIndex === i ? 'active' : ''}`"
              v-html="slide.desc"
            ></div>
          </div>
            <img
              :src="slide.img"
              alt=""
              :class="`img absolute ${slideIndex === i ? 'active' : ''}`"
            >
          </div>
          <div class="pagination absolute flex-ac">
            <div
              :class="`pagination-dot`"
              v-for="(slide, index) in slideList"
              :key="slide.img + '-dot'"
              @click="goTo(index)"
            ><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <!-- <div class="swipe-btns absolute flex-ac flex-jb">
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
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section10 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  // overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: auto;
  min-height: size(1800);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  // object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.img,
.title,
.desc {
  opacity: 0;
  transition: opacity 1s ease-in-out;

  &.active {
    opacity: 1;
  }
}

.txt {
  width: 40%;
  height:100%;
  top:0;
  right:calc(3.5% + 50px);
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  color: #000;z-index: 2;
  display: flex;align-items:center;flex-direction:column;justify-content:center;
}
.title {
  font-size:1.8em;
  font-weight: bold;
  line-height: 1.34;
  letter-spacing: 0.08em;
  text-align: center;
  color: #a68367;
  white-space: nowrap;
  margin: 0.5em 0 0.5em 0;
}

.desc {
  line-height: 2.05;
  letter-spacing: 0.04em;
  text-align: justify;
  margin:0 0 3em 0;
}

.img {
  height:size(880);
  max-height: 90%;
  top:50%;
  right:53%;
  transform: translateY(-50%);
}

.swipe {
  width: 100vw;
  height: 100vh;
  min-height: size(900);
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
  left: 0;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  z-index: 0;

  &:nth-child(1) {
    z-index: 1;
    opacity: 1;
  }

  &.base {
    z-index: 1;
    opacity: 1;
  }
  &.active {
    z-index: 2;
    opacity: 1;
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
    box-shadow: 0 0 0 1px #9fa0a0;
    position: relative;
    background-color: rgba(0, 0, 0, 0.01);
    transition: all 0.5s;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      display: block;
      background: #9fa0a0;
      border-radius: 20px;
      opacity: 1;
      position: absolute;
      // top: 20%;
      // // transform: translateY(-50%);
      // left: 20%;
      transition: all 0.3s;
      transform-origin: center;
      transform: scale(0);
    }
    &.active {
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background: #9fa0a0;
        border-radius: 20px;
        opacity: 1;
        position: absolute;
        // top: 20%;
        // // transform: translateY(-50%);
        // left: 20%;
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
  .section10 {
    width: 100vw;
    height: size-m(745);
    // background-image: url('./s1/bg.jpg');
    // background-size: cover;
    // background-attachment: fixed;
  }

  .title {
    width: 90vw;
    top: sizem(31);
    left: 0;
    right: 0;
    margin: 0 auto;
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: 3.5px;
    text-align: center;
    color: #a38057;
    white-space: nowrap;
  }

  .desc {
    width: 80vw;
    top: sizem(116);
    left: 0;
    right: 0;
    margin: 0 auto;
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: 0.9px;
    text-align: left;
    color: #04040c;
    // white-space: nowrap;
  }

  .img {
    width: sizem(299);
    top: sizem(325);
    left: sizem(38);
  }

  .swipe {
    width: 100vw;
    height: 100%;
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
  name: 'section10',

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
          img: require('./s10/1.png'),
          title: '超越靜巷規格<br />精鑄工法禮遇',
          desc:
            '1.即使座落寧靜名巷,仍堅持窗、牆、地板,達最高靜音等級。<br />2.尊重瑞安街綠樹參天景致,堅守綠建築擘建,禮敬住宅生態。<br />3.採抗震力極優「SA級鋼筋續接頭」從零件細節,進化安全。',
        },
        {
          img: require('./s10/2.png'),
          title: '專屬APP隨時隨地掌握<br />優雅豪邸 高端智能保全',
          desc:
            '以「雲端化智慧安控社區服務鏈IM E-Service」為住宅償值再升級！概念是透過居室内、外各安控系統間,如防盜影視對講系統、FULL HD數位影像監控系統、門禁管制等,藉由整合Etag車道管制及電子信箱取信。結合APP整合住家安防,提供電子訪客換證及掛號信件提醒。享受隱私權與便利保全,雙贏合一。',
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
