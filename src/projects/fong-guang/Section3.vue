<template>
  <div>
    <div class="section3">
    <div class="img">
    <img src="./s3/bg.jpg" class="bg1" />
    <img src="./s3/bg.jpg" class="bg2" />
    <img src="./s1/tree.png" class="tree1" />
    </div>
    <div class="imglt" data-aos="zoom-in" data-aos-delay="0" >
      <div>
    <img src="./s1/g.png" class="img1" />
    <img src="./s1/g.gif" class="img2" /></div>
    </div>
   <div class="imgrt" data-aos="zoom-in" data-aos-delay="0">
      <div>
    <img src="./s1/g.png" class="img1" />
    <img src="./s1/g.gif" class="img2" /></div>
    </div>
    <div class="imgrb" data-aos="zoom-in" data-aos-delay="0" data-aos-offset="-300">
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
     <!--  -->    <div class="swipe-btns absolute flex-ac flex-jb">
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
      <div class="title" data-aos="fade-up" data-aos-delay="200">新富江翠 風光之最</div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">板橋水岸心天地，新富精銳矚目滙集，城心繁華的自然，「豐光」內涵立地；大江翠，心居地，引進風光水綠，由您自在相敘。</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width:100%;
  height:auto;
  position: relative;
  margin:0 auto 0;
  padding: 8.5vw 0;
  // background:#FFF;
&::after{content: "";clear: both;display: block;}
}
.img1{position:absolute; width: 100%;}
.img2{position:absolute; width: 100%;mix-blend-mode: screen; filter: blur(size(1)); }

.imglt{position:absolute;top: size(-127);left:size(-335);transform-origin: 0% 0%; width: size(1040);
 > div{
    transform: rotate(-20deg);}
 img{left: 0;top: 0;}

}
.imgrt{position:absolute;top:size(-78);right: size(-640);transform-origin: 100% 0%;width: size(1170);
 > div{transform: rotate(26deg);}
 img{right: 0;top: 0;}

}
.imgrb{position:absolute;bottom:size(80);right: size(-800);transform-origin: 100% 0%;width: size(1550);z-index: 2;
 > div{transform: rotate(-21deg);}
 img{right: 0;bottom: 0;}

}
.img{position:absolute;top: 0;left: 0;width: 100%;
.bg1{position:absolute;top:size(-350);right: 0;width: 100%;transform: rotate(180deg);}
.bg2{position:absolute;top:size(500);left : 0;width: size(1405);transform: scaleY(-1);opacity: .5;}
.tree1{position:absolute;top:size(595);right:size(390);width:size(220);}
}

.txt{
float: right;
  position: relative;
  padding-top: 8.5vw;
  width: size(580);
  z-index: 2;
  margin-right: size(210);
  @include txt(size(18));
  }

/* Swipe */
.swipe {position: relative;
  float: left;
  width: size(840);
  height: size(560);
  margin-left: size(210);
  z-index: 2;
}
@include swipe();

// pagination
.pagination {
  width: auto;
  bottom: size(0);
  left:calc(100% + 50 * 100vw / 1920);
  justify-content: center;
    font-size: size(20);
}
/*
@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}
*/
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section3 {
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
    width: 100%;
    float: none;
    height: sizem(250);
    margin-left:0;
  }
}
</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section3',

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
