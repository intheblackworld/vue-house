<template>
  <div class="section5">
    <img src="./s5/05_child.png" :alt="`${info.caseName}_bg`" class="child1" v-if="isPC"  data-aos="fade-up" data-aos-delay="800">
    <img src="./mobile/s5/05_m_style.png" :alt="`${info.caseName}_bg`" class="img" v-if="isMobile">
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
    <div class="title"  data-aos="fade-up" data-aos-delay="200">
      日韓時尚餐飲<br />
      新店站碧潭廣場見
    </div>
    <div class="desc"  data-aos="fade-up" data-aos-delay="400">
      最高CP值2600坪複合式捷運商場「碧潭有約」，由日系「無印良品」、韓式吃到飽「兩餐」以及全聯、寶雅攜手進駐，加上小碧潭站「IKEA」、「京站」，串聯捷運、碧潭水岸以及商場，打造新店人日常休閒娛樂天堂。
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width:100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  background-image: url('~@/projects/tsy1/s5/0506_bg.jpg');
  background-size: cover;
  background-attachment: fixed;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.child1 {
  @include img_l_pc(336, -285, 295);
  transform-origin:center bottom;
  animation:tree 3s linear alternate infinite ;
}
@keyframes tree {
  to {
    transform: skew(-6deg);
  }
}

/* Swipe */
.swipe {
  width: size(1296);
  height:100%;
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
  @include img_r_pc(440, 262, 101);
   top: calc(50% + 100vw * (262 - 1080 * .5) / 1920);
  font-size: size(55);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  @include img_r_pc(468, 444, 79);
   top: calc(50% + 100vw * (444 - 1080 * .5) / 1920);
  font-size: size(28);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.69;
  letter-spacing: size(0.56);
  text-align: justify;
  color: #ffffff;
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
    height: sizem(718);
    min-height: auto;
    max-height: initial;
    background-image: url('./bg_m.png');
    background-size: cover;
    background-attachment: initial;
  //  overflow: hidden;
  }

  .img {
    @include img_c_m(380, -24);
    object-fit: cover;
  }

  .title {
    @include img_r_m(240, 411, 67);
    font-size: sizem(30);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }

  .desc {
    @include img_r_m(335, 517, 20);
    font-size: sizem(16);
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: sizem(-0.32);
    text-align: justify;
    color: #ffffff;
  }

  /* Swipe */
  .swipe {
    width: sizem(335);
    height: sizem(279);
    min-height: auto;
    top: sizem(104);
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
      height: sizem(300);
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
    font-size: 12px;
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
          border-radius: 10px;
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
  name: 'section5',

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
          img: require('./s5/05_slider_1.jpg'),
          name: 'IKEA',
        },
        {
          img: require('./s5/05_slider_2.jpg'),
          name: '全聯',
        },
        {
          img: require('./s5/05_slider_3.jpg'),
          name: '無印良品',
        },
        {
          img: require('./s5/05_slider_4.jpg'),
          name: '碧潭廣場',
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
      if (this.viewIndex === 5) {
        this.slideIndex = 0
      }
    },
  },
}
</script>
