<template>
  <div class="section7 relative">
    <div class="bg relative" v-if="!isMobile">
      <img src="./s7/bg.jpg" alt="輕井澤" class="bg-img" />
      <div class="text">
        <div class="subtitle" data-aos="fade" data-aos-delay="200">國道8、北外環輕鬆串聯三橫三縱</div>
        <h3 class="title" data-aos="fade" data-aos-delay="400">雙大道 通勤更有利</h3>
      </div>
    </div>
    <div class="bg relative" v-else>
      <img src="./s7/mo/bg.jpg" alt="輕井澤" class="bg-img" />
      <div class="text">
        <div class="subtitle" data-aos="fade" data-aos-delay="200">國道8、北外環輕鬆串聯三橫三縱</div>
        <h3 class="title" data-aos="fade" data-aos-delay="400">雙大道 通勤更有利</h3>
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
  right: 0;
  margin: 0 auto;
  top: calc(100vw * (100 / 1920));

  .title {
    font-size: calc(100vw * (80 / 1920));
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 4px;
    text-align: center;
    color: #ffffff;
  }

  .subtitle {
    font-size: calc(100vw * (40 / 1920));
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: 6.4px;
    text-align: center;
    color: #ffffff;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    .title {
      letter-spacing: 6.3px;
    }

    .subtitle {

    }
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s2/mo/bg.jpg');
  }

  .text {
    top: calc(100vw * (50 / 375));
    .title {
      font-size: 35.4px;
      letter-spacing: 1.42px;
    }

    .subtitle {
      font-size: 15px;
      letter-spacing: 5.5px;
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
  name: 'section7',

  methods: {},

  data() {
    return {
      isMobile,
    }
  },
}
</script>
