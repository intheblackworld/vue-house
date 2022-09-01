<template>
  <div>
    <div class="section8">
      <img src="./s8/img.png" alt="img" class="img" />
      <div class="box"></div>
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
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%2300235E' stroke-width='6' points='31.5,57 4.5,30 31.5,3 '/%3E%3C/svg%3E" alt="_prev">
            </div>
            <div class="next-btn" @click="addIndex">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%2300235E' stroke-width='6' points='3.5,3 30.5,30 3.5,57 '/%3E%3C/svg%3E" alt="_next">
            </div>
          </div>
        </div>
     <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="500" v-if="isPC">
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div> 
      </div>
      <div class="txt">
      <div class="title" data-aos="fade-up" data-aos-delay="200">MAG世界級地標推手</div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">玫格設計公司，由日本設計師 前田利也共同創立，中日攜手為創作與眾不同的設計案與改善都市景觀，日益追求新造型、新建材、新技術，並有豐富的國際建築設計合作經驗。</div>
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
  margin:0 auto 0;
  padding:5vw 0 5vw;
  // background:#FFF;
&::after{content: "";clear: both;display: block;}
}
.img{width: size(640);position: absolute;left: size(300);bottom: 5vw;
z-index: 2;
}

.box{position: absolute;left:size(210);bottom: 5vw;
background:  linear-gradient(to right, #00427A 0%, #112A49 50%, #04142A 100%);
  width: size(1500);height:size(80);}

.txt{
float: left;
  position: relative;
  padding-top:8vw;
  width: size(700);
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(19);
  font-weight: 600;
  line-height: 1.4;
  z-index: 2;
  margin-left: size(250);
  }

.title{
  font-size:2.2em;
  margin:0 auto 0;
  color: #B00;
}
  .subtitle{font-size: 1.25em;
    padding:.75em 0 0 0;
  }
.desc {
 // margin:1em auto;
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
float: right;
 // position: absolute;
  width: size(670);
  height: size(844);
// top: size(185);
 // left: size(210);
  margin-right: size(190);
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
  right:100%;
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
  .section8 {
    width: 100%;
    height: auto;
  padding:0 0 sizem(280) 0;
  }
.img{width: sizem(360);left:sizem(5);top:auto;bottom:0vw;}
.box{left:0;bottom:0;top:auto;
  width: sizem(375);height:sizem(50);}
  .txt{
    position: relative;
    width: sizem(320);
    float: none;
    margin:0em auto 0;
    left:0;
    top:0;
    font-size: sizem(15);
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
    width: sizem(310);
    float: none;
    height: sizem(357);
    margin: sizem(50) auto 0;
    top:auto;
    left:auto;
  }
.swipe-item {
  .slide-name {
    font-size: sizem(12);
  }
}
  .swipe-btns {width: 120%;
  font-size: sizem(15);margin-left: -10%;
  }
}
</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section8',

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
          img: require('./s8/1.jpg'),
          name: '台中 CBD時代廣場',
        },
        {
          img: require('./s8/2.jpg'),
          name: '台中 樹禾院',
        },
        {
          img: require('./s8/3.jpg'),
          name: '金山 凱悦酒店 3D示意',
        },
        {
          img: require('./s8/4.jpg'),
          name: '高雄 博愛香榭',
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
