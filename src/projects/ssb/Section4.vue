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
      <div class="subtitle" data-aos="fade-up" data-aos-delay="200">Time to relax</div>
      <div class="title" data-aos="fade-up" data-aos-delay="200">府中慢漫走<br />隨手採集生活靈感</div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">步出府中站，沿著風格小店、香氣馥郁的咖啡館輕移腳步，隨手拾起即是精彩亮點，府中生活如同走進藝文展演走廊，每一處細節都值得細細欣賞，稀鬆的日常在這裡也有了個人風格。</div>
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
  background:#ECDDC0;
&::after{content: "";clear: both;display: block;}
}
.w1{bottom:size(-110);left: 0;width: size(1920);z-index: 2;
		height: size(250);
  &::after{content: "";position: absolute;width: 80%;
height: 100%;right: 0;top: 0;
background: linear-gradient(-20deg, #ECDDC0FF 20%,#ECDDC000 65%);}
}
.img{
  width:size(440);right: size(-70);bottom:size(-170);z-index: 2;
  margin: 0 auto 0em;opacity: .5;
}



.txt{
float: right;
  position: relative;
  padding-top: 6vw;
  width: size(580);
  z-index: 3;
  margin-right: size(210);
  color: #555;
  @include txt(size(18));
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

  .txt{
    position: relative;
    width: sizem(310);
    float: none;
    font-size: sizem(15);
    padding:2em 0 6em;
    margin: auto;
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
          name: '林家花園',
        },
        {
          img: require('./s4/2.jpg'),
          name: '老地方咖啡',
        },
        {
          img: require('./s4/3.jpg'),
          name: '誠品生活',
        },
        {
          img: require('./s4/4.jpg'),
          name: '435藝文特區',
        },
        {
          img: require('./s4/5.jpg'),
          name: '門前隱味',
        },
        {
          img: require('./s4/6.jpg'),
          name: '食三麵屋',
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
