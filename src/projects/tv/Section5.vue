<template>
  <div>
    <div class="bg relative">
      <img src="./s5/o.png" alt="" class="img absolute">
      <div v-if="!isMobile" class="container flex-ac flex-jb relative right" @mouseover="stopSwipe" @mouseleave="startSwipe">
        <div class="content">
          <h3 class="title" data-aos="fade" data-aos-delay="400" v-html="slideList[slideIndex].title"></h3>
          <h3 class="subtitle" data-aos="fade" data-aos-delay="600" v-html="slideList[slideIndex].subtitle"></h3>
          <ul class="desc-list">
            <h3 v-for="(text, index) in desc_list[slideList[slideIndex].contentIndex]" data-aos="fade" :data-aos-delay="600 + (index + 1) * 200" data-aos-duration="1000" :key="text">{{text}}</h3>
          </ul>
        </div>
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
          <div class="slide-text">{{slideList[slideIndex].text}}</div>
          <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.src" class="item">
            <img :src="slide.src" :class="`item-img ${slideIndex === index ? 'active' : ''}`" />
            <div class="item-name" v-html="slide.name"></div>
          </swiper-slide>
        </swiper>
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
          <h3 class="subtitle" data-aos="fade" data-aos-delay="600" v-html="slideList[slideIndex].subtitle"></h3>
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
  left: size(195);
  width: size(266);
  top: auto;
  bottom: size(40);
}

.container {
  width: size(1460);
  height: 100%;

  &.left {
    margin-left: size(70);
  }

  &.right {
    margin-left: size(370);
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
  width: size(488);
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
    left: auto;
    right: size-m(0);
    width: size-m(180);
    //top: auto;
    top: size-m(470);
  }

  .container {
    width: 100vw;
    height: 100%;
    flex-wrap: wrap;

    &.left {
      margin-left: 0;
    }

    &.right {
      margin-left: 0;
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
    font-size: size-m(34);
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
  name: 'section5',
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
          src: require('./s5/1.jpg'),
          contentIndex: 0,
          name: '',
          title: '管理交給專業的安杰',
          subtitle: '我只需顧好自己的美麗',
        },
        {
          src: require('./s5/2.jpg'),
          name: 'THE VIEW挑高門廳實景',
          contentIndex: 1,
          title: '',
          subtitle: '',
          subtitle_m: '',
        },
        {
          src: require('./s5/3.jpg'),
          name: '',
          contentIndex: 2,
          title: '',
          subtitle: '',
          subtitle_m: '',
        },
      ],
      desc_list: [
        [''],
        [
          '不是記性變好了',
          '而是有人更懂的在乎我',
          '信件包裹不再遺漏，修繕不怕難以詢問',
          '24小時專人門禁，即使晚歸也令人放心',
          '不只硬體定期維護，心情也被天天呵護',
          '我想要的，就是備受重視的感覺',
        ],
        [
          '媽媽寄來的冬衣',
          'MOMO買的保養品',
          '博客來訂的限量雜誌',
          '自從搬進The View',
          '再也不用跟宅配約時間',
          '更不用素顏匆匆忙忙下樓',
          '貼心的滿足，總是從日常慢慢累積',
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
