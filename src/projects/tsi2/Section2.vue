<template>
  <div class="section2">
    <img src="./s1/bg1.jpg" :alt="`${info.caseName}_cloud`" class="bg-img" v-if="isPC">
    <img src="./s1/bg_m.jpg" :alt="`${info.caseName}_cloud`" class="bg-img" v-if="isMobile">
    <img src="./s2/bg.png" :alt="`${info.caseName}_cloud`" class="wave">
    <img src="./s2/3d.png" :alt="`${info.caseName}_cloud`" class="img3d">
    <div class="title1 title">
        一次買最好
      </div>
      <div class="title2 title">
        住五股
      </div>
    <div class="item-list flex-jb flex-as">
      <div :class="`item ${isCurrent ? 'active' : ''}`" v-for="item in item_list" :key="item.title1">
        <div class="item-circle flex-c">
          <h3 v-html="item.title1"></h3>
        </div>
        <div class="item-title">
          <h3 v-html="item.title2"></h3>
        </div>
        <div class="item-desc">
          <h3 v-html="item.desc"></h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: 100%;
  height: size(1080 + 580);
  //overflow: hidden;
  position: relative;
  background-size: cover;
  // margin: 0 0 size(400) 0;
}

.img3d {
  @include img_c_pc(1600, 120);
}

.wave {
  @include img_c_pc(1920, 521);
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
  // opacity: 0.5;

  &:nth-child(1) {
    position: relative;
  }
}

.title {
  font-size: size(40);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(4);
  text-align: left;
  padding-top: size(46);
  color: #003177;
  background-color: #ffffff;
  writing-mode: vertical-rl;
  text-orientation: upright;
}

.title1 {
  @include div_l_pc(70, 391, 157, 440);
}

.title2 {
  @include div_l_pc(70, 289, 157, 352);
}

.desc {
  @include img_l_pc(476, 96, 353);
  font-size: size(20);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(1.6);
  text-align: left;
  color: #ffffff;
}

