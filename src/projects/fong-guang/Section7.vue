<template>
  <div>
    <div class="section6">
      <!--    -->  
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group><div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile" >
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div>
        </div>
      </div>
      <div class="txt">
      <div class="title" data-aos="fade-up" data-aos-delay="200" >
      <span class="title1"  v-html="slideList[slideIndex].title1"></span>
      <span class="title2"  v-html="slideList[slideIndex].title2"></span>
      <span class="title3"  v-html="slideList[slideIndex].title3"></span>
      </div>
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
  padding: 9vw 0 5vw;
&::after{content: "";clear: both;display: block;}
}

.img{position:absolute;top: 0;left: 0;transform-origin: 0% 0%;
  z-index: 4;
img{position:absolute;pointer-events: none;}
> div{ transform: rotate(-56deg);
  > div{transform: rotate(89deg) scaleY(-1);}
}
.f2{width:size(373);
    top: 4vw;
    left: -15vw;
  transform-origin: 0% 0%;transform: rotate(4deg);
animation: an 3s ease-in-out infinite alternate;}
.f3{width:size(80);
    top: -9vw;
    left: -5vw;
  transform: rotate(132deg);transform-origin: 90% 100%;
animation: an2 3s -.8s ease-in-out infinite alternate;}
.f4{width:size(444);
    top: 2vw;
    left: -13vw;
  transform-origin: 0% 0%;transform: rotate(3deg);
animation: an 3s -.2s ease-in-out infinite alternate;}
.f5{width:size(330);
    top: -14vw;
    left: 0vw;transform-origin: 0% 0%;transform: rotate(-5deg);
animation: an 3s -.4s ease-in-out infinite alternate;}

}
@keyframes an{
  to{
    transform: rotate(0deg);
  }
}
@keyframes an2{
  to{
    transform: rotate(129deg);
  }
}
.txt{
  position: relative;
  width: size(1500);
  margin: 1em auto 3em auto;
  z-index: 2;
  @include txt(size(18));
  }

/* Swipe */
.swipe {
  position: relative;
  margin: auto;
  width: size(1500);
  height: size(840);
  // left: size(210);
  z-index: 3;
  object-fit: cover;
}
@include swipe();

// pagination
.pagination {
  width: auto;
  bottom: -2.2em;
  right: -0.5em;
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
    min-height: auto;
    max-height: initial;
  padding: 0;
  }
  .txt{
    position: relative;
    width: sizem(320);
    margin:2em auto 6em;
    left:0;
    top:0;
    font-size: sizem(15);
  padding-top:0;
  }
  /* Swipe */
  .swipe {
    position: relative;
    width: 100%;
    height: sizem(270);
    top:0;
    left:0;
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
          name: '本傢配圖僅供參考，實際規劃及建材以合約書建造執照核准圖為準',
          title1: '奢享兩房',
          title2: '風光之最',
          title3: 'A棟／37坪',
        },
        {
          img: require('./s6/2.jpg'),
          name: '本傢配圖僅供參考，實際規劃及建材以合約書建造執照核准圖為準',
          title1: '奢享兩房',
          title2: '風光之最',
          title3: 'A棟／37坪',
        },
        { 
          img: require('./s6/9.jpg'),
          name: '本傢配圖僅供參考，實際規劃及建材以合約書建造執照核准圖為準',
          title1: '奢享兩房',
          title2: '風光之最',
          title3: 'A棟／37坪',
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
