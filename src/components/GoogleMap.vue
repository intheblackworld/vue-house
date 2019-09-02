<template>
  <div class="google-map">
    <div class="map-img">
      <img src="~@/assets/img/map.png" alt class />
    </div>
    <iframe
      title="googlemap"
      :src="googleSrc"
      :width="isMobile ? '100%': '50%'"
      height="455"
      frameborder="0"
      style="border: 0"
      allowfullscreen
    />
  </div>
</template>
<script>
import info from '@/info'
import { isMobile } from '@/utils'
export default {
  name: 'googleMap',
  data() {
    return {
      isMobile,
      googleSrc: info.googleSrc,
    }
  },
}
</script>

<style lang="scss" scoped>
.google-map {
  display: flex;
  position: relative;
}

.map-img {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 767px) {
  .google-map {
    flex-wrap: wrap;
  }
  .map-img {
    width: 100%;
    padding: 20px 0;
    img {
      width: 100vw;
    }
  }
}
</style>
