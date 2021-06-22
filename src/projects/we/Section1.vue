<template>
  <div class="section1">
    <!-- <img src="./s1/img.png" alt="" class="rb"> -->
    <div class="hint">
      本公司保留活動修改及終止權利！！數量有限，要買要快
    </div>
    <transition-group name="swipe-fade">
      <div class="list list5" v-if="pageIndex === 4" key="page4" v-touch:swipe.left="() => {this.decPageIndex(4)}" v-touch:swipe.right="() => this.addPageIndex(4)" @mouseup="addPageIndex(4)" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="w-block"></div>
        <img src="./s1/2/2.png" alt="" class="img1">
        <img src="./s1/2/3.png" alt="" class="img2">
        <img src="./s1/2/1.png" alt="" class="img3">
        <img src="./s1/5/img.jpg" alt="" class="logo" v-if="isPC">
        <img src="./s1/5/img_m.jpg" alt="" class="logo" v-if="isMobile">
        <img src="./s1/5/t.png" alt="" class="t" v-if="isPC">
        <img src="./s1/5/t_m.png" alt="" class="t" v-if="isMobile">
      </div>
      <div class="list list4" v-if="pageIndex === 3" key="page3" v-touch:swipe.left="() => {this.decPageIndex(3)}" v-touch:swipe.right="() => this.addPageIndex(3)" @mouseup="addPageIndex(3)" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="w-block"></div>
        <img src="./s1/2/2.png" alt="" class="img1">
        <img src="./s1/2/3.png" alt="" class="img2">
        <img src="./s1/2/1.png" alt="" class="img3">
        <img src="./s1/4/img.jpg" alt="" class="logo">
        <img src="./s1/4/t.png" alt="" class="t">
      </div>
      <div class="list list3" v-if="pageIndex === 2" key="page2" v-touch:swipe.left="() => {this.decPageIndex(2)}" v-touch:swipe.right="() => this.addPageIndex(2)" @mouseup="addPageIndex(2)" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="w-block"></div>
        <img src="./s1/2/2.png" alt="" class="img1">
        <img src="./s1/2/3.png" alt="" class="img2">
        <img src="./s1/2/1.png" alt="" class="img3">
        <img src="./s1/3/img.jpg" alt="" class="logo" v-if="isPC">
        <img src="./s1/3/img_m.jpg" alt="" class="logo" v-if="isMobile">
        <img src="./s1/3/t.png" alt="" class="t">
      </div>

      <div class="list list2" v-if="pageIndex === 1" key="page2" v-touch:swipe.left="() => {this.decPageIndex(1)}" v-touch:swipe.right="() => this.addPageIndex(1)" @mouseup="addPageIndex(1)" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="w-block"></div>
        <img src="./s1/2/2.png" alt="" class="img1">
        <img src="./s1/2/3.png" alt="" class="img2">
        <img src="./s1/2/1.png" alt="" class="img3">
        <img src="./s1/2/logo.png" alt="" class="logo">
        <div class="t1">完銷倒數 土城家樂福<span>精品30坪 限量露台戶</span></div>
        <div class="t2"><span>簽訂3%<span>輕鬆付款</span></span>2263-5666</div>
      </div>
      <div class="list list1" v-if="pageIndex === 5" key="page5" v-touch:swipe.left="() => {this.decPageIndex(5)}" v-touch:swipe.right="() => this.addPageIndex(5)" @mouseup="addPageIndex(5)" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="w-block"></div>
        <img src="./s1/1/1.png" alt="" class="img1">
        <img src="./s1/1/2.png" alt="" class="img2">
        <img src="./s1/1/i.jpg" alt="" class="i">
        <img src="./s1/logo.png" alt="" class="logo" v-if="isPC">
        <img src="./s1/logo2.png" alt="" class="logo" v-if="isMobile">
        <div class="t1">青年當家威時代<br>暖心加碼送給您</div>
        <div class="t2">好禮3選2,風光入厝禮!</div>
      </div>
    </transition-group>
    <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
      <div class="prev-btn" @click="() => this.pageIndex = this.pageIndex === 1 ? this.pageIndex === 2 ? 3 : 2 : 1"><img src="./s2/dot.png" alt=""></div>
      <div class="next-btn" @click="() => this.pageIndex = this.pageIndex === 1 ? this.pageIndex === 2 ? 3 : 2 : 1"><img src="./s2/dot.png" alt=""></div>
    </div>
    <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="500" v-if="isPC">
      <div :class="`pagination-dot`" @click="pageIndex = 1"><span :class="`${pageIndex === 1 ? 'active' : ''}`"></span></div>
      <div :class="`pagination-dot`" @click="pageIndex = 2"><span :class="`${pageIndex === 2 ? 'active' : ''}`"></span></div>
      <div :class="`pagination-dot`" @click="pageIndex = 3"><span :class="`${pageIndex === 3 ? 'active' : ''}`"></span></div>
      <div :class="`pagination-dot`" @click="pageIndex = 4"><span :class="`${pageIndex === 4 ? 'active' : ''}`"></span></div>
      <div :class="`pagination-dot`" @click="pageIndex = 5"><span :class="`${pageIndex === 5 ? 'active' : ''}`"></span></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  overflow: hidden;
  position: relative;
  // background: url("./s1/bg.jpg") fixed ;
  background-size: auto;
}

