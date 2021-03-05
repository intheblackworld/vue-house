<template>
  <div>
    <div class="section1">
      <div class="title-1">熱銷建案</div>
      <div class="subtitle">
        Hot Case
      </div>
      <img src="./s1/top.jpg" alt="" class="bg-img" v-if="isPC">
      <img src="./s1/top_m.jpg" alt="" class="bg-img" v-if="isMobile">
      <carousel-3d ref="mycarousel" :width="imgWidth" :height="imgHeight" :autoplay="false" :autoplayTimeout="5000" :autoplayHoverPause="true" :perspective="0" :disable3d="isMobile ? false : false" :border="0" :display="isMobile ? 3 : 3" :space="isMobile ? 'auto' : 'auto'" @after-slide-change="onAfterSlideChange">
        <slide v-for="(slide, index) in slideList" :index="index" :key="slide.img + index" class="carousel-3d-item">
          <img :src="slide.img" :class="`carousel-3d-img`" :alt="slide.alt" />
          <div class="mask">
            <div class="border flex-c">
              {{slide.name}}
            </div>
          </div>
        </slide>
      </carousel-3d>
      <img src="../index/s5/s.png" alt="" class="shadow">
    </div>
    <div :class="`section2 ${(currentIndex === 0 || currentIndex === 2) ? 'show' : ''}`">
      <div class="border-container relative">
        <div class="title-2">
          用<span>真心</span>打造住宅，用<span>真情</span>構築城市
        </div>
        <!-- <img src="../works/2/1.jpg" alt="" class="img"> -->
        <div class="swipe" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
          <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
            <transition-group name="swipe-fade" mode="out-in">
              <div v-for="(slide, i) in slideList2" v-show="slideIndex2 === i" :key="slide.img" :class="`swipe-item absolute`">
                <img :src="slide.img" :alt="slide.name">
                <div class="name absolute" v-html="slide.name"></div>
              </div>
            </transition-group>
            <!-- <div class="swipe-btns absolute flex-ac flex-jb" v-if="isPC">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div> -->
            <div class="pagination absolute flex-ac">
              <div :class="`pagination-dot`" v-for="(slide, index) in slideList2" :key="slide.img + '-dot'" @click="goToMul(2, index)"><span :class="`${slideIndex2 === index ? 'active' : ''}`"></span></div>
            </div>
          </div>
        </div>
        <div class="s-title">
          現正熱銷
        </div>
        <div class="content-title">
          鶯歌鳳鳴 立瑾Way
        </div>
        <div class="content-desc">
          2020年11月<br />
          延續著住戶的期盼，<br />
          今年11月19日於鶯歌鳳鳴重劃區，<br />
          辦理開工動土祈福典禮，<br />
          將接續公開新案「立瑾way」，<br />
          只為給您最好的居家。<br />
          <span>基地地址：鶯歌鳳鳴段</span>
        </div>
        <a class="btn flex-c" href="https://way.h35.tw/" target="_blank">
          官網預約
        </a>
        <!-- <img src="./s1/youtube.jpg" alt="" class="video">  -->
        <img src="./s1/rb.png" alt="" class="rb">
      </div>
    </div>
    <div :class="`section2 short ${(currentIndex === 1 || currentIndex === 3) ? 'show' : ''}`">
      <div class="border-container relative">
        <div class="title-2">
          用<span>真心</span>打造住宅，用<span>真情</span>構築城市
        </div>
        <!-- <img src="../works/3/1.jpg" alt="" class="img"> -->
        <div class="swipe" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
          <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
            <transition-group name="swipe-fade" mode="out-in">
              <div v-for="(slide, i) in slideList3" v-show="slideIndex3 === i" :key="slide.img" :class="`swipe-item absolute`">
                <img :src="slide.img" :alt="slide.name">
                <div class="name absolute" v-html="slide.name"></div>
              </div>
            </transition-group>
            <!-- <div class="swipe-btns absolute flex-ac flex-jb" v-if="isPC">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div> -->
            <div class="pagination absolute flex-ac">
              <div :class="`pagination-dot`" v-for="(slide, index) in slideList3" :key="slide.img + '-dot'" @click="goToMul(3, index)"><span :class="`${slideIndex3 === index ? 'active' : ''}`"></span></div>
            </div>
          </div>
        </div>
        <div class="s-title">
          即將推出
        </div>
        <div class="content-title">
          鶯歌鳳福段
        </div>
        <!-- <div class="content-desc">
          2020年11月<br />
          延續著住戶的期盼，<br />
          今年11月19日於鶯歌鳳鳴重劃區，<br />
          辦理開工動土祈福典禮，<br />
          將接續公開新案「立瑾way」，<br />
          只為給您最好的居家。<br />
          <span>基地地址：鶯歌鳳鳴段</span>
        </div>
        <div class="btn flex-c">
          官網預約
        </div>
        <img src="./s1/youtube.jpg" alt="" class="video"> -->
        <img src="./s1/rb.png" alt="" class="rb">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: size(800);
  // overflow: hidden;
  position: static;
  background: #fff;
  background-size: auto;
}

