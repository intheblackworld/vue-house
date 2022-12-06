<template>
  <div class="section2">
    <div class="txt" data-aos="fade" data-aos-delay="0">
      <p data-aos="fade-down" data-aos-delay="200">
        隔壁的昌平國小新生開學第一天<br />
        牽著他的手走路到學校，2個新手一樣緊張<br />
        對面頭前國中資優班畢業那一天<br />
        看著他的背影長得比我高<br />
        心中酸酸甜甜的驕傲起來...
        <span>School</span>
      </p>
      <img src="./s2/img.png" alt="img" class="img" data-aos="fade" data-aos-delay="100" />
      <p class="p2" data-aos="fade-down" data-aos-delay="200">
        新莊副都心頭前國中正對面<br />
        昌平國小旁，自家公托中心<br />
        牽他到昌平上課，看他從頭前畢業<br />
        陪他到輔大註冊<br />
        努力學習，哈佛也不遠了…
        <span>University</span>
      </p>
      <div class="pic1" data-aos="zoom-in" data-aos-delay="0">
      <img src="./s2/1.jpg" alt="img" /><div class="name">情境示意圖</div></div>

      <div class="swipe pic2" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>

        </div>
      </div>
      <p class="p3" data-aos="fade-down" data-aos-delay="200">
        雙校連璧 書冊成林<br />
        墨香隨步 雙捷隨行<br />
        雙園環繞 風光入座<br />
        美式人生 雙喜臨門<br />
        新莊副都心20%純住宅區內<br />
        僅有1%的極限量好事成雙
        <span>Learning</span>
      </p>
      <div class="pic3" data-aos="fade" data-aos-delay="0">
      <img src="./s2/3.png" alt="img" /><div class="name">情境示意圖</div></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width:100%;
 // height: size(890);
  position: relative;
  font-size: size(25);
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-weight: 400;
  color: #333;
  line-height: 2.35;
  &::after{contain: "";clear: both;}
}
.txt{
  position: relative;
  background: #EEE;
  margin: auto auto auto size(110);
  width: size(1530);  
  padding: size(190) 0 size(20) size(150);z-index: 1;
 p{margin: 0 0 7em;
  position: relative;
span{
  font-family: 'Ruthie';
font-weight: 400;line-height: 1.5;
  font-size: size(110);
  color: #C79E63;
  position: absolute;
  right:size(660);
  bottom:-.56em;
}
&.p3 span{
  right:size(700);
}
&::after{content:"";background: #C79E63;height: 1px;width:80%;display: block;
margin: .7em 0 0 0;}
}
&::before{content:"";background: linear-gradient(90deg, #0005 0%, #0000 30%);height:100%;width:size(260);display: block;
position: absolute;left: 100%;top: 0;
}
  }
img{object-fit: cover;vertical-align: bottom;}
.name{position: absolute;bottom: .5em;left: 1em;color: #FFF;
  font-size: size(15);
   text-shadow:0 0.1em 0.3em #0009;
  line-height:1.6;}
.img{position: absolute;right:size(-90);top: size(73);z-index: 2;width:size(330);transform: scale(2);}
.pic1,.pic2{
  position: absolute;
border: size(20) solid #FFF;
box-shadow: size(5) size(5) size(20) #0003;
}

.pic1{right:size(130);top: size(140);
img{width:size(454);
  height: size(716);}
}
.pic2{right:size(-285);top: size(785);z-index: 2;
img{width:size(570);
  height: size(412);}}
.pic3{position: absolute;left:size(790);bottom: 0;
img{width:auto;
  height:size(734);}
.name{left: 60em;}}



/* Swipe */

.swipe {
  position: absolute;
  right:size(-285);top: size(785);z-index: 2;width:size(610);
  height: size(452);
}
.slide-name {
  left:1em;
    bottom:.8em;
    color: #fff;
    font-size: size(15);
    line-height: 1;
    text-align: left;
   text-shadow:0 0.1em 0.3em #0009;
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
  font-size: sizem(13);
  }
  .txt{
  width: sizem(330);
margin:auto auto auto 0;
  padding: sizem(60) 0 sizem(20) sizem(33);
  p{letter-spacing: .1em;margin: 0 0 5em;
span{
  font-size: sizem(40);
  right:sizem(12);
  bottom:-.56em;letter-spacing: 0;
}
&::after{width:95%;
margin: 1.4em 0 0 0;}
&.p2 {
  &::after{
margin: 2.9em 0 0 0;}
}
&.p3 {margin: 0 0 4em;
  span{
  right:auto;
  left: 0;
}

&::after{
margin: 2.9em 0 0 0;}
}}
  }
.name{
  font-size: sizem(12);}
  .img{position: absolute;right:sizem(-25);top: sizem(263);z-index: 2;width:sizem(101);}

  .pic1,.pic2{
  position: relative;
border: sizem(5) solid #FFF;
box-shadow: sizem(2) sizem(2) sizem(10) #0003;
}
.pic1{left: auto;
  right: auto;
  top:  auto;
  float: left;
  margin:sizem(-80) auto auto sizem(-15);
img{width:sizem(154);
  height: sizem(210);}
}
.pic2{left: auto;
  right: auto;
  top:  auto;
  display: inline-block;
  margin:sizem(-120) auto sizem(7) sizem(130);
img{width:sizem(208);
  height: sizem(166);}}
.pic3{position: absolute;left:sizem(153);bottom: 0;
img{width:auto;
  height:sizem(225);}
.name{left: 12em;}}
  /* Swipe */
  .swipe {left: auto;
  right: auto;
  top:  auto;
  display: inline-block;
  margin:sizem(-120) auto sizem(7) sizem(130);width:sizem(218);
  height: sizem(176);
}
.swipe-item {
  .slide-name {
    font-size: sizem(12);
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
          img: require('./s2/21.jpg'),
          name: '塭仔圳溼地公園',
        },
        {
          img: require('./s2/22.jpg'),
          name: '頭前國中',
        },
        {
          img: require('./s2/23.jpg'),
          name: '昌平國小',
        },
        {
          img: require('./s2/24.jpg'),
          name: '昌平國小',
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
