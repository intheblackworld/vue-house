<template>
  <div class="map" :id="mapId" ref="map" @scroll="handleScroll">
    <img :src="hand" alt :class="`hand ${showMask ? 'active' : ''}`" />
    <img class="map-bg" :src="bgSrc" alt ref="mapbg" />
    <img class="map-text" :src="bgText" alt v-if="bgText" />
    <div :class="`mask ${showMask ? 'active' : ''}`">
    </div>
    <img
      :src="tag"
      data-aos="fade-down"
      :data-aos-delay="`${index + 1}00`"
      alt
      v-for="(tag, index) in tagList"
      :key="tag"
    />
  </div>
</template>
<style lang="scss" scoped>
@import '../assets/style/function.scss';
.map {
  // padding-top: size-m(150);
  background-color: rgba(172, 221, 254, 1)
}
.desc {
  width: size-m(310);
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-left: size-m(450);
  margin-top: size-m(80);
  font-size: size-m(15);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: 1.5px;
  text-align: left;
  color: #231815;

}
</style>
<script>
import { isMobile } from '@/utils'
export default {
  name: 'map',
  props: ['tagList', 'bgSrc', 'scrX', 'hand', 'bgText', 'mapId'],
  data() {
    return {
      isMobile,
      map: '',
      showMask: false,
      mapId: this._uid // 使用组件的唯一ID
    }
  },
  mounted() {
    this.map = this.$refs.map

    if (this.isMobile) {
      setTimeout(() => {
        const map = this.$refs.map
        const mapBg = this.$refs.mapbg
        const text = document.querySelector('.map .text')
        if (text) {
          text.style.left = `${mapBg.clientWidth / 2 - 100}px`
        }
       console.log(this.scrX);
       map.scrollTo(mapBg.clientWidth / 2 - window.innerWidth / 2 + this.scrX, 0)
      }, 1200)

      setTimeout(() => {
        this.showMask = true
      }, 1500)
    }
  },
  methods: {
    handleScroll() {
      this.showMask = false
    }
  },
}
</script>
