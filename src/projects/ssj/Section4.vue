<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        src="./s4/bg.png"
        alt=""
        class="bg-img"
      >
      <div class="title-block flex-ac flex-jb">
        <img
          src="./s4/l.png"
          alt=""
          class="title-l"
        >
        <h3 class="title">匠心精工，藝術名邸</h3>
        <img
          src="./s4/l.png"
          alt=""
          class="title-r"
        >
      </div>
      <div class="desc">
        宛若精品，細直方的建築立面，精緻如珠寶盒一般，完美的黃金比例。
        縱向的格柵線條，動感跳耀。與窗欄穿插編織而成，工匠級磅礴旋律。
      </div>
      <div class="img-list absolute flex-c">
        <img
          :src="slide.src"
          v-for="(slide, index) in slideList"
          @click="setIndex(index)"
          :class="`img ${slideIndex === index ? 'active' : ''}`"
          :key="`s4-1-img-${index}`"
        />
      </div>
      <div class="slide relative">
        <div class="slide-text">{{slideList[slideIndex].text}}</div>
        <img
          :src="slide.src"
          v-for="(slide, index) in slideList"
          :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
          :key="`s2-1-slide-${index}`"
        />
        <div
          class="arrows absolute"
          v-if="isMobile"
        >
          <img
            src="./s4/arrow.png"
            alt=""
            class="arrow-l"
            @click="addIndex"
          >
          <img
            src="./s4/arrow.png"
            alt=""
            class="arrow-r"
            @click="decIndex"
          >
        </div>
      </div>
    </div>
    <div
      v-else
      class="relative section4"
    >
      <div class="title-block flex-ac flex-jb">
        <img
          src="./s4/l.png"
          alt=""
          class="title-l"
        >
        <h3 class="title">匠心精工，藝術名邸</h3>
        <img
          src="./s4/l.png"
          alt=""
          class="title-r"
        >
      </div>
      <img src="./mo/4/bg.png" alt="" class="bg1">
      <div class="arrows absolute">
        <img
          src="./s2/arrow.png"
          alt=""
          class="arrow-l"
          @click="addIndex"
        >
        <img
          src="./s2/arrow.png"
          alt=""
          class="arrow-r"
          @click="decIndex"
        >
      </div>
      <div class="slide relative">
        <div class="slide-text">{{slideList[slideIndex].text}}</div>
        <img
          :src="slide.src"
          v-for="(slide, index) in slideList"
          :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
          :key="`s2-1-slide-${index}`"
        />
      </div>
      <div class="m-desc">
        宛若精品，細直方的建築立面，精緻如珠寶盒一般，完美的黃金比例。<br />
        縱向的格柵線條，動感跳耀。與窗欄穿插編織而成，工匠級磅礴旋律。
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

.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  z-index: 2;
  display: block;
  top:size(250);
  bottom: 0;
  left: 0;
  object-fit: cover;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

.title-block {
  position: absolute;
  z-index: 3;
  left: size(36);
  bottom: size(144);
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

.desc {
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 0.9px;
  text-align: left;
  color: #3b5662;
  width: size(600);
  position: absolute;
  z-index: 3;
  left: size(72);
  bottom: size(40);
}

.img-list {
  right: 0;
  bottom: size(70);
  z-index: 3;
  img {
    width: size(200);
    height: size(133);
    display: block;
    object-fit: cover;
    margin: 0 size(10);
    cursor: pointer;
  }
}

.slide {
  width: 100vw;
  height: size(1080);
  overflow: visible;
  margin:0 0 size(250) 0;

  & .slide-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    right: size(0);
    bottom: size(290);
    color: #fff;
    font-size: size(28);
    padding: 8px 30px;
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
  .section4 {
    width: 100vw;
    height: size-m(700);
  }

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

  .m-desc {
    width: size-m(305);
    font-size: size-m(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: 0.75px;
    text-align: left;
    color: #3b5662;
    margin: 0 auto;
    margin-top: size-m(40);
  }

  .slide {
    overflow: hidden;
  border-radius: 50% 60% 40% 80%;
  margin: auto;
    width: size-m(300) !important;
    height: size-m(350);
    animation: radius 3s alternate infinite;
    .slide-text {
      font-size: size-m(12);
    bottom:  size-m(1);
    }
    img{width: 100%;
    height: 100%;}
  }

@keyframes radius{
    to {
  border-radius: 80% 50% 80% 60%;
    }
}
  .arrows {
    width: 100%;
    top: size-m(215);
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
      slideIndex: 0,
      slideList: [
        { text: '立面大景', src: require('./s4/1.jpg') },
        { text: '立面大景', src: require('./s4/2.jpg') },
        { text: '立面大景', src: require('./s4/3.jpg') },
        { text: '立面大景', src: require('./s4/4.jpg') },
        { text: '立面大景', src: require('./s4/5.jpg') },
      ],
    }
  },

  methods: {
    setIndex(current) {
      this[`slideIndex`] = current
    },
  },

  created() {},

  mounted() {},

  computed: {},
}
</script>
