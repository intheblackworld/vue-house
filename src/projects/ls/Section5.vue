<template>
  <div>
    <div class="section5">
      <div class="box">
       <img src="./s1/start1.png" class="start1" />
      </div>
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
     <!--  --><div class="pagination absolute flex-ac" v-if="isPC">
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div> 
      </div>
      <div class="txt">
      <div class="title" data-aos="fade-up" data-aos-delay="200">健康動一動<br v-if="isMobile" />  溪北公園＋體育園區 </div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">來個說動就動的健康生活吧！近溪北生態休閒公園、溪洲公園、大漢溪水岸公園，結合水源運動公園、板樹體育館、樹林體育園區，高綠覆率活氧生活，就在【樂晴】！
</div>
      </div>
    <bear class="bear" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width:100%;
  height:auto;
  position: relative;
  margin:0 auto 0;
  padding: 10vw size(198) 10vw;
&::after{content: "";clear: both;display: block;}
}
.box{
  background: #64BBBA;
  position: absolute;
  top: calc(50% - 650 * 50vw / 1920);
  left: size(170);
  width: size(650);
  height: size(650);
  font-size: size(85);
  border-radius:1em;
  transform: rotate(-45deg);
&::before{content: "";width: 100%;display: block;height: 100%;
border-radius:1em;
  border: 2px solid #CA2458;
  transform: rotate(5deg);
}
.start1{
    position: absolute;
    top:size(-40);left:size(250);
    font-size:size(21);
filter: drop-shadow(0em 0.1em 0.15em rgba(0, 0, 0, 0.25));
    width:3em;}
}
.bear{
  position: absolute;
  left: size(170);
  bottom: size(25);
  width: size(235);
  z-index: 3;pointer-events: none;
}

.txt{
float: left;
  position: relative;
  width: size(590);
  height: size(560);
  padding: 0 0;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(19);
  font-weight: 400;
  line-height: 1.4;
  z-index: 1;
  margin-right: 0;
  border-radius: size(20);
  display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }

.title{
  font-size:2.19em;
  letter-spacing: -0.01em;
  margin:0 auto 0;
  font-weight: 600;
  width: 100%;
  text-shadow: 0 0.1em 0.1em  rgba(0, 0, 0, 0.25);
}
  .subtitle{font-size: 1.25em;
    padding:.75em 0 0 0;
  }
.desc {
 // margin:1em auto;
  padding:1em 0 0 0;
  line-height: 1.6;
  list-style: circle;
  overflow: hidden;
  li{list-style:inherit;float: left;margin: 0.3em 0 0.3em 1.4em;width:calc(100% - 1.4em);
  }
}

/* Swipe */

.swipe {position: relative;
float: right;
 // position: absolute;
  width: size(840);
  height: size(560);
// top: size(185);
 // left: size(210);
  margin-left: 0;
  z-index: 2;
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
  border-radius: size(30);
  box-shadow: size(10) size(10) size(15) #0004;
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
  right:calc(100% + 380 * 100vw / 1920);
  justify-content: center;
  font-size: size(20);
  transform: translateX(50%);

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
  .section5 {
    width: 100%;
    height: auto;
    padding: 0 0 sizem(70) 0;

  }
.box{
  width: sizem(450);
  height: sizem(450);
  top: sizem(140);
  left: sizem((375 - 450) * .5);
  font-size: sizem(65);
.start1{
    top:sizem(350);
    left:sizem(90);
    font-size:sizem(12);}
}
.bear{
  right: sizem(24);
  bottom: sizem(20);
  width: sizem(135);
}
  .txt{
    width: sizem(335);
    height: auto;
    float: none;
    margin:0em auto 0em;
    padding: 2em 1em 11em;
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
    float: none;
    width: sizem(345);
    height: sizem(250);
    margin: auto;
  }
  .slide-name {
    font-size: sizem(12);
  }
.swipe-item {
  img {
  border-radius: sizem(20);}
}
  .swipe-btns {
  font-size: sizem(15);top: sizem(6);
  }
}
</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import bear from './bear.vue'

export default {
  name: 'section5',
  components: {
    bear,
  },

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
          img: require('./s5/1.jpg'),
          name: '溪北生態休閒公園',
        },
        {
          img: require('./s5/2.jpg'),
          name: '板樹體育館',
        },
        {
          img: require('./s5/3.jpg'),
          name: '大漢溪水岸公園',
        },
        {
          img: require('./s5/4.jpg'),
          name: '樹林體育園區',
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
