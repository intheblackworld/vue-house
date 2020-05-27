<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        src="./s2/bg1.png"
        alt=""
        class="bg1"
      >
      <img
        src="./s2/bg2.png"
        alt=""
        class="bg2"
      >
      <img
        src="./s2/bg3.png"
        alt=""
        class="bg3"
      >
      <div class="container flex-jb ">
        <div>
          <h3 class="title-block flex-ac flex-jb">
            <img
              src="./s2/l.png"
              alt=""
              class="title-l"
            >
            <div class="title">區域環境</div>
            <img
              src="./s2/l.png"
              alt=""
              class="title-r"
            >
          </h3>
          <div class="content">
            <h3 class="title">完全學區</h3>
            <h3 class="desc">明星雙語學區，全齡優生</h3>
            <div class="text">完整十二年國教一應俱全，除了五育俱全明星新北高中之外，碧華國中，碧華國小以及五華國小皆為區域內口碑名校！ 四座全能國中小及高中加持，另有新北最大雙語幼兒園《加州森林國際》都選擇在此駐點，讓孩子精緻就學，學區步行距離5分鐘，小孩安全，爸媽放心</div>
          </div>
        </div>
        <div class="slide relative" data-aos="fade" data-aos-delay="400">
          <div class="border"></div>
          <div class="slide-text">{{slideList1[slideIndex1].text}}</div>
          <img
            :src="slide.src"
            v-for="(slide, index) in slideList1"
            :class="`slide-img ${slideIndex1 === index ? 'active' : ''}`"
            :key="`s2-1-slide-${index}`"
          />
          <div class="arrows absolute">
            <img
              src="./s2/arrow.png"
              alt=""
              class="arrow-l"
              @click="addMultiIndex(1)"
            >
            <img
              src="./s2/arrow.png"
              alt=""
              class="arrow-r"
              @click="decMultiIndex(1)"
            >
          </div>
          <div class="indigator-list flex-c">
            <div
              @click="setIndex(1, index)"
              :class="`indigator ${slideIndex1 === index ? 'active' : ''}`"
              v-for="(item, index) in slideList1"
              :key="`indigator-1-${index}`"
            ></div>
          </div>
        </div>
      </div>
      <div class="container flex-ac flex-jb">
        <div class="slide wide relative" data-aos="fade" data-aos-delay="400">
          <div class="border"></div>
          <div class="slide-text">{{slideList2[slideIndex2].text}}</div>
          <img
            :src="slide.src"
            v-for="(slide, index) in slideList2"
            :class="`slide-img ${slideIndex2 === index ? 'active' : ''}`"
            :key="`s2-1-slide-${index}`"
          />
          <div class="arrows absolute">
            <img
              src="./s2/arrow.png"
              alt=""
              class="arrow-l"
              @click="addMultiIndex(2)"
            >
            <img
              src="./s2/arrow.png"
              alt=""
              class="arrow-r"
              @click="decMultiIndex(2)"
            >
          </div>
          <div class="indigator-list flex-c">
            <div
              @click="setIndex(2, index)"
              :class="`indigator ${slideIndex2 === index ? 'active' : ''}`"
              v-for="(item, index) in slideList2"
              :key="`indigator-1-${index}`"
            ></div>
          </div>
        </div>
        <div class="content short">
          <h3 class="title">燙金雙捷，漲幅無限</h3>
          <h3 class="desc">一橋牽雙北，效率交通</h3>
          <div class="text">環狀線X新莊蘆洲線燙金雙捷。未來捷運一站横跨淡水河，一橋重陽即達士林，天母，悠遊雙首都零距離。菁華交通匯集集賢路，三信街，五華街;行經環環河快速道路與64號快速道路高速接軌，距離中山交流道，重慶北路交流道及三重交流道皆5分鐘車程。直達繁華，效率無與倫比。</div>
        </div>
      </div>
      <div class="container flex-ac flex-jb ">
        <div class="content">
          <h3 class="title">水岸綠地</h3>
          <h3 class="desc">淡水重陽公園，水岸美地</h3>
          <div class="text">萬坪淡水河畔，懂生活的人最想追求的沃美之地。傍水岸，享清新的新鮮空氣無限暢飲，重陽橋重劃區陽光公園，集智綠地集賢環保公園，淡水河畔公園等..共8900多坪綠地。小散步，大渡假，自由切換生活節奏。</div>
        </div>
        <div class="slide relative" data-aos="fade" data-aos-delay="400">
          <div class="border"></div>
          <div class="slide-text">{{slideList3[slideIndex3].text}}</div>
          <img
            :src="slide.src"
            v-for="(slide, index) in slideList3"
            :class="`slide-img ${slideIndex3 === index ? 'active' : ''}`"
            :key="`s2-1-slide-${index}`"
          />
          <div class="arrows absolute">
            <img
              src="./s2/arrow.png"
              alt=""
              class="arrow-l"
              @click="addMultiIndex(3)"
            >
            <img
              src="./s2/arrow.png"
              alt=""
              class="arrow-r"
              @click="decMultiIndex(3)"
            >
          </div>
          <div class="indigator-list flex-c">
            <div
              @click="setIndex(3, index)"
              :class="`indigator ${slideIndex3 === index ? 'active' : ''}`"
              v-for="(item, index) in slideList3"
              :key="`indigator-1-${index}`"
            ></div>
          </div>
        </div>
      </div>
      <div class="container flex-ac flex-jb">
        <div class="slide wide relative" data-aos="fade" data-aos-delay="400">
          <div class="border"></div>
          <div class="slide-text">{{slideList4[slideIndex4].text}}</div>
          <img
            :src="slide.src"
            v-for="(slide, index) in slideList4"
            :class="`slide-img ${slideIndex4 === index ? 'active' : ''}`"
            :key="`s2-1-slide-${index}`"
          />
          <div class="arrows absolute">
            <img
              src="./s2/arrow.png"
              alt=""
              class="arrow-l"
              @click="addMultiIndex(4)"
            >
            <img
              src="./s2/arrow.png"
              alt=""
              class="arrow-r"
              @click="decMultiIndex(4)"
            >
          </div>
          <div class="indigator-list flex-c">
            <div
              @click="setIndex(4, index)"
              :class="`indigator ${slideIndex4 === index ? 'active' : ''}`"
              v-for="(item, index) in slideList4"
              :key="`indigator-1-${index}`"
            ></div>
          </div>
        </div>
        <div class="content short">
          <h3 class="title">繁華商圈</h3>
          <h3 class="desc">滾滾長江家樂福五華街，繁華商圈東逝水</h3>
          <div class="text">前有24小時家樂福，後有五華街傳統商圈，現代與傳統一併俱全。整齊蒼綠的街廓，綠化公園及開放空間，重劃區超低建蔽率，市容之美無話可說，離囂不離塵，這才是真正的俱生活機能的「現代化重劃區」，是您宜居移居的新選擇。
          </div>
        </div>
      </div>
      <div class="bottom"></div>
    </div>
    <div
      v-else
      class="relative"
    >
      <img
        src="./mo/2/bg1.png"
        alt=""
        class="bg1"
      >
      <h3 class="title-block flex-ac flex-jb">
        <img
          src="./s2/l.png"
          alt=""
          class="title-l"
        >
        <div class="title">區域環境</div>
        <img
          src="./s2/l.png"
          alt=""
          class="title-r"
        >
      </h3>
      <div class="slide relative" data-aos="fade" data-aos-delay="400">
        <div class="slide-text">{{slideList1[slideIndex1].text}}</div>
        <img
          :src="slide.src"
          v-for="(slide, index) in slideList1"
          :class="`slide-img ${slideIndex1 === index ? 'active' : ''}`"
          :key="`s2-1-slide-${index}`"
        />
        <div class="arrows absolute">
          <img
            src="./s4/arrow.png"
            alt=""
            class="arrow-l"
            @click="addMultiIndex(1)"
          >
          <img
            src="./s4/arrow.png"
            alt=""
            class="arrow-r"
            @click="decMultiIndex(1)"
          >
        </div>
        <div class="indigator-list flex-c">
          <div
            @click="setIndex(1, index)"
            :class="`indigator ${slideIndex1 === index ? 'active' : ''}`"
            v-for="(item, index) in slideList1"
            :key="`indigator-1-${index}`"
          ></div>
        </div>
      </div>
      <div class="content">
        <h3 class="title">完全學區</h3>
        <h3 class="desc">明星雙語學區，全齡優生</h3>
        <div class="text">完整十二年國教一應俱全，除了五育俱全明星新北高中之外，碧華國中，碧華國小以及五華國小皆為區域內口碑名校！ 四座全能國中小及高中加持，另有新北最大雙語幼兒園《加州森林國際》都選擇在此駐點，讓孩子精緻就學，學區步行距離5分鐘，小孩安全，爸媽放心</div>
        <img
          src="./mo/2/bg2.png"
          alt=""
          class="bg2"
        >
      </div>

      <div class="slide relative" data-aos="fade" data-aos-delay="400">
        <div class="slide-text">{{slideList2[slideIndex2].text}}</div>
        <img
          :src="slide.src"
          v-for="(slide, index) in slideList2"
          :class="`slide-img ${slideIndex2 === index ? 'active' : ''}`"
          :key="`s2-1-slide-${index}`"
        />
        <div class="arrows absolute">
          <img
            src="./s4/arrow.png"
            alt=""
            class="arrow-l"
            @click="addMultiIndex(2)"
          >
          <img
            src="./s4/arrow.png"
            alt=""
            class="arrow-r"
            @click="decMultiIndex(2)"
          >
        </div>
        <div class="indigator-list flex-c">
          <div
            @click="setIndex(2, index)"
            :class="`indigator ${slideIndex2 === index ? 'active' : ''}`"
            v-for="(item, index) in slideList2"
            :key="`indigator-1-${index}`"
          ></div>
        </div>
      </div>

      <div class="content short">
        <h3 class="title">燙金雙捷，漲幅無限</h3>
        <h3 class="desc">一橋牽雙北，效率交通</h3>
        <div class="text">環狀線X新莊蘆洲線燙金雙捷。未來捷運一站横跨淡水河，一橋重陽即達士林，天母，悠遊雙首都零距離。菁華交通匯集集賢路，三信街，五華街;行經環環河快速道路與64號快速道路高速接軌，距離中山交流道，重慶北路交流道及三重交流道皆5分鐘車程。直達繁華，效率無與倫比。</div>
        <img
          src="./mo/2/bg2.png"
          alt=""
          class="bg2"
        >
      </div>
      <div class="slide relative" data-aos="fade" data-aos-delay="400">
        <div class="slide-text">{{slideList3[slideIndex3].text}}</div>
        <img
          :src="slide.src"
          v-for="(slide, index) in slideList3"
          :class="`slide-img ${slideIndex3 === index ? 'active' : ''}`"
          :key="`s2-1-slide-${index}`"
        />
        <div class="arrows absolute">
          <img
            src="./s4/arrow.png"
            alt=""
            class="arrow-l"
            @click="addMultiIndex(3)"
          >
          <img
            src="./s4/arrow.png"
            alt=""
            class="arrow-r"
            @click="decMultiIndex(3)"
          >
        </div>
        <div class="indigator-list flex-c">
          <div
            @click="setIndex(3, index)"
            :class="`indigator ${slideIndex3 === index ? 'active' : ''}`"
            v-for="(item, index) in slideList3"
            :key="`indigator-1-${index}`"
          ></div>
        </div>
      </div>
      <div class="content">
        <h3 class="title">水岸綠地</h3>
        <h3 class="desc">淡水重陽公園，水岸美地</h3>
        <div class="text">萬坪淡水河畔，懂生活的人最想追求的沃美之地。傍水岸，享清新的新鮮空氣無限暢飲，重陽橋重劃區陽光公園，集智綠地集賢環保公園，淡水河畔公園等..共8900多坪綠地。小散步，大渡假，自由切換生活節奏。</div>
        <img
          src="./mo/2/bg2.png"
          alt=""
          class="bg2"
        >
      </div>
      <div class="slide relative" data-aos="fade" data-aos-delay="400">
        <div class="slide-text">{{slideList4[slideIndex4].text}}</div>
        <img
          :src="slide.src"
          v-for="(slide, index) in slideList4"
          :class="`slide-img ${slideIndex4 === index ? 'active' : ''}`"
          :key="`s2-1-slide-${index}`"
        />
        <div class="arrows absolute">
          <img
            src="./s4/arrow.png"
            alt=""
            class="arrow-l"
            @click="addMultiIndex(4)"
          >
          <img
            src="./s4/arrow.png"
            alt=""
            class="arrow-r"
            @click="decMultiIndex(4)"
          >
        </div>
        <div class="indigator-list flex-c">
          <div
            @click="setIndex(4, index)"
            :class="`indigator ${slideIndex4 === index ? 'active' : ''}`"
            v-for="(item, index) in slideList4"
            :key="`indigator-1-${index}`"
          ></div>
        </div>
      </div>
      <div class="content">
        <h3 class="title">繁華商圈</h3>
        <h3 class="desc">滾滾長江家樂福五華街，繁華商圈東逝水</h3>
        <div class="text">前有24小時家樂福，後有五華街傳統商圈，現代與傳統一併俱全。整齊蒼綠的街廓，綠化公園及開放空間，重劃區超低建蔽率，市容之美無話可說，離囂不離塵，這才是真正的俱生活機能的「現代化重劃區」，是您宜居移居的新選擇。
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  background: #d9d7d2;
}

