<template>
  <div>
    <div class="section6">
      <img v-if="isPC" src="./s6/style.png" alt="" data-aos="fade" class="style" />
      <img v-else src="./s6/style_m.png" alt="" data-aos="fade" class="style" />
      <img v-if="isMobile" src="./s5/flower.png" alt="" data-aos="fade" class="img" />
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
      <div class="title" data-aos="fade-up" data-aos-delay="200" >健康綠意匯聚</div>
      <div class="subtitle" data-aos="fade-up" data-aos-delay="200" >樂遊運動中心　逍遙大同山景</div>

      <div class="linestyle" data-aos="fade-up" data-aos-delay="200">
        <div class="lineicon"> <img src="./s5/lineicon.png" alt=""/> </div>
      </div>

      <div class="desc" data-aos="fade-up" data-aos-delay="300">鄰近樹林國民運動中心，結合東昇公園、原住民主題部落公園及大同山登山步道，接觸綠意，適度平衡工作的辛勞。</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section6 {  
  width:100%;
  height:auto;
  position: relative;
  padding: 10vw 0 5vw;
  //background: url("./s1/bg.jpg") center;
  background-size: 100% auto;
&::after{content: "";clear: both;display: block;}
}
.style{
 position: absolute; 
 width: size(550); 
 left: size(0);
 top: size(-100);
 mix-blend-mode: multiply;
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
  margin:1.5em auto 3em auto;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(19);
  font-weight: 600;
  line-height: 1.4;
  z-index: 2;
  color: #FFF;

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
  width: size(1140);
  position:absolute;
  border-top:1px solid #F5BCBC;
  top:size(95);
  left:size(320);

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
  padding:1em 0 0 0;
  font-weight: 300;
  line-height: 1.6;
  list-style: circle;
  color: #000;
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
    border: 0.2em solid  #C5C5C5;
    position: relative;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
    border-radius: 50%;
    border:  0.105em solid #F39292;
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

.section6 {
    width: 100%;
    height: auto;
    padding: 0 0 sizem(0) 0;
    background-size: 250% auto;
    display: flex;
    flex-direction: column-reverse;
  }
.bg{
position: absolute;
left: 0;
top:auto;
bottom:sizem(0);
width: 100%;
}

.img{
  width: sizem(70);
  left:auto;
  right:sizem(0);
  top:sizem(180);
  bottom:auto;
  z-index: 5;
  transform: rotate(0deg) skewY(5deg);
  transform-origin: 100% 0%;
  animation: flower 5s ease-out alternate infinite;
  }

  @keyframes flower {
    to {
    transform: rotate(-0deg) skewY(-10deg);
    }
  }

.style{
 position: absolute; 
 width: sizem(150); 
 right: auto;
 left: sizem(0);
 bottom: auto;
 top:sizem(-50);
 mix-blend-mode: multiply;
}  
  .txt{
    position: relative;
    width: sizem(320);
    float: none;
    margin:0em auto 0;
    left:0;
    top:0;
    padding-top: 7vw;
    margin: sizem(30) auto sizem(30);
    .title{
      font-size:sizem(30);
    }

    .subtitle{
      font-size:sizem(15);
    }
    .desc {
      font-size:sizem(13);
    }

    .linestyle{
    width: sizem(95);
    left:sizem(190);
    top:sizem(50);
    bottom: auto;

      .lineicon{
        img{
        width: sizem(25);
        top:sizem(-13);
        right:sizem(-35);
        }  
      }
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
  name: 'section6',

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
          img: require('./s6/1.jpg'),
          name: '大同山夜景',
        },
        {
          img: require('./s6/2.jpg'),
          name: '原住民主題部落公園',
        },
        {
          img: require('./s6/3.jpg'),
          name: '東昇公園',
        },
        {
          img: require('./s6/4.jpg'),
          name: '樹林運動中心',
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
