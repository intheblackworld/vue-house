<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        src="./s6/bg.jpg"
        alt=""
        class="bg-img"
      >
      <div class="title-block flex-ac flex-jb">
        <img
          src="./s4/l.png"
          alt=""
          class="title-l"
        >
        <h3 class="title">慢工釀細活，成就極致工藝</h3>
        <img
          src="./s4/l.png"
          alt=""
          class="title-r"
        >
      </div>
      <div class="desc">
        【樺輝建設，偉康機構】廿年磨一劍，專注完美盡乎苛求。樺輝建設一脈傳承，締造不斐成績。秉持對建築之熱情，對細節之堅持，不畏市場景氣更迭，專註一次只推一案，名宅作品遍及雙北大城，以客為尊。專寵主人家使之稀珍收藏，口碑佳評多年來不曾間歇。
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
      class="fullscreen"
    >
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
  display: block;
  bottom: 0;
  left: 0;
  object-fit: cover;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

.title-block {
  margin: 0 auto;
  margin-top: size(252);
  width: size(820);
  z-index: 2;
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
  width: size(494);
  height: size(590);
  height: auto;
  overflow: visible;

  & .slide-img {
    width: 100%;
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
  .bg-img {
    height: auto;
    top: auto;
    bottom: 0;
    &:nth-child(1) {
      position: absolute;
    }
  }
  .title {
    width: size-m(289);
    right: size-m(43);
    top: calc(32vh - 20vw);
  }

  .mt {
    margin-top: 60px;
  }
  .cloud1 {
    height: size-m(604);
    left: 50%;
    top: auto;
    bottom: 0;
    width: auto;
    transform: translateX(-55%);
  }
  .cloud2 {
    height: size-m(604);
    left: 50%;
    top: auto;
    bottom: 0;
    width: auto;
    transform: translateX(-60%);
  }

  @keyframes clouda {
    to {
      transform: translateX(-45%);
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
