<template>
  <div class="map" id="map" refs="map" @scroll="handleScroll">
    <img class="map-bg" :src="bgSrc" alt ref="mapbg" />
    <img class="map-text" :src="bgText" alt />
    <div v-show="showMask" class="mask">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAA5BAMAAAA8fHhNAAAAHlBMVEUAAAD///////////////////////////////////8kfJuVAAAACXRSTlMAGzpif5arwOhINSRyAAABjUlEQVR4Xu2Zr2/CUBCAr+OnrGO4BYcjWbJkDoubxZFM1YFidUwtyDFo+f7bCbIU1lbcdek9sc+THN+7vnc/5IZlFksbRMlJahnBWtpgABupI4VPaYMx5PURwkHaYEq99RTYSRsMgbxeBTNREk0eJ+qU7lArIwG+tDE87YHzqzaOZyCTCvoGFXcJF7IHg4zV36iIUn7IY6OM5ioWFBxtMpqrGHHNxiKjuYpozzXnuLmMRC/1nlvelcdZltEDmBtU2GV0AV7kmqVexYDfrPUyTnYVhdFbjmKUYVcRUSY2yrCrGFBm3UjGQq9CppQ5iF7GsRSThoQymagozqA4H1ta2BOjyEe7ig5VzEwyzCqkTxUrscromn4+pIqd6c/Mi/tcyZgy6gq+eL96AB9bLSlV5Fstb5ekXOLPSQiB/ygKwsiLML6RIO6LYO5O/3ckmDfVv74Iqtbyrzv9a/CQ+hH/3sy/Tw2tZ/efX/jPcvznWoHO+Pznnf6zX/85uP9OwH8/EvSuyH9v5r9D9N+nfgOiNJLIlvzfWAAAAABJRU5ErkJggg==" alt class="hand" />
    </div>
    <slot name="main"></slot>
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
<script>
import { isMobile } from '@/utils'
export default {
  name: 'map',
  props: ['tagList', 'bgSrc', 'bgSrcT', 'bgSrcB', 'hand', 'bgText'],
  data() {
    return {
      isMobile,
      map: '',
      showMask: false,
    }
  },
  mounted() {
    this.map = this.$refs.map

    if (this.isMobile) {
      setTimeout(() => {
        const map = document.querySelector('.map')
        const mapBg = document.querySelector('.map-bg')
        const text = document.querySelector('.map .text')
        if (text) {
          text.style.left = `${mapBg.clientWidth / 2 - 100}px`
        }

        map.scrollTo(mapBg.clientWidth / 2 - window.innerWidth / 2.6, 0)
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
