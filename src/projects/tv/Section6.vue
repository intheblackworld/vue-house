<template>
  <div>
    <div class="bg relative">
      <img src="./s6/head.gif" alt="" class="img absolute">
      <div v-if="!isMobile" class="container flex-ac flex-jb relative left" @mouseover="stopSwipe" @mouseleave="startSwipe">
        <swiper v-show="show" :options="swiperOption" ref="mySwiper" class="slides" @slideChangeTransitionStart="slideChanged">
          <!-- <div
            class="swiper-button-prev"
            slot="button-prev"
          >
            <img
              class="arrow-l"
              src="./arrow-left.png"
              alt
            />
          </div>
          <div
            class="swiper-button-next"
            slot="button-next"
          >
            <img
              class="arrow-r"
              src="./arrow-right.png"
              alt
            />
          </div> -->
          <!-- <div class="slide-text">{{slideList[slideIndex].text}}</div> -->
          <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.src" class="item">
            <img :src="slide.src" :class="`item-img ${slideIndex === index ? 'active' : ''}`" />
            <div class="item-name" v-html="slide.name"></div>
          </swiper-slide>
        </swiper>
        <div class="content">
          <h3 class="title" data-aos="fade" data-aos-delay="400" v-html="slideList[slideIndex].title"></h3>
          <h3 class="subtitle" data-aos="fade" data-aos-delay="600" v-html="slideList[slideIndex].subtitle"></h3>
          <ul class="desc-list">
            <h3 v-for="(text, index) in desc_list[slideList[slideIndex].contentIndex]" data-aos="fade" :data-aos-delay="600 + (index + 1) * 200" data-aos-duration="1000" :key="text">{{text}}</h3>
          </ul>
        </div>
      </div>
      <div v-if="isMobile" @mouseover="stopSwipe" @mouseleave="startSwipe">
        <div class="slides_box">
          <swiper v-show="show" :options="swiperOption" ref="mySwiper" class="slides" @slideChangeTransitionStart="slideChanged">
            <div class="swiper-button-prev" slot="button-prev">
              <img class="arrow-l" src="./arrow-left.png" alt />
            </div>
            <div class="swiper-button-next" slot="button-next">
              <img class="arrow-r" src="./arrow-right.png" alt />
            </div>
            <div class="slide-text">{{slideList[slideIndex].text}}</div>
            <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.src" class="item">
              <img :src="slide.src" :class="`item-img ${slideIndex === index ? 'active' : ''}`" />
              <div class="item-name" v-html="slide.name"></div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="content">
          <h3 class="title" data-aos="fade" data-aos-delay="400" v-html="slideList[slideIndex].title"></h3>
          <h3 class="subtitle" data-aos="fade" data-aos-delay="600" v-html="slideList[slideIndex].subtitle_m"></h3>
          <ul class="desc-list">
            <h3 v-for="(text, index) in desc_list[slideList[slideIndex].contentIndex]" data-aos="fade" :data-aos-delay="600 + (index + 1) * 200" data-aos-duration="1000" :key="text">{{text}}</h3>
          </ul>
        </div>
      </div>
      <div class="indigator-list flex-c">
        <div @click="setIndex(index)" :class="`indigator ${slideIndex === index ? 'active' : ''}`" v-for="(item, index) in slideList" :key="`indigator-1-${index}`"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
  overflow: hidden;
  height: 100vh;
}

.img {
  right: size(215);
  width: size(187);
  top: size(326);
}

.container {
  width: size(1460);
  height: 100%;

  &.left {
    margin-left: size(70);
  }

  &.right {
    margin-right: size(70);
  }
}

.slides {
  width: size(890);
}

.item-name {
  position: absolute;
  color: #fff;
  font-size: calc(12px + 0.2vw);
  right: 0.5em;
  bottom: 0.5em;
  text-shadow: 0.1em 0 0.5em #000c;
}

.content {
  width: size(438);
  height: size(710);
  padding-top: size(200);
}

.title {
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.65;
  letter-spacing: 2.5px;
  text-align: left;
  color: #606060;
  margin-bottom: size(25);
  margin-left: size(-5);
}

.subtitle {
  font-size: size(21);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: 0.63px;
  text-align: left;
  color: #aa8356;
  margin-bottom: size(15);
}

.desc-list {
  > h3 {
    font-size: size(20);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: 3.75px;
    text-align: left;
    color: #727272;
  }
}

