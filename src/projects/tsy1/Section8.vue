<template>
  <div class="section8">
    <img src="./s8/new_bg.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isPC">
    <img src="./s8/new_bg_m.jpg" alt="" class="bg-img" v-if="isMobile">
    <div class="title" data-aos="fade-up" data-aos-delay="200">
      連結土地情感<br />
      護佑家族世代平安
    </div>
    <div class="desc" data-aos="fade-up" data-aos-delay="400">
      建築不只是居住的容器，更要能收藏土地的情感，「翠松園｣尊天敬地，用心整合這塊風⽔好地，連結在地紋理，納入信仰中心成為建築的一部分，獨立進出規劃，讓「土地公伯」福澤廣被，靜靜地護佑世代庇蔭子孫、成龍成鳳、安家立業！
    </div>
    <!-- <div class="swipe absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
        <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
          <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
          <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
        </div>
      </div>
    </div> -->
    <!-- <div class="txt absolute">
        <div class="subtitle">
          活在城市的焦距裡，優雅加分很正常
        </div>
        <div class="title">
          南西時尚力<span></span>貼身輕風格
        </div>
        <div class="hr"></div>
        <div class="desc">
          <span>徜徉生活時序、社交、採買，</span>
          <span class="p">環遊於城市的光環。</span>
          <span>青春白領購物指標-南西三越，信手捻來！</span>
          <span>欣欣秀泰影城、南京東路日式条通，</span>
          <span>一如住家後院，無拘穿著夾腳拖，</span>
          <span class="p">無壓邁入夜生活！</span>
          <span>瀟灑與內斂，就是如此恰如其分，</span>
          <span>毫不違和，寫出愜意自由。</span>
        </div>
        <img src="./s8/img.png" alt="" class="img">
      </div> -->
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  min-height: size(900);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.title {
  @include img_l_pc(400, 86, 198);
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(552, 260, 122);
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  font-size: size(26);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.93;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
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
  .section8 {
    width: 100vw;
    height: sizem(667);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .title {
    @include img_c_m(200, 23);
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }

  .desc {
    @include img_c_m(319, 110);
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    font-size: size(16);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
// import slider from '@/mixins/slider.js'

export default {
  name: 'section8',

  // mixins: [slider],
  // props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      // slideList: [
      //   {
      //     img: require('./s8/08_img.jpg'),
      //     name: '',
      //   },
      // ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  // watch: {
  //   viewIndex() {
  //     if (this.viewIndex === 8) {
  //       this.slideIndex = 0
  //     }
  //   },
  // },
}
</script>
