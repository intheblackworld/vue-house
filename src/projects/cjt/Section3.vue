<template>
  <div class="section3 relative">
    <div class="bg relative" v-if="!isMobile">
      <img src="./s3/bg.jpg" alt="輕井澤" class="bg-img" />
      <img src="./s3/1.png" alt="輕井澤" class="bg-img" data-aos="fade-down" data-aos-delay="300" />
      <img src="./s3/2.png" alt="輕井澤" class="bg-img" data-aos="fade-left" data-aos-delay="300" />
      <div class="text">
        <h3 class="title" data-aos="fade" data-aos-delay="200">環境優先</h3>
        <h4 class="subtitle" data-aos="fade" data-aos-delay="400">國家級純住宅低碳家園</h4>
        <p data-aos="fade" data-aos-delay="600">九份子新都心．核心別墅地王<br>
完整大基地開發接軌生態、低碳、健康、舒適、安全<br>
5大國際居住水準，高綠覆、高鮮氧幸福相伴</p>
      </div>
    </div>
    <div class="bg relative" v-else>
       <img src="./s3/mo/bg.jpg" alt="輕井澤" class="bg-img" />
      <img src="./s3/1.png" alt="輕井澤" class="bg-img" data-aos="fade" data-aos-delay="300" />
      <img src="./s3/2.png" alt="輕井澤" class="bg-img" data-aos="fade" data-aos-delay="300" />
      <div class="text">
        <h3 class="title" data-aos="fade" data-aos-delay="200">環境優先</h3>
        <h4 class="subtitle" data-aos="fade" data-aos-delay="400">國家級純住宅低碳家園</h4>
        <p data-aos="fade" data-aos-delay="600">九份子新都心．核心別墅地王<br>
完整大基地開發接軌生態、低碳、健康、舒適、安全<br>
5大國際居住水準，高綠覆、高鮮氧幸福相伴</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-position: center;
  background-size: auto;
  height: 100vh;overflow: hidden;
}
.bg-img {
  width: 100vw;
  height: auto;
  display: block;
  position: absolute;
  object-fit: cover;
  top: 0;

  &:nth-child(1) {top: auto;bottom:-8vw;
  }
  &:nth-child(2) {top:-5vw;left: 0;
  width: 70vw;
  }
  &:nth-child(3) {top: auto;bottom: 0;right: 0;
  width: 70vw;
  }
}

.text {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: calc(100vw * (100 / 1920));
    color: #ffffff;
    line-height: 1.6;
    width:100%;
    font-stretch: normal;
    font-style: normal;
    letter-spacing:0.1em;
    text-align: center;
    font-size: calc(100vw * (18 / 1920));

  .title {
    font-size:4.44em;
    font-weight: bold;
    line-height: normal;
  }

  .subtitle {margin: 0.1em 0 0 0;
    font-size:1.67em;
    font-weight: 600;transform: scaleX(0.9);
  }
  p{margin: 0.5em 0 0 0;
    font-size:1em;}
}

@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s2/mo/bg.jpg');
    height:calc(100vw * (810 / 750));
  }
.bg-img {

  &:nth-child(1) {top: auto;bottom:0;
  }
  &:nth-child(2) {top:0;left: 0;
  width: 100vw;
  }
  &:nth-child(3) {top: auto;bottom: 0;right: 0;
  width: 100vw;
  }
}

  .text {
    top: calc(100vw * (80 / 375));
    .title {
      font-size: 35.4px;
      letter-spacing: 1.42px;
    }

    .subtitle {
      font-size: 15px;
      letter-spacing: 3px;
    }
  }
  .img {
    display: none;
  }
  .imgM {
    display: block;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section3',

  methods: {},

  data() {
    return {
      isMobile,
    }
  },
}
</script>
