<template>
  <div>
    <div class="section1">
      <div class="bg-animate"></div>
      <img
        v-if="isPC"
        src="./s1/bg.png"
        alt=""
        class="bg-img"
        data-aos="fade-right"
        data-aos-delay="0"
      >
      <img
        v-if="isPC"
        src="./s1/bg2.png"
        alt=""
        class="bg-img"
        data-aos="fade-down"
        data-aos-delay="200"
      >
      <img
        v-if="isPC"
        src="./s1/bg3.png"
        alt=""
        class="img"
        data-aos="fade-left"
        data-aos-delay="400"
      >

      <img
        v-if="isMobile"
        src="./mo/1/bg.png"
        alt=""
        class="img-t absolute"
        data-aos="fade-down"
        data-aos-delay="0"
      >

      <img
        v-if="isMobile"
        src="./mo/1/bg2.png"
        alt=""
        class="img-b absolute"
        data-aos="fade-up"
        data-aos-delay="0"
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
        v-if="isPC"
      >2019年春福集團耕耘，台南煙波大飯店正式開幕營運<br />
        2020年，春福繼續帶著全台南人的期待，選擇在永康平實特區，<br />
        推出精品大樓&透天別墅宅－「春福采采」，<br />
        要讓生活更精采，未來大放異采！</div>
      <div
        class="desc absolute"
        data-aos="zoom-in"
        data-aos-delay="800"
        v-if="isMobile"
      >2019年春福集團耕耘<br />
        台南煙波大飯店正式開幕營運<br />
        2020年，春福繼續帶著全台南人的期待<br />
        選擇在永康平實特區<br />
        推出精品大樓&透天別墅宅<br />
        「春福采采」<br />
        要讓生活更精采，未來大放異采！
      </div>

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
        >透天別墅宅</router-link>
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
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: 100vh;
  min-height:size(900);
  max-height:size(1080);
  background-color:#d1c6b7;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
 //animation: bg 5s 0s linear infinite alternate-reverse;
}

.bg-animate {
  width: size(1500);
  height:  size(1500);
  position: absolute;
  top: calc(52% - 39vw);
  left:size(-600);
  display: block;
  object-fit: cover;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 235, 166, 1) 0%,
    rgba(255, 237, 204, 1) 46%,
    rgba(255, 237, 204, 0) 70%
  );
  opacity: 0;
  animation: bg 3s infinite alternate;
}

@keyframes bg {
  to {
    opacity: 0.8;
  }
}

.bg-img {
  width: size(1920);
  height: 100%;
  //min-height: 900px;
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
  min-height:sizem(600);
  max-height:sizem(812);
    background-color: #D2C5B8;
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-animate {
    display: none;
  }

  .logo {
    width: sizem(210);
    top: sizem(114);
    left: sizem(83);
  }

  .img-t {
    width: 100vw;
    top: 0;
    left: 0;
  }

  .img-b {
    width: 100vw;
    bottom: 0;
    left: 0;
  }

  .title {
    width: sizem(236);
    top: sizem(226);
    right: sizem(70);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: sizem(3.75);
    text-align: center;
    color: #af8680;
    white-space: nowrap;
  }

  .hr {
    width: sizem(310);
    height: 1px;
    top: sizem(271);
    right: sizem(32);
    background-color: #af8680;
  }
  .desc {
    width: sizem(258);
    top: sizem(282);
    right: sizem(59);
    font-size: sizem(14);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.86;
    letter-spacing: sizem(0.85);
    text-align: center;
    color: #595757;
    white-space: nowrap;
  }

  .btn-group {
    width: sizem(146.5 * 2 + 17);
    top: sizem(486);
    right: sizem(33);

    .btn {
      width: sizem(146.5);
      height: sizem(33.7);
      border: solid 2px #af8680;
      border-radius: 18px / 18px;
      cursor: pointer;
      font-size: sizem(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.6;
      letter-spacing: sizem(1.65);
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
    display: none;
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
