<template>
  <div>
    <div class="section5">
      <div class="img" data-aos="zoom-in-right">
        <img src="./s5/img1.png" alt="img" />
        <img src="./s5/img2.png" alt="img" />
        <img src="./s5/img3.png" alt="img" />
        <img src="./s5/img4.png" alt="img" />
        <img src="./s5/img5.png" alt="img" />
      </div>
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name" v-if="slide.name"></div>
            </div>
          </transition-group>
     <!--     <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <div class="prev-btn" @click="decIndex">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='31.5,57 4.5,30 31.5,3 '/%3E%3C/svg%3E" alt="_prev">
            </div>
            <div class="next-btn" @click="addIndex">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='3.5,3 30.5,30 3.5,57 '/%3E%3C/svg%3E" alt="_next">
            </div>
          </div> -->
        </div>
     <!-- <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="500" v-if="isPC">
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div>  -->
      </div>
      <div class="txt">
      <div class="title" data-aos="fade-up" data-aos-delay="200">12,743坪至善重劃區<br />居高臨下地王視野 </div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">跳脫傳統舊市區舊建築，至善重劃區以整齊街道、方正街廓，為竹東人提供了新型態的生活方式。「至善高第」地居重劃區最高處，後倚山巒有靠，坐享好景觀、好視野，是至善重劃區居高臨下的地王，緊鄰公園水岸綠景步道，步行約150公尺竹東游泳池跟台大竹東分院，享有一整套優質好生活。</div>
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
  padding: 5vw 0 5vw;
background:#FFF;
&::after{content: "";clear: both;display: block;}
}
.img{width: size(941);position: absolute;left: 0;top:calc(50% - 24vw);
transform-origin:0% 50% ;
z-index: 2;
img{
    position: absolute;
    top: 0;left: 0;
  &:nth-child(1){
    position: relative;
    width: 100%;
    }
  &:nth-child(2){
    width: 100%;
 //   animation: an 3s linear alternate infinite;
    transform:translateY(-3%);
    animation: an 3s linear alternate infinite;
    }
  &:nth-child(3){
    width: 100%;
    transform:rotate(10deg);
    animation: an 2.5s linear alternate infinite;
    }
  &:nth-child(4){
    width: 100%;
    transform:rotate(30deg);
    transform-origin: 26% 63.5%;
    animation: an 2s ease-in-out alternate infinite;
    }
  &:nth-child(5){
    width: 100%;
 //   animation: an 3s linear alternate infinite;
    }
}
@keyframes an{
    to{
      transform: translateX(0);
    }
}
}

.txt{
float: right;
  position: relative;
  padding-top: 4vw;
  width: size(580);
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(19);
  font-weight: 600;
  line-height: 1.4;
  z-index: 2;
  color: #2C5252;
  margin-right: size(210);
  }

.title{
  font-size:2.2em;
  margin:.4em auto 0;
  font-weight: 900;
  color: #002B69;
}
.desc {
  margin:1em auto;
  line-height: 1.6;
  letter-spacing:0.05em;
  list-style: circle;
  overflow: hidden;
  li{list-style:inherit;float: left;margin: 0.3em 0 0.3em 1.4em;width:calc(100% - 1.4em);
  }
}

/* Swipe */

.swipe {position: relative;
float: left;
 // position: absolute;
  width: size(840);
  height: size(473);
// top: size(185);
 // left: size(210);
  margin-left: size(210);
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
  bottom: size(0);
  left:calc(100% + 50 * 100vw / 1920);
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
  .section5 {
    width: 100%;
    height: auto;
  }
.img{width: sizem(360);left: 0;top:auto;bottom:-22vw;}
  .txt{
    position: relative;
    width: sizem(320);
    float: none;
    margin:1.5em auto 22em;
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
    float: none;
    height: sizem(255);
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
          name: '現場基地空拍實景圖',
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
