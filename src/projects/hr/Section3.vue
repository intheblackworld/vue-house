<template>
    <div class="section3">
    <img src="./s1/bg.png" class="bg" />
    <div class="bgbox"></div>
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
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
      <div class="title" data-aos="fade-up" data-aos-delay="200">周邊三大百貨、商圈<br>步行皆可達</div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">鄰近桃園火車站商圈，步行５分鐘：<br>
遠東百貨、新光三越、統領百貨、美食街、威秀影城，<br>
生活機能便利，適合休閒、約會、洽公。
</div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width:100%;
  height:auto;
  position: relative;
  margin:0 auto 0;
  padding:9vw size(198) 9vw;
&::after{content: "";clear: both;display: block;}
}
.bg{
  position: absolute;
  bottom:0;left:0;width: 100%;transform: translateY(55%);
}
.bgbox{
  position: absolute;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,0.16) 100%);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.bgbox{
  position: absolute;
  background: radial-gradient(ellipse at 50% 30%, rgba(0,0,0,0) 0%,rgba(0,0,0,0.16) 100%);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.txt{
float: right;
  position: relative;
  width: size(635);
  height: size(560);
  padding: 0 size(40) 4em;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(19);
  font-weight: 500;
  line-height: 1.4;
  z-index: 2;
  margin-right: 0;
  display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: flex-start;
  }

.title{
  font-size:2.2em;
  margin:0 auto 0;
  color: #754C24;
  font-weight: 800;
  width: 100%;
}
  .subtitle{font-size: 1.25em;
    padding:.75em 0 0 0;
  }
.desc {
 // margin:1em auto;
  padding:1em 0 0 0;
  line-height: 1.6;
  //letter-spacing:0.05em;
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
  margin-left: 0;
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
    text-align: left;
   text-shadow:0 0.1em 0.3em #000;
   z-index: 3;
}

.swipe-wrap {
  width: 100%;
  height: 100%;
}
.swipe-item {
  width: 100%;
  height: 100%;
  z-index: 0; 
  img {position: relative;
    z-index: 3;
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
  left:calc(100% + 50 * 100vw / 1920);
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
  .section3 {
    width: 100%;
    height: auto;
    padding: 0;

  }
  .bg{width:sizem(561);
    transform: translateY(55%);
    bottom:sizem(22);
    left: auto;
    right:sizem(-14);
}
  .txt{
    position: relative;
    width: sizem(315);
    height: auto;
    float: none;
    margin:1.5em auto 0;
    padding:0 0 9em 0;
    font-size: sizem(15);
    border-radius: sizem(10);
    background-size: sizem(193) auto;
    .title{
      font-size:2em;
    }
    .subtitle{
      font-size:1.1em;
    }
  }
  /* Swipe */
  .swipe {
    position: relative;
    width:100%;
    float: none;
    height: sizem(250);
  margin:auto;
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
  name: 'section3',

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
          img:require('./s3/1.jpg'),
          name: '桃園車站',
        },
        {
          img:require('./s3/2.jpg'),
          name: '車站商圈', 
        },
        {
          img:require('./s3/3.jpg'),
          name: 'ATT食尚',
        },
        {
          img:require('./s3/4.jpg'),
          name: '快餐街',
        },
        {
          img:require('./s3/5.jpg'),
          name: '桃園高鐵站',
        },
        {
          img:require('./s3/6.jpg'),
          name: '桃園機場',
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
