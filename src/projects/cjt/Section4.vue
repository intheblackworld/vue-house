<template>
  <div class="section4 relative">
    <div class="bg relative" v-if="!isMobile">
      <img src="./s4/bg.jpg" alt="輕井澤" class="bg-img" />
      <div class="text">
        <h3 class="title" data-aos="fade" data-aos-delay="200">九份子新都心 國際水岸第一排</h3>
        <div class="subtitle" data-aos="fade" data-aos-delay="400">低密度、高綠覆 純住宅重劃區</div>
      </div>
    </div>
    <div class="bg relative" v-else>
      <img src="./s4/mo/bg.jpg" alt="輕井澤" class="bg-img" />
      <div class="text">
        <h3 class="title" data-aos="fade" data-aos-delay="200">
          <b>九份子新都心</b>
          <br />國際水岸第一排
        </h3>
        <div class="subtitle" data-aos="fade" data-aos-delay="400">低密度、高綠覆 純住宅重劃區</div>
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
  top: calc(100vw * (150 / 1920));

  .title {
    font-size: 4vw;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0;
    text-align: center;
    color: #ffffff;
  }

  .subtitle {
    font-size: calc(100vw * (40 / 1920));
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: 4.4px;
    text-align: center;
    color: #ffffff;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text .subtitle {
    letter-spacing: 3.2px;
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s2/mo/bg.jpg');
  }

  .text {
    top: 8vw;
    .title {
      font-size: 36px;
      letter-spacing: 1.44px;

      b {
        font-size: 1.17em;
      }
    }

    .subtitle {
      font-size: 15px;
      letter-spacing: 2px;
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
  name: 'section4',

  methods: {},

  data() {
    return {
      isMobile,
    }
  },
}
</script>
