<template>
  <div class="relative">
    <div v-if="!isMobile">
      <div class="img-row flex-ac flex-jc">
        <img
          :src="img"
          v-for="(img, index) in imgList"
          :key="img"
          data-aos="flip-left"
          :data-aos-delay="200 + index * 100"
          class="img"
        >
      </div>
    </div>
    <div v-if="isMobile">
      <div class="img-row flex-ac flex-jc">
        <img
          :src="img"
          v-for="(img, index) in [...imgList, ...imgList]"
          :key="img + index"
          class="img"
        >
      </div>
    </div>
    <div class="flex animate-row">
      <img
        src="./s2/wave_l.png"
        alt=""
        class="wave"
      >
      <img
        src="./s2/wave_l.png"
        alt=""
        class="wave"
      >
    </div>
    <div class="flex animate-row animate-row1">
      <img
        src="./s2/wave_l.png"
        alt=""
        class="wave"
      >
      <img
        src="./s2/wave_l.png"
        alt=""
        class="wave"
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  // overflow: hidden;
  position: relative;
  height: size(915);
}
.img-row {
  width: 100vw;
  margin-top: size(251);
}
.img {
  width: size(326);
  margin: 0 6px;
}

.animate-row {
  width: 200vw;
  animation: moving 30s linear infinite;
  position: absolute;
  bottom: size(0);
  img {
    height: size(79);
  }

  img {
    width: 100%;
    height: size(79);

    &:nth-child(2) {
      // margin-left: -0.1%;
    }
  }
  &.animate-row1 {
    animation: moving 15s linear infinite;
  }

  &.animate-row2 {
    bottom: size(100);
    animation: moving 20s linear infinite;

    img {
      height: size(79);
    }
    // animation-delay: 5s;
  }
}

@keyframes moving {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0) scaleY(1);
  }
  50% {
    -webkit-transform: translateX(0);
    transform: translateX(-25%) scaleY(0.5);
  }

  to {
    -webkit-transform: translateX(-100vw);
    transform: translateX(-50%) scaleY(1);
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
    height: size-m(360);
  }

  .img-row {
    width: size-m(904 * 2);
    animation: moveImg 30s linear infinite;
  }

  .img {
    width: size-m(170);
  }

  @keyframes moveImg {
    0% {
      transform: translateX(0);
    }
    50% {
      -webkit-transform: translateX(0);
      transform: translateX(-25%);
    }

    to {
      -webkit-transform: translateX(-100vw);
      transform: translateX(-50%);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section9',
  data() {
    return {
      isMobile,
      imgList: [
        require('./s9/1.png'),
        require('./s9/2.png'),
        require('./s9/3.png'),
        require('./s9/4.png'),
        require('./s9/5.png'),
      ],
    }
  },

  methods: {},
  created() {},

  mounted() {},

  computed: {},
}
</script>
