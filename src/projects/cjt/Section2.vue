<template>
  <div class="section2 relative">
<iframe class="if" src="https://drive.google.com/file/d/1WpNUGObbL12I2eXgmnpCJ8J16oLr0SF9/preview"></iframe>
    <div class="bg relative" v-if="!isMobile"><img src="./s2/0.png" alt="輕井澤" class="bg-img" data-aos="fade" data-aos-delay="300" />
   <!--   <img src="./s2/1.png" alt="輕井澤" class="bg-img" data-aos="fade" data-aos-delay="300" />
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
      <img src="./s2/15.png" alt="台17線" class="bg-img" data-aos="fade" data-aos-delay="1700" /> -->
      <div class="text">
        <h3 class="title">未來領漲</h3>
        <h4 class="subtitle">國家重點建設、民間企業開發聯手到位</h4>
        <p>土地貴，別墅價值跟著水漲船高，席次稀缺有目共睹<br>
把握機會立即搶進，預約好生活也為資產超前佈署</p>
      </div>
    </div>
    <div class="bg relative" v-else><img src="./s2/mo/0.png" alt="輕井澤" class="bg-img" data-aos="fade" data-aos-delay="300" />
    <!--     <img src="./s2/mo/1.png" alt="輕井澤" class="bg-img" data-aos="fade" data-aos-delay="300" />
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
      <img src="./s2/mo/15.png" alt="台17線" class="bg-img" data-aos="fade" data-aos-delay="1700" /> -->
      <div class="text">
        <h3 class="title">未來領漲</h3>
        <h4 class="subtitle">國家重點建設、民間企業開發聯手到位</h4>
        <p>土地貴，別墅價值跟著水漲船高，席次稀缺有目共睹<br>
把握機會立即搶進，預約好生活也為資產超前佈署</p>
        <p></p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.text {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: calc(100vw * (85 / 1920));
  color: #ffffff;
  line-height: 1.6;
  width:100%;
  font-stretch: normal;
  font-style: normal;
  letter-spacing:0.1em;
  text-align: center;
  font-size: calc(100vw * (18 / 1920));overflow: hidden;

  .title {
    font-size:4.44em;
    font-weight: bold;
    line-height: normal;
    img{width:100%;}
  }

  .subtitle {margin: 0.1em 0 0 0;
    font-size:1.67em;
    font-weight: 600;transform: scaleX(0.9);
  }
  p{margin: 0.5em 0 1em 0;
    font-size:1em;}
}
@media screen and (max-width: 767px) {
  .text {
    top: calc(100vw * (35 / 375));
    font-size: calc(100vw * (13 / 375));
    .title {
    font-size:3em;
    }
    .subtitle {
    font-size:1.56em;
    }
  }
}
</style>
<style lang="scss" scoped>
.bg {
  background-image: url('./s2/bg.jpg');
  background-position: center;
  background-size: 100% auto;
}
.if{width:calc(80vh * 1920 / 1080);height: 80vh;margin:0 0 10vh;}
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
@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s2/mo/bg.jpg');
  }
.if{width:100vw;height:calc(100vw * 211 / 375);margin:0 0 10vh;}
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
