<template>
  <div class="section10">
    <img src="./s10/10_logo_1.png" :alt="`${info.caseName}_img`" class="logo1" data-aos="fade-up" data-aos-delay="200">
    <img src="./s10/10_logo_2.png" :alt="`${info.caseName}_img`" class="logo2" v-if="isPC" data-aos="fade-up" data-aos-delay="200">
    <img src="./mobile/10/10_logo_2.png" :alt="`${info.caseName}_img`" class="logo2" v-if="isMobile">
    <img src="./mobile/10/10_flower_m.png" :alt="`${info.caseName}_f`" class="f10" v-if="isMobile">
    <img src="./s10/10_title.png" :alt="`${info.caseName}_img`" class="title-img">
    <div class="item1" data-aos="fade-up" data-aos-delay="200">
      <div class="title">
        豪宅認證指標 綠建築銀級標章
      </div>
      <div class="content" v-if="isMobile">
        鑽石級　展覽館、學校<br />
        黃金級　博物館、行政中心<br />
        銀 級　頂級豪宅、頂級商辦<br />
        銅 級　廠辦、休閒中心<br />
        合格級　一般家用住宅
      </div>
      <div class="desc">
        綠建築等級是依「綠建築九大評估指標系統」(EEWH)為分級依序，共有合格級、銅級、銀級、黃金級、鑽石級等五級，獲銀級綠建築標章肯定的自慢藏，致力為您打造安心、節能、健康的和諧共生環保家園。
      </div>
    </div>
    <div class="item2" data-aos="fade-up" data-aos-delay="200">
      <div class="title">
        台大結構外審 建築品質會說話
      </div>
      <div class="desc" v-if="isPC">
        台灣處於地震帶上，對建築結構格外要求，除了日本國土開發營造商嚴謹精工，在結構安全上更有參與台中機場工程的「聯邦工程」為結構顧問，以國家交通建設的高標，為自慢藏的基礎工程層層把關監督，並請「台灣大學地震中心」以第三方公證單位，來作結構外審，確保建築骨架的每一道環節，安全審核滴水不露，經得起公正單位與專業數據的檢驗，才是真正安全安心的自慢建築。
      </div>
      <div class="desc" v-if="isMobile">
        除了日本國土開發營造商嚴謹精工，在結構安全上更有參與台中機場工程的「聯邦工程」為結構顧問，為自慢藏的基礎工程層層把關監督，並請「台灣大學地震中心」結構外審，經得起公正單位與專業數據的檢驗，才是真正安全安心的自慢建築。
      </div>
    </div>
    <div class="item3" data-aos="fade-up" data-aos-delay="400">
      <div class="title">
        國家級保證 SRC鋼骨耐震標章
      </div>
      <div class="desc" v-if="isPC">
        台灣現行的建築法規中，對於建築物耐震力的標準為0.24g，是指建築物可承受地震作用力所產生加速度的數值，相當於可抗5級地震的震度。自慢藏採用中鋼、新日鐵最頂級鋼材，高規格耐震工法，獲國家耐震建築標章認證，可達超越法規標準的6級耐震力，更能保障生命財產安全。
      </div>
      <div class="desc" v-if="isMobile">
        自慢藏採用中鋼、新日鐵最頂級鋼材，高規格耐震工法，獲國家耐震建築標章認證，可達超越法規標準的6級耐震力，更能保障生命財產安全。
      </div>
    </div>
    <div class="item4" data-aos="fade-up" data-aos-delay="400">
      <div class="title">
        防疫建築2.0 居家安全最安心
      </div>
      <div class="desc" v-if="isPC">
        因應疫情的長期挑戰，「無毒設計」已不可缺，自慢藏採「建築設計防疫」、「室內設計防疫」與「建材及設備的防疫」，運用空間動線及抗菌建材、室內空氣流通、當層排氣等規劃，打造值得放心的居住環境；戶戶中空加厚隔音樓板，降低震動重擊與噪音，並具隔熱效果，能幫助調節室內溫度，降低室內能源消耗，達成環保節能的健康綠生活。
      </div>
      <div class="desc" v-if="isMobile">
        自慢藏採「建築設計防疫」、「室內設計防疫」與「建材及設備的防疫」，打造值得放心的居住環境；戶戶中空加厚隔音樓板，降低震動重擊與噪音，並具隔熱效果，能幫助調節室內溫度，降低室內能源消耗，達成環保節能的健康綠生活。
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section10 {
  width: 100%;
  height: size(54 + 998);
  min-height: size(54 + 998);
  max-height: size(54 + 998);
  // overflow: hidden;
  position: relative;
  background-size: auto;
  background-color: #d67f76;
  margin-top: 60px;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;

  &:nth-child(1) {
    //  position: relative;
  }
}

