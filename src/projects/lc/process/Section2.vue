<template>
  <div class="section2">
    <div class="head">
      <div class="breads">
        <router-link to="/">首頁</router-link> >
        <router-link to="/process">工程進度</router-link> >
      </div>
      <div class="title" v-html="list[this.$route.params.id][0].o_title"></div>
      <div class="subtitle" v-html="list[this.$route.params.id][0].o_subtitle"></div>
    </div>
    <div class="process-container">
      <div class="process-item" v-for="(item, index) in list[this.$route.params.id]" :key="item.title + index" @click="showDialog(item.isFinished, index)">
        <img :src="item.img" alt="" class="process-img">
        <div class="process-b">
          <div class="process-title">
            {{item.title}}
          </div>
          <div class="process-subtitle" v-html="item.subtitle">
          </div>
        </div>
      </div>
      <div class="process-item0"></div>
      <div class="process-item0"></div>
      <div class="back" @click="$router.push('/process')">
        回工程進度
      </div>
      <!-- <div class="pagination flex-c">
        <div :class="`pagi flex-c ${index === currentPage ? 'active' : ''}`" v-for="index in pageCount" :key="'pagi' + index" @click="currentPage = index">{{index}}</div>
      </div> -->
    </div>
    <div :class="`dialog ${isDialog ? 'show' : ''}`">
      <img src="../../../assets/img/close.png" alt="" class="close" @click="isDialog = false">

      <div class="dialog-content">
        <div class="dialog-head">
          <router-link to="/">首頁</router-link> >
          <router-link to="/process">工程進度</router-link> > 
          <span @click="isDialog = false">{{ list[this.$route.params.id][0].o_title }}> {{ list[this.$route.params.id][dialogIndex].title }}</span>
        </div>
        <div class="swipe" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
          <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
            <transition-group name="swipe-fade" mode="out-in">
              <div v-for="(img, i) in list[this.$route.params.id][dialogIndex].imgs" v-show="slideIndex === i" :key="img + i" :class="`swipe-item absolute`">
                <img :src="img" :alt="img">
                <!-- <div class="name absolute" v-html="slide.name"></div> -->
              </div>
            </transition-group>
            <div class="swipe-btns absolute flex-ac flex-jb">
              <div class="prev-btn" @click="dec"></div>
              <div class="next-btn" @click="add"></div>
            </div>
            <div class="pagination absolute flex-ac" v-if="isPC">
              <div :class="`pagination-dot`" v-for="(slide, index) in list[this.$route.params.id][dialogIndex].imgs" :key="slide.img + '-dot' + index" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
            </div>
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
  // height: size(1444);
  overflow: hidden;
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

