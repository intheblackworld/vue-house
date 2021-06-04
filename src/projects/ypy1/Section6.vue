<template>
  <div>
    <div class="section6">
      <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <!-- <div class="slide-name absolute" v-html="slide.name"></div> -->
            </div>
          </transition-group>
          <div class="pagination absolute flex-ac" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <div alt="" class="prev-btn" @click="decIndex"></div>
            <div alt="" class="next-btn" @click="addIndex"></div>
          </div>
        </div>
      </div>
      <transition-group name="swipe-fade" mode="out-in">
        <div v-for="(slide, index) in slideList" v-show="slideIndex === index" :key="slide.img + index" :class="`txt absolute`">
          <div class="hr1" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="400"></div>
          <h3 class="title" v-html="slide.title" data-aos="fade-up" data-aos-delay="0" data-aos-duration="400"></h3>
          <h3 class="subtitle" v-html="slide.subtitle"></h3>
          <div class="hr2"></div>
          <h3 class="name" v-html="slide.name"></h3>
          <h3 class="job-title" v-html="slide.job_title"></h3>
          <p class="desc" v-html="slide.desc"></p>
          <p class="works-title">| 經典作品 |</p>
          <ul class="works">
            <li v-for="(work, index) in slide.works" :key="work + index" v-html="work">
            </li>
          </ul>
        </div>
      </transition-group>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: 100%;
  height: size(875);
  min-height: size(875);
  max-height: size(875);
  background-image: url('./s6/bg_t.jpg');
  position: relative;
  background-size: 100% 100%;
}

.bg-b {
  position: absolute;
  width: 100%;
  height: auto;
  left: 0;
  top: auto;
  bottom: 0;
  transform: translateY(100%)
}

.hr1 {
  @include img_l_pc(4, 99, 300);
  height: size(76);
  background: #fff;
}
.title {
  @include img_l_pc(500, 96, 321);
  width: auto;
  font-size: size(60);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #fff000;
  white-space: nowrap;
}
.subtitle {
  @include img_l_pc(214, 216, 321);
  width: auto;
  font-size: size(33);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.79;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.hr2 {
  @include img_l_pc(622, 230, 535);
  height: size(2);
  background: #998675;
}
.name {
  @include img_l_pc(158, 285, 321);
  width: auto;
  font-size: size(52);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.81;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}
.job-title {
  @include img_l_pc(261, 301, 496);
  width: auto;
  font-size: size(21);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.95;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}
.desc {
  @include img_l_pc(613, 360, 321);
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: justify;
  color: #ffffff;
}
.works-title {
  @include img_l_pc(564, 519, 321);
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(0.2);
  text-align: left;
  color: #ffffff;
}
.works {
  position: absolute;
  top: size(564);
  left: size(350);
  width: size(508);
  white-space: nowrap;
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(0.2);
  text-align: left;
  color: #ffffff;
  li {
    list-style-type: disc;
  }
}

/* Swipe */
.swipe {
  width: size(989);
  height: size(710);
  top: size(112);
  right: 0;
  object-fit: cover;
  z-index: 2;
  clip-path:polygon(11.5% 0%, 100% 0, 100% 100%, 0 100%);
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
    left: 2em;
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
  }

}

