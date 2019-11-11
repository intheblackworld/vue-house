<template>
  <div class="section9 relative">
    <div class="bg relative" v-if="!isMobile">
      <!-- <img src="./s9/bg.jpg" alt="輕井澤" class="bg-img" /> -->
      <div class="text">
        <div class="subtitle">日系設計風格 融合自然景觀</div>
        <h3 class="title">建築別墅風景</h3>
      </div>
      <img src="./s9/1.jpg" alt class="item-img" data-aos="fade"
          data-aos-delay="400" />
    </div>
    <div class="bg relative" v-else>
      <div class="text">
        <div class="subtitle">日系設計風格 融合自然景觀</div>
        <h3 class="title">建築別墅風景</h3>
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
  height: calc(100vw * 1080 / 1920);
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
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: calc(100vw * 635 / 1920);
  top: calc(100vw * (100 / 1920));

  .title {
    font-size: calc(100vw * (80 / 1920));
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 26px;
    white-space: nowrap;
    width: 100%;
    text-align: justify;
    color: #ffffff;
  }

  .subtitle {
    font-size: calc(100vw * (40 / 1920));
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    white-space: nowrap;
    letter-spacing: 9.7px;
    width: 100%;
    text-align: justify;
    color: #ffffff;
  }
}

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
    background-image: url('./s9/bg.jpg');
    background-position: center;
    height: auto;
  }

  .text {
    width: 100vw;
    top: calc(100vw * (50 / 375));
    position: relative;
    .title {
      text-align: center;
      font-size: 35.4px;
      letter-spacing: 8.42px;
    }

    .subtitle {
      text-align: center;
      font-size: 15px;
      letter-spacing: 5.5px;
    }
  }
  .item-img {
    margin-top: 100px;
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
