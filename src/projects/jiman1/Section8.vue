<template>
  <div>
    <div class="section8">
      <div class="item-list flex-ac flex-jb" v-if="isPC">
        <div v-for="(slide, i) in slideList" :key="slide.img + 'item' + i" :class="`item`">
          <img :src="slide.img" alt="">
          <div class="item-name" v-html="slide.name"></div>
          <div class="item-title" v-html="slide.title"></div>
          <div class="item-subtitle" v-html="slide.subtitle"></div>
          <div class="item-desc" v-html="slide.desc"></div>
          <div class="item-work" v-html="slide.work"></div>
        </div>
      </div>
      <div class="swipe absolute" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="isMobile">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div>
        </div>
      </div>
      <div v-if="isMobile">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" :key="slide.img + 'item' + i" :class="`item`" v-show="slideIndex === i">
            <div class="item-name" v-html="slide.name"></div>
            <div class="item-title" v-html="slide.title"></div>
            <div class="item-subtitle" v-html="slide.subtitle"></div>
            <div class="item-desc" v-html="slide.desc"></div>
            <div class="item-work" v-html="slide.work"></div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import '@/assets/style/function.scss';
.item-list {
  width: size(1190);
  margin-left: size(394);
  padding-top: size(94);
  line-height:1.75;

  .item {
    width: size(530);/*358 */
    min-height: size(55 + 410 + 397);/*55 + 354 + 397 */
    position: relative;

    img {
      width: 100%;
      margin-bottom: size(30);
    }
    .item-name {
      font-size: size(19.3);
      // letter-spacing: size(0.53);
      text-align: left;
      font-weight: 400;
      color: #000;
      white-space: nowrap;
      span {
        font-weight: 500;
      }
    }
    .item-title {
      font-size: size(43);
      line-height:1.5;
      // letter-spacing: size(0.53);
      text-align: left;
      font-weight: 600;
      color: #d67f76;
      white-space: nowrap;
      margin-bottom: 0.3em;
      span {
        font-size: size(29);
        font-weight: 400;
      }
    }
    .item-subtitle {
      font-size: size(24.7);
      // letter-spacing: size(0.53);
      text-align: left;
      font-weight: 600;
      color: #000;
      white-space: nowrap;
    }
    .item-desc {
      font-size: size(17);
      // letter-spacing: size(0.53);
      text-align: justify;
      font-weight: 400;
      color: #000;
      // white-space: nowrap;
    }
    .item-work {
      @include img_l_pc(333, 0, 0);
      width:100%;
      top: auto;
      bottom: 0;
      transform: translateY(100%);

      font-size: size(15.8);
      // letter-spacing: size(0.53);
      text-align: justify;
      font-weight: 400;
      color: #000;
      white-space:normal;
      span {
        font-weight: 600;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .item {
    @include img_c_m(306, 364);
  }

  .item-name {
    font-size: sizem(16.5);
    line-height: sizem(31.3);
    // letter-spacing: sizem(0.53);
    text-align: left;
    font-weight: 400;
    color: #000;
    white-space: nowrap;
    span {
      font-weight: 500;
    }
  }
  .item-title {
    font-size: sizem(36.8);
    line-height: sizem(47.5);
    // letter-spacing: sizem(0.53);
    text-align: left;
    font-weight: 600;
    color: #d67f76;
    white-space: nowrap;
    span {
      font-size: sizem(25.4);
      line-height: sizem(47.5);
      font-weight: 400;
    }
  }
  .item-subtitle {
    font-size: sizem(21.1);
    line-height: sizem(44.4);
    // letter-spacing: sizem(0.53);
    text-align: left;
    font-weight: 600;
    color: #000;
    margin: 0.2em 0 0 0;
    white-space: nowrap;
  }
  .item-desc {
    font-size: sizem(12.5);
    line-height: sizem(24.3);
    // letter-spacing: sizem(0.53);
    text-align: justify;
    font-weight: 400;
    color: #000;
    // white-space: nowrap;
  }
  .item-work {
    // @include img_l_pc(333, 0, 0);
    position: relative;
    font-size: sizem(13.5);
    line-height: sizem(27.1);
    // letter-spacing: sizem(0.53);
    text-align: left;
    font-weight: 400;
    color: #000;
    margin: 1em 0 0 0;
    span {
      font-weight: 600;
    }
  }
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width: size(1920);
  height: size(1050);/*1028 */
  min-height: size(1028);
  max-height: size(1050);/*1028 */
  position: relative;
  background-color: #fff;
}

.bg-img {
  width: 100vw;
  height: size(1080);
  min-height: size(1080);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
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
  .section8 {
    width: 100vw;
    height: sizem(680);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  /* Swipe */
  .swipe {
    width: sizem(306.5);
    height: sizem(306.5);
    min-height: auto;
    top: sizem(32.6);
    left: sizem(34.2);
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
      height: sizem(306.5);
      object-fit: cover;
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
    bottom: sizem(13);
    left: 0;
    right: 0;
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
      width: sizem(8);
      height: sizem(8);
      border-radius: sizem(8);
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: transparent;
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
          width: 110%;
          height: 110%;
          display: block;
          background: #fff;
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
    height: 100%;
    padding: 0 15px;
    z-index: 3;

    .prev-btn,
    .next-btn {
      width: sizem(15);
      cursor: pointer;
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
  name: 'section8',

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
          img: isMobile
            ? require('./mobile/08/08_img_1_m.jpg')
            : require('./s8/08_img_1.jpg'),
          name: '<span>建築設計</span>｜彭繼賢建築師事務所',
          title: '彭繼賢 <span>建築師</span>',
          subtitle: '造心造景造品味 建築美學詩人',
          desc:isMobile
            ? '建築是凝固的音樂，是永恆的生命，洞查人性化之各種需求，轉化為「動」建築美學，使自慢藏整體在不誇飾雕琢下，仍如一幅名家珍藏的山水畫。'
            : '建築是凝固的音樂，是永恆的生命，洞查人性化之各種需求，洞見自然生機的力量，使之轉化為「動」建築美學，融合陽光、空氣、環保、節能、健康、科技、時尚，由內而外型塑建築之美，使自慢藏整體在不誇飾雕琢下，仍如一幅名家珍藏的山水畫。',
          work:
            '【 經典業績 】<br /><span>基泰台大、中正威登、員邦華宴、金華泰蘭亭序</span>',
        },
       // {
       //   img: isMobile
       //     ? require('./mobile/08/08_img_2_m.jpg')
       //     : require('./s8/08_img_2.jpg'),
        //  name: '<span>公設規劃</span>｜伊太空間設計',
       //  title: '張祥鎬 <span>設計總監</span>',
       //   subtitle: '德國紅點、IF設計大獎空間大師',
       //   desc:isMobile
       //     ? '空間，是一個存在的語言，每個角落與細節都應是體現有意義聯繫而存在。由人性為始，結合美與感性，以居住者本身感受為優先，進而創造出一個完美的終點。'
        //    : '空間，是一個存在的語言，每個角落與細節都應是體現有意義聯繫而存在。在規劃空間配置的起點時，由人性為始，結合美與感性，以居住者本身感受為優先，方能塑造令人放鬆以及自在的氛圍，進而創造出一個完美的終點。',
        //  work:
        //    '【 經典業績 】<br /><span>RUIKE企業總部、ALTA 台中館、Omni台北館</span>',
       // },
        {
          img: isMobile
            ? require('./mobile/08/08_img_3_m.jpg')
            : require('./s8/08_img_3.jpg'),
          name: '<span>景觀設計</span>｜大漢設計',
          title: '徐世萃 <span>景觀顧問</span>',
          subtitle: '點藏山水化境 豪宅御用景觀名家',
          desc:isMobile
            ? '得大山大水之寵，自慢藏擁有水岸公園雙首排的自慢環境，與自然相融，和環境共榮擴大生活領域而不侵擾，於山水襯底間勾勒出生機豐饒的造景。'
            : '得大山大水之寵，自慢藏擁有水岸公園雙首排的自慢環境，與自然相融，和環境共榮，結合都市、建築、人文、動線、自然、生態等元素，擴大生活領域而不侵擾，於山水襯底間勾勒出生機豐饒的造景，及季節多樣性的景觀庭園。',
          work:isMobile
            ?'【 經典業績 】<br /><span>維多利亞酒店、碧波白、墾丁凱薩飯店-Villa<br>、大直ATT百貨</span>'
            :'【 經典業績 】<br /><span>維多利亞酒店、碧波白、墾丁凱薩飯店-Villa、大直ATT百貨</span>',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    viewIndex() {
      if (this.viewIndex === 8) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
