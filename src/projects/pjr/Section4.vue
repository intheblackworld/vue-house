<template>
  <div class="section4">
    <div class="title" v-if="isPC" data-aos="fade" data-aos-delay="200">
      建築、自然永恆詩境 鐫刻城市美學指標
    </div>
    <div class="title" v-else data-aos="fade" data-aos-delay="200">
      建築、自然永恆詩境<br />鐫刻城市美學指標
    </div>
    <h3 class="desc" data-aos="fade" data-aos-delay="400">
      建築不只精密科學計算，而是有溫度、有情感、有故事的生活聚場，從結構形體昇華至精神領域。璞真願意花更多時間探索生活，量身訂製創新空間提案，以綠建築、智慧建築設計導入低碳思維。當建築擁有獨一無二的性格，自然吸引居住品味相契的人們，回歸生活最樸實且真摯的樣貌。
    </h3>
    <div class="swipe1 absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade" data-aos-delay="400">
      <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
        <div class="prev-btn" @click="decMultiIndex(1)"></div>
        <div class="next-btn" @click="addMultiIndex(1)"></div>
      </div>
      <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(1)" v-touch:swipe.right="() => addMultiIndex(1)" @click="addMultiIndex(1)">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList1" v-show="slideIndex1 === i" :key="slide.img" :class="`swipe-item absolute`">
            <picture>
              <source :srcset="slide.webp" type="image/webp" />
              <source :srcset="slide.img" type="image/jpeg" />
              <img :src="slide.img" :alt="info.caseName" class="">
            </picture>
            <p class="slide-name absolute" v-html="slide.name"></p>
          </div>
        </transition-group>
        <!-- <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList1" :key="slide.img + '-dot'" @click="goToMultiIndex(index, 1)"><span :class="`${slideIndex1 === index ? 'active' : ''}`"></span></div>
        </div> -->
      </div>
    </div>
    <div class="swipe2 absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade" data-aos-delay="600">
      <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
        <div class="prev-btn" @click="decMultiIndex(2)"></div>
        <div class="next-btn" @click="addMultiIndex(2)"></div>
      </div>
      <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(2)" v-touch:swipe.right="() => addMultiIndex(2)" @click="addMultiIndex(2)">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList2" v-show="slideIndex2 === i" :key="slide.img" :class="`swipe-item absolute`">
            <picture>
              <source :srcset="slide.webp" type="image/webp" />
              <source :srcset="slide.img" type="image/jpeg" />
              <img :src="slide.img" :alt="info.caseName" class="">
            </picture>
            <p class="slide-name absolute" v-html="slide.name"></p>
          </div>
        </transition-group>
        <!-- <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList2" :key="slide.img + '-dot'" @click="goToMultiIndex(index, 2)"><span :class="`${slideIndex2 === index ? 'active' : ''}`"></span></div>
        </div> -->
      </div>
    </div>
    <div class="swipe3 absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade" data-aos-delay="800">
      <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
        <div class="prev-btn" @click="decMultiIndex(3)"></div>
        <div class="next-btn" @click="addMultiIndex(3)"></div>
      </div>
      <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(3)" v-touch:swipe.right="() => addMultiIndex(3)" @click="addMultiIndex(3)">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList3" v-show="slideIndex3 === i" :key="slide.img" :class="`swipe-item absolute`">
            <picture>
              <source :srcset="slide.webp" type="image/webp" />
              <source :srcset="slide.img" type="image/jpeg" />
              <img :src="slide.img" :alt="info.caseName" class="">
            </picture>
            <p class="slide-name absolute" v-html="slide.name"></p>
          </div>
        </transition-group>
        <!-- <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList3" :key="slide.img + '-dot'" @click="goToMultiIndex(index, 3)"><span :class="`${slideIndex3 === index ? 'active' : ''}`"></span></div>
        </div> -->
      </div>
    </div>
    <div class="swipe4 absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade" data-aos-delay="1200">
      <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
        <div class="prev-btn" @click="decMultiIndex(4)"></div>
        <div class="next-btn" @click="addMultiIndex(4)"></div>
      </div>
      <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(4)" v-touch:swipe.right="() => addMultiIndex(4)" @click="addMultiIndex(4)">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList4" v-show="slideIndex4 === i" :key="slide.img" :class="`swipe-item absolute`">
            <picture>
              <source :srcset="slide.webp" type="image/webp" />
              <source :srcset="slide.img" type="image/jpeg" />
              <img :src="slide.img" :alt="info.caseName" class="">
            </picture>
            <p class="slide-name absolute" v-html="slide.name"></p>
          </div>
        </transition-group>
        <!-- <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList4" :key="slide.img + '-dot'" @click="goToMultiIndex(index, 4)"><span :class="`${slideIndex4 === index ? 'active' : ''}`"></span></div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section4 {
  width: 100%;
  height: size(900);
  min-height: size(900);
  max-height: auto;
  background-size: cover;
  background-attachment: fixed;
  background-color: #fff;

  @include md {
    width: 100vw;
    height: sizem(776 + 250);
    min-height: auto;
    max-height: initial;
    overflow: visible;
  }
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;
}

