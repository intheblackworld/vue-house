<template>
  <div>
    <div class="section10">
      <div class="txt">
      <h3 class="title" data-aos="fade" data-aos-delay="0">
    <img src="./s1/light.png" class="light" /><span>大師陣容 締造湖子內新品味</span><span>CONSTRUCATION TEAM</span></h3>
      </div>


      <div class="box">
      <div class="list">
        <div class="img" v-if="!isMobile" data-aos="fade" data-aos-delay="0">
          <img :src="slideList1[0].img" :alt="slideList1[0].name" />
          <div class="slide-name" v-html="slideList1[0].name"></div>
        </div>
      <div class="swipe swipe1" v-else @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
          <div class="swipe-btns absolute flex-ac flex-jb">
            <div class="prev-btn" @click="decMultiIndex(1)">
            <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='31.5,57 4.5,30 31.5,3 '/%3E%3C/svg%3E" alt="_prev">
            </div>
            <div class="next-btn" @click="addMultiIndex(1)">
            <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='3.5,3 30.5,30 3.5,57 '/%3E%3C/svg%3E" alt="_next">
            </div>
          </div>
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(1)" v-touch:swipe.right="() => addMultiIndex(1)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList1" v-show="slideIndex1 === i" :key="slide.img" :class="`swipe-item absolute`">
              <img loading="lazy" :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
        </div>
      </div>
        <div class="subtxt">
          <div class="title" data-aos="fade" data-aos-delay="200" >耕耘 境好生活｜<span>曾聰憲</span></div>
          <div class="subtitle" data-aos="fade" data-aos-delay="200" >曾聰憲 建築師事務所</div>
          <div class="desc" data-aos="fade" data-aos-delay="400">知名建設御用大師<br />以專業品質遍績北、中、南</div>
        </div>
        <div class="img" v-if="!isMobile" data-aos="fade" data-aos-delay="0"><img :src="slideList1[1].img" :alt="slideList1[1].name" /><div class="slide-name" v-html="slideList1[1].name"></div></div>
        <div class="img" v-if="!isMobile" data-aos="fade" data-aos-delay="0"><img :src="slideList1[2].img" :alt="slideList1[2].name" /><div class="slide-name" v-html="slideList1[2].name"></div></div>
      </div>
      <div class="list">
        <div class="img" v-if="!isMobile" data-aos="fade" data-aos-delay="0"><img :src="slideList2[0].img" :alt="slideList2[0].name" /><div class="slide-name" v-html="slideList2[0].name"></div></div>
      <div class="swipe swipe2" v-else @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
          <div class="swipe-btns absolute flex-ac flex-jb">
            <div class="prev-btn" @click="decMultiIndex(2)">
            <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='31.5,57 4.5,30 31.5,3 '/%3E%3C/svg%3E" alt="_prev">
            </div>
            <div class="next-btn" @click="addMultiIndex(2)">
            <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='3.5,3 30.5,30 3.5,57 '/%3E%3C/svg%3E" alt="_next">
            </div>
          </div>
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(2)" v-touch:swipe.right="() => addMultiIndex(2)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList2" v-show="slideIndex2 === i" :key="slide.img" :class="`swipe-item absolute`">
              <img loading="lazy" :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>          
        </div>
      </div>
        <div class="subtxt">
      <div class="title" data-aos="fade" data-aos-delay="200" >揮灑 美感日常｜<span>李柏賢</span></div>
      <div class="subtitle" data-aos="fade" data-aos-delay="200" >瀚鼎空間設計有限公司</div>
      <div class="desc" data-aos="fade" data-aos-delay="400">超過20年的經驗<br />深具業界口碑的專業服務</div>
        </div>
        <div class="img" v-if="!isMobile" data-aos="fade" data-aos-delay="0"><img :src="slideList2[1].img" :alt="slideList2[1].name" /><div class="slide-name" v-html="slideList2[1].name"></div></div>
        <div class="img" v-if="!isMobile" data-aos="fade" data-aos-delay="0"><img :src="slideList2[2].img" :alt="slideList2[2].name" /><div class="slide-name" v-html="slideList2[2].name"></div></div>
      </div>
      <div class="list">
        <div class="img" v-if="!isMobile" data-aos="fade" data-aos-delay="0"><img :src="slideList3[0].img" :alt="slideList3[0].name" /><div class="slide-name" v-html="slideList3[0].name"></div></div>
      <div class="swipe swipe3" v-else @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
          <div class="swipe-btns absolute flex-ac flex-jb">
            <div class="prev-btn" @click="decMultiIndex(3)">
            <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='31.5,57 4.5,30 31.5,3 '/%3E%3C/svg%3E" alt="_prev">
            </div>
            <div class="next-btn" @click="addMultiIndex(3)">
            <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='3.5,3 30.5,30 3.5,57 '/%3E%3C/svg%3E" alt="_next">
            </div>
          </div>
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(3)" v-touch:swipe.right="() => addMultiIndex(3)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList3" v-show="slideIndex3 === i" :key="slide.img" :class="`swipe-item absolute`">
              <img loading="lazy" :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
        </div>
      </div>
        <div class="subtxt">
      <div class="title" data-aos="fade" data-aos-delay="200" >精鑄 飯店美學｜<span>關歆宜</span></div>
      <div class="subtitle" data-aos="fade" data-aos-delay="200" >關氏坊 空間創意美學</div>
      <div class="desc" data-aos="fade" data-aos-delay="400">20年海內外經驗<br />以獨特品味賦予「美」全新定義</div>
        </div>
        <div class="img" v-if="!isMobile" data-aos="fade" data-aos-delay="0"><img :src="slideList3[1].img" :alt="slideList3[1].name" /><div class="slide-name" v-html="slideList3[1].name"></div></div>
        <div class="img" v-if="!isMobile" data-aos="fade" data-aos-delay="0"><img :src="slideList3[2].img" :alt="slideList3[2].name" /><div class="slide-name" v-html="slideList3[2].name"></div></div>
      </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section10 {  
  width:100%;
  height:auto;
  position: relative;
  margin:0;
  .box{
  width: size(1440);
  margin:0em auto 7em;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
    align-items:stretch;
  position: relative;
  }
}
.gold1{
    top: 83vw;
    right: -14vw;
    width: 19vw;
    filter: drop-shadow(0 0 0.5vw rgba(0, 0, 0, 0.7));
  }
  .gold2 {
    top: 61vw;
    right: -20vw;
    width: 30vw;
    filter: drop-shadow(0 0 0.3vw rgba(85, 27, 0, 0.7));
  }
  .gold3 {
    top: 4.5vw;
    left: -20vw;
    width: 27vw;
    filter: drop-shadow(0 0 0.3vw rgba(85, 27, 0, 0.7));
  }
  .w1{
    stroke:#FFF;
    top: 6vw;
    left: -46vw;
    width: 94vw;
    transform: rotate(99deg);
    z-index: -1;
  }
  .w2{stroke:#7E602E;
    top: 73vw;
    left: -39vw;
    width: 68vw;
    height: 24vw;
    transform: rotate(99deg);
  }
  .w3{stroke:#7E602E;
    top: 73vw;
    right: -39vw;
    width: 68vw;
    height: 24vw;
    transform: rotate(-81deg);
  }

