<template>
  <div class="section2">
    <picture>
      <source srcset="./webp/s2/sty_1.webp" type="image/webp" />
      <source srcset="./pc/s2/sty_1.png" type="image/jpeg" />
      <img src="./pc/s2/sty_1.png" :alt="`${info.caseName}`" class="sty_1">
    </picture>
    <picture>
      <source srcset="./webp/s2/sty_2.webp" type="image/webp" />
      <source srcset="./pc/s2/sty_2.jpg" type="image/jpeg" />
      <img src="./pc/s2/sty_2.jpg" :alt="`${info.caseName}`" class="sty_2" data-aos="fade" data-aos-delay="800">
    </picture>
    <div class="btn-title flex-c" data-aos="fade" data-aos-delay="600">
      三大指標
    </div>
    <div class="title" v-if="isPC"  data-aos="fade" data-aos-delay="200">
      捷運富人<br />
      生活指標
    </div>
    <div class="title" v-else  data-aos="fade" data-aos-delay="200">
      捷運富人 生活指標
    </div>

    <div class="border"  data-aos="fade-right" data-aos-delay="400"></div>

    <h3 class="desc"  data-aos="fade" data-aos-delay="600">
      位居陽明山下富人區，樹海環繞的豪墅聚落，近享薇閣中學頂級文風與新北投捷運站便利通勤，隨手可得北投溫泉美湯，坐賞稀有綠蔭靜巷住宅享受。
    </h3>
    <div class="btns flex-ac flex-jb" data-aos="fade" data-aos-delay="600">
      <div class="btn flex-c" @click="handleTab(1)">捷運</div>
      <div class="btn flex-c" @click="handleTab(2)">古蹟</div>
      <div class="btn flex-c" @click="handleTab(3)">公園</div>
    </div>

    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade" data-aos-delay="800" v-if="tabIndex === 1">
      <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(1)" v-touch:swipe.right="() => addMultiIndex(1)">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList1" v-show="slideIndex1 === i" :key="slide.img + i" :class="`swipe-item absolute`" @click="addMultiIndex(1)">
            <picture>
              <source media="(min-width: 767px)" :srcset="slide.webp" type="image/webp" />
              <source media="(min-width: 767px)" :srcset="slide.img" type="image/jpeg" />
              <img :src="slide.img" :alt="info.caseName" class="">
            </picture>
            <p class="slide-name absolute" v-html="slide.name"></p>
          </div>
        </transition-group>
      </div>
    </div>
    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade" data-aos-delay="800" v-if="tabIndex === 2">
      <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(2)" v-touch:swipe.right="() => addMultiIndex(2)">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList2" v-show="slideIndex2 === i" :key="slide.img + i" :class="`swipe-item absolute`" @click="addMultiIndex(2)">
            <picture>
              <source media="(min-width: 767px)" :srcset="slide.webp" type="image/webp" />
              <source media="(min-width: 767px)" :srcset="slide.img" type="image/jpeg" />
              <img :src="slide.img" :alt="info.caseName" class="">
            </picture>
            <p class="slide-name absolute" v-html="slide.name"></p>
          </div>
        </transition-group>
      </div>
    </div>
    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade" data-aos-delay="800" v-if="tabIndex === 3">
      <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(3)" v-touch:swipe.right="() => addMultiIndex(3)">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList3" v-show="slideIndex3 === i" :key="slide.img + i" :class="`swipe-item absolute`" @click="addMultiIndex(3)">
            <picture>
              <source media="(min-width: 767px)" :srcset="slide.webp" type="image/webp" />
              <source media="(min-width: 767px)" :srcset="slide.img" type="image/jpeg" />
              <img :src="slide.img" :alt="info.caseName" class="">
            </picture>
            <p class="slide-name absolute" v-html="slide.name"></p>
          </div>
        </transition-group>
      </div>
      <div class="prev-btn" @click="decMultiIndex(3)"></div>
      <div class="next-btn" @click="addMultiIndex(3)"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section2 {
  width: 100%;
  height:100vh;
  min-height:size(950);
  max-height:size(1080);
  background-size: cover;
  background-attachment: fixed;
  //background-color: #f7f8f8;

  @include md {
    width: 100vw;
    height: sizem(667);
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
  @include img_l(251, 244, 1262, 218, 463, 30);
  top: calc(50% + 100vw * (244 - 540) / 1920);
  font-size: size(60);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing:0.06em;
  text-align: left;
  color: #00422d;
  white-space: nowrap;

  @include md {
    font-size: sizem(25);
    line-height: 2.88;
  }
}

.border {
  @include img_r(282, 419, 375, 282, 525, 62);
  top: calc(50% + 100vw * (419 - 540) / 1920);
  border-bottom: 2px solid #00422d;
}

.desc {
  @include img_l(522, 439, 1263, 314, 532, 31);
  top: calc(50% + 100vw * (439 - 540) / 1920);
  font-size: size(30);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.77;
  letter-spacing: normal;
  text-align: left;
  color: #000;

  @include md {
    font-size: sizem(14);
    line-height: 2.07;
  }
}

@keyframes leaf {
  to {
    transform: skew(0) rotate(0deg);
  }
}

.sty_1 {
  @include img_r(440, -300, -100, 171, 193, -20);
  transform: skewY(-3deg);
  transform-origin: 100% 100%;
  animation: leaf 5s ease-in-out alternate infinite;
}

.sty_2 {
  @include img_r(231, 97, 700, 231, 49, 144);
  top: calc(50% + 100vw * (97 - 540) / 1920);
}

.btn-title {
  @include div_l(222, 60, 717, 1260, 144, 39, 346, 30);
  top: calc(50% + 100vw * (717 - 540) / 1920);
  background-image: url('./pc/s2/btn_title_bg.jpg');
  background-size: 100% 100%;
  font-size: size(36);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: 0.12em;
  text-align: left;
  color: #ffd58c;

  @include md {
    font-size: sizem(20);
    line-height: 1.4;
    text-align: center;
  }
}

.btns {
  @include img_r(472, 814, 175, 315, 402, 30);
  top: calc(50% + 100vw * (814 - 540) / 1920);
  .btn {
    width: size(122);
    height: size(61);
    
    border:1px solid #00422d;
    border-color: #00422d00 #00422d #00422d #00422d00;
    cursor: pointer;

    font-size: size(42);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #00422d;
    transition:all 0.5s ;

    @include md {
      width: sizem(79);
      height: sizem(40);
      font-size: sizem(20);
      line-height: 1.6;
    }
    &:hover{
      animation:btn_an .5s both;
      background:#00422d33;
    //animation-timing-function:step-start;
    }
  }
}
    @keyframes btn_an {
      0% {
    border-color: #00422d00 #00422d #00422d #00422d00;
      }
      12% {
    border-color: #00422d00 #00422d00 #00422d #00422d00;
      }
      25% {
    border-color: #00422d00 #00422d00 #00422d #00422d;
      }
      37% {
    border-color: #00422d00 #00422d00 #00422d00 #00422d;
      }
      50% {
    border-color: #00422d #00422d00 #00422d00 #00422d;
      }
      62% {
    border-color: #00422d #00422d00 #00422d00 #00422d00;
      }
      75% {
    border-color: #00422d #00422d #00422d00 #00422d00;
      }
      87% {
    border-color: #00422d00 #00422d #00422d00 #00422d00;
      }
      100% {
    border-color: #00422d00 #00422d #00422d #00422d00;
      }
    }
/* Swipe */
.swipe {
  @include div_l(1177, 799, 141, 0, 363, 246, 63, 12);
  top: calc(50% + 100vw * (141 - 540) / 1920);
  object-fit: cover;
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

.swipe-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;

  @include md {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}

.swipe-item {
  width: 100%;
  height: 100%;
  z-index: 0;

  @include md {
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @include md {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .slide-name {
    left: 1.2em;
    bottom: 0.6em;
    color: #fff;
    font-size: size(16);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: left;
    text-shadow: 0 0.3em 1em #000;

    @include md {
      left: 1.2em;
      bottom: 0.6em;
      top: auto;
      font-size: sizem(12);
    }
  }
}

.pagination {
  width: auto;
  bottom: size(238);
  left: auto;
  right: size(186);
  margin: 0 auto;
  justify-content: center;

  @include md {
    width: auto;
    bottom: size(91);
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
  }
}

.pagination-dot {
  padding: 5px;
  margin: 0 0px;
  cursor: pointer;
  z-index: 4;

  @include md {
    padding: 5px;
    margin: 0 10px;
    cursor: pointer;
    z-index: 4;
  }

  span {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 0px;
    box-shadow: 0 0 0 1px #c9a063;
    position: relative;
    background-color: transparent;
    transition: all 0.5s;

    @include md {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;
    }

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: transparent;
      border-radius: 20px;
      opacity: 1;
      position: absolute;
      top: 20%;
      // transform: translateY(-50%);
      left: 20%;
      transition: all 0.3s;
      transform-origin: center;
      transform: scale(0);

      @include md {
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
    }
    &.active {
      box-shadow: none;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background: #c9a063;
        border-radius: 0px;
        opacity: 1;
        position: absolute;
        top: 0%;
        box-shadow: 0 0 0 1px #c9a063;
        // transform: translateY(-50%);
        left: 0%;
        transform: scale(1);

        @include md {
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
}

.prev-btn {
  top: 0;
  left: 0;
}

.next-btn {
  top: 0;
  right: 0;
}
.prev-btn,
.next-btn {
  position: absolute;
  z-index: 3;
  height: 100%;
  width: 2em;
  font-size: size(40);
  cursor: pointer;
  // &::before {
  //   content: '';
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   top: 0;
  //   left: 0;
  //   transform: translateX(100%);
  //   background-color: #0004;
  //   transition: all 0.3s;
  // }
  &::after {
    content: '';
    width: 1em;
    height: 1em;
    position: absolute;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.75em);
    border: solid #fff;
    border-width: 2px 2px 0 0;
    transform: rotate(45deg) translate(-10%, 10%);
  }
  &:hover:before {
    transform: translateX(0%);
  }
  &:hover:after {
    animation: btn 0.5s ease-in-out infinite alternate;
  }

  @include md {
    width: 2em;
    font-size: sizem(20);
    &::before {
      background-color: #cc5b4e00;
    }
    &::after {
      width: 1em;
      height: 1em;
      border-color: #fff;
      border-width: 2px 2px 0 0;
      animation: btn 0.5s ease-in-out infinite alternate;
    }
  }
}
.prev-btn {
  transform: scaleX(-1);
}
// }
@keyframes btn {
  to {
    transform: rotate(45deg) translate(10%, -10%);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import slider from '@/mixins/slider.js'

export default {
  name: 'section2',

  mixins: [slider],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      tabIndex: 1,
      slideIndex1: 0,
      slideIndex2: 0,
      slideIndex3: 0,
      slideList1: [
        {
          img: require('./pc/s2/1-1.jpg'),
          webp: require('./webp/s2/1-1.webp'),
          name: '新北投捷運站',
        },
      ],
      slideList2: [
        {
          img: require('./pc/s2/2-1.jpg'),
          webp: require('./webp/s2/2-1.webp'),
          name: '北投公溫泉博物館',
        },
      ],
      slideList3: [
        {
          img: require('./pc/s2/3-1.jpg'),
          webp: require('./webp/s2/3-1.webp'),
          name: '泉源公園',
        },
        {
          img: require('./pc/s2/3-2.jpg'),
          webp: require('./webp/s2/3-2.webp'),
          name: '北投公園',
        },
      ],
    }
  },
  methods: {
    handleTab(index) {
      this[`slideIndex${index}`] = 0
      this.tabIndex = index
    },
  },

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
