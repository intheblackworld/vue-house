<template>
  <div class="section2">
    <div class="title1" v-if="isPC">
      好的建築　不需用言語訴說
    </div>
    <div class="title2" v-if="isPC">
      好的生活　讓生命真切感動
    </div>
    <div class="container flex wrap">
      <div class="item" v-for="(item, index) in item_list" :key="item.title + index" @click="showProjectDialog(item)">
        <span></span>
        <img :src="item.img" :alt="`${info.caseName}`">
        <div class="add"></div>
        <div class="content flex flex-ac wrap" v-if="!item.isEmpty">
          <div class="item-title flex-c" v-html="isMobile ? item.title2 : item.title "></div>
          <div class="item-label" v-html="item.label"></div>
          <div class="item-desc flex-ac" v-html="item.desc"></div>
        </div>
        <div class="content flex-c" v-if="item.isEmpty">
          <div class="item-coming">Coming soon</div>
        </div>
      </div>
    </div>
    <div class="product-dialog" v-show="isProjectDialog && isPC">
      <div class="product-close" @click="closeProjectDialog"></div>
      <div class="border-container">
        <div class="close" @click="closeProjectDialog"></div>
        <div class="product-title" v-html="dialogData.title2"></div>
        <div class="product-info1" v-html="dialogData.info1"></div>
        <div class="hr"  v-if="dialogData.info2 || dialogData.info3 || dialogData.contact || dialogData.link"></div>
        <div class="txt">
          <div class="product-info2" v-html="dialogData.info2"></div>
          <div class="info-title" v-if="dialogData.info3">建案特色：</div>
          <div class="product-info3" v-html="dialogData.info3"></div>
          <div class="product-contact" v-html="dialogData.contact"></div>
          <a class="product-btn" :href="dialogData.link" target="_blank" v-if="dialogData.link">建案官網</a>
        </div>
        <img src="./s1/rb.png" :alt="`${info.caseName}`" class="rb">
        <img :src="dialogData.logo" alt="" class="logo">
        <div class="logo-label" v-html="dialogData.label"></div>
        <div class="slide-imgs flex-as flex-jb">
          <img :src="dialogData.imgs[0]" :alt="`${info.caseName}`" class="main" @click="selectImg(dialogData.imgs[0])">
          <div class="text" v-html="dialogData.hint"></div>
          <div class="imgs" v-if="dialogData.imgs[1]">
            <img :src="dialogData.imgs[1]" :alt="`${info.caseName}`" @click="selectImg(dialogData.imgs[1])">
            <img :src="dialogData.imgs[2]" :alt="`${info.caseName}`" @click="selectImg(dialogData.imgs[2])">
            <img :src="dialogData.imgs[3]" :alt="`${info.caseName}`" @click="selectImg(dialogData.imgs[3])">
          </div>
        </div>
      </div>
    </div>
    <div class="product-dialog" v-show="isProjectDialog && isMobile">
      <div class="section1">
        <div class="close" @click="isProjectDialog = false"></div>
        <img src="./s1/bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img">
        <h1 class="title">熱銷建案</h1>
        <h1 class="subtitle">好的建築　真心推薦</h1>
        <img src="./s1/title.png" :alt="`${info.caseName}_title`" class="title-img">
        <div class="bottom"></div>
      </div>
      <div class="border-container">
        <div class="swipe news-img" data-aos="fade-right" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
          <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
            <transition-group name="swipe-fade" mode="out-in">
              <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide + i" :class="`swipe-item absolute`">
                <img :src="slide" alt="">
                <div class="text" v-html="dialogData.hint"></div>
              </div>
            </transition-group>
            <div class="swipe-btns absolute flex-ac flex-jb" v-if="dialogData.imgs[1]">
              <img src="../all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
              <img src="../all/next-btn.png" alt="" class="next-btn" @click="addIndex">
            </div>
          </div>
        </div>
        <img :src="dialogData.logo" alt="" class="logo">
        <!-- <img src="../../../assets/img/close.png" :alt="`${info.caseName}_close`" class="close" @click="closeProjectDialog"> -->
        <div class="product-title" v-html="dialogData.title2"></div>
        <div class="product-info1" v-html="dialogData.info1"></div>
        <div class="hr"></div>
        <div class="txt">
          <div class="product-info2" v-html="dialogData.info2"></div>
          <div class="info-title" v-if="dialogData.info3">建案特色：</div>
          <div class="product-info3" v-html="dialogData.info3"></div>
          <div class="product-contact" v-html="dialogData.contact"></div>
          <a class="product-btn" :href="dialogData.link" target="_blank" v-if="dialogData.link">建案官網</a>
          <img src="./s1/rb.png" :alt="`${info.caseName}`" class="rb">
          <div class="back" @click="isProjectDialog = false">
            ［回上一頁］
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: auto;
  // overflow: hidden;
  position: relative;
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

