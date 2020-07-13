<template>
  <div class="relative section6">
    <div v-if="!isMobile">
      <div class="top-container relative flex">
        <div>
          <img
            src="./s6/logo.png"
            alt=""
            class="logo absolute"
          >
          <h3 class="title absolute">頂級公設</h3>
          <img
            src="./s3/hr.png"
            alt=""
            class="hr-img absolute"
          >
          <div class="desc absolute">「京城美術皇居」休閒會館的設施配置在三個層樓，分別在一樓、29樓、RF，並有室內設施與戶外自然景觀，提供住戶最開闊、最具美學品味的頂級休閒體驗！</div>
        </div>
        <img
          src="./s6/1.jpg"
          alt=""
          class="top absolute"
        >
      </div>
      <div class="tabs flex">
        <div
          :class="`tab-item flex-ac flex-ja ${tabIndex === 0 ? 'active' : ''}`"
          @click="setTab(0)"
        >
          <img
            src="./s6/icon_b.png"
            alt=""
            class="tab-icon-b"
          >
          <img
            src="./s6/icon_w.png"
            alt=""
            class="tab-icon-w"
          >
          <div class="tab-desc">1樓公設</div>
        </div>
        <div class="divide"></div>
        <div
          :class="`tab-item flex-ac flex-ja ${tabIndex === 1 ? 'active' : ''}`"
          @click="setTab(1)"
        >
          <img
            src="./s6/icon_b.png"
            alt=""
            class="tab-icon-b"
          >
          <img
            src="./s6/icon_w.png"
            alt=""
            class="tab-icon-w"
          >
          <div class="tab-desc">29樓公設</div>
        </div>
        <div class="divide"></div>
        <div
          :class="`tab-item flex-ac flex-ja ${tabIndex === 2 ? 'active' : ''}`"
          @click="setTab(2)"
        >
          <img
            src="./s6/icon_b.png"
            alt=""
            class="tab-icon-b"
          >
          <img
            src="./s6/icon_w.png"
            alt=""
            class="tab-icon-w"
          >
          <div class="tab-desc">頂樓公設</div>
        </div>
      </div>
      <swiper
        class="swiper-container"
        :options="swiperOption"
        ref="mySwiper"
        data-aos="fade"
        data-aos-delay="400"
      >
        <swiper-slide
          v-for="(slide, index) in multipleSlideList[tabIndex]"
          :index="index"
          :key="slide.src"
        >
          <img
            :src="slide.src"
            :class="`item-img`"
          />
          <h3 class="slide-title absolute">{{slide.title}}</h3>
        </swiper-slide>
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
      </swiper>
      <div class="container-title flex-c">
        <img
          src="./s6/icon_b.png"
          alt=""
          class="tab-icon-b"
        >
        <h3>星空泳池</h3>
      </div>
      <swiper
        class="swiper-container"
        :options="swiperOption"
        ref="mySwiper"
        data-aos="fade"
        data-aos-delay="400"
      >
        <swiper-slide
          v-for="(slide, index) in slideList2"
          :index="index"
          :key="slide.src"
        >
          <img
            :src="slide.src"
            :class="`item-img`"
          />
          <!-- <h3 class="slide-title absolute">{{slide.title}}</h3> -->
        </swiper-slide>
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
      </swiper>

      <swiper
        class="swiper-container full"
        :options="swiperOption"
        ref="mySwiper"
        data-aos="fade"
        data-aos-delay="400"
      >
        <swiper-slide
          v-for="(slide, index) in slideList3"
          :index="index"
          :key="slide.src"
        >
          <img
            :src="slide.src"
            :class="`item-img`"
          />
          <h3 class="slide-title absolute">{{slide.title}}</h3>
        </swiper-slide>
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
      </swiper>
    </div>
    <div v-if="isMobile">

    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  position: relative;
  height: auto;
}

.section6 {
  background-image: url('./s6/bg.jpg');
  background-attachment: fixed;
  background-position: center;
}

.logo {
  width: size(318);
  left: size(177);
  top: size(115);
}

.top {
  width: size(1249);
  height: size(703);
  right: 0;
  top: 0;
}

.top-container {
  height: size(706);
  border-bottom: 3px solid #977750;
}

.swiper-container {
  width: size(1794);
  height: size(955);
  margin-top: size(40);

  &.full {
    width: 100vw;
    height: size(1080);
    margin-top: size(100);
  }
}

.title {
  font-size: size(76);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 12.15px;
  text-align: left;
  color: #1a1311;
  left: size(165);
  top: size(224);
}

.hr-img {
  width: size(383);
  height: 4px;
  top: size(343);
  left: size(144);
}

.desc {
  width: size(390);
  font-size: size(22);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.27;
  letter-spacing: 1.1px;
  text-align: left;
  color: #1a1311;
  top: size(366);
  left: size(143);
}

.item-img {
  width: 100%;
}

