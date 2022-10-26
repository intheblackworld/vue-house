<template>
  <div>
    <div class="section2">
      <img v-if="isPC" src="./s2/style_2.png" class="style2">
      <img v-else src="./s2/style_2_m.png" class="style2">
      <div class="txt">
      <div class="title" data-aos="fade-up" data-aos-delay="200" >鳳鳴中軸線 全球宜居指標再進化</div>
      <div class="subtitle" data-aos="fade-up" data-aos-delay="200" >雙鐵生活｜校園首席｜5大公園</div>

      <div v-if="isPC" class="desc" data-aos="fade-up" data-aos-delay="300">
        2012年，鶯歌獲選全球宜居城市<br>
        2022年，鳳鳴重劃區領銜升級，未來還會更好！<br>
        捷運三鶯線、台鐵鳳鳴站2年內到位，北北桃生活圈更完整。
      </div>
      <div v-else class="desc" data-aos="fade-up" data-aos-delay="300">
        2012年<br>
        鶯歌獲選全球宜居城市<br>
        2022年<br>
        鳳鳴重劃區領銜升級，未來還會更好！<br>
        捷運三鶯線、台鐵鳳鳴站2年內到位<br>
        北北桃生活圈更完整。
      </div>

      <div v-if="isPC" class="desc2" data-aos="fade-up" data-aos-delay="300">
        鳳鳴國小第一排，步行3分鐘擁8800坪公園，文教綠意皆滿分。<br>
        千坪大基地、四季庭園、雙面臨路、優美綠園道、全齡公設<br>
        鳳鳴國小首席
      </div>
      <div v-else class="desc2" data-aos="fade-up" data-aos-delay="300">
        鳳鳴國小第一排，步行3分鐘擁8800<br>
        坪公園，文教綠意皆滿分。<br>
        千坪大基地、四季庭園、雙面臨路<br>
        優美綠園道、全齡公設<br>
        鳳鳴國小首席
      </div>

      </div>
      <!--
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt>
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div v-if="isPC" class="pagination absolute flex-ac" data-aos="fade" data-aos-delay="200">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)">
            <span :class="`${slideIndex === index ? 'active' : ''}`"></span>
          </div>
        </div>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <div class="prev-btn" @click="decIndex"></div>
          <div class="next-btn" @click="addIndex"></div>
        </div>
      </div>
    </div>
    -->
      
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 { 
  width:100%;
  height:auto;
  position: relative;
  padding: 5vw 0;
  font-family: "Noto Serif TC";
&::after{content: "";clear: both;display: block;}
}

.style2{
  position: absolute;
  width:size(650);
  top:size(-810);
  right: 0;
  mix-blend-mode: hard-light ;
} 

.img{width: size(800);position: absolute;left: 0;bottom: size(-130);
z-index: 2;
img{width: 100%;}
}

@keyframes an{
    to{
      transform: translateX(0);
    }
}
.txt{
  position: relative;
  width: size(1500);
  margin: 1.5em auto 3em auto;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(19);
  font-weight: 600;
  line-height: 1.4;
  z-index: 2;
 // color: #fff;

.title{
  font-size:size(35);
  margin:0 auto 0;
  color: #F9E07E;
  text-align: center;
}
.subtitle{
  font-size:size(44);
  margin-top: size(10);
  text-align: center;
  color: #fff;
  }

.desc {
  width: size(1000);
  color: #F9E07E;
  font-size:size(22);
  padding: size(20) size(200);
  margin: size(20) auto;
  line-height: 1.8;
  border:1px solid #B48328;
}
.desc2 {
  width: size(1000);
  color: #F9E07E;
  font-size:size(35);
  margin: size(20) auto;
  text-align: center;
  line-height: 1.8;
}
  }

  
