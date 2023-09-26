<template>
  <div>
    <div class="section5">
    <img src="./s1/bgt.png" class="bg" v-if="!isMobile" />
    <img src="./s1/bgt-m.png" class="bg" v-else />
    <div class="bgbox"></div>
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
      <!--   -->   <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile" >
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div>
        </div>
      </div>
      <div class="txt">
      <div class="title" data-aos="fade-up" data-aos-delay="100" >星級客房</div>
      <div class="subtitle" data-aos="fade-up" data-aos-delay="200" v-html="slideList[slideIndex].subtitle"></div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300" v-html="slideList[slideIndex].desc"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {  
  width:100%;
  height:auto;
  position: relative;
  padding: 8vw 0;
&::after{content: "";clear: both;display: block;}
}
.bg{
  position: absolute;
  bottom:0;left:0;width: 100%;transform: translateY(55%);
}
.bgbox{
  position: absolute;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,0.16) 100%);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.txt{
  position: relative;
  width: size(1500);
  margin:-2em auto 0em auto;
  padding: 2.8em 0;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(18);
  font-weight:500;
  line-height: 1.4;
  z-index: 2;
  
 // color: #fff;

.title{
  font-size:2.2em;
  margin:0 auto 0;
  color: #754C24;
  display: flex;
    align-items:baseline;
  font-weight: 800;
}
  .subtitle{font-size: 1.25em;
  font-weight: 800;
  color: #000;
    padding:.75em 0 0 0;
  }

.desc {
  padding:1em 0 0 0;
  line-height: 1.6;
  list-style: circle;
}
  }
/* Swipe */
.swipe {
  position: relative;
  margin: auto;
  width: size(1500);
  height: size(844);
  // left: size(210);
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
    text-align: left;
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
  right: 0em;
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
    border:  0.105em solid $pagination-active;
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
  .section5 {
  padding: 11vw 0 1vw;
  background:none;
  }
  .bg{
    transform: translateY(55%);
}
  .txt{
    position: relative;
    width: sizem(315);
    margin:-2em auto 0em;
    padding: 3em 0 5.6em;
    left:0;
    top:0;
    font-size: sizem(15);
    border-radius: sizem(10);
    .title{
      font-size:2em;
      flex-wrap: wrap;
  &::after{width: 100%;flex: 0 0 100%;
  display: block;margin: .3em 0 0.3em 0;}
    }
    .subtitle{
      font-size:1.1em;
    }
  }
  /* Swipe */
  .swipe {
    position: relative;
    width: 100%;
    height: sizem(250);
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
  name: 'section5',

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
          img:require('./s5/1.jpg'),
          name: '一中床房型 實際以現場為主',
          subtitle: '一中床房型',
          desc: '精緻裝修、精品傢俱、豪華衛浴、舒適寢具',
        },
        {
          img:require('./s5/2.jpg'),
          name: '一中床房型 實際以現場為主',
          subtitle: '一中床房型',
          desc: '精緻裝修、精品傢俱、豪華衛浴、舒適寢具',
        },
        {
          img:require('./s5/3.jpg'),
          name: '兩小床房型 實際以現場為主',
          subtitle: '兩小床房型',
          desc: '精緻裝修、精品傢俱、豪華衛浴、舒適寢具',
        },
        {
          img:require('./s5/4.jpg'),
          name: '兩小床房型 實際以現場為主',
          subtitle: '兩小床房型',
          desc: '精緻裝修、精品傢俱、豪華衛浴、舒適寢具',
        },
        {
          img:require('./s5/5.jpg'),
          name: '客房獨立衛浴 實際以現場為主',
          subtitle: '客房獨立衛浴',
          desc: '精緻裝修、精品傢俱、豪華衛浴、舒適寢具',
        },
        {
          img:require('./s5/6.jpg'),
          name: '客房獨立衛浴 實際以現場為主',
          subtitle: '客房獨立衛浴',
          desc: '精緻裝修、精品傢俱、豪華衛浴、舒適寢具',
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
