<template>
  <div class="section5">
    <div class="bg">
      <swiper
        :options="swiperOption"
        ref="mySwiper"
        swiper-no-swiping
      >
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.img"
          class="item"
        >
          <img
            :src="slide.src"
            :class="`item-img`"
          />
        </swiper-slide>
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
      </swiper>
      <div class="title absolute">大師剪裁，致敬百貨時代！<br />
        迎接北高新百貨時代<br />
        百年時尚精品就是「上東京」</div>
      <div class="hr absolute"></div>
      <div class="desc absolute">恰恰好的立體感線條，讓你想起CHANEL經典手拿包<br />
        同樣精心計算的弧度與隔柵俐落感<br />
        流露出高雅品味，又彷彿看見東京阿曼酒店<br />
        那繁複卻迷人的線條演出…
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/assets/style/function.scss';

.bg {
  position: relative;
  height: size(1080);
  overflow: hidden;


  &::v-deep {
    .swiper-pagination {
      width: 140px;
      left: auto;
      bottom: 20px;
      right: 20px;
    }
    .swiper-pagination-bullet {
      width: 21px;
      height: 21px;
      box-shadow: 0 0 0 1px #fff;
      margin: 0 8px;
      background-color: transparent;
      opacity: 1 !important;
    }

    .swiper-pagination-bullet-active {
      background-color: #000;
    }
  }
}

// .content {
//   position: absolute;
//   z-index: 10;
// }

.title {
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 5px;
  text-align: center;
  color: #ffffff;
  width: size(710);
  top: size(274);
  right: size(144);
  white-space: nowrap;
  z-index: 10;
}

.hr {
  width: size(589);
  top: size(515);
  right: size(205);
  height: 1px;
  background-color: #fff;
  z-index: 10;
}

.desc {
  font-size: size(28);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.81;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  z-index: 10;
  width: size(730);
  white-space: nowrap;
  top: size(550);
  right: size(135);
}

.swiper-container {
  width: 100vw;
  height: size(1080);
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;

  img {
    display: block;
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section5',
  mixins: [slider],

  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 3,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 2,
        // allowSlidePrev: isMobile ? true : false,
        // allowSlideNext: isMobile ? true : false,
        // centeredSlides: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        effect: 'fade',
        // loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      slideList: [
        {
          src: isMobile
            ? require('./s5/area5_day_mobile.png')
            : require('./s5/area5_day.jpg'),
          // title: '橫空出世',
          // subtitle: 'Romanesque Style',
          // desc:
          //   '4座羅馬神殿式拱穹＋1座富麗輝煌的圓形穹頂<br />如同偉大作家歌德所說的<br />騰空而起，像崇高壯觀、濃蔭廣覆的建築之樹',
        },
        {
          src: isMobile
            ? require('./s5/area5_night_mobile.png')
            : require('./s5/area5_night.jpg'),
          // title: '向榮冠冕的萬丈城市力',
          // subtitle: 'Crown City',
          // desc:
          //   '高仰度28F摩天視界、4棟口字型高樓層地標式建築，可眺望台北城市無敵豪景，北美館、圓山飯店、台北101…爭藏地標、盡收眼底，壯麗開卷般的生活尺度，成就景觀無敵的眼界奢華，更能放心追逐您心之所向的視界巔峰。',
        },
      ],
    }
  },
  methods: {},

  created() {
    // @click="showIframeDialog(slide.link)"
  },
}
</script>
