<template>
  <div>
    <div class="section4">
      <wimg class="w1 absolute" />
      <mimg class="img absolute" />
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name" v-if="slide.name"></div>
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
      <div class="subtitle" data-aos="fade-up" data-aos-delay="200">Give Me Five</div>
      <div class="title" data-aos="fade-up" data-aos-delay="200">尚新板5告讚<br />五大必買理由</div>
      <ul class="desc" data-aos="fade-up" data-aos-delay="300">
        <li :class="slideIndex===0?'active':''"><span>生活一級棒：</span>板橋最大黃石市場、國際觀光湳雅夜市、學區、 亞東醫院，一應俱全。</li>
        <li :class="slideIndex===1?'active':''"><span>交通一級棒：</span>黃金板南線，五鐵共構、九線公車近在咫尺。</li>
        <li :class="slideIndex===2?'active':''"><span>商機一級棒：</span>生活一級棒：板橋最大黃石市場、國際觀光湳雅夜市、學區、 亞東醫院，一應俱全。</li>
        <li :class="slideIndex===3?'active':''"><span>未來一級棒：</span>府中雙城未來10年願景計畫進行中，府中美好未來與您雙向奔赴。</li>
        <li :class="slideIndex===4?'active':''"><span>增值一級棒：</span>府中區上市上櫃各大財團爭相插旗進駐，都市更新改建持續進行中。</li>
      </ul>
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
  padding: 8.5vw 0;z-index: 3;
&::after{content: "";clear: both;display: block;}
}
.w1{bottom:size(-110);left: 0;width: size(1920);z-index: 2;
		height: size(250);
  &::after{content: "";position: absolute;width: 80%;
height: 100%;right: 0;top: 0;
background: linear-gradient(-20deg, #EDE8DDFF 20%,#EDE8DD00 65%);}
}
.img{
  width:size(440);right: size(-70);bottom:size(-170);z-index: 2;
  margin: 0 auto 0em;opacity: .5;
}



.txt{
float: right;
  position: relative;
  padding-top: 0vw;
  width: size(580);
  z-index: 3;
  margin-right: size(210);
  color: #555;
  @include txt(size(18));

  .desc{font-size:1em;
    overflow:visible;
    span{display: block;float: left;margin:0 0 .1em 0; transition: font-weight .3s,transform .3s;}
    li{transition: color .3s;
   }
    .active{color: #000;
      span{font-weight: 700;transform: scale(1.1);transform-origin: 80% 50%;}}
  }
  }

/* Swipe */
.swipe {position: relative;
  float: left;
  width: size(840);
  height: size(560);
  margin-left: size(210);
  z-index: 3;
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
  .section4 {
    width: 100%;
    height: auto;
    padding: 0;
  }
  .w1{bottom:sizem(-15);width: sizem(700);
		height: sizem(110);
  &::after{display:none;}}
.img{
  width:sizem(160);right: sizem(-30);bottom:sizem(250);
}
  .txt{
    position: relative;
    width: sizem(310);
    float: none;
    font-size: sizem(15);
    padding:2em 0 8em;
    margin: auto;
  .desc{
    span{float: none;}
    li{transition: color .3s;display: none;margin: 0;float: none;
      width: 100%;
      min-height: 5em;
      &.active{display: block;
      span{transform-origin: 0% 50%;}}
   }
    
  }
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
import wimg from './w.vue'
import mimg from './m.vue'

export default {
  name: 'section4',

  mixins: [slider],
  props: ['viewIndex'],
  components: {
    wimg,
    mimg,
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
          img: require('./s4/1.jpg'),
          name: '生活一級棒：府中商圈實景圖',
        },
        {
          img: require('./s4/2.jpg'),
          name: '交通一級棒：高鐵示意圖',
        },
        {
          img: require('./s4/3.jpg'),
          name: '科技園區一級棒：情境示意圖',
        },
        {
          img: require('./s4/4.jpg'),
          name: '未來一級棒：情境示意圖',
        },
        {
          img: require('./s4/5.jpg'),
          name: '增值一級棒：情境示意圖',
        },

        /*
        {
          img: require('./s4/6.jpg'),
          name: '食三麵屋',
        },
        */
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
