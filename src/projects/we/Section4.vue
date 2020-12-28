<template>
  <div>
    <div class="section4">
      <div class="swipe absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex" @mouseup="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <div class="prev-btn" @click="decIndex"><img src="./s2/dot.png" alt=""></div>
            <div class="next-btn" @click="addIndex"><img src="./s2/dot.png" alt=""></div>
          </div>
        </div>
      </div>
      <div class="title absolute" data-aos="fade-down" data-aos-delay="400" v-if="isPC">
        <span>板南、萬大雙捷運，</span>通勤雙北我最WIN
      </div>
      <div class="title absolute" data-aos="fade-down" data-aos-delay="400" v-if="isMobile">
        <span>板南、萬大雙捷運</span>
      </div>
      <div class="subtitle absolute" data-aos="fade-down" data-aos-delay="700" v-if="isMobile">
        通勤雙北我最WIN
      </div>
      <div class="hr absolute" data-aos="fade" data-aos-delay="200"></div>
      <div class="desc absolute" data-aos="fade-up" data-aos-delay="300" v-if="isPC">
        捷運板南線海山站、土城站，隨你心情動線決定回家路線；<br />
        國道3號、65快速道路，翱翔雙北無縫接軌；<br />
        動工中的捷運萬大線LG10站就在中正國中旁上學好近，<br />
        未來還有北土城交流道就近通勤，新北閃耀五星的大黑馬，<br />
        青年成家卡位這裡最好！
      </div>
      <div class="desc absolute" data-aos="fade-up" data-aos-delay="300" v-if="isMobile">
        捷運板南線海山站、土城站，隨你心情動線決定回家路線；國道3號、65快速道路，翱翔雙北無縫接軌；動工中的捷運萬大線LG10站就在中正國中旁上學好近，未來還有北土城交流道就近通勤，新北閃耀五星的大黑馬，青年成家卡位這裡最好！
      </div>
      <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="500" data-aos-offset="-500" v-if="isPC">
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  max-height: size(1080);
  position: relative;
  background: #5fc8ce url('./s2/rb.png') fixed no-repeat bottom right;
  background-size: size(1200) auto;
  min-height: size(1250 + 280);
  // background-image: url('./s2/bg.jpg');
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

.hr {
  @include img_l_pc(1500, 1005, 210);
  border: solid 1.1px #888888;
}


.title {
  @include img_l_pc(518, 920, 210);
  font-size: size(45);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(1.5);
  text-align: left;
  color: #fff;
  white-space: nowrap;
  span {
    color: #ffff00;
  }
}

.subtitle {
  width: size(568);
  top: size(393);
  right: size(252);
  font-size: size(28);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(1.2);
  text-align: left;
  color: #2c9899;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(1500, 1030, 210);
  font-size: size(25);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
    letter-spacing:0.036em;
  text-align: justify;
  color: #000;
}

/* Swipe */
.swipe {
  width: size(1500);
  height: size(844);
  top: size(20);
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
  top: size(880);
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
    height:size(35);
    border-radius: 0px;
   box-shadow: 0 0 4px 4px #5fc8ce;
    border-radius:100%;
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
        border-radius:100%;
        background-image: url('./s2/dot.png');
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
    height: sizem(250 + 393);
  background-position: right calc(100% - 63px);
  background-size:100% auto;
  }

  .logo {
    display: none;
  }

  .hr {
    @include img_l_m(310, 122 + 250, 33);
    border: solid 1px #888888;
  }

  .rb {
    @include img_r_m(375, 0, 0);
    top: auto;
    bottom: 0;
  }

  .title {
    @include img_l_m(310, 290, 33);
    font-size: sizem(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1.25);
    text-align: left;
    color: #fff;
    white-space: nowrap;
    span {
      color: #ffff00;
    }
  }

  .subtitle {
    @include img_l_m(310, 330, 33);
    font-size: sizem(20);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1);
    text-align: left;
    color: #fff;
    white-space: nowrap;
  }

  .desc {
    @include img_l_m(310, 250 + 138, 33);
    font-size: sizem(15);
    line-height:1.7;
    letter-spacing:0.05em;
  }

  /* Swipe */
  .swipe {
    width: 100vw;
    height: sizem(250);
    min-height: auto;
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
    .slide-name {
      right: 1em;
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
      width: sizem(25);
      height:sizem(25);
      cursor: pointer;
      background: #fff;
      border-radius: 50%;
      border:sizem(2.5) solid #000;
      display: flex;justify-content:center;
      align-items: center;
      img{width: 60%;transform: rotate(45deg) translate(5%,-5%);}
    }
    .next-btn {
      transform: scaleX(-1);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  mixins: [slider],
  // props: ['viewIndex'],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s2/3-1.jpg'),
          name: '捷運海山站實景',
        },
        {
          img: require('./s2/3-2.jpg'),
          name: '65快速道路',
        },
        {
          img: require('./s2/3-3.jpg'),
          name: '國道3號',
        },
        {
          img: require('./s2/3-4.jpg'),
          name: '捷運萬大線LG10站就在中正國中旁',
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