<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        src="./s3/bg.jpg"
        alt="泰御天鑄"
        class="absolute map"
      >
      <img
        src="./s3/m.png"
        alt="泰御天鑄"
        class="absolute tag"
        data-aos="fade-down"
        data-aos-delay="400"
      >
      <img
        src="./s3/b1[5].png"
        alt="泰御天鑄"
        class="absolute cloud1"
        data-aos="fade"
        data-aos-delay="600"
        data-aos-duration="1600"
      >
      <img
        src="./s3/b1[7].png"
        alt="泰御天鑄"
        class="absolute cloud2"
        data-aos="fade"
        data-aos-delay="600"
        data-aos-duration="1600"
      >
    </div>
    <Map
      :bgSrc="require('./s3/bg.jpg')"
      v-if="isMobile"
    >
      <div slot="main">
        <img
          src="./s3/m.png"
          alt="泰御天鑄"
          class="absolute tag"
          data-aos="fade-down"
          data-aos-delay="400"
        >
      </div>
    </Map>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  position: relative;
  height: size(1080);
}

.map,
.tag {
  width: auto;
  height: size(1080);
  top: 0;
  left: 0;
}

.tag {
  z-index: 4;
}

.cloud1 {
  width: size(1104);
  height: size(502);
  object-fit: cover;
  object-position: center;
  top: size(-30);
  left: size(-350);
  z-index: 2;
  animation: cloud 40s ease-in-out 1s infinite;
}

.cloud2 {
  width: size(802);
  height: size(283);
  object-fit: cover;
  object-position: center;
  top: size(130);
  left: size(630);
  z-index: 3;
  animation: cloud 30s ease-in-out 0s infinite;
}

@keyframes cloud {
  0% {
    transform: translateX(0) scale(1);
  }

  50% {
    transform: translateX(size(-50)) scale(1.1);
  }

  100% {
    transform: translateX(0) scale(1);
  }
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .relative {
    height: size-m(604);
    margin: 0;
  }

  .tag {
    width: auto;
    height: size-m(604);
    top: 0;
    left: 0;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import Map from '@/components/Map.vue'

export default {
  name: 'section3',
  components: {
    Map,
  },
  data() {
    return {
      isMobile,
      isDialog: false,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
