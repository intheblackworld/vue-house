<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img src="./s9/bg.jpg" alt="" class="bg-img">
      <div class="title absolute" data-aos="fade-up" data-aos-delay="300">
        Space
      </div>
      <h3 class="desc absolute" data-aos="fade-up" data-aos-delay="500">
        空間大一點 生活大不同
      </h3>
    </div>
    <div
      v-else
      class="relative"
    >
      <img src="./mo/9/bg.jpg" alt="" class="bg-img">
      <div class="title absolute" data-aos="fade-up" data-aos-delay="300">
        Space
      </div>
      <h3 class="desc absolute" data-aos="fade-up" data-aos-delay="500">
        空間大一點 生活大不同
      </h3>
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
  font-size: size(94.6);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: -3.78px;
  text-align: left;
  color: #b0b1b1;
  top: size(245);
  left: size(249);
}

.desc {
  font-size: size(39);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: 5.46px;
  text-align: left;
  color: #595757;
  top: size(369);
  left: size(254);
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
  .bg-img {
    height: auto;
    object-fit: cover;
  }

  .title {
    font-size: size-m(85);
    top: size-m(30);
    left: size-m(31);
  }

  .desc {
    font-size: size-m(21);
    top: size-m(143);
    left: size-m(31);
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section9',

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
