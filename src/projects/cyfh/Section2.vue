<template>
  <div class="relative section2">
    <div v-if="!isMobile">
      <div class="row">
        <div class="text-row flex-ac flex-jb">
          <div class="title-block">
            <h3 class="subtitle">中山北路第一排</h3>
            <h3 class="title">與雙溪河畔 奇蹟相遇</h3>
          </div>
          <div class="desc">孕育士林的口袋之河—雙溪，千百年來潺潺流淌，不舍晝夜，靜靜流動的歲月裡，無數人在這塊土地上留下生命的印記！「全陽豐會」在這條中山北路與雙溪十字交會的地段，一期一會、知音相遇。</div>
        </div>
        <div class="flex-ac flex-jb">
          <img
            src="./s2/img.jpg"
            alt=""
            class="img1"
          >
          <img
            src="./s2/road.png"
            alt=""
            class="road"
          >
        </div>
      </div>
      <div class="row flex-ab flex-jb">
        <div class="flex-ac flex-jb">
          <img
            src="./s3/img.jpg"
            alt=""
            class="img1"
          >
        </div>
        <div class="text-block">
          <div class="title-block">
            <h3 class="title">吳念真導演 深情執導</h3>
            <h3 class="subtitle">真情上映：</h3>
          </div>
          <div class="desc">《全陽豐會》緊鄰水岸，<br />
            這條士林碩果僅存的河水，<br />
            千百年來潺潺流淌，<br />
            河面曾經浮現的天光山色，<br />
            您或許不曾看過，</div>
          <div class="desc">
            但，如果有緣<br />
            此後你和家人，<br />
            都將成為這片河岸風景的一部分。
          </div>
        </div>
      </div>

      <div class="row4">
        <div class="flex-ac flex-jb">
          <img
            src="./s2/img.jpg"
            alt=""
            class="img1"
          >
        </div>
        <div class="text-row flex-ac flex-jb">
          <div class="title-block">
            <h3 class="subtitle">優雅生活美學</h3>
            <h3 class="title">台北人的集體記憶</h3>
          </div>
          <div class="desc">中山北路五段跨界天母福林橋一帶，圓山、士林官邸、雙溪、故宮…貴族血統人文薈萃，漫遊傳奇老舖郭元益、士林夜市、文青風格士東市場、華榮市場…所有的豐盛美好都在這裡相聚！</div>
        </div>
      </div>
    </div>
    <div v-if="isMobile">

    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  // overflow: hidden;
  position: relative;
  z-index: 2;
  //height: 100vh;
}

.section2 {
  background-image: url('./s2/bg.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
}

// .bg-img {
//   width: 100vw;
//   height: auto;
//   position: absolute;
//   display: block;
//   top: 0;
//   left: 0;
//   object-fit: cover;
//   &:first-child {
//     position: relative;
//   }
// }

.img1 {
  width: size(1138);
}

.road {
  width: size(313);
}

.text-row {
  width: size(1138);
  min-height: size(112);
}

.text-block {
  width: size(360);
  .title-block {
    .title {
      // font-size: size(30);
      white-space: nowrap;
    }
  }
}

.title-block {
  width: size(460);
  height: size(75 + 10);
  border-left: 3px solid #000;
  top: 0;
  padding-left: size(20);
  padding-bottom: size(10);

  .title {
    font-size: size(37);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: 7.55px;
    text-align: left;
    color: #000000;
  }

  .subtitle {
    font-size: size(31);
    font-weight: normal;
    letter-spacing: 6.47px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    text-align: left;
    color: #000000;
  }
}

.desc {
  width: size(670);
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: 2px;
  text-align: left;
  color: #333333;
}

.row {
  width: size(1138 + 78 + 313);
  margin: 0 auto 0;
  padding-bottom: 200px;
}

.row4 {
  width: size(1561);
  margin: 0 auto;

  .img1, .text-row {
    width: 100%;
  }
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .relative {
    margin: 0 0 0 0;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section2',
  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
