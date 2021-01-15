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
        <img :src="item.img" :alt="`${info.caseName}`">
        <div class="add"></div>
        <div class="content flex flex-ac wrap" v-if="!item.isEmpty">
          <div class="item-title flex-c" v-html="isMobile ? item.title2 : item.title "></div>
          <div class="item-desc flex-ac" v-html="item.desc"></div>
        </div>
        <div class="content flex-c" v-if="item.isEmpty">
          <div class="item-coming">Coming soon</div>
        </div>
      </div>
    </div>
    <div class="product-dialog" v-show="isProjectDialog && isPC">
      <div class="border-container">
        <img src="../../../assets/img/close.png" :alt="`${info.caseName}_close`" class="close" @click="closeProjectDialog">
        <div class="product-title" v-html="dialogData.title2"></div>
        <div class="product-info1" v-html="dialogData.info1"></div>
        <div class="hr"></div>
        <div class="product-info2" v-html="dialogData.info2"></div>
        <div class="info-title">建案特色：</div>
        <div class="product-info3" v-html="dialogData.info3"></div>
        <div class="product-contact" v-html="dialogData.contact"></div>
        <a class="product-btn" :href="dialogData.link" target="_blank">建案官網</a>
        <img src="./s1/rb.png" :alt="`${info.caseName}`" class="rb">
        <img :src="dialogData.logo" alt="" class="logo">
        <div class="slide-imgs flex-as flex-jb">
          <img :src="dialogData.imgs[0]" :alt="`${info.caseName}`" class="main" @click="selectImg(0)">
          <div class="imgs">
            <img :src="dialogData.imgs[1]" :alt="`${info.caseName}`" @click="selectImg(1)">
            <img :src="dialogData.imgs[2]" :alt="`${info.caseName}`" @click="selectImg(2)">
            <img :src="dialogData.imgs[3]" :alt="`${info.caseName}`" @click="selectImg(3)">
          </div>
        </div>
      </div>
    </div>
    <div class="product-dialog" v-show="isProjectDialog && isMobile">
      <div class="section1">
        <img src="./s1/bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img">
        <h1 class="title">熱銷建案</h1>
        <h1 class="subtitle">好的建築　真心推薦</h1>
        <img src="./s1/title.png" :alt="`${info.caseName}_title`" class="title-img">
        <div class="bottom"></div>
      </div>
      <div class="border-container">
        <img src="../../../assets/img/close.png" :alt="`${info.caseName}_close`" class="close" @click="closeProjectDialog">
        <div class="product-title" v-html="dialogData.title2"></div>
        <div class="product-info1" v-html="dialogData.info1"></div>
        <div class="hr"></div>
        <div class="product-info2" v-html="dialogData.info2"></div>
        <div class="info-title">建案特色：</div>
        <div class="product-info3" v-html="dialogData.info3"></div>
        <div class="product-contact" v-html="dialogData.contact"></div>
        <!-- <a class="product-btn" :href="dialogData.link" target="_blank">建案官網</a> -->
        <img src="./s1/rb.png" :alt="`${info.caseName}`" class="rb">
        <img :src="dialogData.logo" alt="" class="logo">
        <div class="swipe news-img" data-aos="fade-right" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
          <div class="swipe-wrap relative">
            <img v-for="(slide, i) in slideList" :src="slide" :key="slide + i + 'slide'" :class="`swipe-item absolute ${slideIndex === i ? 'active' : ''} ${(slideIndex === (i + 1) || slideIndex === (i - slideList.length + 1)) ? 'base' : ''}`">
            <div class="pagination absolute flex-ac">
              <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
            </div>
            <div class="swipe-btns absolute flex-ac flex-jb">
              <img src="../all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
              <img src="../all/next-btn.png" alt="" class="next-btn" @click="addIndex">
            </div>
          </div>
        </div>
        <div class="back" @click="isProjectDialog = false">
          ［回上一頁］
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
  cursor: pointer;

  .add {
  }

  img {
    width: 100%;
    height: size(487);
    object-fit: cover;
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
    letter-spacing: size(0.72);
    text-align: left;
    color: #000000;
  }

  .item-desc {
    width: 70%;
    font-size: size(20);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.37;
    letter-spacing: size(0.92);
    text-align: left;
    color: #4d4d4d;
  }

  .item-coming {
    font-size: size(36.5);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: size(0.73);
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
  width: size(40);
  height: size(40);
  background-color: #008fbb;
  cursor: pointer;
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

.product-info2 {
  @include img_l_pc(296, 308, 884);
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: size(0.76);
  text-align: left;
  color: #008fbb;
  white-space: nowrap;
}

.info-title {
  @include img_l_pc(340, 377, 884);
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: size(0.84);
  text-align: left;
  color: #008fbb;
  white-space: nowrap;
}

.product-info3 {
  @include img_l_pc(340, 377, 884 + 100);
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: size(0.84);
  text-align: left;
  color: #008fbb;
  white-space: nowrap;
}

.product-contact {
  @include img_l_pc(356, 517, 884);
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: size(1.14);
  text-align: left;
  color: #4d4d4d;
}

.product-btn {
  @include div_l_pc(180, 32, 541, 1297 + 20);
  background-color: #008fbb;
  white-space: nowrap;
  font-size: size(23);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.37;
  letter-spacing: size(5.06);
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
      @include div_r_m(168, 29, 255, 32);
      font-size: sizem(20);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 4.59;
      letter-spacing: sizem(1.2);
      text-align: left;
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
    margin: sizem(60) auto sizem(80);
  }

  .item {
    width: 100%;
    height: sizem(450);
    margin: 0 sizem(0) sizem(70);
    border-bottom: none;
    cursor: pointer;

    .add {
    }

    img {
      width: sizem(310);
      height: sizem(305);
      object-fit: cover;
    }

    .content {
      // margin-top: sizem(221);
      height: sizem(146);
      padding: 0 sizem(15) sizem(15);
    }

    .item-icon {
      width: sizem(43);
      height: sizem(43);
      margin-right: sizem(15);
    }

    .item-desc {
      width: sizem(238);
      width: 100%;
      font-size: sizem(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.4;
      letter-spacing: sizem(0.9);
      text-align: left;
      color: #4d4d4d;
    }
    .item-title {
      width: 100%;
      font-size: sizem(20);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.62;
      letter-spacing: sizem(1.16);
      text-align: left;
      justify-content: flex-start;
      color: #333333;
      // margin-bottom: 15px;
    }

    .item-coming {
      font-size: sizem(24);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.35;
      letter-spacing: size(0.73);
      text-align: center;
      color: #8e8e8e;
    }
  }
  .product-dialog {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    position: fixed;
    height: 100vh;
    overflow-y: scroll;
    top: 0;
    left: 0;
    z-index: 10000;
  }

  .border-container {
    @include div_l_m(375, 691, 277, 0);
    width: sizem(375);
    min-height: sizem(950);
    border: none;
  }

  .close {
    display: none;
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

  .product-info2 {
    @include img_l_m(297, 522, 30);
    font-size: sizem(16);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.55;
    letter-spacing: sizem(0.76);
    text-align: left;
    color: #008fbb;
    white-space: normal;
  }

  .info-title {
    @include img_l_m(340, 636, 30);
    font-size: sizem(16);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: sizem(0.84);
    text-align: left;
    color: #008fbb;
    white-space: nowrap;
  }

  .product-info3 {
    @include img_l_m(340, 636, 112);
    width: sizem(233);
    font-size: sizem(16);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: sizem(0.84);
    text-align: left;
    color: #008fbb;
    white-space: normal;
  }

  .product-contact {
    @include img_l_m(240, 763, 30);
    width: sizem(303);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.55;
    letter-spacing: sizem(1.14);
    text-align: left;
    color: #4d4d4d;
  }

  .product-btn {
    @include div_l_pc(107, 26, 815, 229);
    background-color: #008fbb;
    white-space: nowrap;
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.37;
    letter-spacing: sizem(3.06);
    text-align: center;
    text-decoration: none;
    color: #ffffff;
  }

  .rb {
    display: none;
  }

  .logo {
    @include img_r_m(65, 370, 32);
  }

  .back {
    @include img_r_m(107, 840, 134);
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
      slideList: [],
      item_list: [
        {
          title: '碧波白',
          title2: '碧波白',
          desc:
            '新北市｜新店區<br />23-49坪‧ 70‧78坪大戶雙併<br />走遍千山萬水 還是碧潭最美',
          img: require('../works/1/0.jpg'),
          isEmpty: false,
          info1:
            '新北市｜新店區<br />23-49坪‧ 70‧78坪大戶雙併<br />走遍千山萬水 還是碧潭最美',
          info2:
            '投資興建：漢翔開發有限公司<br />坪數房型：23-49坪‧ 70‧78坪大戶雙併',
          info3:
            '碧潭水岸首席 <br />涵碧美學御所<br />澳洲PTW建築團隊巨鑄<br />2020 Muse Design Awards 建築設計、室內設計',
          contact: '貴賓專線｜02-2913-1333<br />接待會館｜新店區北新路一段79號',
          link: 'https://www.bmwlife.com.tw/',
          logo: require('../works/1/0.jpg'),
          imgs: [
             require('../works/1/1.jpg'),
             require('../works/1/2.jpg'), 
             require('../works/1/3.jpg'), 
             require('../works/1/4.jpg'),
          ],
        },
        {
          title: '陽光<br />PARK',
          title2: '陽光PARK',
          desc: '新北市｜新店區<br />27-54坪<br />新店陽光公園特區生態建築',
          img: require('../works/2/0.jpg'),
          isEmpty: false,
          info1: '新北市｜新店區<br />27-54坪<br />新店陽光公園特區生態建築',
          info2:
            '建設公司：統一工商綜合區開發股份有限公司<br />坪數規劃：27-54坪',
          info3:
            '新店陽光公園特區，高綠覆率 <br />輕軌K8新和國小站 682米<br />千坪花園生態池',
          contact:
            '貴賓專線｜02-2211-7711<br />接待會館｜新北市新店區安興路107號',
          link: 'https://pk88.h35.tw/',
          logo: require('../works/2/0.jpg'),
          imgs: [
            require('../works/2/1.jpg'),
            require('../works/2/2.jpg'),
            require('../works/2/3.jpg'),
            require('../works/2/4.jpg'),
          ],
        },
        {
          title: '神采<br />飛洋',
          title2: '神采飛洋',
          desc:
            '新北市｜洲子洋重劃區<br />2房(15、20坪)｜3房(25、33坪)<br />公園 校園 花園 誠徵有園人',
          img: require('../works/3/0.jpg'),
          isEmpty: false,
          info1:
            '新北市｜洲子洋重劃區<br />2房(15、20坪)｜3房(25、33坪)<br />公園 校園 花園 誠徵有園人',
          info2:
            '投資興建：茂德建設股份有限公司<br />格局規劃：二房(15、20坪) 、 三房(25、33坪)',
          info3:
            '洲子洋中央核心區<br />坐擁公園×水岸×交通×生活機能<br />低總價、10%低自備、低月付',
          contact:
            '貴賓專線｜02-8295-1777<br />接待會館｜新北市五股區<br />新城五路與新城八路交叉口',
          link: 'https://hoh.h35.tw/',
          logo: require('../works/3/0.jpg'),
          imgs: [
            require('../works/3/1.jpg'),
            require('../works/3/2.jpg'),
            require('../works/3/3.jpg'),
            require('../works/3/4.jpg'),
          ],
        },
        {
          title: '太陽<br />帝國',
          title2: '太陽帝國',
          desc:
            '新北市｜中和區<br />19-39坪 2-3房<br />不是王牌不出手 唯有贏家能出手',
          img: require('../works/4/0.jpg'),
          isEmpty: false,
          info1:
            '新北市｜中和區<br />19-39坪 2-3房<br />不是王牌不出手 唯有贏家能出手',
          info2: '投資興建：美聯開發股份有限公司<br />規劃坪數：19-39坪',
          info3:
            '澳洲PTW建築團隊巨鑄<br />雙和第一高峰36層地標<br />全棟144隻BRB制震器',
          contact:
            '貴賓專線｜02-8668-7373<br />接待會館｜新北市中和區和平街25之1號',
          link: 'https://www.aceptw.com.tw/',
          logo: require('../works/4/0.jpg'),
          imgs: [
            require('../works/4/1.jpg'),
            require('../works/4/2.jpg'),
            require('../works/4/3.jpg'),
            require('../works/4/4.jpg'),
          ],
        },
      ],
    }
  },

  methods: {
    // @slideChangeTransitionEnd="slideChanged"
    // slideChanged(e) {
    //   const swiper = this.$refs.mySwiper.swiper
    //   if (swiper.isEnd) {
    //     this.slideIndex = 0
    //   } else if (swiper.isBeginning) {
    //     this.slideIndex = swiper.slides.length - 3
    //   } else {
    //     this.slideIndex = swiper.activeIndex - 1
    //   }
    // },

    removeElement(elem) {
      let index = this.dialogData.imgs.indexOf(elem)
      if (index > -1) {
        this.dialogData.imgs.splice(index, 1)
      }
    },

    selectImg(index) {
      let firstItem = this.dialogData.imgs[index]
      this.removeElement(this.dialogData.imgs[index])
      this.dialogData.imgs = [firstItem, ...this.dialogData.imgs]
      console.log(this.dialogData.imgs)
    },
    showProjectDialog(item) {
      if (!item.isEmpty) {
        this.dialogData = item
        this.slideList = this.dialogData.imgs
        this.isProjectDialog = true
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
