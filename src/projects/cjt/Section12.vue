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
        <div class="subtitle" data-aos="fade" data-aos-delay="200">國揚、富邦建築團隊合作</div>
        <h3 class="title" data-aos="fade" data-aos-delay="400">專業營建管理</h3>
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
        <div class="subtitle" data-aos="fade" data-aos-delay="200">國揚、富邦建築團隊合作</div>
        <h3 class="title" data-aos="fade" data-aos-delay="400">專業營建管理</h3>
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
  position: absolute;
  left: 0;
  top: 0;
  width: calc(100vw * 705 / 1680);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // margin-top: -7%;

  .title {
    font-size: calc(100vw * (80 / 1920));
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 3.2px;
    text-align: center;
    color: #ffffff;
  }

  .subtitle {
    font-size: calc(100vw * (40 / 1920));
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: 4.2px;
    text-align: center;
    color: #ffffff;
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }

  .text .title {
    font-size: calc(100vw * (75 / 1920));
  }

  .backg {
    height: calc(100vw * )
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s2/mo/bg.jpg');
  }

  .text {
    position: absolute;
    left: 0;
    top: auto;
    width: 100vw;
    height: auto;
    display: block;
    bottom: calc(100vw * (40 / 375));
    .title {
      font-size: 35.4px;
      letter-spacing: 1.42px;
    }

    .subtitle {
      font-size: 15px;
      letter-spacing: 4.8px;
    }
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
