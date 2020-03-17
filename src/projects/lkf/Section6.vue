<template>
  <div class="section6">
    <div class="bg">
      <div class="container">
        <div class="container-title">
          <div
            class="title"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >國際飯店 由你做主</div>
          <hr data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" />
          <div
            class="desc"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >Sense Design</div>
        </div>
        <div class="slide relative" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">
          <div v-if="!isMobile">
            <div class="slide-title">1972HOTEL，買下復古年代主題飯店</div>
            <div class="slide-title2">鎖定商務、觀光強大商機!國際設計主題飯店風潮帶動龐大住房率!</div>
            <div class="slide-title3">英倫美學外觀氣韻，80米豪奢尺度非凡視野</div>
            <div class="slide-desc">「蘭桂.坊」結合1972主題飯店風格設計，整體外觀以英式風尚體現優雅的紳士品味，開展80米的大氣度建築，無論近觀遠望，1972HOTEL都將寫下大台北設計飯店的全新風潮!</div>
          </div>
          <img
            v-for="(slide, index) in slideList1"
            :class="`slide-img ${slideIndex1 === index ? 'active' : ''}`"
            :key="`s6-slide-${index}`"
            :src="slide"
            alt
          />
          <div class="btn-group flex-jc flex-ac flex-mobile-jb">
            <div
              class="dot"
              v-for="(slide, index) in slideList1"
              :key="`s6-dot-${index}`"
              @click="slideIndex1 = index"
            ></div>
            <img @click="decMultiIndex(1)" src="./small_left_btn.png" alt class="arrow-btn" />
            <img @click="addMultiIndex(1)" src="./small_right_btn.png" alt class="arrow-btn" />
          </div>
          <div class="slide-footer">建築外觀3D示意圖(實際依完工現況為準)</div>
        </div>
        <div v-if="isMobile" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">
          <div class="slide-title">1972HOTEL，買下復古年代主題飯店</div>
            <div class="slide-title2">鎖定商務、觀光強大商機!國際設計主題飯店風潮帶動龐大住房率!</div>
            <div class="slide-title3">英倫美學外觀氣韻，80米豪奢尺度非凡視野</div>
            <div class="slide-desc">「蘭桂.坊」結合1972主題飯店風格設計，整體外觀以英式風尚體現優雅的紳士品味，開展80米的大氣度建築，無論近觀遠望，1972HOTEL都將寫下大台北設計飯店的全新風潮!</div>
          </div>

        <!-- 
        <div
          class="slide relative"
          style="margin-bottom: 50px;"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="1500"
        >
        <div v-if="!isMobile">
            <div class="slide-title">新東方時尚 雅緻盛宴</div>
            <div
              class="slide-desc"
            >宛如頂級上海外灘超星級飯店門廳，優雅的窗櫺融入現代簡約的細膩雅緻，從迎賓門廳、LOUNGE交誼、多功能健身房等，一場極致的中式優雅品味，在回家的每一刻都是享受</div>
          </div> -->
          <!-- <img
            v-for="(slide, index) in slideList2"
            :class="`slide-img ${slideIndex2 === index ? 'active' : ''}`"
            :key="`s6-slide-${index}`"
            :src="slide.src"
            alt
          />
          <div class="btn-group flex-jc flex-ac flex-mobile-jb">
            <div
              class="dot"
              v-for="(slide, index) in slideList2"
              :key="`s6-dot-${index}`"
              @click="slideIndex2 = index"
            ></div>
            <img @click="decMultiIndex(2)" src="./small_left_btn.png" alt class="arrow-btn" />
            <img @click="addMultiIndex(2)" src="./small_right_btn.png" alt class="arrow-btn" />
          </div>
          <div class="slide-footer">{{slideList2[slideIndex2].title}}</div>
        </div>
        <div class="slide relative" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">
          <iframe width="100%" height="100%" v-if="isShowVR" src="https://www.youtube.com/embed/CUi8vTFA0eM?rel=0&autoplay=1"></iframe>
          <img v-else src="./s6_720.jpg" alt="" class="slide-img active" style="cursor: pointer;" @click="isShowVR = true">
          <div class="slide-footer">公設3D示意圖(實際依完工現況為準)</div>
        </div>
        <div v-if="isMobile" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">
          <div class="slide-title">新東方時尚 雅緻盛宴</div>
          <div
            class="slide-desc"
          >宛如頂級上海外灘超星級飯店門廳，優雅的窗櫺融入現代簡約的細膩雅緻，從迎賓門廳、LOUNGE交誼、多功能健身房等，一場極致的中式優雅品味，在回家的每一刻都是享受</div>
        </div> -->

        <div class="slide relative" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">
          <div v-if="!isMobile">
            <div class="slide-title">飯店房東 一次買進</div>
            <div class="slide-title3">國際精裝頂規空間，無須整理直接出租
