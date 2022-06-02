<template>
    <div class="section8">
      <div class="w"></div>
      <div class="box">
      
      <div class="img" v-if="isMobile"><img src="./all/img.png" alt="img" loading="lazy"></div>
      <div class="title" data-aos="fade" data-aos-delay="0">嚴選精品標配，優雅時尚美學<span v-if="!isMobile"><img src="./all/img.png" alt="img"></span></div>
      <div class="desc1">名流設計師精心規劃配置，豪華級配備樣樣齊全，成就低調奢華的優雅日常。</div>
      <div class="list">
              <div class="swipe swipe1" data-aos="fade" data-aos-delay="100" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(1)" v-touch:swipe.right="() => addMultiIndex(1)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList1" v-show="slideIndex1 === i" :key="slide.img" :class="`swipe-item absolute`">
              <img loading="lazy" :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
     <!--     <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <img loading="lazy" src="./all/prev-btn.png" alt="" class="prev-btn" @click="decMultiIndex(1)">
            <img loading="lazy" src="./all/next-btn.png" alt="" class="next-btn" @click="addMultiIndex(1)">
          </div> -->
        </div>
      </div>
        <div class="txt">
      <div class="subtitle" data-aos="fade" data-aos-delay="200" ><span><b>德國/淨水系統 <i>grunbeck</i></b></span><img loading="lazy" src="./s8/1.png" alt="德國/頂級廚具 LEICHT"></div>
      <ul class="desc">
        <li data-aos="fade-up" data-aos-delay="300">德國格溫拜克社區淨水系統，還原每一滴純淨用水</li>
      </ul>
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
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
        <!--  <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <img loading="lazy" src="./all/prev-btn.png" alt="" class="prev-btn" @click="decMultiIndex(2)">
            <img loading="lazy" src="./all/next-btn.png" alt="" class="next-btn" @click="addMultiIndex(2)">
          </div> -->
        </div>
      </div>
      <div class="txt">
        <div class="subtitle" data-aos="fade" data-aos-delay="200" ><span><b>美國/精品廚櫃 <i>KOHLER</i></b></span><img loading="lazy" src="./s8/2.png" alt="美國/衛浴設備 KOHLER"></div>
        <ul class="desc">
          <li data-aos="fade-up" data-aos-delay="300">百年品牌精品廚具，耐用耐刮堅固實用</li>
        </ul>
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
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
       <!--   <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <img loading="lazy" src="./all/prev-btn.png" alt="" class="prev-btn" @click="decMultiIndex(3)">
            <img loading="lazy" src="./all/next-btn.png" alt="" class="next-btn" @click="addMultiIndex(3)">
          </div>-->
        </div>
      </div>
      <div class="txt">
        <div class="subtitle" data-aos="fade" data-aos-delay="200" ><span><b>美國/精品衛浴 <i>KOHLER</i></b></span><img loading="lazy" src="./s8/2.png" alt="德國/科技廚房 BOSCH"></div>
        <ul class="desc">
          <li data-aos="fade-up" data-aos-delay="300">百年品牌精品衛浴，智慧恆溫三段式淋浴龍頭</li>
          <li data-aos="fade-up" data-aos-delay="400">環保抗汙免治馬桶，360度全方位沖洗</li>
        </ul>
      </div>
        <!--      <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList2" :key="slide.img + '-dot'" @click="goToMultiIndex(2, index)"><span :class="`${slideIndex2 === index ? 'active' : ''}`"></span></div>
          </div>-->
      </div>
      <div class="list">
      <div class="swipe swipe3" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(4)" v-touch:swipe.right="() => addMultiIndex(4)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList4" v-show="slideIndex2 === i" :key="slide.img" :class="`swipe-item absolute`">
              <img loading="lazy" :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
       <!--   <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <img loading="lazy" src="./all/prev-btn.png" alt="" class="prev-btn" @click="decMultiIndex(3)">
            <img loading="lazy" src="./all/next-btn.png" alt="" class="next-btn" @click="addMultiIndex(3)">
          </div>-->
        </div>
      </div>
      <div class="txt">
        <div class="subtitle" data-aos="fade" data-aos-delay="200" ><span><b>義大利/洗脫烘機 <i>INDESIT</i></b></span><img loading="lazy" src="./s8/4.png" alt="德國/淋浴設備 Hansgrohe"></div>
        <ul class="desc">
          <li data-aos="fade-up" data-aos-delay="300">歐盟A級認證，義大利原裝三機一體洗脫烘機</li>
          <li data-aos="fade-up" data-aos-delay="400">微電腦偵測衣物，自動調節省水省電</li>
        </ul>
      </div>
        <!--      <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList2" :key="slide.img + '-dot'" @click="goToMultiIndex(2, index)"><span :class="`${slideIndex2 === index ? 'active' : ''}`"></span></div>
          </div>-->
      </div>
      <div class="img"><img src="./all/img.png" alt="img"></div>
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
.w{
  position: absolute;
width:size(490);
height:size(59 * 6);
overflow: hidden;
top:size(890);
right: 0;
  &::after{content: "";display: block;
  width: calc(100% + (100vw * 88 / 1920));
  height:100%;
  background: url("./all/w.png") 0 0;
  background-size: size(88) auto;
  position: relative;
      transform: translateX(size(-88));
      animation: an 2s linear infinite;
  }
}
@keyframes an{
    to{
      transform: translateX(0);
    }
}

