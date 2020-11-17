<template>
  <div class="section8">
    <img src="./s1/b.png" alt="" class="b1">
    <img src="./s1/b.png" alt="" class="b2">
    <img src="./s1/b.png" alt="" class="b3">
    <img src="./s1/b.png" alt="" class="b4">
    <img src="./s2/img.png" alt="" class="img1">
    <img src="./s4/img.png" alt="" class="img2">
    <div class="swipe absolute" data-aos="fade-up" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" :alt="slide.name">
            <div class="name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="swipe-btns absolute flex-ac flex-jb" v-if="isPC">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
        </div>
        <!-- <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div> -->
      </div>
    </div>
    <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
      <div class="prev-btn flex-c">
        <img src="./all/prev-btn.png" alt="" @click="decIndex">
      </div>
      <div class="next-btn flex-c">
        <img src="./all/next-btn.png" alt="" @click="addIndex">
      </div>
    </div>
    <img src="./s1/logobg.png" alt="睿暘水漾LOGO" class="logobg">
    <div class="btns flex-ac flex-jc wrap">
      <h3 :class="`btn flex-c ${slideIndex === index ? 'active' : ''}`" v-for="(slide, index) in slideList" :key="slide.btn" @click="goTo(index)">{{slide.btn}}</h3>
    </div>
    <h3 class="title1">
      純漾好格局
    </h3>
    <h3 class="title2">
      看了就知道
    </h3>
    <hr>
    <h3 class="desc">
      {{slideList[slideIndex].desc}}
    </h3>
    <h3 class="subtitle">
      {{slideList[slideIndex].subtitle}}
    </h3>

  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
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

.btns {
  @include img_l_pc(1200, 60, 0);
  .btn {
    width: size(291);
    height: size(74);
    background-color: #ffffff;
    border-radius: 35px / 35px;
    margin: 0 size(48);
    margin-bottom: size(30);
    font-size: size(35.6);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: size(1.39);
    text-align: left;
    color: #000;
    cursor: pointer;
    &.active {
      color: #fff;
      background-color: #6e3a1d;
    }
  }
}

.title1 {
  @include img_r_pc(270, 300, 490);
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4);
  text-align: left;
  color: #ec6300;
  white-space: nowrap;
}

.title2 {
  @include img_r_pc(286, 367, 280);
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4);
  text-align: left;
  color: #ec6300;
  white-space: nowrap;
}

hr {
  @include img_r_pc(551, 434, 233);
  border: solid 2px #f6ab00;
}

