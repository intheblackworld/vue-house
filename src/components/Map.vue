<template>
  <div class="map" id="map" refs="map" @scroll="handleScroll">
    <img :src="hand" alt :class="`hand ${showMask ? 'active' : ''}`" />
    <img class="map-bg" :src="bgSrc" alt ref="mapbg" />
    <div class="box"></div>
    <img class="map-bgpng" :src="bgSrcpng" alt ref="mapbg" v-if="bgSrcpng" />
    <!-- <img class="map-text" :src="bgText" alt /> -->
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
  // padding-top: sizem(150);
 // background-color: rgba(172, 221, 254, 1)
 .box{
  position: absolute;top: 0;left: 0;width: 100%;
  height: size(400);
  background: linear-gradient(180deg, #02130D 0%, rgba(0, 52, 81, 0.718567) 28.65%, rgba(0, 92, 158, 0.416667) 59.37%, rgba(0, 112, 205, 0) 100%);
 }
}
.desc {
  width: sizem(310);
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-left: sizem(450);
  margin-top: sizem(80);
  font-size: sizem(15);
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
  props: ['tagList', 'bgSrc' , 'bgSrcpng', 'hand', 'bgText'],
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

        map.scrollTo(mapBg.clientWidth / 2 - window.innerWidth / 2 - 10, 0)
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
