<template>
  <div class="section10">
    <div class="container flex flex-jb flex-ac wrap">
      <div class="swipe" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade-down" data-aos-delay="400">
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(1)" v-touch:swipe.right="() => addMultiIndex(1)" @click="addMultiIndex(1)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList1" v-show="slideIndex1 === i" :key="slide.img" :class="`swipe-item absolute`">
              <picture>
                <source :srcset="slide.webp" type="image/webp" />
                <source :srcset="slide.img" type="image/jpeg" />
                <img :src="slide.img" :alt="info.caseName" class="">
              </picture>
              <h3 class="slide-name absolute" v-html="slide.name"></h3>
            </div>
          </transition-group>
          <div class="swipe-btns absolute flex-ac flex-jb">
            <div class="prev-btn" @click="decMultiIndex(1)"></div>
            <div class="next-btn" @click="addMultiIndex(1)"></div>
          </div>
        </div>
        <div class="flex-ac">
          <picture>
            <source srcset="./s10/1-0.jpg" type="image/webp" />
            <source srcset="./webp/s10/1-0.webp" type="image/jpeg" />
            <img src="./s10/1-0.jpg" :alt="info.caseName" class="avatar">
          </picture>
          <div class="content">
            <div class="label">
              建築規劃｜陳金水建築師事務所 陳金水
            </div>
            <div class="title">
              美國密西根建築碩士
            </div>
            <h3 class="desc">
              曾獲美國建築師協會Henry_Adams獎章，執業超過二十年，擅以現代創新筆法回應地景脈絡，締造與自然相契的建築作品。<br /><br />
              代表作品：九昱晴美、祥德帝寶、旺洲旺年匯、綺華有仁愛
            </h3>
          </div>
        </div>
      </div>
      <div class="swipe" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade-down" data-aos-delay="600">
        <div class="flex-ac">
          <picture>
            <source srcset="./s10/2-0.jpg" type="image/webp" />
            <source srcset="./webp/s10/2-0.webp" type="image/jpeg" />
            <img src="./s10/2-0.jpg" :alt="info.caseName" class="avatar">
          </picture>
          <div class="content">
            <div class="label">
              空間規劃｜萊比空間設計 施秋蓮
            </div>
            <div class="title">
              留美設計藝匠
            </div>
            <h3 class="desc">
              創立近二十年，集結頂尖設計團隊，深刻磨砥空間美學，從居者的生命體驗起始，巧妙契合實用機能與感官饗宴，重新定義家的奢華本質。<br /><br />
              代表作品│璞真仰睦、岳泰峰範、全陽柏悅
            </h3>
          </div>
        </div>
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(2)" v-touch:swipe.right="() => addMultiIndex(2)" @click="addMultiIndex(2)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList2" v-show="slideIndex2 === i" :key="slide.img" :class="`swipe-item absolute`">
              <picture>
                <source :srcset="slide.webp" type="image/webp" />
                <source :srcset="slide.img" type="image/jpeg" />
                <img :src="slide.img" :alt="info.caseName" class="">
              </picture>
              <h3 class="slide-name absolute" v-html="slide.name"></h3>
            </div>
          </transition-group>
          <div class="swipe-btns absolute flex-ac flex-jb">
            <div class="prev-btn" @click="decMultiIndex(2)"></div>
            <div class="next-btn" @click="addMultiIndex(2)"></div>
          </div>
        </div>
      </div>
      <div class="swipe" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade-down" data-aos-delay="800">
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(3)" v-touch:swipe.right="() => addMultiIndex(3)" @click="addMultiIndex(3)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList3" v-show="slideIndex3 === i" :key="slide.img" :class="`swipe-item absolute`">
              <picture>
                <source :srcset="slide.webp" type="image/webp" />
                <source :srcset="slide.img" type="image/jpeg" />
                <img :src="slide.img" :alt="info.caseName" class="">
              </picture>
              <h3 class="slide-name absolute" v-html="slide.name"></h3>
            </div>
          </transition-group>
          <div class="swipe-btns absolute flex-ac flex-jb">
            <div class="prev-btn" @click="decMultiIndex(3)"></div>
            <div class="next-btn" @click="addMultiIndex(3)"></div>
          </div>
          <!-- <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList3" :key="slide.img + '-dot'" @click="goToMultiIndex(index, 3)"><span :class="`${slideIndex3 === index ? 'active' : ''}`"></span></div>
        </div> -->
        </div>
        <div class="flex-ac">
          <picture>
            <source srcset="./s10/3-0.jpg" type="image/webp" />
            <source srcset="./webp/s10/3-0.webp" type="image/jpeg" />
            <img src="./s10/3-0.jpg" :alt="info.caseName" class="avatar">
          </picture>
          <div class="content">
            <div class="label">
              景觀設計｜頤和景觀 李淑雲
            </div>
            <div class="title">
              當代景觀名家
            </div>
            <h3 class="desc">
              秉承當代景觀設計思潮，呼應中山北路浩瀚樹海地景，創造都市、建築、人文、生態深度共鳴，譜寫人居環境與自然萬物的優雅格調。<br /><br />
              代表作品：璞真碧湖畔、華固名鑄、華固天鑄、華固樂慕
            </h3>
          </div>
        </div>
      </div>
      <div class="swipe" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" data-aos="fade-down" data-aos-delay="1200">
        <div class="flex-ac">
          <picture>
            <source srcset="./s10/4-0.jpg" type="image/webp" />
            <source srcset="./webp/s10/4-0.webp" type="image/jpeg" />
            <img src="./s10/4-0.jpg" :alt="info.caseName" class="avatar">
          </picture>
          <div class="content">
            <div class="label">
              燈光規劃｜肯緒照明設計 林世秉
            </div>
            <div class="title">
              光雕美學詩人
            </div>
            <h3 class="desc">
              長年深受劇場美學薰陶，擅長解構空間既有元素，伴隨自然與日夜星辰流轉，重建光影環境與視覺層次，彰顯璞真之道地標價值。<br /><br />
              代表作品：璞真一一、富富話合、忠泰味、君悅酒店
            </h3>
          </div>
        </div>
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(4)" v-touch:swipe.right="() => addMultiIndex(4)" @click="addMultiIndex(4)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList4" v-show="slideIndex4 === i" :key="slide.img" :class="`swipe-item absolute`">
              <picture>
                <source :srcset="slide.webp" type="image/webp" />
                <source :srcset="slide.img" type="image/jpeg" />
                <img :src="slide.img" :alt="info.caseName" class="">
              </picture>
              <h3 class="slide-name absolute" v-html="slide.name"></h3>
            </div>
          </transition-group>
          <div class="swipe-btns absolute flex-ac flex-jb">
            <div class="prev-btn" @click="decMultiIndex(4)"></div>
            <div class="next-btn" @click="addMultiIndex(4)"></div>
          </div>
          <!-- <div class="pagination absolute flex-ac" v-if="isPC">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList4" :key="slide.img + '-dot'" @click="goToMultiIndex(index, 4)"><span :class="`${slideIndex4 === index ? 'active' : ''}`"></span></div>
        </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section10 {
  width: 100%;
  max-height: auto;
  background-size: cover;
  background-attachment: fixed;
  background-color: #f7f8f8;

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
  border-top: 1px solid #727171;
  @include md {
    width: sizem(320);
    margin: sizem(60) auto;
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

.content {
  width: size(710);
  @include md {
  }
}

.label {
  font-size: size(29);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(1.45);
  text-align: left;
  color: #c9a063;
  white-space: nowrap;
  margin-bottom: size(8);
  @include md {
    @include img_l_m(320, 60, 0);
    font-size: sizem(16);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;
    letter-spacing: sizem(0.8);
    text-align: left;
    color: #c9a063;
    margin-bottom: sizem(0);
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
  margin-bottom: size(22);
  white-space: nowrap;

  @include md {
    @include img_l_m(320, 85, 0);
    font-size: sizem(17);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: normal;
    text-align: left;
    color: #3e3a39;
    margin: sizem(0) 0 sizem(0);
  }
}

.desc {
  font-size: size(21);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.76;
  letter-spacing: normal;
  text-align: left;
  color: #3e3a39;

  @include md {
    @include img_r_m(193, 127, 0);
    font-size: sizem(13);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: sizem(0.13);
    text-align: left;
    color: #3e3a39;
    margin-bottom: sizem(0);
  }
}

.avatar {
  width: size(180);
  margin-right: size(47.6);

  @include md {
    @include img_l_m(115, 131, 0);
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
  width: 100%;
  height: size(449);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @include md {
    width: sizem(320);
    height: sizem(628);
    border-bottom: 1px solid #727171;
  }

  &:nth-last-child(1) {
    border-bottom: none;
  }


  &:nth-child(2), &:nth-child(4){
    .desc  {
      @include md {
        @include img_l_m(193, 127, 0);
      }
    }

    .avatar {
      @include md {
        @include img_r_m(115, 131, 0);
      }
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
  width: size(480);
  height: size(320);
  cursor: pointer;
  overflow: hidden;

  @include md {
    @include div_c_m(320, 213, 0);
    top: auto;
    bottom: sizem(60);
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

  .swipe-item {
    width: 100%;
    height: 100%;
    z-index: 0;

    img {
      width: 100%;
      height: 100%;
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
    .slide-name {
      right: auto;
      top: auto;
      bottom: 0.6rem;
      right: 0.6rem;
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
  name: 'section10',

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
