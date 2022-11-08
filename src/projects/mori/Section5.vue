<template>
  <div>
    <div class="section5">
    <div class="img">
    <img src="./s3/bg.jpg" class="bg1" />
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
      <div class="title" data-aos="fade-up" data-aos-delay="200">商圈漫走  書香可期</div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">裕民商圈、四維商圈、新埔商圈，輕鬆來往；捷運江翠站、新埔民生站、新埔站，悠遊選擇，自在行動；文中小預定地在身邊，滿滿學風，養成在即。</div>
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
  padding: 8.5vw 0;
  // background:#FFF;
&::after{content: "";clear: both;display: block;}
}

.img1{position:absolute; width: 100%;}
.img2{position:absolute; width: 100%;
 filter: blur(size(1));
}
.imgrb{position:absolute;bottom:size(30);right: size(-500);transform-origin: 100% 0%;width: size(1550);z-index: 2;
 > div{transform: rotate(-21deg);}
 img{right: 0;bottom: 0;}

}
.img{position:absolute;top: 0;right: 0;width: 100%;
.bg1{position:absolute;top:size(120);right: size(-120);width: size(900);transform: scaleX(-1);}
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
  .section5 {
    width: 100%;
    height: auto;
    padding:10vw 0 0 0;
  }

  .txt{
    position: relative;
    width: sizem(310);
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
.imgrb{bottom:sizem(-80);right: sizem(-530);width: sizem(850);
}
.img{
.bg1{top:sizem(250);right: sizem(-320);width: sizem(650);}
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
          name: '江翠國小示意圖',
        },
        {
          img: require('./s5/2.jpg'),
          name: '商圈示意圖',
        },
        {
          img: require('./s5/3.jpg'),
          name: '江子翠捷運站示意圖',
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
