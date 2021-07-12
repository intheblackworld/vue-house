<template>
  <div class="section8">

    <div class="content">
      <div class="label" data-aos="fade-up" data-aos-delay="0" v-if="isPC">
        ｜匠心團隊｜
      </div>
      <div class="title" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
        興益發Ｘ李天鐸Ｘ梁正芳
      </div>
    </div>
    <div class="team-list" v-if="isPC">
      <div class="team" v-for="slide in slideList" :key="slide.desc">
        <img :src="slide.img" :alt="`${info.caseName}_img`" class="team-img" data-aos="fade-up" data-aos-delay="300">
        <div class="team-title" v-html="slide.title" data-aos="fade-up" data-aos-delay="400"></div>
        <div class="team-desc" v-html="slide.desc" data-aos="fade-up" data-aos-delay="500"></div>
      </div>
    </div>
    <div v-if="isMobile">
      <div class="team-item relative">
        <div class="team-label">｜匠心團隊｜</div>
        <div class="team-name" v-html="slideList[0].name" data-aos="fade-up" data-aos-delay="400"></div>
        <div class="team-title" v-html="slideList[0].title" data-aos="fade-up" data-aos-delay="400"></div>
        <div class="team-desc" v-html="slideList[0].desc" data-aos="fade-up" data-aos-delay="500"></div>
        <img class="team-img" :src="slideList[0].img" alt="">
      </div>
      <div class="team-item relative">
        <div class="team-label">｜匠心團隊｜</div>
        <div class="team-name" v-html="slideList[1].name" data-aos="fade-up" data-aos-delay="400"></div>
        <div class="team-title" v-html="slideList[1].title" data-aos="fade-up" data-aos-delay="400"></div>
        <div class="team-desc" v-html="slideList[1].desc" data-aos="fade-up" data-aos-delay="500"></div>
        <img class="team-img" :src="slideList[1].img" alt="">
      </div>
    </div>

    <!-- <div class="swipe" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade" data-aos-delay="200" v-if="isMobile">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" :key="slide.img" :class="`swipe-item`">
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
    </div> -->
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width: 100vw;
  height: 100vh;
  min-height: size(1100);
  max-height: size(1100);
  position: relative;
  //overflow-x: hidden;
  // min-height: size(900);
  background-image: url('./all/section_bg.jpg');
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

.label {
  @include img_c_pc(210, 99);
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.37;
  letter-spacing: size(6);
  text-align: left;
  color: #000000;
  white-space: nowrap;
}

.title {
  @include img_c_pc(840, 160);
  font-size: size(75);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #006b31;
  white-space: nowrap;
}

.team-list {
  @include img_c_pc(705 * 2 + 244, 301);
  display: flex;
  justify-content: space-between;
  .team {
    width: size(705);
    img {
      width: 100%;
    }

    .team-title {
      font-size: size(35);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.69;
      letter-spacing: normal;
      text-align: center;
      color: #4b5a52;
      margin-top: size(20);
    }

    .team-desc {
      font-size: size(22);
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: normal;
      text-align: center;
      color: #000000;
      margin-top: size(10);
    }
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
  .section8 {
    width: 100vw;
    height: sizem(1500);
    min-height: auto;
    max-height: initial;
    // background-image: url('./all/section_bg.jpg');
    // background-attachment: scroll;
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: visible;
    overflow-x: hidden;
  }

  .team-item {
    width: 100vw;
    height: sizem(750);
  }

  .team-label {
    @include img_c_m(98, 33);
    font-size: sizem(14);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.54;
    letter-spacing: sizem(2.81);
    text-align: left;
    color: #000000;
    white-space: nowrap;
  }

  .team-name {
    @include img_c_m(292, 66);
    font-size: sizem(36.6);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
    text-align: center;
    color: #006b31;
    white-space: nowrap;
  }

  .team-title {
    @include img_c_m(340, 121);
    font-size: sizem(21.1);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.69;
    letter-spacing: normal;
    text-align: center;
    color: #006b31;
    white-space: nowrap;
  }

  .team-desc {
    @include img_c_m(339, 170);
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

  .team-img {
    width: 100vw;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .flower {
    @include img_r_m(127, 219, 0);
    z-index: 2;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import slider from '@/mixins/slider.js'

export default {
  name: 'section8',

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
          img: isMobile
            ? require('./mobile/08/team_1.jpg')
            : require('./s8/team_1.png'),
          name: '興益發Ｘ李天鐸',
          title: '李天鐸，引領台灣建築新風潮',
          desc: '大師親炙城市森活新價值，最適合的建築，要將人帶進自然。<br />「若是住進沒有綠意、不開闊的空間中，這棟建築是沒有表情的，更無需談論到生活了。」李天鐸的堅持，在陽明森悅實現了。',
          // desc: '270度翠綠簇擁<br />開窗就享無垠綠景',
        },
        {
          img: isMobile
            ? require('./mobile/08/team_2.jpg')
            : require('./s8/team_2.png'),
          name: '興益發Ｘ梁正芳',
          title: '梁正芳，訂製住的藝術 創造完美的家',
          desc: '每一座建築，因地段、基地與居住者不同，必然擁有獨特的思考與實踐，就像「陽明森悅」，從空間格局到機能，由裡而外悠揚北市森活美學，引領都會世代的夢想，是話題，更是傳奇。',
          // name: '稀有角地',
          // desc: '大福路大興路環抱<br />地段價值更珍貴',
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
