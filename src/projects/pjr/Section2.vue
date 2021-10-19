<template>
  <div class="section2">
    <div class="title" data-aos="fade" data-aos-delay="200" v-if="isPC">
      百年林蔭最高俯望 璞真訂製傳世境界
    </div>
    <div class="title" data-aos="fade" data-aos-delay="200" v-else>
      百年林蔭最高俯望<br />璞真訂製傳世境界
    </div>
    <h3 class="desc" data-aos="fade" data-aos-delay="400">
      翻閱中山北路世紀繪卷，台灣第一條現代化大道，日本天皇敕使御道，國家外交官道，烜赫人物踏響中山北獨有貴族身世。人文熟釀的大道胸豁，從筆直前行到仰首駐足，最懂居宅品味的「璞真之道」淬鍊而至。中山北路二段最高俯望，23層國際樹海之巔，天地靜謐，時光盡為奢華而生。
    </h3>
    <!-- <div class="subtitle" data-aos="fade-up" data-aos-delay="400">
      百年林蔭
    </div> -->

    <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade" data-aos-delay="600">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex" @click="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <picture>
              <source media="(min-width: 767px)" :srcset="slide.webp" type="image/webp" />
              <source media="(min-width: 767px)" :srcset="slide.img" type="image/jpeg" />
              <source media="(max-width: 767px)" :srcset="slide.webpm" type="image/webp" />
              <source media="(max-width: 767px)" :srcset="slide.imgm" type="image/webp" />
              <img :src="slide.img" :alt="info.caseName" class="">
            </picture>
            <div class="slide-name absolute" v-html="slide.name"></div>
          </div>
        </transition-group>
        <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
        </div>
      </div>
      <div class="swipe-btns absolute flex-ac flex-jb" v-if="isPC">
        <div class="prev-btn" @click="decIndex"></div>
        <div class="next-btn" @click="addIndex"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section2 {
  width: 100%;
  height: size(900);
  min-height: size(900);
  max-height: auto;
  background-size: cover;
  background-attachment: fixed;
  background-color: #fff;

  @include md {
    width: 100vw;
    height: sizem(274 + 315);
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
  @include img_c_pc(568, 73);
  font-size: size(35);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: center;
  color: #3e3a39;
  white-space: nowrap;

  @include md {
    @include img_c_m(167, 62);
    font-size: sizem(20);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    letter-spacing: sizem(1);
    text-align: center;
    color: #3e3a39;
  }
}

.desc {
  @include img_c_pc(1348, 144);
  font-size: size(21);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.76;
  letter-spacing: normal;
  text-align: left;
  color: #3e3a39;
  @include md {
    @include img_c_m(320, 132);
    font-size: sizem(13);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: sizem(0.13);
    text-align: left;
    color: #3e3a39;
  }
}

/* Swipe */
.swipe {
  @include div_c_pc(1820, 650, 250);
  object-fit: cover;

  @include md {
    @include div_c_m(320, 274, 0);
    top: auto;
    bottom: 0;
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
    right: 2em;
    bottom: 1.2em;
    color: #fff;
    font-size: size(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: left;
    text-shadow: 0 0.3em 1em #000;

    @include md {
      right: auto;
      top: auto;
      bottom: 1.2rem;
      right: 1.2rem;
      font-size: sizem(15);
    }
  }
}

.pagination {
  width: auto;
  bottom: size(10);
  right: auto;
  left: size(10);
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
  margin: 0 5px;
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
    width: 15px;
    height: 15px;
    border-radius: 0px;
    box-shadow: 0 0 0 1px #fff;
    position: relative;
    background-color: #fff;
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

      @include md {
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
    }

    &::after {
      @include md {
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
  z-index: 3;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  .prev-btn,
  .next-btn {
    position: relative;
    height: 100%;
    width: 2em;
    font-size: size(20);
    cursor: pointer;

    @include md {
      font-size: sizem(15);
    }
    &::before {
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

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  // .swipe-btns {
  //   width: 116%;
  //   left: -8%;
    .prev-btn,
    .next-btn {
      font-size: sizem(10);
      &::before {
        background-color: #cc5b4e00;
      }
      &::after {
        border-color: #fff;
        border-width: 0.15em 0.15em 0 0;
        animation: btn 0.5s ease-in-out infinite alternate;
      }
    }
  // }
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
  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s2/1.jpg'),
          imgm: require('./s2/1m.jpg'),
          webp: require('./webp/s2/1.webp'),
          webpm: require('./webp/s2/1m.webp'),
          name: '中山北路實景',
          // desc: '270度翠綠簇擁<br />開窗就享無垠綠景',
        },
        {
          img: require('./s2/2.jpg'),
          imgm: require('./s2/2m.jpg'),
          webp: require('./webp/s2/2.webp'),
          webpm: require('./webp/s2/2m.webp'),
          name: '中山北路實景',
          // desc: '大福路大興路環抱<br />地段價值更珍貴',
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
