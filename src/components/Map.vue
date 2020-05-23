<template>
  <div class="map" id="map" refs="map" @scroll="handleScroll">
    <img class="map-bg" :src="bgSrc" alt ref="mapbg" />
    <img class="map-text" :src="bgText" alt />
    <div v-show="showMask" class="mask">
      <img :src="hand" alt class="hand" />
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

        map.scrollTo(mapBg.clientWidth / 2 - window.innerWidth / 2, 0)
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
