<template>
  <div class="section1">
    <div class="bg fullscreen relative" v-if="isMobile">
      <img class="center" src="./s1_center_m.png" alt data-aos="fade" data-aos-delay="1200" />
      <img class="img" src="./s1_img_1_m.png" data-aos="fade" data-aos-delay="200" alt />
      <img class="img" src="./s1_img_2_m.png" data-aos="fade" data-aos-delay="300" alt />
      <img class="img" src="./s1_img_3_m.png" data-aos="fade" data-aos-delay="400" alt />
      <img class="img" src="./s1_img_4_m.png" data-aos="fade" data-aos-delay="500" alt />
      <img class="img" src="./s1_img_5_m.png" data-aos="fade" data-aos-delay="600" alt />
      <img class="img" src="./s1_img_6_m.png" data-aos="fade" data-aos-delay="700" alt />
      <img class="img" src="./s1_img_7_m.png" data-aos="fade" data-aos-delay="800" alt />
      <img class="img" src="./s1_img_8_m.png" data-aos="fade" data-aos-delay="900" alt />
      <img class="img" src="./s1_img_9_m.png" data-aos="fade" data-aos-delay="1000" alt />
    </div>
    <div class="bg fullscreen relative" v-else>
      <img class="center" src="./s1_center.png" data-aos="fade" data-aos-delay="1400" alt />
      <img class="img" src="./s1_img_1.png" alt data-aos="fade" data-aos-delay="200" />
      <img class="img" src="./s1_img_2.png" alt data-aos="fade" data-aos-delay="300" />
      <img class="img" src="./s1_img_3.png" alt data-aos="fade" data-aos-delay="400" />
      <img class="img" src="./s1_img_4.png" alt data-aos="fade" data-aos-delay="500" />
      <img class="img" src="./s1_img_5.png" alt data-aos="fade" data-aos-delay="600" />
      <img class="img" src="./s1_img_6.png" alt data-aos="fade" data-aos-delay="700" />
      <img class="img" src="./s1_img_7.png" alt data-aos="fade" data-aos-delay="800" />
      <img class="img" src="./s1_img_9.png" alt data-aos="fade" data-aos-delay="900" />
      <img class="img" src="./s1_img_10.png" alt data-aos="fade" data-aos-delay="1000" />
      <img class="img" src="./s1_img_11.png" alt data-aos="fade" data-aos-delay="1100" />
      <img class="img" src="./s1_img_12.png" alt data-aos="fade" data-aos-delay="1200" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-color: #FFC20F;
  background-size: cover;
  position: relative;
}

.img {
  width: 100vw;
  height: 100%;
  display: block;
  position: absolute;
  object-fit: cover;
  left: 0;
  top: 0;
}

@keyframes flower {
  from {
    transform: skewX(3deg);
  }
  to {
    transform: skewX(-3deg);
  }
}

  .img {
    transform-origin: bottom;
    object-fit: cover;
    z-index: 1;

    &:nth-child(2) {
      animation: flower 5s linear .3s infinite alternate;
    }

    &:nth-child(3) {
      animation: flower 4s linear .6s infinite alternate;
    }

    &:nth-child(4) {
      animation: flower 2s linear .8s infinite alternate;
    }

    &:nth-child(5) {
      animation: flower 5s linear .5s infinite alternate;
    }

    &:nth-child(6) {
      animation: flower 2s linear .5s infinite alternate;
    }
    &:nth-child(7) {
      animation: flower 7s linear .4s infinite alternate;
    }
    &:nth-child(8) {
      animation: flower 5s linear .2s infinite alternate;
    }
    &:nth-child(9) {
      animation: flower 3s linear .1s infinite alternate;
      left: 50px;
    }
    &:nth-child(10) {
      animation: flower 5s linear 0s infinite alternate;
      left: -20px;
    }
    &:nth-child(11) {
     z-index: 0;
    }
    &:nth-child(12) {
      z-index: 0;
    }

    &:nth-child(12) {
      z-index: 0;
    }
  }

.center {
  position: relative;
  height: 100%;
  width: 100%;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
  }

  .fullscreen {
    height: 100vh !important;
  }

  @keyframes flower {
  from {
    transform: skewX(-5deg);
  }
  to {
    transform: skewX(0deg);
  }
}

  .img {
    transform-origin: bottom;
    object-fit: cover;
    &:nth-child(1) {
      animation: flower 2s linear 0s infinite alternate;
    }

    &:nth-child(2) {
      animation: flower 5s linear .3s infinite alternate;
    }

    &:nth-child(3) {
      animation: flower 4s linear .6s infinite alternate;
    }

    &:nth-child(4) {
      animation: flower 4s linear .6s infinite alternate;
    }

    &:nth-child(5) {
      animation: flower 5s linear .5s infinite alternate;
    }

    &:nth-child(6) {
      animation: flower 4s linear .5s infinite alternate;
    }
    &:nth-child(7) {
      animation: none;
    }
    &:nth-child(8) {
      animation: none;
      z-index: 0;
    }
    &:nth-child(9) {
      animation: none;
    }
    &:nth-child(10) {
      animation: none;
    }
    // &:nth-child(11) {
    //   animation: flower 4s linear 0s infinite alternate;
    // }
    // &:nth-child(12) {
    //   animation: flower 8s linear .5s infinite alternate;
    // }
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

  methods: {},

  created() {},
}
</script>
