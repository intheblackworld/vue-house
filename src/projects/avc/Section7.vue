<template>
  <div class="section6">
    <div class="swipe absolute" data-aos="fade-up" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" :alt="slide.name">
            <div class="name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
        </div>
        <!-- <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div> -->
      </div>
    </div>
    <div class="mask"></div>
    <h3 class="title1">
      {{slideList[slideIndex].title}}
    </h3>
    <hr>
    <h3 class="desc">
      {{slideList[slideIndex].desc}}
    </h3>
    <h3 class="txt">
      3D參考示意圖
    </h3>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: size(1920);
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.mask {
  @include div_l_pc(930, 260, 0, 0);
  background-image: linear-gradient(to right, rgba(0, 0, 0, .7) 60%, rgba(0, 0, 0, 0.1) 100%);
}

.title1 {
  @include img_l_pc(440, 26, 60);
  text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.8);
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

hr {
  @include img_l_pc(687, 100, 0);
  border: solid 1px #ffffff;
}

.desc {
  @include img_l_pc(581, 115, 60);
  text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.8);
  font-size: size(28);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.66;
  letter-spacing: size(3.53);
  text-align: left;
  color: #ffffff;
}

.txt {
  @include img_r_pc(187, 980, 25);
  text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.8);
  font-size: size(26);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3.61);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}
/* Swipe */
.swipe {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  top: 0;
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
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .name {
    right: 1.5em;
    bottom: 1em;
    font-size: 0.78125vw;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.89px;
    text-align: left;
    color: #fff;
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
  right: 0;
  top: -35px;
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
  .section6 {
    width: 100vw;
    height: calc(100vh - 63px);
    min-height: sizem(700);
    max-height: sizem(812);
    .bg {
      width: 100%;
      max-width: 100%;
    }
  }
  .txt {
    width: sizem(310);
    top: sizem(30);
    right: sizem(33);
    left: auto;
    font-size: sizem(15);
    z-index: 2;
  }

  .title {
    font-size: sizem(25);
  }

  .hr {
    height: sizem(2);
  }

  .desc {
    font-size: sizem(15);
    letter-spacing: 0.05em;
  }

  .art {
    font-size: sizem(35.2);
    text-align: center;
    letter-spacing: -0.01em;
  }

  .btn-group {
    /*
   width: sizem(303 + 8);
    top: sizem(396);
    right: sizem(33);
    z-index: 6; */
    z-index: 4;
    justify-content: space-between;
    margin-top: 0.6em;

    .btn {
      width: sizem(150);
      height: sizem(35);
      font-size: sizem(16);
      letter-spacing: 0.1em;
      margin: 0;
    }
  }

  /* Swipe */
  .swipe {
    width: 100%;
    //height: sizem(750);
    // min-height: sizem(750);
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
    z-index: 0;
    height: sizem(750);
    bottom: 0;
    left: 0;

    img {
      width: 100%;
      height: sizem(750);
      bottom: 0;
      left: 0;
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
    z-index: 1;

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
  name: 'section6',

  mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: isMobile ? require('./mo/6/bg.jpg') : require('./s7/1.jpg'),
          title: '舞墨迎賓廳',
          desc: '取自國際精品飯店設計靈感，雲紋石材、木格柵、讓入門的每一位賓客享有最尊榮禮遇。',
        },
        {
          img: isMobile ? require('./mo/6/bg2.jpg') : require('./s7/2.jpg'),
          title: '都會健身房',
          desc : '不用花時間出門找運動場地、花月費加入健身房，興致一來穿上運動鞋，隨時開始熱血飆汗。'
        },
        {
          img: isMobile ? require('./mo/6/bg2.jpg') : require('./s7/3.jpg'),
          title: '朵朵遊戲區',
          desc : '陪孩子放電最怕出門大包小包到親子館人擠人，現在電梯一搭在社區裡和孩子一起交朋友玩翻天。'
        },
        {
          img: isMobile ? require('./mo/6/bg2.jpg') : require('./s7/4.jpg'),
          title: '星夜閣Lounge Bar',
          desc : '三五好友小酌相聚、戶外觀星搖椅迎風愜意，獨棟VIP會館式包廂，把信義區時尚酒吧搬回家。'
        },
        {
          img: isMobile ? require('./mo/6/bg2.jpg') : require('./s7/5.jpg'),
          title: '水漾天空花園',
          desc : '在遼闊的水岸天空下曬曬暖陽、和家人輕鬆喝茶談天說地，BBQ區隨時開爐歡聚不用等到中秋節。 '
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
