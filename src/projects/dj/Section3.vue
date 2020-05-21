<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img src="./s3/bg.jpg" alt="" class="bg-img">
      <img src="./s3/txt.png" alt="" class="bg-img">
      <div class="title absolute" data-aos="fade-up" data-aos-delay="300">
        Transportation core
      </div>
      <div class="desc absolute" data-aos="fade-up" data-aos-delay="500">
        - 交通核心 -
      </div>
      <div class="img-title absolute" data-aos="fade" data-aos-delay="700">
        南崁、桃園市區、青埔、機場...<br />車程10~18分鐘即達！
      </div>
      <div class="img-desc absolute" data-aos="fade-up" data-aos-delay="900">
        「豐郡大景」位居交通中心—大竹重劃區，<br />鄰近一高、二高、機場支線，將通便捷，房價親民。
      </div>
      <img src="./s3/img1.jpg" alt="" class="img1 absolute" data-aos="fade-left" data-aos-delay="700">
      <img src="./s3/img2.jpg" alt="" class="img2 absolute" data-aos="fade-left" data-aos-delay="900">
    </div>
    <div
      v-else
      class="fullscreen"
    >
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
}
.bg-img {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.title {
  font-family: TrajanPro;
  font-size: size(60);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: -2.37px;
  text-align: left;
  color: #808080;
  top: size(72);
  left: size(248);
}

.desc {
  font-size: size(44);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: 1.76px;
  text-align: left;
  color: #231815;
  top: size(145);
  left: size(251);
}

.img-title {
  font-size: size(35);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  top: size(367);
  left: size(254);
}

.img-desc {
  font-size: size(20);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: 1.2px;
  text-align: left;
  color: #ffffff;
  top: size(482);
  left: size(254);
}

.img1 {
  width: size(435);
  top: size(240);
  left: size(1050);
}

.img2 {
  width: size(277);
  top: size(240);
  left: size(1495);
}
@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .logo {
    width: 80%;
    top: auto;
    left: 0;
    bottom: 0;
    right: auto;
    margin: 0 auto;
    position: absolute;
    z-index: 1;
    height: auto;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section3',

  components: {
  },
  data() {
    return {
      isMobile,
    }
  },

  methods: {
  },

  created() {
  },

  mounted() {},

  computed: {},
}
</script>