.bg-img {
  width: size(1920);
  height: 100%;
  min-height: size(900);
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;

  &:nth-child(1) {
    position: relative;
  }
}

.w-block {
  background-color: #fff;
  @include div_l_pc(1874, 963, 0, 0);
  height: calc(100% - 4vw);
}
.i {
  @include img_r_pc(690, 0, 0);
  top: calc(50% - 11.5vw);
  left: calc(50% + 4vw);
}

.hint {
  @include div_r_pc(450, 27, 965, 46);
  top: calc(100% - 4vw);
  width: auto;
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
  white-space: nowrap;
  z-index: 5;
}

.list {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  font-weight: 900;
  line-height: 1.3;
}
.list1 {
  background: #6a9f87;
  .img1 {
    @include img_r_pc(200, -5, 0);
  }
  .img2 {
    z-index: 5;
    @include img_l_pc(750, 0, 370);
    top: auto;
    bottom: 0;
  }
  .logo {
    @include img_l_pc(600, 383, 270);
    top: calc(50% - 15vw);
  }
  .t1 {
    @include img_l_pc(730, 38, 260);
    top: calc(50% - 1.4em);
    font-size: size(81);
    letter-spacing: 0.1em;
    color: #07421c;
  }
  .t2 {
    @include img_l_pc(720, 768, 260);
    top: calc(50% + 1.85em);
    font-size: size(59);
    letter-spacing: 0.045em;
    color: #d32925;
  }
}
.list2 {
  background: #6a9f87;
  .img1 {
    @include img_r_pc(680, -5, 0);
  }
  .img2 {
    z-index: 5;
    @include img_l_pc(400, 0, 290);
    top: auto;
    bottom: 0;
  }
  .img3 {
    @include img_l_pc(340, -5, 0);
  }
  .logo {
    @include img_l_pc(410, 383, 400);
    top: calc(50% - 7.5vw);
  }
  .t1 {
    @include img_l_pc(750, 428, 400);
    top: calc(50% - 7.5vw);
    left: calc(50% - 5vw);
    font-size: size(78);
    letter-spacing: -0.01em;
    color: #000000;
    span {
      display: block;
      font-size: 0.99em;
    }
  }

  .t2 {
    @include img_l_pc(750, 428, 400);
    top: calc(50% + 3vw);
    left: calc(50% - 5vw);
    font-size: size(108);
    font-weight: 900;
    letter-spacing: -2.58px;

    color: #ff6b00;
    > span {
      display: inline-block;
      color: #000000;
      line-height: 1.3;
      font-size: 0.4em;
      margin: 0 0.5em 0 0;
      span {
        margin: -0.15em 0 0;
        display: block;
        color: #000000;
        font-size: 0.9em;
      }
    }
  }
}
.list3 {
  background: #6a9f87;
  .img1 {
    @include img_r_pc(680, -5, 0);
  }
  .img2 {
    z-index: 5;
    @include img_l_pc(400, 0, 290);
    top: auto;
    bottom: 0;
  }
  .img3 {
    @include img_l_pc(340, -5, 0);
  }
  .logo {
    @include img_r_pc(410, 0, 1040);
    width: auto;
    height: calc(100% - 4vw);
  }
  .t {
    @include img_l_pc(600, 285, 965);
    top: calc(50% + 100vw * (285 - 540) / 1920);
  }
}
.list4 {
  background: #6a9f87;
  .img1 {
    @include img_r_pc(680, -5, 0);
  }
  .img2 {
    z-index: 5;
    @include img_l_pc(400, 0, 290);
    top: auto;
    bottom: 0;
  }
  .img3 {
    @include img_l_pc(340, -5, 0);
    z-index: 2;
  }
  .logo {
    @include img_r_pc(410, 0, 950);
    top: 7.2vw;
    width: auto;
    height: calc(100% - 15.7vw);
  }
  .t {
    @include img_l_pc(590, 285, 1070);
    top: calc(50% + 100vw * (330 - 540) / 1920);
  }
}
.list5 {
  background: #6a9f87;
  .img1 {
    @include img_r_pc(680, -5, 0);
  }
  .img2 {
    z-index: 5;
    @include img_l_pc(400, 0, 290);
    top: auto;
    bottom: 0;
  }
  .img3 {
    @include img_l_pc(340, -5, 0);
  }
  .logo {
    @include img_r_pc(410, 0, 1260);
    width: auto;
    height: 100%;
  }
  .t {
    @include img_l_pc(1150, 285, 830);
    top: calc(50% + 100vw * (280 - 540) / 1920);
  }
}
.list::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
}
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

