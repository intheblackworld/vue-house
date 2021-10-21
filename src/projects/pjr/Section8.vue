<template>
  <div class="section8">
    <div class="container flex flex-jb flex-ac wrap">
      <div class="swipe" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade" data-aos-delay="400">
        <div class="label">
          精品商圈
        </div>
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(1)" v-touch:swipe.right="() => addMultiIndex(1)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList1" v-show="slideIndex1 === i" :key="slide.img" :class="`swipe-item absolute`" @click="addMultiIndex(1)">
              <picture>
                <source :srcset="slide.webp" type="image/webp" />
                <source :srcset="slide.img" type="image/jpeg" />
                <img :src="slide.img" :alt="info.caseName" class="">
              </picture>
              <p class="slide-name absolute" v-html="slide.name"></p>
            </div>
          </transition-group>
          <!-- <div class="swipe-btns absolute flex-ac flex-jb"> -->
          <div class="prev-btn" @click="decMultiIndex(1)"></div>
          <div class="next-btn" @click="addMultiIndex(1)"></div>
          <!-- </div> -->
        </div>
        <div class="title">
          中山、雙連雙捷核心 盛裝優雅日常時光
        </div>
        <h3 class="desc">
          停下黑頭車，以步行雙捷運品味自在奢華，漫步中山晶華商圈，頂級SVIP您是座上賓，國際精品櫥窗競豔，全球限量才與您匹配。穿梭赤峰藏寶圖，時尚、美食與老屋風情交織，再來場鬆餅的甜蜜約會，奢逸生活不只手捧名牌精品，而是逛不膩的大道巷弄間，總有新鮮事等著你。
        </h3>
      </div>
      <div class="swipe" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade" data-aos-delay="600">
        <div class="label">
          美食聚落
        </div>
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(2)" v-touch:swipe.right="() => addMultiIndex(2)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList2" v-show="slideIndex2 === i" :key="slide.img" :class="`swipe-item absolute`" @click="addMultiIndex(2)">
              <picture>
                <source :srcset="slide.webp" type="image/webp" />
                <source :srcset="slide.img" type="image/jpeg" />
                <img :src="slide.img" :alt="info.caseName" class="">
              </picture>
              <p class="slide-name absolute" v-html="slide.name"></p>
            </div>
          </transition-group>
          <!-- <div class="swipe-btns absolute flex-ac flex-jb"> -->
          <div class="prev-btn" @click="decMultiIndex(2)"></div>
          <div class="next-btn" @click="addMultiIndex(2)"></div>
          <!-- </div> -->
          <!-- <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList2" :key="slide.img + '-dot'" @click="goToMultiIndex(index, 2)"><span :class="`${slideIndex2 === index ? 'active' : ''}`"></span></div>
        </div> -->
        </div>
        <div class="title">
          雙連、寧夏生活質蘊 難忘市井好滋味
        </div>
        <h3 class="desc">
          台北最有滋有味的日常，優雅品嚐米其林餐廳，拐彎是道地庶民小吃，一甲子圓仔湯、快炒沙茶牛肉，走過百年風味依舊；寧夏夜市鮮香豬肝湯和肥美蚵仔煎令人垂涎，小吃攤肩並肩，蝦仁蛋包湯、知高飯，置身台北上河圖。
        </h3>
      </div>
      <div class="swipe" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade" data-aos-delay="800">
        <div class="label">
          文化大道
        </div>
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(3)" v-touch:swipe.right="() => addMultiIndex(3)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList3" v-show="slideIndex3 === i" :key="slide.img" :class="`swipe-item absolute`" @click="addMultiIndex(3)">
              <picture>
                <source :srcset="slide.webp" type="image/webp" />
                <source :srcset="slide.img" type="image/jpeg" />
                <img :src="slide.img" :alt="info.caseName" class="">
              </picture>
              <p class="slide-name absolute" v-html="slide.name"></p>
            </div>
          </transition-group>
          <!-- <div class="swipe-btns absolute flex-ac flex-jb"> -->
          <div class="prev-btn" @click="decMultiIndex(3)"></div>
          <div class="next-btn" @click="addMultiIndex(3)"></div>
          <!-- </div> -->
          <!-- <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList3" :key="slide.img + '-dot'" @click="goToMultiIndex(index, 3)"><span :class="`${slideIndex3 === index ? 'active' : ''}`"></span></div>
        </div> -->
        </div>
        <div class="title">
          百年古蹟藝術聚落 豐釀人文胸豁
        </div>
        <h3 class="desc">
          關上中山大道簇擁的歡騰，尋咖啡香拜訪古蹟藝術聚落，當代藝術館、台北光點、蔡瑞月舞蹈社、台北美術館，沉浸國內外特展、獨家藝術電影，相遇玻璃屋裡狂舞的青春，百年建築與當代藝術厚植底蘊，探不盡的人文靈光。
        </h3>
      </div>
      <div class="swipe" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade" data-aos-delay="1200">
        <div class="label">
          金融總部
        </div>
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(4)" v-touch:swipe.right="() => addMultiIndex(4)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList4" v-show="slideIndex4 === i" :key="slide.img" :class="`swipe-item absolute`" @click="addMultiIndex(4)">
              <picture>
                <source :srcset="slide.webp" type="image/webp" />
                <source :srcset="slide.img" type="image/jpeg" />
                <img :src="slide.img" :alt="info.caseName" class="">
              </picture>
              <p class="slide-name absolute" v-html="slide.name"></p>
            </div>
          </transition-group>
          <!-- <div class="swipe-btns absolute flex-ac flex-jb"> -->
          <div class="prev-btn" @click="decMultiIndex(4)"></div>
          <div class="next-btn" @click="addMultiIndex(4)"></div>
          <!-- </div> -->
          <!-- <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList4" :key="slide.img + '-dot'" @click="goToMultiIndex(index, 4)"><span :class="`${slideIndex4 === index ? 'active' : ''}`"></span></div>
        </div> -->
        </div>
        <div class="title">
          上海、陽信雙金融總部 第一大道再鑲榮耀
        </div>
        <h3 class="desc">
          大時代風華續行，新榮景蓄勢勃發，上海商銀、陽信銀行總部改建如火如荼，落址中山、民權十字金脈，國賓飯店改建案拍板、國產署旗下危老改建案等，金融特區地位鞏固，再添榮耀前景。
        </h3>
      </div>
      <div class="swipe" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade" data-aos-delay="1200">
        <div class="label">
          五星飯店聚落
        </div>
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(5)" v-touch:swipe.right="() => addMultiIndex(5)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList5" v-show="slideIndex5 === i" :key="slide.img" :class="`swipe-item absolute`" @click="addMultiIndex(5)">
              <picture>
                <source :srcset="slide.webp" type="image/webp" />
                <source :srcset="slide.img" type="image/jpeg" />
                <img :src="slide.img" :alt="info.caseName" class="">
              </picture>
              <p class="slide-name absolute" v-html="slide.name"></p>
            </div>
          </transition-group>
          <!-- <div class="swipe-btns absolute flex-ac flex-jb"> -->
          <div class="prev-btn" @click="decMultiIndex(5)"></div>
          <div class="next-btn" @click="addMultiIndex(5)"></div>
          <!-- </div> -->
          <!-- <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList5" :key="slide.img + '-dot'" @click="goToMultiIndex(index, 5)"><span :class="`${slideIndex5 === index ? 'active' : ''}`"></span></div>
        </div> -->
        </div>
        <div class="title">
          五星級飯店廊道 全球貴賓風光下榻
        </div>
        <h3 class="desc">
          昂首中山北，國際五星飯店沿途磅礡坐落，全球高官政要、富商大賈匯聚的優渥，國賓、晶華、老爺、大倉久和、圓山大飯店，建築藝境、經典饗饌、極致款待，詮釋中山北路的頂級奢華。
        </h3>
      </div>
      <div class="swipe" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade" data-aos-delay="1200">
        <div class="label">
          權掌雙國門
        </div>
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(6)" v-touch:swipe.right="() => addMultiIndex(6)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList6" v-show="slideIndex6 === i" :key="slide.img" :class="`swipe-item absolute`" @click="addMultiIndex(6)">
              <picture>
                <source :srcset="slide.webp" type="image/webp" />
                <source :srcset="slide.img" type="image/jpeg" />
                <img :src="slide.img" :alt="info.caseName" class="">
              </picture>
              <p class="slide-name absolute" v-html="slide.name"></p>
            </div>
          </transition-group>
          <!-- <div class="swipe-btns absolute flex-ac flex-jb"> -->
          <div class="prev-btn" @click="decMultiIndex(6)"></div>
          <div class="next-btn" @click="addMultiIndex(6)"></div>
          <!-- </div> -->
          <!-- <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList6" :key="slide.img + '-dot'" @click="goToMultiIndex(index, 6)"><span :class="`${slideIndex6 === index ? 'active' : ''}`"></span></div>
        </div> -->
        </div>
        <div class="title">
          權掌雙國門輻輳 國際都會未來指標
        </div>
        <h3 class="desc">
          起首中山北路，權掌松山國際機場、台北雙子星，佈局亞太經貿版圖，迎接世界都會新地標。「台北雙子星」600億盛大開發，擘建地上74層、56層摩天雙塔，結合五鐵，百貨、旅館、頂辦、餐廳，燃亮北市新時代。
        </h3>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section8 {
  width: 100%;
  max-height: auto;
  background-size: cover;
  background-attachment: fixed;
  background-color: #fff;

  @include md {
    width: 100vw;
    height: auto;
    min-height: auto;
    max-height: initial;
    overflow: visible;
  }
}

