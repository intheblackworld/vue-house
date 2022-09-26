<template>
  <div>
    <div class="section2">
      <div class="box">
        <img src="./s1/start1.png" class="start1" />
      </div>
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
     <!--  -->    <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <div class="prev-btn" @click="decIndex">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='31.5,57 4.5,30 31.5,3 '/%3E%3C/svg%3E" alt="_prev">
            </div>
            <div class="next-btn" @click="addIndex">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='3.5,3 30.5,30 3.5,57 '/%3E%3C/svg%3E" alt="_next">
            </div>
          </div>
        </div>
     <!--  --><div class="pagination absolute flex-ac" v-if="isPC">
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div> 
      </div>
      <div class="txt">
      <div class="title" data-aos="fade-up" data-aos-delay="200">萬大線LG14預定站<br v-if="isMobile" />  輕快約2分</div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">捷運宅含金量就是驚人！雙北金鑽潛力捷運線，首選萬大樹林線，串連新莊、樹林、板橋、土城、雙和及台北萬華、中正區。【樂晴】約2分鐘即抵LG14預定站，此刻入主，坐享捷運動工、完工、通車的波段式無限潛力。
</div>
      </div>
    <bear class="bear" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width:100%;
  height:auto;
  position: relative;
  margin:3.3vw auto 0;
  padding: 10vw size(198) 10vw;
&::after{content: "";clear: both;display: block;}
  
  &::before{
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: -3.3vw;
    height: 420vw;
    width: 100%;
    z-index: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 940 4375' fill='none' stroke='%23000' stroke-width='1' stroke-opacity='0.2' stroke-dasharray='7,7'%3E%3Cpath d='M336.1,0C1326.5,346.2-354.1,773.2,528,976.4c587.2,135.2,182.9,415.9-234.5,489.7c-341.3,60.4-167.3,394.2,109,479.6c247.7,76.6,329.6,394.9-36.7,505c-519.6,156.2-471.1,911.8,178.3,673.4c750.1-275.4,116.3,463.6,260.9,593.8c110.5,99.5,105.5,270-201.5,346c-474.3,117.4-367.6,276.1-267.3,311.2'/%3E%3C/svg%3E");
    background-position: 50% 0;
    background-repeat: repeat-y;
    background-size: 98% auto;
    overflow: hidden;//試底下多的那塊哪來的
  }
}
.box{
  background: #64BBBA;
  position: absolute;
  top: calc(50% - 650 * 50vw / 1920);
  right: size(170);
  width: size(650);
  height: size(650);
  font-size: size(85);
  border-radius:1em;
  transform: rotate(-45deg);
&::before{content: "";width: 100%;display: block;height: 100%;
border-radius:1em;
  border: 2px solid #CA2458;
  transform: rotate(5deg);
}
.start1{
    position: absolute;
    top:size(-40);left:size(320);
    font-size:size(21);
filter: drop-shadow(0em 0.1em 0.15em rgba(0, 0, 0, 0.25));
    width:3em;}
}
.bear{
  position: absolute;
  right: size(160);
  bottom: size(-25);
  width: size(235);
  transform:scaleX(-1);
  z-index: 3;pointer-events: none;
}
.txt{
float: right;
  position: relative;
  width: size(590);
  height: size(560);
  padding: 0 ;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(19);
  font-weight: 400;
  line-height: 1.4;
  z-index: 1;
  margin-right: 0;
  display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }

.title{
  font-size:2.2em;
  margin:0 auto 0;
  font-weight: 600;
  width: 100%;
  text-shadow: 0 0.1em 0.1em  rgba(0, 0, 0, 0.25);
}
  .subtitle{font-size: 1.25em;
    padding:.75em 0 0 0;
  }
.desc {
 // margin:1em auto;
  padding:1em 0 0 0;
  line-height: 1.6;
  //letter-spacing:0.05em;
  list-style: circle;
  overflow: hidden;
  li{list-style:inherit;float: left;margin: 0.3em 0 0.3em 1.4em;width:calc(100% - 1.4em);
  }
}
/* Swipe */

.swipe {
  position: relative;
  float: left;
  width: size(840);
  height: size(560);
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
    line-height: 1.4;
    letter-spacing: 0.89px;
    text-align: right;
    color: #ffffff;
   text-shadow:0 0.1em 0.3em #000;
   z-index: 3;
}

.swipe-wrap {
  width: 100%;
  height: 100%;
}
.swipe-item {
  width: 100%;
  height: 100%;
  z-index: 0; 
  img {position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    object-fit: cover;
  border-radius: size(30);
  box-shadow: size(10) size(10) size(15) #0004;
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
  left:calc(100% + 360 * 100vw / 1920);
  justify-content: center;
  font-size: size(20);
  transform: translateX(-50%);

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
  .section2 {
    width: 100%;
    height: auto;
    padding: 0 0 sizem(70) 0;
  &::before{
    top: -6vw;
    height: 1500vw;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 375 5240' fill='none' stroke='%23000' stroke-width='1' stroke-opacity='0.2' stroke-dasharray='7,7'%3E%3Cpath d='M112,9.9c207.3,589.8-232.4,651.4,75.5,959.6c605.5,606.2-552.7,487.3,73.3,1038.2c139.4,122.7,9.9,222.5-98.2,361.4c-126.5,162.6-244.3,377.9-0.4,547.1c449.6,311.7-401,363.4-1.3,991.3c459.8,722.4-7.7,692.2,163.2,827.4c201,159-267.4,333.9-217.9,508.5'/%3E%3C/svg%3E");
    background-size: 98% auto;
  }

  }
.box{
  width: sizem(450);
  height: sizem(450);
  top: sizem(150);
  right: sizem((375 - 450) * .5);
  font-size: sizem(65);
.start1{
    top:sizem(290);
    left:sizem(-20);
    font-size:sizem(12);}
}
.bear{
  right: sizem(24);
  bottom: sizem(20);
  width: sizem(135);
}
  .txt{
    width: sizem(335);
    height: auto;
    float: none;
    margin:0em auto 0em;
    padding: 2em 1em 11em;
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
    float: none;
    width: sizem(345);
    height: sizem(250);
    margin: auto;
  }
  .slide-name {
    font-size: sizem(12);
  }
.swipe-item {
  img {
  border-radius: sizem(20);}
}
  .swipe-btns {
  font-size: sizem(15);top: sizem(6);
  }
}
</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import bear from './bear.vue'

export default {
  name: 'section2',
  components: {
    bear,
  },

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
          img: require('./s2/1.jpg'),
          name: '捷運示意圖',
        },
        {
          img: require('./s2/2.jpg'),
          name: 'LG14站模擬圖<br>圖片來源：新北市政府捷運工程局<br>詳細規劃仍以政府公布為準',
        },
        {
          img:require('./s2/3.jpg'),
          name: '樹林線路線圖<br>圖片來源：新北市政府捷運工程局<br>詳細規劃仍以政府公布為準',
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
