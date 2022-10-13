<template>
  <div class="map" id="map" @scroll="hide = true">
    <img :src="hand" alt :class="`hand ${hide ? 'hide' : ''}`" />
    <div :class="`mask ${hide ? 'hide' : ''}`"></div>
    <img class="map-bg" :src="bgSrc" alt />
    <slot></slot>
    <img src="../projects/great-intersection/s2/map.png" alt="" class="logo">
    <img
      :src="tag"
      data-aos="fade-down"
      :data-aos-delay="`${index + 1}00`"
      alt
      v-for="(tag, index) in tagList"
      :key="tag"
    />
    <div class="name"></div>
  </div>
</template>

<script>
import { isMobile } from '@/utils'
export default {
  name: 'map',
  props: ['tagList', 'bgSrc', 'hand'],
  data() {
    return {
      isMobile,
      hide: false,
    }
  },
  mounted() {
      setTimeout(() => {
        const map = document.querySelector('.map')
        const mapBg = document.querySelector('.map-bg')
        const text = document.querySelector('.map .text')
        if (text) {
          text.style.left = `${mapBg.clientWidth / 2 - 100}px`
        }
        const hand = document.querySelector('.map .hand')

        if (hand) {
          // hand.style.width = `${mapBg.clientWidth}px`
        //  hand.style.left = `${mapBg.clientWidth / 2 + 50}px`
        }

        map.scrollTo((mapBg.clientWidth  - window.innerWidth ) * .6 , 0)
      }, 600)
      setTimeout(() => {
        this.hide = false
      }, 1000)
      
    this.scrollView()
  },
}
</script>
