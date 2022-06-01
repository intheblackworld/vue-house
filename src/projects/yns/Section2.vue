<template>
  <div class="section2">
    <div class="bg fullscreen">
      <img loading="lazy"
        src="./s2/map.jpg"
        alt
        class="map"
        data-aos="fade-down"
        data-aos-delay="0"
      />
      <img loading="lazy"
        src="./s2/map1.png"
        alt
        class="icon"
      />
      <img loading="lazy"
        src="./s2/map2.png"
        alt
        class="icon2"
      />
      <!-- img
        src="./s2/map_icon.png"
        v-if="!isMobile"
        alt
        class="icon"
        data-aos="fade-down"
        data-aos-delay="500"
      />
      <img
        src="./s2/map_icon.png"
        alt
        class="icon2"
        data-aos="fade-down"
        data-aos-delay="500"
      />
      <img
        src="./s2/map.jpg"
        alt
        class="map"
        v-if="isMobile"
        data-aos="fade-down"
        data-aos-delay="0"
      / -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-color: #006f36;
  //background-image: url('./s1/bg.png');
  position: relative;
  overflow: hidden;
  position: relative;
}

.map {
  max-height: 100vh;
  max-width: 100vw;
  width: auto;
  margin: 0 auto;
}

.icon, .icon2 {
  position: absolute;
  max-height: 100vh;
  max-width: 100vw;
  width: auto;
  left: 0;
  right: 0;
  top: 0;
  margin: 0 auto;
  z-index: 2;
}

.icon {transform: translateY(3%);
  animation: heartbeat 3s linear alternate infinite;
}
.icon2 {transform: translateY(-1%);
  animation: heartbeat .5s ease-in alternate infinite;
}

@keyframes heartbeat {
  to{
   transform: translateY(0)
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
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
  }

  .fullscreen {
    height: auto !important;
  }

  .map {
    margin-top: 0;
    width: 100vw;
    height: auto;
    position: relative;
  }

  .icon, .icon2 {
    width: 100vw;
    height: auto;
    margin-top: 0;
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

  created() {},
}
</script>