.indigator-list {
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  margin: size(370) auto 0 auto;
  top: 50%;
  .indigator {
    width: size(19);
    height: size(19);
    border-radius: size(19);
    margin: 0 20px;
    background-color: rgba(186, 146, 98, 0.4);
    cursor: pointer;

    &.active {
      background-color: rgba(186, 146, 98, 1);
    }
  }
}

.arrows {
  display: none;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    height: 100vh;
  }
  .img {
    right: size-m(20);
    width: size-m(110);
    //top: auto;
    top: size-m(300);
  }

  .container {
    width: 100vw;
    height: 100%;
    flex-wrap: wrap;

    &.left {
      margin-left: 0;
    }

    &.right {
      margin-right: 0;
    }
  }

  .slides {
    width: 100vw;
  }

  .content {
    width: 100vw;
    height: auto;
    padding-top: size-m(31);
    padding-left: size-m(27);
    padding-bottom: size-m(200);
  }

  .title {
    font-size: size-m(39);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.65;
    letter-spacing: 2.5px;
    text-align: left;
    color: #606060;
    margin-bottom: size-m(25);
    margin-left: size-m(-5);
  }

  .subtitle {
    font-size: size-m(16);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.55;
    letter-spacing: 0.63px;
    text-align: left;
    color: #aa8356;
    margin-bottom: size-m(15);
  }

  .desc-list {
    > h3 {
      font-size: size-m(15);
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.8;
      letter-spacing: 0.14px;
      text-align: left;
      color: #727272;
    }
  }

  .indigator-list {
    display: none;
  }

  .arrows {
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .arrow-l {
    width: size-m(20);
    position: absolute;
    left: size-m(5);
    cursor: pointer;
  }

  .arrow-r {
    width: size-m(20);
    position: absolute;
    right: size-m(5);
    cursor: pointer;
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
  name: 'section6',
  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
  },

  props: ['show'],
  watch: {
    show(val) {
      if (val) {
        this.slideIndex = 0
        this.swiper.slideTo(1, 1000, false)
      }
    },
  },
  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 1,
        spaceBetween: isTablet ? 20 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        // centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },
        loop: true,
        // direction: 'vertical',
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      slideList: [
        {
          src: require('./s6/1.jpg'),
          name: '現場實品屋',
          contentIndex: 0,
          title: '從需要，到想要',
          subtitle: '有自己的幸福，先成為房子的主人',
          subtitle_m: '有自己的幸福<br />先成為房子的主人',
        },
        {
          src: require('./s6/2.jpg'),
          name: '現場實品屋',
          contentIndex: 1,
          title: '',
          subtitle: '',
          subtitle_m: '',
        },
        {
          src: require('./s6/3.jpg'),
          name: 'THE VIEW現場湯缸實景',
          contentIndex: 2,
          title: '',
          subtitle: '',
          subtitle_m: '',
        },
        {
          src: require('./s6/4.jpg'),
          name: '現場實品屋',
          contentIndex: 2,
          title: '',
          subtitle: '',
          subtitle_m: '',
        },
      ],
      desc_list: [
        [''],
        [
          '自從搬進The View',
          '每天下班都歸心似箭',
          '眷戀陽台的美麗夜景',
          '在獨立廚房特製減肥餐',
          '窩在舒適尺度的客廳沙發上',
          '看著Netflix全新一季的美劇',
          '歡迎來The View現場親身體驗！',
        ],
        [
          '五星級降版湯缸',
          '第一眼就愛上他',
          '放點沐浴鹽、泡泡浴',
          '沈浸在保養整個夜晚',
          '讓泡湯成為寵愛自我的獎賞',
          '我住我驕傲，我愛故我在',
          '請對自己好一點，因為妳一定值得',
        ],
      ],
    }
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
  },

  methods: {
    setIndex(index) {
      this.slideIndex = index
      this.swiper.slideTo(index + 1, 1000, false)
    },

    slideChanged(e) {
      const swiper = this.$refs.mySwiper.swiper
      if (swiper.isEnd) {
        this.slideIndex = 0
      } else if (swiper.isBeginning) {
        this.slideIndex = 1
      } else {
        this.slideIndex = swiper.activeIndex - 1
      }
    },

    startSwipe() {
      this.swiper.autoplay.start()
    },

    stopSwipe() {
      this.swiper.autoplay.stop()
    },
  },

  created() {},
  mounted() {},
}
</script>
