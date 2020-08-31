<template>
  <div>
    <div class="section5">
      <img
        src="./s3/img.png"
        alt=""
        class="back absolute"
      >
      <img
        src="./s1/butterfly1.png"
        alt=""
        class="fly1 absolute"
        data-aos="fade-up-left"
        data-aos-delay="800"
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
        data-aos="fade-up-left"
        data-aos-delay="800"
      >
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
      <h3
        class="title absolute"
        data-aos="fade-right"
        data-aos-delay="400"
      >南紡購物中心為鄰<br />繁華商圈一次集結</h3>
      <div
        class="hr absolute"
        data-aos="zoom-in-right"
        data-aos-delay="600"
      ></div>
      <div
        class="desc absolute"
        data-aos="fade-right"
        data-aos-delay="800"
      >
        南紡購物中心占地約8,000坪，結合購物中心、老爺酒店、威秀影城、誠品書店等機能與指標品牌，加上各式各樣主題餐廳，為台南東區最大、最象徵性的地標商圈。更與周邊成大商圈、東門商圈相互串聯，繁華一次到位！入主【春福采采】，正是同時把握商圈便利與公園悠閒的不二首選！
      </div>
      <div
        class="desc2 absolute"
        data-aos="fade-right"
        data-aos-delay="800"
      >
        ■與占地約8,000坪「南紡購物中心」比鄰而居<br />
        ■結合老爺酒店、威秀影城、誠品書店等精彩機能<br />
        ■台南東區最大、最象徵性的地標商圈<br />
        ■同步串聯周邊成大商圈、中華商圈
      </div>
      <div
        class="life absolute"
        data-aos="fade-left"
        data-aos-delay="1000"
      >
        LIFE
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
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: size(1920);
  height: size(971);
  height: 100vh;
  min-height: 900px;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
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
  width: size(112);
  top: size(78);
  left: size(46);
}

.title {
  width: size(481);
  top: size(148);
  right: size(160);
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
  top: size(358);
  right: size(180);
  background-color: #27a8a8;
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

.desc2 {
  width: size(462);
  top: size(624);
  right: size(180);
  font-size: size(16);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.25;
  letter-spacing: size(1.12);
  text-align: left;
  color: #333333;
}

.life {
  bottom: size(315);
  right: size(20);
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
  top: size(126);
  left: size(182);
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
    font-size: size(14.8);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: size(0.89);
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
  top: size(0);
  left: auto;
  right: size(177);
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
    box-shadow: 0 0 0 1px #27a8a8;
    position: relative;
    background-color: rgba(0, 0, 0, 0.01);
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #27a8a8;
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
        background: #27a8a8;
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
