<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        src="./s6/bg.jpg"
        alt=""
        class="bg-img"
        data-aos="fade" data-aos-delay="400"
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
      <div class="slide relative flex-ac flex-jb" data-aos="fade" data-aos-delay="400">
        <!-- <div class="slide-text">{{slideList[slideIndex].text}}</div> -->
        <img
          :src="slide.src"
          v-for="(slide, index) in slideList"
          :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
          :key="`s2-1-slide-${index}`"
        />
        <div class="content">
          <h3 class="title">三十有成，精選傳奇之作</h3>
          <div class="text">北市大直水岸特區-煙波巴洛克 (1998年)<br />北市南京復興商圈-華爾街之心(2001年)
            新北市新板特區-權世界 (2008年)<br />
            新北市新莊副都心-閱世界 (2013年)<br />
            新北市三重之心富貴段-樺輝心世界 (2020年)
          </div>
        </div>
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
      </div>
    </div>
    <div
      v-else
      class="relative"
    >
      <div class="title-block flex-ac flex-jb">
        <img
          src="./s4/l.png"
          alt=""
          class="title-l"
        >
        <h3 class="title">慢工釀細活<br />成就極致工藝</h3>
        <img
          src="./s4/l.png"
          alt=""
          class="title-r"
        >
      </div>
      <div class="content relative">
        <div class="text">
          【樺輝建設，偉康機構】廿年磨一劍，專注完美盡乎苛求。樺輝建設一脈傳承，締造不斐成績。秉持對建築之熱情，對細節之堅持，不畏市場景氣更迭，專註一次只推一案，名宅作品遍及雙北大城，以客為尊。專寵主人家使之稀珍收藏，口碑佳評多年來不曾間歇。
        </div>
        <img
          src="./mo/4/bg.png"
          alt=""
          class="bg1"
        >
      </div>

      <div class="slide relative">
        <!-- <div class="border"></div> -->
        <!-- <div class="slide-text">{{slideList1[slideIndex1].text}}</div> -->
        <img
          :src="slide.src"
          v-for="(slide, index) in slideList"
          :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
          :key="`s5-2-slide-${index}`"
        />
        <div class="arrows absolute">
          <img
            src="./s5/arrow.png"
            alt=""
            class="arrow-l"
            @click="addIndex"
          >
          <img
            src="./s5/arrow.png"
            alt=""
            class="arrow-r"
            @click="decIndex"
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
      <div class="content relative">
        <h3 class="title">三十有成，精選傳奇之作</h3>
        <div class="text">北市大直水岸特區-煙波巴洛克 (1998年)<br />北市南京復興商圈-華爾街之心(2001年)
          新北市新板特區-權世界 (2008年)<br />
          新北市新莊副都心-閱世界 (2013年)<br />
          新北市三重之心富貴段-樺輝心世界 (2020年)
        </div>
        <img
          src="./mo/4/bg.png"
          alt=""
          class="bg1"
        >
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
  width: size(920);
  position: relative;
  z-index: 1;
  margin-bottom: size(78);
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
  line-height: 1.9;
  letter-spacing: 0.9px;
  text-align: left;
  color: #595757;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  width: size(575);
  margin-bottom: size(40);
}

.img-list {
  right: 0;
  bottom: size(70);
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
  width: size(1040);
  height: size(590);
  margin: 0 auto;
  margin-bottom: size(113);
  height: auto;
  overflow: visible;

  & .slide-img {
    width: size(494);
  }

  .slide-text {
    position: absolute;
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

.content {
  width: size(490);
  .title {
    width: 100%;
    font-size: size(28);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    letter-spacing: 1.4px;
    text-align: left;
    color: #3b5662;
    margin-bottom: size(30);
  }

  .text {
    width: 100%;
    font-size: size(18);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.9px;
    text-align: left;
    color: #595757;
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
    width: 100vw;
    height: size-m(447);

    & .slide-img {
      width: 100%;
    }
  }

  .content {
    width: size-m(318);
    margin: 0 auto;
    margin-top: size-m(40);
    overflow: visible;

    .title {
      font-size: size-m(18);
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.26;
      letter-spacing: 0.9px;
      text-align: left;
      color: #3b5662;
      margin-bottom: size-m(20);
    }

    .text {
      font-size: size-m(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.92;
      letter-spacing: 0.75px;
      text-align: left;
      color: #595757;
      margin-bottom: size-m(150);
    }

    .bg1 {
      width: 100vw;
      position: absolute;
      bottom: size-m(-150);
      left: size-m(-28);
      z-index: 2;
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
        { text: '立面大景', src: require('./s6/權世界 (2008年).jpg') },
        { text: '立面大景', src: require('./s6/煙波巴洛克 (1998年).jpg') },
        { text: '立面大景', src: require('./s6/華爾街之心(2001年).jpg') },
        { text: '立面大景', src: require('./s6/閱世界 (2013年).jpg') },
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
