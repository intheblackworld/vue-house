<template>
  <div>
    <div class="section5">
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <img src="./s5/light.png" class="light" />
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
      <div class="title" data-aos="fade-up" data-aos-delay="200">便利交通網 行動不受限</div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">輕軌新市一路站4分鐘，捷運淡水站6分鐘，公車站牌1分鐘，16條以上路線去哪都方便。 
</div>
      </div>
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
  padding: 5vw size(198) 4vw;
&::after{content: "";clear: both;display: block;}
}

.txt{
float: left;
  position: relative;
  width: size(635);
  height: size(708);
  padding: 0 size(40);
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(19);
  font-weight: 400;
  line-height: 1.4;
  z-index: 2;
  margin-right: 0;
  background: #FFF;
  border-radius: size(20);
  display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }

.title{
  font-size:2.2em;
  margin:0 auto 0;
  color: #444;
  font-weight: 600;
  width: 100%;
  &::after{display: block;
    height: 2px;content: "";background: #CF5700;margin: 0 auto;width: 100%;
  }
}
  .subtitle{font-size: 1.25em;
    padding:.75em 0 0 0;
  }
.desc {
 // margin:1em auto;
  padding:1em 0 0 0;
  line-height: 1.6;
  letter-spacing:0.05em;
  list-style: circle;
  overflow: hidden;
  li{list-style:inherit;float: left;margin: 0.3em 0 0.3em 1.4em;width:calc(100% - 1.4em);
  }
}
.light{position: absolute;
  width: size(100);
z-index: 3;
top: size(-35);right: size(-20);
      animation: light3 2s linear infinite;
    }
@keyframes light3{
    0%{
      transform:rotate(-90deg) scale(0);opacity: 1;
    }
    50%{
      transform:rotate(0deg)  scale(.8,1.5);opacity: 1;
    }
    100%{
      transform:rotate(90deg) scale(1.5,.8);opacity: 0;
    }
}

/* Swipe */

.swipe {position: relative;
float: right;
 // position: absolute;
  width: size(840);
  height: size(668);
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
  &::before{
    content: "";
    position: absolute;
    top: size(0);right:size(-20);
    width: 100%;
    height: calc(100% + #{size(40)});
    background: #fff5;
    z-index: 1;
  border-radius: size(40);
  }
  &::after{
    content: "";
    position: absolute;
    top: size(13);right:size(-7);
    width: 100%;
    height: 100%;
    background: linear-gradient(-135deg, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 20%);
    z-index: 1;
  border-radius: size(27);
  }
  img {position: relative;
    z-index: 3;top: size(20);
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
  bottom: size(0);
  right:calc(100% + 50 * 100vw / 1920);
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
  .section5 {
    width: 100%;
    height: auto;
    padding: 0 0 sizem(190) 0;
  background-size: 250% auto;

  }
  .bg{position: absolute;left: 0;top:auto;bottom:sizem(0);width: 100%;}
.img{width: sizem(320);right:sizem(-20);top:auto;bottom:sizem(-10);}
  .txt{
    position: relative;
    width: sizem(320);
    float: none;
    margin:0em auto 0;
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
  name: 'section5',

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
          img: isMobile?require('./s5/1_m.jpg'):require('./s5/1.jpg'),
          name: '台中市政府',
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
