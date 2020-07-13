<template>
  <div class="relative">
    <div>
      <img
        v-if="!isMobile"
        src="./s7/bg.jpg"
        alt=""
        class="bg-img"
      >

      <img
        v-if="isMobile"
        src="./mo/7/bg.jpg"
        alt=""
        class="bg-img"
      >

      <h3
        class="title absolute"
        id="section7"
        data-aos="fade" data-aos-delay="400"
      >巨匠聯手擘劃</h3>
      <h3 class="subtitle absolute" data-aos="fade" data-aos-delay="500">最好的居住環境，是城市資源與生態資源兼容並存的地方</h3>
      <hr class="divide absolute" data-aos="fade" data-aos-delay="600">
      <div class="desc absolute" data-aos="fade" data-aos-delay="700">全陽建設攜手豪宅團隊，<br />
        建築首席「江培珩」、哈佛名家「沈中怡」、景觀巨匠「胡聰寶」、美學大師「郭陞弘」、制震權威「張耀鴻」…<br />
        如同藝術家在作品上刻入印記般，以職人精神打造零誤差的完美哲學。
      </div>
      <h3 class="s-title absolute" data-aos="fade" data-aos-delay="400">全棟SRC鋼骨+制震</h3>
      <h3 class="s-subtitle absolute" data-aos="fade" data-aos-delay="600">水岸宏偉雙塔地標</h3>
      <hr class="s-divide absolute" data-aos="fade" data-aos-delay="700">
      <div class="s-desc absolute" data-aos="fade" data-aos-delay="800">「全陽豐會」18層SRC鋼骨制震雙塔式飯店宅，抗震係數0.28g可抗6級強震；建築臨雙溪面芝山岩，以大自然為師，行雲流水、層疊錯落，框架構築、完美比例，絕佳視野、八方賞景…為士林天際線勾勒出永恆之美！</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  // overflow: hidden;
  position: relative;
  //height: 100vh;
}

.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;
  &:first-child {
    position: relative;
    margin-top: size(-800);
    mix-blend-mode: darken;
  }
}

.title {
  font-size: size(46);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: #ffffff;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
  text-align: center;
  top: size(0);
}

.subtitle {
  font-size: size(27);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: 5.36px;
  text-align: center;
  color: #ffffff;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
  text-align: center;
  top: size(70 + 0);
}

.divide {
  width: size(1064);
  height: 2px solid;
  background-color: #fff;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
  top: size(140 + 0);
}

.desc {
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: 2.39px;
  text-align: center;
  color: #ffffff;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
  text-align: center;
  top: size(180 + 0);
}

.s-title {
  font-size: size(49);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.49;
  letter-spacing: 4.85px;
  text-align: left;
  color: #ffffff;
  font-size: size(59);
  font-weight: bold;
  letter-spacing: 5.89px;
  left: size(424);
  top: size(180 + 450);
  text-shadow: 0 1px 5px #000;
}

.s-subtitle {
  font-size: size(49);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.49;
  letter-spacing: 4.85px;
  text-align: left;
  color: #ffffff;
  left: size(424);
  top: size(180 + 550);
  text-shadow: 0 1px 5px #000;
}

.s-divide {
  width: size(625);
  height: 2px;
  background-color: #fff;
  left: size(404);
  top: size(180 + 630);
  box-shadow: 0 1px 3px 0px #000;
}

.s-desc {
  width: size(580);
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.07;
  letter-spacing: 2.96px;
  text-align: left;
  color: #ffffff;
  left: size(424);
  top: size(180 + 680);
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .relative {
    margin: 0 0 0 0;
  }

  .bg-img {
    width: 100vw;
    height: auto;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    object-fit: cover;
    &:first-child {
      position: relative;
      margin-top: size-m(0);
      mix-blend-mode: darken;
    }
  }

  .title {
    font-size: size-m(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.04;
    letter-spacing: 2.5px;
    text-align: center;
    color: #ffffff;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;
    text-align: center;
    top: size-m(-400);
  }

  .subtitle {
    font-size: size-m(21);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.24;
    letter-spacing: 2.08px;
    text-align: center;
    color: #ffffff;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;
    text-align: center;
    width: size-m(310);
    top: size-m(-400 + 50);
  }

  .divide {
    width: size-m(300);
    height: 2px solid;
    background-color: #fff;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;
    top: size-m(-400 + 130);
  }

  .desc {
    font-size: size-m(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: 1.8px;
    text-align: center;
    color: #ffffff;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;
    text-align: center;
    width: size-m(300);
    top: size-m(-400 + 160);
  }

  .s-title {
    font-size: size-m(25);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: 3px;
    text-align: center;
    color: #ffffff;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;
    top: size-m(-100 + 160);
    text-shadow: 0 1px 5px #000;
  }

  .s-subtitle {
    font-size: size-m(25);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: 3px;
    text-align: center;
    color: #ffffff;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;
    top: size-m(-100 + 195);
    text-shadow: 0 1px 5px #000;
  }

  .s-divide {
    width: size-m(300);
    height: 2px;
    background-color: #fff;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;
    top: size-m(-100 + 240);
    box-shadow: 0 1px 3px 0px #000;
  }

  .s-desc {
    width: size-m(300);
    font-size: size-m(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: 2.4px;
    text-align: left;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;
    color: #ffffff;
    top: size-m(-100 + 270);
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section1',
  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
