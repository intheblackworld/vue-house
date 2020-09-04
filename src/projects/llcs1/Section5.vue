<template>
  <div>
    <div class="section5">
      <img src="./s4/bg2.png" alt="" class="img absolute" data-aos="zoom-in"
        data-aos-delay="200">
      <div v-if="!isMobile">
      <div 
          class="fly1 absolute"
          data-aos="fade-right"
          data-aos-delay="1000">
        <img
          src="./s1/butterfly2.gif"
          alt="butterfly"
        >
      </div>
        <div 
            class="fly2 absolute"
            data-aos="fade-left"
            data-aos-delay="1000">
          <img
            src="./s1/butterfly3.gif"
            alt="butterfly"
          >
        </div>
        <div 
          class="flower1 absolute"
          data-aos="fade-left"
          data-aos-delay="200">
          <img
            src="./s2/3.png"
            alt="flower"
          >
        </div>
        <div 
            class="flower2 absolute"
            data-aos="fade-right"
            data-aos-delay="400">
          <img
            src="./s2/4.png"
            alt="flower"
          >
        </div>
     </div>
     <div v-if="isMobile" class="f">
      <div 
          class="fly1 absolute"
          data-aos="fade-right"
          data-aos-delay="1000">
        <img
          src="./s1/butterfly2.gif"
          alt="butterfly"
        >
      </div>
        <div 
          class="flower1 absolute"
          data-aos="fade-left"
          data-aos-delay="200">
          <img
            src="./s2/f1.png"
            alt="flower"
          >
        </div>
        <div 
            class="flower2 absolute"
            data-aos="fade-right"
            data-aos-delay="400">
          <img
            src="./s2/3.png"
            alt="flower"
          >
        </div>
        <div 
            class="flower3 absolute"
            data-aos="fade-right"
            data-aos-delay="400">
          <img
            src="./s2/4.png"
            alt="flower"
          >
        </div>

    </div>
      <h3
        class="title absolute"
        data-aos="fade-right"
        data-aos-delay="400"
      >商圈金核心<br />
        <h3>副都心3分鐘　6大商圈一次擁有</h3>
      </h3>
      <img
        src="./mo/2/hrw.png"
        alt=""
        class="hr absolute"
        data-aos="zoom-in-right"
      />
      <h3
        class="desc absolute"
        data-aos="fade-right"
        data-aos-delay="800"
      >
        「朗朗城心」3分鐘前進副都心，中平、幸福、輔大、新泰、廟街商圈僅咫尺之距，便利生活盡情享受，生活所需應有盡有。
      </h3>

      <div
        class="swipe absolute"
        data-aos="fade-right"
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
              <h3
                class="name absolute"
                v-html="slide.name"
              ></h3>
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
  background-attachment: fixed;
}

.back {
  width: size(534);
  top: size(35);
  left: size(0);
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

.fly1 {
  width: size(200);
  bottom: size(100);
  right: size(150);
    z-index: 2;
  img{width: 100%;transform:rotate(-25deg);}
}

.fly2 {
  width: size(168);
    top: 3vw;
    right: 17vw;
    z-index: 2;
  img{width: 100%;transform:rotate(54deg);}
}

.flower1 {
    width: 15.416667vw;
    top: 0vw;
    right: 22.7vw;
  img{width: 100%;transform:rotate(-70deg);}
}

.flower2 {
    width: 18vw;
    bottom: -12vw;
    right: -14vw;
  img{width: 100%;transform:rotate(-70deg) scaleX(-1);}
}

.img {
  width: size(670);
  top: size(0);
  right: size(0);
}

.title {
  width: size(620);
  top: size(335);
  right: size(25);
  font-size: size(55);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: size(5.5);
  text-align: center;
  color: #534136;
  white-space: nowrap;
  h3 {
    font-size: size(35);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.62;
    letter-spacing: size(4);
    text-align: center;
    color: #534136;
  }
}

.hr {
  width: size(446);
  top: size(493);
  right: size(111);
}

.desc {
  width: size(402);
  top: size(527);
  right: size(133);
  font-size: size(28);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: normal;
  text-align: center;
  color: #05050c;
}

/* Swipe */
.swipe {
  width: size(1250);
  top: size(0);
  left: size(0);
  height: size(1080);
  min-height: size(1080);
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
    left: 20px;
    bottom: 25px;
    font-size: size(28);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: size(1.12);
    text-align: center;
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
    min-height:sizem(600);
    max-height:sizem(820);
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

.f{position:absolute;top:sizem(324);left: 0;width: 100%;bottom: 0;}
  .fly1 {
    width: sizem(100);
    bottom: sizem(30);top: auto;
    right: sizem(30);left:auto;
  img{width: 100%;transform:rotate(0deg);}
  }

  .flower1 {
    width: sizem(150);
    bottom: sizem(-30);top: auto;
    left:sizem(-30);right: auto;
    img{width: 100%;transform:rotate(70deg)scaleX(-1);}
  }

  .flower2 {width: 35vw;
    top: -13vw;
    bottom:auto;
    right: -5vw;left:auto;
  img{width: 100%;transform:rotate(50deg)scaleX(-1);}
  }

  .flower3 {
    width: sizem(130);
    bottom: sizem(-150);top: auto;
    right: sizem(-70);left:auto;
  img{width: 100%;transform:rotate(-34deg)scaleX(-1);}
  }

  .title {
    width: sizem(310);
    top: sizem(28 + 324);
    right: 0;
    left: 0;
    margin: 0 auto;
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.62;
    letter-spacing: sizem(2.5);
    text-align: center;
    color: #534136;
    white-space: nowrap;
    h3 {
      font-size: sizem(20);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.62;
      letter-spacing: sizem(2);
      text-align: center;
      color: #534136;
    }
  }

  .hr {
    width: sizem(310);
    top: sizem(102 + 324);
    right: 0;
    left: 0;
    margin: 0 auto;
  }

  .desc {
    width: sizem(310);
    top: sizem(121 + 324);
    right: 0;
    left: 0;
    margin: 0 auto;
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.85;
    letter-spacing: normal;
    text-align: center;
    color: #05050c;
  }

  /* Swipe */
  .swipe {
    width: sizem(375);
    height: sizem(324);
    min-height: sizem(324);
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
          img: require('./s5/1幸福路商圈.jpg'),
          name: '幸福路商圈',
        },
        {
          img: require('./s5/2新泰路商圈.jpg'),
          name: '新泰路商圈',
        },
        {
          img: require('./s5/3中港路商圈.jpg'),
          name: '中港路商圈',
        },
        {
          img: require('./s5/4好市多.jpg'),
          name: '好市多',
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
