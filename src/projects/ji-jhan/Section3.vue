<template>
  <div>
    <div class="section3">
      <img class="img-o" src="./all/o.png" alt="o" data-aos="zoom-in">
      <img class="style1" src="./s3/style1.png" alt="style1">
    
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <div class="prev-btn" @click="decIndex">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='31.5,57 4.5,30 31.5,3 '/%3E%3C/svg%3E" alt="_prev">
            </div>
            <div class="next-btn" @click="addIndex">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='3.5,3 30.5,30 3.5,57 '/%3E%3C/svg%3E" alt="_next">
            </div>
          </div>
        </div>
      </div>
      <div class="txt">
      <div class="title" data-aos="fade-down" data-aos-delay="200" v-if="!isMobile">3大商圈、全方位行政中心、多元生活場域</div>
      <div class="title" data-aos="fade-down" data-aos-delay="200" v-if="isMobile">3大商圈、全方位行政中心<br>多元生活場域</div>
      <div class="sub" data-aos="fade-down" data-aos-delay="300">黃金地段、生活機能完美俱備  </div>
      <div class="desc" data-aos="fade-down" data-aos-delay="300">
        城市核心獨攬機能優勢，鄰近大智、正義、三和成熟商圈，享樂超便利；三重市政中心、市場、全聯、頂好等出門左右逢源；圖書館、聯合醫院、綜合體育館，運動、休閒、藝文、醫療等豐富資源，全方位一次滿足！ 

      </div>
      </div>
      <div class="pagination absolute flex-ac" data-aos="fade-down" data-aos-delay="500" v-if="isPC">
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width:100%;
  height: size(900);
  position: relative;
}

.img-o{
  width: size(160);
  position: absolute;
  opacity:0.3 !important;
  top:size(350);
  left:size(190);
}
.style1{
  width: size(1920);
  position: absolute;
  opacity:0.3 !important;
  right:size(0);
  left:size(0);
  top:size(-150);
}

.style{
  width: size(433);
  position: absolute;
  bottom:size(0);
  right:size(0);
}

.o{
  position: absolute;
  top:size(270);
  left:size(190);
  width:size(210);
  height:size(210);
  border-radius: 50%;
background: linear-gradient(to bottom, rgba(220,60,0,0.12) 0%,rgba(220,60,0,0) 100%);}
.c{
      position: absolute;left:0;right:0;
      top:calc(50% + (0 - 540) * 100vw / 1920);
      div{
        position: absolute;
        animation:an 5s ease-in-out infinite alternate;
        img{width: 100%;}
      }
    .c1{
      width:size(660);top:size(780);left: size(40);
      transform:rotate(3deg);
      transform-origin: 50% 50%;
    animation-delay: -1s;
      img{width: 100%;
      transform:rotate(-70deg);}}
  }

@keyframes an{
    to{
      transform: translateX(0);
    }
}

.txt{
  position: absolute;
  width: size(490);
  left: size(300);
  top: size(325);
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(17);
  font-weight: 400;
  line-height: 1.2;
  z-index: 3;
  color: #242424;
  }

.title{
  position: relative;
  font-size: size(40);
  margin:1em auto 0.5em;
  letter-spacing:0.04em;
  color: #00537A;
  font-weight: 700;
}

.sub{
  position: relative;
  font-size: size(25);
  margin:1em auto 0.5em;
  letter-spacing:0.04em;
  color: #000000;
  font-weight: 700;


  .line{
    position: absolute;
    width: size(125);
    height: size(2);
    background: #c49847;
    top:size(15);
    right:size(0);

    }
}

.desc {
  margin:1em auto;
  line-height: 2;
  letter-spacing:0.05em;
  list-style: circle;
  overflow: hidden;
  li{list-style:inherit;float: left;margin: 0.3em 0 0.3em 1.4em;width:calc(100% - 1.4em);
  }
}

/* Swipe */
.swipe {
  position: absolute;
  width: size(840);
  height: size(560);
  top: size(185);
  right: size(210);
  object-fit: cover;
  z-index: 3;
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
  bottom: size(148);
  right:calc(50% + 6.95vw);
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
    border: 0.2em solid  rgba(255, 255, 255, 0.5);
    position: relative;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
    border-radius: 50%;
    border:  0.105em solid  #c99637;
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
  z-index: 3;
  font-size: size(20);

  .prev-btn,
  .next-btn {
    padding: 0 0.75em;
    cursor: pointer;
    height: 100%;
    display: flex;
    img{
    width: 1em;
    }
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
  .section3 {
    width: 100vw;
    height: auto;
  }
.o{
  top:sizem(260);
  left:sizem(10);
  width:sizem(90);
  height:sizem(90);

}
.c{
    .c1{width:sizem(270);top:sizem(330);left: sizem(130);}
  }
  .txt{
  position: relative;
  width: sizem(310);
margin:1.5em auto 10em;
  left:0;
  top:0;
  font-size: sizem(15);
  text-align: center;
  }
.title{
    font-size: sizem(25);
}

.sub{
  font-size: sizem(18);
}
  .desc {
   //line-height: 1.73;
  margin:0em auto;
  text-align: left;
  letter-spacing:0em;
  margin-top: sizem(20);

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
  name: 'section3',

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
          img: require('./s3/1.jpg'),
          name: '三和正義商圈',
        },
        {
          img: require('./s3/2.jpg'),
          name: '重陽路商圈',
        },
        {
          img: require('./s3/3.jpg'),
          name: '正義市場',
        },
        {
          img: require('./s3/4.jpg'),
          name: '新北圖書館三重分館',
        },
        {
          img: require('./s3/5.jpg'),
          name: '新北市立醫院三重院區',
        },
        {
          img: require('./s3/6.jpg'),
          name: '三重綜合體育館',
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
