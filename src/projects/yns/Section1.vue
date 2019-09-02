<template>
  <div class="section1">
    <div class="bg fullscreen">
      <div v-if="!isMobile">
        <img src="./s1/1.png" alt class="img" data-aos="fade-down" data-aos-delay="0" />
        <img src="./s1/2.png" alt class="img" data-aos="fade-down" data-aos-delay="300" />
        <img src="./s1/3.png" alt class="img" data-aos="fade-down" data-aos-delay="600" />
        <img src="./s1/4.png" alt class="img" data-aos="fade" data-aos-delay="900" />
        <div class="text" data-aos="fade-down" data-aos-delay="900">
          弘華機構-和彩建設
          <br />在地深耕用心建築，值得您細心鑑賞
        </div>
      </div>
      <div v-else>
        <img src="./s1/m1.png" alt class="img1" data-aos="fade-down" data-aos-delay="0" />
        <img src="./s1/m2.png" alt class="img2" data-aos="fade-down" data-aos-delay="300" />
        <img src="./s1/m3.png" alt class="img3" data-aos="fade-down" data-aos-delay="600" />
        <img src="./s1/m4.png" alt class="img4" data-aos="fade-down" data-aos-delay="900" />
        <div class="text" data-aos="fade-down" data-aos-delay="900">
          弘華機構-和彩建設
          <br />在地深耕用心建築，值得您細心鑑賞
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-color: #fff;
  background-image: url('./s1/bg.png');
  position: relative;
  overflow: hidden;
  position: relative;
}

.img {
  width: 1920px;
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  margin-left: -960px;
  object-fit: contain;
}

.text {
  text-align: center;
  position: absolute;
  top: 84%;
  font-size: 2.8vh;
  line-height: 1.4;
  left: 0;
  width: 100%;
  color: #00a398;
  font-weight: bold;
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
  }

  img {
    position: absolute;
  }

  .img1 {
    width: 20vw;
    top: 50%;
    right: 0;
    z-index: 2;
  }

  .img2 {
    width: 100vw;
    right: 0;
    top: 30%;
  }

  .img3 {
    width: 70vw;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
  }

  .img4 {
    width: 50vw;
    top: 40%;
    right: 0;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},
}
</script>
