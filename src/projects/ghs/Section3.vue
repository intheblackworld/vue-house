<template>
    <article class="section3">
      <img loading="lazy" src="./all/light.png"
          :alt="`${info.caseName}light`" data-aos="fade" data-aos-duration="1500" data-aos-delay="600" class="light">
      <h3 class="title" data-aos="fade-down" data-aos-delay="200" >房貸不怕，利息台電出</h3>
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img loading="lazy" :src="slide.img" 
          :alt="`${info.caseName}img`">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <img loading="lazy" src="./all/prev-btn.png" 
          :alt="`${info.caseName}prev-btn`" class="prev-btn" @click="decIndex">
            <img loading="lazy" src="./all/next-btn.png"
          :alt="`${info.caseName}next-btn`" class="next-btn" @click="addIndex">
          </div>
        </div>
      </div>
      <div class="subtitle" data-aos="fade-down" data-aos-delay="300">有太陽就有收益，輕鬆月賺3000元</div>
      <div class="line" data-aos="fade" data-aos-delay="200" ></div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">
        屋頂架設太陽能光電板，可隔熱、遮雨、省電，又可創能售電予台電收益，每月獲利數千元，讓您輕鬆補貼房貸輕鬆繳！ 
      </div>
    </article>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {  
  width:100%;
  height:auto;
  position: relative;
   overflow: hidden;
}
  .light{
  position: absolute;
  bottom:size(45);
  right:size(-80);
  width:size(350);
  transform: translate(40%,-20%) rotate(-30deg) scale(0.4);

  }

.title{
  position: relative;
  width: size(1500);
  margin:2.45em auto 0;
  font-size: size(49);
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  z-index: 3;
  font-weight: 500;
  line-height:2.22;
  letter-spacing: normal;
  color: #fff;
  &::before{content:"";position: absolute;z-index:-1;top: 0;left: 0;
  height: 100%;width: 100%;
  background: url("./all/r_bg.png");
  background-size: 100% 100%;
  }
}
.subtitle {
  position: relative;
  width: size(1500);
  top:0;z-index: 3;
  margin:1.5em auto 0.8em;
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(1.2);
  text-align: left;
  color: #d03636;
  white-space: nowrap;
}
.line {
  position: relative;
  background-color: #FFF;
  width: size(1500);
  margin: auto;
  height: size(3);
    z-index: 1;
  &::before{
    content:"";
    display: block;
    width: 50%;
    position: absolute;
    top: 0;left:23%;
    padding:5% 0;
    transform: translateY(-75%);
    background:url('./all/title.png') no-repeat;  
    background-size:100% auto;  
    z-index: -1;
  }
}
.desc {
  position: relative;
    z-index: 2;
  width: size(1500);
  margin:1em auto 6em auto;
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height:1.6;
  letter-spacing:0.05em;
  text-align: justify;
  color: #666666;
  list-style: circle;
  overflow: hidden;
  li{list-style:inherit;float: left;margin: 0.3em 0 0.3em 2.2em;width:calc(50% - 2.2em);
  }
}

/* Swipe */
.swipe {
  position: relative;
  margin: auto;
  width: size(1500);
  height: size(844);
  // left: size(210);
  object-fit: cover;z-index: 3;
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
  // overflow: hidden;
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
  bottom: size(-50);
  right: size(-10);
  justify-content: center;
 // display: none;
}

.pagination-dot {
  padding: 5px;
  margin: 0 4px;
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
  .section3 {
    width: 100vw;
    height: auto;
    min-height: auto;
    max-height: initial;
  }
  .light{
  top:auto;
bottom: 0;
  left:sizem(190);
  width:sizem(200);

  }
  .title{
    width:100%;
  font-size: sizem(30);
    margin:0 auto 0;
  span{
    display: block;
  }
  }

  .subtitle {
    width:sizem(310);
    font-size: sizem(18);
  margin:1.5em auto 0;
  }
  .line {
    width: sizem(310);
    height: sizem(2);
  margin: 1.1em auto 1em auto;
  }
  .desc {
    width: sizem(310);
    font-size: sizem(15);
    margin:0 auto 3em auto;
  li{width:calc(100% - 1.5em);margin: 0.3em 0 0.3em 1.5em;}
  }

  /* Swipe */
  .swipe {
    position: relative;
    width: 100vw;
    height: sizem(200);
    min-height: auto;
    top: sizem(0);
    left: sizem(0);
    object-fit: cover;
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

  // begin
  // .swipe-left-leave-to {
  //   margin-left: -100vw;
  //   z-index: 0;
  // }
  // // end
  // .swipe-left-enter {
  //   opacity: 0.5;
  //   margin-left: 0;
  //   z-index: 1;
  // }

  // .swipe-left-enter-active {
  //   transition: all 0.5s ease;
  // }

  // .swipe-left-leave-active {
  //   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  // }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
    z-index: 0;
    .slide-name{
      right: 1em;
    font-size: sizem(13);
    }

    // &:nth-child(1) {
    //   z-index: 1;
    //   // opacity: 1;
    // }

    // &.base {
    //   z-index: 1;
    //   opacity: 1;
    // }
    // &.active {
    //   z-index: 2;
    //   // opacity: 1;
    // }
  }

  .pagination {
    width: auto;
    bottom: size(91);
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
  }

  .pagination-dot {
    padding: 5px;
    margin: 0 10px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #004ea2;
        border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 20%;
        // transform: translateY(-50%);
        left: 20%;
        transition: all 0.3s;
        transform-origin: center;
        transform: scale(0);
      }
      &.active {
        &::before {
          content: '';
          width: 100%;
          height: 100%;
          display: block;
          background: #004ea2;
          border-radius: 20px;
          opacity: 1;
          position: absolute;
          top: 0%;
          // transform: translateY(-50%);
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
      width: sizem(15);
      cursor: pointer;
    }
  }
}
</style>
<script>
import info from "@/info";
// @ is an alias to /src
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
          name: '3D透視圖僅供參',
        },
        {
          img: require('./s3/2.jpg'),
          name: '3D透視圖僅供參',
        },
        {
          img: require('./s3/3.jpg'),
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
      if (this.viewIndex === 7) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