.logo1 {
  @include img_l_pc(233, 307 + 54, 478);
  z-index: 6;
}

.logo2 {
  @include img_l_pc(246, 318 + 54, 738);
  z-index: 6;
}

.title-img {
  @include img_l_pc(132, 40, 174);
  z-index: 6;
}

.item1 {
  @include img_l_pc(510, 40, 483);
  z-index: 6;
}

.item2 {
  @include img_r_pc(540, 40, 231);
  z-index: 6;
}

.item3 {
  @include img_l_pc(510, 536 + 54, 483);
  z-index: 6;
}

.item4 {
  @include img_r_pc(540, 496 + 54, 231);
  z-index: 6;
}

.title {
  font-size: size(36);
  line-height:1.3;
  // letter-spacing: size(0.53);
  text-align: left;
  font-weight: 600;
  color: #fff;
  margin-bottom:0.7em;
  // white-space: nowrap;
}

.desc {
  font-size: size(23);
  line-height:1.9;
  letter-spacing: 0.02em;
  text-align: justify;
  font-weight: 400;
  color: #000;
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
  .section10 {
    width: 100vw;
    min-height: sizem(1136);
    max-height: sizem(1136);
    height: sizem(1136);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
    background-color: #d37f76;
    margin-top: 30px;
  }

  .bg-img {
    width: 100vw;
    height: 100%;
    min-height: size(900);
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;
    margin-top: 0;

    &:nth-child(1) {
      position: relative;
    }
  }
  .logo1 {
    @include img_r_m(120, 412.8, 45.8);
    z-index: 6;
  }

  .logo2 {
    @include img_l_m(132.8, 592.8, 34);
    z-index: 6;
  }

  .title-img {
    @include img_l_m(47.5, 49.8, 48);
    z-index: 6;
  }

  .item1 {
    @include img_c_m(290, 220.6);
    z-index: 6;
  }

  .item3 {
    @include img_c_m(270, 541.6);
    z-index: 6;
    .desc {
      @include img_r_m(145, 45, 0);
    }
  }

  .item2 {
    @include img_c_m(270, 749.6);
    z-index: 6;
  }

  .item4 {
    @include img_c_m(270, 931.6);
    z-index: 6;
  }

  .title {
    font-size: sizem(20.4);
    line-height: sizem(22.7);
    margin-bottom: sizem(10);
    white-space: nowrap;
    
  }

  .desc {
    font-size: sizem(12.5);
    letter-spacing: 0;
  }

  .content {
    @include div_l_m(160, 120, 180, 0);
    border: 1px solid #fff;
    padding: sizem(10) 0 0  sizem(5);
    font-size: sizem(12);
    line-height:1.6;
    letter-spacing:0;
    text-align: left;
    font-weight: 400;
    color: #fff;
    // white-space: nowrap;
  }

  .f10 {
    @include img_r_m(300, 0, -70);
    transform-origin: 100% 80%;
    transform: skewY(2deg);
    animation: flow1 3s 0s ease-in-out infinite alternate;
  }
  @keyframes flow1 {
    to {
      transform: skewY(0);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section10',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      info,
    }
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