.desc {
  @include img_r_pc(496, 470, 262);
  font-size: size(29.3);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.78;
  letter-spacing: size(1.61);
  text-align: left;
  color: #231815;
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

.subtitle {
  @include img_l_pc(731, 946, 218);
  font-size: size(44);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(-1.8);
  text-align: left;
  color: #000000;
  white-space: nowrap;
}

.logobg {
  // div位置：width: size(656), height: size(708) top: size(113), right: size(182)
  @include div_r_pc(772, 831, 176, 107);
  background-image: url('./s1/logobg.png');
  background-size: cover;
}

.b1 {
  @include img_l_pc(198, 58, 720);
  animation: an2 1.5s infinite alternate;
}

.b2 {
  @include img_l_pc(308, 767, 429);
  animation: an 2.5s infinite alternate;
}

.b3 {
  @include img_l_pc(169, 764, 1141);
  animation: an 2.5s infinite alternate;
}

.b4 {
  @include img_r_pc(671, 0, -300);
  animation: an 4.5s infinite alternate;
}

.img1 {
  @include img_r_pc(348, 457, -180);
  animation: an 2.5s infinite alternate;
}

.img2 {
  @include img_l_pc(548, 857, -280);
  animation: an 2.5s infinite alternate;
}

@keyframes an {
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes an2 {
  to {
    transform: translateY(0) rotate(5deg);
  }
}

/* Swipe */
.swipe {
  width: size(760);
  height: size(670);
  top: size(254);
  left: size(204);
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
  .section8 {
    width: 100vw;
    height: sizem(1050);
    min-height: sizem(1050);
    .bg {
      width: 100%;
      max-width: 100%;
    }
  }
  .btns {
    @include img_l_m(204, 115, 85);
    .btn {
      width: sizem(204);
      height: sizem(52);
      background-color: #ffffff;
      border-radius: 35px / 35px;
      margin: 0;
      margin-bottom: 0;
      font-size: sizem(24);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: sizem(0.94);
      text-align: left;
      color: #000;
      cursor: pointer;
      display: none;
      &.active {
        display: flex;
        color: #fff;
        background-color: #6e3a1d;
      }
    }
  }

  .title1 {
    @include img_r_m(138, 635, 129);
    font-size: sizem(26);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2);
    text-align: left;
    color: #ec6300;
    white-space: nowrap;
  }

  .title2 {
    @include img_r_m(138, 672, 129);
    font-size: sizem(26);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2);
    text-align: left;
    color: #ec6300;
    white-space: nowrap;
  }

  hr {
    @include img_r_m(280, 717, 43);
    border: solid 2px #f6ab00;
  }

  .desc {
    @include img_r_m(250, 742, 71);
    font-size: sizem(15);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.78;
    letter-spacing: sizem(0.61);
    text-align: left;
    color: #231815;
  }

  .txt {
    @include img_r_m(87, 512, 20);
    text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.8);
    font-size: sizem(12);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1.61);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .subtitle {
    @include img_l_m(300, 538, 39);
    font-size: sizem(18);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(-0.8);
    text-align: left;
    color: #000000;
    white-space: nowrap;
  }

  .logobg {
    // div位置：width: size(656), height: size(708) top: size(113), right: size(182)
    @include div_r_m(352, 380, 591, 4);
    background-image: url('./s1/logobg.png');
    background-size: cover;
  }

  .b1 {
    @include img_l_m(80, 60, -20);
    animation: an2 1.5s infinite alternate;
  }

  .b2 {
    @include img_l_m(62, 548, 263);
    animation: an 2.5s infinite alternate;
  }

  .b3 {
    @include img_l_m(134, 560, 12);
    animation: an 2.5s infinite alternate;
  }

  .b4 {
    @include img_r_m(62, 1117, 63);
    animation: an 4.5s infinite alternate;
  }

  .img1 {
    display: none;
  }

  .img2 {
    @include img_r_m(548, 1250, -280);
    animation: an 2.5s infinite alternate;
  }

  /* Swipe */
  .swipe {
    width: 100%;
    height: sizem(330);
    // min-height: sizem(750);
    top: sizem(188);
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
    height: sizem(330);
    bottom: 0;
    left: 0;

    img {
      width: 100%;
      height: sizem(330);
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
    height: sizem(52);
    padding: 0px;
    z-index: 1;
    position: absolute;
    top: sizem(115);

    .prev-btn,
    .next-btn {
      width: sizem(52);
      height: sizem(52);
      cursor: pointer;
      background-color: #333;
      img {
        width: 10px;
      }
    }

    .prev-btn {
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
    }

    .next-btn {
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section8',

  mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s8/a.png'),
          title: '純漾好格局 看了就知道',
          desc:
            '犧牲了可售坪數，只為了能有最好的格局，這樣的心意邀您眼見為憑。琢磨許久的方整規劃，讓每一戶擁有良好採光，也減少走道空間的浪費，讓「家」回歸居住最純粹。',
          subtitle: '2+1房．2衛．客廳．餐廳．廚房．陽台',
          btn: 'A戶∣27.9坪',
        },
        {
          img: require('./s8/b.png'),
          desc:
            '不用花時間出門找運動場地、花月費加入健身房，興致一來穿上運動鞋，隨時開始熱血飆汗。',
          subtitle: '2房．1衛．客廳．餐廳．廚房．陽台',
          btn: 'B戶∣23.08坪',
        },
        {
          img: require('./s8/c.png'),
          desc:
            '陪孩子放電最怕出門大包小包到親子館人擠人，現在電梯一搭在社區裡和孩子一起交朋友玩翻天。',
          subtitle: '1房．1衛．客廳．餐廳．廚房．陽台',
          btn: 'C戶∣18.32坪',
        },
        {
          img: require('./s8/d.png'),
          desc:
            '三五好友小酌相聚、戶外觀星搖椅迎風愜意，獨棟VIP會館式包廂，把信義區時尚酒吧搬回家。',
          subtitle: '2房．1衛．客廳．餐廳．廚房．陽台',
          btn: 'D戶∣24.01坪',
        },
        {
          img: require('./s8/e.png'),
          desc:
            '在遼闊的水岸天空下曬曬暖陽、和家人輕鬆喝茶談天說地，BBQ區隨時開爐歡聚不用等到中秋節。',
          subtitle: '2+1房．2衛．客廳．餐廳．廚房．陽台',
          btn: 'E戶∣28.68坪',
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
