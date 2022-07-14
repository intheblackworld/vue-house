<template>
  <div>
    <div class="section4">
      <div class="img absolute">
        <img class="relative" loading="lazy" src="./s4/img2-1.png" alt="孟子" />
        <img class="absolute" loading="lazy" src="./s4/img2-2.png" alt="孟子" />
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
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='31.5,57 4.5,30 31.5,3 '/%3E%3C/svg%3E" alt="_prev">
            </div>
            <div class="next-btn" @click="addIndex">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='3.5,3 30.5,30 3.5,57 '/%3E%3C/svg%3E" alt="_next">
            </div>
          </div>
          
        </div>
      </div>
      <div class="txt">
      <div class="title" data-aos="fade-up" data-aos-delay="200">
        好讀書不求甚遠<br />好學區不該太遠
      </div>
      <div class="subtitle" data-aos="fade-up" data-aos-delay="200">購屋聰明學 /孟母為兒三遷的累，父母最知道</div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">
從古時孕育英才的書院，到今日文化資產的歷史建築<br />
明志書院風蘊人文百年傳承<br />
15所學校16年大中小完整學區<br />
家在文教區，孩子天天在書香氣息中薰陶，教育自然養成
      </div>
      </div>
      <div class="pagination" v-if="isPC">
        <div :class="`pagination-dot`" data-aos="zoom-in" data-aos-delay="300" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width:100%;
  height: auto;
  position: relative;
  padding:size(150) 0 0 0;
}
.img{
  bottom: -16.5%;z-index: 3;
  left: 0%;
  width: 20.75%;
  img{width: 100%;}
  .absolute{
    top: 11.7%;
    left: 31.4%;
    width: 43.3%;
    transform:rotate(5deg);
    transform-origin: 28% 98%;
    animation: an 2s ease-in-out infinite alternate;
  }
}
@keyframes an{
    to{
    transform:rotate(-5deg);
    }
}

.txt{
  position: absolute;
  width: size(530);
  left: size(300);
  top: size(200);
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(19);
  font-weight: 600;
  line-height: 1.3;
  z-index: 3;
  text-shadow: 0 0 0.3em #e0d9be,0 0 0.2em #e0d9be,0 0 0.1em #e0d9be;
  }

.title{
  position: relative;
  font-size:2.3em;
  margin:1em auto 0;
  letter-spacing:0em;
  font-weight: 900;
}
.subtitle{
  position: relative;
  font-size:1.3em;
  margin:.6em auto 0;
  letter-spacing:0.03em;
  font-weight: 900;
  color: #B28247;
}

.desc {
  margin:1.2em auto 1.3em auto;
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
  width: size(840);
  height: size(560);
  margin: 0 size(200) 0 auto;
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
  position: relative;
  transform: translate(-130%,-100%);
  width: auto;
  justify-content: center;
  font-size: size(20);
  display: inline-block;
}

.pagination-dot {
  padding: 0.25em;
  margin: 0 0.2em;
  cursor: pointer;
  z-index: 4;
    display:inline-block;

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
  .section4 {
    width: 100vw;
    height: auto;
    overflow: hidden;
  }
.tree{
  position: absolute;
  bottom:sizem(10);
  top: auto;
  left:sizem(200);
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
          name: '明志科大',
        },
        {
          img: require('./s4/2.jpg'),
          name: '明志國小',
        },
        {
          img: require('./s4/3.jpg'),
          name: '泰山高中',
        },
        {
          img: require('./s4/4.jpg'),
          name: '義學國中',
        },
        {
          img: require('./s4/5.jpg'),
          name: '輔仁大學',
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
