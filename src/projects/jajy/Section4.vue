<template>
  <div>
    <div class="section4">
    <wimg class="w1 absolute" />
    <wimg class="w2 absolute" />
      <img src="./all/leaf.png" class="leaf absolute"  data-aos="fade" data-aos-delay="200" />
      <div class="txt">
      <h3 class="title">千坪星地標  「五居」 新能量</h3>
      <p class="desc">
【佳昂•家易】座落湖子內重劃區三期的商業中心區<br />
為「佳昂建設」嘉義首發鉅作，推出擁有1682坪廣大基地的地標性建築，對外交通、商圈、學區，機能完善<br />
對內社區規劃、配備選材，臻求完美，專屬【佳昂•家易】的「五居」新能量，絕對煥然一新的城市生活</p>
      </div>


      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
      <!--   <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile" >
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div> -->  
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {  
  width:100%;
  height:auto;
  position: relative;
  padding: 0 0 4.7vw 0;overflow: hidden;
}
.w1{
    top: -42vw;
    left: 20vw;
    width: 90vw;
transform: rotate(100deg);
transform-origin: 0 0;stroke:#FFF;
}
.w2{
    top: 19vw;
    right: -128vw;
    width: 86vw;
    transform: rotate(-152deg)scaleY(-1);
transform-origin: 0 0;stroke:#FFF;
}
.leaf{
    top: 39vw;
    right: 4vw;
    transform: translate(50%,-100%);
    width: 16vw;}
.txt{
  position: relative;
  width: size(1500);
  margin:0 auto 0;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  font-size: size(27);
  font-weight: 700;
  line-height: 1.4;
  z-index: 2;
  font-family: 'Noto Serif TC', serif;

.title{
  font-size:2.2em;
  margin:1.5em auto 0.3em;
  font-weight: 900;
  color: #00537A;
  &::before,
  &::after{
    content: "";
    display: inline-block;
    height: .9em;
    width: .3em;
    background: #006180;
    vertical-align: middle;
    margin:-0.2em 1.55em 0;
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
  margin:0.1em auto 1.9em;
  line-height: 1.6;
  list-style: circle;
}
  }
/* Swipe */
.swipe {
  position: relative;
  margin: auto;
  width: size(1500);
  height: size(590);
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
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section4 {
    width: 100%;
    height: auto;
    min-height: auto;
    max-height: initial;
  }
  .w1{
    top: -30vw;
    left: 27vw;
    width: 124vw;}
  .w2{
    top: 12vw;
    right: -162vw;
    width: 117vw;
  }

.leaf{
    top: 105vw;}

  .txt{
  //@include img_c_m(370, 50);
    font-size:sizem(12);
    width:sizem(310);
    margin: auto;
  .title {display: flex;
  font-size:1.9em;
    justify-content:space-between;
    align-items:center;
  margin:1.7em auto 0.3em;
    // width: 13.5em;
  &::before,
  &::after{
    content: "";
    display:block;
    flex: 0 0 3px;
    background: #006180;
  //  height: auto;
  //  vertical-align: middle;
    margin:0;
    }
    }

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
import wimg from './w.vue'

export default {
  name: 'section4',

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
          img:isMobile?require("./s4/1m.png"):require("./s4/1.png"),
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
