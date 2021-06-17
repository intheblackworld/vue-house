<template>
  <div>
    <div class="section2">
      <img src="./s2/bg.jpg" alt="" class="bg-img" v-if="!isMobile">
      <div class="title title1" data-aos="fade-up" data-aos-delay="0">
        海灣城市
      </div>
      <div class="title title2" data-aos="fade-up" data-aos-delay="50">
        魅力無限
      </div>
      <div class="subtitle" data-aos="fade-up" data-aos-delay="100">
        Charming City
      </div>
      <div class="desc" data-aos="fade-up" data-aos-delay="150">
        交通建設、商業機能陸續到位，身價更上層樓，淡海新市鎮發展一日千里，躍升雙北菁英移居首選，<br v-if="!isMobile" />
        人口可望躍升近30萬，逐步向國際海洋城市大步邁進，如舊金山、雪梨、東京…成功經驗，未來不可限量。<br />
        [名軒海樂地] 位處淡海中心商業區、輕軌出站就到家，地利天成、無可複製，打造海灣俱樂部名宅新指標！
      </div>
      <Map :bgSrc="require('./s2/bg.jpg')" v-if="isMobile" :hand="require('./s2/hand.png')">
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
  max-height: size(1080);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: 100%;
  height: 100%;
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
  font-size: size(55);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(7.7);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.title1 {
  @include img_l_pc(243, 53, 230);
}

.title2 {
  @include img_l_pc(243, 119, 337);
}

.subtitle {
  @include img_r_pc(657, 0, 57);
  top: auto;
  bottom: size(30);
  font-family: Arial;
  font-size: size(100);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(2);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  @include img_r_pc(1183, 53, 86);
  font-size: size(23);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.43;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
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
    height: sizem(815);
  min-height: 0;
  max-height: sizem(815);
    // height: size-m(804);
    background-color: #003c95;
    background-size: cover;
    background-attachment: scroll;
  }
  .title {
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(3.5);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    z-index: 5;
  }

  .title1 {
    @include img_l_m(111, 35, 31);
  }

  .title2 {
    @include img_l_m(111, 66, 82);
  }

  .subtitle {
    @include img_r_m(767, 0, 27);
    top: auto;
    bottom: sizem(15);
    font-family: Arial;
    font-size: sizem(30);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: sizem(0.6);
    text-align: right;
    color: #ffffff;
    white-space: nowrap;
    z-index: 5;
  }

  .desc {
    @include img_c_m(320, 114);
    z-index: 5;
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: normal;
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
        '大安區好人家，才看得起的大安選房學',
        '瑞安街為首，大安森林首環，頭等艙位置',
        '鞏固城市中心點，綠海寫生、静巷養生',
        isMobile
          ? '高隱密静巷宅、第一直擊大安森林者'
          : '高隱密静巷宅、第一直擊大安森林者，只有瑞安自在',
        isMobile ? '只有瑞安自在' : '',
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
