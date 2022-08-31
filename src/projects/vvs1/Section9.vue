<template>
  <div>
    <div class="section9">
      <wimg class="w2 absolute" preserveAspectRatio="xMaxYMid slice" v-if="isMobile" />
      <img src="./all/gold1.png" class="gold1 absolute" />
      <img src="./all/gold2.png" class="gold2 absolute" />
      <wimg class="w1 absolute" preserveAspectRatio="xMaxYMid slice" />
      <div class="txt">
      <h3 class="title" data-aos="fade" data-aos-delay="0"><img src="./s5/icon.png">
    <img src="./s1/light.png" class="light" /><span>品牌首發 品味名居</span><span>GET  TASTEFULLY</span></h3>
      </div>
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <div class="prev-btn" @click="decIndex">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='31.5,57 4.5,30 31.5,3 '/%3E%3C/svg%3E" alt="_prev">
            </div>
            <div class="next-btn" @click="addIndex">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='3.5,3 30.5,30 3.5,57 '/%3E%3C/svg%3E" alt="_next">
            </div>
          </div>
          <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="500" v-if="isPC">
              <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
            </div>
        </div>
      </div>
      <div class="subtxt">
      <div class="title" data-aos="fade-down" data-aos-delay="200">18年建築淬鍊</div>
      <div class="subtitle" data-aos="fade-down" data-aos-delay="200">築起<span>幸福哲學</span></div>
      <div class="desc" data-aos="fade-down" data-aos-delay="300">
        在細節中，實踐居住理想的可能性<br />
        近20年的建築經歷<br />
        為近3000戶家庭成家圓夢<br />
        在各大城市皆可看見「佳昂建設」<br />
        用情打造的一座座幸福堡壘
      </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section9 {
  width:100%;
  height: auto;
  position: relative;
  padding: 0 0 2.5vw 0;
  &::after{content: "";display: block;clear: both;}
}
.gold1{
    top: 38vw;
    right: -13vw;
    width: 18vw;
    filter: drop-shadow(0 0 0.5vw rgba(0, 0, 0, 0.7));
  }
  .gold2 {
    top: 19.5vw;
    right: -19vw;
    width: 27vw;
    filter: drop-shadow(0 0 0.3vw rgba(85, 27, 0, 0.7));
  }
.w1{
    top: 46vw;
    right: -34vw;
    width: 68vw;
    height: 26vw;
    transform: rotate(-84deg) scaleX(1);stroke:#FFF;
}

.txt{
  position: relative;
  width: size(1606);
  margin:0 auto 0;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(27);
  font-weight: 700;
  line-height: 1.4;
  z-index: 2;
  font-family: 'Noto Serif TC', serif;

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
  margin:0.1em auto 1.9em;
  line-height: 1.6;
  list-style: circle;
}
  }

.subtxt{
  position: relative;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(27);
  font-weight: 500;
  line-height: 1.5;color: #000;
  margin:0;
  padding:2.7em 2em 0 0;
  display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  &::before,
  &::after{
    content: "";
    display:block;
    height: 1px;
    width:17em;
    background: #614115;
  }

  &::before{
    margin:0em 0 4em 0;
    }
  &::after{
    margin:5em 0 0em 0;
    }
.title{
  font-family: 'Noto Serif TC', serif;font-weight: 900;
  color: #614115;font-size: 2.4em;
    padding:0;
  line-height: 1.35;

  }
  .subtitle{font-size: 2em;font-weight: 900;
  font-family: 'Noto Serif TC', serif;
  line-height: 1.4;
    color:#614115;
    padding:0 0 1em 0;
    span{
      display:inline-block;
      position: relative;
  &::before,
  &::after{
    content: "";
    display:inline-block;
    height:0.8em;
    width:3px;
    background: currentColor;
    margin:0 0 0 .4em;
    }
  &::before{
    margin:0 .35em 0 .45em;
    }
    }
  }
}

/* Swipe */

.swipe {
  width: size(1100);
  height: size(800);
  object-fit: cover;
  z-index: 3;
  float: left;
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
  bottom: 0.5em;
  left: 0.5em;
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
    border:  2px solid  $pagination;
    position: relative;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
    border-radius: 50%;
   // border:  2px solid  $pagination-active;
   background: #fff;
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
  z-index: 3;
  font-size: size(20);

  .prev-btn,
  .next-btn {
    padding: 0 0.75em;
    cursor: pointer;
    height: 100%;
    display: flex;
    img{
    width: 1em;
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
  .section9 {
    width: 100%;
    height: auto;
  }
.gold1{
    top: 141vw;
    right: 5vw;
    width: 23vw;
  }
  .gold2 {
    top: 117.5vw;
    right: -17vw;
    width: 36vw;
  }
.w1{
    top: -43vw;
    right: -51vw;
    width: 101vw;
    height: auto;
}
.w2{
    top: 126vw;
    right: -50vw;
    width: 100vw;
    transform: rotate(-84deg);stroke:#FFF;
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
    margin: -.35em .2em -0.03em 0;
    }
      
  span:last-child{position: absolute;top: 0;left: 0;
  transform: rotate(90deg) translate(18vw,-89vw);
  font-size:1.1em;
  transform-origin:0 0;
  }
    }
  }
.subtxt{
    font-size: sizem(12);
  padding:2.1em 0 0 0;
    width:sizem(310);
    margin: 0 auto 0 sizem(20);
  display: block;
  &::before,
  &::after{
    display: none;

  }
  .subtitle{
    padding:0 0 .4em 0;
  }

  .desc{font-size: sizem(15);}
}
  
  /* Swipe */
  .swipe {
    position: relative;
    width:sizem(310);
    height: sizem(350);
    margin: 0 auto 0 sizem(20);
    float: none;
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
import wimg from './w.vue'

export default {
  name: 'section9',

  mixins: [slider],
  props: ['viewIndex'],
  components: {
    wimg,
  },

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: isMobile?require("./s9/1m.jpg"):require("./s9/1.jpg"),
          name: '太和2 外觀3D示意圖',
        },
        {
          img: isMobile?require("./s9/2m.jpg"):require("./s9/2.jpg"),
          name: '太和1 外觀3D示意圖',
        },
        {
          img: isMobile?require("./s9/3m.jpg"):require("./s9/3.jpg"),
          name: '佳昂晴海 實景拍攝',
        },
        {
          img: isMobile?require("./s9/4m.jpg"):require("./s9/4.jpg"),
          name: '佳昂幸福市 實景拍攝',
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
