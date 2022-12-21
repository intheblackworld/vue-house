<template>
  <div>
    <div class="section6">
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name" v-if="slide.name"></div>
            </div>
          </transition-group>
          <!-- 
          <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div> -->
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile" >
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div>
        </div>
      </div>
      <div class="txt">
      <div class="subtitle" data-aos="fade-up" data-aos-delay="200">Modern mansion</div>
      <div class="title" data-aos="fade-up" data-aos-delay="200">建築團隊介紹</div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">建築團隊介紹文字建築團隊介紹文字建築團隊介紹文字，建築團隊介紹文字建築團隊介紹文字建築團隊介紹文字建築團隊介紹文字建築團隊介紹文字，建築團隊介紹文字</div>
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
  padding: 5vw 0 5vw;
&::after{content: "";clear: both;display: block;}
}
.txt{
  position: relative;
  width: size(1500);
  margin: 1em auto 0em auto;
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
}
@include swipe();
.slide-name{
  color: #000c;
 text-shadow:0 0 0 #0000;
}

.pagination-dot {
  span {
    border: 0.2em solid #C6BA9A;
    &::before {
    border:  0.105em solid #A28A78;
    }
  }
}


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
  padding: 0 0 23vw;
  }
  .txt{
    position: relative;
    width: sizem(310);
    margin:auto;
    padding:2em 0 6em;
    left:0;
    top:0;
    font-size: sizem(15);
  }
  /* Swipe */
  .swipe {
    position: relative;
    width: 100%;
    height: sizem(280);
    top:0;
    left:0;
 background:#FFF0;
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
          img: require('./s6/0.jpg'),
          name: '',
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
