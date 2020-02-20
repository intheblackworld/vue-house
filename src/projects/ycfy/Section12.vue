<template>
  <div class="section12">
    <div class="bg relative">
      <div v-if="!isMobile">
        <!-- img src="./s12/bg.jpg" alt class="img" / -->
        <img src="./s12/bg2.png" alt class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s12/titlea.png" alt="豐藏完美 家的極大成" class="img" />
        <div :class="`slide`" data-aos="fade" data-aos-delay="400">
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
        <div class="text">規劃設計蘊藏完美，尺度恰到好處，游刃有餘的起居空間<br />「頤昌豐岳」懂你對家的要求，豐美2-4房納藏精彩生活</div>
      </div>
      <div v-if="isMobile">
        <!-- img src="./s12/mo/bg.jpg" alt class="img"  -->
        <img src="./s12/mo/bg2.png" alt class="img" data-aos="fade" data-aos-delay="200" />
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
        <div class="text">規劃設計蘊藏完美，尺度恰到好處，<br />游刃有餘的起居空間「頤昌豐岳」懂你對家的要求，<br />豐美2-4房納藏精彩生活</div>
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
  overflow: hidden;
}

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
  }
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
  &:before{bottom:calc(100vw * 250 / 375);color:rgba(255, 255, 255, 0.8);
   }
  }

  .img {
    &:nth-child(1) {
      position: relative;
    }
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
    position: relative;
    bottom: 0;
    width: 100vw;
    top: auto;
  }

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
