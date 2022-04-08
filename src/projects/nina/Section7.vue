<template>
  <div>
    <div class="section7">
     <div class="c" data-aos="fade" data-aos-delay="0" data-aos-duration="1900">
      <img src="./all/7.png" alt="嚴選名品建材" class="c7">
      <img src="./all/3.png" alt="SHOWA昭和氣密窗" class="c3">
      <img src="./all/5.png" alt="INAX" class="c5">
    </div>
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
      
      <!--    <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <div class="prev-btn" @click="decIndex">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='31.5,57 4.5,30 31.5,3 '/%3E%3C/svg%3E" :alt="`${info.caseName}_prev`">
            </div>
            <div class="next-btn" @click="addIndex">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='3.5,3 30.5,30 3.5,57 '/%3E%3C/svg%3E" :alt="`${info.caseName}_next`">
            </div>
          </div> -->
        </div>
      </div>
      <div class="txt">
      <div class="title" data-aos="fade-down" data-aos-delay="200">嚴選名品建材<span v-if="isPC">．</span><br v-if="isMobile">滿足講究品味</div>
      <div class="desc" data-aos="fade-down" data-aos-delay="300">
        <b>SHOWA昭和氣密窗：</b>榮獲日本國家標準 JIS認證．細微用心、匠心獨具<br>
<b>INAX：</b>傳承日式美學與工藝技術的日本質感衛浴<br>
<b>冠軍建材：</b>國內磁磚第一品牌．冠軍品質值得信賴<br>
<b>Studor：</b>英國排水通氣系統．有效防止病菌入侵<br>
<b>Kronotex 太格木地板：</b>120年精工歷史．德國第一大品牌<br>
<b>DORIS德瑞思廚具：</b>超過半世紀廚具品牌．量身打造在地設計<br><br>
<ol data-aos="fade-down" data-aos-delay="400">
<b>『安心保固 值得住一輩子的家 』</b>
<li>10年防水保固</li>
<li>15年結構體保固</li>
<li>1年設備保固</li>
</ol>
      </div>
      </div>
      
      <div class="pagination absolute flex-ac" data-aos="fade-down" data-aos-delay="500" v-if="isPC">
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div>
      
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width:100%;
  height: size(900);
  position: relative;
}
.c{
      position: absolute;left:0;right:0;
      top:calc(50% + (0 - 540) * 100vw / 1920);
    img{
      position: absolute;
      animation:an 5s ease-in-out infinite alternate;}
    .c5{width:size(319);top:size(1020);left: size(250);transform: translateX(-15%);animation-delay: -2s;}
    .c3{width:size(434);top:size(930);left:size(0);transform: translateX(-10%);}
    .c7{width:size(110);top:size(970);left:size(430);transform: translate(-20%,10%)rotate(-10deg);}
  }


@keyframes an{
    to{
      transform: translateX(0);
    }
}

.txt{
  position: absolute;
  width: size(610);
  left: size(210);
  top: size(160);
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
  color: #52b559;
  font-weight: 500;
}

.desc {
  margin:1em auto;
  line-height: 2;
  letter-spacing:0.05em;
  overflow: hidden;
  ol{
  list-style: decimal;
  b{color:#52b559;font-size: 1.2em;}
  }
  li{list-style:inherit;float: left;margin: 0.3em 0 0.3em 1.4em;width:calc(100% - 1.4em);
  }
}

/* Swipe */
.swipe {
  position: absolute;
  width: size(840);
  height: size(560);
  top: size(185);
  right: size(210);
  object-fit: cover;
  z-index: 3;
}

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

.swipe-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
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
    color: #fff;
   text-shadow:0 0.1em 0.3em #000;
  }
}

.pagination {
  width: auto;
  bottom: size(148);
  right:calc(50% + 6.95vw);
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
  .section7 {
    width: 100vw;
    height: auto;
  }
  .c{
    .c5{width:sizem(170);top:sizem(574);left: sizem(200);}
    .c3{width:sizem(208);top:sizem(530);left:sizem(70);}
    .c7{width:sizem(70);top:sizem(540);left:sizem(280);}
}


  .txt{
  position: relative;
  width: sizem(315);
margin:1.5em auto 13em;
  left:0;
  top:0;
  font-size: sizem(14);
  }
.title{
    font-size: sizem(29);
}
  .desc {
   //line-height: 1.73;
  margin:0em auto;
  letter-spacing:0.01em;
  }

  /* Swipe */
  .swipe {
    position: relative;
    width: 100%;
    height: sizem(250);
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
          img: require('./s7/1.png'),
          name: '',
        },
        {
          img: require('./s7/2.png'),
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
