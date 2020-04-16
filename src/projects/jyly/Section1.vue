<template>
  <div class="relative">
    <div>
      <div
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <img
          :src="isMobile ? require('./s1/mo/1.png') : require('./s1/1.png')"
          alt=""
          class="bg-img tree1"
        >
      </div>
      <div
        data-aos="fade-right"
        data-aos-delay="600"
      >
        <img
          :src="isMobile ? require('./s1/mo/2.png') : require('./s1/2.png')"
          alt=""
          class="bg-img tree2"
        >
      </div>
      <img
        :src="isMobile ? require('./s1/mo/3.png') : require('./s1/3.png')"
        alt=""
        class="bg-img"
        data-aos="fade"
        data-aos-delay="900"
      >
      <img
        :src="isMobile ? require('./s1/mo/logo.png') : require('./s1/logo.png')"
        alt=""
        class="bg-img"
        data-aos="fade"
        data-aos-delay="900"
      >
      <div
        class="btn"
        v-scroll-to="{ element: `#contact` }"
        data-aos="fade"
        data-aos-delay="1100"
      >立即預約</div>
      <ul class="poetry">
        <li
          data-aos="fade"
          data-aos-delay="300"
        >在水墨之間藝文行旅</li>
        <li
          data-aos="fade"
          data-aos-delay="500"
        >在新舊之間味蕾散步</li>
        <li
          data-aos="fade"
          data-aos-delay="700"
        >臨沂街 靜邀</li>
        <li
          data-aos="fade"
          data-aos-delay="900"
        >難得一遇的美好</li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(3) {
    position: relative;
  }
}

.tree1 {
  animation: skew1 5s 0s ease-in-out infinite;
  transform-origin: bottom;
}

.tree2 {
  animation: skew2 3s 1s ease-in-out infinite;
  transform-origin: bottom;
}

@keyframes skew1 {
  0% {
    transform: skew(-2deg);
  }

  50% {
    transform: skew(-1deg);
  }

  100% {
    transform: skew(-2deg);
  }
}

@keyframes skew2 {
  0% {
    transform: skew(2deg);
  }

  50% {
    transform: skew(1deg);
  }

  100% {
    transform: skew(2deg);
  }
}

.btn {
  width: size(262);
  height: size(85);
  color: #fff;
  font-size: size(30);
  font-family: youmin;
  background: #c00d23;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: size(605);
  left: size(963);
  cursor: pointer;
}

.poetry {
  font-family: youmin;
  position: absolute;
  top: size(1255);
  left: size(1030);
  writing-mode: vertical-rl;
  text-orientation: upright;
  li {
    font-size: size(27);
    margin: 0 15px;
    text-align: left;
    color: #000;
  }
}
@media only screen and (max-width: 1440px) {
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
  .tree2 {
    top: size-m(650) !important;
    position: relative !important;
  }

  .bg-img {
    width: 100vw;
    height: auto;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    object-fit: cover;

    &:nth-child(3) {
      position: relative;
    }
  }

  .btn {
    width: size-m(132);
    height: size-m(42);
    font-size: size-m(15);
    top: size-m(582);
    left: size-m(62);
  }

  .poetry {
    font-family: youmin;
    position: absolute;
    top: size-m(855);
    left: size-m(120);
    writing-mode: vertical-rl;
    text-orientation: upright;
    li {
      font-size: size-m(18);
      margin: 0 15px;
      text-align: left;
      color: #000;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isMobile,
      isTablet,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
