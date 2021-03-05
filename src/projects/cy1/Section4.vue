<template>
  <div class="section4">
    <h1 class="title" data-aos="fade-up" data-aos-delay="200">
      新北第一環<br />輕成本購足高享受
    </h1>
    <h3 class="desc" data-aos="fade-up" data-aos-delay="400">
      蘆洲貴為新北第一環，<br />
      生活機能豐富便利，房價卻十分親民，成為新北移居之冠!<br /><br />
      【九揚盧登堡】坐享南港子生活圈，<br />
      長榮路、光榮路、長興街與永康街便利生活，<br />
      散步五分鐘可享國民運動中心完善運動設施，<br />
      近享蘆洲市區完善商業、文教、市政機能。<br />
      以最低成本輕鬆站上置產高峰，未來值得期待。
    </h3>
    <img src="./s4/04_tree_img.png" :alt="`${info.caseName}_tree`" class="tree" data-aos="fade-up" data-aos-delay="600">
    <img src="./s4/04_people_img.png" :alt="`${info.caseName}_people`" class="people" data-aos="fade-up" data-aos-delay="800">
    <div class="item-list flex" v-if="isPC">
      <div v-for="(slide) in slideList" :key="slide.img" :class="`item`">
        <img :src="slide.img" alt="">
        <div class="item-name absolute" v-html="slide.name"></div>
      </div>
    </div>
    <div class="swipe absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="isMobile">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
        </div>
      </div>
    </div>
    <!-- <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="500" data-aos-offset="-500" v-if="isPC">
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div> -->
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  height: size(540 + 460);
  // max-height: size(1080);
  position: relative;
  // background: #5fc8ce url('./s4/rb.png') fixed no-repeat bottom right;
  // background-size: size(1200) auto;
  // min-height: size(1238 + 200);
  // background-image: url('./s4/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: size(900);
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

.title {
  @include img_c_pc(900, 10);
  font-size: size(30.7);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #542e71;
}

.desc {
  @include img_c_pc(666, 130);
  font-size: size(18);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.9;
  letter-spacing:0.02em;
  text-align: center;
  color: #000a;
  // top: calc(50% - 9vw);
}

.tree {
  @include img_l_pc(608, -50, 73);
  animation: tree 4s ease-out infinite alternate;
  transform: skewX(2deg);
  transform-origin: 50% 100%;
}

@keyframes tree {
  to {
    transform: skewX(-2deg);
  }
}

.people {
  @include img_r_pc(361, 185, 318);
}

.item-list {
  position: absolute;
  bottom: 0;
  left: 0;
  .item {
    width: calc(100% / 3);
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      // position: absolute;
      top: 0;
      left: 0;
    }
  }

  .item-name {
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.02em;
    text-align: left;
    color: #ffffff;
    position: absolute;
    left: size(35);
    bottom: size(15);
    text-shadow: 0 0 5px #000;
  }
}

/* Swipe */
.swipe {
  width: size(1500);
  height: size(844);
  top: size(260);
  left: size(210);
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
    height: 100%;
    object-fit: cover;
  }

  .slide-name {
    right: 1.5em;
    bottom: 1em;
    color: #fff;
    font-size: size(23);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.89px;
    text-align: left;
    color: #ffffff;
    text-shadow: 0 0.1em 0.3em #000;
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
  top: size(1120);
  right: size(200);
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: size(35);
    height: size(35);
    border-radius: 0px;
    box-shadow: 0 0 4px 4px #5fc8ce;
    border-radius: 100%;
    border: 4px solid #fff;
    position: relative;
    background-color: #5fc8ce;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: transparent;
      // border-radius: 20px;
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
      border: 4px solid #000;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 100%;
        // background-image: url('./s4/dot.png');
        background-size: 52% auto;
        background-position: 54% 46%;
        background-repeat: no-repeat;
        // border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 0%;
        // transform: translateY(-50%);
        left: 0%;
        transform: scale(1.1);
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
    min-height: auto;
    max-height: initial;
    height: sizem(695);
    background-position: right calc(100% - 63px);
    background-size: 100% auto;
  }

  .title {
    @include img_c_m(325, 70);
    font-size: sizem(20);
  }

  .desc {
    @include img_c_m(340, 150);
    font-size: sizem(13);
    // top: calc(50% - 9vw);
  }

  .tree {
    display: none;
    // @include img_l_m(608, -50, 73);
    // animation: tree 4s ease-out infinite alternate;
    // transform: skewX(2deg);
    // transform-origin: 50% 100%;
  }

  @keyframes tree {
    to {
      transform: skewX(-2deg);
    }
  }

  .people {
    @include img_l_m(195, 19, 11);
  }

  /* Swipe */
  .swipe {
    width: 100vw;
    height: sizem(318);
    min-height: auto;
    top: sizem(380);
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
    .slide-name {
      left: 1em;
      font-size: sizem(13);
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
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #004ea2;
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
          background: #004ea2;
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
import info from '@/info'
import slider from '@/mixins/slider.js'
export default {
  mixins: [slider],
  // props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s4/04_img_1.jpg'),
          name: '佳瑪商圈(長榮路)',
        },
        {
          img: require('./s4/04_img_2.jpg'),
          name: '徐匯廣場/徐匯中學站(三民路)',
        },
        {
          img: require('./s4/04_img_3.jpg'),
          name: '國民運動中心',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    viewIndex() {
      if (this.viewIndex === 3) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>