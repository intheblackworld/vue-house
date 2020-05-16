<template>
  <div class="section1">
    <div class="bg">
      <img :src="`${isMobile ? require('./s1/logo_m.png') : require('./s1/logo.png')}`" alt="" class="logo">
    </div>
  </div>
</template>
<style lang="scss">
.Masthead,
.Masthead__image {
  height: auto ;
  min-height: 23.875rem;
}
.Masthead__image > img {
  height: auto ;
  min-height: auto ;
  object-fit: contain;
}

.Masthead__image.is-parallax > img {
  height: auto ;
  min-height: auto ;
}
.is-parallax{transition: all 0.3s;}

@media (max-width: 768px) {
  .Masthead,
  .Masthead__image {
    height: auto !important;
    min-height: 12.875rem;
  }
}
</style>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  height: 100vh;
  max-height: 1080px;
  background-color: #FDDB3E;
  // background-image: url('./s1/kv_city_bg.jpg');
  background-position: bottom;
  background-repeat: no-repeat;
}

img {
  width: 100%;
}

.logo {
  position: absolute;
  width: calc(100vw * 570 / 1920);
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
}

// an 2s infinite alternate;
@keyframes an{
    to {
      transform: translateY(0);
    }
}


/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    height: 100vh;
    position: relative;
    margin: 0;
  }

  .logo {
    width: calc(100vw * 160 / 375);
  }
}

</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import Parallax from '@/components/Parallax.vue'

export default {
  name: 'section1',

  components: {
    Parallax,
  },

  data() {
    return {
      isMobile,
      hide: false,
    }
  },

  computed: {},

  methods: {},

  created() {},
}
</script>
