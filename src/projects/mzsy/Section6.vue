<template>
  <div>
    <div class="section6">
      <div class="img absolute">
        <img class="relative" loading="lazy" src="./s5/img3-1.png" alt="李白" />
        <img class="absolute img3-2" loading="lazy" src="./s5/img3-2.png" alt="李白" />
        <img class="absolute img3-3" loading="lazy" src="./s5/img3-3.png" alt="李白" />
      </div>
      <div class="swipe" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
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
      <div class="title" >健康吐納，有景有境<br />住進17公頃自然生態保護區</div>
      <div class="desc" >大台北再也找不到第二個地方，同時兼備自然生態、人文環境與繁華商圈的極致。自古泰山即是北臺首學人文書香之地，而離你我更近的，是自然。17公頃義學坑生態保護區，高度綠覆率不僅圍塑出獨一無二的自然美境，並吸附落塵降低PM2.5的危害，是健康最好的靠山。</div>
      </div>
     <div class="pagination" v-if="isPC">
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width:100%;
  height: auto;
  position: relative;
  padding:size(150) 0 0 0;
  &::after{content: "";clear: both;display: block;height: 1px;}
}

.img{
  top: -35%;
    z-index: 3;
    right: 4.6%;
    width: 20.35%;
  img{width: 100%;}
  .img3-2{
    top: 24.2%;
    left: 47.5%;
    width: 20.4%;
    transform:translate(3% ,-5%);
    animation: an 2s ease-in-out infinite alternate;
  }
  .img3-3{    top: 40.9%;
    left: 19.2%;
    width: 64.4%;
  }
}
@keyframes an{
    to{
    transform:translate(0);
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
  line-height: 1.4;
  z-index: 3;
  text-shadow: 0 0 0.3em #e0d9be,0 0 0.2em #e0d9be,0 0 0.1em #e0d9be;
  }

.title{
  position: relative;
  font-size:2.3em;
  margin:.6em auto 0;
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
  margin:1em auto;
  line-height: 1.8;
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
  margin: 0 auto 0 size(200);
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
  position: relative;
  transform: translate(130%,-100%);
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
.img{
  top: -22%;
    right: 0%;
    width: 40%;
}

  .txt{
  position: relative;
  width: sizem(310);
margin:1.5em auto 5em;
  left:0;
  top:0;
  font-size: sizem(14);
  }
.title{
  font-size:1.5em;
}
  /* Swipe */
  .swipe {
    position: relative;
    width: 100%;
    height: sizem(240);
    top:0;
    left:0;
    margin: 0;
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
          img: require('./s5/1.jpg'),
          name: '尖凍山步道',
        },
        {
          img: require('./s5/2.jpg'),
          name: '尖凍山步道',
        },
        {
          img: require('./s5/3.jpg'),
          name: '義學坑自然公園',
        },
        {
          img: require('./s5/4.jpg'),
          name: '應化大排生態園區',
        },
        {
          img: require('./s5/5.jpg'),
          name: '辭修公園',
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
