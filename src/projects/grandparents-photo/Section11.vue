<template>
  <div class="section11">
      <div class="txt">
      <h3 class="title" data-aos="zoom-in" data-aos-delay="200">三五好友把酒言歡<br v-if="isMobile" /><span v-else>，</span>書院人文溫馨且愜意</h3>
      <div class="subtitle" data-aos="zoom-in" data-aos-delay="200">聰明購屋學 /山不在高有仙則名<br v-if="isMobile" /><span v-else>，</span>談笑往來皆鴻儒</div>
      <div class="desc" data-aos="zoom-in" data-aos-delay="300">國際設計獎大師精心演繹國際奢旅飯店美學<br />
融合星級高端會所優雅氣質<br />
無論宴客、閱讀、社交沙龍、兒童遊戲⋯⋯<br />
多姿多彩的生活豐貌，就是幸福的愜意日常
</div>
      </div>
    <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt>
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div v-if="isPC" class="pagination absolute flex-ac" data-aos="fade" data-aos-delay="200">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)">
            <span :class="`${slideIndex === index ? 'active' : ''}`"></span>
          </div>
        </div>
        <div class="swipe-btns absolute flex-ac flex-jb">
            <div class="prev-btn" @click="decIndex">
            <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='31.5,57 4.5,30 31.5,3 '/%3E%3C/svg%3E" alt="_prev">
            </div>
            <div class="next-btn" @click="addIndex">
            <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='3.5,3 30.5,30 3.5,57 '/%3E%3C/svg%3E" alt="_next">
            </div>
        </div>
      </div>
    </div>
      <div class="txt2">
      <div class="title" data-aos="fade-up" data-aos-delay="200" v-html="slideList[slideIndex].title"></div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300" v-html="slideList[slideIndex].desc"></div>
      </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section11 {  
  width:100%;
  height:auto;
  position: relative;
  margin:0 auto 7em;
  &::after{content: "";clear: both;display: block;height: 1px;}
}
.txt{
  position: relative;
  width: size(1500);
  margin: 0 auto 3em auto;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  font-size: size(19);
  font-weight: 600;
  line-height: 1.4;
  z-index: 3;

.title{
  font-size:2.3em;
  margin:.9em auto 0;
  font-weight: 900;
}
.subtitle{
  font-size:1.3em;
  margin:.6em auto 0;
  letter-spacing:0.03em;
  font-weight: 900;
  color: #B28247;
}

.desc {
  margin:0.5em auto;
  line-height: 2;
  list-style: circle;
}
  }
