<template>
  <div>
    <div class="section7">
      <img
        v-if="!isMobile"
        src="./s7/1.jpg"
        alt=""
        class="bg-img"
      >

      <img
        v-if="isMobile"
        src="./mo/7/bg.jpg"
        alt=""
        class="bg-img"
      >
       <h3 class="title absolute">富貴種子聚首瑞安<br>大器翡玉風雅之最</h3>
    <!--  <ul class="title absolute">
        <li
          v-for="(text, index) in title_list"
          data-aos="fade-down"
          :data-aos-delay="200 + (index + 1) * 100"
          data-aos-duration="600"
          :key="text"
        >{{text}}</li>
      </ul> -->
      <h3
        class="desc absolute"
        data-aos="fade-down"
        data-aos-delay="600"
        data-aos-duration="600"
      >
        【瑞安自在】總戶數為21戶，地上12樓、地下3樓，全棟承襲首鋼機機構細緻精工、深厚人文底蘊，聯手豪宅推手邱垂睿大師，以「綠、舞、墨、樹」靈感，為座落瑞安權貴靜巷誕生墨曜玉石意象之美。搭配垂直木紋鋁格柵，精雕光影層次，引領建築成為收藏風雅的容器。為瑞安風景，示現風格化的富貴寫照，也為上流世家，刻畫難掩雍容的風情。
      </h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  min-height: size(900);
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
  width: size(300);
  top: size(97);
  left: size(255);
  font-size: size(35);
  line-height: 1.65;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.08em;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;

  li {
  }
}

.desc {
  width: size(580);
  top: size(231);
  left: size(115);
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.16;
  letter-spacing: normal;
  text-align: justify;
  color: #ffffff;
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
  .section7 {
    width: 100vw;
    height: calc(100vh - 63px);
    min-height: auto;
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
.title {
    width: sizem(214);
    top: sizem(62);
    left: sizem(80);
font-size: sizem(25);
  line-height: 1.4;
}

  .desc {
    width: sizem(310);
    top: sizem(151);
    left: sizem(33);
    font-size: sizem(15);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: 0.01em;
    text-align: justify;
    color: #ffffff;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section7',

  data() {
    return {
      isMobile,
      isTablet,
      title_list: ['富貴種子聚首瑞安', '大器翡玉風雅之最'],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
