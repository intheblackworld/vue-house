<template>
  <div>
    <div
      class="section1"
      v-if="isPC"
    >
      <div class="bg-animate"></div>
      <img
        src="./s1/bg.png"
        alt=""
        class="bg-img"
        data-aos="fade-right"
        data-aos-delay="0"
      >
      <img
        src="./s1/bg2.png"
        alt=""
        class="bg-img"
        data-aos="fade-down"
        data-aos-delay="200"
      >
      <img
        src="./s1/bg3.png"
        alt=""
        class="bg-img"
        data-aos="fade-left"
        data-aos-delay="400"
      >

      <img
        src="./s1/logo.png"
        alt=""
        class="logo absolute"
      >
      <h3
        class="title absolute"
        data-aos="zoom-in"
        data-aos-delay="600"
      >平實特區 幸福出采</h3>
      <div
        class="hr absolute"
        data-aos="zoom-in-right"
        data-aos-delay="700"
      ></div>
      <div
        class="desc absolute"
        data-aos="zoom-in"
        data-aos-delay="800"
      >2019年春福集團耕耘，台南煙波大飯店正式開幕營運<br />
        2020年，春福繼續帶著全台南人的期待，選擇在永康平實特區，<br />
        推出精品大樓&透店別墅宅－「春福采采」，<br />
        要讓生活更精采，未來大放異采！</div>

      <div
        class="btn-group absolute flex-ac flex-jb"
        data-aos="zoom-in"
        data-aos-delay="900"
      >
        <router-link
          to="/"
          tag="div"
          class="btn flex-c"
        >精品大樓
        </router-link>
        <router-link
          to="/villa"
          tag="div"
          class="btn flex-c"
        >透店別墅宅</router-link>
      </div>

      <img
        src="./s1/butterfly1.png"
        alt=""
        class="fly1 absolute"
        data-aos="fade-down-left"
        data-aos-delay="1000"
      >
      <!-- <img src="./s1/butterfly2.png" alt="" class="fly2 absolute">
      <img src="./s1/butterfly3.png" alt="" class="fly3 absolute">
      <img src="./s1/butterfly4.png" alt="" class="fly4 absolute"> -->
    </div>
    <div
      class="section1"
      v-if="isMobile"
    >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: 100vh;
  min-height: 900px;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  animation: bg 5s 0s linear infinite alternate-reverse;
}

.bg-animate {
  width: size(1920);
  height: 100vh;
  min-height: 900px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 235, 166, 1) 0%,
    rgba(255, 237, 204, 1) 66%,
    rgba(255, 237, 204, 0) 100%
  );
  opacity: 0;
  animation: bg 3s 0s linear infinite alternate-reverse;
}

@keyframes bg {
  to {
    opacity: 1;
  }
}

.bg-img {
  width: size(1920);
  height: 100vh;
  min-height: 900px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.logo {
  width: size(360);
  top: size(241);
  right: size(405);
}

.title {
  width: size(510);
  top: size(379);
  right: size(324);
  font-size: size(54);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(8.1);
  text-align: center;
  color: #af8680;
  white-space: nowrap;
}

.hr {
  width: size(506);
  height: 2.5px;
  top: size(490);
  right: size(324);
  background-color: #af8680;
}
.desc {
  width: size(618);
  top: size(530);
  right: size(265);
  font-size: size(20.6);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.13;
  letter-spacing: size(1.2);
  text-align: center;
  color: #595757;
  white-space: nowrap;
}

.btn-group {
  width: size(390);
  top: size(737);
  right: size(380);

  .btn {
    width: size(190);
    height: size(43);
    border: solid 2px #af8680;
    border-radius: 20px / 20px;
    cursor: pointer;
    font-size: size(21);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.69;
    letter-spacing: size(2.3);
    text-align: center;
    color: #af8680;
    transition: all 0.3s;

    &:hover {
      background-color: #af8680;
      border-color: #af8680;
      color: #fff;
    }
  }
}

.fly1 {
  width: size(74);
  top: size(345);
  right: size(239);
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
  .section1 {
    width: 100vw;
    min-height: auto;
    height: calc(100vh - 63px);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .logo {
    width: sizem(260);
    top: sizem(143);
    left: sizem(58);
  }

  .img {
    width: sizem(160);
    top: sizem(-120);
    left: sizem(16);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
