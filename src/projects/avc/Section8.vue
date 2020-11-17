<template>
  <div class="section8">
    <div class="block absolute"></div>
    <img
      src="./s8/bg.png"
      alt=""
      class="back absolute"
    >
    <div class="bg">
      <!-- <img
        src="./s1/butterfly2.png"
        alt=""
        class="fly2 absolute"
        data-aos="fade-up-left"
        data-aos-delay="800"
      >
      <img
        src="./s1/butterfly3.png"
        alt=""
        class="fly3 absolute"
        data-aos="fade-up-right"
        data-aos-delay="900"
      > -->
      <div class="txt absolute">
        <div
          class="title"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <h3>升等 世界級的<br />
            幸福空間</h3>
        </div>
        <div
          class="space"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          DESIGN SPACE
        </div>
        <div
          class="hr"
          data-aos="zoom-in-right"
          data-aos-delay="400"
        ></div>
        <div
          class="desc"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          【春福采采】延續煙波飯店美學眼光<br />
          以全齡化思考設計每項設施堅持把細節做到最細膩<br />
          讓體貼與感性，注入生活裡為家庭的每位成員<br />
          延伸展演美好生活的新場域
        </div>

        <div
          class="pagination flex-ac"
          data-aos="fade-left"
          data-aos-delay="800"
          v-if="isPC"
        >
          <div
            :class="`pagination-dot`"
            v-for="(slide, index) in slideList"
            :key="slide.img + '-dot'"
            @click="goTo(index)"
          ><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
        <div class="subtxt absolute">
          <div
            class="subtitle"
            data-aos="fade-left"
            data-aos-delay="1000"
            v-html="slideList[slideIndex].subtitle"
          ></div>
          <div
            class="text"
            data-aos="fade-left"
            data-aos-delay="1100"
            v-html="slideList[slideIndex].text"
          ></div>
        </div>
      </div>
      <div
        class="swipe absolute"
        data-aos="fade-up"
        data-aos-delay="200"
        @mouseenter.stop="toggleTimer = false"
        @mouseleave.stop="toggleTimer = true"
      >
        <div
          class="swipe-wrap relative"
          v-touch:swipe.left="decIndex"
          v-touch:swipe.right="addIndex"
        >
          <transition-group
            name="swipe-fade"
            mode="out-in"
          >
            <div
              v-for="(slide, i) in slideList"
              v-show="slideIndex === i"
              :key="slide.img"
              :class="`swipe-item absolute`"
            >
              <img
                :src="slide.img"
                :alt="slide.subtitle"
              >
              <div
                class="name absolute"
                v-html="slide.name"
              ></div>
            </div>
          </transition-group>
          <div
            class="swipe-btns absolute flex-ac flex-jb"
            v-if="isMobile"
          >
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  .bg {
    width: 1556px;
    height: 100%;
    max-width: 90%;
    position: relative;
    margin: auto;
  }
}

.block {
  width: size(1090);
  height: 100%;
  top: size(0);
  left: size(0);
  background-color: #d6aa99;
}

.back {
  width: size(534);
  top: size(35);
  left: size(0);
  // z-index: 2;
}

.fly2 {
  width: size(119);
  top: calc(50% + 2vw);
  right: size(70);
}

.fly3 {
  width: size(61);
  top: calc(50% + 8vw);
  right: size(0);
}
.txt {
  width: calc(100% - 57vw);
  top: 12%;
  right: size(0);
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(16);
  min-height: 76%;
}

.title {
  font-size: size(51.6);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: size(2.06);
  text-align: left;
  color: #333333;
  white-space: nowrap;
}

.hr {
  width: 100%;
  height: size(2);
  min-height: 1px;
  margin: size(31) 0;
  background-color: #af8680;
}

.desc {
  width: size(490);
  top: size(423);
  right: size(150);
  font-size: size(16);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.25;
  letter-spacing: size(1.12);
  text-align: left;
  color: #333333;
}
.subtxt {
  bottom: size(55);
  display: flex;
  align-items: center;
  left: size(0);
}
.subtitle {
  font-size: size(46.7);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: size(0.93);
  text-align: left;
  color: #d6aa99;
  padding: 0 0.5em 0 0;
  border-right: 2px solid #d6aa99;
  margin: 0 0.5em 0 0;
  white-space: nowrap;
}

.text {
  width: size(237);
  font-size: size(16);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: size(1.12);
  text-align: left;
  color: #333333;
}

.space {
  top: size(253);
  right: size(197);
  font-size: size(73.6);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(-4.18);
  text-align: left;
  color: #d6aa99;
}

/* Swipe */
.swipe {
  width: size(1030);
  height: 76%;
  top: 12%;
  left: size(0);
  object-fit: cover;
  z-index: 3;
}

// begin
.swipe-fade-leave-to {
  opacity: 0;
  z-index: 0;
}
// end
.swipe-fade-enter {
  opacity: 0;
  z-index: 1;
}

.swipe-fade-enter-active {
  transition: all 0.5s ease;
}

.swipe-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

// begin
// .swipe-left-leave-to {
//   margin-left: -100vw;
//   z-index: 0;
// }
// // end
// .swipe-left-enter {
//   opacity: 0.5;
//   margin-left: 0;
//   z-index: 1;
// }

// .swipe-left-enter-active {
//   transition: all 0.5s ease;
// }

// .swipe-left-leave-active {
//   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
// }

