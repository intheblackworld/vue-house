<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        src="./s10/2.jpg"
        alt=""
        class="bg-img"
      >
      <div
        class="title absolute"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Beautiful pattern
      </div>
      <div
        class="desc absolute"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        - 豐美格局 -
      </div>
      <div
        class="img-title absolute"
        data-aos="fade"
        data-aos-delay="700"
      >

        採光通風 大面開窗<br />讓您住一輩子的好房子
      </div>
      <div
        class="img-desc absolute"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        戶戶雙面採光、無暗房，客廳大面開窗，<br />
        享有空氣流通、自然光線流瀉；<br />
        室內無柱、格局開闊，空間自由揮灑，<br />
        可依人生不同階段彈性規劃，不必頻頻換屋。
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
  left: size(1081);
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
  left: size(1084);
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
  top: size(756);
  right: size(211);
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
  top: size(888);
  right: size(134);
  z-index: 2;
}

.mask {
  width: size(772);
  height: size(440);
  background: linear-gradient(to right bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  z-index: 1;
  right: 0;
  bottom: 0;
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
