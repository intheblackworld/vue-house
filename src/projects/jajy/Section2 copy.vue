<template>
  <div class="section2">
    <div class="img" data-aos="zoom-in-right"><img src="./s2/img.png" alt="img" /></div>
   
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
        <div v-else class="swipe-btns absolute flex-ac flex-jb">
            <div class="prev-btn" @click="decIndex">
            <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='31.5,57 4.5,30 31.5,3 '/%3E%3C/svg%3E" alt="_prev">
            </div>
            <div class="next-btn" @click="addIndex">
            <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='3.5,3 30.5,30 3.5,57 '/%3E%3C/svg%3E" alt="_next">
            </div>
        </div>
      </div>
    </div>
      <div class="txt">
      <h3 class="title" data-aos="fade-up" data-aos-delay="200" v-html="slideList[slideIndex].title"></h3>
      <div class="subtitle" data-aos="fade-up" data-aos-delay="200" v-html="slideList[slideIndex].subtitle"></div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300" v-html="slideList[slideIndex].desc"></div>
      </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {  
  width:100%;
  height:auto;
  position: relative;
  margin:0 auto 0;
  padding: 9vw 0 5vw;
  background: #FFF;
  &::after{content: "";clear: both;display: block;height: 1px;}
}
.img{width: size(819);position: absolute;left: 0;bottom: size(-340);
z-index: 2;
img{width: 100%;transform: skewY(5deg) ;
transform-origin: 0 50%;
      animation: an 3s linear alternate infinite;
      }
}

@keyframes an{
    to{
      transform: translateX(0);
    }
}
.txt{
  position: relative;
  width: size(1500);
  height: size(220);
  margin: 0 auto 3em auto;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(19);
  font-weight: 600;
  line-height: 1.4;
  z-index: 2;
  color: #2C5252;

.title{
  font-size:2.2em;
  margin:.4em auto 0;
  font-weight: 900;
  color: #002B69;
}
.subtitle{
  font-size:1.3em;
  margin:.5em auto 0;
  letter-spacing:0.03em;
  font-weight: 900;
  color: #A9292C;
}

.desc {
  margin:0.1em auto;
  line-height: 1.6;
  list-style: circle;
}
  }
/* Swipe */
.swipe {
  position: relative;
  margin: auto;
  width: size(1500);
  height: size(844);
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
  .section2 {
    width: 100%;
    height: auto;
    min-height: auto;
    max-height: initial;
  padding:0;
  }
.img{width:  90%;bottom: sizem(-45);
z-index: 2;}
  .txt{
    position: relative;
    width: sizem(320);
  height: sizem(410);
    margin:1.5em auto 2em;
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
  name: 'section2',

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
          img: isMobile?require("./s2/1m.jpg"):require("./s2/1.jpg"),
          name: '',
          title: '全球科技城-西雅圖Seatle V.S 台灣矽谷城-新竹Hsinchu',
          subtitle: '西雅圖Seatle',
          desc: '集文化，歷史、科技、產業於一身的城市中，加上微軟、Google、亞馬遜總部，星巴克、波音跟Costco青睞，西雅圖，獨樹一格的高所得宜居城，成為美國西北地區最大都會區，也是全美人口稱長最快的城市。',
        },
        {
          img: isMobile?require("./s2/2m.jpg"):require("./s2/2.jpg"),
          name: '',
          title: '全球科技城-西雅圖Seatle V.S 台灣矽谷城-新竹Hsinchu',
          subtitle: '新竹Hsinchu',
          desc: '台積電、聯發科、智邦科技、緯創ＡＩ智慧園區，玻璃文創、水岸海岸休閒景觀及老中青幼全齡照顧，台灣新矽谷城在「新竹」。<br>109年起連續兩年淨遷入率及人口成長率全國第一，招商引資達65.1億，全國排名第二，更有引領國際的半導體、光電、電腦資訊軟體園區，媲美西雅圖，成為最適合移居的文化科技智慧樂活城。',
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
