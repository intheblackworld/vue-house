<template>
  <div class="section3">
    <div class="container flex">
      <img src="../shin-lan/abont/2/pic1.png" alt="" class="img">
      <div class="content">
        <div class="shin-lan-title-h title1 gold" data-aos="fade">
          誠信<span data-aos="flip-right"></span>服務
        </div>
        <div class="desc desc1">
          誠信是企業的根本，以信立業以誠待人；欣聯建設對每一塊土地，從規劃設計到營建施工，無不秉持著精雕細琢，卓然品味；成就以心建造，專注完美；提供最優質的居住品質，以需求為導向，讓顧客買的安心、住的滿意。
        </div>
      </div>
      <img src="../shin-lan/abont/2/img2.jpg" alt="" class="right-img" v-if="isPC">
      <img src="../shin-lan/mo/abont/2/img2.jpg" alt="" class="right-img" v-else>
    </div>

    <div class="container flex container2" id="container2">
      <div>
        <img src="../shin-lan/abont/2/img3.jpg" alt="" class="top-img">
        <div class="shin-lan-title-h title2" data-aos="fade">
          堅持<span data-aos="flip-right"></span>品質
        </div>
        <div class="desc desc2">
          堅實的營建技術與施工能力，是對建築的一種承諾和責任。欣聯建設在每一個環節精雕細琢，默默的耕耘，踏實的做事；產品規劃要求完美、營造品質嚴格把關，追求盡善盡美。精工建築，臻於至善；極致工藝，超越永恆。
        </div>
      </div>
      <img src="../shin-lan/abont/2/img4.jpg" alt="" class="bottom-img">
    </div>

    <div class="container container3" id="container3">
      <img src="../shin-lan/abont/2/img5.jpg" alt="" class="full-img" v-if="isPC">
      <img src="../shin-lan/mo/abont/2/img5.jpg" alt="" class="full-img" v-else>
      <div>
        <div class="shin-lan-title-h title3" data-aos="fade">
          專業<span data-aos="flip-right gold"></span>創新
        </div>
        <div class="desc desc3" v-if="isPC">
          科技日新月異，社會變遷永不停息，不想被淘汰，應秉棄墨守成規，改變思維追求新知，<br />
          且身處競爭的二十一世紀環境中，追求精、準、快低成本和高品質的工作成果，是目標也是手段，唯有平時充實自己，<br />
          身體力行、且能抱持放開胸襟，創新改變，鍥而不捨，才能繼往開來、精益求精，在專業領域創造另一番新局。
        </div>
        <div class="desc desc3" v-else>
          科技日新月異，社會變遷永不停息，不想被淘汰，應秉棄墨守成規，改變思維追求新知，且身處競爭的二十一世紀環境中，追求精、準、快低成本和高品質的工作成果，是目標也是手段，唯有平時充實自己，身體力行、且能抱持放開胸襟，創新改變，鍥而不捨，才能繼往開來、精益求精，在專業領域創造另一番新局。
        </div>
      </div>
    </div>

    <div class="container flex container4" id="container4">
      <div>
        <img src="../shin-lan/abont/2/img6.jpg" alt="" class="top-img">
        <div class="shin-lan-title-h title2" data-aos="fade">
          永續<span data-aos="flip-right"></span>經營
        </div>
        <div class="desc desc2">
          建築不只是良心事業，更是腳踏實地，始終如一的堅持。企業的永續經營，不僅對員工、協力廠商、客戶、甚至對社會皆是負責任的展現；所以不論景氣浮沉變化，「精益求精、積極進取」堅守本業，不斷的創新、提升自我品質，就是欣聯永續的經營準則。
        </div>
      </div>
      <img src="../shin-lan/abont/2/img7.jpg" alt="" class="bottom-img no-margin">
    </div>
      <img src="../shin-lan/abont/2/pic2.png" alt="" class="pic2" v-if="isPC">
      <img src="../shin-lan/mo/abont/2/pic2.png" alt="" class="pic2" v-else>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section3 {
  width: 100%;
  // height: 100vh;
  // min-height: calc(900 * 100vw / 1920);
  // max-height: calc(1080 * 100vw / 1920);
  position: relative;
  margin: 0;
  // background: url('s1/bg.jpg') center;
  background-size: cover;
  overflow: hidden;
  text-align: center;

  // 手機版
  @include md {
    // height: 100vh;
    height: auto;
    min-height: calc(604 * 100vw / 375);
    // max-height: calc(812 * 100vw / 375);
  }
}

