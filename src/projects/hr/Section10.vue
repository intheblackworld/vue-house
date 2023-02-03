<template>
  <div class="section10">
    <div class="box" v-if="!isMobile">
      <div class="list" v-for="(slide) in slideList" :key="slide.img" >
        <div class="img" data-aos="fade" data-aos-delay="0">
          <img :src="slide.img" :alt="slide.name" />
          <div class="slide-name absolute" v-html="slide.name"></div>
        </div>
        <div class="txt">
          <div class="title" data-aos="fade" data-aos-delay="200"  v-html="slide.title"></div>
          <div class="desc" data-aos="fade" data-aos-delay="400" v-html="slide.desc"></div>
        </div>
      </div>
    </div>


    <div v-if="isMobile" class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
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
      <div v-if="isMobile" class="txt">
      <h3 class="title" data-aos="fade-up" data-aos-delay="200" v-html="slideList[slideIndex].title"></h3>
<!-- <div class="subtitle" data-aos="zoom-in" data-aos-delay="200" v-html="slideList[slideIndex].subtitle"></div> -->
      <div class="desc" data-aos="fade-up" data-aos-delay="300" v-html="slideList[slideIndex].desc"></div>
      </div>
      
    <yellow class="yellow" />
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section10 {
  width:100%;
  height:auto;
  position: relative;
  margin:0 auto 0;
  padding: 9vw 0 9vw;
  &::after{content: "";clear: both;display: block;height: 1px;}
}
.yellow{
  position: absolute;
  right: size(-80);
  top: size(-20);
  width: size(413);transform: scaleX(-1);pointer-events: none;
}
.box{
  display: flex;
  flex-wrap: wrap;
  width: size(1500);
  margin: auto;
  justify-content:center;
  background: #fff;
  border-radius: size(40);
  padding:size(65) 0 0 0;
}
.list{flex: 0 0 size(667);
  margin: 0 size(30);
.img{position: relative;width: 100%;
img{width: 100%;}
}
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
    color: #fff;
   text-shadow:0 0.1em 0.3em #000;
}
/*
.img{width: size(753);position: absolute;right:size(0);bottom: size(0);
z-index: 2;
img{
  &:first-child{
  width: 100%;}
      &:last-child{
  width: 35.6%;transform:translateX(-50%);
transform-origin: 0 50%;
position: absolute;top: 0;left: -5%;
      animation: an 3s linear alternate infinite}
      }
}

@keyframes an{
    to{
      transform: translateX(0);
    }
}
*/
.txt{
  position: relative;
  margin: 0.6em auto 2.5em auto;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(19);
  font-weight: 400;
  line-height: 1.4;
  z-index: 2;

  .title{
  font-size:2em;
  margin:0 auto 0;
  color: #444;
  font-weight: 600;
  width: 100%;
  &::after{display: block;
    height: 2px;content: "";background: #CF5700;margin: 0 auto;width: 100%;
  }
}
  .subtitle{font-size: 1.25em;
    padding:.75em 0 0 0;
  }
.desc {
 // margin:1em auto;
  padding:1em 0 0 0;
  line-height: 1.6;
  //letter-spacing:0.05em;
  list-style: circle;
  overflow: hidden;
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
  .section10 {
  padding: 11vw 0 1vw;
  background:none;
  }
.yellow{
  position: absolute;
  right: auto;
  left: sizem(-75);
  top: sizem(-20);
  width: sizem(150);transform: rotate(33deg);
  z-index: 3;
}
  .txt{
    position: relative;
    width: sizem(345);
    margin:-2em auto 4em;
    padding: 3em 1em 1.3em;
    left:0;
    top:0;
    font-size: sizem(15);
    border-radius: sizem(10);
    background: #FFF;
    .title{
      font-size:1.37em;
      flex-wrap: wrap;
  &::after{width: 100%;flex: 0 0 100%;
  display: block;margin: .3em 0 0.3em 0;}
    }
    .subtitle{
      font-size:1.1em;
    }
  }
  /* Swipe */
  .swipe {
    position: relative;
    width: sizem(345);
    height: sizem(252);
    top:0;
    left:0;
    background: #FFF;
    border: sizem(15) solid #FFF;
    border-radius: sizem(10);
  }
.swipe-item {
  img {
  border-radius: sizem(10);}
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
  name: 'section10',

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
          img: isMobile?require('./s10/1_m.jpg'):require('./s10/1.jpg'),
          name: 'TOTO衛浴 示意',
          title: '嚴選建材  提升生活品味',
         // subtitle: '西雅圖Seatle',
          desc: '近1450坪的大基地，以最佳戶數規劃總戶數171戶社區，輔以豐富公設、綠化造景、親子遊戲空間，在市中心打造最宜居的生活環境，就算不出門，',
        },
        {
          img: isMobile?require('./s10/2_m.jpg'):require('./s10/2.jpg'),
          name: '櫻花廚具 示意',
          title: '嚴選建材  提升生活品味',
         // subtitle: '西雅圖Seatle',
          desc: '近1450坪的大基地，以最佳戶數規劃總戶數171戶社區，輔以豐富公設、綠化造景、親子遊戲空間，在市中心打造最宜居的生活環境，就算不出門，',
        },
        {
          img: isMobile?require('./s10/3_m.jpg'):require('./s10/3.jpg'),
          name: 'TOTO衛浴 示意',
          title: '3嚴選建材  提升生活品味',
         // subtitle: '西雅圖Seatle',
          desc: '3近1450坪的大基地，以最佳戶數規劃總戶數171戶社區，輔以豐富公設、綠化造景、親子遊戲空間，在市中心打造最宜居的生活環境，就算不出門，',
        },
        {
          img: isMobile?require('./s10/4_m.jpg'):require('./s10/4.jpg'),
          name: 'TOTO衛浴 示意',
          title: '4嚴選建材  提升生活品味',
         // subtitle: '西雅圖Seatle',
          desc: '4近1450坪的大基地，以最佳戶數規劃總戶數171戶社區，輔以豐富公設、綠化造景、親子遊戲空間，在市中心打造最宜居的生活環境，就算不出門，',
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
