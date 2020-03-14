<template>
  <div class="section1">
    <div class="bg">
      <div v-if="!isMobile">
        <img v-lazy="require('./s1/bg1.png')" alt class="bg-img" />
        <img :src="require('./s1/toplogo.png')" alt class="top-logo" data-aos="fade" data-aos-delay="300" />
        <img :src="require('./s1/logo.gif')" alt class="logo" data-aos="fade" data-aos-delay="300" />
        <img :src="require('./s1/text.png')" alt class="title-img" data-aos="fade" data-aos-delay="300" />
        <div class="relative" id="section2">
          <img v-lazy="require('./s1/bg2.png')" alt class="bg-img img-1" />
          <img v-lazy="require('./s1/bg3.jpg')" alt class="bg-img img-2" />
        </div>
      </div>
      <div v-else></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.bg {
  background-size: cover;
  background-position: center;
  position: relative;
  height: size(2100);
  background-image: linear-gradient(
    136deg,
    #064849,
    #064849 13%,
    #628963 20%,
    #87a6a2 27%,
    #628963 33%,
    #064849 40%,
    #064849 53%
  );
}
.bg-img {
  width: 100vw;
  position: absolute;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
    // mix-blend-mode: screen;
    // opacity: 0;
  }
}

.bg-all {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
}

.bg-2 {
  position: relative;
}

.img-2 {
  position: relative;
}

.logo {
  width: size(370);
  top: size(262);
  left: 0;
  right: 0;
  margin: 0 auto;
  position: absolute;
}

.top-logo {
  width: size(230);
  left: 0;
  top: 0;
  position: absolute;
}

.title-img {
  width: size(464);
  top: size(735);
  left: 0;
  right: 0;
  margin: 0 auto;
  position: absolute;
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
    max-height: 177.5vw;
  }
  .st02 {
    transform: translateX(200%);
  }
  .light {
    transform: translateX(1000%);
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

  mounted() {},

  computed: {},
}
</script>
