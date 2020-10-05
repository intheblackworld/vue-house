<template>
  <div>
    <div class="section7">
      <div class="content absolute">
        <img src="./s5/bg.png" alt="" class="img absolute">
        <img :src="slideList[contentIndex][0].title" alt="" class="title absolute">
        <h3 class="subtitle absolute" v-html="slideList[contentIndex][0].subtitle"></h3>
        <h3 class="desc absolute" v-html="slideList[contentIndex][0].desc"></h3>
        <h3 class="w-desc absolute" v-html="slideList[contentIndex][0].wdesc"></h3>
      </div>
      <div class="tabs flex-ac flex-jb absolute wrap">
        <div :class="`tab-btn flex-c ${contentIndex === 0 ? 'active' : ''}`" @click="contentIndex = 0">
          <h3 class="inside flex-c">
            凡爾賽花園
          </h3>
        </div>
        <div :class="`tab-btn flex-c ${contentIndex === 1 ? 'active' : ''}`" @click="contentIndex = 1">
          <h3 class="inside flex-c">
            飯店級美學
          </h3>
        </div>
        <div :class="`tab-btn flex-c ${contentIndex === 2 ? 'active' : ''}`" @click="contentIndex = 2">
          <h3 class="inside flex-c">
            菁英俱樂部
          </h3>
        </div>
        <div :class="`tab-btn flex-c ${contentIndex === 3 ? 'active' : ''}`" @click="contentIndex = 3">
          <h3 class="inside flex-c">
            私藏天際線
          </h3>
        </div>
      </div>
      <div class="swipe absolute" data-aos="fade-right" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList[contentIndex]" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="name absolute">{{slide.name}}</div>
            </div>
          </transition-group>
          <div class="pagination absolute flex-ac">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList[contentIndex]" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          {{slideIndex}}
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <div class="prev-btn" @click="decIndex"></div>
            <div class="next-btn" @click="addIndex"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import '@/assets/style/function.scss';
.custom-subtitle {
  font-size: size(32);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.91;
  font-weight: bold;
  letter-spacing: size(0.64);
  text-align: left;
  color: #ffffff;
}

.custom-desc {
  font-size: size(26);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.91;
  letter-spacing: size(0.52);
  text-align: left;
  color: #491500;
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: size(1920);
  height: 100vh;
  background-color: #eb5b29;
  min-height: size(900);
  overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  //min-height: size(900);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    top: 0;
    left: auto;
    right: 0;
    height: auto;
  }
}

.img {
  width: size(540);
  top: size(0);
  left: size(0);
}

.tabs {
  width: size(1100);
  top: size(82);
  right: size(94);

  .tab-btn {
    width: size(245);
    height: size(51);
    position: relative;
    cursor: pointer;
    .inside {
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      font-size: size(38);
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.34;
      letter-spacing: size(1.94);
      text-align: center;
      color: #491500;
      position: relative;
      z-index: 1;
    }

    &::after {
      width: 100%;
      height: 100%;
      border: 1px solid #491500;
      position: absolute;
      content: '';
      top: 10px;
      left: -10px;
      z-index: 0;
    }

    &.active {
      .inside {
        background-color: #491500;
        color: #fff;
      }
    }
    img {
      width: size(287);
    }
  }
}

.title {
  width: size(487);
  top: size(194);
  left: size(110);
}

.subtitle {
  width: size(480);
  top: size(329);
  left: size(108);
  font-size: size(48);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: size(0.96);
  text-align: left;
  color: #491500;
  white-space: nowrap;
}

.desc {
  width: size(480);
  top: size(516);
  left: size(108);
  font-size: size(26);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: size(0.52);
  text-align: left;
  color: #491500;
}

.w-desc {
  width: size(480);
  top: size(733);
  left: size(110);
  font-size: size(22);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.36;
  letter-spacing: size(2.2);
  text-align: left;
  color: #fff;
}

