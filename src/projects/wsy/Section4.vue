<template>
  <div>
    <div class="section4">
    <div class="c" data-aos="fade" data-aos-delay="0" data-aos-duration="1900">
      <img src="./all/4.png" alt="自漫美學 珍稀之作" class="c4">
      <img src="./s2/2.png" alt="自漫美學 珍稀之作" class="c2">
      <img src="./all/1.png" alt="自漫美學 珍稀之作" class="c1">
    </div>
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile" >
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div>
        </div>
      </div>
      <div class="txt">
      <div class="title" data-aos="fade-down" data-aos-delay="200" >淡江大橋  行動力升級</div>
      <div class="desc" data-aos="fade-down" data-aos-delay="300">
        匯集各界矚目與期待，淡江大橋主橋段預計將在2024年9月完工通車，未來淡水八里往返，可望節省約25分鐘車程，串聯機場更便捷；整個城區的交通行動力，都將更上一層樓。
      </div>
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
}

.c{
      position: absolute;left:0;right:0;
      top:0;
    img{
      position: absolute;
      animation:an 5s ease-in-out infinite alternate;}
    .c1{width:size(451);top:size(500);right: size(-10);transform: translateX(-8%);animation-delay: -1s;}
    .c2{width:size(246);top:size(950);right: size(-50);transform:skewY(-3deg)rotate(-3deg);transform-origin: 100% 50%;animation-delay: -2s;}
    .c4{width:size(533);top:size(950);left:size(-300);transform: translateX(-15%);animation-delay: -1s;}
  }

@keyframes an{
    to{
      transform: translateX(0);
    }
}
.txt{
  position: relative;
  width: size(1500);
  margin:0 auto 10em;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(17);
  font-weight: 400;
  line-height: 1.2;
  z-index: 3;
  color: #666;
  }

.title{
  position: relative;
  font-size: size(40);
  margin:1em auto 0.5em;
  letter-spacing:0.04em;
  color: #bb9259;
  font-weight: 700;
}
.desc {
  margin:1em auto;
  line-height: 2;
  letter-spacing:0.05em;
  list-style: circle;
  overflow: hidden;
  li{list-style:inherit;float: left;margin: 0.3em 0 0.3em 1.4em;width:calc(100% - 1.4em);
  }
}
/* Swipe */
.swipe {
  position: relative;
  margin: auto;
  width: size(1500);
  height: size(840);
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
  .section4 {
    width: 100%;
    height: auto;
    min-height: auto;
    max-height: initial;
  }

.c{
    .c1{width:sizem(230);top:sizem(600);right: sizem(60);}
    .c2{width:sizem(120);top:sizem(500);right: sizem(-30);transform:skewY(-3deg)rotate(-3deg);transform-origin: 100% 50%;}
    .c4{width:sizem(300);top:sizem(530);left:sizem(-80);}
  }
  .txt{
    position: relative;
    width: sizem(310);
    margin:1.5em auto 13em;
    left:0;
    top:0;
    font-size: sizem(15);
  }
.title{
    font-size: sizem(30);
  letter-spacing:0.01em;
}
  .desc {
  margin:0em auto;
  font-size: sizem(15);
  }
  /* Swipe */
  .swipe {
    position: relative;
    width: 100%;
    height: sizem(220);
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
  name: 'section4',

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
          img: require('./s4/1.jpg'),
          name: '淡江大橋示意',
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
