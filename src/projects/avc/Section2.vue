<template>
  <div>
    <div class="section2">
      <img src="./s2/img.png" alt="" class="img">
      <div class="an"><img src="./s2/img2.png" alt="" class="img2"></div>

      <img src="./s1/b.png" alt="" class="b1">
      <img src="./s1/b.png" alt="" class="b2">
      <img src="./s1/b.png" alt="" class="b3">
      <img src="./s1/b.png" alt="" class="b4" v-if="isMobile">

      <h3 class="title" data-aos="fade" data-aos-delay="0">8大實力．好漾出擊</h3>
      <div class="item-container flex-ac flex-jb wrap">
        <div class="item flex-c wrap" v-for="(item, index) in item_list" :key="item[0]" data-aos="fade" :data-aos-delay="200 + index * 100 ">
          <img class="item-img" :src="item[0]" alt="">
          <h3 class="item-title">{{item[1]}}</h3>
          <h3 class="item-desc" v-html="item[2]"></h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: 100vh;
  min-height: size(1100);
  max-height: size(1100);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: size(1920);
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.img {
  @include img_r_pc(348, 157, -180);
}

  .an{
  @include img_r_pc(648, 1088, -250);
  animation: an 2.5s linear infinite alternate-reverse;
  transform:translate(10%,20%);
  transform-origin: 0 0;
  z-index: 5;
 }
.img2 {
  width: 100%;
  transform: rotate(225deg);
  transform-origin: center;
}

.title {
  @include img_r_pc(654, 57, 631);
  font-size: size(75);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(6);
  text-align: left;
  color: #c61b1f;
  white-space: nowrap;
}

.item-container {
  position: relative;
  margin: 0 auto;
  margin-top: size(222);
  width: size(1200);
  transition: all 0.3s;
  z-index: 5;
}
.item {
  width: size(240);
  position: relative;
  margin:size(20) size(10);
  &:hover {
    transform: scale(1.2) !important;
  }
}
.item-img {
  width: size(178);
  margin-bottom: size(12);
}

.item-title {
  font-size: size(32.8);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(2.62);
  text-align: center;
  color: #b81c22;
}

.item-desc {
  font-size: size(27.6);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: size(1.93);
  text-align: center;
  color: #231815;
  white-space: nowrap;
}

.b1 {
  @include img_l_pc(269, 70, 20);
  animation: an 2s linear infinite alternate;
  transform-origin: 0 0;
  transform:translate(-10%,-20%);
}

.b2 {
  @include img_l_pc(214, 823, 20);
  animation: an 5s linear infinite alternate;
  transform-origin: 0 0;
  transform:translate(-10%,-20%);
  z-index: 2;
}

.b3 {
  @include img_r_pc(360, 401, -100);
  animation: an 2.5s linear infinite alternate;
  transform-origin: 0 0;
  transform:translate(-10%,-20%);
}

@keyframes an {
  to {
    transform: translateY(0);
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
    min-height: sizem(1115);
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;

    &:nth-child(1) {
      position: relative;
    }
  }

  .img {
    @include img_r_m(160, 290, -80);
  }

  .title {
    @include img_r_m(305, 10, 34);
    font-size: sizem(35);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2.8);
    text-align: left;
    color: #c61b1f;
    white-space: nowrap;
  }

  .item-container {
    position: relative;
    margin: 0 auto;
    margin-top: sizem(112);
    width: sizem(275);
  }
  .item {
    width: sizem(125);
    margin-bottom: sizem(45);
  }
  .item-img {
    width: sizem(104);
    margin-bottom: sizem(8);
  }

  .item-title {
    font-size: sizem(19);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1.5);
    text-align: center;
    color: #b81c22;
  }

  .item-desc {
    font-size: sizem(15);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.7;
    letter-spacing: sizem(1.05);
    text-align: center;
    color: #231815;
    white-space: nowrap;
  }

  .b1 {
    @include img_l_m(74, 409, 30);
    animation: an2 1.5s infinite alternate;
  }

  .b2 {
    @include img_r_m(150, 230, -100);
    animation: an 2.5s infinite alternate;
  }

  .b3 {
    @include img_l_m(132, 997, -10);
    animation: an 2.5s infinite alternate;
  }
  .b4 {
    @include img_r_m(62, 1100, -10);
    animation: an 2s infinite alternate;
  transform:translate(-10%,-10%);
  }
  .an{
    @include img_r_m(448, 670, -250);
 }/*
  .img2 {
    @include img_r_m(448, 480, -230);
    transform: rotate(45deg);
    transform-origin: center;
  }*/

}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import Map from '@/components/Map.vue'

export default {
  name: 'section2',

  components: {
    Map,
  },

  data() {
    return {
      isPC,
      isMobile,
      isTablet,

      item_list: [
        [
          require('./s2/1.png'),
          '漾恣遊',
          '雙捷交會9橋之都<br />前進北市第1門戶',
        ],
        [require('./s2/2.png'), '漾工法', '大器崗石基座<br />防水保固5年'],
        [require('./s2/3.png'), '漾規劃', '18-28坪純5併<br />精質嚴選49戶'],
        [require('./s2/4.png'), '漾房價', '早鳥預約驚喜價<br />首購輕享水岸宅'],
        [
          require('./s2/5.png'),
          '漾增值',
          '機捷A2a站到家門<br />擴大三重都市計畫',
        ],
        [
          require('./s2/6.png'),
          '漾水岸',
          '大台北都會公園旁<br />徜徉自然最樂活',
        ],
        [require('./s2/7.png'), '漾空間', '方正格局3米6<br />雙面採光0雨遮'],
        [
          require('./s2/8.png'),
          '漾生活',
          '三重熟成市中心<br />吃喝玩樂All in one',
        ],
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
