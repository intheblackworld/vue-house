<template>
  <div class="relative">
    <div class="absolute imgs flex-jb flex-ac wrap">
      <div
        class="item"
        data-aos="fade"
        data-aos-delay="600"
      >
        <img
          src="./s2/1.jpg"
          alt=""
          class="img"
        >
        <div class="item-title">泰御花園</div>
      </div>
      <div
        class="item"
        data-aos="fade"
        data-aos-delay="650"
      >
        <img
          src="./s2/2.jpg"
          alt=""
          class="img"
        >
        <div class="item-title">印象太和</div>
      </div>
      <div
        class="item"
        data-aos="fade"
        data-aos-delay="700"
      >
        <img
          src="./s2/3.jpg"
          alt=""
          class="img"
        >
        <div class="item-title">新北南海段</div>
      </div>
      <div
        class="item"
        data-aos="fade"
        data-aos-delay="750"
      >
        <img
          src="./s2/4.jpg"
          alt=""
          class="img"
        >
        <div class="item-title">親家雲硯</div>
      </div>
      <div
        class="item"
        data-aos="fade"
        data-aos-delay="800"
      >
        <img
          src="./s2/5.jpg"
          alt=""
          class="img"
        >
        <div class="item-title">親家T3市政國際中心</div>
      </div>
      <div
        class="item"
        data-aos="fade"
        data-aos-delay="850"
      >
        <img
          src="./s2/6.jpg"
          alt=""
          class="img"
        >
        <div class="item-title">故宮博物院</div>
      </div>
    </div>
    <img
      src="./s1/wlogo.png"
      alt="泰御天鑄"
      class="absolute logo-b"
      data-aos="fade"
      data-aos-delay="400"
    >
    <h3
      class="absolute title"
      data-aos="fade"
      data-aos-delay="400"
    >泰新<br />水電消防工程 精選業績</h3>
    <div
      class="absolute hr"
      data-aos="fade"
      data-aos-delay="500"
    ></div>
    <div
      class="absolute desc"
      data-aos="fade"
      data-aos-delay="600"
    >「泰新系統」長期耕耘專業水電領域，全台北、中、南都有知名代表作，曾打造公共工程、廠辦、商辦、商場、學校、住宅等多元建築作品，歷經多次國際高標考驗，曾與無數業界頂尖設計菁英合作，奠定完整而難得的跨領域水電經驗，更以32年專業作為實踐建築理念的新起點，成立「泰御建設」，多年經驗累積100% 的施工品質，2006年導入國外預製工法，由Victaulic原廠協助成立專業預製廠，開創國內第一家使用預製工法及防震工法之先創，「泰御建設」從開發、規劃、設計、施工，實踐力行精神，一步一腳印，每一細節皆嚴格把關、精準要求，完成智慧建築。</div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  // overflow: hidden;
  position: relative;
  height: size(1080);
  background-attachment: fixed;
  background-image: linear-gradient(
    to right,
    #edbd5b,
    #edbc5b 29%,
    #d6a045 66%,
    #bf842e
  );
}

.imgs {
  width: size(326 * 3 + 13 * 6);
  left: size(810);
  top: size(144);

  .item {
    width: size(326);
    margin: 0 size(13) size(45);
  }

  .img {
    width: 100%;
  }

  .item-title {
    font-size: size(28);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 4.2px;
    text-align: center;
    color: #68361a;
    margin-top: 4px;
    white-space: nowrap;
  }
}

.logo-b {
  width: size(472);
  left: size(275 - 472);
  top: size(846);
}

.title {
  top: size(250);
  left: size(117);
  font-size: size(55);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 3.3px;
  text-align: center;
  color: #ffffff;
}

.hr {
  width: size(597);
  height: 1px;
  background-color: #fff;
  left: size(118);
  top: size(400);
}

.desc {
  width: size(532);
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1.8px;
  text-align: left;
  color: #ffffff;
  top: size(450);
  left: size(150);
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
    height: size-m(609);
    margin: 14.4vw 0 0 0;
  }
  .map {
    margin: 14.4vw 0 0 0;
  }
  .txt {
    top: 0;
  }
  .subtitle {
    font-size: size-m(13);
  }

  .title {
    font-size: size-m(24);
  }

  .desc {
    font-size: size-m(12);
  }
  .animate-row {
    bottom: size-m(-100);
    z-index: 10;
    img {
      height: size-m(200);
    }

    &.animate-row2 {
      bottom: size-m(30);

      img {
        height: size-m(40);
      }
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import Map from '@/components/Map.vue'
export default {
  name: 'section2',

  components: {
    Map,
  },
  data() {
    return {
      isMobile,
      // bgSrc: require('./s2/bg.jpg'),
      // hand: require('./mo/2/箭頭.png'),
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