.txt{
  position: relative;
  width: size(1606);
  margin:0 auto 0;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(27);
  font-weight: 700;
  line-height: 1.4;
  z-index: 2;
  font-family: 'Noto Serif TC', serif;

.title{
  font-size:2.2em;
  margin:1.5em auto 0.8em;
  font-weight: 900;
  color: #00537A;
  display: block;
  position: relative;
  line-height: 1.3;
  letter-spacing: 0.06em;
  background: linear-gradient(135deg, #FFF0 5%,#FFF6 22%,#FFF0 44%);
  /*
    */
  &::before,
  &::after{
    content: "";
    display:block;
    height: 1px;
    width:10em;
    background: linear-gradient(to right, rgba(4,102,128,1) 0%,rgba(33,128,164,1) 25%,rgba(4,102,128,1) 50%,rgba(4,102,128,0) 100%);
    margin:0 0 0 0.2em;
    }
  &::before{
    background: linear-gradient(to right, rgba(4,102,128,0) 0%,rgba(33,128,164,0.5) 25%,rgba(4,102,128,1) 50%,rgba(4,102,128,0) 100%);
    margin:0 0 0 2em;
  }
    img{height: 1.5em;
  position: relative;
  vertical-align: middle;
    margin: -.35em .4em -0.03em 0;
    &.light{position: absolute;top: .5em;left: .5em;
      animation: light1 3s linear infinite;}
    }

@keyframes light1{
    0%{
      transform: rotate(180deg) scale(.3);
    }
    50%{
      transform: rotate(0) scale(1);
    }
    100%{
      transform: rotate(-180deg)scale(.3);
    }
}
  span:last-child{
    white-space: nowrap;
  font-size:.85em;
 // background:url("./s5/txtbg.jpg");
 // background-size: cover;
 // background-clip: text;
  font-weight: 400;
  letter-spacing: 0.0em;
  -webkit-background-clip: text;
  vertical-align:-0.05em;
  color: transparent;font-family: 'Cantata One', serif;
  margin: 0 0 0 0.35em;
  filter: drop-shadow(0 0 0.4vw #fffc);
  }

}
  }
.list{
  flex:0 0 size(430);
  width: size(430);
  position: relative;
  &:nth-child(2){margin:7.7vw auto auto;}
  .img{
    width: 100%;
  position: relative;
  box-shadow: .3vw .3vw .7vw #0006;
    img{
    width: 100%;
    object-fit: cover;vertical-align:bottom;
    }
  &:first-child img{height: size(505);}
  &:last-child{margin-top: 1em;}
    .slide-name{position: absolute;bottom: .5em;right: .5em;}
  }
}
.subtxt{
  position: relative;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(27);
  font-weight: 500;
  line-height: 1.4;color: #000;
  margin:1.58em auto 1.3em;
.title{
  font-family: 'Noto Serif TC', serif;font-weight: 700;
  color: #004463;font-size: 1.28em;
    border-bottom: 2px solid #2D6D86;
    padding:0 0 0.75em 0;
  span{font-size: 1.25em;}
  }
  .subtitle{font-size: 1.25em;
    color:#2D6D86;
    padding:.75em 0;
  }
}
/* Swipe */
.swipe {
  position: relative;
  margin: auto;
  width: size(1606);
  height: size(758);
  // left: size(210);
  object-fit: cover;
  z-index: 3;
  box-shadow: .5vw .5vw 1.5vw #0006;
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
  bottom: 8em;
  right: 15.6em;
  justify-content: center;
  font-size: size(15);
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
    border:  2px solid  $pagination;
    position: relative;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
    border-radius: 50%;
   // border:  2px solid  $pagination-active;
   background: #fff;
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
        transform: scale(1.1);
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
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section10 {
    width: 100%;
    height: auto;
    min-height: auto;
    max-height: initial;
  .box{
  width:100%;
  flex-direction:column;    margin: 0em auto 0em;
  }
  }
.gold1{
    top: 283vw;
    right: -12vw;
    width: 23vw;
  }
  .gold2 {
    top: auto;
    bottom: 12vw;
    right: auto;
    left: -20vw;
    width: 31vw;
  }
  .gold3 {
    top: 133.5vw;
    left: -19vw;
  }
  .gold4 {
    bottom: 11vw;
    left: 3vw;
    width: 16vw;
    filter: drop-shadow(0 0 0.3vw rgba(85, 27, 0, 0.7));
  }

  .txt{
    position: relative;
    width: sizem(330);
    margin:1.5em auto 2em;
    font-size: sizem(12);
    .title{
      font-size:1.8em;
  line-height: 1.6;
    img{height: 1.65em;
  position: relative;
  vertical-align: middle;
    margin: -.35em .2em -0.03em 0;
    }
      
  span:last-child{position: absolute;top: 0;left: 0;
  transform: rotate(90deg) translate(20%,-5vw);
  font-size:1.1em;
  transform-origin:0 0;
  }
    }
  }
  
.list{
  width: 100%;
  &:nth-child(2){margin:0 auto auto;}
}

.subtxt{
    font-size: sizem(16);
    width:sizem(310);
  margin:1.58em sizem(20) 3.3em auto;
  text-align: center;
  .title{display: inline-block;}

}
  /* Swipe */
  .swipe {
    position: relative;
    width:sizem(310);
    height: sizem(350);
    margin: 0 sizem(20) 0 auto;
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
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import wimg from './w.vue'


export default {
  name: 'section10',

  mixins: [slider],
  props: ['viewIndex'],
  components: {
    wimg,
  },


  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList1: [
        {
          img: require('./s10/1-1.jpg'),
          name: '',
        },
        {
          img:isMobile?require("./s9/1m.jpg"):require("./s10/1-2.jpg"),
          name: '太和1 外觀3D示意圖',
        },
        {
          img:isMobile?require("./s9/2m.jpg"):require("./s10/1-3.jpg"),
          name: '太和2 外觀3D示意圖',
        },
      ],

      slideList2: [
        {
          img: require('./s10/2-1.jpg'),
          name: '',
        },
        {
          img:isMobile?require("./s10/2-2m.jpg"):require("./s10/2-2.jpg"),
          name: '勝美建設 有禮',
        },
        {
          img:isMobile?require("./s10/2-3m.jpg"):require("./s10/2-3.jpg"),
          name: '意展建設 閱美',
        },
      ],
      slideList3: [
        {
          img: require('./s10/3-1.jpg'),
          name: '',
        },
        {
          img:isMobile?require("./s10/3-2m.jpg"):require("./s10/3-2.jpg"),
          name: '寧波帝寶The River One',
        },
        {
          img:isMobile?require("./s10/3-3m.jpg"):require("./s10/3-3.jpg"),
          name: '寧波帝寶The River One',
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
