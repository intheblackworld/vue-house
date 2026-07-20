<template>
  <div class="section3">
    <VPannellum
      :src="vrImg"
      :autoLoad="true"
      :hfov="isMobile ? 100 : 260"
      :autoRotate="true"
      class="vr"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import VPannellum from 'vue-pannellum'
import vrImg from './s2/dji_fly.jpg'

const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth < 768
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  position: relative;
  z-index: 3;
}

.vr {
  height: size(1080);
  position: relative;
  z-index: 3;
}

@media screen and (max-width: 767px) {
  .section3 {
    width: 100vw;
    height: sizem(730);
    min-height: sizem(0);
    max-height: sizem(900);
    overflow-x: scroll;
  }

  .vr {
    margin-top: sizem(230);
    left: -50vw;
    height: sizem(500);
    width: 200vw;
  }
}
</style>