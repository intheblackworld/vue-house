<template>
  <div class="section3 relative">
    <div class="bg relative" v-if="!isMobile">
      <img src="./s3/bg.jpg" alt="輕井澤" class="bg-img" />
      <div class="text">
        <h3 class="title" data-aos="fade" data-aos-delay="200">國家級綠建築標準</h3>
        <div class="subtitle" data-aos="fade" data-aos-delay="400">台南首座低碳綠能示範社區 宜居首選</div>
      </div>
    </div>
    <div class="bg relative" v-else>
       <img src="./s3/mo/bg.jpg" alt="輕井澤" class="bg-img" />
      <div class="text">
        <h3 class="title" data-aos="fade" data-aos-delay="200">國家級綠建築標準</h3>
        <div class="subtitle" data-aos="fade" data-aos-delay="400">台南首座低碳綠能示範社區 宜居首選</div>
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
    letter-spacing: 1px;
    text-align: center;
    color: #ffffff;
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
