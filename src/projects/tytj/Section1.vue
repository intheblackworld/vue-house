<template>
  <div class="relative">
    <img
      src="./s1/logo.png"
      alt="泰御天鑄"
      class="absolute logo"
      data-aos="fade-up"
      data-aos-delay="600"
    >
    <img
      src="./s1/wlogo.png"
      alt="泰御天鑄"
      class="absolute logo-t"
      data-aos="fade"
      data-aos-delay="400"
    >
    <img
      src="./s1/wlogo.png"
      alt="泰御天鑄"
      class="absolute logo-b"
      data-aos="fade"
      data-aos-delay="400"
    >
    <h3
      class="absolute title"
      data-aos="fade-up"
      data-aos-delay="800"
    >泰欣系統以一流的機電環控<br />建立安心居住、放心生活的家園</h3>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  // overflow: hidden;
  position: relative;
  height: size(1080);
  background-attachment: fixed;
  background-image: linear-gradient(
    to right,
    #edbd5b,
    #edbc5b 29%,
    #d6a045 66%,
    #bf842e
  );
}
.logo {
  width: size(476);
  top: size(183);
  left: 0;
  right: 0;
  margin: 0 auto;
}

.logo-t {
  width: size(472);
  right: size(292 - 472);
  top: size(319 - 472);
}

.logo-b {
  width: size(472);
  left: size(275 - 472);
  top: size(846);
}

.title {
  text-shadow: 0 3px 12px rgba(0, 0, 0, 0.4);
  font-size: size(55);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: 12.1px;
  text-align: center;
  color: #ffffff;
  top: size(681);
  left: 0;
  right: 0;
  margin: 0 auto;
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
    height: size-m(441 + 244);
  }

  .logo {
    width: size-m(179);
    top: size-m(164);
    left: size-m(98);
    right: auto;
    margin: 0 auto;
  }

  .logo-t {
    width: size-m(375);
    right: 0;
    top: size-m(129 - 375);
    opacity: .5 !important;
  }

  .logo-b {
    width: size-m(244);
    left: 0;
    right: 0;
    margin: 0 auto;
    top: size-m(441);
    opacity: .5 !important;
  }

  .title {
    text-shadow: 0 3px 12px rgba(0, 0, 0, 0.4);
    font-size: size-m(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: 4.4px;
    text-align: center;
    color: #ffffff;
    top: size-m(351);
    left: 0;
    right: 0;
    margin: 0 auto;
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

  mounted() {},

  computed: {},
}
</script>
