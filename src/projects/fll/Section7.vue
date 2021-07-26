<template>
  <div class="section7 flex">
    <img src="./s7/style_1.png" :alt="`${info.caseName}_img`" class="style1" />
    <img src="./s7/style_2.png" :alt="`${info.caseName}_img`" class="style2" />
    <img src="./s7/style_3.png" :alt="`${info.caseName}_img`" class="style3" />
    <img src="./s7/mouse.png" :alt="`${info.caseName}_img`" class="mouse" />
    <div class="btns">
      <div :class="`btn ${pageIndex === 0 ? 'active': ''}`" @click="changePage(0)">37坪</div>
      <div :class="`btn ${pageIndex === 1 ? 'active': ''}`" @click="changePage(1)">25坪</div>
      <div :class="`btn ${pageIndex === 2 ? 'active': ''}`" @click="changePage(2)">26坪</div>
    </div>
    <div :class="`content left ${pageIndex === 1 ? 'big' : ''}`">
      <div class="title1" v-html="list[pageIndex].title1"></div>
      <div class="subtitle" v-html="list[pageIndex].subtitle"></div>
      <img src="./s7/arrowline.png" :alt="`${info.caseName}_img`" class="arrowline" />
      <div :class="`desc1 ${pageIndex === 1 ? 'big' : ''}`">
        <li v-for="desc in list[pageIndex].desc1" v-html="desc" :key="desc"></li>
      </div>
    </div>
    <div :class="`content ${pageIndex === 1 ? 'big-middle' : ''}`">
      <img :src="list[pageIndex].area" :alt="`${info.caseName}_img`" class="area" v-if="isPC" />
      <img :src="list[pageIndex].area" :alt="`${info.caseName}_img`" :class="`area ${pageIndex === 1 ? 'big' : ''}`" v-if="isMobile" @click="showDialog" />
      <div class="touch" v-if="isMobile && pageIndex !== 1" @click="showDialog">點擊圖片<br />放大觀看</div>
    </div>
    <div class="content right">
      <div class="swipe relative" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="list[pageIndex].slideList.length > 0">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt />
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="pagination absolute flex-ac" data-aos="fade" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)">
              <span :class="`${slideIndex === index ? 'active' : ''}`"></span>
            </div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb">
            <div class="prev-btn" @click="decIndex"></div>
            <div class="next-btn" @click="addIndex"></div>
          </div>
        </div>
      </div>
      <div class="title2" v-html="list[pageIndex].title2"></div>
      <div class="line"></div>
      <div :class="`desc2 ${pageIndex === 1 ? 'big' : ''}`">
        <li v-for="desc in list[pageIndex].desc2" v-html="desc" :key="desc"></li>
      </div>
    </div>
    <transition name="swipe-fade" mode="out-in">
      <div class="dialog" v-if="isDialog" @scroll="handleScroll">
        <div class="dialog-bg">
          <div class="dialog-close flex-c" @click="isDialog = false">
            <img src="../../assets/img/close.png" alt />
          </div>
          <img :src="dialogImg" alt class="dialog-img" />
          <img src="./mobile/06/swipe-here.png" alt :class="`dialog-hand ${showMask ? 'active' : ''}`" />
        </div>
      </div>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.section7 {
  width: 100%;
  height: 100vh;
  min-height: size(1080);
  max-height: size(1080);
  position: relative;
  background-color: #bccf00;
  overflow: hidden;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.btns {
  @include div_l_pc(360, 63, 221, 129);
  background-color: #de1373;
  color: #fff;
  display: flex;
  align-items: center;
  .btn {
    width: 33.33%;
    height: 80%;
    font-size: size(38);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: size(1.5);
    text-align: center;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:nth-child(2) {
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
    }

    &.active {
      color: #ffee00;
    }
  }
}

.content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding-left: size(40);
  &.right {
    padding-left: size(0);
  }
  &.left {
    padding-left: size(90);
    width: size(592);
  }
}

.title1 {
  font-size: size(55);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3.3);
  text-align: center;
  color: #cf0065;
  margin-bottom: size(20);
}

.subtitle {
  font-size: size(32);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: size(0.7);
  text-align: left;
  color: #221814;
  margin-bottom: size(20);
}

.arrowline {
  width: size(454);
  margin-bottom: size(20);
}

.desc1 {
  width: size(579);
  li {
    font-size: size(25);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: size(2.5);
    text-align: left;
    color: #221814;
  }
}

.area {
  width: size(545);
  height: auto;
}

.title2 {
  width: size(520);
  font-size: size(44);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: size(2.3);
  text-align: center;
  color: #cf0065;
  margin-top: size(20);
  margin-bottom: size(20);
}

.line {
  width: size(579);
  border-top: 2px solid #231815;
  margin-bottom: size(20);
}