.bg-img {
  width: size(1920);
  height: auto;
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

.title-1 {
  @include div_l_pc(346, 112, 187, 370);
  font-size: size(60);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(15.02);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
  z-index: 10;
}

.subtitle {
  @include div_l_pc(346, 55, 150, 370);
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
  z-index: 10;
}

.s-bg {
  margin-top: size(-550);
  z-index: 3;
}

.carousel-3d-container {
  z-index: 10 !important;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: size(450) !important;
}

.carousel-3d-item {
  // position: relative;

  &.current {
    .mask {
      opacity: 1;
    }
    &:hover {
      .mask {
        opacity: 0;
      }
    }
  }
}
.carousel-3d-img {
  height: 100%;
  object-fit: cover;
}
.mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(255, 130, 0, 0.7);
  padding: size(27);
  opacity: 0;
  transition: all 0.3s;
}

.border {
  width: 100%;
  height: 100%;
  border: 1px solid #fff;
  color: #fff;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
  font-size: size(51.9);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(10.32);
  text-align: center;
  color: #ffffff;
}

.shadow {
  @include img_l_pc(1100, 680, 410);
}

.section2 {
  width: size(1920);
  //height: size(2360);
  overflow: hidden;
  position: relative;
  background: #fff;
  background-size: auto;
  display: none;
  padding-bottom: size(200);
  &.show {
    display: block;
  }
  /*
  &.short {
    height: size(1500);
  }*/
}
.border-container {
  width: size(1637);
  // height: size(1800);
  margin: size(50) auto size(75);
  border: 3px solid #ff8200;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
}

.title-2 {
  width: size(700);
  margin: 0 auto;
  margin-top: size(-30);
  font-size: size(34);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 3.4px;
  text-align: center;
  color: #606060;
  background-color: #fff;
  white-space: nowrap;

  span {
    color: #ff8200;
  }
}

.img {
  //@include img_l_pc(1244, 117, 0);
  width: size(1244);
  height: size(700);
  margin: size(117) 0;
  left: size(-145);
  float: left;
  position: relative;
  z-index: 2;
}

/* Swipe */
.swipe {
  width: size(1244);
  height: size(700);
  margin: size(117) 0;
  left: size(-145);
  float: left;
  position: relative;
  z-index: 2;
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
    font-size: size(15);
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.05em;
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
  right: 12px;
  left: auto;
  top: 12px;
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
    box-shadow: 0 0 0 1px #333;
    position: relative;
    background-color: rgba(255, 255, 255, 0.38);
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #333;
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
        background: #333;
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
    width: size(46);
    cursor: pointer;
  }
}

.rb {
  position: absolute;
  background-color: #fff;
  width: size(308);
  height: size(167);
  right: size(-100);
  bottom: size(-80);
}

.s-title {
  @include div_r_pc(515, 47, 170, 10);
  font-size: size(32);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(6.37);
  text-align: center;
  color: #ff8200;
  white-space: nowrap;
}

.content-title {
  @include div_r_pc(391, 63, 300, 76);
  font-size: size(42.5);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4.25);
  text-align: left;
  color: #606060;
  white-space: nowrap;
}

.content-desc {
  @include div_r_pc(463, 100, 400, 0);
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: size(1);
  text-align: left;
  color: #606060;

  span {
    font-size: size(23);
    font-weight: bold;
    letter-spacing: size(1.15);
  }
}

.btn {
  @include div_r_pc(200, 40, 700, 260);
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: size(1);
  text-align: left;
  background-color: #ff8200;
  color: #fff;
  text-decoration: none;
}

.video {
  cursor: pointer;
  @include div_r_pc(1343, 762, 900, 150);
}

