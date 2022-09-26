<template>
  <div>
    <div class="section7" data-aos="fade">
      <div class="swipe" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-txt absolute">
                <span class="building " v-html="slide.building"></span>
                <span class="floor" v-html="slide.floor"></span>
                傢俱配置參考圖
              </div>
              <div class="slide-name absolute">*本傢俱配置參考圖為設計師創意表現，僅供參考！</div>
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
      <div class="title" data-aos="fade-up" data-aos-delay="200" >
       <img src="./s1/start1.png" class="start1" />雙面採光  鈔值2房</div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">潤旺建設堅持實際生活尺度，採用貼近新世代需求的格局，規劃符合舒適宜居空間及自然採光通風，打造高坪效好宅。</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {  
  width:100%;
  height:auto;
  position: relative;
  padding: 10.5vw 0 4vw;
&::after{content: "";clear: both;display: block;}
}
.start1{
filter: drop-shadow(0em 0.1em 0.15em rgba(0, 0, 0, 0.25));
width:1em;margin: 0 0.5em 0 0;}

.txt{
  position: relative;
  width: size(1500);
  margin:1em auto 0em auto;
  padding: 1.6em 3em 2.4em 3em;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(19);
  font-weight: 400;
  line-height: 1.4;
  z-index: 2;
  background: #7EB373;
  border-radius: size(20);
.title{
  font-size:2.2em;
  margin:0 auto 0;
  display: flex;
    align-items:baseline;
  font-weight: 600;
}
  .subtitle{font-size: 1.25em;
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
  height: size(840);
  // left: size(210);
  object-fit: cover;
  z-index: 3;
}
.slide-txt{top:1.1em;left: 1.7em;
color: #000;
  font-size: size(25);
  line-height: 1.2;
.building{
  font-weight: 600;border: 1px solid currentColor;
  display: inline-block;padding: 0 0.2em;
  font-size: 1.65em;
  vertical-align: middle;
}
.floor{display: inline-block;font-size: 1.8em;margin: 0 0.1em 0 0.3em;
  vertical-align: middle;}
}
.slide-name {
    right:1.5em;
    bottom:1em;
    font-size: size(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.89px;
    text-align: left;
    color: #666;
//   text-shadow:0 0.1em 0.3em #000;
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
    object-fit: contain;
    background: #FFF;
  border-radius: size(30);
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
  bottom: -3em;
  right: 2.5em;
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
  .section7 {
  padding: 20vw 0 1vw;
  margin: 17vw 0 0 0;
  background:none;
  background: #7EB373;
    border-radius: sizem(30);
  }
  .img{width: sizem(300);left: sizem(45);bottom: sizem(-50);}
  .txt{
    position: relative;
    width: sizem(345);
    margin:-2em auto 4em;
    padding: 3em 1em 1.3em;
    left:0;
    top:0;
    font-size: sizem(15);
  background:transparent;
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
    width: sizem(345);
    height: sizem(260);
    top:0;
    left:0;
    background: #FFF;
    padding: 0 0 sizem(10);
    border-radius: sizem(20);
  }
.slide-txt{top:-2.7em;left: 0.5em;
color: #fff;
  font-size: sizem(20);
.building{
  font-weight: 600;border: 1px solid currentColor;
  display: inline-block;padding: 0 0.2em;
  font-size: 1.65em;
  vertical-align: baseline;
}
.floor{display: inline-block;font-size: 1.8em;margin: 0 0.1em 0 0.3em;
  vertical-align: baseline;}
}
  .slide-name {
    font-size: sizem(12);
    right:1.2em;
    bottom:-.5em;
  }
.swipe-item {
  img {
  border-radius: sizem(10);}
}
  .swipe-btns {
  font-size: sizem(15);
  display: none;
  }
}

</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section7',

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
          img: require('./s7/a1.jpg'),
          building: 'A1',
          floor: '3F-9F',
        },
        {
          img: require('./s7/a2.jpg'),
          building: 'A1',
          floor: '3F-9F',
        },
        {
          img: require('./s7/a5.jpg'),
          building: 'A1',
          floor: '3F-9F',
        },
        {
          img: require('./s7/a6.jpg'),
          building: 'A1',
          floor: '3F-9F',
        },
        {
          img: require('./s7/b1.jpg'),
          building: 'A1',
          floor: '3F-9F',
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