/* Swipe */
.swipe {
  width: 100%;
  height:  size(790);
  z-index: 1;
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
    font-family: "Noto Sans TC";
    left: 0;
    width: 98%;
    bottom: 1em;
    color: #fff;
    font-size: size(18);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: right;
    text-shadow: 0 0.3em 1em #0003 ,0 0 .2em #000;
  }
}

.pagination {
  width: auto;
  bottom:-2em;
  right: 0;
  left: 0;
  margin: 0 auto;
  justify-content: center;
  font-size: size(15);
}

.pagination-dot {
  padding:0.4em;
  margin: 0 0.4em;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 0.8em;
    height:0.8em;
    border-radius: 0.8em;
    position: relative;
    border:1px solid #F9E07E;
    transition: all 0.5s;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      background: #fff;
      border-radius: 50%;
      opacity: 1;
      position: absolute;
      top: 0;
      // transform: translateY(-50%);
      left: 0;
      transition: all 0.3s;
      transform-origin: 50% 50%;
      transform: scale(0);
    }
    &.active {
      &::before {
        transform: scale(1);
      }
    }
  }
}

.swipe-btns {
  width: 100%;
  height: 100%;
  padding: 0 0;
  z-index: 3;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  .prev-btn,
  .next-btn {
    position: relative;
    height: 100%;
    width: 2em;
    font-size: size(20);
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: translateX(100%);
      background-color: #0004;
      transition: all 0.3s;
    }
    &::after {
      content: "";
      width: 1em;
      height: 1em;
      position: absolute;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.75em);
      border: solid #fff;
      border-width: 0.1em 0.1em 0 0;
      transform: rotate(45deg) translate(-10%, 10%);
    }
    &:hover:before {
      transform: translateX(0%);
    }
    &:hover:after {
      animation: btn 0.5s ease-in-out infinite alternate;
    }
  }
  .prev-btn {
    transform: scaleX(-1);
  }
}

@keyframes btn {
  to {
    transform: rotate(45deg) translate(10%, -10%);
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
    height: 100%;
    min-height: auto;
    max-height: initial;
    padding: sizem(30) 0;
  }
  .style2{
    width:sizem(220);
    right: sizem(-0);
    top: sizem(-280);
    z-index: 2;
  } 
  .img{width: sizem(300);left: sizem(45);bottom: sizem(-50);}
  .txt{
    position: relative;
    width: sizem(320);
    margin:0 auto 3em;
    padding-top: 7vw;
    left:0;
    top:0;
    
    font-size: sizem(15);
    .title{
      font-size:sizem(18);
    }
    .subtitle{
      font-size:sizem(23);
    }
    .desc {
      width: sizem(330);
      color: #F9E07E;
      font-size:sizem(15);
      padding: sizem(20) sizem(15);
      margin: sizem(20) auto;
      line-height: 1.8;
      border:1px solid #B48328;
    }
    .desc2 {
      width: sizem(310);
      color: #F9E07E;
      font-size:sizem(18);
      margin: size(20) auto;
      text-align: center;
      line-height: 1.8;
    }
  }

   /* Swipe */
  .swipe {
    height: sizem(250);
  }
  


  .swipe-item {
    .slide-name {
    font-size: sizem(12);
    bottom: .5em;
    }
  }


  .swipe-btns {
    .prev-btn,
    .next-btn {
      font-size: sizem(15);
      background-color: rgba(0, 0, 0, 0);
      &::before {display: none;
      }
      &::after {
        border-color: #fff;
        border-width: 0.15em 0.15em 0 0;
        animation: btn 0.5s ease-in-out infinite alternate;
      }
    }
  }
}

</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section2',

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
          img: isMobile?require('./s2/slider_1_m.jpg'):require('./s2/slider_1.jpg'),
          name: '圖說',
        },
        {
          img: isMobile?require('./s2/slider_1_m.jpg'):require('./s2/slider_1.jpg'),
          name: '圖說',
        },
        {
          img: isMobile?require('./s2/slider_1_m.jpg'):require('./s2/slider_1.jpg'),
          name: '圖說',
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
