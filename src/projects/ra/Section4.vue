<template>
  <div>
    <div
      v-if="!isMobile"
      class="section4"
    >
      <img
        src="./s4/bg1_01.png"
        alt=""
        class="bg-img"
        data-aos="fade"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
      <img
        src="./s4/map.png"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1000"
        class="map-img absolute"
      >
      <img
        src="./s4/bg2.png"
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-duration="1000"
        class="bubble absolute"
      >
      <h3 class="title absolute" data-aos="fade-down"
        data-aos-delay="600"
        data-aos-duration="1000">
        尊貴第一街 瑞安街<br />
        價值萬中選一 北市保值之珠
      </h3>
      <h3 class="desc absolute" data-aos="fade-down"
        data-aos-delay="700"
        data-aos-duration="1000">
        瑞安街土地釋出少,百年濃郁的高官文人聚落,一且取得便深具珍藏價值,成為北市房產界，保值之珠。【瑞安自在】以最貼大安森林公園、取地難度最高的「尊貴第一街：瑞安街」不僅未來珍藏性超越同區「水牛書店豪宅群」更以滿定頂級客「人住城心、隱密自在」的尊榮感享有大安森林大道旁,得不到的居住等級。
      </h3>
    </div>

    <div
      v-if="isMobile"
      class="section4"
    >
      <!-- <Map :bgSrc="bgSrc" v-if="isMobile">
      </Map> -->
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
  width: size(967);
  top: size(118);
  left: size(79);
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
    position: relative;
  }
}

.title {
  width: size(568);
  top: size(287);
  right: size(133);
  font-size: size(43);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.34;
  letter-spacing: 3.44px;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  top: size(452);
  right: size(116);
  width: size(601);
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.05;
  letter-spacing: 1px;
  text-align: left;
  color: #ffffff;
}

.bubble {
  width: size(760);
  top: size(160);
  right: size(36);
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
    height: size-m(667);
    background-image: url('./mo/1/bg.jpg');
    background-size: cover;
    background-attachment: scroll;
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