.rb {
  position: absolute;
  background-color: #fff;
  width: size(308);
  height: size(167);
  right: size(-100);
  bottom: size(-80);
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
  .section1 {
    width: 100vw;
    min-height: sizem(400);
    max-height: sizem(812);
    height: sizem(550);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
    position: relative;
  }

  .bg-img {
    width: sizem(375);
    position: absolute;
    top: auto;
    left: 0;
    bottom: sizem(150);
    display: block;
    object-fit: cover;
    margin-top: 0;

    &:nth-child(1) {
      position: absolute;
    }
  }

  .title-1 {
    @include div_l_m(147, 47, 180, 114);
    font-size: sizem(32);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(5.02);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .subtitle {
    @include div_l_m(64, 22, 160, 156);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }

  .desc {
    @include div_l_m(200, 51, 490, 88);
    font-size: sizem(17);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(3.38);
    text-align: left;
    color: #ff8200;
    white-space: nowrap;

    span {
      color: #fff;
    }
  }

  .carousel-3d-container {
    z-index: 3 !important;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: sizem(340) !important;
  }
  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(255, 130, 0, 0.7);
    padding: sizem(20);
    opacity: 0;
    transition: all 0.3s;
  }

  .border {
    width: 100%;
    height: 100%;
    border: 1px solid #fff;
    color: #fff;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
    font-size: sizem(34);
    letter-spacing: 0.05em;
  }

  .info {
    width: sizem(310);
    height: sizem(247);
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: sizem(554);
    border-top: 1px solid #ff8200;
    border-bottom: 1px solid #ff8200;
    padding: 20px 0;
    .info-item {
      width: 100%;
      font-size: sizem(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.65;
      letter-spacing: sizem(1);
      text-align: center;
      color: #ff8200;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 15px;
    }
    .info-title {
      font-weight: bold;
      &.full {
        width: 100%;
      }
    }
  }

  .section2 {
    width: 100vw;
    // min-height: sizem(1134);
    //  max-height: sizem(812);
    // height: sizem(1134);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
    padding-bottom: sizem(50);

    /*  &.short {
      min-height: sizem(550);
      height: sizem(550);
    }*/
  }
  .border-container {
    width: sizem(355);
    //height: sizem(950);
    margin: sizem(40) auto sizem(30);
    border: 3px solid #ff8200;
    padding: 0 sizem(23) sizem(60);
  }

  .title-2 {
    width: sizem(314);
    margin: 0 auto;
    margin-top: sizem(-20);
    font-size: sizem(18);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: 1px;
    text-align: center;
    color: #606060;
    background-color: #fff;
    white-space: nowrap;

    span {
      color: #ff8200;
    }
  }

  .img {
    // @include img_l_m(375, 70, 0);
    width: sizem(375);
    height: sizem(260);
    z-index: 2;
    margin: sizem(25) 0;
    left: sizem(-36);
    float: none;
  }

  /* Swipe */
  .swipe {
    width: sizem(375);
    height: sizem(260);
    z-index: 2;
    margin: sizem(25) 0;
    left: sizem(-36);
    float: none;
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
    height: 100%;
    bottom: 0;
    left: 0;

    img {
      width: 100%;
      height: 100%;
      bottom: 0;
      left: 0;
    }

    .name {
      font-size: sizem(12);
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
    top: sizem(10);
    // left: 0;
    right: sizem(0);
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
      box-shadow: 0 0 0 1px #333;
      position: relative;
      background-color: rgba(255, 255, 255, 0.38);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #333;
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
          background: #333;
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
    top: sizem(355);

    .prev-btn,
    .next-btn {
      width: sizem(26);
      height: sizem(52);
      cursor: pointer;
      // background-color: #ec6300;
      img {
        width: 100%;
      }
    }

    // .prev-btn {
    //   border-top-right-radius: 25px;
    //   border-bottom-right-radius: 25px;
    // }

    // .next-btn {
    //   border-top-left-radius: 25px;
    //   border-bottom-left-radius: 25px;
    // }
  }

  .s-title {
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    font-size: sizem(28);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: sizem(5.37);
    text-align: center;
    color: #ff8200;
    white-space: nowrap;
    position: relative;
    margin: 0 0 1em;
  }

  .content-title {
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    font-size: sizem(28);
    white-space: nowrap;
    position: relative;
    margin: 0 0 0.5em;
  }

  .content-desc {
    @include div_l_m(310, 260, 0, 0);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.65;
    letter-spacing: sizem(0.75);
    text-align: left;
    color: #606060;
    position: relative;
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    margin: 0 0 1.5em;

    span {
      font-size: sizem(15);
      font-weight: bold;
      letter-spacing: sizem(0.75);
    }
  }

  .btn {
    @include div_r_m(150, 40, 600, 113);
    font-size: sizem(23);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.65;
    letter-spacing: sizem(1);
    text-align: left;
    background-color: #ff8200;
    color: #fff;
    position: relative;
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
  }

  .video {
    cursor: pointer;
    @include div_r_m(320, 181, 700, 17);
  }

  .rb {
    position: absolute;
    background-color: #fff;
    width: sizem(132);
    height: sizem(72);
    right: sizem(-10);
    bottom: sizem(-40);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'section1',
  mixins: [slider],

  components: {
    Carousel3d,
    Slide,
  },

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      currentIndex: 0,
      imgWidth: window.innerWidth * 0.187,
      imgHeight: window.innerWidth * 0.156,
      slideIndex2: 0,
      slideIndex3: 0,
      slideList: [
        /*{
          img: require('../works/1/1.jpg'),
          alt: '',
          name: ' 立瑾醞',
          desc:'<b>基地位置：</b>三重區神農街433號～439號<br><b>完工時間：</b>2020年<br><b>規劃樓層：</b>地上12層，地下2層<br><b>個案特色：</b><br>◆  校園第一排、河畔第一境<br>◆  結合陽光、空氣、水的絕美建築<br>◆ 低建蔽率，高公共生活空間',
        },
        */
        {
          img: require('../works/2/1.jpg'),
          alt: '',
          name: ' 立瑾way',
          desc:
            '鶯歌鳳鳴 立瑾Way2020年11月<br>延續著住戶的期盼，<br>今年11月19日於鶯歌鳳鳴重劃區，<br>辦理開工動土祈福典禮，<br>將接續公開新案「立瑾way」，<br>只為給您最好的居家。<br>基地地址：鶯歌鳳鳴段',
        },
        {
          img: require('../works/3/1.jpg'),
          alt: '',
          name: ' 鳳福段',
          desc:
            '<b>基地位置：</b>三重區神農街433號～439號<br>完工時間： 2020年<br>規劃樓層： 地上12層，地下2層<br>個案特色：<br>◆  校園第一排、河畔第一境<br>◆  結合陽光、空氣、水的絕美建築<br>◆ 低建蔽率，高公共生活空間',
        },
        {
          img: require('../works/2/1.jpg'),
          alt: '',
          name: ' 立瑾way',
          desc:
            '鶯歌鳳鳴 立瑾Way2020年11月<br>延續著住戶的期盼，<br>今年11月19日於鶯歌鳳鳴重劃區，<br>辦理開工動土祈福典禮，<br>將接續公開新案「立瑾way」，<br>只為給您最好的居家。<br>基地地址：鶯歌鳳鳴段',
        },
        {
          img: require('../works/3/1.jpg'),
          alt: '',
          name: ' 鳳福段',
          desc:
            '<b>基地位置：</b>三重區神農街433號～439號<br>完工時間： 2020年<br>規劃樓層： 地上12層，地下2層<br>個案特色：<br>◆  校園第一排、河畔第一境<br>◆  結合陽光、空氣、水的絕美建築<br>◆ 低建蔽率，高公共生活空間',
        },
      ],
      slideList2: [
        {
          img: require('../works/2/1.jpg'),
          name: '3D模擬示意圖',
        },
        {
          img: require('../works/2/2.jpg'),
          name: '3D模擬示意圖',
        },
        {
          img: require('../works/2/3.jpg'),
          name: '',
        },
        {
          img: require('../works/2/4.jpg'),
          name: '',
        },
      ],
      slideList3: [
        {
          img: require('../works/3/1.jpg'),
          name: '3D模擬示意圖',
        },
        {
          img: require('../works/3/2.jpg'),
          name: '3D模擬示意圖',
        },
        {
          img: require('../works/3/3.jpg'),
          name: '3D模擬示意圖',
        },
      ],
    }
  },

  watch: {
    currentIndex(index) {
      if (index === 1 || index === 3) {
        this.slideIndex = 0
        this.slideIndex2 = 0
        this.slideIndex3 = 0
      }
    },
  },

  methods: {
    goToSlide(index) {
      this.currentIndex = index
      this.$refs.mycarousel.goSlide(index)
    },
    onAfterSlideChange(index) {
      this.currentIndex = index
    },
  },

  mounted() {
    if (this.isMobile) {
      this.imgWidth = window.screen.width * 0.6
      this.imgHeight = window.screen.width * 0.6 * (272 / 312)
    }
    if (this.$route.query.index == 1) {
      this.goToSlide(0)
    }

    if (this.$route.query.index == 2) {
      this.goToSlide(1)
    }
  },

  created() {},

  computed: {},
}
</script>