.pagination {
  width: auto;
  bottom: size(44);
  right: size(30);
  left: auto;
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
    width: 10px;
    height: 10px;
    border-radius: 10px;
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
        width: 100%;
        height: 100%;
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
    width: size(20);
    cursor: pointer;
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
  .section6 {
    width: 100vw;
    height: sizem(872);
    min-height: auto;
    max-height: initial;
    background-image: url('./m/7/bg_t.jpg');
    background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
    &::after,
    &::before {
      display: none;
    }
  }

  .hr1 {
    @include img_l_m(4, 59, 32);
    height: sizem(33);
    background: #fff;
  }
  .title {
    @include img_l_m(209, 60, 45);
    width: auto;
    font-size: sizem(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: left;
    color: #fff000;
    white-space: nowrap;
  }
  .subtitle {
    @include img_l_m(123, 122, 53);
    width: auto;
    font-size: sizem(19);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.79;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .hr2 {
    @include img_l_m(2, 125, 33);
    height: sizem(465);
    background: #998675;
  }
  .name {
    @include img_l_m(90, 169, 53);
    width: auto;
    font-size: sizem(29);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.79;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }
  .job-title {
    @include img_l_m(134, 177, 146);
    width: auto;
    font-size: sizem(11);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.91;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }
  .desc {
    @include img_l_m(290, 211, 53);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    color: #ffffff;
  }
  .works-title {
    @include img_l_m(310, 635, 20);
    font-size: sizem(12);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.83;
    letter-spacing: sizem(0.12);
    text-align: left;
    color: #ffffff;
  }
  .works {
    position: absolute;
    top: sizem(660);
    left: sizem(40);
    width: sizem(350);
    white-space: nowrap;
    font-size: sizem(12);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.83;
    letter-spacing: sizem(0.12);
    text-align: left;
    color: #ffffff;
    li {
      list-style-type: disc;
    }
  }

  /* Swipe */
  .swipe {
    width: sizem(360);
    height: sizem(257);
    min-height: auto;
    top: sizem(357);
    left: sizem(16);
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
      height: auto;
      object-fit: cover;
      position: absolute;
      left: 0;
      bottom: 0;
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
    .slide-name {
      right: auto;
      top: auto;
      bottom: 1.2rem;
      left: 1.2rem;
      font-size: sizem(15);
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
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    padding: 0 15px;
    z-index: 3;

    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;

    // .btn {
    //   position: absolute;
    //   width: 100%;
    //   height: 100%;
    // }
    .prev-btn,
    .next-btn {
      position: absolute;
      height: 100%;
      width: sizem(28);
      // background: #0003;
      top: 0;
    }

    .prev-btn {
      left: 0;
    }
    .next-btn {
      right: 0;
      transform: scaleX(-1);
    }
    .prev-btn::after,
    .next-btn::after {
      content: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 30 80' xml:space='preserve'%3E%3Cpolygon fill='%23FFFFFF' points='15,40 30,0 15,20 0,40 15,60 30,80 '/%3E%3C/svg%3E");
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
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
  name: 'section6',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: isMobile
        ? [
            {
              img: require('./m/7/1.jpg'),
              title: '大師團隊·聯手擘劃',
              subtitle: '十大建築名師',
              name: '聶玉璞',
              job_title: ' 拓璞聯合建築師事務所 所長',
              desc:
                '執業至今逾30年，深度爬梳人文地理，引領城市美學步步前進。雄渾實力深受大型且知名建築機構青睞。曾連續榮獲住展雜誌選入排名十大建築師。以豪宅精品思維，於大興西路打造精品地標。',
              works: [
                '昭揚建設 昭揚縱橫 昭揚乾坤 昭揚大器 昭揚君鼎 昭揚大隱',
                '百川建設 文心硯 樂沐',
                '鴻築建設 權視界 極光',
                '君邑建設 君邑慕朵',
              ],
            },
            {
              img: require('./m/7/2.jpg'),
              title: '大師團隊·聯手擘劃',
              subtitle: '美日奪獎大師',
              name: '林俊雄',
              job_title: '第十四設計事業有限公司 設計總監',
              desc:
                '完美空間的定義，在於營造回家的幸福感。於公設規劃上，琢磨流暢的動線，而為呼應精品豪宅理念，運用不同材質，在溫馨的色調上，以細膩手法點綴璀璨元素，打造具時尚品味的幸福空間。',
              works: [
                '嘉璟建設 華爾道夫',
                '源美建設 大河戀 寬樸',
                '國泰建設 國泰豐格',
                '福美開發 水美奇岩',
                '昇樺建設 微笑昇樺 幸福昇樺',
                '元啟建設 忻津知 俬藏泱',
              ],
            },
            {
              img: require('./m/7/3.jpg'),
              title: '大師團隊·聯手擘劃',
              subtitle: '日系景觀巨匠',
              name: '楊金墩',
              job_title: '陽日景觀 總經理',
              desc:
                '綠意植栽是回家心情上的轉場，透過退縮人行道的園藝美景，延伸到中庭四季花草，在城市核心，打造一處舒緩身心靈的微生態優質環境，讓回家沿路，充滿輕鬆寫意的自然氛圍。',
              works: [
                '日本前田屋外美術株式會社設計師',
                '近600件之顯赫名宅設計、施工案',
                '嘉璟建設 華爾道夫 臻觀 大河戀',
                '寶佳機構 世紀風華',
                '元曜建設 景上瀞',
                '泉聯建設 和墅（獲選全國景觀設計暨施工首獎）',
              ],
            },
          ]
        : [
            {
              img: require('./m/7/1.jpg'),
              title: '大師團隊·聯手擘劃',
              subtitle: '十大建築名師',
              name: '聶玉璞',
              job_title: ' 拓璞聯合建築師事務所 所長',
              desc:
                '執業至今逾30年，深度爬梳人文地理，引領城市美學步步前進。雄渾實力深受大型且知名建築機構青睞。曾連續榮獲住展雜誌選入排名十大建築師。以豪宅精品思維，於大興西路打造精品地標。',
              works: [
                '昭揚建設 昭揚縱橫 昭揚乾坤 昭揚大器 昭揚君鼎 昭揚大隱',
                '百川建設 文心硯 樂沐',
                '鴻築建設 權視界 極光',
                '君邑建設 君邑慕朵',
              ],
            },
            {
              img: require('./m/7/2.jpg'),
              title: '大師團隊·聯手擘劃',
              subtitle: '美日奪獎大師',
              name: '林俊雄',
              job_title: '第十四設計事業有限公司 設計總監',
              desc:
                '完美空間的定義，在於營造回家的幸福感。於公設規劃上，琢磨流暢的動線，而為呼應精品豪宅理念，運用不同材質，在溫馨的色調上，以細膩手法點綴璀璨元素，打造具時尚品味的幸福空間。',
              works: [
                '嘉璟建設 華爾道夫',
                '源美建設 大河戀 寬樸',
                '國泰建設 國泰豐格',
                '福美開發 水美奇岩',
                '昇樺建設 微笑昇樺 幸福昇樺',
                '元啟建設 忻津知 俬藏泱',
              ],
            },
            {
              img: require('./m/7/3.jpg'),
              title: '大師團隊·聯手擘劃',
              subtitle: '日系景觀巨匠',
              name: '楊金墩',
              job_title: '陽日景觀 總經理',
              desc:
                '綠意植栽是回家心情上的轉場，透過退縮人行道的園藝美景，延伸到中庭四季花草，在城市核心，打造一處舒緩身心靈的微生態優質環境，讓回家沿路，充滿輕鬆寫意的自然氛圍。',
              works: [
                '日本前田屋外美術株式會社設計師',
                '近600件之顯赫名宅設計、施工案',
                '嘉璟建設 華爾道夫 臻觀 大河戀',
                '寶佳機構 世紀風華',
                '元曜建設 景上瀞',
                '泉聯建設 和墅（獲選全國景觀設計暨施工首獎）',
              ],
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
