<template>
    <div class="section2">
      <div class="title" data-aos="fade" data-aos-delay="0" >城市之森</div>
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img loading="lazy" :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
     <!--     <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile" >
            <img loading="lazy" src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img loading="lazy" src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div>  -->
        </div>
      </div>
      <div class="txt">
      <div class="subtitle" data-aos="fade" data-aos-delay="200" >後疫時代繁華靜境，剛剛好的生活心選擇</div>
      <hr class="hr" data-aos="fade" data-aos-delay="300" >
      <div class="desc" data-aos="fade" data-aos-delay="400">
      宜誠【樂聚】著眼建築環境立地條件的人居尺度，唯美距離適當的相處，鄰綠近水眺望藍天寬敞景緻，走在寧靜氛圍基地上，<br v-if="isPC">宜誠【樂聚】繁華喧囂一下轉靜，幸福設籍就是這裡了！</div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {  
  width:100%;
  height:auto;
  position: relative;

  font-stretch: normal;
  font-style: normal;
  text-align: center;
  line-height: 1.2;
  color: #fff;
  font-weight: 400;
  font-size: size(17);
}
.title{
  position: relative;
  font-size: size(40);
  padding: 2.2em 0 .8em;
  letter-spacing:0.06em;
  font-weight: 800;
      transform:translateY(-10%) scale(1.2);
}
.txt{
  position: relative;
  width: size(1500);
  margin:0 auto 0;
  padding: 0 0 6em;
  z-index: 3;
  }

.subtitle{
  position: relative;
  font-size: size(31);
  margin:1.5em auto 0.8em;
  letter-spacing:0.04em;
  color: #F0C154;
  font-weight: 500;
      transform: scale(1.2);
}
.hr{background: none;border: 0;opacity: .5;
border-bottom:1px solid currentColor;
      transform: scale(1.2);}
.desc {
  margin:1em auto;
  line-height: 1.6;
  letter-spacing:0.05em;
  list-style: circle;
  overflow: hidden;
      transform: scale(1.2);
  li{list-style:inherit;float: left;margin: 0.3em 0 0.3em 1.4em;width:calc(100% - 1.4em);
  }
}
/* Swipe */
.swipe {
  position: relative;
  margin: auto;
  width: size(1500);
  height: size(775);
  // left: size(210);
  object-fit: cover;
  z-index: 3;
}
.slide-name {
    right:1.5em;
    bottom:1em;
    color: #fff;
    font-size: size(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.89px;
    text-align: left;
    color: #ffffff;
   text-shadow:0 0.1em 0.3em #000;
}

.swipe-wrap {
  width: 100%;
  height: 100%;
}
.swipe-item {
  width: 100%;
  height: 100%;
  z-index: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

// 過場動畫
// begin 
.swipe-fade-leave-to {
  opacity: 0;
  z-index: 0;
}
// end
.swipe-fade-enter {
  opacity: 0;
  z-index: 1;
}

.swipe-fade-enter-active {
  transition: all 0.5s ease;
}

.swipe-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

// pagination
.pagination {
  width: auto;
  bottom: -2.2em;
  right: -0.5em;
  justify-content: center;
  font-size: size(20);

}
.pagination-dot {
  padding: 0.25em;
  margin: 0 0.2em;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width:1em;
    height:1em;
    border-radius: 50%;
    border: 0.2em solid  #ccc;
    position: relative;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
    border-radius: 50%;
    border:  0.105em solid  #d4a680;
      opacity: 1;
      position: absolute;
      top: 20%;
      left: 20%;
      transition: all 0.3s;
      transform-origin: center;
      transform: scale(0);
    }
    &.active {
      box-shadow: none;
      &::before {
        width: 100%;
        height: 100%;
        top: 0%;
        left: 0%;
        transform: scale(1.6);
      }
    }
  }
}


.swipe-btns {
  width: 100%;
  height: 100%;
  padding: 0 0.75em;
  z-index: 3;
  font-size: size(20);

  .prev-btn,
  .next-btn {
    width: 1em;
    cursor: pointer;
  }
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
  .section2 {
    width: 100%;
    height: auto;
    min-height: auto;
    max-height: initial;
    font-size: sizem(14);
    text-align: justify;
  }
  .txt{
    position: relative;
    width: sizem(320);
    //margin:1.5em auto 13em;
    left:0;
    top:0;
  }
.title{
    font-size: sizem(30);
  letter-spacing:0.01em;
  text-align: center;
}
.subtitle{
    font-size: sizem(17.6);
  letter-spacing:0em;
}
  .desc {
  margin:0em auto;
  letter-spacing:0em;
  }
  /* Swipe */
  .swipe {
    position: relative;
    width: 100%;
    height: sizem(194);
    top:0;
    left:0;
  }
  .swipe-btns {
  font-size: sizem(15);
  }
}

</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section2',

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
          img: require('./s2/1.jpg'),
          name: '空拍示意圖',
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
