<template>
  <div class="section8">
    
    <div class="box">
      <div class="list">
            <div class="swipe swipe1" data-aos="fade" data-aos-delay="100" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(1)" v-touch:swipe.right="() => addMultiIndex(1)">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList1" v-show="slideIndex1 === i" :key="slide.img" :class="`swipe-item absolute`">
            <img loading="lazy" :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name" v-if="slide.name"></div>
          </div>
        </transition-group>
   <!--     <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
          <img loading="lazy" src="./all/prev-btn.png" alt="" class="prev-btn" @click="decMultiIndex(1)">
          <img loading="lazy" src="./all/next-btn.png" alt="" class="next-btn" @click="addMultiIndex(1)">
        </div> -->
      </div>
    </div>
      <div class="txt">
    <div class="subtitle" data-aos="fade" data-aos-delay="200" ><span>Rinnai廚具</span><img loading="lazy" src="./s8/1.png" alt="Rinnai廚具"></div>
      </div>
        <!--  <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList1" :key="slide.img + '-dot'" @click="goToMultiIndex(1, index)"><span :class="`${slideIndex1 === index ? 'active' : ''}`"></span></div>
        </div> -->
    </div>
    <div class="list">
    <div class="swipe swipe2" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(2)" v-touch:swipe.right="() => addMultiIndex(2)">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList2" v-show="slideIndex2 === i" :key="slide.img" :class="`swipe-item absolute`">
            <img loading="lazy" :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name" v-if="slide.name"></div>
          </div>
        </transition-group>
      <!--  <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
          <img loading="lazy" src="./all/prev-btn.png" alt="" class="prev-btn" @click="decMultiIndex(2)">
          <img loading="lazy" src="./all/next-btn.png" alt="" class="next-btn" @click="addMultiIndex(2)">
        </div> -->
      </div>
    </div>
    <div class="txt">
      <div class="subtitle" data-aos="fade" data-aos-delay="200" ><span>英國原裝進口 Doulton 陶瓷蕊心</span><img loading="lazy" src="./s8/2.png" alt="英國原裝進口 Doulton 陶瓷蕊心"></div>
    </div>
     <!--     <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList2" :key="slide.img + '-dot'" @click="goToMultiIndex(2, index)"><span :class="`${slideIndex2 === index ? 'active' : ''}`"></span></div>
        </div>   -->
    </div>
    <div class="list">
    <div class="swipe swipe3" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(3)" v-touch:swipe.right="() => addMultiIndex(3)">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList3" v-show="slideIndex2 === i" :key="slide.img" :class="`swipe-item absolute`">
            <img loading="lazy" :src="slide.img" alt="">
            <div class="slide-name absolute" v-html="slide.name" v-if="slide.name"></div>
          </div>
        </transition-group>
     <!--   <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
          <img loading="lazy" src="./all/prev-btn.png" alt="" class="prev-btn" @click="decMultiIndex(3)">
          <img loading="lazy" src="./all/next-btn.png" alt="" class="next-btn" @click="addMultiIndex(3)">
        </div>-->
      </div>
    </div>
    <div class="txt">
      <div class="subtitle" data-aos="fade" data-aos-delay="200" ><span>耶魯三合一電子鎖</span><img loading="lazy" src="./s8/3.png" alt="耶魯三合一電子鎖"></div>
    </div>
      <!--      <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList2" :key="slide.img + '-dot'" @click="goToMultiIndex(2, index)"><span :class="`${slideIndex2 === index ? 'active' : ''}`"></span></div>
        </div>-->
    </div>
  </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
width:100%;
height:auto;
position: relative;
font-stretch: normal;
font-style: normal;
text-align: center;
line-height: 1.3;
font-weight: 400;
padding: 0;
font-size: size(19);

.box{
width: size(1500);
margin:0em auto 3em;
display: flex;
flex-wrap: wrap;
justify-content:space-between;
  align-items:stretch;
position: relative;
}
}


.img{margin: auto;width:11em;
  border-bottom: 2px solid #002840;
  img{vertical-align:bottom;width:size(99);}
  }
.list{
flex:0 0 size(480);
width: size(480);
position: relative;
}
.txt{
  position: relative;
  margin: 1em auto 3em auto;
  z-index: 2;
  @include txt(size(18));
  .subtitle {
    position: relative;
    font-size: size(18);
    margin:1.5em auto 0em;
    width: 100%;
    display: flex;
    justify-content:space-between;align-items:flex-end;
    letter-spacing:0.04em;
    color:#FFF;
    font-weight: 800;
    transform: scale(1.2);
    img{height:3.65em;}
    i{font-style:normal;}
  }
}


/* Swipe */
.swipe {
//  position: absolute;
width:100%;
height: size(470);
top: size(185);
right: size(199);
object-fit: cover;
z-index: 3;
order:3;
}
@include swipe();


.pagination {
width: auto;
bottom:16em;
right:0;
justify-content: center;
font-size:size(13);
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
.section8 {
  width: 100vw;
  height: auto;
  font-size: sizem(15);
  text-align: justify;
padding: 0 ;
.box{
  width: sizem(320);
flex-direction:column;margin: 0em auto 6em;
}
}
$ww:sizem(33);
.w{
width:sizem(150);
top:sizem(1000);
left: auto;
right:sizem(-30);
height:calc( #{$ww} * 0.67 * 5);
&::after{
width: calc(100% + #{$ww});
background-size: $ww auto;
transform: translateX(-#{$ww});
}
}
.img{
width:100%;
text-align: center;
img{width:5.5em;}
}

.list{
flex:0 0 100%;
width: 100%;
position: relative;
}
.title{
  font-size: sizem(23);
letter-spacing:0.01em;
text-align: center;
display: block;
}
.txt{
  width:100%;
margin:0em auto 0em;
padding: 0 0 3em;
font-size: sizem(15);
.subtitle {
  font-size: sizem(14.3);
display: block;
position: relative;
    img{height:2.8em;position: absolute;
    top: .2em;
    right: 0;}
i{display: none;}
}
.desc {
list-style: circle;
li{margin: 0.2em 0 0.2em 2em;
width:calc(100% - 2em); }
}
}

/* Swipe */
.swipe {
  position: relative;
  width:100%;
  height: sizem(210);
  min-height: auto;
  margin: auto;
  top:0;
  left:0;
order:initial;
}


.swipe-item {
.slide-name {
  font-size: sizem(12);
}
}

.swipe-btns {

  .prev-btn,
  .next-btn {
    width: sizem(15);
    cursor: pointer;
  }
}
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
name: 'section8',

mixins: [slider],
props: ['viewIndex'],

data() {
  return {
    isPC,
    isMobile,
    isTablet,
    isDialog: false,
   slideList1: [
      {
        img: require('./s8/1.jpg'),
        name: '情境示意圖',
      },
    ],

    slideList2: [
      {
        img: require('./s8/2.jpg'),
        name: '實景裝修參考圖',
      },
    ],
    slideList3: [
      {
        img: require('./s8/3.jpg'),
        name: '情境示意圖',
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