.tabs {
  width: size(1050);
  margin: size(105) auto 0;

  .tab-item {
    width: 33.33%;
    height: size(74);
    padding: 0 size(15);
    cursor: pointer;

    &:hover,
    &.active {
      background-color: #9b754e;
      .tab-desc {
        color: #fff;
      }
      .tab-icon-w {
        display: block;
      }
      .tab-icon-b {
        display: none;
      }
    }

    .tab-icon-w {
      display: none;
    }
    .tab-icon-b {
      display: block;
    }
  }

  .tab-icon-w,
  .tab-icon-b {
    width: size(50);
    height: auto;
  }

  .tab-desc {
    font-size: size(50);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.68;
    letter-spacing: 1.5px;
    text-align: left;
    color: #000000;
  }

  .divide {
    width: 1.2px;
    height: size(65);
    background-color: #1a1311;
    margin: 0 size(30);
  }
}

.slide-title {
  display: block;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  font-size: size(50);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: 5.5px;
  text-align: left;
  color: #ffffff;
  padding: 15px 30px 15px 60px;
  top: size(66);
  left: 0;
}

.section6 {
  &::v-deep .swiper-container-horizontal > .swiper-pagination-bullets {
    width: auto !important;
    right: 30px;
    bottom: 30px;
    left: auto;
  }
  &::v-deep .swiper-pagination-bullet {
    width: 24px;
    height: 24px;
    background-color: transparent;
    box-shadow: inset 0 0 0 1px #fff;
    opacity: 1;
    margin: 0 15px !important;
    border-radius: 0 !important;

    &.swiper-pagination-bullet-active {
      background-color: #88633f;
    }
  }
}

.container-title {
  margin: size(106) auto 0;
  h3 {
    margin-left: 15px;
    font-size: size(50);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 2.97px;
    text-align: left;
    color: #1a1311;
  }
}
@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .swiper-container {
    width: 100vw;
    margin: 0 auto;

    .item-img {
      width: 100%;
    }
  }

  .swiper-container {
    width: size(1235);
    right: 0;
    top: 0;
  }

  .content {
    width: size(689);
    position: relative;
  }

  .bg-img {
    width: 100%;
    left: 0;
  }

  .logo {
    width: size(356);
    top: size(111);
    left: size(169);
  }

  .hr-img {
    width: size(509);
    top: size(419);
    left: size(92);
  }

  .title {
    width: 98%;
    margin: 0 auto;
    font-size: size(50);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 3px;
    text-align: center;
    color: #ffffff;
    top: size(263);
    white-space: nowrap;
  }

  .desc {
    width: size(410);
    font-size: size(24);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.17;
    letter-spacing: 0.72px;
    text-align: left;
    color: #ffffff;
    top: size(459);
    left: size(152);
  }

  .item-img {
    width: 100%;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
// import Parallax from '@/components/Parallax.vue'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'section9',
  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
    // Parallax,
  },
  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 1,
        centeredSlides: true,
        spaceBetween: isMobile ? 10 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        effect: isMobile ? '' : 'fade',

        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      tabIndex: 0,
      multipleSlideList: [
        [
          {
            src: require('./s6/2/1-1圓型廣場.jpg'),
            title: '圓型廣場',
          },
          {
            src: require('./s6/2/1-2禮賓大廳.jpg'),
            title: '禮賓大廳',
          },
          {
            src: require('./s6/2/1-3莫內花園.jpg'),
            title: '莫內花園',
          },
        ],
        [
          {
            src: require('./s6/2/2-1KTV室.jpg'),
            title: 'KTV室',
          },
          {
            src: require('./s6/2/2-2健身房.jpg'),
            title: '健身房',
          },
          {
            src: require('./s6/2/2-3兒童遊戲室.jpg'),
            title: '兒童遊戲室',
          },
          {
            src: require('./s6/2/2-4宴會廳.jpg'),
            title: '宴會廳',
          },
          {
            src: require('./s6/2/2-5美式運動Bar.jpg'),
            title: '美式運動Bar',
          },
        ],
        [
          {
            src: require('./s6/2/3-1池畔賞景休憩區.jpg'),
            title: '池畔賞景休憩區',
          },
          {
            src: require('./s6/2/3-2星空泳池.jpg'),
            title: '星空泳池',
          },
          {
            src: require('./s6/2/3-3高空賞景Lounge-Bar.jpg'),
            title: '高空賞景Lounge-Bar',
          },
        ],
      ],
      slideList2: [
        {
          src: require('./s6/3-1.jpg'),
        },
        {
          src: require('./s6/3-2.jpg'),
        },
        {
          src: require('./s6/3-3.jpg'),
        },
        {
          src: require('./s6/3-4.jpg'),
        },
        {
          src: require('./s6/3-5.jpg'),
        },
      ],
      slideList3: [
        {
          src: require('./s7/1.jpg'),
          title: '28樓實品屋',
        }
      ]
    }
  },

  methods: {
    setTab(index) {
      this.tabIndex = index
    },
  },
  created() {},

  mounted() {},

  computed: {},
}
</script>