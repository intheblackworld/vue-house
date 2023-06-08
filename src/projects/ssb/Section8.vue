<template>
  <div>
    <div class="section8">
      <wimg class="w1 absolute" />
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
      <div class="subtitle" data-aos="fade-up" data-aos-delay="200">Handmade boutique</div>
      <div class="title" data-aos="fade-up" data-aos-delay="200">10大嚴選建材<br />建築經典訂製</div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">採用精品歐日品牌-日本TOTO、英國McALPINE、歐系櫥櫃DORIS、韓國LG人造石檯面等建材，營造品味家居生活，銀級智慧建築結合了人臉辨識系統，24小時遠端監控哨兵，全面打造安心居家環境。
</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width:100%;
  height:auto;
  position: relative;
  margin:0 auto 0;
  padding: 15vw 0;
  z-index: 2;
  background:#ECDDC0;
&::after{content: "";clear: both;display: block;}
}
.w1{bottom:size(20);left: 0;width: size(1920);z-index: 2;
		height: size(250);}



.txt{
float: right;
  position: relative;
  padding-top: 3.8vw;
  width: size(580);
  z-index: 2;
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
  .section8 {
    width: 100%;
    height: auto;
    padding: 0;
  }
  .w1{bottom:sizem(0);width: sizem(700);
		height: sizem(110);}

  .txt{
    position: relative;
    width: sizem(310);
    float: none;
    font-size: sizem(15);
    padding:2em 0 8em;
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
  name: 'section8',

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
          img:isMobile? require('./s8/1m.png'):require('./s8/1.png'),
          //img: require('./s8/1.png'),
          name: '',
        },
        {
          img: require('./s8/2.jpg'),
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
      if (this.viewIndex === 3) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
