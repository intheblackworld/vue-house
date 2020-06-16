<template>
  <div>
    <div class="bg relative">
      <img
        src="./s2/hair.gif"
        alt=""
        class="img absolute"
      >
      <div
        v-if="!isMobile"
        class="container flex-ac flex-jb relative left"
        @mouseover="stopSwipe" @mouseleave="startSwipe"
      >
        <swiper
          :options="swiperOption"
          ref="mySwiper"
          class="slides"
          @slideChangeTransitionStart="slideChanged"
        >
          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.src"
            class="item"
          >
            <img
              :src="slide.src"
              :class="`item-img ${slideIndex === index ? 'active' : ''}`"
            />
            <div v-html="slide.name"></div>
          </swiper-slide>
          <!-- <div
            class="swiper-pagination"
            slot="pagination"
          ></div> -->
        </swiper>
        <div class="content">
          <h3
            class="title"
            data-aos="fade"
            data-aos-delay="400"
          >日光散策</h3>
          <h3
            class="subtitle"
            data-aos="fade"
            data-aos-delay="600"
            v-html="slideList[slideIndex].subtitle"
          ></h3>
          <ul class="desc-list">
            <h3
              v-for="(text, index) in desc_list[slideList[slideIndex].contentIndex]"
              data-aos="fade"
              :data-aos-delay="600 + (index + 1) * 200"
              data-aos-duration="1000"
              :key="text"
            >{{text}}</h3>
          </ul>
        </div>
      </div>
      <div v-if="isMobile" @mouseover="stopSwipe" @mouseleave="startSwipe">
        <swiper
          :options="swiperOption"
          ref="mySwiper"
          class="slides"
          @slideChangeTransitionStart="slideChanged"
        >
          <div
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
          </div>
          <div class="slide-text">{{slideList[slideIndex].text}}</div>
          <swiper-slide
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.src"
            class="item"
          >
            <img
              :src="slide.src"
              :class="`item-img ${slideIndex === index ? 'active' : ''}`"
            />
            <div v-html="slide.name"></div>
          </swiper-slide>
        </swiper>
        <!-- <div
          class="slides relative"
          data-aos="fade"
          data-aos-delay="400"
        >
        </div> -->
        <div class="content">
          <h3
            class="title"
            data-aos="fade"
            data-aos-delay="400"
          >日光散策</h3>
          <h3
            class="subtitle"
            data-aos="fade"
            data-aos-delay="600"
            v-html="slideList[slideIndex].subtitle"
          ></h3>
          <ul class="desc-list">
            <h3
              v-for="(text, index) in desc_list[slideList[slideIndex].contentIndex]"
              data-aos="fade"
              :data-aos-delay="600 + (index + 1) * 200"
              data-aos-duration="1000"
              :key="text"
            >{{text}}</h3>
          </ul>
        </div>
      </div>
      <div class="indigator-list flex-c">
        <div
          @click="setIndex(index)"
          :class="`indigator ${slideList[slideIndex].contentIndex === index ? 'active' : ''}`"
          v-for="index in [0, 1, 2]"
          :key="`indigator-1-${index}`"
        ></div>
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
//.mode{mix-blend-mode:hard-light;display: block;}
.img {
  right: size(215);
  width: size(264);
  top: size(326);
  mix-blend-mode: hard-light;
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
    font-size: size(15);
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
    // height: auto;
    height: 100vh;
  }
  .img {
    right: size-m(0);
    width: size-m(150);
    //  top: auto;
    top: size-m(310);
    //  bottom: size-m(10);
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
      font-size: size-m(12);
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
  name: 'section2',
  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
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
          src: require('./s2/1-1.jpg'),
          contentIndex: 0,
          subtitle: '百種新板散策，千種時尚氛圍<br />妳喜歡的理由只要ㄧ個',
        },
        {
          src: require('./s2/1-2.jpg'),
          contentIndex: 0,
          subtitle: '百種新板散策，千種時尚氛圍<br />妳喜歡的理由只要ㄧ個',
        },
        {
          src: require('./s2/2-1.jpg'),
          contentIndex: 1,
          subtitle: '如果愛一個人，你要帶她去<br />看看THE VIEW好在哪裡',
        },
        {
          src: require('./s2/2-2.jpg'),
          contentIndex: 1,
          subtitle: '如果愛一個人，你要帶她去<br />看看THE VIEW好在哪裡',
        },
        {
          src: require('./s2/3-1.jpg'),
          contentIndex: 2,
          subtitle: '全國日運量200萬人次前5大站<br />亮點在這裡！',
        },
        {
          src: require('./s2/3-2.jpg'),
          contentIndex: 2,
          subtitle: '全國日運量200萬人次前5大站<br />亮點在這裡！',
        },
      ],
      desc_list: [
        [
          '友達以上，戀人未滿',
          '女人做自己的直覺永遠第一',
          '小宅也有豪宅闊砌，新板也能小薪限定',
          '人生不做隱形冠軍，優雅和品味的縮時攝影',
          '妳值得THE VIEW寵愛妳',
        ],
        [
          '可以遠離塞車的馬路，5分鐘投入府中站',
          '的快速，捷運直達北車雙子星，忠孝敦南',
          '國際信義101，可達、可遊、可居、可望',
          '的地段美境',
        ],
        [
          '板南線勇奪捷運日運量200萬人次前5大站',
          '北車（占7.6%）西門站（占3.6%）',
          '市政府站（占2.9%）板橋站（占2.0%）',
          '忠孝復興站（占2.3%）',
          '雙北最有價值捷運金脈',
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
      this.slideIndex = index * 2
      this.swiper.slideTo(index * 2, 1000, false)
    },

    slideChanged(e) {
      const swiper = this.$refs.mySwiper.swiper
      if (swiper.isEnd) {
        this.slideIndex = 0
      } else if (swiper.isBeginning) {
        this.slideIndex = swiper.slides.length - 3
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
