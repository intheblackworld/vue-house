<template>
  <div class="section7">
    <img src="./s7/flower.png" :alt="`${info.caseName}_img`" class="flower grass" v-if="isPC">
    <img src="./mobile/07/flower.png" :alt="`${info.caseName}_img`" class="flower" v-if="isMobile" data-aos="fade" data-aos-delay="200">
    <img src="./s2/flash.png" :alt="`${info.caseName}_img`" class="flash" v-if="isMobile">

    <div class="content">
      <div class="title" data-aos="fade-up" data-aos-delay="0">
        擁抱一座森林花園<br />
        四時寫意 有景也有情
      </div>
      <div class="desc" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
        在鳥語花香之地享受北市難得的香榭大道，百年樟樹、櫻花繽紛、梔緬、楓香綻滿四季，舞動名為生命與自然的樂章。門前庭園搖曳清新生命力，哲思散策、親子同樂、鄰里交流，難得清幽的秘境。
      </div>
      <div class="desc" data-aos="fade-up" data-aos-delay="200" v-if="isMobile">
        在鳥語花香之地享受北市難得的香榭大道，百年樟樹、櫻花繽紛、梔緬、楓香綻滿四季，舞動名為生命與自然的樂章。
      </div>
      <div class="new-text">銷售企劃：興益發建設自建自售</div>
    </div>
    <div class="img-list" v-if="isPC">
      <img src="./s7/img_1.png" :alt="`${info.caseName}_img`" class="img" data-aos="fade-in" data-aos-delay="300">
      <img src="./s7/img_2.png" :alt="`${info.caseName}_img`" class="img" data-aos="fade-in" data-aos-delay="400">
      <img src="./s7/img_3.png" :alt="`${info.caseName}_img`" class="img" data-aos="fade-in" data-aos-delay="500">
      <img src="./s7/img_4.png" :alt="`${info.caseName}_img`" class="img" data-aos="fade-in" data-aos-delay="600">
    </div>

    <div class="swipe" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade" data-aos-delay="200" v-if="isMobile">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
      </div>
      <div class="swipe-btns absolute flex-ac flex-jb">
        <div class="prev-btn" @click="decIndex"></div>
        <div class="next-btn" @click="addIndex"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  //overflow-x: hidden;
  // min-height: size(900);
  //background-image: url('./all/section_bg.jpg');
  background-size: 100% 100%;
  // background-position: 0 0;
  background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

.new-text {
  @include img_r_pc(500, 1010, 30);
  top:calc(40% + ( 1010 - 1080 * 0.4) * 100vw / 1920);
  font-size: size(25);
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: right;
  color: #000;
  z-index: 3;
  white-space: nowrap;
}

.title {
  @include img_l_pc(597, 233, 63);
  font-size: size(65);
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #006b31;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(650, 480, 65);
  font-size: size(22);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.97;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
}

.img-list {
  @include img_r_pc(500 + 550, 130, 0);
  top: calc(50% + (130 - 1080 * 0.5) * 100vw / 1920);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  img {
    width: size(500);
    margin-bottom: size(38);
  }
}

.flower {
  @include img_l_pc(180, 753, -30);
  top: calc(50% + (753 - 1080 * 0.5) * 100vw / 1920);
  z-index: 2;
}

.grass {
  transform-origin: bottom;
  animation: grass 2s ease-in-out alternate infinite;
}

@keyframes grass {
  to {
    transform: skewX(-5deg);
  }
}

/* Swipe */
.swipe {
  @include div_r_pc(1129, 901, 95, 0);
  object-fit: cover;
  // background: #0344;
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
  transition: all 1s ease;
}

.swipe-fade-leave-active {
  transition: all 1s ease;
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
    left: 2em;
    top: 1.2em;
    color: #fff;
    font-size: size(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: left;
    text-shadow: 0 0.3em 1em #000;
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
  bottom: size(24);
  right: 0;
  left: 0;
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
    background-color: transparent;
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
      box-shadow: none;
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
  padding: 0 0;
  z-index: 3;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  .prev-btn,
  .next-btn {
    position: relative;
    height: 100%;
    width: 2em;
    font-size: size(20);
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: translateX(100%);
      background-color: #0004;
      transition: all 0.3s;
    }
    &::after {
      content: '';
      width: 1em;
      height: 1em;
      position: absolute;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.75em);
      border: solid #fff;
      border-width: 0.1em 0.1em 0 0;
      transform: rotate(45deg) translate(-10%, 10%);
    }
    &:hover:before {
      transform: translateX(0%);
    }
    &:hover:after {
      animation: btn 0.5s ease-in-out infinite alternate;
    }
  }
  .prev-btn {
    transform: scaleX(-1);
  }
}
@keyframes btn {
  to {
    transform: rotate(45deg) translate(10%, -10%);
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
  .section7 {
    width: 100vw;
    height: sizem(750);
    min-height: auto;
    max-height: initial;
    // background-image: url('./all/section_bg.jpg');
    // background-attachment: scroll;
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
  }
  .flash {
    @include img_l_m(1041, 709, -232);
    top:calc(50% + ( -85 - 667 * 0.5) * 100vw / 375);
    animation: flash 1s ease-in-out alternate infinite;
    opacity: 0;
    z-index: 3;
  }

   .new-text {
  @include img_c_pc(1100, 1010);
  top:calc(50% + ( 670 - 667 * 0.5) * 100vw / 375);
  font-size: size(80);
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  z-index: 3;
  white-space: nowrap;
  text-shadow: 0em 0em 0.3em #000;
}

  @keyframes flash {
    to {
      opacity: 1;
    }
  }
  .title {
    @include img_l_m(262, 50, 30);
    font-size: sizem(32);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
    text-align: left;
    color: #006b31;
    white-space: nowrap;
  }

  .desc {
    @include img_l_m(320, 150, 30);
    font-size: sizem(12);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.01;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    white-space: normal;
  }

  .flower {
    @include img_r_m(127, 219, 0);
    z-index: 2;
  }

  /* Swipe */
  .swipe {
    @include div_l_m(375, 454, 0, 0);
    top: auto;
    bottom: 0;
    object-fit: cover;
    // background: #0344;
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
    .slide-name {
      right: 1.2rem;
      top: 1.2rem;
      bottom: auto;
      left: auto;
      font-size: sizem(15);
    }
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
    width: 116%;
    left: -8%;
    .prev-btn,
    .next-btn {
      font-size: sizem(15);
      &::before {
        background-color: #cc5b4e00;
      }
      &::after {
        border-color: #fff;
        border-width: 0.15em 0.15em 0 0;
        animation: btn 0.5s ease-in-out infinite alternate;
      }
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
  name: 'section7',

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
          img: require('./mobile/07/img_1.jpg'),
        },
        {
          img: require('./mobile/07/img_2.jpg'),
        },
        {
          img: require('./mobile/07/img_3.jpg'),
        },
        {
          img: require('./mobile/07/img_4.jpg'),
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    // viewIndex() {
    //   if (this.viewIndex === 5) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>
