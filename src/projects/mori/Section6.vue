<template>
  <div>
    <div class="section6">
    <div class="img">
    <img src="./s3/bg.jpg" class="bg1" />
    <img src="./s1/img.png" class="tree2" />
    </div>
    <div class="imglb" data-aos="zoom-in" data-aos-delay="0" data-aos-offset="-300">
      <div>
    <img src="./s1/w.png" class="img1" />
    <img src="./s1/w.gif" class="img2" /></div>
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

.section6 {
  width:100%;
  height:auto;
  position: relative;
  margin:0 auto 0;
  padding: 8.5vw 0;
  // background:#FFF;
&::after{content: "";clear: both;display: block;}
}
.img{position:absolute;bottom: 0;left: 0;width: 100%;
  .bg1{
    position:absolute;bottom:size(-100);
    left:size(-20);width: size(900);
  }
  .tree2{
    position: absolute;right:size(50);
    bottom:size(50);width:size(250);
  }
}

.img1{position:absolute; width: 100%;}
.img2{position:absolute; width: 100%;
 filter: blur(size(1));
}
.imglb{position:absolute;bottom:size(-5);left:size(-760);transform-origin: 0% 0%; width: size(1550);z-index: 2;

> div{
   transform: rotate(13deg);}
img{left: 0;bottom: 0;}

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
  height: size(650);
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
  .section6 {
    width: 100%;
    height: auto;
    padding:10vw 0;

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
    height: sizem(300);
    top:0;
    left:0;
  margin-left:0;
  }
  .img{
  .bg1{bottom:sizem(-60);
    left:sizem(-130);width: sizem(600);
  }
  .tree2{right:sizem(50);
    bottom:sizem(30);width:sizem(90);
  }
}
.imglb{bottom:sizem(2);left:sizem(-370);
  width: sizem(650);
}
}
</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section6',

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
          img: require('./s6/1.jpg'),
          name: '精緻基地',
        },
        {
          img: require('./s6/2.jpg'),
          name: '明亮空間示意圖',
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
