<template>
  <div class="section11 relative">
    <div class="bg relative" v-if="!isMobile">
      <img src="./s11/bg1.jpg" alt="輕井澤" class="bg-img" />
      <img src="./s11/bg2.jpg" alt="輕井澤" class="bg-img" />
      <div class="text">
        <div class="subtitle" data-aos="fade" data-aos-delay="200">PC基樁＋全區筏式基礎規劃</div>
        <h3 class="title" data-aos="fade" data-aos-delay="400">建築安全堡壘</h3>
      </div>
      <div class="text-bottom">
        <div class="subtitle" data-aos="fade" data-aos-delay="200">取經日本建築大師 打造當代美感建築 </div>
        <h3 class="title" data-aos="fade" data-aos-delay="400">職人精神 藏美實現</h3>
      </div>
    </div>
    <div class="bg relative" v-else>
       <img src="./s11/mo/bg1.jpg" alt="輕井澤" class="bg-img" />
        <img src="./s11/mo/bg2.jpg" alt="輕井澤" class="bg-img" />
      <div class="text">
        <div class="subtitle" data-aos="fade" data-aos-delay="200">PC基樁＋全區筏式基礎規劃</div>
        <h3 class="title" data-aos="fade" data-aos-delay="400">建築安全堡壘</h3>
      </div>
      <div class="text-bottom">
        <div class="subtitle" data-aos="fade" data-aos-delay="200">取經日本建築大師 打造當代美感建築 </div>
        <h3 class="title" data-aos="fade" data-aos-delay="400">職人精神 藏美實現</h3>
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

  &:nth-child(1), &:nth-child(2) {
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
    letter-spacing: 32.2px;
    margin-left: 25px;
    text-align: center;
    color: #ffffff;
  }

  .subtitle {
    font-size: calc(100vw * (40 / 1920));
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: 12.4px;
    text-align: center;
    color: #ffffff;
  }
}

.text-bottom {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: auto;
  bottom: calc(100vw * (100 / 1920));
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
    letter-spacing: 2px;
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
      letter-spacing: 3px;
      margin-left: 0;
    }

    .subtitle {
      font-size: 15px;
      letter-spacing: 3px;
    }
  }
  
  .text-bottom {
    bottom: calc(100vw * (50 / 375));
    .title {
      font-size: 35.4px;
      letter-spacing: 1.42px;
    }

    .subtitle {
      font-size: 15px;
      letter-spacing: 3.5px;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section11',

  methods: {},

  data() {
    return {
      isMobile,
    }
  },
}
</script>
