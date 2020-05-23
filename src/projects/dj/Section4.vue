<template>
  <div class="relative">
    <div v-if="!isMobile">
      <div
        class="title absolute"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Strongest plug-in
      </div>
      <div
        class="desc absolute"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        - 最強外掛 -
      </div>
      <div
        class="img-title absolute"
        data-aos="fade"
        data-aos-delay="600"
      >
        亞洲.矽谷＋航空城千億開發計畫<br />世界都在看！
      </div>
      <div
        class="img-desc absolute"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        台灣兩大國家級建設皆位於桃園，<br />
        包含「桃園航空城」、「亞洲.矽谷」、「前瞻基礎建設」，<br />
        桃園不僅升格六都，更將躍升為國際級規格城市。
      </div>
      <img
        src="./s4/img1.png"
        alt=""
        class="img1 absolute"
      >
      <img
        src="./s4/img2.jpg"
        alt=""
        class="img2 absolute"
        data-aos="fade-left"
        data-aos-delay="1000"
      >
    </div>
    <div
      v-else
      class="relative"
    >
    <div
        class="title absolute"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Strongest plug-in
      </div>
      <div
        class="desc absolute"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        - 最強外掛 -
      </div>
      <div
        class="img-title absolute"
        data-aos="fade"
        data-aos-delay="600"
      >
        亞洲.矽谷＋航空城千億開發計畫<br />世界都在看！
      </div>
      <div
        class="img-desc absolute"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        台灣兩大國家級建設皆位於桃園，包含「桃園航空城」、「亞洲.矽谷」、「前瞻基礎建設」，桃園不僅升格六都，更將躍升為國際級規格城市。
      </div>
      <img
        src="./mo/4/bg.png"
        alt=""
        class="bg-img"
      >
      <img
        src="./mo/4/img.jpg"
        alt=""
        class="img"
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  height: calc(100vh - 80px);
  overflow: hidden;
  background-color: #fff;
}
.bg-img {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.title {
  font-family: TrajanPro;
  font-size: size(60);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: -2.37px;
  text-align: left;
  color: #808080;
  top: size(72);
  left: size(256);
}

.desc {
  font-size: size(44);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: 1.76px;
  text-align: left;
  color: #231815;
  top: size(145);
  left: size(251);
}

.img-title {
  font-size: size(35);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: normal;
  text-align: left;
  color: #231815;
  top: size(281);
  left: size(251);
}

.img-desc {
  font-size: size(20);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: 1.2px;
  text-align: left;
  color: #231815;
  top: size(416);
  left: size(251);
}
.img1 {
  width: size(1040);
  bottom: 0;
  left: 0;
}

.img2 {
  width: size(880);
  height: size(1080);
  object-fit: cover;
  top: 0;
  right: 0;
}
@media only screen and (max-width: 1440px) {
  .bg-img {
  }
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
    height: auto;
    object-fit: cover;
  }

  .title {
    font-size: size-m(26);
    top: size-m(36);
    left: size-m(30);
  }

  .desc {
    font-size: size-m(17);
    top: size-m(69);
    left: size-m(30);
  }

  .img-title {
    width: size-m(270);
    font-size: size-m(18);
    top: size-m(125);
    left: size-m(30);
  }

  .img-desc {
    width: size-m(321);
    font-size: size-m(13);
    top: size-m(190);
    left: size-m(30);
  }

  .img {
    width: 100vw;
    position: absolute;
    left: 0;
    bottom: 0;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section4',

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
