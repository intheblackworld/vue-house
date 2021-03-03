<template>
  <div class="section8">
    <div class="item-list flex-jb flex-as">
      <div class="item">
        <img src="./s8/07_icon_1.png" :alt="`${info.caseName}_icon`" class="icon">
        <img src="./s8/07_img_1.jpg" :alt="`${info.caseName}_img`" class="img">
        <div class="item-desc" data-aos="fade-up" data-aos-delay="200">
          戶戶明廳、絕佳採光通風<br />
          5+5膠合鍍膜玻璃，節能環保，<br />
          隔絕有害紫外線。
        </div>
      </div>
      <div class="item">
        <img src="./s8/07_icon_2.png" :alt="`${info.caseName}_icon`" class="icon">
        <img src="./s8/07_img_2.jpg" :alt="`${info.caseName}_img`" class="img">
        <div class="item-desc" data-aos="fade-up" data-aos-delay="400">
          當層排氣、英國STUDOR排水防疫系統<br />
          莎普羅吊隱式除濕機，<br />
          居家生活舒適乾爽
        </div>
      </div>
      <div class="item">
        <img src="./s8/07_icon_3.png" :alt="`${info.caseName}_icon`" class="icon">
        <img src="./s8/07_img_3.jpg" :alt="`${info.caseName}_img`" class="img">
        <div class="item-desc" data-aos="fade-up" data-aos-delay="600">
          頂樓水塔配備長庚諧振活化設備<br />
          櫻花廚下型淨水設備，<br />
          打造由內而外健康好生活。
        </div>
      </div>
    </div>
    <img src="./s8/07_dark_bg.png" :alt="`${info.caseName}_img`" class="mask">
    <h1 class="title" v-if="isPC" data-aos="fade-up" data-aos-delay="200">
      陽光、空氣、水 健康三要素，一宅收藏!
    </h1>
    <h1 class="title" v-if="isMobile" data-aos="fade-up" data-aos-delay="200">
      陽光、空氣、水 健康三要素<br />
      一宅收藏!
    </h1>
    <h3 class="desc" v-if="isPC" data-aos="fade-up" data-aos-delay="400">
      為滿足頂客族與首購小家庭需求，規劃精緻17-33坪1-3房型，<br />
      客廳優質採光零暗房，廚房擁有通風窗，小坪數產品也享前陽台。<br />
      貼心全客變服務，隨心設計專屬的居住空間，理想好生活就在這裡！
    </h3>
    <h3 class="desc" v-if="isMobile" data-aos="fade-up" data-aos-delay="400">
      為滿足頂客族與首購小家庭需求，<br />
      規劃精緻17-33坪1-3房型，<br />
      客廳優質採光零暗房，廚房擁有通風窗，<br />
      小坪數產品也享前陽台。<br />
      貼心全客變服務，隨心設計專屬的居住空間，<br />
      理想好生活就在這裡！
    </h3>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width: size(1920);
  height: size(1100);
  // min-height: size(900);
  // max-height: size(1080);
  // overflow: hidden;
  position: relative;
  // background: #552e70 fixed;
  background-size: auto;
  // z-index: 23;
}

.bg-img {
  width: size(1920);
  // height: 100%;
  // min-height: size(900);
  position: absolute;
  top: -1px;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;

  &:nth-child(1) {
    position: relative;
  }
}

.item-list {
  width: size(1571);
  margin: 0 auto size(113);
}

.item {
  width: size(515);
  position: relative;
  .img {
    width: 100%;
  }

  .icon {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: size(87);
    top: size(-20);
  }

  .item-desc {
    @include img_c_pc(333, 121);
    font-size: size(16);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.06;
    letter-spacing: normal;
    text-align: center;
    color: #606060;
  }
}

.mask {
  @include img_c_pc(1262, 591);
}

.title {
  @include img_c_pc(736, 612);
  font-size: size(34);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.67;
  letter-spacing: size(1.5);
  text-align: center;
  color: #ffffff;
}

.desc {
  @include img_c_pc(736, 692);
  font-size: size(16);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.67;
  letter-spacing: size(1.5);
  text-align: center;
  color: #ffffff;
}

.swipe-fade-leave-to {
  opacity: 0;
  z-index: 0;
}
// end
.swipe-fade-enter {
  opacity: 0;
  z-index: 1;
}

.swipe-fade-enter-active {
  transition: all 0.5s ease;
}

.swipe-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
/*
.t1 {
  width: size(751);
  top: size(483);
  left: size(585);
}

.t2 {
  width: size(751);
  top: size(711);
  left: size(585);
}
*/
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
  .section8 {
    width: 100vw;
    height: sizem(1093);
    min-height: sizem(1093);
    // max-height: sizem(750);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
    background: transparent;
  }

  .item-list {
    width: 100vw;
    margin: sizem(65) auto sizem(13);
    flex-wrap: wrap;
  }

  .item {
    width: sizem(375);
    height: sizem(271);
    position: relative;
    background-color: #f6f6f6;
    .img {
      width: sizem(139);
      left: 0;
      top: 0;
      position: absolute;
    }

    .icon {
      position: absolute;
      // left: 0;
      right: auto;
      margin: 0 auto;
      width: sizem(58);
      top: sizem(0);
      left: sizem(110);
      z-index: 1;
    }

    .item-desc {
      @include img_r_m(190, 90, 30);
      font-size: sizem(13);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.54;
      letter-spacing: normal;
      text-align: left;
      color: #606060;
      color: #606060;
    }
  }

  .mask {
    @include img_c_m(375, 591);
    height: sizem(281);
    top: auto;
    bottom: 0;
    background-color: #929292;
  }

  .title {
    @include img_c_m(268, 612);
    top: auto;
    bottom: sizem(203);
    font-size: sizem(20);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: sizem(2);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }

  .desc {
    @include img_c_m(325, 692);
    top: auto;
    bottom: sizem(34);
    font-size: sizem(13);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }
}
</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section8',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
