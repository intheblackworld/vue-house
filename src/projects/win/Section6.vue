<template>
  <div class="section6">
    <div
      v-if="!isMobile"
      class="container"
    >
    <img v-lazy="require('./s6/img.png')" alt="" class="img">
    </div>
    <div
      v-else
      class="container"
    >
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.container {
  width: 1380px;
  margin: 0 auto;
  position: relative;
}

.img {
  width: 100%;
  height: auto;
}


@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
  .container {
    width: 1080px;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .m-bg {
    background-color: #112d81;
    position: relative;
    overflow: hidden;
  }
  .left {
    width: size-m(330);
    height: auto;
    position: relative;
    top: 0;
    transform: translate(0, 0);
    img {
      height: 100%;
      &.left-img {
        width: size-m(87);
      }
    }
    > div {
      font-size: size-m(12);
    }
  }
  .bottom {
    width: size-m(330);
    margin: size-m(30) auto size-m(90) auto;
    display: flex;
    position: relative;
  }

  .swiper-fullscreen {
    width: auto;
    height: 100vh;
    img {
      width: auto;
      height: 100%;
    }
  }

  .m-img {
    width: 100vw;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
  .m-content {
    width: size-m(145);
  }

  .title {
    font-size: size-m(47);
  }

  .subtitle {
    font-size: size-m(15);
  }

  .desc {
    font-size: size-m(12);
  }

  .logo {
    width: 100vw;
    height: auto;
    position: absolute;
    top: auto;
    bottom: 0;
    right: auto;
    left: 0;
    transform: none;
  }

  .swiper-pagination {
    // transform: none;
    // width: 100%;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // top: auto;
    bottom: 5%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: size-m(30);
    padding: 0 size-m(5);
    cursor: none;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section6',

  data() {
    return {
      isMobile,
    }
  },

  methods: {
  },

  mounted() {},

  computed: {},
}
</script>
