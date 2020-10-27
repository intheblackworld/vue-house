<template>
  <div class="section5">
    <div v-if="!isMobile" class="relative bg">
      <img src="./s5/map.jpg" alt="" class="map-img relative">
      <div class="relative">
        <div class="content flex flex-as flex-jb">
          <div class="content-label">地段魅力</div>
          <div class="content-desc">
            時至今日，樸實無華的自然情趣也沒有半點貶值的跡象，我們深信那是讓人內心寧靜的永恆之美，而怎樣的喧囂浮華都歸於平常。央北重劃區以TOD概念打造宜居城市重現都市綠洲，營造充滿本質美好的自然永續環境和近鄰信義敦南的便利生活，正如您之所見。
          </div>
        </div>
      </div>
    </div>

    <div v-if="isMobile" class="relative">
      <Map :bgSrc="bgSrc" :hand="hand"></Map>
      <div class="relative">
        <div class="content">
          <div class="content-label">地段魅力</div>
          <div class="content-desc">
            時至今日，樸實無華的自然情趣也沒有半點貶值的跡象，我們深信那是讓人內心寧靜的永恆之美，而怎樣的喧囂浮華都歸於平常。央北重劃區以TOD概念打造宜居城市重現都市綠洲，營造充滿本質美好的自然永續環境和近鄰信義敦南的便利生活，正如您之所見。
          </div>
        </div>
      </div>
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
  background: #fff;
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
  font-size: size(110);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.55;
  letter-spacing: 0.02em;
  text-align: right;
  color: #242424;
  top: size(236);
  left: size(388);
}

.subtitle {
  font-size: size(45);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: 0.02em;
  text-align: left;
  color: #242424;
  top: size(400);
  left: size(846);

  span {
    color: #eb5500;
  }

  .number {
    font-size: size(100);
    letter-spacing: -5.4px;
  }
}

.content {
  width: 100vw;
  height: size(312);
  text-align: center;
  padding: size(67) size(180) 0;
}

.content-label {
  font-size: size(48);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: size(4.8);
  text-align: left;
  color: #242424;
}

.content-desc {
  width: size(975);
  font-size: size(25);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing:0.08em;
  text-align: left;
  color: #242424;
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
    letter-spacing: 0.01em;
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
    text-align: left;
    color: #242424;
    top: size-m(155);
    left: size-m(189);
    transform: scaleX(0.95);
    transform-origin: 0 0;

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
    height: auto;
   // height: size-m(222);
    top: 0;
    left: 0;
    position: relative;
    padding: size-m(35) 0 size-m(40) 0;
    background: #fff;
  }

  .content-label {
    width: size-m(295);
    font-size: size-m(18);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: normal;
    text-align: left;
    color: #242424;
    margin: auto auto size-m(15) auto;
  }

  .content-title {
    font-size: size-m(35);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.94;
    text-align: left;
    color: #242424;
    margin-bottom: size-m(15);
    font-family: futurabq;
  }

  .content-desc {
    width: size-m(295);
    font-size: size-m(13);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    text-align: justify;
    color: #242424;
    margin: 0 auto;
    //margin-bottom: size-m(35);
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
  name: 'section5',

  components: {
    Map,
  },

  data() {
    return {
      isMobile,
      bgSrc: require('./s5/map.jpg'),
      hand: require('./s5/小手.png'),
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
