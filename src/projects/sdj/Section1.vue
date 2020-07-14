<template>
  <div class="relative">
    <div>
      <img
        src="./s1/area1_bg.png"
        alt=""
        class="bg-img city"
      >
      <img
        src="./s1/area1_cover.png"
        alt=""
        class="bg-img cover"
      >
      <img
        src="./s1/area1_title.png"
        alt=""
        class="title absolute"
        data-aos="fade"
        data-aos-delay="400"
      >
      <img
        src="./s1/area1_loocation.png"
        alt=""
        class="location absolute"
        data-aos="fade"
        data-aos-delay="600"
      >
      <!-- <img src="./s1/menu_logo.png" alt="" class="menu"> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  background: #eee4cb;
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
.city {
  margin-top: size(700);
}
.location {
  width: size(200);
  top: size(1050);
  left: size(750);
}

.title {
  width: size(560);
  top: size(351);
  left: size(243);
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
  .relative {
    // height: 100vh;
    overflow: hidden;
    background: #eee4cb;
    margin-top: 60px;
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
  .city {
    margin-top: size-m(160);
  }
  .location {
    width: size-m(52);
    top: size-m(180);
    left: size(750);
  }

  .title {
    width: size-m(150);
    top: size(351);
    left: size-m(23);
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section1',

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
