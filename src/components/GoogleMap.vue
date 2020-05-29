<template>
  <div class="google-map">
    <div class="map-img flex-ac">
      <img
        src="~@/projects/ssj/map-left.png"
        alt=""
      >
    </div>
    <iframe
      title="googlemap"
      :src="googleSrc"
      width="50%"
      height="555"
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
  iframe {
    flex: 1;
    order: 2;
  }
}

.map-img {
  width: 50%;
  justify-content: flex-end;
  background-color: rgba(0,0,0,0.2);

  > img {
    width: 311px;
    float: right;
    margin-right: 150px;
  }
}

@media screen and (max-width: 767px) {
  .google-map {
    flex-wrap: wrap;
  }

  .map-img {
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 350px;

    > img {
      width: 251px;
      margin-right: 150px;
      margin: 0 auto;
    }
  }
}
</style>