.container {
  width: size(1234);
  margin: size(162) auto size(240);
  position: relative;

  @include md {
    width: sizem(345);
    margin: sizem(60) auto;
    flex-wrap: wrap;
  }
}

.title1 {
  @include img_l_pc(240, 148, 330);

  @include md {
    @include img_r_m(126, 60, 15);
    font-size: sizem(28);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: sizem(1.68);
    text-align: left;
    color: #b18863;
  }
}

.img {
  @include img_l_pc(618, -180, -300);

  @include md {
    @include img_l_m(180, -50, -30);
  }
}

.content {
  width: size(1234 - 629);
  height: size(586);
  background-color: #fff;

  @include md {
    width: 100%;
    height: sizem(290);
  }
}

.right-img {
  width: size(629);
  height: size(586);

  @include md {
    width: 100%;
    height: auto;
  }
}

.desc {
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: size(1.44);
  text-align: justify;
  color: #000;
  @include md {
    @include img_c_m(310, 190);
    font-size: sizem(15);
    line-height: 2;
    letter-spacing: normal;
  }
}

.desc1 {
  @include img_l_pc(487, 357, 61);
  @include md {
    @include img_c_m(310, 115);
  }
}

.container2 {
  @include md {
    position: relative;
    height: sizem(530);
    align-items: flex-start;
  }
}

.title2 {
  @include img_l_pc(240, 356, 0);

  @include md {
    @include img_l_m(126, 110, 13);
    font-size: sizem(28);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: sizem(1.68);
    text-align: left;
    color: #000;
  }
}

.desc2 {
  @include img_l_pc(537, 453, 0);

  @include md {
    @include img_l_m(310, 160, 13);
  }
}

.top-img {
  width: size(547);
  @include md {
    width: sizem(350);
    bottom: 0;
    margin-top: 0;
    position: absolute;
    left: sizem(-15);
  }
}

.bottom-img {
  width: size(629);
  margin-top: size(120);
  margin-left: size(58);
  &.no-margin {
    margin-top: 0;
  }

  @include md {
    width: sizem(200);
    height: auto;
    margin-top: 0;
    position: absolute;
    right: sizem(-15);
  }
}

.pic2{
  @include img_r_pc(363, 0, 0);
  top: auto;
  bottom: 0;
  @include md {
    width:sizem(108);
  bottom:sizem(230);
  }

}

.full-img {
  width: 100%;
  height: auto;
  margin-bottom: size(37);
  position: relative;
  @include md {
    width: 100vw;
    position: absolute;
    left: sizem(-15);
  }
}

.container3 {
  @include md {
    height: sizem(490);
  }
}
.title3 {
  @include img_c_pc(240, 0);
  position: relative;
  margin-bottom: size(50);

  @include md {
    @include img_c_m(126, 230);
    font-size: sizem(28);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: sizem(1.68);
    text-align: justify;
    color: #b18863;
  }
}

.desc3 {
  width: 100%;
  text-align: center;

  @include md {
    width: sizem(310);
    margin: 0 auto;
    margin-top: sizem(85);
  }
}

.container4 {
  @include md {
    width: 100%;
    height: sizem(550);
  }

  .title2 {
    @include md {
      @include img_r_m(126, 111, 81);
    }
  }

  .desc2 {
    @include md {
      @include img_c_m(310, 160);
    }
  }

  .bottom-img {
    @include md {
      width: sizem(150);
      height: auto;
      margin-top: 0;
      position: absolute;
      right: auto;
      left: sizem(-15);
    }
  }

  .top-img {
    @include md {
      width: sizem(342);
      height: auto;
      top: sizem(380);
      position: absolute;
      right: 0;
      left: auto;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section3',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      // blockIndex: 0,
    }
  },

  methods: {},

  mounted() {
    // setTimeout(() => {
    //   this.blockIndex = 1
    // }, 6000)
  },

  created() {},

  computed: {},
}
</script>