.swipe {
  width: size(1100);
  height: size(830);
  min-height: size(750);
  top: size(170);
  right: size(94);
  margin: 0 auto;
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
    height: 100%;
  }

  .name {
    right: 20px;
    bottom: 20px;
    font-size: size(15.7);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: size(0.89);
    text-align: center;
    color: #ffffff;
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
  bottom: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
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
  .section7 {
    width: 100vw;
    height: sizem(712);
    min-height: auto;
    max-height: initial;
  }
  .img {
    width: size(540);
    top: size(0);
    left: size(0);
  }

  .tabs {
    width: sizem(305);
    top: sizem(10);
    right: sizem(38);

    .tab-btn {
      width: sizem(143);
      height: sizem(38);
      margin-bottom: sizem(18);
      position: relative;
      cursor: pointer;
      .inside {
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        font-size: sizem(20);
        font-weight: 900;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.34;
        letter-spacing: sizem(1);
        text-align: center;
        color: #491500;
        position: relative;
        z-index: 1;
      }

      &::after {
        width: 100%;
        height: 100%;
        border: 1px solid #491500;
        position: absolute;
        content: '';
        top: 10px;
        left: -10px;
        z-index: 0;
      }

      &.active {
        .inside {
          background-color: #491500;
          color: #fff;
        }
      }
      img {
        width: sizem(287);
      }
    }
  }

  .title {
    width: sizem(200);
    top: sizem(127);
    left: sizem(33);
  }

  .subtitle {
    width: sizem(204);
    top: sizem(182);
    left: sizem(33);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: sizem(0.5);
    text-align: left;
    color: #491500;
    white-space: nowrap;
  }

  .desc {
    width: sizem(310);
    top: sizem(268);
    left: sizem(33);
    font-size: sizem(15);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: sizem(0.3);
    text-align: left;
    color: #491500;
  }

  .w-desc {
    width: sizem(310);
    top: sizem(340);
    left: sizem(33);
    font-size: sizem(15);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.76;
    letter-spacing: sizem(0.3);
    text-align: left;
    color: #fff;
  }

  .swipe {
    width: sizem(340);
    height: sizem(256);
    // height: calc(100vh - 63px);
    top: sizem(450);
    left: sizem(18);
    object-fit: cover;
  }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  // .swipe-item {
  //   width: 100%;
  //   height: 100%;
  //   left: 100%;
  //   transition: left 1s ease-in-out;
  //   z-index: 0;
  //   object-fit: cover;

  //   &.base {
  //     z-index: 1;
  //     left: 0;
  //   }
  //   &.active {
  //     z-index: 2;
  //     left: 0;
  //   }
  // }

  .pagination {
    width: auto;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
    display: none;
  }

  .pagination-dot {
    padding: 5px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 14px;
      height: 14px;
      border-radius: 14px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
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
          left: 23%;
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

    .prev-btn,
    .next-btn {
      font-size: size-m(10);
      cursor: pointer;
      height: 100%;
      width: 3em;
      display: flex;
      align-items: center;
      justify-items: center;
      padding: 0 1em;
    }
    .prev-btn::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 1em 1em 1em 0;
      border-color: transparent #fff transparent transparent;
    }
    .next-btn::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 1em 0 1em 1em;
      border-color: transparent transparent transparent #fff;
    }
  }

  .name {
    right: 10px !important;
    bottom: 10px !important;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section7',

  mixins: [slider],

  components: {},

  data() {
    return {
      isMobile,
      isTablet,
      contentIndex: 0,
      slideList: [
        [
          {
            img: require('./s7/1-1.jpg'),
            name: '凡爾賽花園',
            title: require('./s7/title1.png'),
            subtitle: '國際規格<br />獨佔一畝都心花園',
            desc:
              '蔥蔥綠樹灑下綠蔭、流水鏡池映照悠閒，師法巴黎凡爾賽花園四季芳景，漫步在都心水岸邊，孩子陽光下自在奔跑，用整座公園的尺度讓您獨佔一畝都心花園，全新營嚮往的國際規格就在身邊。',
          },
          {
            img: require('./s7/1-2.jpg'),
            name: '凡爾賽花園',
            title: require('./s7/title1.png'),
            subtitle: '國際規格<br />獨佔一畝都心花園',
            desc:
              '蔥蔥綠樹灑下綠蔭、流水鏡池映照悠閒，師法巴黎凡爾賽花園四季芳景，漫步在都心水岸邊，孩子陽光下自在奔跑，用整座公園的尺度讓您獨佔一畝都心花園，全新營嚮往的國際規格就在身邊。',
          },
          {
            img: require('./s7/1-3.jpg'),
            name: '凡爾賽花園',
            title: require('./s7/title1.png'),
            subtitle: '國際規格<br />獨佔一畝都心花園',
            desc:
              '蔥蔥綠樹灑下綠蔭、流水鏡池映照悠閒，師法巴黎凡爾賽花園四季芳景，漫步在都心水岸邊，孩子陽光下自在奔跑，用整座公園的尺度讓您獨佔一畝都心花園，全新營嚮往的國際規格就在身邊。',
          },
        ],
        [
          {
            img: require('./s7/2-1.jpg'),
            name: '迎賓大廳｜挑高氣派，開闊門面尊爵不凡',
            title: require('./s7/title2.png'),
            subtitle: '飯店美學<br />五星會館尊榮享宴',
            desc:
              '當代國際美學、頂級飯店奢華鎔鑄建築血統裡，北台南前所未有的五星級會館打造全新生活典範，選擇別人沒有的才叫尊貴。',
            wdesc:
              '迎賓大廳｜挑高氣派，開闊門面尊爵不凡<br />多功能教室｜廚藝交流，上流品味永不妥協<br />交誼廳｜仕紳會談，富豪人生知心相伴',
          },

          {
            img: require('./s7/2-2.jpg'),
            name: '多功能教室｜廚藝交流，上流品味永不妥協',
            title: require('./s7/title2.png'),
            subtitle: '飯店美學<br />五星會館尊榮享宴',
            desc:
              '當代國際美學、頂級飯店奢華鎔鑄建築血統裡，北台南前所未有的五星級會館打造全新生活典範，選擇別人沒有的才叫尊貴。',
            wdesc:
              '迎賓大廳｜挑高氣派，開闊門面尊爵不凡<br />多功能教室｜廚藝交流，上流品味永不妥協<br />交誼廳｜仕紳會談，富豪人生知心相伴',
          },
          {
            img: require('./s7/2-3.jpg'),
            name: '交誼廳｜仕紳會談，富豪人生知心相伴',
            title: require('./s7/title2.png'),
            subtitle: '飯店美學<br />五星會館尊榮享宴',
            desc:
              '當代國際美學、頂級飯店奢華鎔鑄建築血統裡，北台南前所未有的五星級會館打造全新生活典範，選擇別人沒有的才叫尊貴。',
            wdesc:
              '迎賓大廳｜挑高氣派，開闊門面尊爵不凡<br />多功能教室｜廚藝交流，上流品味永不妥協<br />交誼廳｜仕紳會談，富豪人生知心相伴',
          },
        ],
        [
          {
            img: require('./s7/3-1.jpg'),
            name: 'SPA室｜療癒身心，養生舒壓健康美麗',
            title: require('./s7/title3.png'),
            subtitle: '最高禮遇<br />菁英限定頂級俱樂部',
            desc:
              '撞球、桑拿、跑步機…當運動有了格調，就成為了最完美的社交，菁英限定頂級俱樂部，用最高標準禮遇您的享樂哲學。',
            wdesc:
              'SPA室｜療癒身心，養生舒壓健康美麗<br />健身房｜韻律生活，在此培養健美體態<br />運動BAR｜小酌暢談，精彩賽事現場直播<br />KTV室｜歡唱時光，豪華包廂再續經典',
          },
          {
            img: require('./s7/3-2.jpg'),
            name: '健身房｜韻律生活，在此培養健美體態',
            title: require('./s7/title3.png'),
            subtitle: '最高禮遇<br />菁英限定頂級俱樂部',
            desc:
              '撞球、桑拿、跑步機…當運動有了格調，就成為了最完美的社交，菁英限定頂級俱樂部，用最高標準禮遇您的享樂哲學。',
            wdesc:
              'SPA室｜療癒身心，養生舒壓健康美麗<br />健身房｜韻律生活，在此培養健美體態<br />運動BAR｜小酌暢談，精彩賽事現場直播<br />KTV室｜歡唱時光，豪華包廂再續經典',
          },
          {
            img: require('./s7/3-3.jpg'),
            name: '運動BAR｜小酌暢談，精彩賽事現場直播',
            title: require('./s7/title3.png'),
            subtitle: '最高禮遇<br />菁英限定頂級俱樂部',
            desc:
              '撞球、桑拿、跑步機…當運動有了格調，就成為了最完美的社交，菁英限定頂級俱樂部，用最高標準禮遇您的享樂哲學。',
            wdesc:
              'SPA室｜療癒身心，養生舒壓健康美麗<br />健身房｜韻律生活，在此培養健美體態<br />運動BAR｜小酌暢談，精彩賽事現場直播<br />KTV室｜歡唱時光，豪華包廂再續經典',
          },
          {
            img: require('./s7/3-4.jpg'),
            name: 'KTV室｜歡唱時光，豪華包廂再續經典',
            title: require('./s7/title3.png'),
            subtitle: '最高禮遇<br />菁英限定頂級俱樂部',
            desc:
              '撞球、桑拿、跑步機…當運動有了格調，就成為了最完美的社交，菁英限定頂級俱樂部，用最高標準禮遇您的享樂哲學。',
          },
        ],
        [
          {
            img: require('./s7/3-1.jpg'),
            name: '市心城景私藏天際',
            title: require('./s7/title4.png'),
            subtitle: '風光高度<br />市心城景私藏天際',
            desc:
              '凌空15層，打造家的永恆風景，新營唯一空中會館裡捕捉他人沒有的高度視野，用工藝堆砌出值得炫耀的品味，無敵景觀都心御所不只是一棟建築，而是必須珍藏的席次。',
          },
        ],
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
