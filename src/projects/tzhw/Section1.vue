<template>
  <div class="section1">
    <div class="bg relative">
      <img src="./s1/bg.png" alt="" class="bg-img">
      <div class="river">
        <img src="./s1/an_01.png" alt="">
        <img src="./s1/an_02.png" alt="">
        <img src="./s1/an_03.png" alt="">
        <img src="./s1/an_04.png" alt="">
        <img src="./s1/an_05.png" alt="">
        <img src="./s1/an_06.png" alt="">
        <img src="./s1/an_07.png" alt="">
        <img src="./s1/an_08.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  height: size(1080);
}

.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;
  // &:first-child {
  //   position: relative;
  // }
}

@keyframes flower {
  from {
    transform: skewX(3deg);
  }
  to {
    transform: skewX(-3deg);
  }
}

.river {

  
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100vw;
  img {
    transform-origin: bottom;
    object-fit: cover;
    width: 100%;
  }

  & img:nth-child(2) {
    animation: flower 5s linear 0.3s infinite alternate;
  }

  & img:nth-child(3) {
    animation: flower 4s linear 0.6s infinite alternate;
  }

  & img:nth-child(4) {
    animation: flower 2s linear 0.8s infinite alternate;
  }

  & img:nth-child(5) {
    animation: flower 5s linear 0.5s infinite alternate;
  }

  & img:nth-child(6) {
    animation: flower 2s linear 0.5s infinite alternate;
  }
  & img:nth-child(7) {
    animation: flower 7s linear 0.4s infinite alternate;
  }
  & img:nth-child(8) {
    animation: flower 5s linear 0.2s infinite alternate;
  }
  & img:nth-child(9) {
    animation: flower 3s linear 0.1s infinite alternate;
    left: 50px;
  }
  & img:nth-child(10) {
    animation: flower 5s linear 0s infinite alternate;
    left: -20px;
  }
  & img:nth-child(11) {
    z-index: 0;
  }
  & img:nth-child(12) {
    z-index: 0;
  }

  & img:nth-child(12) {
    z-index: 0;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {

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
  mounted() {
  },
}
</script>
