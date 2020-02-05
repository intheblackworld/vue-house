<template>
  <div class="section1">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s1/bg.jpg" alt="" class="img">
        <img src="./s1/light1.png" alt="" class="img">
        <img src="./s1/light2.png" alt="" class="img">
        <img src="./s1/light3.png" alt="" class="img">
        <img src="./s1/light4.png" alt="" class="img">
        <img src="./s1/logo.png" alt="" class="img">
        <!-- <img src="./s1/logo.png" alt="頤昌豐岳" class="img" data-aos="fade" data-aos-delay="700" /> -->
        <!-- <icon class="icon logo-icon" :data="logo" /> -->
      </div>
      <div v-else>
        <img src="./s1/mo/bg.jpg" alt="" class="img">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// for svg
</style>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
}

.img {
  width: 100vw;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  display: block;
  
  &:nth-child(1) {
    position: relative;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
  }

  .section1 {
    .bg {
      overflow: hidden;
    }
  }

  .img {
    &:nth-child(1) {
      position: relative;
    }
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

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
