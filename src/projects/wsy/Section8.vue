<template>
    <div class="section8">
      <div class="o" data-aos="zoom-in"></div>

    <div class="c" data-aos="fade" data-aos-delay="0" data-aos-duration="1900">
      
      <div class="c1"><img src="./all/1.png" alt="1"></div>
      <div class="c2"><img src="./all/3.png" alt="3"></div>
    </div>
      <div class="box">
      <div class="title" data-aos="fade" data-aos-delay="0">嚴選安心建材  安居好住</div>
      <div class="desc" data-aos="fade-down" data-aos-delay="200">
        殷實建築，在地耕耘，鼎翊建設多年紮根淡水，十年磨一劍，「文學苑」先建後售，以最懂淡水天時地利的家，最值得您的信賴。
      </div>

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
      <div class="subtitle" data-aos="fade" data-aos-delay="200" ><img loading="lazy" src="./s8/1.png" alt="和成衛浴">和成衛浴</div>
      <div class="desc" data-aos="fade" data-aos-delay="400">90年衛浴領導品牌，首創Adb奈米防汙抗菌技術，並改良馬桶水路與沖水機制，以人性、科技、時尚、創新的設計，符合完美生活體驗。</div>
     <!-- <ul class="desc">
        <li data-aos="fade-up" data-aos-delay="300">日月光廣場＋家樂福+延吉+學府商圈享樂全能購足</li>
        <li data-aos="fade-up" data-aos-delay="400">清水國小＋中正國中，書香校園承載孩子金色未來</li>
        <li data-aos="fade-up" data-aos-delay="500">土城體育場 + 運動中心＋大清運動公園運森度呼吸</li>
      </ul>  -->
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
      <div class="subtitle" data-aos="fade" data-aos-delay="200" ><img loading="lazy" src="./s8/2.png" alt="櫻花淨水器">櫻花淨水器</div>
      <div class="desc" data-aos="fade" data-aos-delay="400">
        業界唯一永久免費淨水器健檢，產品皆通過國際SGS檢測，達國家飲用水標準；高精密度碳纖，濾淨效能更佳。</div>
     <!-- <ul class="desc">
        <li data-aos="fade-up" data-aos-delay="300">日月光廣場＋家樂福+延吉+學府商圈享樂全能購足</li>
        <li data-aos="fade-up" data-aos-delay="400">清水國小＋中正國中，書香校園承載孩子金色未來</li>
        <li data-aos="fade-up" data-aos-delay="500">土城體育場 + 運動中心＋大清運動公園運森度呼吸</li>
      </ul>  -->
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
      <div class="subtitle" data-aos="fade" data-aos-delay="200" ><img loading="lazy" src="./s8/3.png" alt="三星電子鎖">三星電子鎖</div>
      <div class="desc" data-aos="fade" data-aos-delay="400">智慧感應解鎖開門，快速精確，並具火災安全警報機制，捍衛家居安全；符合歐盟RoHS標準，不含對人體有害物質。</div>
     <!-- <ul class="desc">
        <li data-aos="fade-up" data-aos-delay="300">日月光廣場＋家樂福+延吉+學府商圈享樂全能購足</li>
        <li data-aos="fade-up" data-aos-delay="400">清水國小＋中正國中，書香校園承載孩子金色未來</li>
        <li data-aos="fade-up" data-aos-delay="500">土城體育場 + 運動中心＋大清運動公園運森度呼吸</li>
      </ul>  -->
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
  line-height: 1.2;
  font-weight: 400;
  padding: 0;
  font-size: size(17);
  color: #666;

  .box{
  width: size(1500);
  margin:0em auto 14em;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
    align-items:stretch;
  position: relative;
  }
}
.o{
  position: absolute;
  top:size(-85);
  left:calc(50% - 10.5vw);
  width: calc(2 * 10.5vw);
  height:calc(2 * 10.5vw);
  border-radius: 50%;
background: linear-gradient(to bottom, rgba(220,60,0,0.12) 0%,rgba(220,60,0,0) 100%);}
.c{
      position: absolute;left:0;right:0;
      top:0;
      div{
        position: absolute;
        animation:an 5s ease-in-out infinite alternate;
        img{width: 100%;}
      }
    .c1{
      width:size(320);top:size(-70);right: size(-19);
      transform:rotate(3deg);
      transform-origin: 50% 50%;
    animation-delay: -1s;
      img{width: 100%;
      transform:rotate(-49deg)scaleX(-1);}}
    .c2{
      width:size(700);top:size(-80);left: size(-230);
      transform:rotate(3deg);
      transform-origin: 50% 50%;
      img{width: 100%;
      transform:rotate(0deg);}}
  }
