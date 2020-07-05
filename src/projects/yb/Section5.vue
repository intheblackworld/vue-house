<template>
  <div class="section3">
    <div
      v-if="!isMobile"
      class="relative bg"
    >
      <img
        src="./s2/bg_txt.png"
        alt=""
        class="bg-img"
      >
      <img
        src="./s2/l.png"
        alt=""
        class="bg-img"
      >
      <div class="title absolute">是誰？</div>
      <div class="subtitle absolute">以近未來思維，重現大直重劃<span>都會綠洲</span></div>
      <img src="./s5/map.jpg" alt="" class="map-img relative">
      <div class="relative">
        <img
          src="./s5/bg.png"
          alt=""
          class="bg-img"
        >
        <div class="content absolute flex flex-as flex-jb">
          <div class="content-label">Our Location</div>
          <div class="content-desc">
            時至今日，樸實無華的自然情趣也沒有半點貶值的跡象，我們深信那是讓人內心寧靜的永恆之美，而怎樣的喧囂浮華都歸於平常。央北重劃區以TOD概念打造宜居城市重現都市綠洲，營造充滿本質美好的自然永續環境和近鄰信義敦南的便利生活，正如您之所見。
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="isMobile"
      class="relative"
    >
      <img
        src="./mo/2/bg_txt.png"
        alt=""
        class="bg-img"
      >
      <img
        src="./mo/2/l.png"
        alt=""
        class="bg-img"
      >
      <div class="title absolute">是誰？</div>
      <div class="subtitle absolute">以近未來思維，重現大直重劃<span>都會綠洲</span></div>
      <div class="relative">
        <div class="content">
          <div class="content-label">Our Location</div>
          <div class="content-desc">
            時至今日，樸實無華的自然情趣也沒有半點貶值的跡象，我們深信那是讓人內心寧靜的永恆之美，而怎樣的喧囂浮華都歸於平常。央北重劃區以TOD概念打造宜居城市重現都市綠洲，營造充滿本質美好的自然永續環境和近鄰信義敦南的便利生活，正如您之所見。
          </div>
        </div>
      </div>
      <Map :bgSrc="bgSrc" :hand="hand"></Map>
    </div>
  </div>
</template>
<style lang="scss">
.text {
  span {
    color: #242424;
  }
}
</style>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';
.bg {
  background-size: cover;
  // position: relative;
  // z-index: 5;
  min-height: 100vh;
  background-color: #eee;
}

.bg-img {
  width: 100vw;
  display: block;
  position: absolute;
  top: 0;
  left: 0;

  &:nth-child(1) {
    position: relative;
  }
}

.map-img {
  width: 100vw;
  display: block;
  top: 0;
  left: 0;
}

.title {
  font-size: size(114);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.55;
  letter-spacing: 3.42px;
  text-align: right;
  color: #242424;
  top: size(236);
  left: size(388);
}

.subtitle {
  font-size: size(48);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: 1.44px;
  text-align: left;
  color: #242424;
  top: size(293);
  left: size(886);

  span {
    color: #eb5500;
  }

  .number {
    font-size: size(108);
    letter-spacing: -5.4px;
  }
}

.content {
  width: size(1542);
  height: size(179);
  bottom: size(105);
  left: size(181);
  text-align: center;
}

.content-label {
  font-size: size(27);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: normal;
  text-align: left;
  color: #f6f6f6;
  margin-bottom: size(40);
}

.content-desc {
  width: size(975);
  font-size: size(27);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: 1.35px;
  text-align: left;
  color: #f6f6f6;
  margin-bottom: size(40);
}

.logoall {
  width: size(583);
  cursor: pointer;
}

.swiper-frame {
  position: absolute;
  width: size(1741);
  height: size(1300);
  top: size(0);
  left: size(179);
  overflow: hidden;
}

.swiper-container {
  position: absolute;
  width: size(2381);
  height: size(1300);
  top: size(50);
  left: size(179);
  margin-left: size(-790);

  img,
  .text {
    width: size(900);
  }

  .text {
    font-size: size(21);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: 0.63px;
    text-align: left;
    color: #ffffff;
    margin: 0 auto;
    span {
      color: #242424;
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    margin: 0;
    min-height: auto;
  }

  .title {
    font-size: size-m(38);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.55;
    letter-spacing: 3.42px;
    text-align: right;
    color: #242424;
    top: size-m(98);
    left: size-m(40);
  }

  .subtitle {
    font-size: size-m(17);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: 1.44px;
    text-align: left;
    color: #242424;
    top: size-m(125);
    left: size-m(189);

    span {
      color: #eb5500;
    }

    .number {
      font-size: size-m(38);
      letter-spacing: -2.4px;
    }
  }

  .content {
    width: 100vw;
    height: size-m(647);
    top: 0;
    left: 0;
    padding-top: size-m(35);
    background: linear-gradient(to right, #d80033, #ea5400);
  }

  .content-label {
    font-size: size-m(12);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: normal;
    text-align: left;
    color: #f6f6f6;
    margin-left: size-m(40);
    margin-bottom: size-m(15);
  }

  .content-title {
    font-size: size-m(35);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.94;
    letter-spacing: 3.24px;
    text-align: left;
    color: #f6f6f6;
    margin-bottom: size-m(15);
  }

  .content-desc {
    width: size-m(295);
    font-size: size-m(13);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 1.35px;
    text-align: left;
    color: #f6f6f6;
    margin: 0 auto;
    margin-bottom: size-m(35);
  }

  .swiper-container {
    position: relative;
    width: 100vw;
    height: size-m(355);
    top: 0;
    left: 0;
    margin-left: 0;

    .text {
      font-size: size(10);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.4;
      letter-spacing: 0.3px;
      text-align: left;
      color: #ffffff;
      margin: 0 auto;
      span {
        color: #242424;
      }
    }

    img,
    .text {
      width: size-m(266);
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import Map from '@/components/Map.vue'

export default {
  name: 'section3',
  
  components: {
    Map,
  },

  data() {
    return {
      isMobile,
      bgSrc: require('./s5/map.jpg'),
      hand: require('./arrow.png')
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
