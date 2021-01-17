<template>
  <div class="section5">
    <div class="bg relative">
      <div v-if="!isMobile">
        <div class="btn-group">
          <img src="./s5/left.png" alt class="btn left" @click="decIndex" />
          <img src="./s5/right.png" alt class="btn right" @click="addIndex" />
        </div>
        <div :class="`slide`" data-aos="fade" data-aos-delay="600">
          <div
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s5-slide-${index}`"
          >
            <img :class="`slide-img1 ${slideIndex === index ? 'active' : ''}`" :src="slide.src" alt />
            <img :class="`slide-img2 ${slideIndex === index ? 'active' : ''}`" :src="slide.src" alt />
            <div class="slide-text">
              <h3>歐式風華氣韻　對位世界級層峰渡假學</h3>
              <h4>{{slideList[slideIndex].title}}</h4>
              <p>{{slideList[slideIndex].p}}</p>
            </div>
          </div>
        </div>
        <!-- <img src="./s4/img2a.png" alt class="img" data-aos="fade" data-aos-delay="400" />
        <img src="./s4/img3a.png" alt class="img" data-aos="fade" data-aos-delay="600" />
        <img src="./s4/lineba.png" alt class="img" />
        <img src="./s4/stitlea.png" alt class="img" />
        <img src="./s4/titlea.png" alt class="img" />-->
      </div>
      <div v-if="isMobile">
        <!--<img src="./s5/mo/title.png" alt class="img" /> -->
        <div :class="`slide`" data-aos="fade" data-aos-delay="600">
          <div
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s5-slide-${index}`"
          >
            <img :class="`slide-img1 ${slideIndex === index ? 'active' : ''}`" :src="slide.src" alt />
            <img :class="`slide-img2 ${slideIndex === index ? 'active' : ''}`" :src="slide.src" alt />
          </div>
        </div>
        <div class="btn-group">
          <img src="./s5/left.png" alt class="btn left" @click="decIndex" />
          <img src="./s5/right.png" alt class="btn right" @click="addIndex" />
        </div>
        <div class="slide-text">
              <h3>歐式風華氣韻<br>對位世界級層峰渡假學</h3>
              <h4>{{slideList[slideIndex].title}}</h4>
              <p>{{slideList[slideIndex].p}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
  overflow: hidden;height: 100vh;
  width: 100%;
}

.img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: contain;
  display: block;
  z-index: 1;
  &.fix {
    position: fixed;
  }
  // &:nth-child(1) {
  //   position: relative;
  // }
}


.slide {
  height: 100%;
  .slide-img1{
  width: 100%;height: 100vh;filter: blur(10px);opacity: 0.6;}
  .slide-img2{
  position: absolute;top:0;left:50%;height: 100vh;object-fit: contain;transform: translate(-50%)}
}

.slide-text {
  font-size:0.92vw;line-height: 1.6;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 1.2px;
  text-align:justify;
  color: #ffffff;
  position: absolute;
  padding: 3.1vw  5vw 2px 60vw;
  right:0;min-height: 15vw;
  bottom: 0;
  z-index: 5;
    background: url('./s5/tbg.png') no-repeat;
    background-position: top right;
    background-size: 100% auto;

h3{color: #fff;font-size: 1.7em;padding: 0 0 0.8em 3em;}
h4{color: #fff;font-size: 1.3em;}
p{color: rgba(255,255,255, 0.8);width: 36em;}
}

.btn-group {
  width: 95%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  margin: 0 auto;
  right: 0;
  z-index: 3;

  .btn {
    cursor: pointer;
    position: absolute;

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    width: calc(100vw * 1050 / 1920);
    right: calc(100vw * 139 / 1920);
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    overflow: visible;
    height:calc(100vh - 63px);
  }

  .img {
    &:nth-child(1) {
      position: relative;margin: 0 0 5em;
    }
  }

  .slide {
  .slide-img1{height:calc(100vh - 63px);}
  .slide-img2{height:50%;object-fit: cover;width: 100%;}

  }

  .slide-text {
    background-image:url('./s2/mo/titleall.png');
    font-size: calc(100vw * 11 / 375);
    left: calc(100vw * 0 / 375);
    right: auto;
    top: 50%;
    bottom:auto;  
    padding: 4em 2em 0 3em;
    width: 100%;
h3{position: relative;margin: -1.5em 0 0 0;}
p{width: 90%;}
  }

  .btn-group {
    top: 25%;

    > img {
      width: 30px;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section5',
  mixins: [slider],
  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s5/1.jpg'),
          title: '藝術迎賓大廳',
          p: '挑高7米典雅大廳，融入殿堂級大器格局，水晶長吊燈、光彩輝煌壁面，專業管家服務櫃台，貴族氣息流光溢彩。',
        },
        {
          src: require('./s5/2.jpg'),
          title: '歐式午茶交誼廳',
          p: '金碧輝煌的天花線條，融入純白與原木交織的雍容質地，凝鍊國際星級飯店的奢華品味與交誼時光。',
        },
        {
          src: require('./s5/3.jpg'),
          title: 'VIP包廂影廳',
          p: '挑高豪華包廂，頂級影音KTV設備，在宛如私人招待會所的寬敞空間，盡情揮灑精彩的娛樂生活。',
        },
     /*
      {
          src: require('./s5/4.jpg'),
          title: '歐式尊爵饗宴廳',
          p: '挑高牆面引領成熟內斂的優雅氣度；大理石材宴客長桌，彰顯歐式豪門獨享的貴族家宴格局。',
        },
        */
        {
          src: require('./s5/5.jpg'),
          title: '星空豪景SKY BAR',
          p: '在最接近天空的地方，設置一席得以無遮蔽眺望亞灣豪景的空中吧檯，與三五好友舉杯邀月共話人生豪情。',
        },
        {
          src: require('./s5/6.jpg'),
          title: '飯店式迴車廣場',
          p: '飯店式尊榮迴車空間，以高雅的地舖美學搭配氣勢磅礡的門樓入口，從回家的第一刻就能享受國賓級的接待禮遇。',
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
