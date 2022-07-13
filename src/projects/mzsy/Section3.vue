<template>
  <div>
    <div class="section3">
      <div class="img absolute">
        <img class="absolute" loading="lazy" src="./s3/img1-2.png" alt="陶淵明" />
        <img class="relative" loading="lazy" src="./s3/img1-1.png" alt="陶淵明" />
      </div>
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="" loading="lazy">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <div class="prev-btn" @click="decIndex">
            <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='31.5,57 4.5,30 31.5,3 '/%3E%3C/svg%3E" alt="_prev">
            </div>
            <div class="next-btn" @click="addIndex">
            <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='3.5,3 30.5,30 3.5,57 '/%3E%3C/svg%3E" alt="_next">
            </div>
          </div>
        </div>
      </div>
      <div class="txt">
      <div class="title" data-aos="fade-up" data-aos-delay="200">結廬在城心，而無車馬喧</div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">
        購屋聰明學 /離開南山陶淵明選擇落腳泰山<br />
泰山最成熟的機能核心<br />
明志路繁中取靜，商圈、學校、公園、市場全方位滿足<br />
出靜巷得繁華，無店面更純靜
      </div>
      </div>
     <div class="pagination absolute flex-ac" v-if="isPC" data-aos="fade-up">
        <div :class="`pagination-dot`" data-aos="zoom-in" data-aos-delay="300" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
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
  margin: 0 0 2.5vw 0;
}
.img{
  top: -16.5%;z-index: 5;
  right: 3%;
  width: 21.35%;
  img{width: 100%;}
  .absolute{
  top:20.7%;
  left:20.1%;width: 13%;
  
    
  }
}
@keyframes an{
    to{
      transform: translateX(0);
    }
}

.txt{
  position: absolute;
  width: size(580);
  right:size(210);
  top: size(230);
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(19);
  font-weight: 600;
  line-height: 1.3;
  z-index: 3;
  }

.title{
  position: relative;
  font-size: size(44);
  margin:.6em auto 0;
  letter-spacing:0em;
  font-weight: 900;
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
  height: size(534);
  top: size(160);
  left: size(200);
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
  bottom: size(205);
  left:calc(50% + 8.2vw);
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
    width: 100%;
    height: auto;
    overflow: hidden;
  }
$ww:sizem(33);
.w{
width:sizem(100);
top:sizem(240);
left: auto;
right: 0;
height:calc( #{$ww} * 0.67 * 5);
  &::after{
  width: calc(100% + #{$ww});
  background-size: $ww auto;
  transform: translateX(-#{$ww});
  }
}
  .txt{
  position: relative;
  width: sizem(310);
margin:1.5em auto 5em;
  left:0;
  top:0;
  font-size: sizem(15);
  }
.title{
    font-size: sizem(23);
}
  /* Swipe */
  .swipe {
    position: relative;
    width: 100%;
    height: sizem(240);
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
          name: '全興公園',
        },
        {
          img: require('./s3/2.jpg'),
          name: 'Costco新莊店',
        },
        {
          img: require('./s3/3.jpg'),
          name: '明志路商圈',
        },
        {
          img: require('./s3/4.jpg'),
          name: '泰山公有市場',
        },
        {
          img: require('./s3/5.jpg'),
          name: '福泰市場',
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
