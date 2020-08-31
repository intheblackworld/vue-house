<template>
  <div>
    <div
      class="section3"
      v-if="isPC"
    >
      <img
        src="./s3/img.png"
        alt=""
        class="back absolute"
      >
      <img
        src="./s3/1.jpg"
        alt=""
        class="img absolute"
        data-aos="fade-down"
        data-aos-delay="200"
      >
      <img src="./s1/butterfly2.png" alt="" class="fly2 absolute">
      <h3
        class="title absolute"
        data-aos="fade-right"
        data-aos-delay="400"
      >全世界房子的價值<br />與公園的距離成正比</h3>
      <div
        class="hr absolute"
        data-aos="zoom-in-right"
        data-aos-delay="600"
      ></div>
      <div
        class="desc absolute"
        data-aos="fade-right"
        data-aos-delay="800"
      >
        在未來，綠富才是真財富。在平實特區的嶄新生活，以特大面積的平實公園為首，公共建設逐漸到位，為區域迎來商業、金融、交通的重大發展性，其既有的「都會公園」價值更是被凸顯，宛如紐約中央公園、英國海德公園的首善之地！因此，首選這裡，等於率先把握最佳的甜蜜機會，為身價帶來不凡升級！
      </div>
      <div
        class="desc2 absolute"
        data-aos="fade-right"
        data-aos-delay="800"
      >
        ■平實公園為首，公共建設逐漸到位<br />
        ■宛如紐約中央公園、英國海德公園<br />
        ■迎來商業、金融、交通等重大發展<br />
        ■都會公園價值更放大，綠富才是真財富
      </div>
      <div class="park absolute" data-aos="fade-left"
        data-aos-delay="1000">
        PARK
      </div>
    </div>
    <div
      class="section3"
      v-if="isMobile"
    >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: size(1920);
  height: 100vh;
  min-height: 900px;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.back {
  width: size(534);
  top: size(35);
  left: size(0);
}

.img {
  width: size(1030);
  top: size(126);
  left: size(182);
}

.fly2 {
  width: size(119);
  top: size(54);
  right: size(117);
}

.title {
  width: size(481);
  top: size(148);
  right: size(160);
  font-size: size(51.6);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: size(2.06);
  text-align: left;
  color: #333333;
  white-space: nowrap;
}

.hr {
  width: size(458);
  height: 2px;
  top: size(358);
  right: size(180);
  background-color: #27a8a8;
}

.desc {
  width: size(490);
  top: size(423);
  right: size(150);
  font-size: size(16);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.25;
  letter-spacing: size(1.12);
  text-align: left;
  color: #333333;
}

.desc2 {
  width: size(462);
  top: size(624);
  right: size(180);
  font-size: size(16);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.25;
  letter-spacing: size(1.12);
  text-align: left;
  color: #333333;
}

.park {
  bottom: size(315);
  right: size(20);
  font-size: size(150);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(-12.75);
  text-align: right;
  color: #27a8a8;
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
