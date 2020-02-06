<template>
  <div class="section1">
    <div class="bg relative">
      <div>
        <img src="./s1/bg.jpg" alt="" class="img img_bg">
        <img src="./s1/light1.png" alt="" class="img light1">
        <img src="./s1/light2.png" alt="" class="img light2">
        <img src="./s1/light4.png" alt="" class="img light4">
        <img src="./s1/logo.png" alt="" class="img logo">
        <img src="./s1/light3.png" alt="" class="img light3">
        <!-- <img src="./s1/logo.png" alt="頤昌豐岳" class="img" data-aos="fade" data-aos-delay="700" /> -->
        <!-- <icon class="icon logo-icon" :data="logo" /> -->
      <!--/div>
      <div v-else>
        <img src="./s1/mo/bg.jpg" alt="" class="img" -->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// for svg
</style>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
}

.img {
  width: 100vw;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  display: block;
  
  &:nth-child(1) {
    position: relative;
  }
  &.light1,
  &.light2{
    opacity: 0;
    animation: op 1s alternate infinite;
  }
  &.light2{
    animation-delay:1s
  }
  &.light3{
    mix-blend-mode:screen;
    
  }
}
@keyframes op {
    to {
        opacity: 1;
    }
}


/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    height:100vh;
      position: relative;
  }

  .section1 {
    .bg {
      overflow: hidden;
    }
  }

  .img {
    width: auto;
    height:calc(100vh - 63px);
    left:50%;
    transform: translateX(-50%);
    &:nth-child(1) {
      position: relative;
      height:100vh;
    transform: translateX(-45%);
    }
  &.light1,
  &.light2{
      height:100vh;
    transform: translateX(-45%);
    }
    &.logo{
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isMobile,
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
