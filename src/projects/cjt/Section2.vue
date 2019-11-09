<template>
  <div class="section2 relative">
    <div class="bg relative" v-if="!isMobile">
      <img src="./s2/1.png" alt="輕井澤" class="bg-img" data-aos="fade" data-aos-delay="300" />
      <img src="./s2/2.png" alt="海佃商圈" class="bg-img" data-aos="fade" data-aos-delay="400" />
      <img src="./s2/3.png" alt="鹽水溪" class="bg-img" data-aos="fade" data-aos-delay="500" />
      <img src="./s2/4.png" alt="嘉南大圳" class="bg-img" data-aos="fade" data-aos-delay="600" />
      <img src="./s2/5.png" alt="北外環道路" class="bg-img" data-aos="fade" data-aos-delay="700" />
      <img src="./s2/6.png" alt="九份子國中小學基地" class="bg-img" data-aos="fade" data-aos-delay="800" />
      <img src="./s2/7.png" alt="花園夜市" class="bg-img" data-aos="fade" data-aos-delay="900" />
      <img src="./s2/8.png" alt="COSTCO商圈" class="bg-img" data-aos="fade" data-aos-delay="1000" />
      <img src="./s2/9.png" alt="中央水路景觀公園" class="bg-img" data-aos="fade" data-aos-delay="1100" />
      <img src="./s2/10.png" alt="新光暉幼兒園" class="bg-img" data-aos="fade" data-aos-delay="1200" />
      <img src="./s2/11.png" alt="武聖夜市" class="bg-img" data-aos="fade" data-aos-delay="1300" />
      <img src="./s2/12.png" alt="新光三越新天地" class="bg-img" data-aos="fade" data-aos-delay="1400" />
      <img src="./s2/13.png" alt="和緯商圈" class="bg-img" data-aos="fade" data-aos-delay="1500" />
      <img src="./s2/14.png" alt="河岸景觀公園" class="bg-img" data-aos="fade" data-aos-delay="1600" />
      <img src="./s2/15.png" alt="台17線" class="bg-img" data-aos="fade" data-aos-delay="1700" />
      <div class="text">
        <h3 class="title">國際水岸 接軌世界</h3>
        <div class="subtitle">全球水岸城市風光 預見增值未來</div>
      </div>
    </div>
    <div class="bg relative" v-else>
      <img src="./s2/mo/1.png" alt="輕井澤" class="bg-img" data-aos="fade" data-aos-delay="300" />
      <img src="./s2/mo/2.png" alt="海佃商圈" class="bg-img" data-aos="fade" data-aos-delay="400" />
      <img src="./s2/mo/3.png" alt="鹽水溪" class="bg-img" data-aos="fade" data-aos-delay="500" />
      <img src="./s2/mo/4.png" alt="嘉南大圳" class="bg-img" data-aos="fade" data-aos-delay="600" />
      <img src="./s2/mo/5.png" alt="北外環道路" class="bg-img" data-aos="fade" data-aos-delay="700" />
      <img src="./s2/mo/6.png" alt="九份子國中小學基地" class="bg-img" data-aos="fade" data-aos-delay="800" />
      <img src="./s2/mo/7.png" alt="花園夜市" class="bg-img" data-aos="fade" data-aos-delay="900" />
      <img src="./s2/mo/8.png" alt="COSTCO商圈" class="bg-img" data-aos="fade" data-aos-delay="1000" />
      <img src="./s2/mo/9.png" alt="中央水路景觀公園" class="bg-img" data-aos="fade" data-aos-delay="1100" />
      <img src="./s2/mo/10.png" alt="新光暉幼兒園" class="bg-img" data-aos="fade" data-aos-delay="1200" />
      <img src="./s2/mo/11.png" alt="武聖夜市" class="bg-img" data-aos="fade" data-aos-delay="1300" />
      <img src="./s2/mo/12.png" alt="新光三越新天地" class="bg-img" data-aos="fade" data-aos-delay="1400" />
      <img src="./s2/mo/13.png" alt="和緯商圈" class="bg-img" data-aos="fade" data-aos-delay="1500" />
      <img src="./s2/mo/14.png" alt="河岸景觀公園" class="bg-img" data-aos="fade" data-aos-delay="1600" />
      <img src="./s2/mo/15.png" alt="台17線" class="bg-img" data-aos="fade" data-aos-delay="1700" />
      <div class="text">
        <h3 class="title">國際水岸 接軌世界</h3>
        <div class="subtitle">全球水岸城市風光 預見增值未來</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s2/bg.jpg');
  background-position: center;
  background-size: auto;
}
.bg-img {
  width: 100vw;
  height: auto;
  display: block;
  position: absolute;
  top: 0;

  &:nth-child(1) {
    position: relative;
  }
}

.text {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: calc(100vw * (85 / 1920));

  .title {
    font-size: calc(100vw * (80 / 1920));
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }

  .subtitle {
    font-size: calc(100vw * (46 / 1920));
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s2/mo/bg.jpg');
  }

  .text {
    top: calc(100vw * (55 / 375));
    .title {
      font-size: 36px;
    }

    .subtitle {
      font-size: 21px;
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
  name: 'section2',

  methods: {},

  data() {
    return {
      isMobile,
    }
  },
}
</script>
