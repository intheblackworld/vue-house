<template>
    <div class="section3">
      <div class="box">
      <div class="title" data-aos="fade-down" data-aos-delay="0">繁華之心</div>
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div>
        </div>
      </div>
      <div class="txt">
      <div class="subtitle" data-aos="fade-down" data-aos-delay="200" >北歐莊園好宅幸福樂聚</div>
      <hr class="hr">
      <div class="desc" data-aos="fade-up" data-aos-delay="300">
      宜誠【樂聚】穩踞「四鄉鎮重畫區」多核心：<br>
新屋頭洲、中壢、大園、青埔交界，<br>
享城際中心樞紐地位，擁城市繁華更擁自然綠意。
      </div>
     <!-- <ul class="desc">
        <li data-aos="fade-up" data-aos-delay="300">日月光廣場＋家樂福+延吉+學府商圈享樂全能購足</li>
        <li data-aos="fade-up" data-aos-delay="400">清水國小＋中正國中，書香校園承載孩子金色未來</li>
        <li data-aos="fade-up" data-aos-delay="500">土城體育場 + 運動中心＋大清運動公園運森度呼吸</li>
      </ul>  -->
      </div>
      <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="500" v-if="isPC">
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div>
    </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width:100%;
  height:auto;
  position: relative;
  background: #FFF;

  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  line-height: 1.2;
  color: #666;
  font-weight: 400;
  padding: 0;
  font-size: size(17);
  padding: 0 0 6em;

  .box{
  width: size(1500);
  margin:0em auto 0em;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
    align-items:stretch;
  position: relative;
  }
}

.title{
  position: relative;
  font-size: size(40);
  padding: 2em 0 .8em;
  letter-spacing:0.06em;
  color: #51858a;
  font-weight: 800;
  text-align: center;
  width: 100%;
}

.txt{
  position: relative;
  width: size(610);
  z-index: 3;
  }


.subtitle {
  position: relative;
  font-size: size(30);
  margin:4em auto 0.8em;
  letter-spacing:0.04em;
  color: #51858a;
}

.hr{background: none;border: 0;opacity: .5;
border-bottom:1px solid currentColor;}
.desc {
  margin:1em auto;
  line-height: 2;
  letter-spacing:0.05em;
  list-style: circle;
  overflow: hidden;
  li{list-style:inherit;float: left;margin: 0.3em 0 0.3em 1.4em;width:calc(100% - 1.4em);
  }
}

/* Swipe */
.swipe {
//  position: absolute;
  width: size(840);
  height: size(469);
  top: size(185);
  right: size(199);
  object-fit: cover;
  z-index: 3;
  order:3;
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
  bottom: size(0);
  left:0;
  justify-content: center;
  font-size:size(13);
}

.pagination-dot {
  padding:0.3em;
  margin: 0 0.3em;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 1em;
    height: 1em;
   // border-radius: 50%;
   // border: 4px solid  #ccc;
   background: #ccc;
    position: relative;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      display: block;
   background: #245367;
   // border-radius: 50%;
   // border: 2.1px solid  #e38023;
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
        top: 0%;
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

    font-size: sizem(14);
    text-align: justify;
  .box{
  width:100%;
  margin:0em auto 0em;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
    align-items:stretch;
  position: relative;
  }

  }
  .light{
  top:sizem(410);
  left:sizem(190);
  width:sizem(200);

  }
  .txt{
  position: relative;
    width: sizem(320);
margin:1.5em auto 3em;
  left:0;
  top:0;
  }
.title{
    font-size: sizem(30);
  letter-spacing:0.01em;
}
  .subtitle {
    font-size: sizem(17.6);
  letter-spacing:0em;
  margin:1em auto 0em;
  }
  .desc {
  margin:0em auto;
  letter-spacing:0em;
  }

  /* Swipe */
  .swipe {
    position: relative;
    width: 100vw;
    height: sizem(250);
    min-height: auto;
    top:0;
    left:0;
  order:initial;
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
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section3',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s3/1.jpg'),
          name: '3D透視僅供參考',
        },
        {
          img: require('./s3/2.jpg'),
          name: '室內創意表現僅供參考',
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
