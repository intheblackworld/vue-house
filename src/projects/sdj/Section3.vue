<template>
  <div class="relative">
    <div class="flex box1">
      <div class="flex box2">
        <div class="txt">
        <img
          v-lazy="require('./s3/tm_dali_logo.png')"
          alt=""
          class="logo"
        >
        <div class="title">達麗要和高雄一起<br />被世界看見！</div>
        <div class="hr"></div>
        <div class="desc">
          達麗上市實力品牌，跨國揚名西雅圖<br />
          獲得多項國家級榮耀，擘建佔地萬坪<br />
          「達麗米樂」，成就高雄最北百貨，同時聯手秀泰影城，打造頂級商場影城。<br />
          未來百貨影城、國際飯店、A級商辦大連線！「上東京」迎向高雄新百貨時代！
        </div>
        </div>
        <img
          v-lazy="require('./s3/area3_decoration.png')"
          alt=""
          class="decoration absolute"
        >
    </div>
    <div class="box3">
    <img
      v-lazy="require('./s3/area3_img2.png')"
      alt=""
      class="img2"
    >
    <div class="flex box4">
    <img
      v-lazy="require('./s3/area3_img4.png')"
      alt=""
      class="img4"
    >
    <img
      v-lazy="require('./s3/area3_img3.png')"
      alt=""
      class="img3"
    >
    </div>
    </div>
    <img
      v-lazy="require('./s3/area3_img1.png')"
      alt=""
      class="img1"
    >
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  height:100vh;
  overflow: hidden;
  background: #fff;
}
.box1{padding: size(54) 0;margin: auto; width: size(1700);
  height:100vh;}
.box2{
  flex: 1;
  border: 1px solid #036eb6;
 // width: size(569);
  flex-direction:column;
  position: relative;justify-content:center;align-items:center;
  margin: 0 size(25) 0 0;
  &::before{content: "";
  width: calc(100% - 2.6041666667vw);
  height:calc(100% - 2.6041666667vw);
  border: 2px solid #036eb6;
  position:absolute;
  top: size(25);
  left:size(25);
  }
}
.box3{flex: 1;
  margin: 0 size(25) 0 0;}
.box4{justify-content:space-between;
 height:calc(50vh - 4.5vw);}
.img1 {
  flex: 1;
 /// width: size(506);
  
//  right: size(95);
//  top: size(53);
}

.img2 {margin: 0 0 size(25) 0;width: 100%;
 height:calc(50vh - 2.6041666667vw);
// right: size(620);
//  top: size(53);
}

.img3 {
 width: size(297);
//  right: size(620);
 // top: size(576);
}

.img4 {width: size(288);margin: 0 size(25) 0 0;
 //@function width: size(288);
//  right: size(932);
//  top: size(576);
}

.decoration {
  width: size(428);
  bottom:size(-50);
  right:size(-30);
}

.logo {
  width:auto;
  margin: size(50) 0 0 0 ; 
}

.title {
  font-size: size(40);
  margin: size(40) 0 size(14) 0 ; 
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: 5.03px;
  text-align: center;
  color: #036eb6;
  width: size(450);
  //top: size(280);
  //left: size(159);
  white-space: nowrap;transform:scaleX(0.95);
}

.hr {
  width: size(310);
  height: 2px;
  background-color: #036eb6;
  margin:auto;
}

.desc {
  margin: size(26) auto size(100) auto ; 
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: normal;
  text-align: center;
  color: #231815;
  width: size(420);transform:scaleX(0.95);
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
.box1{flex-wrap: wrap;}
.box2{
  margin: 0 0 size-m(25) 0; }

  .img1 {
    width: size-m(144);
    height: size-m(544 / 2);
  }

  .img2 {
    width: size-m(340 / 2);
    right: size-m(353 / 2);
    height:auto;
  }

  .img3 {
    width: size-m(164 / 2);
    height: size-m(248 / 2);
  }

  .img4 {
    width: size-m(169 / 2);
    height: size-m(248 / 2);
  }

  .decoration {
    width: size-m(215);
   // top: size-m(1383 / 2);
    right: size-m(100 / 2);bottom: -7vw;
  }

  .logo {
    width: size-m(250 / 2);
    top: size-m(783 / 2);
    left: size-m(226 / 2);
  margin: size-m(50) 0 0 0 ; 
  }

  .title {
    font-size: size-m(25);
  margin: size-m(40) 0 size-m(14) 0 ; 
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
    width: size-m(310 / 2);
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
    width: size-m(450 / 2);
    top: size-m(1057 / 2);
  margin: size-m(20) auto size-m(120) auto ; 
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
