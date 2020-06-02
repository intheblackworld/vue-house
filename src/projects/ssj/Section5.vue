<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        src="./s5/bg1.png"
        alt=""
        class="bg1"
         data-aos="fade" data-aos-delay="400"
      >
      <div class="title-block flex-ac flex-jb">
        <img
          src="./s5/l.png"
          alt=""
          class="title-l"
        >
        <h3 class="title">精品公設，心奢品味</h3>
        <img
          src="./s5/l.png"
          alt=""
          class="title-r"
        >
      </div>
      <div class="container">
        <div class="content">
          <div class="text">輝煌氣派門廳，超越全區水平之上的規劃。閱覽休憩區，多功能交誼沙發區，活力健身會館視聽KTV，棋藝室等多樣設備，回家就像入住星級飯店，舒適養心。 菁英物業服務，日日享受賓至如歸。<br /><br />北市知名豪宅公設指定擔網「社康生」細膩感性，是仁愛帝寶，文華苑等豪宅公設推手，獨特的觀點與敏銳的觀察，凡經過杜康生大師設計團隊打造，您將親眼見證住的極致饗宴，視覺享受登上不凡境界
          </div>
        </div>
        <div class="slide relative" data-aos="fade" data-aos-delay="600">
          <!-- <div class="border"></div> -->
          <!-- <div class="slide-text">{{slideList1[slideIndex1].text}}</div> -->
          <img
            :src="slide.src"
            v-for="(slide, index) in slideList1"
            :class="`slide-img ${slideIndex1 === index ? 'active' : ''}`"
            :key="`s5-1-slide-${index}`"
          />
          <div class="arrows absolute">
            <img
              src="./s5/arrow.png"
              alt=""
              class="arrow-l"
              @click="addMultiIndex(1)"
            >
            <img
              src="./s5/arrow.png"
              alt=""
              class="arrow-r"
              @click="decMultiIndex(1)"
            >
          </div>
          <!-- <div class="indigator-list flex-c">
            <div
              @click="setIndex(1, index)"
              :class="`indigator ${slideIndex1 === index ? 'active' : ''}`"
              v-for="(item, index) in slideList1"
              :key="`indigator-1-${index}`"
            ></div>
          </div> -->
        </div>
      </div>
      <div class="container">
        <div class="content b">
          <div class="text">家是乘載家家戶戶故事的容器，家代表一個人的個人品味，和他如何書寫生命的故事。依照季節挑選窗簾、選擇喜歡的木椅木桌，一個好的格局，足夠讓你充分揮灑自己的想望……格局方正，採光極優，超強坪效規劃！【樺輝心世界】讓人驚嘆，原來生活可以這樣過，在空間內變魔術，樣樣俱備，讓您感動過人生，生活更動容
          </div>
        </div>
        <div class="slide relative" data-aos="fade" data-aos-delay="400">
          <!-- <div class="border"></div> -->
          <!-- <div class="slide-text">{{slideList1[slideIndex1].text}}</div> -->
          <img
            :src="slide.src"
            v-for="(slide, index) in slideList2"
            :class="`slide-img ${slideIndex2 === index ? 'active' : ''}`"
            :key="`s5-2-slide-${index}`"
          />
          <div class="arrows absolute">
            <img
              src="./s5/arrow.png"
              alt=""
              class="arrow-l"
              @click="addMultiIndex(2)"
            >
            <img
              src="./s5/arrow.png"
              alt=""
              class="arrow-r"
              @click="decMultiIndex(2)"
            >
          </div>
          <!-- <div class="indigator-list flex-c">
            <div
              @click="setIndex(1, index)"
              :class="`indigator ${slideIndex1 === index ? 'active' : ''}`"
              v-for="(item, index) in slideList1"
              :key="`indigator-1-${index}`"
            ></div>
          </div> -->
        </div>
      </div>
    </div>
    <div
      v-else
      class="relative"
    >
      <div class="title-block flex-ac flex-jb">
        <img
          src="./s5/l.png"
          alt=""
          class="title-l"
        >
        <h3 class="title">精品公設，心奢品味</h3>
        <img
          src="./s5/l.png"
          alt=""
          class="title-r"
        >
      </div>
      <div class="slide relative">
        <!-- <div class="border"></div> -->
        <!-- <div class="slide-text">{{slideList1[slideIndex1].text}}</div> -->
        <img
          :src="slide.src"
          v-for="(slide, index) in slideList1"
          :class="`slide-img ${slideIndex1 === index ? 'active' : ''}`"
          :key="`s5-1-slide-${index}`"
        />
        <div class="arrows absolute">
          <img
            src="./s5/arrow.png"
            alt=""
            class="arrow-l"
            @click="addMultiIndex(1)"
          >
          <img
            src="./s5/arrow.png"
            alt=""
            class="arrow-r"
            @click="decMultiIndex(1)"
          >
        </div>
        <!-- <div class="indigator-list flex-c">
            <div
              @click="setIndex(1, index)"
              :class="`indigator ${slideIndex1 === index ? 'active' : ''}`"
              v-for="(item, index) in slideList1"
              :key="`indigator-1-${index}`"
            ></div>
          </div> -->
      </div>
      <div class="content">
        <div class="text">輝煌氣派門廳，超越全區水平之上的規劃。閱覽休憩區，多功能交誼沙能國，活力健身會館視聽KTV，棋藝室等多樣設備，回家就像入住星級飯店，舒適養心。 菁英物業服務，日日享受賓至如歸。<br /><br />北市知名豪宅公設指定擔網「社康生」細膩感性，是仁愛帝寶，文華苑等豪宅公設推手，獨特的觀點與敏銳的觀察，凡經過杜康生大師設計團隊打造，您將親眼見證住的極致饗宴，視覺享受登上不凡境界

        </div>
      </div>

      <div class="slide relative">
        <!-- <div class="border"></div> -->
        <!-- <div class="slide-text">{{slideList1[slideIndex1].text}}</div> -->
        <img
          :src="slide.src"
          v-for="(slide, index) in slideList2"
          :class="`slide-img ${slideIndex2 === index ? 'active' : ''}`"
          :key="`s5-2-slide-${index}`"
        />
        <div class="arrows absolute">
          <img
            src="./s5/arrow.png"
            alt=""
            class="arrow-l"
            @click="addMultiIndex(2)"
          >
          <img
            src="./s5/arrow.png"
            alt=""
            class="arrow-r"
            @click="decMultiIndex(2)"
          >
        </div>
        <!-- <div class="indigator-list flex-c">
            <div
              @click="setIndex(1, index)"
              :class="`indigator ${slideIndex1 === index ? 'active' : ''}`"
              v-for="(item, index) in slideList1"
              :key="`indigator-1-${index}`"
            ></div>
          </div> -->
      </div>
      <div class="content">
        <div class="text">家是乘載家家戶戶故事的容器，家代表一個人的個人品味，和他如何書寫生命的故事。依照季節挑選窗簾、選擇喜歡的木椅木桌，一個好的格局，足夠讓你充分揮灑自己的想望……格局方正，採光極優，超強坪效規劃！【樺輝心世界】讓人驚嘆，原來生活可以這樣過，在空間內變魔術，樣樣俱備，讓您感動過人生，生活更動容
        </div>
      </div>
      <img src="./mo/5/bg.png" alt="" class="bg1">
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  background: #3b5662;
}

