<template>
  <div class="section9 relative">
    <div class="bg relative" v-if="!isMobile">
      <!-- <img src="./s9/bg.jpg" alt="輕井澤" class="bg-img" /> -->
      <div class="text">
        <h3 class="title">別墅升級</h3>
        <h4 class="subtitle">買大樓不如買水岸別墅</h4>
        <p>戶戶有天有地、獨立進出，提升居家防護力<br>
面寬5米、門前停車、私有雙車位規劃<br>
佈置露臺花園、開心農場、寵物天地，輕鬆又愜意</p>
      </div>
      <img src="./s9/1.jpg" alt class="item-img" data-aos="fade"
          data-aos-delay="400" />
    </div>
    <div class="bg relative" v-else>
      <div class="text">
        <h3 class="title">別墅升級</h3>
        <h4 class="subtitle">買大樓不如買水岸別墅</h4>
        <p>戶戶有天有地、獨立進出，提升居家防護力<br>
面寬5米、門前停車、私有雙車位規劃<br>
佈置露臺花園、開心農場、寵物天地，輕鬆又愜意</p>
      </div>
      <img src="./s9/1.jpg" alt class="item-img" data-aos="fade"
          data-aos-delay="400" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background: transparent;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  // padding-top: 220px;
  width: 100vw;
  height: calc(100vw * 1150 / 1920);
  background-color: #fcf8f2;// url('./s6/bg.jpg');
}
.bg-img {
  width: 100vw;
  // height: calc(100vw * 1078 / 1920);
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
}
/*
.text {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: calc(100vw * 635 / 1920);
  top: calc(100vw * (100 / 1920));
    color: #40220f;
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
    font-weight: 600;//transform: scaleX(0.9);
  }
  p{margin: 0.5em 0 0 0;
    font-size:1em;}
}
*/
.swiper-container {
  width: calc(100vw * (1322 / 1920));
}

.item-img {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: calc(100vw * (1192 / 1920));
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    .title {
      // letter-spacing: 6.3px;
    }

    .subtitle {
    }
  }
}

@media screen and (max-width: 767px) {
  .bg {
   // background-image: url('./s9/bg.jpg');
    background-position: center;
    height: auto;
  }

  .text {
    position: relative;
    top: 0;
    margin: calc(100vw * (35 / 375)) auto calc(100vw * (35 / 375)) ;
    }
 /* .text {
    width: 100vw;
    top: calc(100vw * (50 / 375));
    position: relative;
    font-size: calc(100vw * (13 / 375));
    .title {
    font-size:2.9em;
    }

    .subtitle {
    font-size:1.1em;
    }
  }
  */
  .item-img {
    margin-top:0;
    position: relative;
    width: 100vw;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section9',

  methods: {},

  data() {
    return {
      isMobile,
    }
  },
}
</script>