.title {
  @include img_l_pc(605, 0, 79);
  top: auto;
  bottom: size(171);
  font-size: size(35);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #3e3a39;
  white-space: nowrap;

  @include md {
    @include img_l_m(209, 60, 28);
    font-size: sizem(20);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    letter-spacing: sizem(1);
    text-align: left;
    color: #3e3a39;
  }
}

.desc {
  @include img_l_pc(1278, 0, 79);
  top: auto;
  bottom: size(40);
  font-size: size(20);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.76;
  letter-spacing:0.05em;
  text-align: justify;
  color: #3e3a39;

  @include md {
    @include img_l_m(320, 128, 28);
    font-size: sizem(13);
    line-height: 2;
  }
}

// begin
.swipe-fade-leave-to {
  opacity: 0;
  z-index: 0;
}
// end
.swipe-fade-enter {
  opacity: 0;
  z-index: 1;
}

.swipe-fade-enter-active {
  transition: all 1s ease;
}

.swipe-fade-leave-active {
  transition: all 1s ease;
}

/* Swipe */
.swipe1 {
  @include div_l_pc(450, 600, 0, 0);
  object-fit: cover;

  @include md {
    @include div_c_m(375, 220, 310);
  }
}

.swipe2 {
  @include div_l_pc(1020, 600, 0, 450);
  object-fit: cover;

  @include md {
    @include div_l_m(188, 250, 530, 0);
  }
}

.swipe3 {
  @include div_l_pc(450, 600, 0, 1470);
  object-fit: cover;

  @include md {
    @include div_r_m(188, 250, 530, 0);
  }
}

.swipe4 {
  @include div_l_pc(450, 300, 600, 1470);
  object-fit: cover;

  @include md {
    @include div_c_m(375, 250, 780);
  }
}

// begin
// .swipe-left-leave-to {
//   margin-left: -100vw;
//   z-index: 0;
// }
// // end
// .swipe-left-enter {
//   opacity: 0.5;
//   margin-left: 0;
//   z-index: 1;
// }

// .swipe-left-enter-active {
//   transition: all 0.5s ease;
// }

// .swipe-left-leave-active {
//   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
// }

.swipe-wrap {
  width: 100%;
  height: 100%;
  cursor: pointer;
  overflow: hidden;
}

.swipe-item {
  width: 100%;
  height: 100%;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .slide-name {
    right: 2em;
    top: 0.6em;
    color: #fff;
    font-size: size(16);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: left;
    text-shadow: 0 0.3em 1em #000;
  }

  // &:nth-child(1) {
  //   z-index: 1;
  //   // opacity: 1;
  // }

  // &.base {
  //   z-index: 1;
  //   opacity: 1;
  // }
  // &.active {
  //   z-index: 2;
  //   // opacity: 1;
  // }
}

.pagination {
  width: auto;
  bottom: size(10);
  right: auto;
  left: size(10);
  margin: 0 auto;
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 0px;
    box-shadow: 0 0 0 1px #fff;
    position: relative;
    background-color: #fff;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #fff;
      border-radius: 20px;
      opacity: 1;
      position: absolute;
      top: 20%;
      // transform: translateY(-50%);
      left: 20%;
      transition: all 0.3s;
      transform-origin: center;
      transform: scale(0);
    }
    &.active {
      box-shadow: none;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background: #bcdbdb;
        border-radius: 0px;
        opacity: 1;
        position: absolute;
        top: 0%;
        box-shadow: 0 0 0 1px #bcdbdb;
        // transform: translateY(-50%);
        left: 0%;
        transform: scale(1);
      }
    }
  }
}