.item-list {
  @include img_c_pc(1450, 869);

  .item {
    width: size(133);
    position: relative;
    cursor: pointer;
    transition: all .3s;

    &:hover {
      .item-circle {
        font-size: size(34);
        letter-spacing: size(3.43);
        font-weight: 900;
        background-color: #fff;
        box-shadow: none;
      }
    }

    &:nth-child(1), &:nth-child(10) {
      .item-circle {
        margin-top: size(-35);
      }
    }

    &:nth-child(2), &:nth-child(9) {
      .item-circle {
        margin-top: size(45);
      }
    }

    &:nth-child(3), &:nth-child(8) {
      .item-circle {
        margin-top: size(100);
      }
    }

    &:nth-child(4), &:nth-child(7) {
      .item-circle {
        margin-top: size(150);
      }
    }

    &:nth-child(5), &:nth-child(6) {
      .item-circle {
        margin-top: size(170);
      }
    }
  }

  .item-circle {
    width: size(133);
    height: size(133);
    border-radius: 999px;
    background-color: #003177;
    box-shadow: 0 0 0 1px #d38700;
    font-size: size(25);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: size(2.5);
    text-align: left;
    color: #d38700;
    transition: all .3s;
  }

  .item-title {
    @include img_r_pc(36, 133 + 184, 20);
    width: size(133);
    height: size(266);
    font-size: size(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: size(2.5);
    text-align: left;
    color: #d38700;
    writing-mode: vertical-rl;
    text-orientation: upright;
  }

  .item-desc {
    @include img_r_pc(36, 133 + 247, 65);
    width: size(133);
    min-height: size(266);
    font-size: size(16);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: size(2.5);
    text-align: left;
    color: #fff;
    writing-mode: vertical-rl;
    text-orientation: upright;
  }
}

// begin
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  // transform: translateY(50px) !important;
  opacity: 0;
}
// end
.slide-fade-enter {
  // margin-top: 0
  // transform: translateY(0px) !important;
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 1s ease;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section2 {
    width: 100vw;
    min-height: sizem(665);
    max-height: sizem(812);
    height: calc(100vh - 63px);
    margin: 0 0 -12vw 0;
    background-size: auto size-m(750);
  z-index:initial;
  }

  .title1 {
    @include img_c_m(313, 258);
    // top: calc(50% + 100vw * (505 - 540) / 1920);
    font-size: sizem(33);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #fff000;
    white-space: nowrap;
    span {
      font-size: sizem(38);
    }
  }

  .title2 {
    @include img_c_m(306, 310);
    // top: calc(50% + 100vw * (586 - 540) / 1920);
    font-size: sizem(26);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
    span {
      font-size: sizem(29);
    }
  }

  .top {
    position: absolute;
    width: sizem(310);
    left: 0;
    right: 0;
    margin: 0 auto;
    top: calc(50% + 100vw * (70 - 302) / 375);
  }
  .c1 {
    left: 0;
    top: calc(50% - 77vw);
    width: sizem(97);
    transform: translateX(-10%);
  }
  .c2 {
    left: -6.7vw;
    top: calc(50% + 44vw);
    width: sizem(262);
    transform: translateX(-8%);
  }
  .c3 {
    right: 55vw;
    top: calc(50% + 68vw);
    width: sizem(132);
    transform: translateX(30%);
    animation-direction: alternate-reverse;
  }
  .c4 {
    right: -1.5vw;
    top: calc(50% + 50vw);
    width: sizem(369);
    transform: translateX(5%);
    animation-direction: alternate-reverse;
  }

  .t {
    position: absolute;
    width: sizem(310);
    left: 0;
    right: 0;
    margin: 0 auto;
    top: calc(50% + 100vw * (650 - 302) / 375);
  }
  .o {
    width: sizem(40);
    right: 19.7vw;
    top: calc(50% + 100vw * (676 - 302) / 375);
  }

  .top-logo {
    @include img_c_m(315, 135);
  }

  .top-title1 {
    @include img_c_m(315, 274);
  }

  .top-title2 {
    @include img_c_m(312, 409);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section2',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isAnimateBg: true,
      item_list: [
        {
          title1: '龍首<br />地標',
          title2: '● 龍首地標',
          desc: '區域稀有24層雙塔新地標',
        },
        {
          title1: '寬廣<br />基地',
          title2: '● 寬廣基地',
          desc: '區域稀有近兩千坪大尺度寬廣基地',
        },
        {
          title1: '高雅<br />生活',
          title2: '● 高雅生活',
          desc: '區域僅有日式千坪東京六感御花園',
        },
        {
          title1: '生活<br />機能',
          title2: '● 生活機能',
          desc: '五股市區、新市鎮、新莊副都心、洲子洋生活機能全包',
        },
        {
          title1: '交通<br />動能',
          title2: '● 交通動能',
          desc: '雙北各大城暢行無阻，「3高3捷4特快」交通機能全包',
        },
        {
          title1: '增值<br />潛能',
          title2: '● 增值潛能',
          desc: '稀有雙塔地標、五泰輕軌雙議題，讓您將增值潛能全包',
        },
        {
          title1: '豪宅<br />建材',
          title2: '● 豪宅建材',
          desc: '嚴選東和鋼鐵、力泰水泥等豪宅級頂級建材',
        },
        {
          title1: '城市<br />新生',
          title2: '● 城市新生',
          desc: '轉五股樣貌，「五股夏綠地」開發計畫帶來16公頃公園綠景',
        },
        {
          title1: '綠邑<br />生活',
          title2: '● 綠邑生活',
          desc: '鄰近15萬坪寬闊樹海濃蔭、128萬坪大臺北都會水岸公園',
        },
        {
          title1: '防疫<br />規劃',
          title2: '● 防疫規劃',
          desc: '當層排氣系統排除室內廢氣，療癒六感庭園舒緩身心',
        },
      ]
    }
  },

  methods: {},

  mounted() {
  },

  created() {},

  computed: {
    isCurrent() {
      return true
    }
  },
}
</script>
