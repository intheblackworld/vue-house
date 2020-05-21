<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        src="./s10/1.jpg"
        alt=""
        class="bg-img"
      >
      <div
        class="title absolute"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Large scale
      </div>
      <div
        class="desc absolute"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        - 大器尺度 -
      </div>
      <div
        class="img-title absolute"
        data-aos="fade"
        data-aos-delay="700"
      >

        挑高迎賓門廳 飯店式休閒公設<br />限量典藏70席
      </div>
      <div
        class="img-desc absolute"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        經典雋永的建築外觀，搭配挑高迎賓大廳，精緻且實用的公共空間規劃，<br />打造咖啡吧、閱覽室、健身房，透過動靜美學，展現生活品味。
      </div>
      <div class="mask absolute"></div>
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
  color: #fff;
  top: size(72);
  left: size(248);
  z-index: 2;
}

.desc {
  font-size: size(44);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: 1.76px;
  text-align: left;
  color: #fff;
  top: size(145);
  left: size(251);
  z-index: 2;
}

.img-title {
  font-size: size(35);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  top: size(259);
  left: size(254);
  z-index: 2;
}

.img-desc {
  font-size: size(20);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: 1.2px;
  text-align: left;
  color: #fff;
  top: size(396);
  left: size(254);
  z-index: 2;
}

.mask {
  width: size(1123);
  height: size(536);
  background: linear-gradient(to right bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  z-index: 1;
  top: 0;
  left: 0;
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
  name: 'section10',

  components: {},
  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
