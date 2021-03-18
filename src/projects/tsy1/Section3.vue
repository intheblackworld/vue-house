<template>
  <div class="section3">
    <img src="./s3/03_tree_1.png" :alt="`${info.caseName}_bg`" class="tree1">
    <img src="./s3/03_tree_2.png" :alt="`${info.caseName}_bg`" class="tree2">
    <img src="./s3/03_bg.jpg" :alt="`${info.caseName}_bg`" class="img">
    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
        <!-- <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
        </div> -->
      </div>
    </div>
    <div class="title" data-aos="fade-up" data-aos-delay="200">新店站<span>300</span>秒</div>
    <div class="desc"  data-aos="fade-up" data-aos-delay="400">
      青潭至新店捷運站之間，5分鐘車程，房價輕鬆省⼀半！首站上車永遠有座位，3站大坪林雙捷運環狀線與綠線交會、4站景美站瞬間切換近北市，新店客運總站交通樞紐，高速串聯台北市各大菁華商圈。
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width:  100%;
  height:  100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.img {
  width: size(1751);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
}

/* Swipe */
.swipe {
  width: size(1125);
  height: size(737);
  top: 50%;
  transform: translateY(-50%);
  right: size(126);
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
    object-fit: cover;
  }

  .slide-name {
    right: 16px;
    bottom: 7px;
    color: #fff;
    font-size: size(28);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.83;
    letter-spacing: size(1.68);
    text-align: left;
    color: #ffffff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
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
  width: 30%;
  bottom: size(20);
  right: 0;
  left: 0;
  margin: 0 auto;
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  z-index: 6;

  span {
    display: block;
    width: size(17);
    height: size(17);
    border-radius: size(17);
    box-shadow: inset 0 0 0 1px #fff;
    position: relative;
    background-color: #fff;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      display: block;
      background: #fff100;
      border-radius: 20px;
      opacity: 1;
      position: absolute;
      top: 0%;
      // transform: translateY(-50%);
      left: 0%;
      transition: all 0.3s;
      transform-origin: center;
      transform: scale(0);
    }
    &.active {
      box-shadow: none;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background: #fff100;
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

.title {
  @include img_l_pc(466, 288, 130);
   top: calc(50% + 100vw * (288 - 1080 * .5) / 1920);
  font-size: size(53);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;

  span {
    font-size: size(72);
  }
}

.desc {
  @include img_l_pc(457, 434, 130);
   top: calc(50% + 100vw * (434 - 1080 * .5) / 1920);
  font-size: size(28);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.69;
  letter-spacing: size(-0.56);
  text-align: justify;
  color: #ffffff;
}

.tree1 {
  @include img_l_pc(341, -80, 4);
  transform-origin: top;
  animation: tree 2s ease-in-out 0s infinite alternate-reverse;
}

.tree2 {
  @include img_r_pc(260, -80, 0);
  transform-origin: top;
  animation: tree 2s ease-in-out 0.5s infinite alternate-reverse;
}

@keyframes tree {
  to {
    transform: skew(5deg);
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
  .section3 {
    height: sizem(524);
    min-height: auto;
    max-height: initial;
    background-image: url('./bg_m.png');
    background-size: cover;
    background-attachment: fixed;
    // background-position: 0 0;
    // background-color: #10a1b4;
    overflow: hidden;
  }

  .title {
    @include img_l_m(246, 255, 64);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.64;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    white-space: nowrap;

    span {
      font-size: sizem(35);
    }
  }

  .desc {
    @include img_c_m(335, 327);
    font-size: sizem(16);
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: size(-0.32);
    text-align: justify;
    color: #ffffff;
  }

  .tree1 {
    @include img_l_pc(341, -80, 4);
    transform-origin: top;
    animation: tree 2s ease-in-out 0s infinite alternate-reverse;
  }

  .tree2 {
    @include img_r_pc(260, -80, 0);
    transform-origin: top;
    animation: tree 2s ease-in-out 0.5s infinite alternate-reverse;
  }

  .img {
    display: none;
  }

  /* Swipe */
  .swipe {
    width: sizem(335);
    height: sizem(219);
    min-height: auto;
    top: sizem(0);
    transform: translateY(0);
    left: sizem(20);
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
      height: sizem(219);
      object-fit: cover;
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

  .slide-name {
    right: 16px;
    bottom: 7px;
    color: #fff;
    font-size: 12px !important;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.83;
    letter-spacing: size(1.68);
    text-align: left;
    color: #ffffff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
  }

  .pagination {
    width: auto;
    bottom: sizem(11);
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
  }

  .pagination-dot {
    padding: 5px;
    margin: 0 5px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 10px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #fff100;
        border-radius: 10px;
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
          background: #fff100;
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
  name: 'section3',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s3/03_slider_1.jpg'),
          name: '新店捷運站',
        },
        {
          img: require('./s3/03_slider_2.jpg'),
          name: '新店客運總站',
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
      }
    },
  },
}
</script>
