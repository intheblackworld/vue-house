<template>
  <div class="section3">
    <div class="title" data-aos="fade" data-aos-delay="0">
      天空御選
    </div>
    <img loading="lazy" src="./s3/line.png" :alt="`${info.caseName}_img`" class="title-line"  data-aos="zoom-in" data-aos-delay="0">
    <div class="content">
      <h3 class="label"  data-aos="fade" data-aos-delay="200">
        家最堅實的後盾
      </h3>
      <div class="content-line"  data-aos="zoom-in-right" data-aos-delay="300"></div>
      <h1 class="subtitle"  data-aos="fade" data-aos-delay="400">
        東和鋼鐵╳力泰混凝土
      </h1>
      <h3 class="desc"  data-aos="fade" data-aos-delay="500">
        特選用雙北超高樓層建築、國際指標豪宅、旗艦公共工程欽定建材，「東和鋼鐵」、「力泰一級廠預拌混凝土」雙強聯手變身全家的守護者，以堅強實力捍衛您的居住安全，安心規劃一次到位，「天空之邑」為您從內至外完整把關。住安全，安心規劃一次到位，<br />「天空之邑」為您從內至外完整把關。
      </h3>
    </div>
    <div class="imgs">
      <div class="item relative"  data-aos="fade" data-aos-delay="600">
        <img loading="lazy" src="./s3/img1.jpg" :alt="`${info.caseName}_img`" class="item-img">
        <div class="mask"></div>
        <img loading="lazy" src="./s3/logo2.png" :alt="`${info.caseName}_img`" class="logo">
        <h3 class="item-title">東和鋼鐵 北市豪宅業績</h3>
        <h3 class="item-desc">華固建設-華固天鑄(38層)<br />南國建設-南國Ellipse(38層)<br />文心建設-文心AIT(26層)</h3>
        <div class="item-name">情境示意圖</div>
      </div>
      <div class="item relative"  data-aos="fade" data-aos-delay="800">
        <img loading="lazy" src="./s3/img2.jpg" :alt="`${info.caseName}_img`" class="item-img">
        <div class="mask"></div>
        <img loading="lazy" src="./s3/logo1.png" :alt="`${info.caseName}_img`" class="logo">
        <h3 class="item-title">力泰混凝土 雙北豪宅業績</h3>
        <h3 class="item-desc">遠雄建設-遠雄九五(42樓)<br />元利建設-信義聯勤(35樓)<br />威京集團-陶朱隱園(21樓)</h3>
        <div class="item-name">情境示意圖</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: 100%;
  height: size(257 + 520);
  position: relative;
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  overflow: hidden;
    z-index: 2;
    background: #fff;
}

.title {
  @include img_c_pc(216, 67);
  font-size: size(50);
  font-weight:800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: size(5);
  text-align: center;
  color: #003177;
  white-space: nowrap;
}

.title-line {
  @include img_c_pc(450, 154);
}

.content {
  @include img_l_pc(489, 330, 231);
}

.content-line {
  border-top: 1px solid #d38700;
  @include img_r_pc(218, 40, 0);
}

.label {
  @include img_l_pc(277, 0, 0);
  font-size: size(35);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3.5);
  text-align: center;
  color: #d38700;
  white-space: nowrap;
}

.subtitle {
  @include img_l_pc(489, 55, 0);
  font-size: size(45);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: size(4.5);
  text-align: center;
  color: #003177;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(489, 155, 0);
  font-size: size(20);
  font-weight:500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(1.25);
  text-align: left;
  color: #636363;
}

.imgs {
  @include img_r_pc(960, 256, 193);
  display: flex;
  justify-content: space-between;
  .item {
    width: size(470);
    height: size(513);
    position: relative;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 0 3px #003177;
      .logo {
        @include img_c_pc(230, -64);
      }
      .mask,
      .item-title,
      .item-desc {
        opacity: 1;
      }
      .item-name {
        opacity:0;
      }
    }
  }

  .item-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .logo {
    @include img_c_pc(275, 148);
    transition: all 0.7s;
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.85);
    opacity: 0;
    transition: all 0.3s;
  }

  .item-title {
    @include div_c_pc(270, 37, 205);
    box-shadow: 0 0 0 1px #606060;
    font-size: size(22);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: size(1.25);
    text-align: center;
    color: #636363;
    white-space: nowrap;
    transition: all 0.3s;
    opacity: 0;
  }

  .item-desc {
    @include img_c_pc(467, 275);
    font-size: size(21.8);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: size(1.25);
    text-align: center;
    color: #636363;
    white-space: nowrap;
    transition: all 0.5s;
    opacity: 0;
  }
  .item-name{
    @include img_r_pc(467, 0 , 15);
    width: auto;
    top: auto;
    bottom: 0;
    font-size: size(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: 0.06em;
    color: #fff;
    text-shadow:0 0 0.8em #000;
    transition: all 0.5s;
    opacity: 1;
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
  .section3 {
    width: 100%;
    height: sizem(690);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }

  .title {
    @include img_c_m(108, 50);
    font-size: sizem(25);
    //font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: sizem(2.5);
    text-align: center;
    color: #003177;
    white-space: nowrap;
  }

  .title-line {
    @include img_c_m(225, 98);
  }

  .content {
    @include img_c_m(310, 132);
  }

  .content-line {
    border-top: 1px solid #d38700;
    @include img_r_m(160, 10, 0);
  }

  .label {
    @include img_l_m(151, 0, 0);
    font-size: sizem(19);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1.9);
    text-align: center;
    color: #d38700;
    white-space: nowrap;
  }

  .subtitle {
    @include img_l_m(310, 34, 0);
    font-size: sizem(23);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: sizem(2.3);
    text-align: left;
    color: #003177;
    white-space: nowrap;
  }

  .desc {
    @include img_l_m(310, 80, 0);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: sizem(0.3);
    text-align: left;
    color: #636363;
  }

  .imgs {
    @include img_c_m(375 - 27, 445);
    display: flex;
    justify-content: space-between;
    .item {
      width: sizem(170);
      height: sizem(186);
      position: relative;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 0 3px #003177;
        .logo {
          @include img_c_m(83, -34);
        }
        .mask,
        .item-title,
        .item-desc {
          opacity: 1;
        }
      }
    }

    .item-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .logo {
      @include img_c_m(100, 53);
      transition: all 0.7s;
    }

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.85);
      opacity: 0;
      transition: all 0.3s;
    }

    .item-title {
      @include div_c_m(153, 25, 48);
      box-shadow: 0 0 0 1px #606060;
      font-size: sizem(13);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.8;
      letter-spacing: sizem(0.85);
      text-align: center;
      color: #636363;
      white-space: nowrap;
      transition: all 0.3s;
      opacity: 0;
    }

    .item-desc {
      @include img_c_m(180, 80);
      font-size: sizem(12);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.8;
      letter-spacing: sizem(1.25);
      text-align: center;
      color: #636363;
      white-space: nowrap;
      transition: all 0.5s;
      opacity: 0;
    }
  .item-name{
    @include img_r_m(467, 0 , 5);
    width: auto;
    top: auto;
    bottom: 0;
    font-size: sizem(12);
  }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
// import slider from '@/mixins/slider.js'

export default {
  name: 'section3',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