.bg1,
.bg2,.bg3 {
  width: 100vw;
  height: auto;
  position: absolute;
  display: block;
  object-fit: cover;
}

.bg1 {
  top: 0;
  left: 0;
}

.bg2 {
  left: 0;
  top: size(1400);
}

.bg3 {
  bottom: 0;
  right: 0;
}

.bottom {
  width: 100vw;
  height: size(122);
}

.container {
  position: relative;
  width: size(1660);
  margin-left: size(150);
  margin-top: size(145);
}

.title-block {
  margin-bottom: size(75);
  .title {
    font-size: size(59);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.61;
    letter-spacing: normal;
    text-align: center;
    color: #3b5662;
  }
  .title-l {
    width: size(77);
  }

  .title-r {
    width: size(77);
    transform: rotate(180deg);
  }
}

.content {
  width: size(545);

  &.short {
    width: size(472);
  }

  > .title {
    font-size: size(44);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.77;
    letter-spacing: 1.2px;
    text-align: left;
    color: #3b5662;
    margin-bottom: size(20);
  }

  .desc {
    font-size: size(24);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.77;
    letter-spacing: 1.2px;
    text-align: left;
    color: #3b5662;
    margin-bottom: size(25);
  }

  .text {
    font-size: size(18);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.9px;
    text-align: left;
    color: #3b5662;
  }
}