@keyframes an{
    to{
      transform: translateX(0);
    }
}
.list{
  flex:0 0 size(470);
  width: size(470);
  position: relative;
}
.title{
  position: relative;
  font-size: size(40);
  margin:1em auto 0em;
  letter-spacing:0.04em;
  color: #bb9259;
  font-weight: 700;
  width: 100%;
}
.desc {
  margin:1em auto 3em auto;
  line-height: 2;
  letter-spacing:0.05em;
  list-style: circle;
  overflow: hidden;
  width: 100%;
}

.txt{
  position: relative;
  z-index: 3;


.subtitle {
  position: relative;
  font-size: size(23);
  margin:1.5em auto 0em;
  width: 100%;
  display: flex;
  justify-content:space-between;align-items:flex-end;
  letter-spacing:0.04em;
  color: #bb9259;
  font-weight:700;
      transform: scale(1.2);
      img{height:4em;}
}

.hr{background: none;border: 0;opacity: .5;
      transform: scale(1.2);
border-bottom:1px solid currentColor;}
.desc {
  line-height: 2;
  letter-spacing:0.05em;
  list-style: circle;
      transform: scale(1.2);
  overflow: hidden;
  text-align: justify;
  li{list-style:inherit;float: left;margin: 0.3em 0 0.3em 1.4em;width:calc(100% - 1.4em);
  }
}
  }

/* Swipe */
.swipe {
//  position: absolute;
  width:100%;
  height: size(420);
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
  padding: 0 0 3em;
  .box{
  width:100%;
  flex-direction:column;    margin: 0em auto 6em;
  }

  }
  
.o{
  position: absolute;
  top:sizem(-85);
  left:calc(50% - 33vw);
  width: calc(2 * 33vw);
  height:calc(2 * 33vw);
  border-radius: 50%;
background: linear-gradient(to bottom, rgba(220,60,0,0.12) 0%,rgba(220,60,0,0) 100%);}
  
  .c{
    height: 100%;
    .c1{
      width:sizem(120);top:sizem(-170);right: sizem(-19);
      }
    .c2{
      width:sizem(300);bottom:sizem(430);left: sizem(100);
      top: auto;
  }
  }
.list{
  flex:0 0 100%;
  width: 100%;
  position: relative;
}
.title{
    font-size: sizem(30);
  letter-spacing:0.01em;
  text-align: center;
}
  .desc {
  letter-spacing:0em;
    width: sizem(320);
  }
  .txt{
  position: relative;
    width: sizem(320);
margin:0em auto 0em;
padding: 0 0 3em;
  left:0;
  top:0;
  .subtitle {
    font-size: sizem(16);
  letter-spacing:0em;
  margin:0.5em auto 0em;
  }
  .desc {
  letter-spacing:0em;
  }
  }

  /* Swipe */
  .swipe {
    position: relative;
    width:  sizem(320);
    height: sizem(240);
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
          name: '示意圖',
        },
      ],

      slideList2: [
        {
          img: require('./s8/2.jpg'),
          name: '',
        },
      ],
      slideList3: [
        {
          img: require('./s8/3.jpg'),
          name: '',
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
