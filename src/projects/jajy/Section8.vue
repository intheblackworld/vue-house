<template>
  <div>
    <div class="section8">
      <img src="./all/gold1.png" class="gold1 absolute" loading="lazy" v-if="isMobile" />
    <wimg class="w1 absolute" preserveAspectRatio="xMidYMid slice" loading="lazy" />
    <wimg class="w2 absolute" preserveAspectRatio="xMidYMid slice" loading="lazy" v-if="isMobile" />
      <img src="./all/leaf.png" class="leaf absolute"  data-aos="fade" loading="lazy" data-aos-delay="200" />
      <div class="txt">
      <h3 class="title" data-aos="fade" data-aos-delay="0"><img src="./s5/icon.png">
    <img src="./s1/light.png" loading="lazy" class="light" /><span>匠心工藝 安全良居</span><span>GET  QUALITY</span></h3>
      </div>


      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="" loading="lazy">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
      <!--     <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile" >
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div> -->
        </div>
      </div>
      <div class="txt">
      <p class="desc" data-aos="fade" data-aos-delay="0">【佳昂•家易】使用「地下筏式基礎」與「連續壁」營建工法，作為建築體的工程防護，鞏固地基，紮實擋土、防水和承重。<br v-if="!isMobile" />【佳昂建設】將每個步驟作踏實、每道工序做到最完美，成就每位居住者一輩子的美好家園。</p>
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
  padding: 0 0 1.7vw 0;
}
.w1{
    top: 54vw;
    right: -25vw;
    width: 51vw;
    transform: rotate(54deg);stroke:#FFF;
}
.leaf{
    top: 50vw;
    right: 0vw;
    transform: translate(50%,-100%);
    width: 16vw;}

.txt{
  position: relative;
  width: size(1606);
  margin:0 auto 0;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(27);
  font-weight: 500;
  line-height: 1.4;
  z-index: 2;

.title{
  font-size:2.2em;
  margin:1.5em auto 0.75em;
  font-weight: 900;
  color: #00537A;
  display: block;
  position: relative;
  line-height: 1.2;
  letter-spacing: 0.06em;
  background: linear-gradient(135deg, #FFF0 5%,#FFF6 22%,#FFF0 44%);
  font-family: 'Noto Serif TC', serif;
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
  font-size:1.2em;
  background:url("./s5/txtbg.jpg");
  background-size: cover;
  background-clip: text;
  font-weight: 400;
  letter-spacing: 0.0em;
  -webkit-background-clip: text;
  vertical-align:-0.05em;
  color: transparent;font-family: 'Cantata One', serif;
  margin: 0 0 0 0.35em;
  filter: drop-shadow(0 0 0.4vw #fffc);
  }

}
.subtitle{
  font-size:1.3em;
  margin:.5em auto 0;
  letter-spacing:0.03em;
  font-weight: 900;
  color: #000;
}

.desc {
  margin:1em auto 0.3em;
  line-height: 1.6;
  list-style: circle;
}
  }
/* Swipe */
.swipe {
  position: relative;
  margin: auto;
  width: size(1606);
  height: size(800);
  // left: size(210);
  object-fit: cover;
  z-index: 3;
  box-shadow: .3vw .3vw .7vw #0006;
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
    min-height: auto;
    max-height: initial;
  }
  .w1{
    top: -54vw;
    right: -52vw;
    width: 102vw;
    transform: rotate(-96deg)scaleX(-1);
    }
  .w2{
    stroke:#FFF;
    top: -29vw;
    left: -64vw;
    width: 124vw;
    transform: rotate(89deg)scaleX(-1);
    }

.gold1{
    top: 122vw;
    left: -13vw;
    width: 21vw;
    filter: drop-shadow(0 0 0.5vw rgba(0, 0, 0, 0.7));
    }
.leaf{
    top: -21vw;
    right: 7vw;
}


  .txt{
    position: relative;
    width: sizem(330);
    margin:1.5em auto 2em;
    font-size: sizem(12);
    .title{
      font-size:2.2em;
  line-height: 1.6;
    img{height: 1.65em;
  position: relative;
  vertical-align: middle;
    margin: -.35em .9em -0.03em 0;
    }
      
  span:last-child{position: absolute;top: 0;left: 0;
  transform: rotate(90deg) translate(18vw,-5vw);
  font-size:1.1em;
  transform-origin:0 0;
  }
    }
    .subtitle{
      font-size:1.1em;
    }
    .desc{
      display: block;
    width: sizem(310);
    margin:0 0 0em auto;
    font-size: 1.1em;
    }
  }
  /* Swipe */
  .swipe {
    position: relative;
    width:sizem(310);
    height: sizem(350);
    margin: 0 sizem(20) 0 auto;
    box-shadow: 0.5vw 0.5vw 1.5vw #0006;
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
import wimg from './w.vue'

export default {
  name: 'section8',

  mixins: [slider],
  props: ['viewIndex'],
  components: {
    wimg,
  },

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: isMobile?require("./s8/1m.jpg"):require("./s8/1.jpg"),
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
      if (this.viewIndex === 7) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
