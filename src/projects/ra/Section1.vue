<template>
  <div>
    <div
      v-if="!isMobile"
      class="section1"
    >
      <img
        src="./s1/1.png"
        alt=""
        class="bg-img"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
      <div
        class="tree absolute"
        data-aos="fade-right"
        data-aos-delay="400"
        data-aos-duration="600"
      >
        <img
          class="tree-img"
          src="./s1/img.png"
          alt=""
        >
      </div>
      <img
        src="./s1/logo.png"
        alt=""
        class="logo absolute"
        data-aos="fade-down"
        data-aos-delay="800"
        data-aos-duration="1000"
      >
      <div
        class="btn flex-c absolute"
        data-aos="fade-down"
        data-aos-delay="1000"
        data-aos-duration="1000"
        v-scroll-to="{ element: `#contact` }"
      >
        <h3>立即預約</h3>
      </div>
      <div class="cloud-box absolute">
        <img
          src="./s1/雲 (1).png"
          alt=""
          class="cloud cloud1 absolute"
        >
        <img
          src="./s1/雲2 (1).png"
          alt=""
          class="cloud cloud2 absolute"
        >
        <img
          src="./s1/雲 (1).png"
          alt=""
          class="cloud cloud3 absolute"
        >
        <img
          src="./s1/雲2 (1).png"
          alt=""
          class="cloud cloud4 absolute"
        >
      </div>
    </div>

    <div
      v-if="isMobile"
      class="section1"
    >

    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: 100vh;
  min-height: 900px;
  background-image: url('./s1/bg.png');
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  min-height: 900px;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 2;

  &:nth-child(1) {
    position: relative;
  }
}

.tree {
  width: size(441);
  top: size(50);
  left: size(0);
  z-index: 2;
  .tree-img {
    width: 100%;
    position: absolute;
    top: size(50);
    left: size(0);
    height: auto;
    animation: tree 2.5s 0s ease infinite alternate-reverse;
  }
}

@keyframes tree {
  to {
    top: size(80);
    transform: skew(0, 3deg);
  }
}

.logo {
  width: size(298);
  top: size(69);
  left: size(811);
  z-index: 2;
}

.btn {
  width: size(200);
  height: size(66);
  top: size(300);
  left: size(862);
  background-color: #a68367;
  font-size: size(35);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: 7px;
  text-align: left;
  color: #ffffff;
  cursor: pointer;
  z-index: 3;

  &::after {
    content: '';
    position: absolute;
    width: size(200);
    height: size(66);
    top: size(0);
    left: size(0);
    background-color: transparent;
    box-shadow: 0 0 0 1px #a68367;
    animation: trans 0.5s 3s ease-in-out forwards;
  }
}

@keyframes trans {
  to {
    top: size(10);
    left: size(10);
  }
}

.cloud-box {
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  perspective: 200px;
}

.cloud {
  width: auto;
  height: 100%;
  z-index: 0;
  height: 100%;
  bottom: 0;
  opacity: 0;
  transform: translateZ(0);
  transform-style: preserve-3d;
}

.cloud1 {
  left: -50%;
  animation: cloudInfinite 8s linear infinite forwards;
}

.cloud2 {
  left: -100px;
  animation: cloudInfinite 8s linear 4s infinite forwards;
}

.cloud3 {
  bottom: -20%;
  right: -50%;
  left: auto;
  animation: cloudInfinite 8s linear 4s infinite forwards;
}

.cloud4 {
  bottom: -50%;
  right: -50%;
  left: auto;
  animation: cloudInfinite 8s linear 4s infinite forwards;
}

@keyframes cloudInfinite {
  0% {
    transform: translateZ(0);
    opacity: 0;
  }
  20% {
    transform: translateZ(10px);
    opacity: 1;
  }
  80% {
    transform: translateZ(90px);
    opacity: 1;
  }
  99% {
    transform: translateZ(100px);
    opacity: 0;
  }
  to {
    transform: translateZ(0);
    opacity: 0;
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
  .section1 {
    width: 100vw;
    height: size-m(667);
    background-image: url('./mo/1/bg.jpg');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: 100vw;
    height: auto;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    object-fit: cover;

    &:nth-child(1) {
      position: relative;
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