.container {
  width: size(1550);
  margin: size(60) auto;

  @include md {
    width: sizem(320);
    margin: sizem(60) auto sizem(10);
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

.label {
  font-size: size(29);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing:0.05em;
  text-align: left;
  color: #c9a063;
  white-space: nowrap;
  margin-bottom:0.6em;
  @include md {
    font-size: sizem(16);
    line-height: 1.63;
  }
}
.title {
  font-size: size(35);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #3e3a39;
  margin: size(44) 0 size(21);
  white-space: nowrap;

  @include md {
    font-size: sizem(17);
    line-height: 1.35;
    margin: sizem(31) 0 sizem(13);
  }
}

.desc {
  font-size: size(20);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.76;
  letter-spacing: 0.05em;
  text-align: justify;
  color: #3e3a39;
  margin-bottom: size(130);

  @include md {
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
.swipe {
  width: size(660);
  &:nth-child(even) {
    padding-top: 8em;
  }
  @include md {
    width: 100%;
    padding-bottom: 7vw;
  &:nth-child(even) {
    padding-top: 0;
  }
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
  height: size(440);
  cursor: pointer;
  overflow: hidden;
  @include md {
    height: sizem(213);
  }
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
    right: 1.2em;
    bottom: 0.6em;
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

// .swipe-btns {
// width: 100%;
// height: 100%;
// padding: 0 0;
// z-index: 3;
// overflow: hidden;
// position: absolute;
// top: 0;
// left: 0;

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
  font-size: size(20);
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
// }
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

  .swipe-item {
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
      bottom: 0.8em;
      right: 0.8em;
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

  .prev-btn,
  .next-btn {
    width: 2em;
    font-size: sizem(15);
    &::before {
      background-color: #cc5b4e00;
    }
    &::after {
      width: 1em;
      height: 1em;
      border-color: #fff;
      border-width: 0.15em 0.15em 0 0;
      animation: btn 0.5s ease-in-out infinite alternate;
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
      slideIndex5: 0,
      slideIndex6: 0,
      slideList1: [
        {
          img: require('./s8/1-1新光三越與誠品生活南西店.jpg'),
          name: '新光三越與誠品生活南西店',
          webp: require('./webp/s8/1-1新光三越與誠品生活南西店.webp'),
        },
        {
          img: require('./s8/1-2捷運雙連站.jpg'),
          name: '捷運雙連站',
          webp: require('./webp/s8/1-2捷運雙連站.webp'),
        },
        {
          img: require('./s8/1-3捷運中山站.jpg'),
          name: '捷運中山站',
          webp: require('./webp/s8/1-3捷運中山站.webp'),
        },
        {
          img: require('./s8/1-4赤峰商圈.jpg'),
          name: '赤峰商圈',
          webp: require('./webp/s8/1-4赤峰商圈.webp'),
        },
        {
          img: require('./s8/1-5晶華商圈.jpg'),
          name: '晶華商圈',
          webp: require('./webp/s8/1-5晶華商圈.webp'),
        },
      ],
      slideList2: [
        {
          img: require('./s8/2-1寧夏夜市.jpg'),
          name: '寧夏夜市',
          webp: require('./webp/s8/2-1寧夏夜市.webp'),
        },
        {
          img: require('./s8/2-2雙連站商圈美食.jpg'),
          name: '雙連站商圈美食',
          webp: require('./webp/s8/2-2雙連站商圈美食.webp'),
        },
        {
          img: require('./s8/2-3雙連站商圈美食.jpg'),
          name: '雙連站商圈美食',
          webp: require('./webp/s8/2-3雙連站商圈美食.webp'),
        },
      ],
      slideList3: [
        {
          img: require('./s8/3-1台北美術館.jpg'),
          name: '台北美術館',
          webp: require('./webp/s8/3-1台北美術館.webp'),
        },
        {
          img: require('./s8/3-2台北當代藝術館.jpg'),
          name: '台北當代藝術館',
          webp: require('./webp/s8/3-2台北當代藝術館.webp'),
        },
        {
          img: require('./s8/3-3光點台北.jpg'),
          name: '光點台北',
          webp: require('./webp/s8/3-3光點台北.webp'),
        },
        {
          img: require('./s8/3-4蔡瑞月舞蹈社.jpg'),
          name: '蔡瑞月舞蹈社',
          webp: require('./webp/s8/3-4蔡瑞月舞蹈社.webp'),
        },
      ],
      slideList4: [
        {
          img: require('./s8/4-1上海商銀總部示意圖 資料來源 上海商銀.jpg'),
          name: '上海商銀總部示意圖 資料來源 上海商銀',
          webp: require('./webp/s8/4-1上海商銀總部示意圖 資料來源 上海商銀.webp'),
        },
        {
          img: require('./s8/4-2陽信商銀總部示意.jpg'),
          name: '陽信商銀總部示意',
          webp: require('./webp/s8/4-2陽信商銀總部示意.webp'),
        },
      ],
      slideList5: [
        {
          img: require('./s8/5-1晶華酒店.jpg'),
          name: '晶華酒店',
          webp: require('./webp/s8/5-1晶華酒店.webp'),
        },
        {
          img: require('./s8/5-2圓山大飯店.jpg'),
          name: '圓山大飯店',
          webp: require('./webp/s8/5-2圓山大飯店.webp'),
        },
        {
          img: require('./s8/5-3大倉久和大飯店.jpg'),
          name: '大倉久和大飯店',
          webp: require('./webp/s8/5-3大倉久和大飯店.webp'),
        },
        {
          img: require('./s8/5-4老爺酒店.jpg'),
          name: '老爺酒店',
          webp: require('./webp/s8/5-4老爺酒店.webp'),
        },
        {
          img: require('./s8/5-5國賓大飯店.jpg'),
          name: '國賓大飯店',
          webp: require('./webp/s8/5-5國賓大飯店.webp'),
        },
      ],
      slideList6: [
        {
          img: require('./s8/6-1台北雙子星示意圖.jpg'),
          name: '台北雙子星示意圖',
          webp: require('./webp/s8/6-1台北雙子星示意圖.webp'),
        },
        {
          img: require('./s8/6-2松山機場.jpg'),
          name: '松山機場',
          webp: require('./webp/s8/6-2松山機場.webp'),
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
