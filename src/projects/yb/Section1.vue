<template>
  <div class="section1">
    <div class="bg" v-if="!isMobile">
      <img src="./s1/img1.jpg" alt="" class="absolute img1">
      <img src="./s1/img2.jpg" alt="" class="absolute img2">
      <img src="./s1/button.png" alt="" class="absolute button">
      <img src="./s1/txt.png" alt="" class="absolute txt">
      <img src="./s1/title.png" alt="" class="absolute title">
      <img src="./s1/nexttofuture.png" alt="" class="absolute slogan">
    </div>
    <div class="bg" v-if="isMobile">
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  // background-color: #fddb3e;
  // background-image: url('./s1/kv_city_bg.jpg');
  background-position: bottom;
  background-repeat: no-repeat;
  overflow: hidden;
  height: size(2260);
  // pointer-events: none;
}

.img1 {
  width: size(900);
  top: size(1060);
  left: size(180);
}

.img2 {
  width: size(900);
  top: size(1060);
  left: size(1155);
}

.button {
  cursor: pointer;
  width: size(213);
  top: size(778);
  right: size(357);
}

.txt {
  width: size(320);
  top: size(522);
  right: size(250);
}

.title {
  width: size(706);
  top: size(709);
  left: size(170);
}

.slogan {
  width: size(830);
  top: size(312);
  left: size(158);
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    position: relative;
    margin: 0;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
// import Parallax from '@/components/Parallax.vue'

export default {
  name: 'section1',

  components: {
    // Parallax,
  },
  data() {
    return {
      isMobile,
    }
  },
  computed: {},

  watch: {},

  methods: {
  },
  created() {
  },
}
</script>