.swipe-btns {
  width: 100%;
  height: 100%;
  padding: 0 0;
 // z-index: 3;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  .prev-btn,
  .next-btn {
    position: relative;z-index: 3;
    height: 100%;
    width: 2em;
    font-size: size(20);
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: translateX(100%);
      background-color: #0004;
      transition: all 0.3s;
    }
    &::after {
      content: '';
      width: 1em;
      height: 1em;
      position: absolute;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.75em);
      border: solid #fff;
      border-width: 0.1em 0.1em 0 0;
      transform: rotate(45deg) translate(-10%, 10%);
    }
    &:hover:before {
      transform: translateX(0%);
    }
    &:hover:after {
      animation: btn 0.5s ease-in-out infinite alternate;
    }
  }
  .prev-btn {
    transform: scaleX(-1);
  }
}
@keyframes btn {
  to {
    transform: rotate(45deg) translate(10%, -10%);
  }
}

@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {

  // /* Swipe */
  // .swipe {
  //   width: sizem(310);
  //   height: sizem(357);
  //   min-height: auto;
  //   top: sizem(255);
  //   bottom: auto;
  //   left: sizem(33);
  //   object-fit: cover;
  // }

  // begin
  .swipe-fade-leave-to {
    opacity: 0;
    z-index: 0;
  }
  // end
  .swipe-fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .swipe-fade-enter-active {
    transition: all 0.5s ease;
  }

  .swipe-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  // begin
  // .swipe-left-leave-to {
  //   margin-left: -100vw;
  //   z-index: 0;
  // }
  // // end
  // .swipe-left-enter {
  //   opacity: 0.5;
  //   margin-left: 0;
  //   z-index: 1;
  // }

  // .swipe-left-enter-active {
  //   transition: all 0.5s ease;
  // }

  // .swipe-left-leave-active {
  //   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  // }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
    z-index: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .slide-name {
      bottom: 0.6rem;
      right: 0.6rem;
      font-size: sizem(12);
    }
  }

  .pagination {
    width: auto;
    bottom: size(91);
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
  }

  .pagination-dot {
    padding: 5px;
    margin: 0 10px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #004ea2;
        border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 20%;
        // transform: translateY(-50%);
        left: 20%;
        transition: all 0.3s;
        transform-origin: center;
        transform: scale(0);
      }
      &.active {
        &::before {
          content: '';
          width: 100%;
          height: 100%;
          display: block;
          background: #004ea2;
          border-radius: 20px;
          opacity: 1;
          position: absolute;
          top: 0%;
          // transform: translateY(-50%);
          left: 0%;
          transform: scale(1);
        }
      }
    }
  }

  .swipe-btns {
    width: 100%;
    left: 0%;
    .prev-btn,
    .next-btn {
      font-size: sizem(15);
      &::before {
        background-color: #cc5b4e00;
      }
      &::after {
        border-color: #fff;
        border-width: 0.15em 0.15em 0 0;
        animation: btn 0.5s ease-in-out infinite alternate;
      }
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import slider from '@/mixins/slider.js'

export default {
  name: 'section4',

  mixins: [slider],
  // props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideIndex1: 0,
      slideIndex2: 0,
      slideIndex3: 0,
      slideIndex4: 0,
      slideList1: [
        {
          img: require('./s4/l/2008Millord.jpg'),
          name: '2008 Millord',
          webp: require('./webp/s4/2008Millord.webp'),
          // desc: '270度翠綠簇擁<br />開窗就享無垠綠景',
        },
        {
          img: require('./s4/l/2010詠真3.jpg'),
          name: '2010 詠真',
          webp: require('./webp/s4/2010詠真3.webp'),
        },
        {
          img: require('./s4/l/2012璞真一一.jpg'),
          name: '2012 璞真一一',
          webp: require('./webp/s4/2012璞真一一.webp'),
        },
        {
          img: require('./s4/l/2017璞真作.jpg'),
          name: '2017 璞真作',
          webp: require('./webp/s4/2017璞真作.webp'),
        },
        {
          img: require('./s4/l/2019勤耕延吉.jpg'),
          name: '2019 勤耕延吉',
          webp: require('./webp/s4/2019勤耕延吉.webp'),
        },
        {
          img: require('./s4/l/2020璞真仰睦２.jpg'),
          name: '2020 璞真仰睦',
          webp: require('./webp/s4/2020璞真仰睦２.webp'),
        },
        {
          img: require('./s4/l/2024璞真合和.jpg'),
          name: '2024 璞真合和',
          webp: require('./webp/s4/2024璞真合和.webp'),
        },
        {
          img: require('./s4/l/2024璞真永吉0.jpg'),
          name: '2024 璞真永吉',
          webp: require('./webp/s4/2024璞真永吉0.webp'),
        },
      ],
      slideList2: [
        {
          img: require('./s4/c/2015 松山 璞真慶城.jpg'),
          name: '2015 松山 璞真慶城',
          webp: require('./webp/s4/2015 松山 璞真慶城.webp'),
          // desc: '270度翠綠簇擁<br />開窗就享無垠綠景',
        },
        {
          img: require('./s4/c/2018　內湖　勤美璞真碧湖畔.jpg'),
          name: '2018　內湖　勤美璞真碧湖畔',
          webp: require('./webp/s4/2018　內湖　勤美璞真碧湖畔.webp'),
        },
        {
          img: require('./s4/c/2022 台中 勤美之森.jpg'),
          name: '2022 台中 勤美之森',
          webp: require('./webp/s4/2022 台中 勤美之森.webp'),
        },
        {
          img: require('./s4/c/2024 天母 璞真荣華.jpg'),
          name: '2024 天母 璞真荣華',
          webp: require('./webp/s4/2024 天母 璞真荣華.webp'),
        },
      ],
      slideList3: [
        {
          img: require('./s4/r/2005 忠孝 璞真本因坊.jpg'),
          name: '2005 忠孝 璞真本因坊',
          webp: require('./webp/s4/2005 忠孝 璞真本因坊.webp'),
          // desc: '270度翠綠簇擁<br />開窗就享無垠綠景',
        },
        {
          img: require('./s4/r/2007 天母 仰哲.jpg'),
          name: '2007 天母 仰哲',
          webp: require('./webp/s4/2007 天母 仰哲.webp'),
        },
        {
          img: require('./s4/r/2008 大安 仰心.jpg'),
          name: '2008 大安 仰心',
          webp: require('./webp/s4/2008 大安 仰心.webp'),
        },
        {
          img: require('./s4/r/2010 松山-璞真久石讓.jpg'),
          name: '2010 松山-璞真久石讓',
          webp: require('./webp/s4/2010 松山-璞真久石讓.webp'),
        },
        {
          img: require('./s4/r/2011 大安 勤美璞真.jpg'),
          name: '2011 大安 勤美璞真',
          webp: require('./webp/s4/2011 大安 勤美璞真.webp'),
        },
      ],
      slideList4: [
        {
          img: require('./s4/b/2008-台中-勤美誠品綠園道.jpg'),
          name: '2008 台中 勤美誠品綠園道',
          webp: require('./webp/s4/2008-台中-勤美誠品綠園道.webp'),
          // desc: '270度翠綠簇擁<br />開窗就享無垠綠景',
        },
        {
          img: require('./s4/b/2009台中勤美誠品3.jpg'),
          name: '2009 台中 勤美誠品',
          webp: require('./webp/s4/2009台中勤美誠品3.webp'),
        },
        {
          img: require('./s4/b/2022-台中-勤美之森.jpg'),
          name: '2022 台中 勤美之森',
          webp: require('./webp/s4/2022-台中-勤美之森.webp'),
        },
        {
          img: require('./s4/b/2023-松山-一方璞真.jpg'),
          name: '2023 松山 一方璞真',
          webp: require('./webp/s4/2023-松山-一方璞真.webp'),
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    // viewIndex() {
    //   if (this.viewIndex === 5) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>
