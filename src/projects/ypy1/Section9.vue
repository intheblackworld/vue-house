<template>
  <div class="section9">
    <img src="./c/bg.png" :alt="`${info.caseName}_img`" class="bg-img bg-b" v-if="isPC">
    <img src="./m/c/bg_t.png" :alt="`${info.caseName}_img`" class="bg-img bg-b" v-if="isMobile">
    <div class="content">
      <transition-group name="fade-up" mode="out-in">
        <div v-if="blockIndex === 0" key="block0" class="text">
          <h3 class="title" data-aos="fade-up" data-aos-delay="0" data-aos-duration="400">
            1分鐘 南桃園交流道
          </h3>
          <p class="desc" data-aos="fade-up" data-aos-delay="100" data-aos-duration="400">
            <span>【嘉璟一品硯】</span><br />
            座落60米大興西路林蔭大道，<br />
            媲美台北市仁愛、敦南綠園道情境。<br />
            車行約1分鐘，即達國道2號南桃園交流道。<br />
            約16分鐘到國際機場、<br />
            約18分鐘到高鐵桃園站、<br />
            約12分鐘抵桃園火車站，掌握桃園門戶地位。
          </p>
        </div>
        <div v-if="blockIndex === 1" key="block1" class="text">
          <h3 class="title cursor" @click="changeItem(0)">
            <div :class="`icon ${itemIndex === 0 ? 'active' : ''}`"></div>
            約200公尺 風禾公園當窗景
          </h3>
          <p :class="`dropdown ${itemIndex === 0 ? 'active' : ''}`">
            散步即達4.6公頃風禾公園，特色遊具，<br v-if="isPC" />
            如：50米滾輪溜滑梯，媲美沖繩公園，是全家大小的遊樂場。<br v-if="isPC" />
            【嘉璟一品硯】 限定席次，<br v-if="isPC" />
            窗前即可對望風禾公園，在家坐享無限視野。<br v-if="isPC" />
            李科永紀念圖書館計劃，讓未來綠意生活更充實。
          </p>
          <h3 class="title cursor" @click="changeItem(1)">
            <div :class="`icon ${itemIndex === 1 ? 'active' : ''}`"></div>
            鄰近商場、全聯旗艦店、中茂新天地
          </h3>
          <p :class="`dropdown ${itemIndex === 1 ? 'active' : ''}`">
            散步就到農會商場預定地及風禾公園旁全聯旗艦店，<br v-if="isPC" />
            結合知名的永安、慈文、力行路商圈，<br v-if="isPC" />
            特色餐飲、在地市集，滿足全家生活需求。<br v-if="isPC" />
            車行約7分鐘即抵中茂新天地，<br v-if="isPC" />
            藝文特區人氣商圈，給全家多元選擇。
          </p>
          <h3 class="title cursor" @click="changeItem(2)" data-aos-delay="300" data-aos-duration="400">
            <div :class="`icon ${itemIndex === 2 ? 'active' : ''}`"></div>
            校園第一排 近何嘉仁、康萊爾
          </h3>
          <p :class="`dropdown ${itemIndex === 2 ? 'active' : ''}`">
            【嘉璟一品硯】<br v-if="isPC" />
            位校園預定地首排，日後接送孩子上下學，家長超輕鬆。<br v-if="isPC" />
            鄰近何嘉仁美語、康萊爾雙語中小學、普利斯堡美語、<br v-if="isPC" />
            文山國小（附設幼兒園）、中興國中等名校，書香文風<br v-if="isPC" />
            成就優質生活環境。
          </p>
        </div>
      </transition-group>
      <div class="hr"></div>
      <div class="menu">
        <ul>
          <li :class="`btn flex-c ${blockIndex === 0 ? 'active' : ''}`" @click="blockIndex = 0"><span>門戶一品</span></li>
          <li :class="`btn flex-c ${blockIndex === 1 ? 'active' : ''}`" @click="blockIndex = 1"><span>風景一品</span></li>
        </ul>
      </div>
    </div>
    <transition-group name="fade-up" mode="out-in">
      <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="blockIndex === 0" key="swipe-0">
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
          <div class="swipe-btns absolute flex-ac flex-jb">
            <div class="prev-btn" @click="decIndex"></div>
            <div class="next-btn" @click="addIndex"></div>
          </div>
        </div>
      </div>
      <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="blockIndex === 1" key="swipe-1">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndexNest" v-touch:swipe.right="addIndexNest">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList1[itemIndex]" v-show="slideIndex1 === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="pagination absolute flex-ac" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList1[itemIndex]" :key="slide.img + '-dot'" @click="goToIndexNest(index)"><span :class="`${slideIndex1 === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb">
            <div class="prev-btn" @click="decIndexNest"></div>
            <div class="next-btn" @click="decIndexNest"></div>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section9 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  margin-bottom:size(307);
  // background-color: #fff;
  // min-height: size(900);
  //background-image: url('./s4/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}
