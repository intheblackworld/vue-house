<template>
  <div>
    <div class="section5">
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="box" v-if="!isMobile"></div>
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
     <!--  -->    <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <div class="prev-btn" @click="decIndex">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='31.5,57 4.5,30 31.5,3 '/%3E%3C/svg%3E" alt="_prev">
            </div>
            <div class="next-btn" @click="addIndex">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='3.5,3 30.5,30 3.5,57 '/%3E%3C/svg%3E" alt="_next">
            </div>
          </div>
        </div>
     <!--  --><div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="500" v-if="isPC">
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div> 
      </div>
      <div class="txt">
      <div class="title" data-aos="fade-up" data-aos-delay="200">富饒之地 生活應有盡有</div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">最富裕的生活圈，食衣住行育樂通通滿足。最迷人的書香，新高雙語小學、新平國小與新光國中，明星學校作伴；最便捷的採購，全聯、楓康和新光黃昏市場，鮮食一次買齊；最舒服的環境，立文、廍興以及馬卡龍公園，綠意公園為鄰。</div>
      </div>
      <div class="img" data-aos="zoom-in" data-aos-delay="0" >
    <img src="./all/f2.png" class="f2" />
    </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width:100%;
  height:auto;
  position: relative;
  margin:0 auto 0;
  padding: 10vw 0 10vw;
  // background:#FFF;
&::after{content: "";clear: both;display: block;}
}
.img{position:absolute;top: 50%;right: 0;transform-origin: 0% 0%;
img{position:absolute;pointer-events: none;}
.f2{width:size(330);top:size(420);right:size(-400);
  transform-origin: 0% 0%;transform:rotate(180deg);
animation: an 3s ease-in-out infinite alternate;}

}
@keyframes an{
  to{
    transform:rotate(176deg);
  }
}

.txt{
float: right;
  position: relative;
  padding-top: 9.5vw;
  width: size(580);
  z-index: 2;
  margin-right: size(210);
  @include txt(size(18));
  }

/* Swipe */

.swipe {position: relative;
float: left;
 // position: absolute;
  width: size(840);
  height: size(560);
// top: size(185);
 // left: size(210);
  margin-left: size(210);
  z-index: 3;
  .box{position: absolute;top: 0;left: 0;right: 0;bottom: 0;border:3px solid #fff;transform: translate(-1vw , -1vw);
  &::before{content: "";position: absolute;display: block;
  left: 0;top: 0;width: size(60);height:size(60);border:3px solid #fff;transform: translate(-1vw , -1vw);}
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
  bottom: size(0);
  left:calc(100% + 50 * 100vw / 1920);
  justify-content: center;
    font-size: size(20);
  .pagination-dot {
    padding: 0.25em;
    margin: 0 0.15em;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width:3em;
      height:12px;
      position: relative;
      &::before{content: "";
      transition: transform 0.5s, background 0.5s;
      display: block;width: 100%;height:100%;
      background: $pagination;
        transform: scaleY(.25);transform-origin: 50% 50%;
    }
      &.active {
        &::before{  transform: scaleY(1);
      background:$pagination-active;
    }
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
  .section5 {
    width: 100%;
    height: auto;
    padding: 0 0 sizem(190) 0;
  background-size: 250% auto;

  }
  .bg{position: absolute;left: 0;top:auto;bottom:sizem(0);width: 100%;}
.img{width: sizem(320);right:sizem(-20);top:auto;bottom:sizem(-10);}
  .txt{
    position: relative;
    width: sizem(320);
    float: none;
    margin:1em auto 3em;
    font-size: sizem(15);
  padding-top: 0;
  }
  /* Swipe */
  .swipe {
    position: relative;
    width: 100%;
    float: none;
    height: sizem(250);
    top:0;
    left:0;
  margin-left:0;
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
  name: 'section5',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s5/1.jpg'),
          name: '台74號快速道路，現場實景經電腦修飾示意',
        },
        {
          img: require('./s5/2.jpg'),
          name: '台鐵精武站，現場實景經電腦修飾示意',
        },
        {
          img: require('./s5/3.jpg'),
          name: '中山路商圈，現場實景經電腦修飾示意',
        },
        {
          img: require('./s5/4.jpg'),
          name: '新光黃昏市場，現場實景經電腦修飾示意',
        },
        {
          img: require('./s5/5.jpg'),
          name: '立文公園，現場實景經電腦修飾示意',
        },
        {
          img: require('./s5/6.jpg'),
          name: '新高國小，現場實景經電腦修飾示意',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    viewIndex() {
      if (this.viewIndex === 3) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