.txt2{
  position: relative;
  width: size(1500);
  margin: 0 auto 3em auto;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(17);
  font-weight: 600;
  line-height: 1.3;
  z-index: 3;
  transform: translateY(-100%);
background: linear-gradient(to right, #0009 0%,#0006 50%,#0000 80%);
  color: #FFF;
  padding: 0.5em 2em;


.title{
  font-size:1.8em;
  margin:0.3em auto 0;
  font-weight: 900;
}

.desc {
  margin:0.5em auto;
  line-height: 2;
  list-style: circle;
}
  }
/* Swipe */
.swipe {
  position: relative;
  margin: auto;
  width: size(1500);
  height: size(850);
  // left: size(210);
  object-fit: cover;
  z-index: 3;
}
.slide-name {
    right:1.5em;
    bottom:1em;
    color: #fff;
    font-size: size(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.89px;
    text-align: left;
    color: #ffffff;
   text-shadow:0 0.1em 0.3em #000;
}

.swipe-wrap {
  width: 100%;
  height: 100%;
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
}

// 過場動畫
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

// pagination
.pagination {
  width: auto;
  bottom: -2.2em;
  right: -0.5em;
  justify-content: center;
  font-size: size(20);

}
.pagination-dot {
  padding: 0.25em;
  margin: 0 0.2em;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width:1em;
    height:1em;
    border-radius: 50%;
    border: 0.2em solid  $pagination;
    position: relative;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
    border-radius: 50%;
    border:  0.105em solid  $pagination-active;
      opacity: 1;
      position: absolute;
      top: 20%;
      left: 20%;
      transition: all 0.3s;
      transform-origin: center;
      transform: scale(0);
    }
    &.active {
      box-shadow: none;
      &::before {
        width: 100%;
        height: 100%;
        top: 0%;
        left: 0%;
        transform: scale(1.6);
      }
    }
  }
}
.swipe-btns {
  width: 100%;
  height: 100%;
  padding: 0 0.75em;
  z-index: 3;
  font-size: size(20);

  .prev-btn,
  .next-btn {
    width: 1em;
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
  .section11 {
    width: 100%;
    height: auto;
    min-height: auto;
    max-height: initial;
  }
  .txt{
    position: relative;
    width: sizem(320);
    margin:1.5em auto 3em;
    left:0;
    top:0;
    font-size: sizem(14);
    .title{
      font-size:1.5em;
    }
    .subtitle{
      font-size:1.1em;
    }
  }

  
.txt2{
  width:100%;
  margin: 0 auto 3em auto;
  font-size: sizem(14);
  transform: translateY(0%);
  background:#0009;


.title{
  font-size:1.3em;
}
  }
  /* Swipe */
  .swipe {
    position: relative;
    width: 100%;
    height: sizem(240);
    top:0;
    left:0;
  }

.swipe-item {
  .slide-name {
    font-size: sizem(12);
  }
}

  .swipe-btns {
  font-size: sizem(15);
  }
}

</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section11',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      dialogImg: null,
      showMask: false,
      slideList: [
        {
          img: require("./s8/1.jpg"),// isMobile?require("./s2/1m.jpg"):require("./s2/1.jpg"),
          name: '輝煌迎賓廳',
          title: '輝煌迎賓廳',
          desc: '挑高迎賓交誼大廳，移植國際奢旅飯店美學，綠意、光瀑流洩，搭配石材舖面與金屬裝飾寫意低調奢華，講述空間的人文氣韻。',
        },
        {
          img: require("./s8/2.jpg"),
          name: '璽悅交誼廳',
          title: '璽悅交誼廳',
          desc: '充滿英倫紳士會所優雅氣質，融合LOUNGE BAR、GYMS休閒調性，創造可以放鬆談話交誼空間，讓賓主盡享無拘束互動氛圍。',
        },
        {
          img: require("./s8/3.jpg"),
          name: '歡饗宴會廳',
          title: '歡饗宴會廳',
          desc: '媽媽廚藝室，不只是分享食藝的味覺工作坊，寬闊的大吧台與長餐桌也賦予更強的使用機能，亦可作為社區活動聯誼聚會場所。',
        },
        {
          img: require("./s8/4.jpg"),
          name: '晶英閱覽室',
          title: '晶英閱覽室',
          desc: '透過清玻璃隔板設計，不論是大人小孩一起親子共讀、孩子放學回家寫作業自習、大人讀書會，創享不受干擾的閱讀樂趣。',
        },
        {
          img: require("./s8/5.jpg"),
          name: '美力健身房',
          title: '美力健身房',
          desc: '不用去健身房人擠人，國際設計獎大師規劃、朗闊通透的健身房韻律室，男人的六塊肌與女人的馬甲線，在家就能輕鬆實現。',
        },
        {
          img: require("./s8/6.jpg"),
          name: '童樂遊戲室',
          title: '童樂遊戲室',
          desc: '點綴繽紛色彩的樹屋、溜滑梯，解放孩子活潑好動的心靈與身體，一同玩樂成長；童趣帳篷滿足不論晴雨都能享受野營樂趣。',
        },
      ]
    }
  },

  methods: {
    showDialog() {
      this.isDialog = true;
      this.showMask = true;
      this.dialogImg = this.slideList[this.slideIndex].full;
    },

    handleScroll() {
      this.showMask = false;
    }
  },

  created() {},

  mounted() {},

  computed: {},

  watch: {}
}
</script>