.desc2 {
  width: size(579);
  li {
    font-size: size(29);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.2;
    letter-spacing: size(0.5);
    text-align: left;
    color: #221814;
  }
}

/* Swipe */
.swipe {
  width: size(579);
  height: size(346);
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
  }

  .slide-name {
    font-family: "Noto Sans TC";
    left: 2em;
    bottom: 0.2em;
    color: #fff;
    font-size: size(18);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: left;
    text-shadow: 0 0.3em 1em #0003;
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
  // @include img_l_pc(296, 155, 522);
  // width: auto;
  bottom: size(10);
  right: size(10);
  // left: 0;
  // margin: 0 auto;
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
    background-color: #fff;
    transition: all 0.5s;

    &::before {
      content: "";
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
        content: "";
        width: 100%;
        height: 100%;
        display: block;
        box-shadow: 0 0 0 1px #cf0065;
        background: #cf0065;
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
      content: "";
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
      content: "";
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

.mouse {
  @include img_l_pc(343, 767, 79);
}
.style1 {
  @include img_l_pc(800, 764, -130);
  opacity: 0.3;
  animation: bling 1s 0.3s ease-in-out infinite alternate;
}

.style2 {
  @include img_r_pc(885, 776, -243);
  opacity: 0.3;
  animation: bling 1.2s 0.5s ease-in-out infinite alternate;
}

.style3 {
  @include img_r_pc(885, -300, -400);
  opacity: 0.3;
  animation: bling 1.5s 0s ease-in-out infinite alternate;
}

@keyframes bling {
  to {
    opacity: 1;
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
    height: auto;
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
    flex-wrap: wrap;
  }
  .mouse,
  .style1,
  .style2,
  .style3 {
    display: none;
  }

  .btns {
    @include div_c_m(216, 38, 42);
    background-color: #de1373;
    color: #fff;
    display: flex;
    align-items: center;
    .btn {
      width: 33.33%;
      height: 80%;
      font-size: sizem(21);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 2;
      letter-spacing: sizem(1);
      text-align: center;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:nth-child(2) {
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
      }

      &.active {
        color: #ffee00;
      }
    }
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
    padding-left: sizem(30) !important;
    padding-bottom: sizem(30) !important;
    width: 100%;
    &.left {
      margin-top: sizem(115);
      width: sizem(220);
    }


    &.big {
      width: 100% !important;
      padding-right: sizem(30);
    }

    &.big-middle, &.right {
      padding-left: 0 !important;
    }
  }

  .title1 {
    width: 100%;
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1.3);
    text-align: left;
    color: #cf0065;
    margin-bottom: sizem(20);
  }

  .subtitle {
    font-size: sizem(14);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1.4);
    text-align: left;
    color: #221814;
    margin-bottom: size(0);
  }

  .arrowline {
    width: 100%;
    margin-bottom: size(20);
    display: none;
  }

  .desc1 {
    width: 100%;
    &.big {
      width: sizem(315);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-top: sizem(15);

      li {
        width: 50%;
        text-align: left;
      }
    }
    li {
      font-size: sizem(14);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.4;
      letter-spacing: sizem(1.4);
      text-align: left;
      color: #221814;
    }
  }

  .area {
    width: sizem(125);
    height: sizem(130);
    object-fit: cover;
    position: absolute;
    top: sizem(104);
    right: sizem(30);

    &.big {
      width: sizem(213);
      position: relative;
      margin: sizem(20) auto;
      right: auto;
      top: auto;
      height: auto;
    }
  }

  .touch {
    width: sizem(125);
    height: sizem(50);
    object-fit: cover;
    position: absolute;
    top: sizem(232);
    right: sizem(30);
    padding-top: sizem(7);
    font-size: sizem(16);
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1);
    text-align: center;
    color: #fff;
    background-color: #de1373;
  }

  .title2 {
    width: 100%;
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: sizem(1.3);
    text-align: center;
    color: #cf0065;
    margin-bottom: size(20);
  }

  .line {
    display: none;
    // width: size(520);
    // border-top: 2px solid #231815;
    // margin-bottom: size(20);
  }

  .desc2 {
    width: 100%;
    padding-left: sizem(30);
    &.big {
      padding-left: sizem(0);
      li {
        text-align: center;
      }
    }
    li {
      font-size: sizem(14);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.2;
      letter-spacing: size(1.5);
      text-align: left;
      color: #221814;
    }
  }

  /* Swipe */
  .swipe {
    width: sizem(313);
    height: sizem(187);
    min-height: auto;
    top: sizem(0);
    bottom: auto;
    left: sizem(30);
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
        content: "";
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
          content: "";
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
    left: 0%;
    .prev-btn,
    .next-btn {
      font-size: sizem(15);
      background-color: rgba(0, 0, 0, 0.34);
      &::before {
      }
      &::after {
        border-color: #fff;
        border-width: 0.15em 0.15em 0 0;
        animation: btn 0.5s ease-in-out infinite alternate;
      }
    }
  }

  .dialog {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.34);
    z-index: 1000;
    overflow-y: scroll;

    .dialog-bg {
      width: 100%;
      height: 100%;
      // padding-top: $nav_pc_height;
      background-attachment: fixed;
      background-size: auto;
      background-position: center center;
      background-repeat: repeat;
    }

    .dialog-img {
      position: absolute;
      width: auto;
      height: 100vh;
      top: 0;
      left: 0;
    }

    .dialog-close {
      @include div_r_m(31, 32, 10, 10);
      // border: 1px solid #fff;
      position: fixed;
      cursor: pointer;
      background-color: rgba(54, 54, 54, 0.8);
      z-index: 2;

      img {
        width: 90%;
      }
    }

    .dialog-hand {
      @include img_l_m(80, 334, 148);
      opacity: 0;
      transition: opacity 0.5s;
      &.active {
        opacity: 1;
      }
      animation: swing 1.5s ease-in-out 0s infinite alternate-reverse;
    }

    @keyframes swing {
      to {
        transform: translateX(-25%);
      }
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from "@/utils";
import slider from "@/mixins/slider.js";
import info from "@/info";

export default {
  name: "section7",

  mixins: [slider],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      dialogImg: null,
      showMask: false,
      pageIndex: 0,
      list: [
        {
          title1: "37坪採光大3房",
          subtitle: "",
          desc1: [
            "█ 玄關規劃好收納",
            "█ 擁低台度大面開窗，及前後大陽台",
            "█ 雙衛浴皆開窗不易潮濕",
            "█ 3間主、次臥皆有雙人床空間"
          ],

          title2: "格局規劃佳，舒適不將就",
          desc2: [
            "█ 無廊道高坪效規劃，空間好利用",
            "█ 戶戶衛浴皆有對外窗，空氣流通不易潮濕",
            "█ 戶戶邊間採光極佳，無暗房暗廳問題"
          ],
          area: require("./s7/1-img.png"),
          slideList: [
            {
              img: require("./s7/2-1.jpg"),
              name: "樣品屋實景"
            },
            {
              img: require("./s7/2-2.jpg"),
              name: "樣品屋實景"
            },
            {
              img: require("./s7/2-3.jpg"),
              name: "樣品屋實景"
            },
            {
              img: require("./s7/2-4.jpg"),
              name: "樣品屋實景"
            }
          ]
        },
        {
          title1: "25坪實用雙套房",
          subtitle: isMobile ? "園區萬人租客，入主現成房東自住置產實用優勢大集合：":  "園區萬人租客，入主現成房東<br />自住置產實用優勢大集合：",
          desc1: [
            "█ 電表分離配置",
            "█ 包租代管2年",
            "█ 專有玄關緩衝",
            "█ 便利私有陽台"
          ],

          title2: "出租置產 高投報率 ",
          desc2: ["一邊自用 一邊收租 開啟斜槓人生", "抵制高速通膨的絕佳產品"],
          area: require("./s7/2-img.png"),
          slideList: []
        },
        {
          title1: "26坪高效正2房",
          subtitle: "",
          desc1: [
            "█ 玄關規劃好收納",
            "█ 低台度大面開窗",
            "█ 客廳對外明亮空間",
            "█ 主臥大空間好收納"
          ],

          title2: "格局規劃佳，舒適不將就",
          desc2: [
            "█ 無廊道高坪效規劃，空間好利用",
            "█ 戶戶衛浴皆有對外窗，空氣流通不易潮濕",
            "█ 戶戶邊間採光極佳，無暗房暗廳問題"
          ],
          area: require("./s7/3-img.png"),
          slideList: [
            {
              img: require("./s7/1-1.jpg"),
              name: "樣品屋實景"
            },
            {
              img: require("./s7/1-2.jpg"),
              name: "樣品屋實景"
            },
            {
              img: require("./s7/1-3.jpg"),
              name: "樣品屋實景"
            },
            {
              img: require("./s7/1-4.jpg"),
              name: "樣品屋實景"
            }
          ]
        }
      ],
      slideList: []
    };
  },

  methods: {
    showDialog() {
      if (this.pageIndex !== 1) {
        this.isDialog = true;
      this.showMask = true;
      this.dialogImg = this.list[this.pageIndex].area;
      }
    },

    handleScroll() {
      this.showMask = false;
    },

    changePage(index) {
      this.slideList = this.list[index].slideList;
      this.slideIndex = 0;
      this.pageIndex = index;
    }
  },

  created() {},

  mounted() {
    this.slideList = this.list[this.pageIndex].slideList;
  },

  computed: {},

  watch: {}
};
</script>
