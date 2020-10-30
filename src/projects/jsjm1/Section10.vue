<template>
  <div class="section10">
    <img src="./s10/bg.jpg" alt="" class="bg-img" v-if="!isMobile">
    <img src="./s10/bg_m.jpg" alt="" class="bg-img" v-else>
    <div class="subtitle absolute" data-aos="fade-up" data-aos-delay="200">
      從氣質，就看出精湛品質
    </div>
    <div class="title absolute" data-aos="fade-up" data-aos-delay="400">
      一筆箍耐震精工<br />人文石尚 風格直寓
    </div>
    <div class="hr absolute" data-aos="fade-up" data-aos-delay="600"></div>
    <div class="desc absolute" data-aos="fade-up" data-aos-delay="800">
      大器「雪花白蒙卡花崗石」，書寫外觀如渾然天成的山水流瀑，文雅堅毅，展現力抗溫差落雨的雋永誠真。<br /><br />
      結合「一筆箍」鋼筋捆紮、SA級續接，締造抗震係數達0.274g、抗六級以上耐震設計。沈穩精鑄，篤實安家。
    </div>
    <!-- <div class="title-bg">
      <div class="text" v-if="isMobile">
        <div
          class="title"
          data-aos="fade-down"
          data-aos-delay="0"
        >樹海恬靜學區 爭藏氧森別墅</div>
        <div
          class="desc"
          data-aos="fade-down"
          data-aos-delay="200"
        >步行2分鐘抵高雄大學，自然生態日夜淨化空氣ING</div>
      </div>
    </div> -->
    <!-- <Map :tagList="tagList" :bgSrc="isMobile ? bgmSrc: bgSrc" :hand="hand">
      <div class="text" v-if="!isMobile">
        <div
          class="title"
          data-aos="fade-down"
          data-aos-delay="0"
        >樹海恬靜學區 爭藏氧森別墅</div>
        <div
          class="desc"
          data-aos="fade-down"
          data-aos-delay="500"
        >步行2分鐘抵高雄大學，自然生態日夜淨化空氣ING</div>
      </div>
    </Map> -->
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section10 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  overflow: hidden;
}
.bg {
  background-color: #fff;
  background-position: 100% 0%;
  background-size: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-image: url('./s2_bg.jpg');
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
  &:nth-child(1) {
    position: relative;
  }
}

.subtitle {
  width: size(283);
  top:calc(50% - 17vw);
  left: size(236);
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
  font-size: size(25.5);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(1.5);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.title {
  width: size(441);
  top:calc(50% - 14vw);
  left: size(236);
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
  font-size: size(46.4);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3.71);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.hr {
  width: size(564);
  top:calc(50% - 6.5vw);
  left: size(238);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.6);
  border: solid 1px #ffffff;
}

.desc {
  width: size(570);
  top:calc(50% - 5vw);
  left: size(235);
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
  font-size: size(21);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: 0.1em;
  text-align: left;
  color: #fff;
}
@media only screen and (max-width: 1440px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
    background-size: 1920px auto;
    background-position: center;
  }
  .txt {
    height: auto;
    margin-top: 100px;
  }

  .title {
    font-size: 52px;
  }

  .desc {
    font-size: 24px;
  }

  .text {
    top: 0;
  }
}

@media screen and (max-width: 767px) {
  .section10 {
    width: 100vw;
    height: sizem(667);
    min-height: auto;
  max-height:initial;
    position: relative;
  }

  .bg-img {
    width: 100vw;
    height: sizem(667);
    min-height: size(1080);
    position: absolute;
    top: 0;
    left: 0;
    height: auto;
    display: block;
    object-fit: cover;
    margin-top: 0;
    &:nth-child(1) {
      position: relative;
    }
  }

  .subtitle {
    width: sizem(200);
    top: sizem(25);
    left: sizem(32);
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
    font-size: sizem(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.7;
    letter-spacing: sizem(1.06);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .title {
    width: sizem(206);
    top: sizem(49);
    left: sizem(32);
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .hr {
    width: sizem(310);
    top: sizem(133);
    left: sizem(32.5);
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.6);
    border: solid 1px #ffffff;
  }

  .desc {
    width: sizem(313);
    top: sizem(145);
    left: sizem(32);
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: sizem(1.5);
    text-align: left;
    color: #ffffff;
  }
}
</style>

<script>
import { isMobile } from '@/utils'
import Map from '@/components/Map.vue'
export default {
  name: 'section10',

  components: {
    Map,
  },
  data() {
    return {
      isMobile,
      // tagList: [require('./s3_title.png')],

      // bgSrc: require('./s3_bg.jpg'),
      // bgmSrc: require('./s3_bg_m.jpg'),
      // hand: require('../lkf/s4_hand.png'),
    }
  },

  mounted() {},
}
</script>