.bg1 {
  width: 100vw;
  height: auto;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;
}

.container {
  position: relative;
  width: size(1350);
  margin: 0 auto;
}

.title-block {
  width: size(750);
  margin: size(141) auto 0;
  .title {
    font-size: size(59);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.61;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
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
  width: size(1350);
  margin: 0 auto;
  padding:size(30) size(245) 0 size(245);

  &.short {
    width: size(472);
  }
&.b{border-top: 1px solid #fff;}

  .desc {
    font-size: size(24);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.77;
    letter-spacing: 1.2px;
    color: #fff;
    margin-bottom: size(25);
  }

  .text {
    font-size: size(18);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.9px;
    text-align: center;
    color: #fff;
    margin-bottom: size(25);
  }
}

.slide {
  width: size(1350);
  height: size(900);
  overflow: visible;
  margin-bottom: size(180);

  & .slide-img {
    width: 100%;
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
    width: 95vw;
    margin: 0 auto;
    margin-top: size-m(40);
    margin-bottom: size-m(22);
    top: 0;
    left: 0;
    right: 0;
    position: relative;

    .title {
      font-size: size-m(30);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.3;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
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
    height: size-m(250);
  }

  .content {
    width: size-m(304);
    margin: 0 auto;
    margin-top: size-m(40);
    padding: 0;

    .text {
      font-size: size-m(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.6;
      letter-spacing: 0.9px;
      text-align: left;
      color: #fff;
      margin-bottom: size-m(50);
    }
  }

  .arrows {
    width: 100%;
    transform: translateY(0%);
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;

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

  .bg1 {
    width: 100vw;
    position: absolute;
    left: 0;
    bottom: 0;
    top: auto;
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
      slideList1: [
        { text: '', src: require('./s5/1-1.jpg') },
        { text: '', src: require('./s5/1-2.jpg') },
        { text: '', src: require('./s5/1-3.jpg') },
        { text: '', src: require('./s5/1-4.jpg') },
        { text: '', src: require('./s5/1-5.jpg') },
      ],
      slideList2: [
        { text: '', src: require('./s5/2-1.jpg') },
        { text: '', src: require('./s5/2-2.jpg') },
        { text: '', src: require('./s5/2-3.jpg') },
        { text: '', src: require('./s5/2-4.jpg') },
        { text: '', src: require('./s5/2-5.jpg') },
        { text: '', src: require('./s5/2-6.jpg') },
        { text: '', src: require('./s5/2-7.jpg') },
        { text: '', src: require('./s5/2-8.jpg') },
        { text: '', src: require('./s5/2-9.jpg') },
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