.bg-img {
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  transform: translateY(101%);
    z-index: 3;
  }

.content {
  @include div_l_pc(1308, 788, 101, 172);
  top: calc(50% + (101 - 1080 * .5) * 100vw / 1920);
  background-color: rgba(96, 96, 96, 0.3);
}

.text {
  @include div_l_pc(604, 618, 169, 82);
  padding: size(50) size(30) 0 size(10);
}

.hr {
  @include div_l_pc(604, 1, 169, 82);
  background-color: #998675;
}

.title {
  font-size: size(33);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.48;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  white-space: nowrap;
  display: flex;
  align-items: center;

  &.cursor {
    cursor: pointer;
  }
}

.dropdown {
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.25;
  letter-spacing: normal;
  text-align: left;
  color: #4d4d4d;
  margin-top: size(20);
  white-space: nowrap;
  transition: all 0.5s;
  height: 0;
  margin-left: size(30);
  overflow: hidden;
  &.active {
    height: size(275);
  }
}
.desc {
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.25;
  letter-spacing: normal;
  text-align: left;
  color: #4d4d4d;
  margin-top: size(20);
  white-space: nowrap;

  span {
    font-weight: bold;
  }
}

.icon {
  display: inline-block;
  width: size(17.5);
  position: relative;
  transition: all 0.5s;
  transform-origin: 50% 50%;
  margin-right: size(10);
  transform: rotate(180deg);
}
.icon::before {
  content: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpolygon fill='%23988575' points='0.2,3.2 15,28.8 29.8,3.2'/%3E%3C/svg%3E%0A");
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.5s;
}
.icon::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpolygon fill='%23000' points='15,21.8 6.2,6.7 23.7,6.7'/%3E%3C/svg%3E%0A");
  width: 100%;
  display: block;
  position: relative;
  z-index: 1;
}
.icon.active {
  transform: rotate(0deg);
}
.icon.active::before {
  opacity: 1;
}

