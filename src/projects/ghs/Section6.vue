<template>
  <div>
    <div class="section6">
<img loading="lazy" src="./all/light.png" 
          :alt="`${info.caseName}light`" data-aos="fade" data-aos-duration="1500" data-aos-delay="600" class="light">
      <div class="title" data-aos="fade-down" data-aos-delay="200" v-if="isMobile"  >開車15分鐘，房價省一半</div>
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img loading="lazy" :src="slide.img"  
          :alt="`${info.caseName}img`">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
        <!--  <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <img loading="lazy" src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img loading="lazy" src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div>  -->
        </div>
      </div>
      <div class="txt">
      <div class="title" data-aos="fade-down" data-aos-delay="200" v-if="isPC">開車15分鐘，房價省一半</div>
     <!--  <div class="line" data-aos="fade" data-aos-delay="200" ></div>
      <div class="subtitle" data-aos="fade-down" data-aos-delay="300" >文創氣質相乘土城心驛站</div>  -->
      <ul class="desc">
        <li data-aos="fade-up" data-aos-delay="300">南北快捷：4~5分鐘上北二高-斗六交流道，往返南北快捷。</li>
        <li data-aos="fade-up" data-aos-delay="400">輕鬆通勤：10~15分鐘斗六上班輕鬆行。</li>
        <li data-aos="fade-up" data-aos-delay="500">完整學區：鄰近九芎國小、林內國中、義峰高中完整學區。</li>
        <li data-aos="fade-up" data-aos-delay="500">雙城機能：5~15分鐘樂享林內、斗六雙商圈完善機能。</li>
      </ul>
      </div>
     <!--   <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="500" v-if="isPC">
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: size(1920);
  height: size(900);
  position: relative;
  overflow: hidden;
}

  .light{
  position: absolute;
  top:size(630);
  right:size(-20);
  width:size(420);
  transform: translate(40%,-20%) rotate(-30deg) scale(0.4);

  }
.txt{
  position: absolute;
  width: size(610);
  right:size(200);
  top: size(185);
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  font-size: size(18);
  font-weight: 500;
  line-height: 1.2;
  z-index: 3;
  }

.title{
  position: relative;
  font-size:2.5em;
  font-weight: 500;
  line-height:2.22;
  letter-spacing: normal;
  color: #fff;
  z-index: 3;
  &::before{content:"";position: absolute;z-index:-1;top: 0;left:-3%;
  height: 100%;width: 150%;
  background: url("./all/r_bg.png");
  background-size: 100% 100%;
  }
}

.subtitle {
  position: relative;
  font-size: size(30);
  margin:1.5em auto 0.8em;
  letter-spacing:0.04em;
  color: #d03636;
}
.line {
  position: relative;
  background-color: #888;
  width:100%;
  height: size(2);
  margin: 2em 0 0.5em 0;
}
.desc {
  margin:1em auto;
  font-size: size(18);
  line-height: 2;
  letter-spacing:0.05em;
  color: #666666;
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
  left: size(210);
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
    color: #ffffff;
   text-shadow:0 0.1em 0.3em #000;
  }

}

.pagination {
  width: auto;
  bottom: size(148);
  left:calc(50% + 6.95vw);
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 4px solid  #ccc;
    position: relative;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
    border-radius: 50%;
    border: 2.1px solid  #d03636;
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
  .section6 {
    width: 100vw;
    height: auto;
  }
  .light{
  top:auto;
bottom: 0;
  left:sizem(190);
  width:sizem(200);

  }

  .txt{
  position: relative;
  width: sizem(310);
margin:1.5em auto 3em;
  left:0;
  top:0;
  font-size: sizem(15);
  }
.title{
    font-size: sizem(30);
  &::before{width: 100vw;
  left: calc(50% - 50vw);
  }
}
  .line {
    width: sizem(310);
    height: sizem(2);
  margin: 1.1em auto 1em auto;
  }
  .subtitle {
    font-size: sizem(18);
  margin:1em auto 0em;
  }
  .desc {
   //line-height: 1.73;
  margin:0em auto;
  font-size: sizem(15);
  }
  /* Swipe */
  .swipe {
    position: relative;
    width: 100vw;
    height: sizem(250);
    min-height: auto;
    top:0;
    left:0;
  }

  .swipe-item {
    .slide-name{
      right: 1em;
    font-size: sizem(13);
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
import info from "@/info";
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section6',

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
          img: require('./s6/1.png'),
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
