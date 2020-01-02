<template>
  <div class="section2">
    <div class="bg">
      <div v-if="!isMobile">
        <!-- <img src="./s1/bg1.png" alt class="bg-img relative" data-aos="fade" data-aos-delay="600" /> -->
        <img src="./s2/bg_01.png" alt class="bg-img img-1" />
        <img src="./s2/bg_02.jpg" alt class="bg-img img-2" />
        <img src="./s2/text.png" alt class="bg-img" />
      </div>
      <div v-else>
        <img src="./s1/bg_m.jpg" alt class="bg-img" />
        <img src="./s1/logo置中_m.png" alt class="bg-img" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  background-position: center;
  position: relative;
  position: relative;
  margin-top: -33vw;
}
.bg-img {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}
.img-2 {
  position: relative;
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
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section2',

  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  mounted() {
  },

  computed: {
  },
}
</script>
