<template>
  <div>
    <div class="section6">
      <!--    -->  
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="box" v-if="!isMobile"></div>
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
      <div class="title" data-aos="fade-up" data-aos-delay="200" >輕盈歐式 別墅有天有地</div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">以歐式精神巧妙結合現代設計手法，創造輕歐式莊園質感，有天有地的起居空間，可以蒔花弄草的前庭後院，生活無拘無束。室內規劃一樓以上皆為挑高設計，減少壓迫感。客廳面寬5米，自在佈置動線不受影響，地下室規劃雙停車位，同時保留室內可作為主人的收藏房或是外出物品的收納間，便利一舉兩得。</div>
      </div>
    <div class="img" data-aos="zoom-in" data-aos-delay="0" >
      <div>
    <img src="./all/f3.png" class="f3" />
    <img src="./all/f2.png" class="f2" />
    <img src="./all/f4.png" class="f4" />
      <div>
    <img src="./all/f5.png" class="f5" />
  </div>
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
  .box{position: absolute;top: 0;left: 0;right: 0;bottom: 0;border:3px solid #fff;transform: translate(1vw , -1vw);
  &::before{content: "";position: absolute;display: block;
  right: 0;top: 0;width: size(60);height:size(60);border:3px solid #fff;transform: translate(1vw , -1vw);}
  }
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
  .pagination-dot {
    padding: 0.25em;
    margin: 0 0.15em;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width:3em;
      height:12px;
      position: relative;
      &::before{content: "";
      transition: transform 0.5s, background 0.5s;
      display: block;width: 100%;height:100%;
      background: $pagination;
        transform: scaleY(.25);transform-origin: 50% 50%;
    }
      &.active {
        &::before{  transform: scaleY(1);
      background:$pagination-active;
    }
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
  .section6 {
    width: 100%;
    height: auto;
    min-height: auto;
    max-height: initial;
  //padding: 0;
  background-size: 250% auto;
  }
  .img{width: sizem(300);left: sizem(45);bottom: sizem(-50);}
  .txt{
    position: relative;
    width: sizem(320);
    margin:0em auto 3em;
    left:0;
    top:0;
    font-size: sizem(15);
  padding-top: 7vw;
    .title{
      font-size:1.9em;
    }
    .subtitle{
      font-size:1.1em;
    }
  }
  /* Swipe */
  .swipe {
    position: relative;
    width: 100%;
    height: sizem(255);
    top:0;
    left:0;
  }
.swipe-item {
  .slide-name {
    font-size: sizem(12);
  }
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
          name: '建築空間，現場實景經電腦修飾示意',
        },
        {
          img: require('./s6/2.jpg'),
          name: '建築空間，現場實景經電腦修飾示意',
        },
        {
          img: require('./s6/3.jpg'),
          name: '建築空間，現場實景經電腦修飾示意',
        },
        {
          img: require('./s6/4.jpg'),
          name: '建築空間，現場實景經電腦修飾示意',
        },
        {
          img: require('./s6/5.jpg'),
          name: '建築空間，現場實景經電腦修飾示意',
        },
        {
          img: require('./s6/6.jpg'),
          name: '建築空間，現場實景經電腦修飾示意',
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