.swipe-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.swipe-item {
  width: 100%;
  height: 100%;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .name {
    right: size(20);
    bottom: size(20);
    font-size: size(66);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: -0.02em;
    text-align: left;
    color: #ffffff;
    opacity: 0.7;
  }

  // &:nth-child(1) {
  //   z-index: 1;
  //   // opacity: 1;
  // }

  // &.base {
  //   z-index: 1;
  //   opacity: 1;
  // }
  // &.active {
  //   z-index: 2;
  //   // opacity: 1;
  // }
}

.pagination {
  width: auto;
  //right: size(406);
  margin: size(64) auto;
  justify-content: flex-start;
}

.pagination-dot {
  padding: 5px;
  margin: 0 10px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    box-shadow: 0 0 0 1px #d6aa99;
    position: relative;
    background-color: rgba(0, 0, 0, 0.01);
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #d6aa99;
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
        width: 100%;
        height: 100%;
        display: block;
        background: #d6aa99;
        border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 0%;
        // transform: translateY(-50%);
        left: 0%;
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
  .section8 {
    width: 100vw;
    height: sizem(245 + 406);
    min-height: sizem(600);
    max-height: sizem(812);
    .bg {
      width: 100%;
      max-width: 100%;
    }
  }

  .block {
    display: none;
  }

  .space {
    position: absolute;
    top: auto;
    bottom: sizem(-80);
    right: 0;
    font-size: sizem(50);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(-1.8);
    text-align: left;
    color: #d6aa99;
    white-space: nowrap;
  }

  .fly2 {
    width: sizem(87);
    top: sizem(304);
    right: sizem(32);
  }

  .fly3 {
    display: none;
  }
  .txt {
    width: sizem(310);
    top: sizem(250);
    right: sizem(33);
    height: auto;
    font-size: sizem(15);
    min-height: 0%;
  }

  .title {
    width: 100%;
    font-size: sizem(25);
    line-height: 1.44;
    letter-spacing: 0.04em;
    margin: sizem(74) 0 0 0;
  }

  .hr {
    width: 100%;
    height: 2px;
    margin: sizem(23) 0;
  }

  .desc {
    width: 100%;
    font-size: sizem(13);
    line-height: 1.7;
    letter-spacing: 0.03em;
  }
  .subtxt {
    top: 0;
    left: 0;
    bottom: auto;
  }
  .subtitle {
    padding-right: sizem(18);
    border-right: 2px solid #d6aa99;
    top: sizem(265);
    left: sizem(33);
    right: auto;
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: sizem(0.93);
    text-align: left;
    color: #d6aa99;
  }

  .text {
    width: sizem(193);
    top: sizem(245 + 12);
    right: sizem(32.3);
    font-size: sizem(13);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.7;
    letter-spacing: sizem(1);
    text-align: left;
    color: #333333;
  }

  /* Swipe */
  .swipe {
    width: sizem(375);
    height: sizem(245);
    min-height: sizem(245);
    top: sizem(0);
    left: sizem(0);
    object-fit: cover;
  }

  // begin
  .swipe-fade-leave-to {
    opacity: 0;
    z-index: 0;
  }
  // end
  .swipe-fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .swipe-fade-enter-active {
    transition: all 0.5s ease;
  }

  .swipe-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  // begin
  // .swipe-left-leave-to {
  //   margin-left: -100vw;
  //   z-index: 0;
  // }
  // // end
  // .swipe-left-enter {
  //   opacity: 0.5;
  //   margin-left: 0;
  //   z-index: 1;
  // }

  // .swipe-left-enter-active {
  //   transition: all 0.5s ease;
  // }

  // .swipe-left-leave-active {
  //   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  // }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
    z-index: 0;

    img {
      width: 100%;
    }
    .name {
      right: sizem(32);
      bottom: 0;
      font-size: sizem(40);
    }
  }

  .pagination {
    width: auto;
    bottom: sizem(91);
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
  }

  .pagination-dot {
    padding: 5px;
    margin: 0 10px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      box-shadow: 0 0 0 1px #bd2b27;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #bd2b27;
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
          width: 100%;
          height: 100%;
          display: block;
          background: #bd2b27;
          border-radius: 20px;
          opacity: 1;
          position: absolute;
          top: 0%;
          // transform: translateY(-50%);
          left: 0%;
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
      width: sizem(15);
      cursor: pointer;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section8',

  mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s8/1.jpg'),
          name: 'LOBBY',
          subtitle: '精品大廳',
          text: '高雅門廳接待朋友、約訪客戶皆體面稱頭',
        },
        {
          img: require('./s8/2.jpg'),
          name: 'SALOON',
          subtitle: '交誼廳',
          text: '無論沙發座位、吧檯區，給您專屬的最悠閒',
        },
        {
          img: require('./s8/3.jpg'),
          name: 'READING ROOM',
          subtitle: '閱覽室',
          text: '用好空間享受閱讀，更是沉澱自我的最佳時刻',
        },
        {
          img: require('./s8/4.jpg'),
          name: 'GAMING ROOM',
          subtitle: '遊戲室',
          text: '遊樂生活、探索自我！社區就有一座專屬',
        },
        {
          img: require('./s8/5.jpg'),
          name: 'HOME GYM',
          subtitle: '健身房',
          text: '在家運動，天氣不用顧慮、目標幾K隨心所欲',
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
