<template>
    <div class="section2">
      <div class="w"></div>
      <div class="tree">
        <img src="./all/tree1.png" alt="tree" class="tree1">
        <img src="./all/tree2.png" alt="tree" class="tree2">
        </div>
      <div class="txt" v-if="!isMobile">
      <div class="title" data-aos="fade-down" data-aos-delay="200" >離塵不離城，家變得更近了</div>
      <div class="desc" data-aos="fade-down" data-aos-delay="300">
        座落新店都市計畫碧潭風景區，約5分鐘車程安坑輕軌，10分鐘步行康橋國際學校，15分鐘信義區剛剛好的車程距離，保留市區的繁華想像，與郊區的寧靜從容。 
      </div>
      </div>
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
      <!--    <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile" >
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div>  -->
        </div>
      </div>
      
      <div class="txt" v-if="isMobile">
      <div class="title" data-aos="fade-down" data-aos-delay="200" >離塵不離城，家變得更近了</div>
      <div class="desc" data-aos="fade-down" data-aos-delay="300">
        座落新店都市計畫碧潭風景區，約5分鐘車程安坑輕軌，10分鐘步行康橋國際學校，15分鐘信義區剛剛好的車程距離，保留市區的繁華想像，與郊區的寧靜從容。 
      </div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {  
  width:100%;
  height:auto;
  position: relative;
  margin:0;
  padding: 0 0 0.8vw;
}
$ww:size(88);
.w{
  position: absolute;
width:size(580);
height:calc( #{$ww} * 0.67 * 6);
overflow: hidden;
top:size(674);
left: 0;
  &::after{content: "";display: block;
  width: calc(100% + #{$ww});
  height:100%;
  background: url("./all/w.png") 0 0;
  background-size: $ww auto;
  position: relative;
      transform: translateX(-#{$ww});
      animation: an 2s linear infinite;
  }
}
.tree{
  position: absolute;
  top:size(-40);
  right:size(210);
  font-size: size(20);
  img{margin: 0 0 0 1em;}
  .tree1{width:2.95em;}
  .tree2{width:2.3em;}
}
@keyframes an{
    to{
      transform: translateX(0);
    }
}
.txt{
  position: relative;
  width: size(1500);
  margin:6.7em auto 0em;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(19);
  font-weight: 400;
  line-height: 1.3;
  z-index: 3;
  }

.title{
  position: relative;
  font-size: size(44);
  margin:0 auto 0;
  letter-spacing:0em;
  color:$title;
  font-weight: 800;
}
.desc {
  margin:.7em auto 1.3em auto;
  line-height: 2;
  letter-spacing:0.05em;
  list-style: circle;
  overflow: hidden;
  li{list-style:inherit;float: left;margin: 0.3em 0 0.3em 1.4em;width:calc(100% - 1.4em);
  }
}
/* Swipe */
.swipe {
  position: relative;
  margin: auto;
  width: size(1500);
  height: size(595);
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
    border: 0.2em solid  #ccc;
    position: relative;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
    border-radius: 50%;
    border:  0.105em solid  #068;
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
  .section2 {
    width: 100%;
    height: auto;
    min-height: auto;
    max-height: initial;
  }


$ww:sizem(33);
.w{
width:sizem(150);
top:sizem(170);
left: auto;
right: 0;
height:calc( #{$ww} * 0.67 * 5);
  &::after{
  width: calc(100% + #{$ww});
  background-size: $ww auto;
  transform: translateX(-#{$ww});
  }
}
.tree{
  position: absolute;
  bottom:sizem(10);
  top: auto;
  font-size: sizem(20);
}

  .txt{
    position: relative;
    width: sizem(310);
    margin:1.5em auto 6em;
    left:0;
    top:0;
    font-size: sizem(15);
  }
.title{
    font-size: sizem(23);
  letter-spacing:0.01em;
}
  /* Swipe */
  .swipe {
    position: relative;
    width: 100%;
    height: sizem(160);
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
          name: '現場實景圖',
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
