<template>
  <div>
    <div class="section7">
      <img src="./all/gold2.png" class="gold1 absolute" loading="lazy" />
      <img src="./all/gold1.png" class="gold2 absolute" loading="lazy" v-if="isMobile" />
      <img src="./all/gold2.png" class="gold3 absolute" loading="lazy" v-if="isMobile" />
      <div class="txt">
      <h3 class="title" data-aos="fade" data-aos-delay="0"><img src="./s5/icon.png" loading="lazy">
    <img src="./s1/light.png" loading="lazy" class="light" /><span>全齡社區 樂活悠居</span><span>GET  LEISURELY</span></h3>
      </div>


      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="" loading="lazy">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
      <!--   -->   <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile" >
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex" loading="lazy">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex" loading="lazy">
          </div>
        </div>
      </div>
      <div class="txt">
      <p class="desc" data-aos="fade" data-aos-delay="0">
作為湖子內特區指標建築的【佳昂•家易】<br v-if="isMobile" /><span v-else>，</span>在公共場域規劃方面更是別具心裁<br v-if="isMobile" /><span v-else>，</span>將新古典與現代設計語彙完美融合<br />
巧妙運用石材、鏡面、木作…等特殊材質<br v-if="isMobile" /><span v-else>，</span>在建築門面的大廳、交誼廳、多功能室<br v-if="isMobile" /><span v-else>，</span>皆可見新古典風華極具層次的優雅美感</p>
</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {  
  width:100%;
  height:auto;
  position: relative;
  padding: 0 0 1.7vw 0;
}
.gold1{
    top: 20vw;
    right: 3vw;
    width: 21vw;filter: drop-shadow(0 0 0.5vw rgba(0, 0, 0, 0.7));
    }

.txt{
  position: relative;
  width: size(1606);
  margin:0 auto 0;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(27);
  font-weight: 500;
  line-height: 1.4;
  z-index: 2;

.title{
  font-size:2.2em;
  margin:1.5em auto 0.75em;
  font-weight: 900;
  color: #00537A;
  display: block;
  position: relative;
  line-height: 1.2;
  letter-spacing: 0.06em;
  background: linear-gradient(135deg, #FFF0 5%,#FFF6 22%,#FFF0 44%);
  font-family: 'Noto Serif TC', serif;
  /*
    */
  &::before,
  &::after{
    content: "";
    display:block;
    height: 1px;
    width:10em;
    background: linear-gradient(to right, rgba(4,102,128,1) 0%,rgba(33,128,164,1) 25%,rgba(4,102,128,1) 50%,rgba(4,102,128,0) 100%);
    margin:0 0 0 0.2em;
    }
  &::before{
    background: linear-gradient(to right, rgba(4,102,128,0) 0%,rgba(33,128,164,0.5) 25%,rgba(4,102,128,1) 50%,rgba(4,102,128,0) 100%);
    margin:0 0 0 2em;
  }
    img{height: 1.5em;
  position: relative;
  vertical-align: middle;
    margin: -.35em .4em -0.03em 0;
    &.light{position: absolute;top: .5em;left: .5em;
      animation: light1 3s linear infinite;}
    }

@keyframes light1{
    0%{
      transform: rotate(180deg) scale(.3);
    }
    50%{
      transform: rotate(0) scale(1);
    }
    100%{
      transform: rotate(-180deg)scale(.3);
    }
}
  span:last-child{
    white-space: nowrap;
  font-size:1.2em;
  background:url("./s5/txtbg.jpg");
  background-size: cover;
  background-clip: text;
  font-weight: 400;
  letter-spacing: 0.0em;
  -webkit-background-clip: text;
  vertical-align:-0.05em;
  color: transparent;font-family: 'Cantata One', serif;
  margin: 0 0 0 0.35em;
  filter: drop-shadow(0 0 0.4vw #fffc);
  }

}
.subtitle{
  font-size:1.3em;
  margin:.5em auto 0;
  letter-spacing:0.03em;
  font-weight: 900;
  color: #000;
}

.desc {
  margin:1em auto 0.3em;
  line-height: 1.6;
  list-style: circle;
}
  }
/* Swipe */
.swipe {
  position: relative;
  margin: auto;
  width: size(1606);
  height: size(800);
  // left: size(210);
  object-fit: cover;
  z-index: 3;
  box-shadow: .3vw .3vw .7vw #0006;
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
  bottom: -2em;
  right: 0em;
  justify-content: center;
  font-size: size(15);
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
    border:  2px solid  #3e6779;
    position: relative;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
    border-radius: 50%;
   // border:  2px solid  $pagination-active;
   background: #3e6779;
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
        transform: scale(1.3);
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
  .section7 {
    width: 100%;
    height: auto;
    min-height: auto;
    max-height: initial;
  }
.gold1{
    top: 66vw;
    right: auto;
    left: -21vw;
    width: 25vw;
    }
.gold2{
    top: 119vw;
    right: -16vw;
    width: 21vw;filter: drop-shadow(0 0 0.5vw rgba(0, 0, 0, 0.7));
    }
.gold3{
    top: 96vw;
    right: -22vw;
    width: 32vw;filter: drop-shadow(0 0 0.5vw rgba(0, 0, 0, 0.7));
    }

  .txt{
    position: relative;
    width: sizem(330);
    margin:1.5em auto 2em;
    font-size: sizem(12);
    .title{
      font-size:2.2em;
  line-height: 1.6;
    img{height: 1.65em;
  position: relative;
  vertical-align: middle;
    margin: -.35em .9em -0.03em 0;
    }
      
  span:last-child{position: absolute;top: 0;left: 0;
  transform: rotate(90deg) translate(18vw,-89vw);
  font-size:1.1em;
  transform-origin:0 0;
  }
    }
    .subtitle{
      font-size:1.1em;
    }
    .desc{font-size: 1.15em;}
  }
  /* Swipe */
  .swipe {
    position: relative;
    width:sizem(310);
    height: sizem(350);
    margin: 0 auto 0 sizem(20);
    box-shadow: 0.5vw 0.5vw 1.5vw #0006;
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
  name: 'section7',

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
          img: isMobile?require("./s7/2m.jpg"):require("./s7/2.jpg"),
          name: '大廳 3D透視示意圖 僅供參考',
        },
        {
          img: isMobile?require("./s7/1m.jpg"):require("./s7/1.jpg"),
          name: '大廳 3D透視示意圖 僅供參考',
        },
        {
          img: isMobile?require("./s7/3m.jpg"):require("./s7/3.jpg"),
          name: '品茗室 3D透視示意圖 僅供參考',
        },
        {
          img: isMobile?require("./s7/4m.jpg"):require("./s7/6.jpg"),
          name: '健身房 3D透視示意圖 僅供參考',
        },
        {
          img: isMobile?require("./s7/4m.jpg"):require("./s7/5.jpg"),
          name: '兒童遊戲室 3D透視示意圖 僅供參考',
        },
        {
          img: isMobile?require("./s7/4m.jpg"):require("./s7/7.jpg"),
          name: '電子遊戲區 3D透視示意圖 僅供參考',
        },
        {
          img: isMobile?require("./s7/4m.jpg"):require("./s7/4.jpg"),
          name: '多功能室 3D透視示意圖 僅供參考',
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
      if (this.viewIndex === 7) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
