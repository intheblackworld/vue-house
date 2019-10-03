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
      <svg
        version="1.1"
        id="bg_svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 750 1208"
        style="enable-background:new 0 0 750 1208;"
        xml:space="preserve"
      >
        <g>
          <image overflow="visible" width="181" height="201" xlink:href="./s1_b.gif">
            <animateMotion
              dur="8s"
              keyPoints="0;0.51;0.51;1"
              keyTimes="0;0.35;0.75;1"
              path="M1390,750c-64-276-607-569-869-444c-44-186-338-571-820-511"
              repeatCount="indefinite"
              calcMode="linear"
            /></image>
        </g>
      </svg>
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
      <svg
        data-v-852caa8a
        version="1.1"
        id="bg_svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1920 1080"
        xml:space="preserve"
      >
        <g data-v-852caa8a>
          <image overflow="visible" width="181" height="201" xlink:href="./s1_b.gif">
            <animateMotion
              dur="8s"
              keyPoints="0;0.51;0.51;1"
              keyTimes="0;0.35;0.75;1"
              path="M2042,716c-64-276-607-569-869-444c-44-186-338-571-820-511"
              repeatCount="indefinite"
              calcMode="linear"
            /></image>
        </g>
      </svg>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-color: #ffc20f;
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
    animation: flower 5s linear 0.3s infinite alternate;
  }

  &:nth-child(3) {
    animation: flower 4s linear 0.6s infinite alternate;
  }

  &:nth-child(4) {
    animation: flower 2s linear 0.8s infinite alternate;
  }

  &:nth-child(5) {
    animation: flower 5s linear 0.5s infinite alternate;
  }

  &:nth-child(6) {
    animation: flower 2s linear 0.5s infinite alternate;
  }
  &:nth-child(7) {
    animation: flower 7s linear 0.4s infinite alternate;
  }
  &:nth-child(8) {
    animation: flower 5s linear 0.2s infinite alternate;
  }
  &:nth-child(9) {
    animation: flower 3s linear 0.1s infinite alternate;
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
  object-fit: cover;
}

.section1 svg {
  position: absolute;
  z-index: 2;
  top: 0;
  width: 100%;
  left: 0;
  height: 100%;
}
image {
  animation: imgb 0.4s infinite alternate;
  transform-origin: top;
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
      animation: flower 5s linear 0.3s infinite alternate;
    }

    &:nth-child(3) {
      animation: flower 4s linear 0.6s infinite alternate;
    }

    &:nth-child(4) {
      animation: flower 4s linear 0.6s infinite alternate;
    }

    &:nth-child(5) {
      animation: flower 5s linear 0.5s infinite alternate;
    }

    &:nth-child(6) {
      animation: flower 4s linear 0.5s infinite alternate;
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
