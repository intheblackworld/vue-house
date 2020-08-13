<template>
  <div>
    <div class="section4">
      <img
        src="./s4/bg1_01.png"
        alt="bg"
        class="bg-img"
      >
      <img
        src="./s4/map.png"
        alt="瑞安自在環境區域圖"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1000"
        class="map-img absolute"
      >
      <div class="txt absolute">
      <img
        src="./s4/bg2.png"
        alt="尊貴第一街 瑞安街"
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-duration="1000"
        class="bubble absolute"
      >
      <h3
        class="title"
        data-aos="fade-down"
        data-aos-delay="600"
        data-aos-duration="1000"
      >
        尊貴第一街 瑞安街<br />
        價值萬中選一 北市保值之珠
      </h3>
      <h3
        class="desc"
        data-aos="fade-down"
        data-aos-delay="700"
        data-aos-duration="1000"
      >
        瑞安街土地釋出少,百年濃郁的高官文人聚落,一且取得便深具珍藏價值,成為北市房產界，保值之珠。【瑞安自在】以最貼大安森林公園、取地難度最高的「尊貴第一街：瑞安街」不僅未來珍藏性超越同區「水牛書店豪宅群」更以滿定頂級客「人住城心、隱密自在」的尊榮感享有大安森林大道旁,得不到的居住等級。
      </h3>
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section4 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  overflow: hidden;
}

.map-img {
  height:size(900);
  top: calc(50% - 23.44vw);
  right: 45%;
  object-fit: cover;
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
  top: auto;bottom: 0;
  left: auto;
  right: 0;
  height: auto;
  }
}

.txt {
  width: size(760);
  height:size(760);
  top:calc(50% - 20vw);
  left: 55%;
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  color: #ffffff;
  display: flex;align-items:center;flex-direction:column;justify-content:center;
}
.title {
  //width: size(568);
  font-size:1.8em;
  font-weight: bold;
  line-height: 1.34;
  letter-spacing: 0.08em;
  text-align: center;
  white-space: nowrap;
  position: relative;z-index: 2;
  margin: 0 0 0.5em 0;
}

.desc {
 width: 75%;
  line-height: 2.05;
  letter-spacing: 0.04em;
  text-align: justify;
  position: relative;z-index: 2;
}

.bubble {
  width:100%;
  top: size(0);
  right: size(0);
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
  .section4 {
    width: 100vw;
    height: calc(100vh - 63px);
    min-height: auto;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .bg-img {
    width: 100vw;
    height: calc(100vh - 63px);
    min-height: auto;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    object-fit: cover;

    &:nth-child(1) {
      position: relative;
    }
  }

  .map-img {
    width: 100vw;
    top: size-m(251);
    left: size-m(0);
    object-fit: cover;
  }

  .title {
    width: size-m(330);
    top: size-m(24);
    right: size-m(22);
    font-size: size-m(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: 2px;
    text-align: center;
    color: #a38057;
    white-space: nowrap;
  }

  .desc {
    top: size-m(110);
    right: size-m(32);
    width: size-m(310);
    font-size: size-m(13);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: 0.9px;
    text-align: left;
    color: #000000;
  }

  .bubble {
    display: none;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import Map from '@/components/Map.vue'

export default {
  name: 'section4',

  components: {
    Map,
  },

  data() {
    return {
      isMobile,
      isTablet,
      title_list: [
        '找不到理由投反對票⋯',
        '當世界擁有一座森林 價值也找到永恆的晴空',
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
