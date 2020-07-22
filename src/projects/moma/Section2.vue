<template>
  <div class="section2">
    <div class="relative">
      <img src="./s2/bg.jpg" alt="bg" class="bg-img" v-if="!isMobile">
      <img src="./s2/bg.gif" alt="bg" class="bg-img imgc" v-if="!isMobile">
      <Map :bgSrc="bgSrc" :hand="require('./箭頭.png')" v-if="isMobile">
      </Map>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  overflow: hidden;
  position: relative;
  height: size(1080);
  border-bottom: 1px solid #fff;
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
  &.imgc{
    width:size(150);left: 50%;transform: translateX(-50%);
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
.relative {
  height:auto;
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
