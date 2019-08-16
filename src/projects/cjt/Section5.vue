<template>
  <div class="section5">
    <img
      v-if="!isMobile"
      class="bg-img"
      data-aos="fade"
      data-aos-duration="1500"
      src="./s5_bg.jpg"
      alt
    />
    <div v-else class="bg-img" data-aos="fade" data-aos-duration="1500">
      <vue-photo-zoom-pro :url="require('./s5_bg_m.jpg')" :high-url="require('./s5_bg.jpg')" type="circle"></vue-photo-zoom-pro>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg-img {
  width: 100vw;
  height: auto;
  display: block;
  img {
    width: 100vw;
    height: auto;
    display: block;
  }
}

@media screen and (max-width: 767px) {
  .img {
    display: none;
  }
  .imgM {
    display: block;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section5',

  methods: {},

  data() {
    return {
      isMobile,
    }
  },
}
</script>
