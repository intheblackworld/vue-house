<template>
  <div class="section5">
      <img
        src="./s3/img.png"
        alt=""
        class="back absolute"
      >
    <div class="bg">
    <div class="txt absolute">
      <div
        class="fly1 absolute"
        data-aos="fade-up-left"
        data-aos-delay="800"
      >
      <img
        src="./s1/butterfly1.png"
        alt="butterfly"></div>
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
        data-aos="fade-up-left"
        data-aos-delay="800"
      >
      <div
        class="title"
        data-aos="fade-right"
        data-aos-delay="400">
      <h3>明星學區、<br />
        機能都到位<br />
        交通串聯無往不利</h3>
      </div>
      <div
        class="hr"
        data-aos="zoom-in-right"
        data-aos-delay="600"
      ></div>
        <ul class="desc"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          <li>復興國小、永仁完全中學、成功大學 完整學區</li>
          <li>高雄榮總台南分院、大型連鎖採買商家完整齊全</li>
          <li>完整交通：大灣交流道、國道1號、未來更接軌捷運</li>
        </ul>
      <div
        class="life absolute"
        data-aos="fade-left"
        data-aos-delay="1000"
      >
        LIFE
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
          <div
            class="pagination absolute flex-ac"
            data-aos="fade-up"
            data-aos-delay="200"
            v-if="isPC"
          >
            <div
              :class="`pagination-dot`"
              v-for="(slide, index) in slideList"
              :key="slide.img + '-dot'"
              @click="goTo(index)"
            ><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
   width: size(1920);
  height: 100vh;
  min-height:size(900);
  max-height:size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  .bg{width:1556px;height: 100%;max-width:90%;position: relative;margin: auto;}
}

.back {
  width: size(534);
  top: size(35);
  left: size(0);
}

.fly1 {
  width: size(90);
  top: size(20);
  right: size(200);
  img{width: 100%;transform: rotate(10deg);}
}

.fly2 {
  width: size(65);
  bottom: size(140);
  right: size(130);
}

.fly3 {
  width: size(95);
  bottom: size(0);
  right:-8%;
}
.txt {
  width:calc(100% - 57vw);
  top:12%;
  min-height: 76%;
  right: size(0);
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(16);
}
.title {
  font-size: size(51.6);
  font-weight: bold;
  line-height: 1.43;
  letter-spacing: size(2.06);
  color: #333333;
  white-space: nowrap;
}

.hr {
  width: 100%;
  height:size(2);
  min-height:1px;
  margin:size(62) 0;
  background-color: #27a8a8;
}

.desc {
  font-weight: 500;
  line-height:1.8;
  letter-spacing: size(1.12);
  position: relative;
  color: #333333;z-index: 2;text-shadow: 0 0 size(5) #fff;
  margin: 1em 0 1em 1.5em;list-style: square;
  li{margin: 0.5em 0;list-style:inherit;}
}

.life {
  bottom: size(-10);
  left: size(-10);
  font-size: size(150);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(-12.75);
  text-align: right;
  color: #4b809d;
}

/* Swipe */
.swipe {
  width: size(1030);
  height: 76%;
  top:12%;
  left: size(0);
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
    width: 100%;height: 100%;object-fit: cover;
  }

  .name {bottom:size(20);right:size(20);
    line-height: 1.35;font-size: size(14.8);
    letter-spacing:0.06em;
    color: #ffffff;
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
  bottom: size(20);
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
        width: 100%;
        height: 100%;
        display: block;
        background: #fff;
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
  .section5 {
    width: 100vw;
    height: sizem(424 + 245);
    min-height: auto;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .fly1,
  .fly2 {
    display: none;
  }

  .fly3 {
    width: size(85);
    top: size(245 + 36);
    right: size(12.5);
  }

  .title {
    width: sizem(233);
    top: sizem(245 + 26);
    left: sizem(33);
    right: auto;
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(1);
    text-align: left;
    color: #333333;
    white-space: nowrap;
  }

  .hr {
    width: sizem(310);
    height: 1px;
    top: sizem(157 + 245);
    right: sizem(32);
    background-color: #004f8f;
  }

  .desc {
    width: sizem(310);
    top: sizem(181 + 245);
    right: sizem(32);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.7;
    letter-spacing: sizem(0.95);
    text-align: left;
    color: #333333;
  }


  .life {
    top: auto;
    right: auto;
    bottom: sizem(0);
    left: sizem(28);
    font-size: sizem(70);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.69;
    letter-spacing: sizem(-5.6);
    text-align: right;
    color: #4b809d;
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
  name: 'section5',

  mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s5/1成功大學.jpg'),
          name: '成功大學',
        },
        {
          img: require('./s5/2崑山科技大學.jpg'),
          name: '崑山科技大學',
        },
        {
          img: require('./s5/3情境示意.jpg'),
          name: '情境示意',
        },
        {
          img: require('./s5/4復興國小.jpg'),
          name: '復興國小',
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
