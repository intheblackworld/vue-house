<template>
  <div class="section5">
    <img src="./s1/b.png" alt="" class="b1">
    <img src="./s1/b.png" alt="" class="b2">
    <img src="./s1/b.png" alt="" class="b3">
    <img src="./s1/b.png" alt="" class="b4">
    <img src="./s2/img.png" alt="" class="img1">
    <img src="./s4/img.png" alt="" class="img2">

    <img src="./s5/map.png" alt class="map" v-if="!isMobile" />
    <img src="./s5/icon.png" alt class="icon" />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.map {
  @include img_l_pc(1514, 84, 204);
}

.icon {
  @include img_l_pc(119, 499, 810);
  z-index: 2;
}

.icon {
  transform: translateY(-3%);
  animation: heartbeat 0.5s ease-in alternate infinite;
}

.b1 {
  @include img_l_pc(198, 58, 720);
  animation: an2 1.5s infinite alternate;
}

.b2 {
  @include img_l_pc(308, 767, 429);
  animation: an 2.5s infinite alternate;
}

.b3 {
  @include img_l_pc(169, 764, 1141);
  animation: an 2.5s infinite alternate;
}

.b4 {
  @include img_r_pc(671, 0, -300);
  animation: an 4.5s infinite alternate;
}

.img1 {
  @include img_r_pc(348, 457, -180);
  animation: an 2.5s infinite alternate;
}

.img2 {
  @include img_l_pc(548, 857, -280);
  animation: an 2.5s infinite alternate;
}

@keyframes an {
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes an2 {
  to {
    transform: translateY(0) rotate(5deg);
  }
}

@keyframes heartbeat {
  to {
    transform: translateY(0);
  }
}
@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section5 {
    width: 100vw;
    height: sizem(680);
    min-height: sizem(0);
    max-height: sizem(900);
    .bg {
      width: 100%;
      max-width: 100%;
    }
  }

  .fly1,
  .fly2 {
    display: none;
  }

  .fly3 {
    width: sizem(85);
    top: sizem(0);
    right: sizem(0);
  }
  .txt {
    width: sizem(310);
    top: sizem(271.5);
    right: sizem(33);
    font-size: sizem(15);
    min-height: initial;
  }
  .title {
    font-size: sizem(25);
    line-height: 1.44;
    letter-spacing: 0.04em;
  }

  .hr {
    width: 100%;
    height: 1px;
    margin: sizem(23) 0;
  }

  .desc {
    line-height: 1.7;
    text-align: left;
    letter-spacing: -0.035em;
    margin: 1em 0 1em 1.1em;
  }

  .life {
    bottom: sizem(-100);
    left: sizem(0);
    font-size: sizem(70);
    line-height: 1.69;
    letter-spacing: sizem(-5.6);
  }

  /* Swipe */
  .swipe {
    width: sizem(375);
    height: sizem(245);
    min-height: sizem(245);
    top: sizem(0);
    left: sizem(0);
    object-fit: cover;
  }

  // begin
  .swipe-fade-leave-to {
    opacity: 0;
    z-index: 0;
  }
  // end
  .swipe-fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .swipe-fade-enter-active {
    transition: all 0.5s ease;
  }

  .swipe-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  // begin
  // .swipe-left-leave-to {
  //   margin-left: -100vw;
  //   z-index: 0;
  // }
  // // end
  // .swipe-left-enter {
  //   opacity: 0.5;
  //   margin-left: 0;
  //   z-index: 1;
  // }

  // .swipe-left-enter-active {
  //   transition: all 0.5s ease;
  // }

  // .swipe-left-leave-active {
  //   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  // }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
    z-index: 0;

    img {
      width: 100%;
    }
    .name {
      bottom: 1em;
      right: 1em;
      font-size: sizem(12);
    }

    // &:nth-child(1) {
    //   z-index: 1;
    //   // opacity: 1;
    // }

    // &.base {
    //   z-index: 1;
    //   opacity: 1;
    // }
    // &.active {
    //   z-index: 2;
    //   // opacity: 1;
    // }
  }

  .pagination {
    width: auto;
    bottom: size(91);
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
  }

  .pagination-dot {
    padding: 5px;
    margin: 0 10px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      box-shadow: 0 0 0 1px #bd2b27;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #bd2b27;
        border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 20%;
        // transform: translateY(-50%);
        left: 20%;
        transition: all 0.3s;
        transform-origin: center;
        transform: scale(0);
      }
      &.active {
        &::before {
          content: '';
          width: 100%;
          height: 100%;
          display: block;
          background: #bd2b27;
          border-radius: 20px;
          opacity: 1;
          position: absolute;
          top: 0%;
          // transform: translateY(-50%);
          left: 0%;
          transform: scale(1);
        }
      }
    }
  }

  .swipe-btns {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    z-index: 3;

    .prev-btn,
    .next-btn {
      width: sizem(15);
      cursor: pointer;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section5',

  mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
