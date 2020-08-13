<template>
  <div>
    <div
      v-if="!isMobile"
      class="section2"
    >
      <img src="./s2/bg.jpg" alt="" class="bg-img">
      <ul class="desc absolute">
        <li
          v-for="(text, index) in text_list"
          data-aos="fade-right"
          :data-aos-delay="200 + (index + 1) * 200"
          data-aos-duration="1000"
          :key="text"
        >{{text}}</li>
      </ul>
    </div>

    <div
      v-if="isMobile"
      class="section2"
    >
      <Map :bgSrc="require('./s2/bg.jpg')" v-if="isMobile" :hand="require('./mo/2/小手.png')">
      </Map>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
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

.desc {
  width: size(495);
  top: size(74);
  right: size(504);
  li {
    font-size: size(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.08;
    letter-spacing: 2px;
    text-align: left;
    color: #231815;
    white-space: nowrap;
  }
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
  .section2 {
    width: 100vw;
    height: size-m(804);
    // background-image: url('./mo/1/bg.jpg');
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
  name: 'section2',

  components: {
    Map,
  },

  data() {
    return {
      isMobile,
      isTablet,
      text_list: [
        '大安區好人家,才看得起的大安選房學',
        '瑞安街為首,大安森林首環,頭等艙位置',
        '鞏固城市中心點,綠海寫生、静巷養生',
        '高隱密静巷宅、第一直擊大安森林者,只有瑞安白在',
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
