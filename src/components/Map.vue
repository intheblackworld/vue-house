<template>
  <div class="map" id="map" refs="map" @scroll="handleScroll">
    <img :src="hand" alt :class="`hand ${showMask ? 'active' : ''}`" />
    <img class="map-bg" :src="bgSrc" alt ref="mapbg" />
    <img class="map-text" :src="bgText" alt />
    <div :class="`mask ${showMask ? 'active' : ''}`">
    <!--  <div class="desc">
      大安區好人家,才看得起的大安選房學<br />
      瑞安街為首,大安森林首環,頭等艙位置<br />
      鞏固城市中心點,綠海寫生、静巷養生<br />
      高隱密静巷宅、第一直擊大安森林者,只有瑞安自在
    </div> -->
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
  padding-top: size-m(215);
  background-color: transparent;
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
  name: 'vmap',
  props: ['tagList', 'bgSrc', 'hand', 'bgText'],
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

        map.scrollTo(mapBg.clientWidth / 2 - window.innerWidth / 2 - 170, 0)
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
