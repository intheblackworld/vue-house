<template>
  <div class="section3">
    <img
      src="./s3/img.png"
      alt=""
      class="back absolute"
    >
    <img
      src="./s1/butterfly2.png"
      alt=""
      class="fly2 absolute"
    >
    <div class="bg">
      <div class="img absolute">
        <img
          src="./s3/1.jpg"
          alt="平實公園"
          data-aos="fade-down"
          data-aos-delay="200"
        >
        <div class="name absolute">平實公園</div>
      </div>
      <div class="txt absolute">
        <div
          class="title"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <h3>全世界房子的價值<br />與公園的距離成正比</h3>
        </div>
        <div
          class="hr"
          data-aos="zoom-in-right"
          data-aos-delay="600"
        ></div>
        <div
          class="desc"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          在未來，綠富才是真財富。在平實特區的嶄新生活，以特大面積的平實公園為首，公共建設逐漸到位，為區域迎來商業、金融、交通的重大發展性，其既有的「都會公園」價值更是被凸顯，宛如紐約中央公園、英國海德公園的首善之地！因此，首選這裡，等於率先把握最佳的甜蜜機會，為身價帶來不凡升級！

          <ul
            class="desc2"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            <li>平實公園為首，公共建設逐漸到位</li>
            <li>宛如紐約中央公園、英國海德公園</li>
            <li>迎來商業、金融、交通等重大發展</li>
            <li>都會公園價值更放大，綠富才是真財富</li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="park absolute"
      data-aos="fade-left"
      data-aos-delay="1000"
    >
      PARK
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  .bg {
    width: 1556px;
    height: 100%;
    max-width: 90%;
    position: relative;
    margin: auto;
  }
}

.back {
  width: size(534);
  top: size(35);
  left: size(0);
}

.img {
  width: size(1030);
  height: 76%;
  top: 12%;
  left: size(0);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .name {
    bottom: size(20);
    right: size(20);
    line-height: 1.35;
    font-size: size(14.8);
    letter-spacing: 0.06em;
    color: #ffffff;
  }
}

.fly2 {
  width: size(119);
  top: size(54);
  right: size(117);
}

.txt {
  width: calc(100% - 57vw);
  top: 12%;
  right: size(0);
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(16);
}

.title {
  font-size: size(51.6);
  font-weight: bold;
  line-height: 1.43;
  letter-spacing: size(2.06);
  color: #333333;
  white-space: nowrap;
  h3 {
    transform: scaleX(0.95);
    transform-origin: 0 0;
  }
}

.hr {
  width: 100%;
  height: size(2);
  min-height: 1px;
  margin: size(62) 0;
  background-color: #27a8a8;
}

.desc {
  font-weight: 500;
  line-height: 1.8;
  letter-spacing: 0.07em;
  position: relative;
  color: #333333;
  z-index: 2;
  text-shadow: 0 0 size(5) #fff;
}
.desc2 {
  margin: 1em 0 1em 1.5em;
  list-style: square;
  li {
    margin: 0.4em 0;
    list-style: inherit;
  }
}

.park {
  bottom: 7%;
  right: size(20);
  font-size: size(150);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: size(-12.75);
  text-align: right;
  color: #27a8a8;
  z-index: 1;
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
  .section3 {
    height: sizem(872);
    min-height: sizem(0);
    max-height: sizem(900);
    .bg {
      width: 100%;
      max-width: 100%;
    }
  }

  .back {
    display: none;
  }

  .img {
    width: 100vw;
    height: auto;
    top: 0;
    left: 0;
    .name {
      bottom: 1em;
      right: 1em;
      font-size: sizem(12);
    }
  }

  .fly2 {
    width: sizem(78);
    top: sizem(272);
    right: sizem(8);
  }

  .txt {
    width: sizem(310);
    top: sizem(271.5);
    right: sizem(33);
    font-size: sizem(15);
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
    font-size: sizem(15);
    line-height: 2.2;
    letter-spacing: 0.03em;
  }

  .park {
    bottom: sizem(0);
    left: sizem(23);
    font-size: sizem(70);
    line-height: 1.1;
    right: auto;
    letter-spacing: sizem(-5.6);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section3',

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
