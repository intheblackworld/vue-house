<template>
  <div>
    <div class="section12">
      <div class="txt">
      <h3 class="title">樣品屋標題</h3>
      <div class="subtitle">樣品屋副標題</div>
      <div class="desc">樣品屋內文樣品屋內文樣品屋內文樣品屋內文樣品屋內文樣品屋內文</div>
      </div>
    <div class="swipe" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt>
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div v-if="isPC" class="pagination absolute flex-ac">
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
      <div class="title" v-html="slideList[slideIndex].title"></div>
      <div class="desc" v-html="slideList[slideIndex].desc"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section12 {  
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
  .section12 {
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
  name: 'section12',

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
          img: require("./s12/1.jpg"),// isMobile?require("./s2/1m.jpg"):require("./s2/1.jpg"),
          name: '兩房模擬示意圖',
          title: '兩房標題',
          desc: '兩房內文兩房內文兩房內文兩房內文兩房內文',
        },
        {
          img: require("./s12/1.jpg"),
          name: '三房模擬示意圖',
          title: '三房標題',
          desc: '三房內文三房內文三房內文三房內文三房內文',
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