</div>
            <div class="slide-desc">「蘭桂.坊」以五星級飯店為規畫藍圖，國際質感設計，每一個空間都細心規劃，符合國際商旅觀光需求，無論是短期商務會議或是旅遊休閒；蛋形設計浴缸與室內高達10-15坪的行政套房規格，空間的寬敞與高格調的藝術風格，讓訪客入住的開始，就是一場難忘之旅!</div>
          </div>
          <iframe width="100%" v-if="isShow3D" height="100%" src="https://www.youtube.com/embed/c87k-PzSKHg?rel=0&autoplay=1"></iframe>
          <img v-else src="./s6_3d.jpg" alt="" class="slide-img active" style="cursor: pointer;" @click="isShow3D = true">
          <div class="slide-footer">樣品屋3D示意圖(實際依完工現況為準)</div>
        </div>
        <div v-if="isMobile" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">
          <div class="slide-title">飯店房東 一次買進</div>
          <div class="slide-desc">「蘭桂.坊」以五星級飯店為規畫藍圖，國際質感設計，每一個空間都細心規劃，符合國際商旅觀光需求，無論是短期商務會議或是旅遊休閒；蛋形設計浴缸與室內高達10-15坪的行政套房規格，空間的寬敞與高格調的藝術風格，讓訪客入住的開始，就是一場難忘之旅!</div>
        </div>

        <div class="slide relative" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">
          <div v-if="!isMobile">
            <div class="slide-title">一條龍包套投資  財富一路通</div>
            <img class="ss4 slide-img" src="./s6_img4-1.jpg" />
          </div>
          <!-- <div class="btn-group flex-jc flex-ac flex-mobile-jb">
            <div
              class="dot"
              v-for="(slide, index) in slideList4"
              :key="`s6-dot-${index}`"
              @click="slideIndex4 = index"
            ></div>
            <img @click="addMultiIndex(4)" src="./small_left_btn.png" alt class="arrow-btn" />
            <img @click="decMultiIndex(4)" src="./small_right_btn.png" alt class="arrow-btn" />
          </div>-->
        </div>
        <div v-if="isMobile" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">
          <div class="slide-title">一條龍包套投資  財富一路通</div>
          <img class="ss4 slide-img" src="./s6_img4-1_m.jpg" />
          <!-- div class="slide-desc">『蘭桂‧坊』以頂級生活服務，禮遇每位尊客，從飯店門廳服務、到生活服務與管理服務一應俱全，專屬為您打造您的生活禮遇</div -->
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-color: #fff;
  background-image: url('./s6_bg.png');
  background-position: 100% 0%;
  background-attachment: fixed;
  background-size: auto;
  position: relative;
  padding-top: 25px;
}

.container {
  width: 1380px;
  margin: 0 auto;
  padding-top: 70px;
  padding-bottom: 40px;
  background-color: rgba(30, 31, 31, 0.88);
  line-height: 1.6;
}
.container-title {
  .title {
    width: 298px;
    height: 48px;
    font-size: 36px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
    margin: 0 auto;
    margin-bottom: 15px;
  }

  hr {
    width: 304.7px;
    height: 0;
    border: solid 1px #c08d4e;
    margin: 0 auto;
    margin-bottom: 5px;
   + .desc {
    font-family: TimesNewRomanPSMT;
  }
  }

  .desc {
    width: 128px;
    height: 20px;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #c08d4e;
    margin: 0 auto;
    margin-bottom: 30px;
  }
}

