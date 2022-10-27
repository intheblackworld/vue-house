<template>
  <div>
    <div class="section4">
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
        </div>
    <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="500" v-if="isPC">
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div> 
      </div>
      <div class="txt">
      <div class="title" data-aos="fade-up" data-aos-delay="200">戶戶邊間  醇淨迎光</div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">精緻基地，建築堅持退縮留距，就是要把日陽作為最重要的尺度建材，讓生活空間明亮，也讓每一天都舒心健康。</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width:100%;
  height:auto;
  position: relative;
  margin:0 auto 0;
  padding: 8.5vw 0;
  // background:#FFF;
&::after{content: "";clear: both;display: block;}
}

.img{position:absolute;top: 0;right: 0;transform-origin: 0% 0%;
  > div{transform: rotate(100deg);}
img{position:absolute;pointer-events: none;}
.f1{
    width: 9.5vw;
    top: -9.6vw;
    left: 3.3vw;transform:scaleX(-1) rotate(-176.43deg);transform-origin: 90% 100%;
animation: an1 3s -.5s ease-in-out infinite alternate;
}
.f3{width:size(100);top:size(-430);left:size(150);transform:scaleX(-1) rotate(190deg);transform-origin: 90% 100%;
animation: an2 3s -.8s ease-in-out infinite alternate;}
.f4{width:size(380);
    top: -10.5vw;
    left: 7vw;transform-origin: 0% 0%;transform: rotate(3deg);
animation: an 3s -.2s ease-in-out infinite alternate;}
.f5{width:size(290);top:size(-160);left:size(100);transform-origin: 0% 0%;transform: rotate(5deg);
animation: an 3s -.4s ease-in-out infinite alternate;}

}
@keyframes an{
  to{
    transform: rotate(0deg);
  }
}
@keyframes an1{
  to{
    transform:scaleX(-1) rotate(-173.43deg);
  }
}
@keyframes an2{
  to{
    transform:scaleX(-1)  rotate(194deg);
  }
}

.txt{
  float: left;
  position: relative;
  padding-top: 9.5vw;
  width: size(580);
  z-index: 2;
  margin-left: size(210);
  @include txt(size(18));
  }


/* Swipe */

.swipe {position: relative;
float: right;
  width: size(840);
  height: size(560);
  margin-right: size(210);
}
@include swipe();

// pagination
.pagination {
  width: auto;
  bottom: size(0);
  right:calc(100% + 50 * 100vw / 1920);
  justify-content: center;
    font-size: size(20);
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
  .section4 {
    width: 100%;
    height: auto;
    padding: 0;

  }
  

.img{top:auto;bottom:sizem(0);z-index: 4;

  .f1{
    width: sizem(77);
    top: -16.6vw;
    left: 14.3vw;
}
.f3{width:sizem(36);
    top: -33.5vw;
    left: 24vw;
}
.f4{width:sizem(155);
    top: -23.5vw;
    left: -13vw;}
.f5{width:sizem(114);top:sizem(-40);left:sizem(60);}
}
  .txt{
    position: relative;
    width: sizem(320);
    float: none;
    font-size: sizem(15);
    padding-top: 0;
    margin:2em auto 6em;
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
  name: 'section4',

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
          img: require('./s4/2.jpg'),
          name: '情境示意',
        },
        {
          img: require('./s4/4.jpg'),
          name: '情境示意',
        },
        {
          img: require('./s4/1.jpg'),
          name: '情境示意',
        },
        {
          img: require('./s4/3.jpg'),
          name: '情境示意',
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