.slide {
  width: size(990);
  height: size(680);
  overflow: visible;

  &.wide {
    width: size(1100);
    height: size(680);

    & .border {
      width: size(1100);
    }
  }

  & .slide-img {
    width: 100%;
    height: size(680);
    transform: translate(5px, 5px);
  }

  .border {
    border: 1px solid #3b5662;
    width: size(990);
    height: size(680);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .slide-text {
    position: absolute;
    z-index: 4;
    background-color: #3b5662;
    right: size(-20);
    bottom: size(50);
    color: #fff;
    font-size: size(17);
    padding: 8px 30px;
  }
}

.indigator-list {
  width: 100%;
  margin-top: size(20);
  .indigator {
    width: size(21);
    height: size(21);
    border-radius: size(21);
    margin: 0 20px;
    background-color: rgba(59, 86, 98, 0.6);
    cursor: pointer;

    &.active {
      background-color: rgba(59, 86, 98, 1);
    }
  }
}

.arrows {
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .arrow-l {
    width: size(35);
    position: absolute;
    left: size(-55);
    cursor: pointer;
  }

  .arrow-r {
    width: size(35);
    transform: rotate(180deg);
    position: absolute;
    right: size(-55);
    cursor: pointer;
  }
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
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
  .title-block {
    width: 60vw;
    margin: 0 auto;
    margin-top: size-m(106);
    margin-bottom: size-m(22);
    .title {
      font-size: size-m(30);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.3;
      letter-spacing: normal;
      text-align: center;
      color: #3b5662;
    }
    .title-l {
      width: size-m(33);
    }

    .title-r {
      width: size-m(33);
      transform: rotate(180deg);
    }
  }

  .slide {
    width: 100vw !important;
    height: size-m(257);
    margin-bottom: size-m(30);

    & .slide-img {
      object-fit: cover;
      height: 100%;
      transform: none;
    }
  }

  .content {
    width: size-m(289);
    margin: 0 auto size-m(100);
    position: relative;

    &.short {
      width: size-m(289);
    }

    > .title {
      font-size: size-m(25);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.77;
      letter-spacing: 1.2px;
      text-align: left;
      color: #3b5662;
      margin-bottom: size-m(20);
    }

    .desc {
      font-size: size-m(18);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.77;
      letter-spacing: 1.2px;
      text-align: left;
      color: #3b5662;
      margin-bottom: size-m(25);
    }

    .text {
      font-size: size-m(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.6;
      letter-spacing: 0.9px;
      text-align: left;
      color: #3b5662;
    }
  }

  .indigator-list {
    display: none;
  }

  .bg2 {
    top: auto;
    bottom: size-m(-100);
    left: size-m(-43);
  }

  .arrows {
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .arrow-l {
      width: size-m(14);
      position: absolute;
      left: size-m(5);
      cursor: pointer;
    }

    .arrow-r {
      width: size-m(14);
      transform: rotate(180deg);
      position: absolute;
      right: size-m(5);
      cursor: pointer;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section2',

  mixins: [slider],
  components: {},
  data() {
    return {
      isMobile,
      slideIndex1: 0,
      slideIndex2: 0,
      slideIndex3: 0,
      slideIndex4: 0,
      slideList1: [
        { text: '五華國小', src: require('./s2/1-1五華國小.jpg') },
        { text: '新北高中', src: require('./s2/1-2新北高中.jpg') },
        { text: '碧華國小', src: require('./s2/1-3碧華國小.jpg') },
        {
          text: '碧華國中(興建中)',
          src: require('./s2/1-4碧華國中(興建中).jpg'),
        },
      ],
      slideList2: [
        { text: '重陽橋', src: require('./s2/2-1重陽橋.jpg') },
        { text: '士林商圈', src: require('./s2/2-2士林商圈.jpg') },
        { text: '台北車站', src: require('./s2/2-3台北車站.jpg') },
        { text: '徐匯廣場站', src: require('./s2/2-4徐匯廣場站.jpg') },
        { text: '高速公路', src: require('./s2/2-5.jpg') },
      ],
      slideList3: [
        {
          text: '淡水河畔重陽公園',
          src: require('./s2/3-1淡水河畔重陽公園.jpg'),
        },
        { text: '淡水河畔重陽公園', src: require('./s2/3-2.jpg') },
        { text: '淡水河畔重陽公園', src: require('./s2/3-3.jpg') },
        { text: '淡水河畔重陽公園', src: require('./s2/3-4.jpg') },
        { text: '淡水河畔重陽公園', src: require('./s2/3-5.jpg') },
      ],
      slideList4: [
        { text: '徐匯廣場', src: require('./s2/4-1徐匯廣場.jpg') },
        { text: '家樂福', src: require('./s2/4-2家樂福.jpg') },
        { text: '商圈', src: require('./s2/4-3商圈.jpg') },
      ],
    }
  },

  methods: {
    setIndex(index, current) {
      this[`slideIndex${index}`] = current
    },
  },

  created() {},

  mounted() {},

  computed: {},
}
</script>