.menu {
  @include img_l_pc(176 * 2 + 70, 81, 142);
  font-family: "Noto Serif TC", serif;
  ul {
    width: 100%;
    list-style-type: none;
    font-size: size(30);
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  li {
    position: relative;
    float: left;
    width: size(176);
    text-align: center;
    display: flex;
    margin: 0 1.5em 0 0;
    align-items: center;
    height: size(43);
    justify-content: center;
    transition: all 0.5s;
    background: #98857500;
    color: #000;
    cursor: pointer;
  }

  li.active,
  li:hover {
    color: #fff;
    background: #988575;
  }
  li::before {
    content: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 190 40' xml:space='preserve'%3E%3Cpolygon fill='%23988575' points='189,0 190,40 0,39 188,38 '/%3E%3C/svg%3E");
    width: size(184);
    display: block;
    position: absolute;
    bottom: size(-10);
    right: size(-8);
  }
}

// begin
.fade-up-leave-to {
  transform: translateY(15px);
  opacity: 0;
  z-index: 0;
}
// end
.fade-up-enter {
  transform: translateY(55px);
  opacity: 0;
  z-index: 1;
}

.fade-up-enter-active {
  transition: all 0.5s ease;
}

.fade-up-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

/* Swipe */
.swipe {
  width: size(907);
  height: size(807);
  top: calc(50% + (169 - 1080 * .5) * 100vw / 1920);
  right: size(134);
  object-fit: cover;
  // background: #0344;
  &::before {
    content: '';
    width: size(923);
    height: size(820);
    position: absolute;
    top: size(-13);
    left: size(-16);
    background-color: #998675;
  }
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
  transition: all 0.3s ease;
}

.swipe-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
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
    right: 2em;
    bottom: 1.2em;
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
    padding: 0 15px;
    z-index: 3;

    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;

    .prev-btn,
    .next-btn {
      position: absolute;
      height: 100%;
      width: size(28);
      top: 0;
    }

    .prev-btn {
      left: 0;
    }
    .next-btn {
      right: 0;
      transform: scaleX(-1);
    }
    .prev-btn::after,
    .next-btn::after {
      content: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 30 80' xml:space='preserve'%3E%3Cpolygon fill='%23FFFFFF' points='15,40 30,0 15,20 0,40 15,60 30,80 '/%3E%3C/svg%3E");
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
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
  .section9 {
    width: 100vw;
    height: sizem(710);
    min-height: auto;
    max-height: initial;
  margin-bottom:sizem(440);
  }

  .content {
    @include div_c_m(340, 678, 33);
    background-color: rgba(96, 96, 96, 0.3);
  }

  .text {
    @include div_l_m(310, 290, 80, 16);
    padding: 0;
  }

  .hr {
    @include div_l_pc(604, 1, 169, 82);
    background-color: #998675;
    display: none;
  }

  .title {
    font-size: sizem(18);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.49;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    white-space: nowrap;
    display: flex;
    align-items: center;

    &.cursor {
      cursor: pointer;
    }
  }

  .dropdown {
    font-size: sizem(14);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: 0.5px;
    text-align: left;
    color: #4d4d4d;
    margin-top: sizem(15);
    white-space: normal;
    transition: all 0.5s;
    height: 0;
    margin-left: size(0);
    overflow: hidden;
    &.active {
      height: sizem(140);
    }
  }
  .desc {
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.7;
    letter-spacing: normal;
    text-align: left;
    color: #4d4d4d;
    margin-top: size(20);
    white-space: nowrap;

    span {
      font-weight: bold;
    }
  }

  .icon {
    display: inline-block;
    width: sizem(10);
    position: relative;
    transition: all 0.5s;
    transform-origin: 50% 50%;
    margin-right: sizem(7);
    transform: rotate(180deg);
  }
  .icon::before {
    content: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpolygon fill='%23988575' points='0.2,3.2 15,28.8 29.8,3.2'/%3E%3C/svg%3E%0A");
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.5s;
  }
  .icon::after {
    content: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpolygon fill='%23000' points='15,21.8 6.2,6.7 23.7,6.7'/%3E%3C/svg%3E%0A");
    width: 100%;
    display: block;
    position: relative;
    z-index: 1;
  }
  .icon.active {
    transform: rotate(0deg);
  }
  .icon.active::before {
    opacity: 1;
  }

  .menu {
    @include img_l_m(144 * 2 + 21, 24, 10);
    ul {
      width: 100%;
      list-style-type: none;
      font-size: sizem(23);
      display: flex;
      justify-content: space-between;
      align-content: center;
    }

    li {
      position: relative;
      float: left;
      width: sizem(137);
      text-align: center;
      display: flex;
      margin: 0 0 0 0;
      align-items: center;
      height: sizem(37);
      justify-content: center;
      transition: all 0.5s;
      background: #98857500;
      color: #000;
      cursor: pointer;
    }

    li.active,
    li:hover {
      color: #fff;
      background: #988575;
    }
    li::before {
      content: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 190 40' xml:space='preserve'%3E%3Cpolygon fill='%23988575' points='189,0 190,40 0,39 188,38 '/%3E%3C/svg%3E");
      width: sizem(144);
      display: block;
      position: absolute;
      bottom: sizem(-5);
      right: sizem(-4);
    }
  }

  /* Swipe */
  .swipe {
    width: sizem(360);
    height: sizem(320);
    min-height: auto;
    top: auto;
    bottom: sizem(7);
    left: sizem(7.5);
    object-fit: cover;

    &::before {
      content: '';
      width: 100vw;
      height: sizem(334);
      position: absolute;
      top: sizem(-7);
      left: sizem(-7.5);
      background-color: #998675;
    }
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
      right: auto;
      top: auto;
      bottom: 1.2rem;
      right: 1.2rem;
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
    .prev-btn,
    .next-btn {
      width: sizem(28)
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
  name: 'section9',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      blockIndex: 0, // 0 門戶一品 1 風景一品
      itemIndex: 0,
      slideIndex1: 0,
      slideList: [
        {
          img: require('./s9/1-1.jpg'),
          name: '',
        },
        {
          img: require('./s9/1-2.jpg'),
          name: '',
        },
      ],
      slideList1: [
        [
          {
            img: require('./s9/2-1-1.jpg'),
          },
          {
            img: require('./s9/2-1-2.jpg'),
          },
          {
            img: require('./s9/2-1-3.jpg'),
          },
          {
            img: require('./s9/2-1-4.jpg'),
          },
        ],
        [
          {
            img: require('./s9/2-2-1.jpg'),
          },
          {
            img: require('./s9/2-2-2.jpg'),
          },
          {
            img: require('./s9/2-2-3.jpg'),
          },
          {
            img: require('./s9/2-2-4.jpg'),
          },
          {
            img: require('./s9/2-2-5.jpg'),
          },
          {
            img: require('./s9/2-2-6.jpg'),
          },
        ],
        [
          {
            img: require('./s9/2-3-1.jpg'),
          },
          {
            img: require('./s9/2-3-2.jpg'),
          },
          {
            img: require('./s9/2-3-3.jpg'),
          },
          {
            img: require('./s9/2-3-4.jpg'),
          },
          {
            img: require('./s9/2-3-5.jpg'),
          },
        ],
      ],
    }
  },

  methods: {
    changeItem(i) {
      this.slideIndex1 = 0
      this.itemIndex = i
    },

    addIndexNest() {
      this.slideIndex1 =
        this.slideIndex1 === this.nowLength - 1 ? 0 : this.slideIndex1 + 1
    },

    decIndexNest() {
      this.slideIndex1 =
        this.slideIndex1 === 0 ? this.nowLength - 1 : this.slideIndex1 - 1
    },

    goToIndexNest(index) {
      this.slideIndex1 = index
    },
  },

  created() {},

  mounted() {
    this.toggleTimer = false
  },

  computed: {
    nowLength() {
      return this.slideList1[this.itemIndex].length
    },
  },

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