.head {
  width: size(1920 - 304 * 2);
  margin: size(20) auto;

  .breads {
    font-size: size(27);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: size(0.81);
    text-align: left;
    margin-bottom: size(20);
    color: #000;
    a {
      color: #000;
      text-decoration: none;
      transition: all 0.3s;
      position: relative;
      display:inline-block;
      &:hover{
        color: #C00;
        text-decoration: underline;
      }
    }
  }

  .title {
    font-size: size(64);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #ff9e00;
  }

  .subtitle {
    font-size: size(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: normal;
    text-align: left;
    color: #444444;
  }
}
.process-container {
  width: size(1920 - 304 * 2);
  margin: size(40) auto;
  padding-bottom: size(80);
  position: relative;
  // justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
}

.back {
  position: absolute;
  right: 0;
  bottom: 30px;
  font-size: size(20);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(0.6);
  text-align: left;
  color: #000000;
  cursor: pointer;
  &::before{
    content: "";
    width: 3em;
    height: 1em;
    display: inline-block;
    border-bottom: 1px solid currentColor;
    border-left: 1px solid currentColor;
    transform:skewX(-45deg);
    transition: all 0.3s;
  }
  &:hover:before{
    width: 4em;

  }
}

.process-title {
  font-size: size(28);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: size(0.84);
  text-align: left;
  color: #ffffff;
  background-color: #7d7d7d;
  padding: size(5) size(40);
  transition: background-color 0.3s;
  border-radius: 10px;
  display: inline-block;
}

.process-subtitle {
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  margin-top: size(15);
}
.process-item {
  width: size(403);
  min-height: size(537);
  margin: size(15);
  margin-bottom: size(70);
  border: 1px solid #707070;
  text-align: left;
  cursor: pointer;
  position: relative;
  transition: background-color 0.5s;
  &:hover{background: #0002;
  .process-img{opacity: 0.8;}
  .process-link {
  background-color: #ff9e00;}
  .process-title{
  background-color: #666;}
  }

  // &:nth-child(n + 3) {
  //   opacity: 0.5;
  // }
}
.process-item0 {width: size(403);}

.process-b {
  border-top: 1px solid #707070;
  padding: size(14) size(20);
}

.process-img {
  width: 100%;
  height: size(363);
  object-fit: cover;
  // margin-bottom: size(10);
}

.process-link {
  width: size(132);
  height: size(34);
  border-radius: size(17);
  background-color: #221714;
  cursor: pointer;
  font-size: size(12);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(0.6);
  text-align: left;
  color: #ffffff;
  float: right;
}

.pagination {
  width: 100%;
  height: size(80);
  margin-top: size(40);

  .pagi {
    width: size(45);
    height: size(45);
    font-size: size(20);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    border: solid 1px #ff9e00;
    color: #666666;
    margin: 0 size(15);
    cursor: pointer;

    &.active {
      color: #ffffff;
      background-color: #ff9e00;
    }
  }
}

.dialog {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s;
  display: none;

  &.show {
    display: block;
    z-index: 210;
    opacity: 1;
  }

  .dialog-head {
    @include img_l_pc(0, 20, 194);
    width: auto;
    font-size: size(27);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: size(0.81);
    text-align: left;
    color: #000000;
    z-index: 3;
    a,span{
      color: #000;
      text-decoration: none;
      transition: all 0.3s;
      position: relative;
      display:inline-block;
      &:hover{
        color: #C00;
        text-decoration: underline;
      }
      }
  }

  .dialog-content {
    width: size(1700);
    height: size(900);
    max-height: 96vh;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
  }

  .close {
    position: absolute;
    cursor: pointer;
    right: 35px;
    top: 25px;
    width: 40px;
  }
}

/* Swipe */
.swipe {
  width: size(1280);
  height: size(720);
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
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
  // overflow: hidden;
}

.swipe-item {
  width: 100%;
  height: 100%;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
  right: 0;
  left: 0;
  top: auto;
  bottom: -60px;
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
  width: 120%;
  left: -10%;
  height: 100%;
  padding: 0 15px;
  z-index: 3;

  .prev-btn,
  .next-btn {
    width: size(55.4);
    height: size(55.4);
    border-top: 2px solid #000;
    border-right: 2px solid #000;
    cursor: pointer;
    transform-origin: center;
  }

  .prev-btn {
    transform: rotate(-135deg);
  }
  .next-btn {
    transform: rotate(45deg);
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
  .section2 {
    width: 100vw;
    min-height: sizem(604);
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

  .bg {
    width: sizem(350);
    top: sizem(60);
    bottom: sizem(63);
    // background-image: url('./s1/bg.png');
    background-attachment: fixed;
  }

  .head {
    width: sizem(310);
    margin: sizem(32) auto;

    .breads {
      font-size: sizem(15);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.4;
      letter-spacing: sizem(0.45);
      text-align: left;
      color: #000000;
      a {
        color: #000;
        text-decoration: none;
      }
    }

    .title {
      font-size: sizem(28);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.29;
      letter-spacing: normal;
      text-align: left;
      color: #ff9e00;
    }

    .subtitle {
      font-size: sizem(14);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.57;
      letter-spacing: normal;
      text-align: left;
      color: #444444;
    }
  }

  .process-container {
    width: sizem(375);
    margin: sizem(20) auto;
    padding-bottom: sizem(60);
    display: flex;
    flex-wrap: wrap;
  }

  .process-b {
    border-top: 1px solid #707070;
    padding: sizem(15) sizem(10);
  }

  .process-img {
    width: 100%;
    height: sizem(280);
    object-fit: cover;
    margin-bottom: sizem(0);
  }

  .process-title {
    font-size: sizem(21);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: sizem(3.16);
    text-align: left;
    color: #fff;
  }

  .process-subtitle {
    font-size: sizem(18);
  }

  .process-item {
    width: sizem(310);
    min-height: sizem(414);
    margin: 0 auto;
    margin-bottom: sizem(47);
   // text-align: left;

    // &:nth-child(n + 3) {
    //   opacity: 0.5;
    // }
  }

  .pagination {
    width: 100%;
    height: sizem(80);
    margin-top: sizem(40);

    .pagi {
      width: sizem(45);
      height: sizem(45);
      font-size: sizem(20);
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: normal;
      text-align: left;
      border: solid 1px #ff9e00;
      color: #666666;
      margin: 0 sizem(15);
      cursor: pointer;

      &.active {
        color: #ffffff;
        background-color: #ff9e00;
      }
    }
  }

  .dialog {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s;
    display: none;

    &.show {
      display: block;
      z-index: 210;
      opacity: 1;
    }

    .dialog-head {
      @include img_l_m(0, 17, 30);
      width: auto;
      font-size: sizem(15);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 0.67;
      letter-spacing: sizem(0.45);
      text-align: left;
      color: #000000;
      z-index: 3;
    }

    .dialog-content {
      width: sizem(375);
      height: sizem(500);
      max-height: 96vh;
      left: 0;
      right: 0;
      margin: 0 auto;
      top:calc(50% + 35px);
      transform: translateY(-50%);
      position: absolute;
    }

    .close {
      position: absolute;
      cursor: pointer;
      right: 13px;
      top: 75px;
      width: 35px;
    }
  }

  /* Swipe */
  .swipe {
    width:100%;
    height: sizem(400);
    z-index: 2;
    margin: sizem(25) 0;
    left: sizem(0);
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
    left: 0%;
    height: 100%;
    padding: 0 15px;
    z-index: 3;

    .prev-btn,
    .next-btn {
      width: sizem(22);
      height: sizem(22);
      border-top: 2px solid #fff;
      border-right: 2px solid #fff;
      cursor: pointer;
      transform-origin: center;
    }

    .prev-btn {
      transform: rotate(-135deg);
    }
    .next-btn {
      transform: rotate(45deg);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section2',
  mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      dialogIndex: 0,
      tabIndex: 0,
      slideList: [
        [
          {
            img: require('../process/list/1/0.jpg'),
            o_title: '2021 立瑾WAY',
            o_subtitle: '已完售，預計2023年初完工。',
            title: '2021/4',
            subtitle: '基礎工程啟動<br/>地下室開挖工程按部進行。',
            isFinished: true,
          },
        ],
      ],
      list: [
        //...Array(18).keys()].map((i) => ({
        [
          {
            img: require('../process/list/1/7.jpg'),
            o_title: '2021 立瑾WAY',
            o_subtitle: '已完售，預計2023年初完工。',
            title: '2021/4',
            subtitle: '基礎工程啟動<br/>地下室開挖工程按部進行。',
            isFinished: true,
            imgs: [
              require('../process/list/1/7.jpg'),
              require('../process/list/1/8.jpg'),
            ],
          },
          {
            img: require('../process/list/2/1.jpg'),
            title: '2021/5',
            subtitle: '安全支撐工程<br>地下室支撐施作進行中。',
            isFinished: true,
            imgs: [
              require('../process/list/2/1.jpg'),
              require('../process/list/2/2.jpg'),
              require('../process/list/2/3.jpg'),
              require('../process/list/2/4.jpg'),
              require('../process/list/2/5.jpg'),
              require('../process/list/2/6.jpg'),
            ]
          },
          {
            img: require('../process/list/3/1.jpg'),
            title: '2021/6',
            subtitle: '穩紮穩打的施做工程。<br>底板鋼筋綁紮施做進行中。',
            isFinished: true,
            imgs: [
              require('../process/list/3/1.jpg'),
              require('../process/list/3/2.jpg'),
              require('../process/list/3/3.jpg'),
              require('../process/list/3/4.jpg'),
              require('../process/list/3/5.jpg'),
              require('../process/list/3/6.jpg'),
              require('../process/list/3/7.jpg'),
              require('../process/list/3/8.jpg'),
              require('../process/list/3/9.jpg'),
            ]
          },
          {
            img: require('../process/list/4/1.jpg'),
            title: '2021/6',
            subtitle: '堅若磐石的施工品質<br>FS版灌漿施做進行中。',
            isFinished: true,
            imgs: [
              require('../process/list/4/1.jpg'),
              require('../process/list/4/2.jpg'),
              require('../process/list/4/3.jpg'),
              require('../process/list/4/4.jpg'),
              require('../process/list/4/5.jpg'),
              require('../process/list/4/6.jpg'),
              require('../process/list/4/7.jpg'),
              require('../process/list/4/8.jpg'),
            ]
          },
        ],
        /*{
        img: require('../news/s2/no.png'),
        title: '立瑾醞 享受大三房、水岸景觀之美',
      },
      */
      ], //)),
      pageCount: 3,
      currentPage: 1,
    }
  },

  methods: {
    showDialog(isFinished, index) {
      if (isFinished) {
        this.isDialog = true
        this.dialogIndex = index
      }
    },

    add() {
       this.slideIndex =
        this.slideIndex === this.list[this.$route.params.id][this.dialogIndex].imgs.length - 1 ? 0 : this.slideIndex + 1
    },

    dec() {
      this.slideIndex =
        this.slideIndex === 0 ? this.list[this.$route.params.id][this.dialogIndex].imgs.length - 1 : this.slideIndex - 1
    },

    closeDialog() {},
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
  },

  created() {
    this.toggleTimer = false
    // this.slideList = this.list[this.$route.params.id]
  },

  created() {},

  computed: {},
}
</script>