.slide {
  width: 850px;
  margin: 0 auto;
  margin-bottom: 10vw;
  z-index: 1;

  .dot {
    background-color: #c08d4e;
  }

  .slide-img {
    margin: 0 auto;
    width: 100%;
    max-height: 70vh;
    object-fit: cover;
    left: 0;
    right: 0;
    &.ss4{      
    max-height:initial;
    }
  }

  iframe {
    margin: 0 auto;
    width: 100%;
    height: 477px;
    object-fit: cover;
  }

  .VideoBg {
    height: 477px !important;
  }

  .btn-group {
    bottom: 50px;
  }

  .slide-footer {
    position: absolute;
    bottom: -27px;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1a1311;
    background-color: #c08d4e;
  }
}

.slide-title {
  font-size: 26px;
  color: #eb6;
    }
.slide-title2{
  font-size: 20px;
  color: #ccc;
}
.slide-title3{
  margin-top: 0.8em;
  font-size: 18px;
  color: #c08d4e;
 }

.slide-desc {
  font-size: 13px;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
}

.arrow-btn {
  display: none;
}

@media only screen and (min-width: 1281px) and (max-width: 1440px) {
  .container {
    width: 1024px;
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  .container {
    width: 1024px;
  }
  .fullscreen {
    height: auto;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    width: 900px;
  }
  .slide {
    .slide-img {
      width: 100%;
      max-height: auto;
    }

    iframe {
      height: 70vh;
    }
  }
}

@media screen and (max-width: 767px) {
  .container {
    padding-top: 50px;
    width: 92vw;
  }

  .container-title {
    .title {
      width: 184px;
      height: 21px;
      font-size: 22px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
    }

    hr {
      width: 201px;
    }

    .desc {
      width: 110px;
      height: 13px;
      font-family: TimesNewRomanPSMT;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #c08d4e;
    }
  }
  .dot {
    display: none;
  }

  .arrow-btn {
    display: block;
  }

  .slide {
    width: 100%;
    .btn-group {
      width: 92%;
      bottom: 40%;
    }

    .VideoBg {
      width: 87.4vw !important;
      margin: 0 auto;
      height: calc(87.4vw * 240 / 320) !important;
    }

    iframe {
      width: 94.5%;
      margin: 0 auto;
      height: calc(94.5vw * 184 / 328);
    }

    }

    .slide-footer {
      width: 95%;
      margin: 0 auto;
      left: 0;
      right: 0;
    }
  }

    .slide-img {
      width: 95%;
      max-height: auto;
    &.ss4{      
      width: 100%;
    }
  .slide-title {
    padding-top: 15px;
    margin-bottom: 10px;
  }

  .slide-desc {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 50px;
    text-align: justify;
  }
}
</style>

<script>
import slider from '@/mixins/slider.js'
import { isMobile } from '@/utils'
import VideoBg from '@/components/VideoBg.vue'

export default {
  name: 'section6',
  mixins: [slider],

  components: {
    VideoBg,
  },

  data() {
    return {
      slideIndex1: 0,
      slideIndex2: 0,
      slideIndex4: 0,
      slideList1: [require('./s6_img1-1.jpg'), require('./s6_img1-2.jpg')],
      slideList2: [
        {
          src: require('./s6_img2-1.jpg'),
          title: '迎賓大廳3D示意圖(實際依完工現況為準)',
        },
        {
          src: require('./s6_img2-2.jpg'),
          title: '迎賓廊道3D示意圖(實際依完工現況為準)',
        },
        {
          src: require('./s6_img2-3.jpg'),
          title: '交誼廳3D示意圖(實際依完工現況為準)',
        },
        {
          src: require('./s6_img2-4.jpg'),
          title: '洗衣中心3D示意圖(實際依完工現況為準)',
        },
        {
          src: require('./s6_img2-5.jpg'),
          title: '健身房3D示意圖(實際依完工現況為準)',
        },
        {
          src: require('./s6_img2-6.jpg'),
          title: '信箱區3D示意圖(實際依完工現況為準)',
        },
      ],
      isMobile,
      isShowVR: false,
      isShow3D: false,
    }
  },

  methods: {},
}
</script>
