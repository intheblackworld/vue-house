<template>
  <div>
    <div class="bg relative">
      <img src="./s4/walk.gif" alt="" class="img absolute">
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
  width: size(310);
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
    right: size-m(10);
    width: size-m(144);
    // top: auto;
    top: size-m(320);
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
      line-height: 2.14;
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

    .arrow-l {
      width: size-m(14);
      position: absolute;
      left: size-m(5);
      cursor: pointer;
    }

    .arrow-r {
      width: size-m(14);
      position: absolute;
      right: size-m(5);
      cursor: pointer;
    }
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
  name: 'section4',
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
          src: require('./s4/1.jpg'),
          contentIndex: 0,
          name: '',
          title: '收藏世界的璀璨',
          subtitle: '千面女郎的魅力，日與夜的狂野與溫柔',
          subtitle_m: '千面女郎的魅力<br>日與夜的狂野與溫柔',
        },
        {
          src: require('./s4/2.jpg'),
          name: '',
          contentIndex: 1,
          title: '',
          subtitle: '',
          subtitle_m: '',
        },
        {
          src: require('./s4/3.jpg'),
          name: '現場實品屋',
          contentIndex: 2,
          title: '',
          subtitle: '',
          subtitle_m: '',
        },
        {
          src: require('./s4/4.jpg'),
          name: '',
          contentIndex: 3,
          title: '',
          subtitle: '',
          subtitle_m: '',
        },
        {
          src: require('./s4/5.jpg'),
          name: 'THE VIEW高樓層景觀實景',
          contentIndex: 4,
          title: '',
          subtitle: '',
          subtitle_m: '',
        },
      ],
      desc_list: [
        [''],
        [
          '每次在IG分享陽台的景色',
          '好友又以為我去住飯店了',
          '精緻的坪數，有媲美豪宅的景觀',
          '避開都市的侷促',
          '開窗就能看見遼闊',
          '對高樓層情有獨鍾',
          '心與視野嚮往自由',
        ],
        [
          '比起鬧鐘像是突然的襲擊',
          '更喜歡被溫柔陽光漸漸喚醒',
          '看著蔚藍天空來個深呼吸',
          '彷彿成為一種生活的儀式',
          '開窗不會與別人相望',
          '保有自己的隱私與自在',
          '這樣安心的感覺無可取代',
        ],
        [
          '夜的華麗，家的寧靜',
          '為自己斟上一杯紅酒',
          '讓一天的疲憊慢慢消散',
          '點起香氛，也點起城市的繁華',
          '在燈火搖曳中，在沉靜的夜色裡心醉',
          'I am here，enjoy it！',
          'Welcome to my world！',
        ],
        [
          'FB跳出去年的動態回顧',
          '去年這個時候，正在東京小旅行',
          '還記得跟姐妹排了好久的晴空塔',
          '但一眼難忘的壯觀景色值回票價',
          '今年，搬進The View',
          '也把迷人景觀搬回家裡',
          '不用刻意計畫、也不需特別排隊',
          '雖然不能出國，我的心依舊飛揚',
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
