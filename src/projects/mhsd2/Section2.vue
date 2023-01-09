<template>
  <div>
    <div class="section2">
      <img loading="lazy" class="img-o" src="./all/o.png" alt="o" data-aos="zoom-in">
      

      

    
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img loading="lazy" :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <div class="prev-btn" @click="decIndex">
            <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='31.5,57 4.5,30 31.5,3 '/%3E%3C/svg%3E" alt="_prev">
            </div>
            <div class="next-btn" @click="addIndex">
            <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='3.5,3 30.5,30 3.5,57 '/%3E%3C/svg%3E" alt="_next">
            </div>
          </div>
        </div>
      </div>
      <div class="txt">
      <div class="title" data-aos="fade-down" data-aos-delay="200">7橋3快3捷1高，雙城共榮</div>
      <div class="sub" data-aos="fade-down" data-aos-delay="300">15分鐘悠活圈，咫尺雙北一手掌握  </div>
      <div class="desc" data-aos="fade-down" data-aos-delay="400">
        7橋：台北橋、忠孝橋、中興橋、重新橋、重陽橋、新北大橋、重翠橋<br>
        3快：64快速道路、新北環快、環河快速道路<br>
        3捷：三重國小站、台北橋站、菜寮站<br>
        1高：台一線高架

      </div>
      </div>
     <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="500" v-if="isPC">
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width:100%;
  height: size(890);
  position: relative;
  font-size: size(17);
}
.img-o{
  width: size(160);
  position: absolute;
  opacity:0.3 !important;
  top:size(350);
  right:size(280);
}



.t0{
  position: absolute;
  width: 100%;height:auto;
  top:  size(-1080);left: 0;object-fit: cover;
  opacity: 0.5;
  }
.o{
  position: absolute;
  top:size(330);
  right:size(340);
  width:size(210);
  height:size(210);
  border-radius: 50%;
background: linear-gradient(to bottom, rgba(220,60,0,0.12) 0%,rgba(220,60,0,0) 100%);}
.c{
      position: absolute;left:0;right:0;
      top:calc(50% + (0 - 540) * 100vw / 1920);
      div{
        position: absolute;
        animation:an 5s ease-in-out infinite alternate;
        img{width: 100%;}
      }
    .c1{
      width:size(660);top:size(615);right: size(-270);
      transform:rotate(3deg);
      transform-origin: 50% 50%;
    animation-delay: -1s;
      img{width: 100%;
      transform:rotate(-68deg);}}
    .c2{
      width:size(242);top:size(849);left: size(22);
      transform:rotate(3deg);
      transform-origin: 50% 100%;
      img{width: 100%;
      transform:rotate(0deg);}}
  }
@keyframes an{
    to{
      transform: translateX(0);
    }
}




.txt{
  position: absolute;
  width: size(610);
  right:size(200);
  top: size(380);
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(17);
  font-weight: 400;
  line-height: 1.2;
  z-index: 3;
  color: #242424;
  }

.title{
  position: relative;
  font-size: size(40);
  margin:1em auto 0.5em;
  letter-spacing:0.04em;
  color: #00537A;
  font-weight: 700;
}
.sub{
  position: relative;
  font-size: size(25);
  margin:1em auto 0.5em;
  letter-spacing:0.04em;
  color: #000000;
  font-weight: 700;

  .line{
    position: absolute;
    width: size(210);
    height: size(2);
    background: #c49847;
    top:size(15);
    right:size(0);

    }
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
  position: absolute;
  width: size(840);
  height: size(560);
  top: size(243);
  left: size(210);
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
  bottom: size(100);
  left:calc(50% + 6.95vw);
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
    border: 0.2em solid  rgba(255, 255, 255, 0.5);
    position: relative;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
    border-radius: 50%;
    border:  0.105em solid  #c99637;
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
  z-index: 3;
  font-size: size(20);

  .prev-btn,
  .next-btn {
    padding: 0 0.75em;
    cursor: pointer;
    height: 100%;
    display: flex;
    img{
    width: 1em;
    }
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
  }
.o{
  top:sizem(260);
  right:sizem(10);
  width:sizem(90);
  height:sizem(90);

}
.c{
    .c1{width:sizem(230);top:sizem(320);left: sizem(110);}
    .c2{width:sizem(170);top:sizem(390);left: sizem(200);}
}
  .txt{
  position: relative;
  width: sizem(310);
margin:1.5em auto 10em;
  left:0;
  top:0;
  font-size: sizem(15);
  text-align: center;
  }
.title{
    font-size: sizem(25);
}

.sub{
  font-size: sizem(18);
}
  .desc {
   //line-height: 1.73;
  margin:0em auto;
  text-align: left;
  letter-spacing:0em;
  margin-top: sizem(20);

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
          name: '台北橋',
        },
        {
          img: require('./s2/2.jpg'),
          name: '中興橋',
        },
        {
          img: require('./s2/3.jpg'),
          name: '重新橋',
        },
        {
          img: require('./s2/4.jpg'),
          name: '環河快速道',
        },
        {
          img: require('./s2/5.jpg'),
          name: '捷運三重國小站',
        },
        {
          img: require('./s2/6.jpg'),
          name: '重陽路上高速公路',
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