.img{margin: auto;width:11em;
    border-bottom: 2px solid #002840;
    img{vertical-align:bottom;width:size(99);}
    }
.list{
  flex:0 0 size(720);
  width: size(720);
  position: relative;
}
.title{
  position: relative;
  display: flex;
  justify-content:space-between;align-items:flex-end;
  font-size: size(44);
  margin:1.5em auto 0.5em;
  letter-spacing:0em;
  color:$title;
  font-weight: 800;
  width: 100%;
  text-align: left;
  span{
    display:inline-block;
    width: calc(100% - 14em);
    border-bottom: 2px solid #002840;
    margin: 0 0 0.1em 0;
  }
  img{height:1.25em;float: right;margin: 0 1em 0 0;}
}
.desc1{
  width: 100%;
  font-size: size(19);
  text-align: justify;
  margin:0em auto 3em auto;
}
.txt{
  position: relative;
  z-index: 3;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(19);
  font-weight: 400;
  z-index: 3;
  margin: 0 0 8em 0;

.subtitle {
  position: relative;
  font-size: size(18);
  margin:1.5em auto 0em;
  width: 100%;
  display: flex;
  justify-content:space-between;align-items:flex-end;
  letter-spacing:0.04em;
  color:#0094ca;
  font-weight: 800;
      transform: scale(1.2);
      img{height:3.65em;}
      b{font-size: 1.58em;display: inline-block;
      margin: 0.4em 0 0 0;
  font-weight: 800;
  color:$title;}
  i{font-style:normal;}
}

.desc {
  width: 100%;
  line-height: 1.5;
  margin:1em auto 3em auto;
  letter-spacing:0.05em;
  list-style: circle;
  overflow: hidden;
  text-align: justify;
  color: #666;
  li{list-style:inherit;float: left;margin: 0.2em 0 0.2em 1.4em;
  width:calc(100% - 1.4em);
  }
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

.swipe-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
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
    color: #fff;
   text-shadow:0 0.1em 0.3em #000;
  }
}

.pagination {
  width: auto;
  bottom:16em;
  right:0;
  justify-content: center;
  font-size:size(13);
}

.pagination-dot {
  padding:0.3em;
  margin: 0 0.3em;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 1em;
    height: 1em;
   // border-radius: 50%;
   // border: 4px solid  #ccc;
   background: #ccc;
    position: relative;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      display: block;
   background: #80c5b6;
   // border-radius: 50%;
   // border: 2.1px solid  #e38023;
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
        top: 0%;
        left: 0%;
        transform: scale(1);
      }
    }
  }
}

.swipe-btns {
  width: 100%;
  height: 100%;
  padding: 0 15px;
  z-index: 3;

  .prev-btn,
  .next-btn {
    width: size(20);
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
      slideList4: [
        {
          img: require('./s8/4.jpg'),
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
