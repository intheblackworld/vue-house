<template>
  <div>
    <div class="section8">
      <div class="block absolute"></div>
      <div
        class="pagination absolute flex-ac"
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
      <img
        src="./s8/bg.png"
        alt=""
        class="back absolute"
      >
      <img
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
      >
      <h3
        class="title absolute"
        data-aos="fade-right"
        data-aos-delay="200"
      >升等 世界級的<br />
        幸福空間</h3>
      <div
        class="hr absolute"
        data-aos="zoom-in-right"
        data-aos-delay="400"
      ></div>
      <div
        class="desc absolute"
        data-aos="fade-right"
        data-aos-delay="600"
      >
        【春福采采】延續煙波飯店美學眼光<br />
        以全齡化思考設計每項設施堅持把細節做到最細膩<br />
        讓體貼與感性，注入生活裡為家庭的每位成員<br />
        延伸展演美好生活的新場域
      </div>
      <div
        class="space absolute"
        data-aos="fade-left"
        data-aos-delay="400"
      >
        DESIGN SPACE
      </div>
      <div
        class="subtitle absolute"
        data-aos="fade-left"
        data-aos-delay="1000"
      >精品大廳</div>
      <div
        class="text absolute"
        data-aos="fade-left"
        data-aos-delay="1100"
      >高雅門廳接待朋友、約訪客戶皆體面稱頭</div>
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
                alt=""
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
  height: size(971);
  height: 100vh;
  min-height: 900px;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.block {
  width: size(1092);
  height: 100vh;
  min-height: 900px;
  top: size(0);
  left: size(0);
  background-color: #d6aa99;
}

.back {
  width: size(534);
  top: size(35);
  left: size(0);
  z-index: 2;
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

.fly2 {
  width: size(119);
  top: size(511);
  right: size(223);
}

.fly3 {
  width: size(61);
  top: size(614);
  right: size(149);
}

.title {
  width: size(335);
  top: size(108);
  right: size(309);
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
  width: size(458);
  height: 2px;
  top: size(388);
  right: size(180);
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

.subtitle {
  top: size(715);
  right: size(455);
  font-size: size(46.7);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.13;
  letter-spacing: size(0.93);
  text-align: left;
  color: #d6aa99;
}

.text {
  width: size(237);
  top: size(692);
  right: size(184);
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
  top: size(117);
  left: size(179);
  height: size(674);
  min-height: size(674);
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
    right: 20px;
    bottom: 20px;
    font-size: size(65.9);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: size(-1.32);
    text-align: left;
    color: #ffffff;
    opacity: .7;
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
  top: size(637);
  left: auto;
  right: size(406);
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
    height: sizem(279 + 382);
    min-height: auto;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .img {
    width: sizem(283);
    top: sizem(14.5);
    left: sizem(24);
    z-index: 1;
  }

  .red {
    width: sizem(108);
    top: sizem(181);
    right: sizem(-50);
    z-index: 1;
  }

  .title {
    width: sizem(238);
    top: sizem(21);
    left: sizem(105);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: 1.5px;
    text-align: left;
    color: #000000;
  }

  .tree {
    width: sizem(202);
    top: sizem(287);
    left: sizem(0);
    z-index: 0;
  }

  /* Swipe */
  .swipe {
    width: sizem(330);
    height: sizem(279);
    min-height: sizem(279);
    top: sizem(382);
    left: sizem(23);
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
    bottom: size(91);
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
        },
        {
          img: require('./s8/2.jpg'),
          name: 'LOBBY',
        },
        {
          img: require('./s8/3.jpg'),
          name: 'LOBBY',
        },
        {
          img: require('./s8/4.jpg'),
          name: 'LOBBY',
        },
        {
          img: require('./s8/5.jpg'),
          name: 'LOBBY',
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
