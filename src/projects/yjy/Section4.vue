<template>
  <div>
    <div class="section4">
      <img src="./s4/fly.png" alt="" data-aos="fade" class="img" />
      <img src="./s4/flower.png" alt="" data-aos="fade" class="flower" />
      <img src="./s4/style.png" alt="" data-aos="fade" class="style" />
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
      <div class="title" data-aos="fade-up" data-aos-delay="200">捷運燙金實力</div>
      <div class="subtitle" data-aos="fade-up" data-aos-delay="200">萬大線預定站約350米　樹林火車站讀秒即達</div>

      <div class="linestyle" data-aos="fade-up" data-aos-delay="200">
        <div class="lineicon"> <img src="./s4/lineicon.png" alt=""/> </div>
      </div>

      <div class="desc" data-aos="fade-up" data-aos-delay="300">鄰近萬大樹林線LG16育林國小預定站，未來連結板南線、中和線、機場線，坐享金鑽級能量。結合市心樹林火車站，搭配台65線連接國道3號，南來北往，快速串聯土城、板橋、台北核心。
</div>
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
  margin:0 auto 0;
  padding: 10vw 0 10vw;
  //background: url("./s1/bg.jpg") center;
  background-size: 100% auto;

&::after{content: "";clear: both;display: block;}
}
.bg{position: absolute;left: 0;top: 0;width: 100%;}

.flower{
position: absolute;
width: size(280); 
left:size(0);
top:size(80);
z-index: 5;
transform: rotate(0deg) skewY(5deg);
transform-origin: 0% 100%;
animation: flower 5s ease-out alternate infinite;
}


@keyframes flower {
    to {
    transform: rotate(-0deg) skewY(-10deg);
    }
  }

.style{
 position: absolute; 
 width: size(600); 
 right: size(-50);
 bottom: size(-360);
 mix-blend-mode: multiply;
}  

.img{
width: size(180);
position: absolute;
right:size(350);
top:size(250);
transform-origin:100% 50% ;
z-index: 2;
transform: translate(10%, 10%);
animation: fly 2s linear infinite;
animation-direction: alternate;
}

@keyframes fly{
    0%{
      transform: translate(10%, 10%);
    }

    100%{
      transform: translate(0%, 0%);
    }
}

.txt{
  float: right;
  position: relative;
  padding-top: 11.5vw;
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
  color: #000;
}
  .subtitle{
  font-size: 1.25em;
  color: #8E8E8E;
  padding:.75em 0 0 0;
  }

.linestyle{
  width: size(60);
  position:absolute;
  border-top:1px solid #F5BCBC;
  top:size(315);
  left:size(480);

  .lineicon{
  
  img{
  position:absolute;
  width: size(30);
  top:size(-15);
  right:size(-40);
  }
  
  }

}

.desc {
 // margin:1em auto;
 color: #000;
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
  .section4 {
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
          img: require('./s4/1.jpg'),
          name: '樹林車站',
        },
        {
          img: require('./s4/2.jpg'),
          name: '台65線',
        },
        {
          img: require('./s4/3.jpg'),
          name: '國道三號',
        },
        {
          img: require('./s4/4.jpg'),
          name: '捷運示意圖',
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
