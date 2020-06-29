<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        v-lazy="require('./s5/img.jpg')"
        alt="30米雙綠園道  自然即是奢華 與美人魚為鄰最時尚"
        class="img absolute"
      >
      <img
        v-lazy="require('./s5/title.png')"
        alt="30米雙綠園道  自然即是奢華 與美人魚為鄰最時尚"
        data-aos="fade"
        data-aos-delay="400"
        class="title-img absolute"
      >
      <div class="desc_b">
      <h3
        class="desc absolute"
        data-aos="fade"
        data-aos-delay="700"
      >
        臺北仁愛路園道、臺中美術館園道、到臺南健康路園道，住在有園道的地方，本身就是一種享受，兩排林蔭風景為您開道，將身心靈的疲憊卸下，一面是森海之美，一面是園道生活，「聯上海棠」得天獨厚，居者即是榮耀！
      </h3>
      </div>
      <div class="flex animate-row">
        <img
          v-lazy="require('./s5/wave2.png')"
          alt="wave"
          class="wave"
        >
        <img
          v-lazy="require('./s5/wave2.png')"
          alt="wave"
          class="wave"
        >
      </div>
      <div class="flex animate-row animate-row2">
        <img
          v-lazy="require('./s2/wave_l.png')"
          alt="wave"
          class="wave"
        >
        <img
          v-lazy="require('./s2/wave_l.png')"
          alt="wave"
          class="wave"
        >
      </div>
      <div class="flex animate-row no-animation">
        <img
          v-lazy="require('./s5/wave.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s5/wave.png')"
          alt="wave"
          class="wave"
        >
      </div>
    </div>
    <div v-if="isMobile">
      <img
        v-lazy="require('./mo/5/img.jpg')"
        alt="30米雙綠園道  自然即是奢華 與美人魚為鄰最時尚"
        class="img absolute"
      >
      <img
        v-lazy="require('./s5/title.png')"
        alt="30米雙綠園道  自然即是奢華 與美人魚為鄰最時尚"
        class="title-img absolute"
      >
      <h3 class="desc absolute">
        臺北仁愛路園道、臺中美術館園道、到臺南健康路園道，住在有園道的地方，本身就是一種享受，兩排林蔭風景為您開道，將身心靈的疲憊卸下，一面是森海之美，一面是園道生活，「聯上海棠」得天獨厚，居者即是榮耀！
      </h3>
      <div class="flex animate-row">
        <img
          v-lazy="require('./s5/wave2.png')"
          alt="wave"
          class="wave"
        >
        <img
          v-lazy="require('./s5/wave2.png')"
          alt="wave"
          class="wave"
        >
      </div>
      <div class="flex animate-row animate-row2">
        <img
          v-lazy="require('./s2/wave_l.png')"
          alt="wave"
          class="wave"
        >
        <img
          v-lazy="require('./s2/wave_l.png')"
          alt="wave"
          class="wave"
        >
      </div>
      <div
        class="flex animate-row no-animation"
        v-if="!isMobile"
      >
        <img
          v-lazy="require('./s5/wave.png')"
          alt="wave"
          class="wave"
        >
        <img
          v-lazy="require('./s5/wave.png')"
          alt="wave"
          class="wave"
        >
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  overflow: hidden;
  position: relative;
  height: calc(100vh + 4vw);
  background-color: #fff;
  margin: 0 0 -7vh 0;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

.img {
  width: size(857);
  height: 85vh;
  object-fit: cover;
  left: size(244);
  top:5vh;
  z-index: 5;
}

.title-img {
  width: size(74);
  top: calc(5vh + 1vw);
  right: size(614);
}
.desc_b{transform: scaleX(0.93);}
.desc {
  width: size(260);
  height: auto;
  font-family: "Noto Serif CJK tc";
  font-size: size(12);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.1;
  letter-spacing: 0.6px;
  text-align: justify;
  color: #595757;
  right: size(503);
  top:calc(5vh + 30.3vw);
}
.animate-row {
  width: 200vw;
  animation: moving 30s linear infinite;
  position: absolute;
  bottom: size(-200);

  img {
    width: 100%;
    height: size(379);
    object-fit: cover;
  }

  &.animate-row2 {
    bottom: size(100);
    animation: moving 20s linear infinite;

    img {
      height: size(79);
    }
    // animation-delay: 5s;
  }

  &.no-animation {
    width: 100vw;
    animation: none;
    bottom: 0;
    img {
      width: 100vw;
      height: size(164);
    }
  }
}

@keyframes moving {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0) scaleY(1);
  }
  50% {
    -webkit-transform: translateX(0);
    transform: translateX(-25%) scaleY(0.5);
  }

  to {
    -webkit-transform: translateX(-100vw);
    transform: translateX(-50%) scaleY(1);
  }
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .relative {
    // height: 100vh;
    overflow: hidden;
    position: relative;
    height: 100vh;
  }

  .img {
    width: size-m(229);
    left: auto;
    right: size-m(5);
    top: size-m(7.5);height: auto;
  }

  .title-img {
    width: size-m(59);
    top: size-m(40);
    left: size-m(40);
    right: auto;
  }

  .desc {
    width: size-m(320);
    height: auto;
    font-size: size-m(12);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.1;
    letter-spacing: 0.6px;
    text-align: justify;
    color: #595757;
    right: 0;
    left: 0;
    margin: 0 auto;
  transform: scaleX(0.93);
  transform-origin: 0 0 ;
    top: size-m(494);
  }

  .animate-row {
    width: 200vw;
    animation: moving 30s linear infinite;
    position: absolute;
    bottom: size(-200);

    img {
      width: 100%;
      height: size(379);
    }

    &.animate-row2 {
      bottom: size(100);
      animation: moving 20s linear infinite;

      img {
        height: size(79);
      }
      // animation-delay: 5s;
    }

    &.no-animation {
      animation: none;
      bottom: 0;
      img {
        height: size(164);
      }
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section5',

  components: {},
  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
