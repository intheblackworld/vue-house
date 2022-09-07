<template>
  <div>
    <div class="section4">
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key ="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
      <!--   -->   <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile" >
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div>
        </div>
      </div>
      <div class="txt">
      <div class="title" data-aos="fade-up" data-aos-delay="200" >市心生活圈  滿分宜居</div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">享水碓生活圈及中山北路機能，雙生活圈支撐，機能滿分。採買便利，金融銀行、行政中心、大賣場、小超商、傳統市場、公園綠地，5分鐘區域內，生活所需一應俱全。</div>
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
  padding: 4vw 0 4vw;
  background: url("./s4/city.png") no-repeat 0 80%;
  background-size: 100% auto;
&::after{content: "";clear: both;display: block;}
}

.img{width: size(800);position: absolute;left: 0;bottom: size(-130);
z-index: 2;
img{width: 100%;
// transform: skewY(5deg) ;
// transform-origin: 0 50%;
  //    animation: an 3s linear alternate infinite;
      }
}

@keyframes an{
    to{
      transform: translateX(0);
    }
}
.txt{
  position: relative;
  width: size(1500);
  margin:-2em auto 0em auto;
  padding: 2.8em 3em;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(18);
  font-weight: 400;
  line-height: 1.4;
  z-index: 2;
  background: #FFF;
  border-radius: size(20);
  
 // color: #fff;

.title{
  font-size:2em;
  margin:0 auto 0;
  color: #444;
  display: flex;
    align-items:baseline;
  font-weight: 600;
  &::after{flex: 1;
    height: 2px;content: "";background: #CF5700;margin: 0 0 0 .7em;
  }
}
  .subtitle{font-size: 1.25em;
    padding:.75em 0 0 0;
  }

.desc {
  padding:1em 0 0 0;
  line-height: 1.6;
  list-style: circle;
}
  }
/* Swipe */
.swipe {
  position: relative;
  margin: auto;
  width: size(1500);
  height: size(753);
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
  border-radius: size(20);
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
  right: 2.5em;
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
    border:  0.105em solid $pagination-active;
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
  padding: 11vw 0 1vw;
  background:none;
  }
  .img{width: sizem(300);left: sizem(45);bottom: sizem(-50);}
  .txt{
    position: relative;
    width: sizem(345);
    margin:-2em auto 4em;
    padding: 3em 1em 1.3em;
    left:0;
    top:0;
    font-size: sizem(15);
    border-radius: sizem(10);
    .title{
      font-size:1.37em;
      flex-wrap: wrap;
  &::after{width: 100%;flex: 0 0 100%;
  display: block;margin: .3em 0 0.3em 0;}
    }
    .subtitle{
      font-size:1.1em;
    }
  }
  /* Swipe */
  .swipe {
    position: relative;
    width: sizem(345);
    height: sizem(352);
    top:0;
    left:0;
    background: #FFF;
    border: sizem(15) solid #FFF;
    border-radius: sizem(10);
  }
.swipe-item {
  img {
  border-radius: sizem(10);}
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
          img: isMobile?require('./s4/1_m.jpg'):require('./s4/1.jpg'),
          name: '文中八公園',
        },
        {
          img: isMobile?require('./s4/2_m.jpg'):require('./s4/2.jpg'),
          name: '三友黃昏市場 示意',
        },
        {
          img: isMobile?require('./s4/3_m.jpg'):require('./s4/3.jpg'),
          name: '中山北路機能情境',
        },
        {
          img: isMobile?require('./s4/4_m.jpg'):require('./s4/4.jpg'),
          name: '新民公園',
        },
        {
          img: isMobile?require('./s4/5_m.jpg'):require('./s4/5.jpg'),
          name: '水碓市民活動中心 示意',
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