.title1 {
  @include img_l_pc(596, -206, 1089);
  font-size: size(32);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.74;
  letter-spacing: size(7.36);
  text-align: left;
  color: #333333;
  white-space: nowrap;
  z-index: 3;
}

.title2 {
  @include img_r_pc(496, -156, 234);
  font-size: size(32);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.74;
  letter-spacing: size(7.36);
  text-align: left;
  color: #333333;
  white-space: nowrap;
}

.container {
  width: size(496 * 3 + 72 + 36);
  margin: size(100) auto size(170);
}

.item {
  width: size(496);
  height: size(618);
  background-color: #f7f8f8;
  margin: 0 size(18) size(50);
  position: relative;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: size(487);
    object-fit: cover;
  }
  > span {
    &::before,
    &::after {
      content: '';
      width: 1em;
      height: 0.1em;
      font-size: size(44);
      background: #004ea2;
      position: absolute;
      right: 0.5em;
      top: 10em;
    }
    &::after {
      transform-origin: 50% 50%;
      transform: rotate(90deg);
    }
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: all 0.3s;
    border: 1px solid #08b0;
  }
  &:hover:after {
    height: 100%;
    border: 1px solid #08b;
    transform: scale(1.04);
  }

  .content {
    height: size(130);
  }

  .item-title {
    width: 30%;
    font-size: size(36);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.05;
    letter-spacing: 0.02em;
    text-align: left;
    color: #000000;
  }

  .item-label {
    font-size: size(24);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.05;
    letter-spacing: 0.03em;
    text-align: left;
    color: #000000;
    position: absolute;
    right: 10px;
    top: size(495);
  }

  .item-desc {
    width: 70%;
    font-size: size(19);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.37;
    letter-spacing: 0.04em;
    text-align: left;
    color: #4d4d4d;
  }

  .item-coming {
    font-size: size(36.5);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: 0.02em;
    text-align: center;
    color: #8e8e8e;
  }
}

