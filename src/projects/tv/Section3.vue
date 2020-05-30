<template>
  <div>
    <div class="bg relative">
      <img
        src="./s3/skirt.gif"
        alt=""
        class="img absolute"
      >
      <div
        v-if="!isMobile"
        class="container flex-ac flex-jb relative right"
      >
        <div class="content">
          <h3
            class="title"
            data-aos="fade"
            data-aos-delay="400"
          >午後文創</h3>
          <h3
            class="subtitle"
            data-aos="fade"
            data-aos-delay="600"
            v-html="slideList[slideIndex].subtitle"
          ></h3>
          <ul class="desc-list">
            <h3
              v-for="(text, index) in desc_list[slideList[slideIndex].contentIndex]"
              data-aos="fade"
              :data-aos-delay="600 + (index + 1) * 200"
              data-aos-duration="1000"
              :key="text"
            >{{text}}</h3>
          </ul>
        </div>
        <div
          class="slides relative"
          data-aos="fade"
          data-aos-delay="400"
        >
          <div class="slide-text">{{slideList[slideIndex].text}}</div>
          <img
            :src="slide.src"
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s2-1-slide-${index}`"
          />
        </div>
      </div>
      <div v-if="isMobile">
        <div
          class="slides relative"
          data-aos="fade"
          data-aos-delay="400"
        >
          <div class="slide-text">{{slideList[slideIndex].text}}</div>
          <img
            :src="slide.src"
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s2-1-slide-${index}`"
          />
          <div class="arrows absolute">
            <img
              src="./arrow-left.png"
              alt=""
              class="arrow-l"
              @click="decIndex"
            >
            <img
              src="./arrow-right.png"
              alt=""
              class="arrow-r"
              @click="addIndex"
            >
          </div>
        </div>
        <div class="content">
          <h3
            class="title"
            data-aos="fade"
            data-aos-delay="400"
          >午後文創</h3>
          <h3
            class="subtitle"
            data-aos="fade"
            data-aos-delay="600"
            v-html="slideList[slideIndex].subtitle"
          ></h3>
          <ul class="desc-list">
            <h3
              v-for="(text, index) in desc_list[slideList[slideIndex].contentIndex]"
              data-aos="fade"
              :data-aos-delay="600 + (index + 1) * 200"
              data-aos-duration="1000"
              :key="text"
            >{{text}}</h3>
          </ul>
        </div>
      </div>
      <div class="indigator-list flex-c">
        <div
          @click="setIndex(index)"
          :class="`indigator ${slideList[slideIndex].contentIndex === index ? 'active' : ''}`"
          v-for="index in [0, 1, 2]"
          :key="`indigator-1-${index}`"
        ></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
  overflow: hidden;
  height: 100vh;
}

.img {
  left: size(121);
  width: size(266);
  top: size(326);
}

.container {
  width: size(1460);
  height: 100%;

  &.left {
    margin-left: size(70);
  }

  &.right {
    margin-left: size(370);
  }
}

.slides {
  width: size(890);
}

.content {
  width: size(438);
  height: size(710);
  padding-top: size(200);
}

.title {
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.65;
  letter-spacing: 2.5px;
  text-align: left;
  color: #606060;
  margin-bottom: size(25);
  margin-left: size(-5);
}

.subtitle {
  font-size: size(21);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: 0.63px;
  text-align: left;
  color: #aa8356;
  margin-bottom: size(15);
}

.desc-list {
  > h3 {
    font-size: size(15);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: 3.75px;
    text-align: left;
    color: #727272;
  }
}

.indigator-list {
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: size(80);
  .indigator {
    width: size(19);
    height: size(19);
    border-radius: size(19);
    margin: 0 20px;
    background-color: rgba(186, 146, 98, 0.4);
    cursor: pointer;

    &.active {
      background-color: rgba(186, 146, 98, 1);
    }
  }
}

.arrows {
  display: none;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    height: auto;
  }
  .img {
    left: auto;
    right: size-m(37);
    width: size-m(124);
    top: auto;
    bottom: size-m(10);
  }

  .container {
    width: 100vw;
    height: 100%;
    flex-wrap: wrap;

    &.left {
      margin-left: 0;
    }

    &.right {
      margin-left: 0;
    }
  }

  .slides {
    width: 100vw;
  }

  .content {
    width: 100vw;
    height: size-m(550);
    padding-top: size-m(31);
    padding-left: size-m(27);
    padding-bottom: size-m(200);
  }

  .title {
    font-size: size-m(39);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.65;
    letter-spacing: 2.5px;
    text-align: left;
    color: #606060;
    margin-bottom: size-m(25);
    margin-left: size-m(-5);
  }

  .subtitle {
    font-size: size-m(16);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.55;
    letter-spacing: 0.63px;
    text-align: left;
    color: #aa8356;
    margin-bottom: size-m(15);
  }

  .desc-list {
    > h3 {
      font-size: size-m(14);
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.14;
      letter-spacing: 0.14px;
      text-align: left;
      color: #727272;
    }
  }

  .indigator-list {
    display: none;
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
  name: 'section3',
  mixins: [slider],

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s3/1-1.jpg'),
          contentIndex: 0,
          subtitle: '眼光中有山水湛藍，舉止裡有磅礡優雅',
        },
        {
          src: require('./s3/1-2.jpg'),
          contentIndex: 0,
          subtitle: '眼光中有山水湛藍，舉止裡有磅礡優雅',
        },
        {
          src: require('./s3/2-1.jpg'),
          contentIndex: 1,
          subtitle: '聞名於外，珍藏於內，林家花園，黃石市場',
        },
        {
          src: require('./s3/2-2.jpg'),
          contentIndex: 1,
          subtitle: '聞名於外，珍藏於內，林家花園，黃石市場',
        },
        {
          src: require('./s3/2-3.jpg'),
          contentIndex: 1,
          subtitle: '聞名於外，珍藏於內，林家花園，黃石市場',
        },
        {
          src: require('./s3/3-1.jpg'),
          contentIndex: 2,
          subtitle: '新板藏美，信義藏峰，青春力量藏心胸',
        },
        {
          src: require('./s3/3-2.jpg'),
          contentIndex: 2,
          subtitle: '新板藏美，信義藏峰，青春力量藏心胸',
        },
      ],
      desc_list: [
        [
          '5分鐘新板誠品',
          '以時尚精品，設計文創，閱讀殿堂',
          '親撫手感生活，織繪新板城中之城',
          '無與倫比的精彩閱歷',
        ],
        [
          '林家花園，黃石市場',
          '結合湳雅夜市聞名小吃',
          '口袋廚房珍饈品味',
          '傳統人文風情',
          '薈萃俬房不藏私',
        ],
        [
          '7.5萬坪遠東TPARK複合園區',
          '新北市立圖書總館24小時全時開放',
          '充滿人文的樹海藍天',
          '原來環境力量在這裡',
          '盛產青春的那一頁',
        ],
      ],
    }
  },

  computed: {},

  methods: {
    setIndex(index) {
      this.slideIndex = index * 2
    },
  },

  created() {},
  mounted() {},
}
</script>
