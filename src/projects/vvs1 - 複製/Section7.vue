<template>
  <div>
    <div class="section7">
      <img src="./s7/img.png" alt="img" class="img" />
      <div class="box"></div>
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img1" :class="`swipe-item absolute`">
              <img :src="slide.img1" alt="" class="img1">
              <img :src="slide.img2" alt="" class="img2">
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
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img1 + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div> 
      </div>
      <div class="boxm" v-if="isMobile"></div>
      <div class="txt">
      <div class="title" data-aos="fade-up" data-aos-delay="200">建築界<br v-if="isMobile" />奧斯卡級大獎常勝軍</div>
      <div class="subtitle" data-aos="fade-up" data-aos-delay="200">Pia萬豪酒店設計團隊</div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">Pia interior 公司擁有超過20年的豐富經驗，團隊人員超過180多名，作品風格擅長將東、西方文化品味融合，混搭多重元素，營造輕鬆度假的休閒氛圍。世界級設計堅強實力有目共睹。
</div>
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
  padding: 9vw 0 5vw;
  // background:#FFF;
&::after{content: "";clear: both;display: block;}
}
.img{width: size(762);position: absolute;right: size(70);bottom:0;
z-index: 2;
}

.boxm,
.box{position: absolute;left: size(210);bottom: 0;
  z-index: 1;
background:  linear-gradient(to right, #00427A 0%, #112A49 50%, #04142A 100%);
  width: size(1710);height:size(170);}
.txt{
float: right;
  position: relative;
  padding-top: 0vw;
  width: size(580);
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(19);
  font-weight: 600;
  line-height: 1.4;
  z-index: 2;
  margin-right: size(210);
  }

.title{
  font-size:2.2em;
  margin:0 auto 0;
  color: #B00;
}
  .subtitle{font-size: 1.25em;
    padding:.75em 0 0 0;
  }
.desc {
 // margin:1em auto;
  padding:1em 0 0 0;
  line-height: 1.6;
  letter-spacing:0.05em;
  font-weight: 300;
  list-style: circle;
  overflow: hidden;
  li{list-style:inherit;float: left;margin: 0.3em 0 0.3em 1.4em;width:calc(100% - 1.4em);
  }
}

/* Swipe */

.swipe {position: relative;
float: left;
 // position: absolute;
  width: size(840);
  height: size(560);
// top: size(185);
 // left: size(210);
  margin-left: size(210);
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
  text-align: left;
  .img1 {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .img2 {
    height: size(44);
    margin: size(25) 0 0 size(30);
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
  bottom: size(-40);
  right:0;
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
    border: 0.2em solid  $pagination;
    position: relative;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
    border-radius: 50%;
    border:  0.105em solid  $pagination-active;
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
  .section7 {
    width: 100%;
    height: auto;
  padding:9vw 0 sizem(240) 0;
  }
.img{width: sizem(423);left:sizem(-28);top:auto;bottom:0;}
.boxm{left:0;bottom:auto;top: sizem(0);
  position: relative;
  width: sizem(375);height:sizem(60);}
.box{left:0;bottom:0;top:auto;
  width: sizem(375);height:sizem(95);}
  .txt{
    position: relative;
    width: sizem(320);
    float: none;
    margin:1.5em auto 0;
    left:0;
    top:0;
    font-size: sizem(15);
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
    float: none;
    height: sizem(255);
    top:0;
    left:0;
  margin-left:0;
  }
.swipe-item {
  .slide-name {
    font-size: sizem(12);
  }
  .img2 {
    height: sizem(30);
    margin: sizem(15) 0 0 sizem(15);
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
          img1: require('./s7/1.jpg'),
          img2: require('./s7/1.png'),
          name: '',
        },
        {
          img1: require('./s7/2.jpg'),
          img2: require('./s7/2.png'),
          name: '',
        },
        {
          img1: require('./s7/3.jpg'),
          img2: require('./s7/3.png'),
          name: '',
        },
        {
          img1: require('./s7/4.jpg'),
          img2: require('./s7/4.png'),
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
