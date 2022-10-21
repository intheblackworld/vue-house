<template>
  <div>
    <div class="section7">
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="box" v-if="!isMobile"></div>
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
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
      <div class="title" data-aos="fade-up" data-aos-delay="200">麗寶集團 品質值得信賴</div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">麗寶集團成立至今已逾40年，從房地產起家後，事業版圖橫跨連鎖飯店、主題樂園、商場百貨以及生技產業。住宅仍是麗寶的老本行，不僅堅持細節工法，更提倡永續經營，提供住宅保固為的就是讓住戶安心。<br /><br />
15年結構保固<br />
5年防水保固<br />
3年一般設備保固
</div>
      </div>
      <div class="img" data-aos="zoom-in" data-aos-delay="0" >
        <div>
        <img src="./all/f3.png" class="f3" />
    <img src="./all/f6.png" class="f6" />
        <img src="./all/f1.png" class="f1" />
    <img src="./all/f2.png" class="f2" />
        <img src="./all/f4.png" class="f4" />
        <img src="./all/f5.png" class="f5" /></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width:100%;
  height:auto;
  position: relative;
  margin:0 auto 0;
  padding: 10vw 0 10vw;
  // background:#FFF;
&::after{content: "";clear: both;display: block;}
}

.img{position:absolute;top: 0;right: 0;transform-origin: 0% 0%;
  z-index: 4;
  > div{transform: rotate(100deg);}
img{position:absolute;pointer-events: none;}
.f1{
    width: 10.5vw;
    top: -26.6vw;
    left: 4.3vw;transform:rotate(-154deg);transform-origin: 90% 100%;
animation: an1 3s -.5s ease-in-out infinite alternate;
}
.f2{width:size(350);top:size(120);left:size(15);
  transform-origin: -10% -10%;transform: rotate(4deg);
animation: an 3s ease-in-out infinite alternate;}
.f3{width:size(90);top:size(-490);left:size(-50);transform:rotate(135deg);transform-origin: 90% 100%;
animation: an2 3s -.8s ease-in-out infinite alternate;}
.f4{width:size(380);
    top: -8.5vw;
    left: -15vw;transform-origin: 0% 0%;transform: rotate(3deg);
animation: an 3s -.2s ease-in-out infinite alternate;}
.f5{width:size(290);
    top: -8vw;
    left: -1.8vw;transform-origin: 0% 0%;transform: rotate(5deg);
animation: an 3s -.4s ease-in-out infinite alternate;}
.f6{width:size(290);top:size(-200);left:size(90);transform-origin: 0% 0%;transform: rotate(4deg);
animation: an 3s -.6s ease-in-out infinite alternate;}

}
@keyframes an{
  to{
    transform: rotate(0deg);
  }
}
@keyframes an1{
  to{
    transform: rotate(-157deg);
  }
}
@keyframes an2{
  to{
    transform:rotate(131deg);
  }
}

.txt{
  float: left;
  position: relative;
  padding-top: 7vw;
  width: size(580);
  z-index: 2;
  margin-left: size(210);
  @include txt(size(18));
  }


/* Swipe */

.swipe {position: relative;
float: right;
 // position: absolute;
  width: size(840);
  height: size(560);
// top: size(185);
 // left: size(210);
  margin-right: size(210);
  z-index: 3; 
  .box{position: absolute;top: 0;left: 0;right: 0;bottom: 0;border:3px solid #fff;transform: translate(1vw , 1vw);
  &::before{content: "";position: absolute;display: block;
  right: 0;bottom: 0;width: size(60);height:size(60);border:3px solid #fff;transform: translate(1vw , 1vw);}
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
  bottom: size(0);
  right:calc(100% + 50 * 100vw / 1920);
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
  .section7 {
    width: 100%;
    height: auto;
    padding: 0;

  }
  .img{
.f1{
    width:sizem(57);
    top: -32.6vw;
    left: -7.7vw;
}
.f2{width:sizem(95);
    top: 16.4vw;
    left: -12.7vw;}
.f3{width:sizem(25);
    top: -28.6vw;
    left: -16.7vw;}
.f4{width:sizem(112);
    top: -8.5vw;
    left: -37vw;}
.f5{width:sizem(89);
    top: -8vw;
    left: -19.8vw;}
.f6{width:sizem(73);
    top: -2.6vw;
    left: -12.7vw;}

}
  .txt{
    position: relative;
    width: sizem(320);
    float: none;
    margin:2em auto 6em;
    font-size: sizem(15);
    padding-top: 0;
  }
  /* Swipe */
  .swipe {
    position: relative;
    width: 100%;
    float: none;
    height: sizem(250);
    top:0;
    left:0;
  margin-left:0;
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
  name: 'section7',

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
          img: require('./s7/1.jpg'),
          name: '微笑城堡',
        },
        {
          img: require('./s7/2.jpg'),
          name: '福容大飯店 淡水漁人碼頭',
        },
        {
          img: require('./s7/3.jpg'),
          name: '鵬程NEW1',
        },
        {
          img: require('./s7/4.jpg'),
          name: '鵬程V1',
        },
        {
          img: require('./s7/5.jpg'),
          name: '麗寶集團提供建築保固，讓住戶更安心',
        },
        {
          img: require('./s7/6.jpg'),
          name: '麗寶樂園 天空之夢',
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
