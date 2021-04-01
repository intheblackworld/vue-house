<template>
  <div>
    <div class="bg relative">
      <img src="./s2/hair.gif" alt="" class="img absolute">
      <div v-if="!isMobile" class="container flex-ac flex-jb relative left">
        <swiper v-show="show" :options="swiperOption" ref="mySwiper" class="slides" @slideChangeTransitionStart="slideChanged">
          <div class="slide-text">{{slideList[slideIndex].text}}</div>
          <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.src" class="item">
            <iframe :src="slide.vsrc" :class="`item-img ${slideIndex === index ? 'active' : ''}`" title="video player" frameborder="0" v-if="slideIndex === index"></iframe>
            <!--   <img :src="slide.src" :class="`item-img ${slideIndex === index ? 'active' : ''}`" />  -->
            <div class="item-name" v-html="slide.name"></div>
          </swiper-slide>
        </swiper>
        <div class="content">
          <h3 class="title" data-aos="fade" data-aos-delay="400" v-html="slideList[slideIndex].title"></h3>
          <h3 class="subtitle" data-aos="fade" data-aos-delay="600" v-html="slideList[slideIndex].subtitle"></h3>
          <!-- <ul class="desc-list">
            <h3 v-for="(text, index) in desc_list[slideList[slideIndex].contentIndex]" data-aos="fade" :data-aos-delay="600 + (index + 1) * 200" data-aos-duration="1000" :key="text" v-html="text"></h3>
          </ul> -->
        </div>
      </div>
      <div v-if="isMobile">
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
              <iframe :src="slide.vsrc" :class="`item-img ${slideIndex === index ? 'active' : ''}`" title="video player" frameborder="0" v-if="slideIndex === index"></iframe>
              <!--   <img :src="slide.src" :class="`item-img ${slideIndex === index ? 'active' : ''}`" />  -->
              <div class="item-name" v-html="slide.name"></div>
            </swiper-slide>
          </swiper>
          <!-- <swiper v-show="show" :options="swiperOption" ref="mySwiper" class="slides" @slideChangeTransitionStart="slideChanged">
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
          </swiper>-->
        </div>
        <div class="content">
          <h3 class="title" data-aos="fade" data-aos-delay="400" v-html="slideList[slideIndex].title"></h3>
          <h3 class="subtitle" data-aos="fade" data-aos-delay="600" v-html="slideList[slideIndex].subtitle"></h3>
          <!-- <ul class="desc-list">
            <h3 v-for="(text, index) in desc_list[slideList[slideIndex].contentIndex]" data-aos="fade" :data-aos-delay="600 + (index + 1) * 200" data-aos-duration="1000" :key="text" v-html="text"></h3>
          </ul> -->
        </div>
      </div>
      <div class="indigator-list flex-c">
        <div @click="setIndex(index)" :class="`indigator ${slideIndex === index ? 'active' : ''}`" v-for="(item, index) in slideList" :key="`indigator-1-${index}`"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.slides {
  opacity: 0;
  background-color: #000;
  animation: op 0.3s 0s forwards;
}
.desc-list {
  > h3 {
    span {
      transform: scaleX(0.95);
      transform-origin: 0 0;
      display: block;
      letter-spacing: 0.05em;
    }
  }
}

@keyframes op {
  to {
    opacity: 1;
  }
}

@media screen and (max-width: 767px) {
  .slides_box {
    width: 100vw;
    height: 80vw;
    max-height: calc(100vh - 115vw);
    overflow: hidden;
  }
  .slides {
    height: 100%;
  }
  .desc-list {
    > h3 {
      span {
        transform: scaleX(0.88);
        letter-spacing: 0em;
      }
    }
  }
}
</style>
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
  // mix-blend-mode: hard-light;
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
  height: size(500);
  cursor: pointer;
}

.video-iframe {
  width: 100%;
}

.video-img {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  transition: all 0.3s;
}
.hide {
  opacity: 0;
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
    letter-spacing: 0.18em;
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
    top: calc(100vh - 95vw);
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
    height: size-m(235);
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
      letter-spacing: 0.01em;
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

  .item-img {
    object-fit: fill;
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
          src: require('./s2/1.jpg'),
          vsrc: 'https://www.youtube.com/embed/0wj3QNgTF7U',
          contentIndex: 0,
          name: '府中捷運站',
          title: '府中捷運我愛你。',
          subtitle: isMobile
            ? '府中站散步5分鐘<br />一座城市多款風格<br />只有「THE VIEW」<br />最懂我。'
            : '府中站散步5分鐘，一座城市多款風格<br />只有「THE VIEW」<br />最懂我。',
        },
        {
          src: require('./s2/2.jpg'),
          vsrc:
            'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F110815740621987%2Fvideos%2F5195981420473327%2F&show_text=false&width=560',
          contentIndex: 1,
          name: '府中捷運站',
          title: '府中捷運我愛你。',
          subtitle: isMobile
            ? '府中站散步5分鐘<br />一座城市多款風格<br />只有「THE VIEW」<br />最懂我。'
            : '府中站散步5分鐘，一座城市多款風格<br />只有「THE VIEW」<br />最懂我。',
        },
        /*
         {
           src: require('./s2/2.jpg'),
           vsrc: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F110815740621987%2Fvideos%2F5195981420473327%2F&show_text=false&width=560',
           contentIndex: 1,
           name: '府中捷運站',
           title: '',
           subtitle: '',
         },
         {
           src: require('./s2/3.jpg'),
           contentIndex: 2,
           name: '新板誠品商圈',
           title: '',
           subtitle: '',
         },
         {
           src: require('./s2/4.jpg'),
           contentIndex: 3,
           name: '府中捷運商圈',
           title: '',
           subtitle: '',
         },
         {
           src: require('./s2/5.jpg'),
           contentIndex: 4,
           name: '新板特區商圈',
           title: '',
           subtitle: '',
         }, */
      ],
      desc_list: [
        [''],
        [
          '就算醒了，也常常賴床的上班日',
          '手沖10分鐘莊園咖啡',
          '慢食20分鐘蔬食早餐',
          '聽完30分鐘的spotify',
          '穿著高跟鞋５分鐘走到府中站',
          '算的剛剛好的捷運通勤時間',
          '才有心跳72下的美好晨光',
        ],
        [
          '姊妹淘的聚會還真的不少',
          '上次約在東區逛街喝咖啡',
          '這次約在東門吃越南誠記',
          '下次就要回到她們最愛的這裡',
          '逛誠品、遊府中、新板美食吃不完',
          '半夜唱完KTV就直接回家聊通宵',
        ],
        [
          '戀上一個人，要先看人品有多好',
          '戀上一間房，要先看捷運有多近',
          '愛情跟購屋也有些相通的道理',
          '<span>想要美麗的未來，看他是否以妳為中心。</span>',
          '<span>「VIVI，妳跟以前不一樣了！」好友說</span>',
          '<span>「好房子比好男人更重要啊。」我回答</span>。',
        ],
        [
          '<span>今天想要打扮時尚，把城市當成伸展台</span>',
          '<span>明天想一個人旅行，體驗孤獨的文青感</span>',
          '<span>有時也得要回到現實，去採購生活的所需</span>',
          '但是啊，我是被捧在手心的小公主',
          '不管想做什麼，不論想買什麼',
          '捷運、百貨、公園、文創、市場',
          '都在15分鐘的散步半徑裡',
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
