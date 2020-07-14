<template>
  <div class="section2">
    <div class="relative">
      <img src="./s2/bg.jpg" alt="" class="bg-img" v-if="!isMobile">
      <Map :bgSrc="bgSrc" :hand="require('./箭頭.png')" v-if="isMobile">
      </Map>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.relative {
  overflow: hidden;
  position: relative;
  height: size(1080);
}

.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;
  &:first-child {
    position: relative;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
    // background-image: url('./s1/s1_bg_m.jpg');
    background-size: cover;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import Map from '@/components/Map.vue'
export default {
  name: 'section2',

  components: {
    Map,
  },

  data() {
    return {
      isMobile,
      bgSrc: require('./s2/bg.jpg')
    }
  },

  methods: {},

  created() {
  },
}
</script>
