<template>
  <div class="relative">
    <div v-if="!isMobile" class="c">
      <div class="border absolute"></div>
      <img
        src="./s9/資產 16-801.png"
        alt=""
        class="logo-b absolute"
      >
      <swiper
        :options="swiperOption"
        ref="mySwiper"
        data-aos="fade"
        data-aos-delay="200"
        class="slide-container absolute"
        @slideChangeTransitionStart="slideChanged"
      >
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.desc + index"
        >
          <img
            :src="slide.img"
            alt=""
            class="item-img"
          >
        </swiper-slide>
        <div
          class="swiper-button-prev"
          slot="button-prev"
        >
          <img
            src="./s9/資產 14-801.png"
            alt
          />
        </div>
        <div
          class="swiper-button-next"
          slot="button-next"
        >
          <img
            src="./s9/資產 13-801.png"
            alt
          />
        </div>
        <!-- <div
          class="swiper-pagination"
          slot="pagination"
        ></div> -->
      </swiper>
      <img
        :src="slideList[slideIndex].icon"
        alt=""
        class="icon absolute"
      >
      <h3
        class="absolute title"
        v-html="slideList[slideIndex].title"
      ></h3>
      <h3
        class="subtitle absolute"
        v-html="slideList[slideIndex].subtitle"
      ></h3>
      <div class="hr absolute"></div>
      <div
        :class="`desc absolute desc${slideIndex + 1}`"
        v-html="slideList[slideIndex].desc"
      ></div>
    </div>
    <div v-if="isMobile">

    </div>
  </div>
</template>
<style lang="scss">
.desc {
  span {
    color: #68361a;
    font-weight: bold;
  }
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  // overflow: hidden;
  position: relative;
  height: size(1080);
  margin: 0;
  background-color: transparent;
  // background-image: url('./s9/bg.jpg');
  // background-attachment: fixed;
}

.swiper-container {
  width: size(1000);
  height: size(600);
  top: size(260);
  right: size(83);
  border: 3px solid #68361a;
}

.item-img {
  width: 100%;
}
.border {
  width: size(1000);
  height: size(600);
  top: size(300);
  right: size(43);
  border: 3px solid #68361a;
}

.icon {
  top: size(174);
  height: size(220);
  left: size(420);
  transform: translateX(-50%);
}

.title {
  font-size: size(55);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 12.1px;
  text-align: center;
  color: #68361a;
  top: size(396);
  left: size(420);
  transform: translateX(-50%);
}
.c{
  font-size:size(19);}
.desc {
  width: size(560);
  font-size:1em;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.42;
  letter-spacing: 1.52px;
  text-align: justify;
  color: #3e3a39;
  top: size(597);
  left: size(420);
  transform: translateX(-50%);
  span {
    color: #68361a;
    font-weight: bold;
  }
  &.desc1 {
    font-size: 0.95em;
  }

  &.desc2, &.desc3, &.desc4 {
    font-size: 0.9em;
  }

  &.desc3 {
    width: size(640);
    margin-left: size(50);
    line-height: 1.8;
  }
  &.desc5 {
    width: size(640);
    margin-left: size(50);
    line-height: 1.8;
  }
}

.hr {
  background-color: #68361a;
  width: size(677);
  height: 1px;
  top: size(580);
  left: size(420);
  transform: translateX(-50%);
}

.subtitle {
  font-size: size(59);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 8.28px;
  text-align: left;
  color: #68361a;
  top: size(158);
  right: size(308);
}

.logo-b {
  height: size(627);
  top: size(771);
  left: size(340 - 627);
}

.swiper-button-next {
  right: 0 !important;
  bottom: 0 !important;
  top: auto !important;
  height: auto !important;
}

