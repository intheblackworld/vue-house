<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img src="./s6/bg.jpg" alt="" class="bg-img cloud">
      <div class="title absolute" data-aos="fade-up" data-aos-delay="300">
        Unique
      </div>
      <h3 class="desc absolute" data-aos="fade-up" data-aos-delay="500">
        ２字頭景觀宅 首購買最好
      </h3>
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
  font-size: size(94.6);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: -3.78px;
  text-align: left;
  color: #ffffff;
  top: size(96);
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
  color: #ffffff;
  top: size(215);
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
  name: 'section6',

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
