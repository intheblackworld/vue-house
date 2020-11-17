<template>
  <div>
    <div class="section2" v-if="isPC">
      <img src="./s2/img.png" alt="" class="img">
      <img src="./s2/img2.png" alt="" class="img2">

      <img src="./s1/b.png" alt="" class="b1">
      <img src="./s1/b.png" alt="" class="b2">
      <img src="./s1/b.png" alt="" class="b3">

      <h3 class="title">8大實力．好漾出擊</h3>
      <div class="item-container flex-ac flex-jb wrap">
        <div class="item flex-c wrap" v-for="item in item_list" :key="item[0]">
          <img class="item-img" :src="item[0]" alt="">
          <h3 class="item-title">{{item[1]}}</h3>
          <h3 class="item-desc" v-html="item[2]"></h3>
        </div>
      </div>
    </div>
    <div class="section2" v-if="isMobile">
      <h3 class="title absolute">遇見台南曼哈頓奇緣</h3>
      <h3 class="subtitle absolute">21,000坪都市綠肺特區</h3>
      <div class="desc absolute">
        有「南台灣信義計畫區」之稱的平實特區計畫，位於東區與永康區交界處，總面積約42.4公頃，串聯國賓影城、南紡購物中心與成大商圈等繁華生活圈，並提供商業辦公大樓、企業總部、商務中心、展覽中心等用地。未來發展與嶄新城市地貌，成就著名紐約「曼哈頓」城區般的現代天際風格與生活型態，精彩可期！
      </div>
      <Map :bgSrc="require('./s2/bg.jpg')" :bgText="require('./s2/t.png')" :hand="require('./mo/2/小手.png')">
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

.img2 {
  @include img_r_pc(648, 1088, -180);
  transform: rotate(45deg);
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
  width: size(1088);
}
.item {
  width: size(240);
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
  letter-spacing:size( 1.93);
  text-align: center;
  color: #231815;
  white-space: nowrap;
}

.b1 {
  @include img_l_pc(269, 70, 20);
  animation: an2 1.5s infinite alternate;
}

.b2 {
  @include img_l_pc(214, 823, 20);
  animation: an 2.5s infinite alternate;
}

.b3 {
  @include img_r_pc(360, 401, -100);
  animation: an 2.5s infinite alternate;
}

@keyframes an {
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes an2 {
  to {
    transform: translateY(0) rotate(5deg);
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
    min-height: auto;
    height: sizem(799);
    min-height: sizem(0);
    max-height: sizem(900);
    background-color: #2f99f1;
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

  .title {
    width: sizem(257);
    top: sizem(28);
    left: sizem(34);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.48;
    letter-spacing: sizem(4);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    z-index: 5;
  }

  .subtitle {
    width: sizem(241);
    top: sizem(64);
    left: sizem(33);
    font-size: sizem(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.35;
    letter-spacing: sizem(3.24);
    text-align: left;
    color: #333333;
    white-space: nowrap;
    z-index: 5;
  }
  .desc {
    width: sizem(310);
    top: sizem(108);
    right: sizem(33);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: sizem(0.75);
    text-align: left;
    color: #333333;
    z-index: 5;
  }
  .map {
    margin: sizem(195) 0 0 0;
  }
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
        [require('./s2/1.png'), '漾恣遊', '雙捷交會9橋之都<br />前進北市第1門戶'],
        [require('./s2/2.png'), '漾工法', '大器崗石基座<br /防水保固5年'],
        [require('./s2/3.png'), '漾規劃', '18-28坪純5併<br /精質嚴選49戶'],
        [require('./s2/4.png'), '漾房價', '早鳥預約驚喜價<br /首購輕享水岸宅'],
        [require('./s2/5.png'), '漾增值', '機捷A2a站到家門<br /擴大三重都市計畫'],
        [require('./s2/6.png'), '漾水岸', '大台北都會公園旁<br /徜徉自然最樂活'],
        [require('./s2/7.png'), '漾空間', '方正格局3米6<br /雙面採光0雨遮'],
        [require('./s2/8.png'), '漾生活', '三重熟成市中心<br /吃喝玩樂All in one'],
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
