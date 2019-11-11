<template>
  <div class="map" id="map">
    <img :src="hand" alt class="hand" />
    <img class="map-bg" :src="bgSrc" alt />
    <slot></slot>
    <img
      :src="tag"
      data-aos="fade-down"
      :data-aos-delay="`${index + 1}00`"
      :alt="altList[index]"
      v-for="(tag, index) in tagList"
      :key="tag"
    />
  </div>
</template>
<script>
import { isMobile } from '@/utils'
export default {
  name: 'mapComponent',
  props: ['tagList', 'bgSrc', 'hand', 'altList'],
  data() {
    return {
      isMobile,
    }
  },
  mounted() {
    if (this.isMobile) {
      setTimeout(() => {
        const map = document.querySelector('.map')
        const mapBg = document.querySelector('.map-bg')
        const text = document.querySelector('.map .text')
        if (text) {
          text.style.left = `${mapBg.clientWidth / 2 - 100}px`
        }
        const hand = document.querySelector('.map .hand')

        if (hand) {
          // hand.style.left = `${mapBg.clientWidth / 2 - 50}px` 置中
          hand.style.left = `${mapBg.clientWidth - (window.innerWidth / 2) - 30}px`
        }

        // map.scrollTo(mapBg.clientWidth / 2 - window.innerWidth / 2, 0) 置中
        map.scrollTo(1200, 0)
      }, 500)
    }
  },
}
</script>
