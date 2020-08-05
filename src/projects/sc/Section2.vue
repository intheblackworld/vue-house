<template>
  <div>
    <div
      v-if="!isMobile"
      class="section2"
    >
      <!-- <img
        src="./s1/bg.jpg"
        alt=""
        class="bg-img"
        data-aos="fade"
        data-aos-delay="0"
      > -->
      <img
        src="./s1/logo_img.png"
        alt=""
        class="logo-img absolute"
        data-aos="fade-up"
        data-aos-delay="100"
      >
      <img
        src="./s1/logo.png"
        alt=""
        class="logo absolute"
        data-aos="fade-up"
        data-aos-delay="300"
      >
      <!-- <img src="./s1/slogo.png" alt="" class="slogo"> -->
      <img
        src="./s1/txt.png"
        alt=""
        class="txt absolute"
        data-aos="fade-up"
        data-aos-delay="400"
      >
      <div
        class="btn absolute"
        v-scroll-to="{ element: `#contact` }"
        data-aos="fade"
        data-aos-delay="1000"
      >
        <h3>立即預約</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: size(1080);
  background-image: url('./s1/bg.jpg');
  background-size: cover;
  background-attachment: fixed;
}

.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.logo {
  width: size(888);
  top: size(380);
  right: size(239);
}

.logo-img {
  width: size(428);
  top: size(259);
  left: size(210);
}

.txt {
  width: size(886);
  top: size(648);
  right: size(241);
}

.btn {
  width: size(335);
  height: size(80);
  color: #fff;
  font-size: size(30);
  background: #004980;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: size(735);
  right: size(397);
  cursor: pointer;
}

.short {
  width: 100vw;
  height: size(905);
}

.poetry {
  // position: absolute;
  width: size(287 + 68);
  // border-top: 0.5px solid #ccc;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  // padding-top: size(40);
  // padding-right: size(20);

  li {
    margin: 0 size(30);
  }
}

.poetry-desc {
  width: size(287 + 68);
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-size: size(32);
  font-weight: normal;
  color: #004980;
}

// .tree1 {
//   animation: skew1 5s 0s ease-in-out infinite;
//   transform-origin: bottom;
// }

// .tree2 {
//   animation: skew2 3s 1s ease-in-out infinite;
//   transform-origin: bottom;
// }

// @keyframes skew1 {
//   0% {
//     transform: skew(-2deg);
//   }

//   50% {
//     transform: skew(-1deg);
//   }

//   100% {
//     transform: skew(-2deg);
//   }
// }

// @keyframes skew2 {
//   0% {
//     transform: skew(2deg);
//   }

//   50% {
//     transform: skew(1deg);
//   }

//   100% {
//     transform: skew(2deg);
//   }
// }

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
  .bg-img {
    width: 100vw;
    height: auto;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    object-fit: cover;

    &:nth-child(1) {
      position: relative;
    }
  }

  .btn {
    width: size-m(132);
    height: size-m(42);
    font-size: size-m(15);
    top: size-m(582);
    left: size-m(62);
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section2',

  data() {
    return {
      isMobile,
      isTablet,
      poetry_list_1: [
        '一條有故事的街道',
        '一棟有學問的房子',
        '職人手工限量十九席',
        '書墨浦城  靜邀',
        '拾藏百年城南歲月閑好',
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
