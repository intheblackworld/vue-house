<template>
  <div>
    <div class="section8">
      <div class="img absolute">
        <img class="relative" loading="lazy" src="./s6/img4-1.png" alt="曾子" />
        <img class="absolute" data-aos="zoom-in" loading="lazy" src="./s6/img4-2.png" alt="曾子" />
      </div>
    <div class="swipe" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt>
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
      <div class="title" v-html="slideList[slideIndex].title"></div>
      <div class="desc" v-html="slideList[slideIndex].desc"></div>
      </div>
      <div class="pagination absolute flex-ac" v-if="isPC">
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width:100%;
  height: size(730);
  position: relative;
  &::after{content: "";clear: both;display: block;height: 1px;}
}
.img{
top: -54%;
    z-index: 3;
    left: 12%;
    width: 20.2%;
  img{width: 100%;}
  .absolute{
    top:0;
    left:0;
    width: 100%;    
    transform-origin: 80% 10%;
  }
}
.txt{
  position: absolute;
  width: size(590);
  left: size(210);
  top: size(225);
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(19);
  font-weight: 600;
  line-height: 1.4;
  z-index: 3;
  }

.title{
  position: relative;
  font-size: size(44);
  margin:1em auto 0;
  letter-spacing:0em;
  font-weight: 900;
}

.desc {
  margin:1.2em auto 1.3em auto;
  line-height: 1.8;
  letter-spacing:0.0em;
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
  top: size(100);
  right: size(200);
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
  bottom: size(108);
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
  .section8 {
    height: auto;
  }
  
.img{
top:-110vw;
    left: 0%;
    width: 40.2%;}
  .txt{
  position: relative;
  width: sizem(310);
margin:1.5em auto 0em;
  left:0;
  top:0;
  font-size: sizem(14);
  }
.title{
  font-size:1.5em;
}
.subtitle{
  font-size:1.1em;
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
      dialogImg: null,
      showMask: false,
      slideList: [
        {
          img: require("./s6/5.jpg"),// isMobile?require("./s2/1m.jpg"):require("./s2/1.jpg"),
          name: '機場捷運泰山站',
          title: '【三捷】',
          desc: '機場捷運泰山站約4分鐘，一線飛抵桃園機場、一線直達北車雙子星。中和新蘆線輔大站約5分鐘，快速轉乘淡水信義線，暢遊101、淡水。五泰輕軌義學站步行約10分鐘，行經蘆洲五股泰山，串聯環狀捷運南北線，預計113年動工。',
        },
        {
          img: require("./s6/1.jpg"),
          name: '國道一號',
          title: '【一高】',
          desc: '中山高國道一號約8分鐘，快速串接全台各大城市重點區域樂活全台。',
        },
        {
          img: require("./s6/2.jpg"),
          name: '台65快速道路',
          title: '【一快】',
          desc: '台65快速道路約4分鐘，高效連結雙北核心，輕鬆暢享跨界生活版圖。',
        },
        {
          img: require("./s6/6.jpg"),
          name: '公車站(明志里站)',
          title: '【公車】',
          desc: '公車站牌步行約4分鐘，多線公車全家上班通勤、上學、採買都方便。',
        },
      ]
    }
  },
  methods: {
    showDialog() {
      this.isDialog = true;
      this.showMask = true;
      this.dialogImg = this.slideList[this.slideIndex].full;
    },

    handleScroll() {
      this.showMask = false;
    }
  },

  created() {},

  mounted() {},

  computed: {},
}
</script>
