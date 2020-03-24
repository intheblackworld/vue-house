<template>
  <div class="google-map">
    <iframe
      title="googlemap"
      :src="googleSrc"
      width="100%"
      height="555"
      frameborder="0"
      style="border: 0"
      allowfullscreen
    />
    <div class="map_img">
      <img src="~@/assets/img/map.png" alt="map" />
    </div>
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
  iframe{flex: 1;order: 2;}
.map_img{flex: 1;order: 1;text-align: right;
img{margin: 120px 80px 0 0;
  width: 500px;
  max-width: calc(100% - 80px);
}
}
}

@media screen and (max-width: 767px) {
  .google-map {
    flex-wrap: wrap;
.map_img{flex: 1 1 100%;order: 3;text-align: right;
img{margin: 10vw 10%;
  width: 80%;
  max-width: 100%;
}
}
}
}
</style>