.swipe-btns {
  width: 100%;
  height: 100%;
  padding: 0 15px;
  // z-index: 5;

  .prev-btn,
  .next-btn {
    width: size(20);
    cursor: pointer;
  }
}

.pagination {
  width: auto;
  top: calc(100% - 7vw);
  right: size(70);
  justify-content: center;
  z-index: 30;
}

.pagination-dot {
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  // z-index: 5;

  span {
    display: block;
    width: size(35);
    height: size(35);
    border-radius: 0px;
    //  box-shadow: 0 0 4px 4px #5fc8ce;
    border-radius: 100%;
    border: 4px solid #000;
    position: relative;
    background-color: #fff;
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
/*
.t1 {
  width: size(751);
  top: size(483);
  left: size(585);
}

.t2 {
  width: size(751);
  top: size(711);
  left: size(585);
}
*/
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
  .section1 {
    width: 100vw;
    min-height: sizem(667);
    max-height: sizem(812);
    height: calc(100vh - 63px);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .w-block {
    background-color: #fff;
    @include div_l_m(361, 607 - 63, 60, 0);
    height: calc(100% - 30vw);
  }
  /*
  .logo {
    @include img_l_m(223, 111, 80);
    top: calc(50% - 64vw);
  }

  .st {
    @include img_l_m(117, 157, 129);
    top: calc(50% - 56vw);
  }

  .t1 {
    @include img_l_m(375, 169, 0);
    top: calc(50% - 58vw);
    font-size: sizem(45);
  }

  .t2 {
    @include img_l_m(375, 296, 0);
    top: calc(50% - 29vw);
    font-size: sizem(17);
  }*/

  .i {
    @include img_r_m(238, 354, 68);
    top: calc(50% + 15vw);
  }

  .hint {
    @include div_l_m(300, 18, 667, 10);
    top: calc(100% - 12vw);
    width: 100%;
    font-size: sizem(12);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    z-index: 10;
  }

  .tm {
    @include img_l_m(253, 310, 56);
    top: calc(50% - 10vw);
  }

  .rb {
    @include img_l_m(292, 410, 0);
    top: auto;
    bottom: 14vw;
  }
  .list {
    text-align: center;
  }
  .list1 {
    .img1 {
      @include img_r_m(100, -5, 0);
    }
    .img2 {
      z-index: 5;
      @include img_r_m(310, 0, -60);
      top: auto;
      bottom: 0;
    }
    .logo {
      @include img_l_m(154, 123, 99);
      top: calc(50% - 59vw);
    }
    .t1 {
      @include img_l_m(375, 38, 0);
      top: calc(50% - 2.5em);
      font-size: sizem(32);
    }
    .t2 {
      @include img_l_m(375, 38, 0);
      top: calc(50% + 0.3em);
      font-size: sizem(23.3);
    }
  }

  .list2 {
    .img1 {
      @include img_r_m(270, 0, -10);
    }
    .img2 {
      z-index: 5;
      @include img_r_m(210, 0, -20);
      top: auto;
      bottom: 0;
    }
    .img3 {
      @include img_l_m(150, -50, -10);
    }
    .logo {
      @include img_l_m(154, 123, 99);
      top: calc(50% - 59vw);
    }
    .t1 {
      @include img_l_m(375, 38, 0);
      top: calc(50% - 1.55em);
      font-size: sizem(31);
      line-height: 1.6;
    }
    .t2 {
      @include img_l_m(375, 38, 0);
      top: calc(50% + 1.7em);
      font-size: sizem(52);
      > span {
        display: block;
        font-size: 0.6em;
        letter-spacing: 0.04em;
        margin: 0;
        span {
          display: inline;
          font-size: 1em;
        }
      }
    }
  }
  .list3 {
    .img1 {
      @include img_r_m(270, 0, -10);
    }
    .img2 {
      z-index: 5;
      @include img_r_m(210, 0, -20);
      top: auto;
      bottom: 0;
    }
    .img3 {
      @include img_l_m(150, -50, -10);
    }
    .logo {
      @include img_l_m(375, 123, 0);
      height: auto;
      top: calc(50% + 29vw);
    }
    .t{
      @include img_l_m(255, 38, 58);
      top: calc(50% - 40vw);
    }
  }
  .list4 {
    .img1 {
      @include img_r_m(270, 0, -10);
    }
    .img2 {
      z-index: 5;
      @include img_r_m(210, 0, -20);
      top: auto;
      bottom: 0;
    }
    .img3 {
      @include img_l_m(150, -50, -10);
    }
    .logo {
      @include img_l_m(350, 123, -30);
      height: auto;
      top: calc(50% + 10vw);
    }
    .t{
      @include img_l_m(255, 38, 58);
      top: calc(50% - 50vw);z-index: 3
    }
  }
  .list5 {
    .img1 {
      @include img_r_m(270, 0, -10);
    }
    .img2 {
      z-index: 5;
      @include img_r_m(210, 0, -20);
      top: auto;
      bottom: 0;
    }
    .img3 {
      @include img_l_m(150, -50, -10);
    }
    .logo {
      @include img_l_m(375, 123, 0);
      height: auto;
      top: calc(50% + 29vw);
    }
    .t{
      @include img_l_m(255, 38, 58);
      top: calc(50% - 40vw);
    }
  }

  .swipe-btns {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    //z-index: 5;

    .prev-btn,
    .next-btn {
      width: sizem(25);
      height: sizem(25);
      cursor: pointer;
      background: #fff;
      border-radius: 50%;
      border: sizem(2.5) solid #000;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 60%;
        transform: rotate(45deg) translate(5%, -5%);
      }
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

export default {
  name: 'section1',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      pageIndex: 1,
      pageLength: 5,
      interval: null,
      toggleTimer: true,
    }
  },

  methods: {
    addPageIndex(index) {
      if (index) {
        this.pageIndex = index === this.pageLength ? 1 : index + 1
      } else {
        this.pageIndex = this.pageIndex === this.pageLength ? 1 : this.pageIndex + 1
      }
    },

    decPageIndex(index) {
      if (index) {
        this.pageIndex = index === 1 ? this.pageLength : index - 1
      } else {
        this.pageIndex = this.pageIndex === 0 ? this.pageLength : this.pageIndex - 1
      }
    },
  },

  mounted() {
    /*  clearInterval(this.interval)
    this.interval = setInterval(() => {
      if (this.toggleTimer) {
        this.pageIndex = this.pageIndex === 1 ? 2 : 1
      }
    }, 5000) */
  },

  created() {},

  computed: {},
}
</script>