.product-dialog {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  .product-close {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.border-container {
  @include div_r_pc(1562, 691, 0, 172);
  top: calc(50% - 18vw);
  width: size(1562);
  height: size(691);
  border: 9.4px solid #008fbb;
}

.close {
  @include div_r_pc(40, 40, -45, -9);
  background-color: #008fbb;
  cursor: pointer;
  &::before,
  &::after {
    position: absolute;
    left: 0;
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transform: rotate(-45deg);
    transform-origin: center;
    top: calc(50% - 1px);
  }
  &::before {
    transform: rotate(45deg);
  }
}

.product-title {
  @include img_l_pc(207, 48, 884);
  font-size: size(51);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: size(1.02);
  text-align: left;
  color: #000000;
  white-space: nowrap;
}

.hr {
  @include div_l_pc(285, 2, 264, 884);
  background-color: #008fbb;
}

.product-info1 {
  @include img_l_pc(340, 130, 884);
  font-size: size(23);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.37;
  letter-spacing: size(0.92);
  text-align: left;
  color: #4d4d4d;
  white-space: nowrap;
}
.txt {
  @include img_l_pc(640, 305, 884);
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: 0.05em;
  text-align: left;
  color: #008fbb;
}
.product-info2 {
  margin: 0 0 0.6em;
}

.info-title {
  line-height: 1.4;
}

.product-info3 {
  line-height: 1.4;
  position: relative;
  top: -1.35em;
  margin: 0 0 -0.6em 5.3em;
}

.product-contact {
  color: #4d4d4d;
}

.product-btn {
  @include div_r_pc(180, 32, 0, 0);
  top: auto;
  bottom: 0;
  background-color: #008fbb;
  white-space: nowrap;
  font-size: 1.21em;
  line-height: 1.37;
  letter-spacing: 0.22em;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
}

.rb {
  @include img_r_pc(576, 610, 100);
  padding: 0 size(30);
  background-color: #fff;
}

.logo {
  @include img_r_pc(203, 23, 20);
}

.logo-label {
  @include img_r_pc(203, 230, 20);
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.05;
  letter-spacing: size(0.72);
  text-align: center;
  color: #000000;
}

.slide-imgs {
  width: size(598 + 206);
  margin-left: size(55);
  margin-top: size(48);
  overflow: hidden;
  justify-content: center;
  .text {
    white-space: pre;
    font-size: size(12);
    line-height: 1.6;
    // content: '';
    position: absolute;
    bottom: 4em;
    left: 5em;
    opacity: 0.9;
    color: #fff;
    text-shadow: 0 0 0.6em #000;
  }

  .main {
    // width: size(586);
    // max-width: size(586);
    width: 70%;
    flex: 1 1 73%;
    height: size(580);
    object-fit: cover;
  }

  .imgs {
    // width: size(206);
    width: 30%;
    flex: 0 0 30%;
    max-width: size(206);
    margin-left: size(12);

    img {
      width: 100%;
      height: size(180);
      object-fit: cover;
      margin-bottom: size(18);
    }
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
  .section1 {
    width: 100vw;
    min-height: sizem(320);
    max-height: sizem(812);
    height: sizem(320);
    position: relative;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;

    .bg-img {
      width: sizem(375);
      height: 100%;
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

    .title {
      @include div_r_m(118, 37, 196, 32);
      font-size: sizem(25);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 4.2;
      letter-spacing: sizem(6);
      text-align: left;
      color: #ffe900;
      white-space: nowrap;
    }

    .subtitle {
      @include div_r_m(300, 29, 255, 32);
      font-size: sizem(20);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 4.59;
      letter-spacing: sizem(1.2);
      text-align: right;
      color: #444444;
      z-index: 10;
    }

    .title-img {
      @include img_l_m(180, 208, 33);
    }

    .bottom {
      @include div_r_m(375, 50, 0, 0);
      top: auto;
      bottom: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 sizem(50) sizem(700);
      border-color: transparent transparent #fff transparent;
    }
  }
  .section2 {
    width: 100vw;
    min-height: auto;
    max-height: auto;
    height: auto;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height: 100%;
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

  .container {
    width: sizem(310);
    margin: sizem(50) auto sizem(80);
  }

  .item {
    width: 100%;
    height: sizem(450);
    margin: 0 sizem(0) sizem(70);
    border-bottom: none;

    img {
      width: sizem(310);
      height: sizem(305);
      object-fit: cover;
    }
    > span {
      &::before,
      &::after {
        font-size: sizem(27.5);
      }
    }
    &::before,
    &::after {
      font-size: sizem(27.5);
    }

    .content {
      // margin-top: sizem(221);
      align-content: center;
      height: sizem(146);
      padding: 0 sizem(15) sizem(15);
    }

    .item-icon {
      width: sizem(43);
      height: sizem(43);
      margin-right: sizem(15);
    }
    .item-title {
      width: 100%;
      font-size: sizem(20);
      line-height: 1.6;
      letter-spacing: 0.06em;
      justify-content: flex-start;
      margin-bottom: sizem(10);
    }

    .item-label {
      font-size: sizem(20);
      line-height: 1.6;
      letter-spacing: 0.06em;
      justify-content: flex-start;
      top: sizem(305);
    }

    .item-desc {
      width: sizem(238);
      width: 100%;
      font-size: sizem(15);
      line-height: 1.4;
      letter-spacing: 0.06em;
    }

    .item-coming {
      font-size: sizem(24);
    }
  }
  .product-dialog {
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
  }

  .border-container {
    @include div_l_m(375, 691, 277, 0);
    width: sizem(375);
    min-height: sizem(0);
    height: auto;
    border: none;
  }

  .close {
    @include div_r_m(40, 40, 15, 15);
    z-index: 5;
    position: fixed;
  }

  .product-title {
    @include img_l_m(103, 364, 33);
    font-size: sizem(34);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;
    letter-spacing: sizem(0.62);
    text-align: left;
    color: #000000;
    white-space: nowrap;
  }

  .hr {
    @include div_l_m(320, 2, 500, 32);
    background-color: #008fbb;
  }

  .product-info1 {
    @include img_l_m(340, 420, 33);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.37;
    letter-spacing: sizem(0.92);
    text-align: left;
    color: #4d4d4d;
    white-space: nowrap;
  }

  .txt {
    @include img_l_m(330, 522, 30);
    font-size: sizem(16);
    padding: 0 0 10.5em 0;
  }

  .product-btn {
    // @include div_l_pc(107, 26, 815, 229);
    font-size: sizem(15);
    width: 7.2em;
    height: 1.7333em;
    bottom: 8em;
  }

  .rb {
    display: none;
  }

  .logo {
    @include img_r_m(65, 370, 32);
  }

  .logo-label {
    display: none;
  }

  .back {
    @include img_r_m(107, 0, 134);
    top: auto;
    bottom: 5em;
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.09;
    letter-spacing: sizem(3.3);
    text-align: left;
    color: #008fbb;
    white-space: nowrap;
    cursor: pointer;
  }

  .slide-imgs {
    width: size(598 + 206);
    margin-left: size(55);
    margin-top: size(48);

    .main {
      width: size(586);
      height: size(580);
      object-fit: cover;
    }

    .imgs {
      width: size(206);

      img {
        width: 100%;
        height: size(180);
        object-fit: cover;
        margin-bottom: size(18);
      }
    }
  }

  /* Swipe */
  .swipe {
    width: sizem(310);
    height: sizem(267);
    min-height: auto;
    top: sizem(63);
    left: sizem(33);
    object-fit: cover;
    position: relative !important;
    .text {
      white-space: pre;
      font-size: sizem(12);
      transform: scale(0.9);
      transform-origin: 0 100%;
      line-height: 1.6;
      //content: '本圖為示意圖,依核准之執照圖說及\A合約副圖為準,建設公司保有修改權';
      position: absolute;
      bottom: 0.3em;
      left: 0.3em;
      opacity: 0.8;
      z-index: 5;
      color: #fff;
      text-shadow: 0 0 0.6em #000;
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
    left: 0;
    z-index: 0;
    .slide-name {
      right: 1em;
      font-size: sizem(13);
    }

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
  }

  .pagination {
    display: none;
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
  name: 'section2',

  mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
      isProjectDialog: false,
      dialogData: {
        title: '',
        title2: '',
        info1: '',
        info2: '',
        info3: '',
        contact: '',
        link: '',
        logo: '',
        imgs: [],
      },
      slideList: [
        require('../works/1/1.jpg'),
        require('../works/1/2.jpg'),
        require('../works/1/3.jpg'),
        require('../works/1/4.jpg'),
      ],
      item_list: [
        // 高大之森
        {
          title: '高大<br />之森',
          title2: '高大之森',
          desc: '高雄市｜高雄台積電<br />高大特區海景地王<br />21-35坪<br />台灣十大建商 前進高雄代表作',
          img: require('../works/10/1.jpg'),
          isEmpty: false,
          info1: '高雄市｜高雄台積電<br />高大特區海景地王<br />21-35坪<br />台灣十大建商 前進高雄代表作',
          info2: '投資興建：中德建設<br />規劃坪數：21-35坪',
          info3: '台灣十大建商<br />前進高雄代表作<br />高大特區Σ計畫<br />國際建材臻品<br />頂級設計美學',
          contact: '貴賓專線｜07-364-8088<br />接待會館｜高雄市楠梓區藍田路x大學西路口',
          link: '',
          logo: require('../works/10/1.jpg'),
          imgs: [
            require('../works/10/3.jpg'),
            require('../works/10/4.jpg'),
            require('../works/10/5.jpg'),
            require('../works/10/6.jpg'),
            ],
          hint: '本圖為示意圖,依核准之執照圖說及<br />合約副圖為準,建設公司保有修改權',
          label: '',
        },

      // 文華苑
      {
          title: '文華苑',
          title2: '文華苑',
          desc: '新北市｜新莊副都心<br />副都中心 天生為王<br />中原、中華大道角地｜19-27坪',
          img: require('../works/15/1.jpg'),
          isEmpty: false,
          info1: '新北市｜新莊副都心<br />副都中心 天生為王<br />中原、中華大道角地｜19-27坪',
          info2: '投資興建：<br />規劃坪數：19-27坪',
          info3: '百利唯一地，眾勢成一王<br />中原路X中華路黃金雙軸交會角地<br />副都心豪宅富人區唯一小坪數<br />優勢而起，轄勢而生<br />「文華苑」這一席不會再有了',
          contact: '貴賓專線｜02-2279-1188<br />接待會館｜新莊區中原路101號對面',
          link: 'https://wen.debang.tw/',
          logo: require('../works/15/1.jpg'),
          imgs: [
            require('../works/15/2.jpg'),],
          hint: '',
          label: '',
        },
        // 太陽
        {
          title: '太陽<br />帝國',
          title2: '太陽帝國',
          desc: '新北市｜中和區<br />19-39坪 2-3房<br />雙和雙捷運地王 摩天鋼骨住宅',
          img: require('../works/4/0.jpg'),
          isEmpty: false,
          info1:
            '新北市｜中和區<br />19-39坪 2-3房<br />雙和雙捷運地王 摩天鋼骨住宅',
          info2: '投資興建：美聯開發股份有限公司<br />規劃坪數：19-39坪',
          info3:
            '澳洲PTW建築團隊巨鑄<br />雙和第一高峰36層地標<br />全棟144隻BRB制震器',
          contact:
            '貴賓專線｜02-8668-7373<br />接待會館｜新北市中和區景新街337號',
          link: 'https://ace.debang.tw/',
          logo: require('../works/4/0.jpg'),
          imgs: [
            require('../works/4/1.jpg'),
            require('../works/4/2.jpg'),
            require('../works/4/3.jpg'),
            require('../works/4/4.jpg'),
          ],
          hint: '本圖為示意圖,依核准之執照圖說及<br />合約副圖為準,建設公司保有修改權',
          label: '',
        },

         // 海揚V1
        {
          title: '海揚V1',
          title2: '海揚V1',
          desc: '基隆市｜站前四鐵特區<br />16-27坪<br />基隆帝王 港景首排',
          img: require('../works/11/1.jpg'),
          isEmpty: false,
          info1: '基隆市｜站前四鐵特區<br />16-27坪<br />基隆帝王 港景首排',
          info2: '投資興建：漢翔開發股份有限公司<br />規劃坪數：16-27坪',
          info3: '基隆帝王 港景首排<br />基隆的成就，我們的窗景<br />海洋新國門｜站前四鐵特區｜首開世界豪門',
          contact: '貴賓專線｜02-2425-1111<br />接待會館｜基隆市中山區中山一路265號',
          link: 'https://seav1.debang.tw/',
          logo: require('../works/11/1.jpg'),
          imgs: [
            require('../works/11/3.jpg'),
            require('../works/11/4.jpg'),
            require('../works/11/5.jpg'),
            require('../works/11/6.jpg'),
            ],
          hint: '本圖為示意圖,依核准之執照圖說及<br />合約副圖為準,建設公司保有修改權',
          label: '',
        },
         // 理享城
        {
          title: '理享城',
          title2: '理享城',
          desc: '新北市｜洲子洋重劃新蘆特區<br />19-33坪<br />蘆洲下一站 萬坪公園城',
          img: require('../works/14/1.jpg'),
          isEmpty: false,
          info1: '新北市｜洲子洋重劃<br />新蘆特區19-33坪<br />蘆洲下一站 萬坪公園城',
          info2: '投資興建：德裕建設股份有限公司<br />規劃坪數：16-33坪',
          info3: '蘆洲下一站 萬坪公園城<br />蘆洲捷運 一站到家<br />新蘆特區公園水岸造鎮<br />2-3房捷運夢享家',
          contact: '貴賓專線｜02-8292-3777<br />接待會館｜<br />新北市五股區成泰路三段356號旁',
          link: 'https://wl2.debang.tw/',
          logo: require('../works/14/1.jpg'),
          imgs: [
            require('../works/14/3.jpg'),
            require('../works/14/4.jpg'),
            require('../works/14/5.jpg'),
            require('../works/14/6.jpg'),
            ],
          hint: '本圖為示意圖,依核准之執照圖說及<br />合約副圖為準,建設公司保有修改權',
          label: '',
        },
        // 伴月灣
        {
          title: '伴月灣',
          title2: '伴月灣',
          desc: '新北市｜洲子洋重劃新蘆特區<br />19-24坪<br />面水岸 近捷運 鄰公園',
          img: require('../works/9/1.jpg'),
          isEmpty: false,
          info1:
            '新北市｜洲子洋重劃新蘆特區<br />19-24坪<br />面水岸 近捷運 鄰公園',
          info2: '投資興建：中德建設<br />規劃坪數：19-24坪',
          info3:
            '水岸豪景第一排<br />蘆洲捷運站5分鐘<br />新蘆特區水岸宜居<br />前迎8800坪雙公園<br />背倚5600坪生態保護區',
          contact:
            '貴賓專線｜02-8292-2333<br />接待會館｜<br>新北市五股區新城八路336號',
          link: 'https://wv.debang.tw/',
          logo: require('../works/9/1.jpg'),
          imgs: [
            require('../works/9/2.jpg'),
            require('../works/9/3.jpg'),
            require('../works/9/4.jpg'),
            require('../works/9/5.jpg'),
          ],
          hint: '本圖為示意圖,依核准之執照圖說及<br />合約副圖為準,建設公司保有修改權',
          label: '',
        },
        // 雙橡園
        {
          title: '雙橡園',
          title2: '雙橡園',
          desc: '新北市｜新莊副都心<br />雙校園 雙公園 雙捷運 雙商圈<br />副都心1%極限量',
          img: require('../works/12/1.jpg'),
          isEmpty: false,
          info1: '新北市|副都心1%極限量<br />美式生活2-3房',
          info2: '興建投資：精業建設',
          info3: '雙校園Ｘ雙公園Ｘ雙捷運Ｘ雙商圈<br />家門就是校門 開窗就像開卷<br />副都心成家換屋第一志願',
          contact: '貴賓專線｜02-2279-1188<br />接待會館｜<br>新莊區中原路101號對面',
          link: 'https://gtcip.debang.tw/',
          logo: require('../works/12/1.jpg'),
          imgs: [
          //isMobile?
          //require('../works/12/2m.jpg') :
          //require('../works/12/2.jpg'),
          require('../works/12/3.jpg'),
          require('../works/12/5.jpg'),
          require('../works/12/6.jpg'),
          require('../works/12/7.jpg'),],
          hint: '本圖為示意圖,依核准之執照圖說及<br />合約副圖為準,建設公司保有修改權',
          label: '',
        },
        
        // 快樂王國
        {
          title: '快樂<br />王國',
          title2: '快樂王國',
          desc: '新北市｜洲子洋重劃新蘆特區<br />21-30坪<br />蘆洲捷運 一站到家',
          img: require('../works/8/0.jpg'),
          isEmpty: false,
          info1: '新北市｜洲子洋重劃新蘆特區<br />21-30坪<br />蘆洲捷運 一站到家',
          info2: '投資興建：寶德建設<br />規劃坪數：21-30坪',
          info3: '蘆洲捷運 一站到家<br />新蘆特區公園水岸造鎮<br />戶戶邊間 雙面採光<br />夢幻全能休閒會所',
          contact: '貴賓專線｜02-8292-3777<br />接待會館｜<br>新北市五股區成泰路三段356號旁',
          link: 'https://wl.debang.tw/',
          logo: require('../works/8/0.jpg'),
          imgs: [
            require('../works/8/2.jpg'),
            require('../works/8/3.jpg'),
            require('../works/8/4.jpg'),
            require('../works/8/5.jpg'),],
          hint: '本圖為示意圖,依核准之執照圖說及<br />合約副圖為準,建設公司保有修改權',
          label: '',
        },
        // 碧波白
        {
          title: '碧波白',
          title2: '碧波白',
          desc: '新北市｜新店區<br />23-49坪‧ 70‧78坪大戶雙併<br />走遍千山萬水 還是碧潭最美',
          img: require('../works/1/0.jpg'),
          isEmpty: false,
          info1:
            '新北市｜新店區<br />23-49坪‧ 70‧78坪大戶雙併<br />走遍千山萬水 還是碧潭最美',
          info2:
            '投資興建：漢翔開發有限公司<br />坪數房型：23-49坪‧ 70‧78坪大戶雙併',
          info3:
            '碧潭水岸首席 <br />涵碧美學御所<br />澳洲PTW建築團隊巨鑄<br />2020 Muse Design Awards 建築設計、室內設計',
          contact: '貴賓專線｜02-2913-1333<br />接待會館｜新店區北新路一段79號',
          link: 'https://bbb.debang.tw/',
          logo: require('../works/1/0.jpg'),
          imgs: [
            require('../works/1/1.jpg'),
            require('../works/1/2.jpg'),
            require('../works/1/3.jpg'),
            require('../works/1/4.jpg'),
          ],
          text: [
            require('../works/1/1.jpg'),
            require('../works/1/2.jpg'),
            require('../works/1/3.jpg'),
            require('../works/1/4.jpg'),
          ],
          hint: '本圖為示意圖,依核准之執照圖說及<br />合約副圖為準,建設公司保有修改權',
          label: '',
        },
        // 神采
        
      ],
    }
  },

  methods: {
    /*
   @slideChangeTransitionEnd="slideChanged"
     slideChanged(e) {
       const swiper = this.$refs.mySwiper.swiper
       if (swiper.isEnd) {
         this.slideIndex = 0
       } else if (swiper.isBeginning) {
         this.slideIndex = swiper.slides.length - 3
       } else {
         this.slideIndex = swiper.activeIndex - 1
       }
     },
    */

    selectImg(src) {
      this.dialogData.imgs.unshift(
        this.dialogData.imgs.splice(
          this.dialogData.imgs.findIndex((item) => item === src),
          1,
        )[0],
      )
    },
    showProjectDialog(item) {
      if (!item.isEmpty) {
        this.dialogData = item
        this.slideList = this.dialogData.imgs
        this.isProjectDialog = true
        this.slideIndex = 0
      }
    },

    closeProjectDialog() {
      this.isProjectDialog = false
    },
  },

  mounted() {},

  created() {},

  computed: {},
}
</script>
