<template>
  <div class="relative">
    <img
      src="./s3/area3_img1.png"
      alt=""
      class="img1 absolute"
    >
    <img
      src="./s3/area3_img2.png"
      alt=""
      class="img2 absolute"
    >
    <img
      src="./s3/area3_img3.png"
      alt=""
      class="img3 absolute"
    >
    <img
      src="./s3/area3_img4.png"
      alt=""
      class="img4 absolute"
    >
    <img
      src="./s3/area3_logo.png"
      alt=""
      class="logo absolute"
    >
    <div class="border1 absolute"></div>
    <div class="border2 absolute"></div>
    <img
      src="./s3/area3_decoration.png"
      alt=""
      class="decoration absolute"
    >
    <div class="title absolute">達麗要和高雄一起<br />被世界看見！</div>
    <div class="hr absolute"></div>
    <div class="desc absolute">
      達麗上市實力品牌，跨國揚名西雅圖<br />
      獲得多項國家級榮耀，擘建佔地萬坪<br />
      「達麗米樂」，成就高雄最北百貨，同時聯手秀泰影城，打造頂級商場影城。<br />
      未來百貨影城、國際飯店、A級商辦大連線！「上東京」迎向高雄新百貨時代！
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  height: size(1080);
  overflow: hidden;
  background: #fff;
}

.img1 {
  width: size(506);
  right: size(95);
  top: size(53);
}

.img2 {
  width: size(600);
  right: size(620);
  top: size(53);
}

.img3 {
  width: size(297);
  right: size(620);
  top: size(576);
}

.img4 {
  width: size(288);
  right: size(932);
  top: size(576);
}

.border1 {
  width: size(569);
  height: size(958);
  border: 1px solid #036eb6;
  top: size(53);
  left: size(95);
}

.border2 {
  width: size(519);
  height: size(908);
  border: 2px solid #036eb6;
  top: size(79);
  left: size(121);
}

.decoration {
  width: size(428);
  top: size(780);
  right: size(1229);
}

.logo {
  width: size(297);
  top: size(180);
  left: size(240);
}

.title {
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: 5.03px;
  text-align: center;
  color: #036eb6;
  width: size(450);
  top: size(280);
  left: size(159);
  white-space: nowrap;
}

.hr {
  width: size(299);
  height: 2px;
  background-color: #036eb6;
  top: size(428);
  left: size(233);
}

.desc {
  font-size: size(25);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: normal;
  text-align: center;
  color: #231815;
  width: size(408);
  top: size(455);
  left: size(176);
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
  .relative {
    height: size-m(1738 / 2);
    overflow: hidden;
    background: #fff;
  }
  .img1 {
    width: size-m(144);
    height: size-m(544 / 2);
    right: size-m(55 / 2);
    top: size-m(80 / 2);
  }

  .img2 {
    width: size-m(340 / 2);
    right: size-m(353 / 2);
    top: size-m(80 / 2 );
  }

  .img3 {
    width: size-m(164 / 2);
    height: size-m(248 / 2);
    right: size-m(531 / 2);
    top: size-m(377 / 2);
  }

  .img4 {
    width: size-m(169 / 2);
    height: size-m(248 / 2);
    right: size-m(353 / 2);
    top: size-m(377 / 2);
  }

  .border1 {
    width: size-m(640 / 2);
    height: size-m(958 / 2);
    border: 1px solid #036eb6;
    top: size-m(656 / 2);
    left: size-m(55 / 2);
  }

  .border2 {
    width: size-m(583 / 2);
    height: size-m(908 / 2);
    border: 2px solid #036eb6;
    top: size-m(681 / 2);
    left: size-m(83 / 2);
  }

  .decoration {
    width: size-m(215);
    top: size-m(1383 / 2);
    right: size-m(100 / 2);
  }

  .logo {
    width: size-m(297 / 2);
    top: size-m(783 / 2);
    left: size-m(226 / 2);
  }

  .title {
    font-size: size-m(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: 5.03px;
    text-align: center;
    color: #036eb6;
    width: size-m(442 / 2);
    top: size-m(882 / 2);
    left: size-m(151 / 2);
    white-space: nowrap;
  }

  .hr {
    width: size-m(299 / 2);
    height: 2px;
    background-color: #036eb6;
    top: size-m(1030 / 2);
    left: size-m(225 / 2);
  }

  .desc {
    font-size: size-m(12.5);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: normal;
    text-align: center;
    color: #231815;
    width: size-m(408 / 2);
    top: size-m(1057 / 2);
    left: size-m(170 / 2);
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import Map from '@/components/Map.vue'

export default {
  name: 'section3',

  components: {
    Map,
  },
  data() {
    return {
      isMobile,
      bgSrc: require('./mo/3/map.jpg'),
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
