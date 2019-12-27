<template>
  <div class="section2">
    <Map :tagList="tagList" :bgSrc="bgSrc" :hand="hand">
      <img src="./s2/mo/b.png" alt="" class="mask" v-if="isMobile">
      <img src="./s2/mo/11.png" alt="" class="line" v-if="isMobile">
    </Map>
  </div>
</template>
<style lang="scss" scoped>
.section2 {
  position: relative;
}
.map {
}

.m-content {
  position: absolute;
  .mask {
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
    z-index: 2;
  }

  .line {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 1281px) and (max-width: 1440px) {
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  .map {
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
}
</style>

<script>
import Map from '@/components/Map.vue'
import { isMobile } from '@/utils'
export default {
  name: 'section2',

  components: {
    Map,
  },

  data() {
    return {
      isMobile,
      mapIndex: 0,
      mapText: [
        {
          title: '',
          desc: '',
        },
        {
          title: '',
          desc: '',
        },
      ],
      tagList: isMobile
        ? [require('./s2/mo/10.png')]
        : [
            require('./s2/13.png'),
            require('./s2/12.png'),
            require('./s2/11.png'),
            require('./s2/10.png'),
          ],

      bgSrc: isMobile ? require('./s2/mo/bg.jpg') : require('./s2/s2bg.jpg'),
      hand: require('./s2/mo/箭頭.png'),
    }
  },

  methods: {},
}
</script>
