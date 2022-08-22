<template>
  <div>
    <div class="section9">
<div class="img" data-aos="zoom-in"><img src="./s9/img1.png" alt="img" /><img src="./s9/img2.png" alt="img" /><img src="./s9/img3.png" alt="img" /></div>

      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
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
      <div class="title" data-aos="fade-up" data-aos-delay="200" >外觀大標</div>
      <div class="subtitle" data-aos="fade-up" data-aos-delay="200">外觀小標</div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">外觀內文外觀內文外觀內文外觀內文外觀內文外觀內文外觀內文外觀內文外觀內文外觀內文外觀內文外觀內文外觀內文外觀內文外觀內文</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section9 {  
  width:100%;
  height:auto;
  position: relative;
  padding: 5vw 0 5vw;
  background: #FFF;
  
}
.img{width: size(601);position: absolute;right:size(0);
    bottom: -4vw;
z-index: 2;
img{
  width: 100%;
  position:absolute;
  top: 0;
  left: 0;
  &:first-child{
  position:relative;}
  &:nth-child(2){transform:rotate(-3deg);
      animation: an 2s linear alternate infinite}

  &:last-child{transform:translateX(-10%);left: 10%;
      animation: an 3s linear alternate infinite}
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
  margin: 0 auto 8em auto;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(19);
  font-weight: 600;
  line-height: 1.4;
  z-index: 2;
  color: #2C5252;

.title{
  font-size:2.2em;
  margin:.4em auto 0;
  font-weight: 900;
  color: #002B69;
}
.subtitle{
  font-size:1.3em;
  margin:.5em auto 0;
  letter-spacing:0.03em;
  font-weight: 900;
  color: #A9292C;
}

.desc {
  margin:0.1em auto;
  line-height: 1.6;
  list-style: circle;
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
  .section9 {
    width: 100%;
    height: auto;
    min-height: auto;
    max-height: initial;
  }

.img{width: sizem(290);right: sizem(35);bottom:5vw;}
  .txt{
    position: relative;
    width: sizem(320);
  height:auto;
    margin:1.5em auto 15em;
    left:0;
    top:0;
    font-size: sizem(14);
    .title{
      font-size:1.5em;
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
  name: 'section9',

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
          img: require('./s9/1.jpg'),
          name: '空拍實景圖',
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
