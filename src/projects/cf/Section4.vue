<template>
  <div class="section4">
      <img
        src="./s4/bg.png"
        alt=""
        class="back absolute"
      >
    <div class="bg">
      <img
        src="./s1/butterfly1.png"
        alt=""
        class="fly1 absolute"
        data-aos="fade-up-left"
        data-aos-delay="800"
      >
    <div class="txt absolute">
       <div
        class="title"
        data-aos="fade-right"
        data-aos-delay="400"
      ><h3>南紡購物中心為鄰<br />繁華商圈一次集結</h3>
      </div>
      <div
        class="hr"
        data-aos="zoom-in-right"
        data-aos-delay="600"
      ></div>
      <div
        class="desc"
        data-aos="fade-right"
        data-aos-delay="800"
      >
        南紡購物中心占地約8,000坪，結合購物中心、老爺酒店、威秀影城、誠品書店等機能與指標品牌，加上各式各樣主題餐廳，為台南東區最大、最象徵性的地標商圈。更與周邊成大商圈、東門商圈相互串聯，繁華一次到位！入主【春福采采】，正是同時把握商圈便利與公園悠閒的不二首選！
        
        <ul class="desc2"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          <li>與占地約8,000坪「南紡購物中心」比鄰而居</li>
          <li>結合老爺酒店、威秀影城、誠品書店等精彩機能</li>
          <li>台南東區最大、最象徵性的地標商圈</li>
          <li>同步串聯周邊成大商圈、中華商圈</li>
        </ul>
      </div>
    </div>
      <div
        class="shopping absolute"
        data-aos="fade-left"
        data-aos-delay="1000" v-if="isMobile"
      >
        SHOPPING
      </div>
      <div
        class="swipe absolute"
        data-aos="fade-up"
        data-aos-delay="200"
        @mouseenter.stop="toggleTimer = false"
        @mouseleave.stop="toggleTimer = true"
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
      <div
        class="shopping absolute"
        data-aos="fade-left"
        data-aos-delay="1000" v-if="!isMobile"
      >
        SHOPPING
      </div>
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

.section4 {
  width: size(1920);
  height: 100vh;
  min-height:size(900);
  max-height:size(1080);
  background-attachment: fixed;
  overflow: hidden;
  .bg{width:1556px;height: 100%;max-width:90%;position: relative;margin: auto;}
}

.back {
  width: size(736);
  bottom: size(0);
  right: size(0);
}

.fly1 {
  width: size(112);
  top: size(78);
  left: size(-130);
}
.txt {
  width:calc(100% - 57vw);
  top:12%;
  left: size(0);
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
  //h3{transform: scaleX(0.95);transform-origin: 0 0;}
}

.hr {
  width: 100%;
  height:size(2);
  min-height:1px;
  margin:size(62) 0;
  background-color: #004f8f;
}

.desc {
  font-weight: 500;
  line-height:1.8;
  letter-spacing: size(1.12);
  position: relative;
  color: #333333;z-index: 2;text-shadow: 0 0 size(5) #fff;
}
.desc2 {margin: 1em 0 1em 1.5em;list-style: square;
  li{margin: 0.5em 0;list-style: inherit;}
}

.shopping {
  bottom: 0;
  left: size(-150);
  font-size: size(160.2);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(-7.29);
  text-align: left;
  color: #004f8f;
  z-index: 5;
}

/* Swipe */
.swipe {
  width: size(1030);
  height: 76%;
  top:12%;
  right: size(0);
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
    width: 100%;height: 100%;object-fit: cover;
  }

  .name {
    right: size(20);
    bottom: size(20);
    font-size: size(14.8);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
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
  right: 0;top:-35px;
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
  .section4 {
    width: 100vw;
    height: sizem(614 + 245);
  min-height:sizem(0);
  max-height:sizem(900);
    .bg{width:100%;max-width:100%;}
  }

  .fly1 {
    width: sizem(73);
    top: sizem(272);
    left: auto;
    right: sizem(28);
  }

.txt {
  width: sizem(310);
  top:sizem(271.5);
  left: sizem(33);
  font-size: sizem(15);
}
  .title {
    font-size: sizem(25);
    line-height: 1.44;
    letter-spacing:0.04em;
  }

  .hr {
    width:100%;
    height: 1px;
    margin: sizem(23) 0 ;
  }

  .desc {
    line-height:1.8;
  letter-spacing:0.03em;
  }

  .shopping {
    bottom: sizem(0);
    left: sizem(23);
    font-size: sizem(70);
    line-height: 1.69;
    letter-spacing: sizem(-5.6);
  }

  /* Swipe */
  .swipe {
    width: 100vw;
    height:sizem(245.5);
    top: 0;
    left: 0;
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
  .name{bottom:1em;right:1em;font-size: sizem(12);}

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
  name: 'section4',

  mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s4/1南紡夢時代.jpg'),
          name: '南紡夢時代',
        },
        {
          img: require('./s4/2國賓影城.jpg'),
          name: '國賓影城',
        },
        {
          img: require('./s4/3成大商圈.jpg'),
          name: '成大商圈',
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
