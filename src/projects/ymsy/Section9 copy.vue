<template>
  <div class="section9">
    <img loading="lazy" src="./s9/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img" v-if="isPC">
    <img loading="lazy" src="./s9/bgm.jpg" :alt="`${info.caseName}_img`" class="bg-img" v-else>
    <div class="content">
      <div class="title" data-aos="fade-in" data-aos-delay="0">
        興益發建設
      </div>
      <div class="desc" data-aos="fade-in" data-aos-delay="200">
        獨到精準眼光，精耕生活美學<br>
讓愛家的人更愛家
      </div>
      <div class="label">
        興益發業績實景 詠大直
      </div>
    </div>

    <!--div class="new-text">銷售企劃：興益發建設自建自售</div
      <Map :bgSrc="bgSrc" v-if="isMobile" :hand="hand">-->
    </Map>

    <!-- <div class="swipe" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade-down" data-aos-delay="800">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img loading="lazy" :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
      </div>
      <div class="swipe-btns absolute flex-ac flex-jb">
        <div class="prev-btn" @click="decIndex"></div>
        <div class="next-btn" @click="addIndex"></div>
      </div>
    </div> -->
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section9 {
  width: 100vw;
  height: auto;
 /* height: 100vh;
  min-height: size(1100);
  max-height: size(1100); */
  position: relative;
  //overflow-x: hidden;
  // min-height: size(900);
  background-image: url('./all/section_bg.jpg');
  background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}

.bg-img {
  width: 100%;
  height:auto;
  position: relative;
  display: block;
  object-fit: cover;
  margin-top: 0;
}
.content{
  display: flex;
  align-items: center;
  color: #006837;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  font-size: size(25);padding: .5em;
  font-weight: 500;
  line-height: 1.5;
  text-align: left;
  white-space: nowrap;
}

.title {
  font-size: 3em;
  font-weight: 900;
  line-height: 1.2;margin: auto .5em;
}

.desc {
  font-family: 'Noto Sans TC';
  font-weight: 700;flex: 1;
  
}

.label {
  font-family: 'Noto Sans TC';
  font-size: 0.9em;
  align-self: flex-end;
  color: #000;padding-right: 1.5em;
}

.new-text {
  @include img_r_pc(500, 1010, 30);
  top:calc(40% + ( 1010 - 1080 * 0.4) * 100vw / 1920);
  font-size: size(25);
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
  z-index: 3;
  white-space: nowrap;
  text-shadow: 0em 0em 0.3em #000;
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
  .section9 {
    width: 100vw;
    height: auto;
  }
.content{
  font-size: sizem(15);
    flex-direction:column;
  text-align: center;padding:1.5em 0;
}
.title {margin: auto .7em;
}
.label {
    @include img_r_pc(750, 60, 50);
  color: #fff;
  text-shadow: 0 2px 2px #000;
  }

  
  /*
  .label {
    @include img_r_pc(750, 100, 50);
    bottom: size(60);
    font-size: size(70);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: right;
    color: #ffffff;
    white-space: nowrap;
    z-index: 10;
  }

  .new-text {
  @include img_c_pc(1100, 1010);
  top:calc(50% + ( 600 - 667 * 0.5) * 100vw / 375);
  font-size: size(80);
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  z-index: 3;
  white-space: nowrap;
  text-shadow: 0em 0em 0.3em #000;
}

  .title {
    @include img_c_m(183, 420);
    font-size: sizem(36.5);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    z-index: 10;
  }

  .desc {
    @include img_c_m(232, 480);
    font-size: sizem(14);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.79;
    letter-spacing: sizem(2.8);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
    z-index: 10;
  }
*/
  
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import Map from '@/components/Map.vue'

export default {
  name: 'section9',
  components: {
    Map,
  },
  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      bgSrc: require('./mobile/09/bg.jpg'),
      hand: require('./mobile/09/swipe-here.png'),
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    // viewIndex() {
    //   if (this.viewIndex === 5) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>
