<template>
  <div class="section12 relative">
    <div class="bg relative" v-if="!isMobile">
      <img src="./s12/bg.jpg" alt="輕井澤" class="bg-img" />
      <img src="./s12/1.png" alt="文化藏美" data-aos="fade" data-aos-delay="400" class="bg-img" />
      <img src="./s12/2.png" alt="文山藏美" data-aos="fade" data-aos-delay="600" class="bg-img" />
      <img src="./s12/3.png" alt="陽光新未來" data-aos="fade" data-aos-delay="800" class="bg-img" />
      <img src="./s12/4.png" alt="藏美一品" data-aos="fade" data-aos-delay="1000" class="bg-img" />
      <img src="./s12/5.png" alt="富邦大無疆 外觀示意" class="bg-img" />
      <div class="text">
        <h3 class="title">美學極現</h3>
        <h4 class="subtitle">日本建築職人精神<br>藏美實現</h4>
        <p>以建築演繹「新日本建築美學」著重美感與機能兼具<br>
名宅建築團隊精心打造沿街式透天產品．戶戶臨路<br>
以品牌實力打造水岸別墅社區成功典範</p>
      </div>
    </div>
    <div class="bg relative" v-else>
      <img src="./s12/mo/bg.jpg" alt="輕井澤" class="bg-img" />
      <img src="./s12/mo/1.png" alt="文化藏美" data-aos="fade" data-aos-delay="400" class="bg-img" />
      <img src="./s12/mo/2.png" alt="文山藏美" data-aos="fade" data-aos-delay="600" class="bg-img" />
      <img src="./s12/mo/3.png" alt="陽光新未來" data-aos="fade" data-aos-delay="800" class="bg-img" />
      <img src="./s12/mo/4.png" alt="藏美一品" data-aos="fade" data-aos-delay="1000" class="bg-img" />
      <img src="./s12/mo/5.png" alt="富邦大無疆 外觀示意" class="bg-img" />
      <div class="text">
        <h3 class="title">美學極現</h3>
        <h4 class="subtitle">日本建築職人精神<br>藏美實現</h4>
        <p>以建築演繹「新日本建築美學」著重美感與機能兼具<br>
名宅建築團隊精心打造沿街式透天產品．戶戶臨路<br>
以品牌實力打造水岸別墅社區成功典範</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-position: center;
  background-size: auto;
}
.bg-img {
  width: 100vw;
  height: auto;
  display: block;
  position: absolute;
  object-fit: cover;
  top: 0;

  &:nth-child(1) {
    position: relative;
  }
}

.text {
  color: #40220f;
  position: absolute;
  margin: 0;
  width: calc(100vw * (705 / 1680));
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  /*
  left: 0;
  top: 0;
    line-height: 1.6;
    font-stretch: normal;
    font-style: normal;
    letter-spacing:0.1em;
    font-size: calc(100vw * (18 / 1920));
  // margin-top: -7%;
  */
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

@media screen and (max-width: 767px) {
  .bg {
   // background-image: url('./s2/mo/bg.jpg');
  height:calc(100vw * (620 / 375));
  }

  .text {
    top: auto;
    width: 100vw;
    height: auto;
    display: block;
    bottom: calc(100vw * (25 / 375));
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section12',

  methods: {},

  data() {
    return {
      isMobile,
    }
  },
}
</script>