.swiper-button-prev {
  left: auto !important;
  right: 28px !important;
  bottom: 0 !important;
  top: auto !important;
  height: auto !important;
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
    height: auto;
    margin: 0;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
// import Parallax from '@/components/Parallax.vue'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'section9',
  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
    // Parallax,
  },
  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: isMobile ? 2.2 : 1,
        centeredSlides: true,
        spaceBetween: isMobile ? 10 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        effect: isMobile ? '' : 'fade',

        autoplay: {
          delay: 30000,
          disableOnInteraction: true,
        },
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      slideList: [
        {
          img: require('./s9/01.png'),
          icon: require('./s9/icon (1).png'),
          title: '耶魯鎖-原廠保固<br />2年24hr售後服務',
          subtitle: '世界最大 美國第一',
          desc:
            '百年經典品牌及鎖具專家，耶魯以百年製鎖經驗，結合創新技術，生產各式鎖具及保安產品。銷售全球超過125個國家，為每個家庭及企業提供最完善的保障。以最先進的科技成果，為您免去隨身攜帶鑰匙不便，用戶透過自己的智慧型手機確保居家安全。',
        },
        {
          img: require('./s9/02.png'),
          icon: require('./s9/icon (2).png'),
          title: '太格精工木地板<br />隔音耐磨綠建材',
          subtitle: '全球最大 德國第一',
          desc:
            'kronotex太格精工木地板，全球最大木業集團生產商，歐洲E1健康基材100%德國製造，是國內豪宅第一品牌首選優質建材！高效能隔音板降噪，易清潔保養，永久免打蠟，更是符合內政部營建署2020年7月1日起，正式實施之建築技術規則「樓板衝擊音」隔音規範。',
        },
        {
          img: require('./s9/03.png'),
          icon: require('./s9/icon (3).png'),
          title: '強化玻璃+Low-e玻璃<br />膠合玻璃+中空玻璃',
          subtitle: '豪宅配備　綠色節能',
          desc:
            '本案玻璃的優點<br /><span>【高防曬】</span>  有效阻隔紫外線,呵護您的肌膚,降低像俱褪色機會。<br /><span>【高省能】</span>  大量阻絕輻射熱,減少空調、暖氣之消耗,以節省電費。<br /><span>【高強度】</span> 強度約為普通玻璃的5倍,當玻璃被外力破壞時,成為豆粒大的顆粒,減少對人體的傷害。<br /><span>【高耐震】</span> 因中間夾著強韌而富粘著力的中間膜,因此比其他種類玻璃具較高之耐震性、防盜性、防爆性、防彈性。<br /><span>【高隔音】</span> 使用PVB膜膠合玻璃搭配中空玻璃,是最好的隔音工法。',
        },
        {
          img: require('./s9/04.png'),
          icon: require('./s9/icon (4).png'),
          title: '柱中柱 Alfa Safe<br />耐震系統工法',
          subtitle: '台灣研發　創新專利',
          desc:
            'Alfa  Safe耐震系統工法是戴雲發結構技師苦心研發,其中Alfa Safe柱中柱是以一體式連續系統柱箍+內核心圓形箍筋之雙重圍束設計,施作於大樓之低樓層結構柱的鋼筋綁紮,例如1F及夾層。經國家地震工程研究中心實體試驗證實,其抗震韌性可提升100%,為傳統柱抗震韌性的2倍,可發揮結構設計「大震不倒」的精神。',
        },
        {
          img: require('./s9/05.png'),
          icon: require('./s9/icon (5).png'),
          title: '過濾系統<br />確保用水品質',
          subtitle: '專業科技 優質好水',
          desc:
            '<span>BWT Infinity A全自動反洗過濾器</span><br />全自動時間控制滿足最高的舒適性要求,高科技材料製作,保護水管道與連接的水循環系統免受外來雜質顆粒。<br /><span>軟水系統</span><br />用離子交換(lon-exchange)技術,將水中的鈣鎂離子與鈉離子進行轉換,達到降低水中鈣鎂離子濃度,防止水垢生成。免受外來雜質顆粒。<br /><span>殺菌系統</span><br />不只能殺死水中有害的細菌病毒,有效濾除100%<br />病毒及細菌幫您層層把關,買的放心用安心!',
        },
      ],
    }
  },

  methods: {
    slideChanged(e) {
      const swiper = this.$refs.mySwiper.swiper
      if (swiper.isEnd) {
        this.slideIndex = 0
      } else {
        this.slideIndex = swiper.activeIndex
      }
    },
  },
  created() {},

  mounted() {},

  computed: {},
}
</script>