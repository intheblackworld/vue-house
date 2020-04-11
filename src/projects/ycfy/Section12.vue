<template>
  <div class="section12">
    <div class="bg relative">
      <div v-if="!isMobile">
        <!-- img src="./s12/bg.jpg" alt class="img" / -->
        <div class="box" data-aos="fade-left" data-aos-delay="400"></div>
        <img src="./s12/bg3.png" alt="B2傢具配置參考圖" class="img3" data-aos="fade" data-aos-delay="200" />
        <div>B2傢具配置參考圖</div>
        <img src="./s12/titlea.png" alt="豐藏完美 家的極大成" class="img" />
        <div :class="`slide`" data-aos="fade" data-aos-delay="600">
          <div
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s51-slide-${index}`"
          >
            <img :class="`slide-img ${slideIndex === index ? 'active' : ''}`" :src="slide.src" alt />
          </div>
          <div class="slide-text">
              <div class="title" v-html="slideList[slideIndex].title"></div>
            </div>
        </div>
        <div class="text">2+1房完美動線佈局，機能配置妥善運用，主臥寬裕大器，女王級專屬更衣間寵愛老婆，「頤昌豐岳」懂您對家的要求，豐享空間之美</div>
      </div>
      <div v-if="isMobile">
        <!-- img src="./s12/mo/bg.jpg" alt class="img"  -->
        <div class="box" data-aos="fade-left" data-aos-delay="400"></div>
        <img src="./s12/mo/bg2.png" alt="B2傢具配置參考圖" class="img3" data-aos="fade" data-aos-delay="200" />
        <div>B2傢具配置參考圖</div>
        <img src="./s12/mo/titlea.png" alt="豐藏完美 家的極大成" class="img" />
        <div :class="`slide`" data-aos="fade" data-aos-delay="400">
          <div
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s51-slide-${index}`"
          >
            <img :class="`slide-img ${slideIndex === index ? 'active' : ''}`" :src="slide.src" alt />
            <div class="slide-text">
              <div class="title" v-html="slideList[slideIndex].title"></div>
            </div>
          </div>
        </div>  
        <div class="text">2+1房完美動線佈局，機能配置妥善運用，主臥寬裕大器，女王級專屬更衣間寵愛老婆，「頤昌豐岳」懂您對家的要求，豐享空間之美</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background:url(./s12/bg.jpg) fixed;
  background-size: cover;
  position: relative;
  z-index: 2;
  overflow: hidden;height:calc(100vw * 1080 / 1920);
}
.box{
  position: absolute;background-color: rgba(28, 15, 3, 0.35);width: calc(100vw * 970 / 1920);right: 0;top: 0;height:calc(100vw * 1004 / 1920);}
.img {
  width: 100vw;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  display: block;
  &.fix {
    position: fixed;
  }
  &:nth-child(1) {
    position: relative;
  }}
.img3{
  width: 50vw;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  + div {
  color: #666c;font-weight:300;
  position: absolute;font-size: 1.5vw;
  bottom:3em;right: calc( 50% + 2.5em);}
}

.text {
  width: calc(100vw * 550 / 1920);
  font-size: calc(100vw * 20 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1.2px;
  text-align: left;
  color: #666666;
  left: calc(100vw * 138 / 1920);
  top: calc(100vw * 339 / 1920);
  position: absolute;
}

.slide-text {
    font-size:12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 1.2px;
  text-align: right;
  color: #fff9;
  position: absolute;
  right: 1em;
  bottom: 0.5em;
  padding: 2px 10px;
}

.slide {
  width: calc(100vw * 1085 / 1920);
  position: absolute;
  right: 0;
  top: calc(100vw * 110 / 1920);
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    width: calc(100vw * 750 / 1920);
    left: calc(100vw * 120 / 1920);
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size:100% auto ;
    background-image: url('./s12/mo/bg.jpg');
    overflow: visible;
    height:calc(100vw * 1818 / 750);
  &:before{bottom:calc(100vw * 250 / 375);color:rgba(255, 255, 255, 0.8);
   }
  }

  .img3 {width: 100vw;
  + div {
  top:calc(100vw * 1184 / 750);}
  }

  .text {
    width: calc(100vw * 302 / 375);
    height: auto;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing:1.2px;;
    text-align: left;
    color: #666;
    left: calc(100vw * 37 / 375);
    top: calc(100vw * 185 / 375);
    bottom: auto;
    right: auto;
  }

  .slide {
    position: absolute;
    bottom: 0;
    width: 100vw;
    top: auto;
  }
.box{
    top: auto;
    bottom:calc(100vw * 90 / 375);}
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section12',
  mixins: [slider],
  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s12/img1.jpg'),
          title: '樣品屋3D參考示意圖<br>建商保有修改權',
        },
        {
          src: require('./s12/img2.jpg'),
          title: '樣品屋3D參考示意圖<br>建商保有修改權',
        },
        {
          src: require('./s12/img3.jpg'),
          title: '樣品屋3D參考示意圖<br>建商保有修改權',
        },
        {
          src: require('./s12/img4.jpg'),
          title: '樣品屋3D參考示意圖<br>建商保有修改權',
        },
        {
          src: require('./s12/img5.jpg'),
          title: '樣品屋3D參考示意圖<br>建商保有修改權',
        },
      ],
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
