<template>
  <div class="section2">
    <img src="./s1/01.jpg" alt="" class="img">
    <div class="content-desc">
      基地位置： 三重區神農街433號～439號<br />
      完工時間： 2020年<br />
      規劃樓層： 地上12層，地下2層<br />
      個案特色：<br />
      ◆ 校園第一排、河畔第一境<br />
      ◆ 結合陽光、空氣、水的絕美建築<br />
      ◆ 低建蔽率，高公共生活空間
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: size(1155);
  overflow: hidden;
  position: relative;
  background: #fff;
  background-size: auto;
}

.bg-img {
  width: size(1920);
  height: auto;
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

.border-container {
  width: size(1637);
  height: size(2160);
  margin: size(50) auto size(75);
  border: 3px solid #ff8200;
}

.title {
  width: size(700);
  margin: 0 auto;
  margin-top: size(-30);
  font-size: 34px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 3.4px;
  text-align: center;
  color: #606060;
  background-color: #fff;
  white-space: nowrap;

  span {
    color: #ff8200;
  }
}

.img {
  @include img_l_pc(1252, 117, 0);
  z-index: 2;
}

.s-title {
  @include div_r_pc(147, 47, 227, 222);
  font-size: size(32);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(6.37);
  text-align: left;
  color: #ff8200;
  white-space: nowrap;
}

.content-title {
  @include div_r_pc(391, 63, 470, 76);
  font-size: size(42.5);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4.25);
  text-align: left;
  color: #606060;
  white-space: nowrap;
}

.content-desc {
  @include div_r_pc(463, 100, 550, 120);
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: size(1);
  text-align: left;
  color: #ff8100;

  span {
    font-size: size(23);
    font-weight: bold;
    letter-spacing: size(1.15);
  }
}

.btn {
  @include div_r_pc(200, 40, 850, 260);
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: size(1);
  text-align: left;
  background-color: #ff8200;
  color: #fff;
}

.video {
  cursor: pointer;
  @include div_r_pc(1343, 762, 1292, 150);
}

.rb {
  position: absolute;
  background-color: #fff;
  width: size(308);
  height: size(167);
  right: size(-100);
  bottom: size(-80);
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
  .section2 {
    width: 100vw;
    min-height: sizem(604);
    max-height: sizem(812);
    height: 100vh;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height: 100%;
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

  .bg {
    width: sizem(350);
    top: sizem(60);
    bottom: sizem(63);
    // background-image: url('./s1/bg.png');
    background-attachment: fixed;
  }

  .img0 {
    @include div_l_m(284, 667, 0, 0);
    object-fit: cover;
  }

  .lt {
    @include img_l_m(135, 60, 0);
  }

  .label {
    @include div_r_m(277, 100, 0, 0);
    top: auto;
    bottom: sizem(82);
    background-color: #000000;
    font-size: sizem(27);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.37;
    letter-spacing: sizem(1.24);
    text-align: left;
    color: #ffffff;
    z-index: 3;
  }

  .title {
    @include div_r_m(329, 52, 104, 0);
    text-shadow: 0 0 12px #000000;
    font-size: sizem(35);
    letter-spacing: sizem(1.3);
  }

  .subtitle {
    @include div_l_m(182, 38, 154, 46);
    text-shadow: 0 0 12px #000000;
    font-size: sizem(26);
  }

  .m-container {
    margin-top: sizem(190);
    .swiper-container {
      height: sizem(660);
    }
  }

  .item-img {
    width: sizem(152);
    transform: translateY(10%);
  }
  .item {
    transform: translateY(8%);
    animation: an 5s linear infinite alternate;
    &:nth-child(odd) {
      animation: an 5s -5s linear infinite alternate;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section2',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      tabIndex: 0,
      slideList: [
        {
          img: '',
          name: '真心。穩固',
          desc:
            '台灣位於太平洋地震帶上，地震頻繁，耐震穩固絕對是建築首要注意的重點。「立瑾建築機構」以確實精確的工法做建築，除了符合CNS國家標準外，更精益求精以更高規格打造百年穩固、精實耐震之好房。',
        },
        {
          img: '',
          name: '真心。建材',
          desc:
            '台灣位於太平洋地震帶上，地震頻繁，耐震穩固絕對是建築首要注意的重點。「立瑾建築機構」以確實精確的工法做建築，除了符合CNS國家標準外，更精益求精以更高規格打造百年穩固、精實耐震之好房。',
        },
        {
          img: '',
          name: '真心。地段',
          desc:
            '台灣位於太平洋地震帶上，地震頻繁，耐震穩固絕對是建築首要注意的重點。「立瑾建築機構」以確實精確的工法做建築，除了符合CNS國家標準外，更精益求精以更高規格打造百年穩固、精實耐震之好房。',
        },
        {
          // img: require('./s1/1.jpg'),
          name: '真心。設計',
          desc:
            '台灣位於太平洋地震帶上，地震頻繁，耐震穩固絕對是建築首要注意的重點。「立瑾建築機構」以確實精確的工法做建築，除了符合CNS國家標準外，更精益求精以更高規格打造百年穩固、精實耐震之好房。',
        },
        {
          // img: require('./s1/1.jpg'),
          name: '真心。生活',
          desc:
            '台灣位於太平洋地震帶上，地震頻繁，耐震穩固絕對是建築首要注意的重點。「立瑾建築機構」以確實精確的工法做建築，除了符合CNS國家標準外，更精益求精以更高規格打造百年穩固、精實耐震之好房。',
        },
      ],
    }
  },

  methods: {
    // @slideChangeTransitionEnd="slideChanged"
    // slideChanged(e) {
    //   const swiper = this.$refs.mySwiper.swiper
    //   if (swiper.isEnd) {
    //     this.slideIndex = 0
    //   } else if (swiper.isBeginning) {
    //     this.slideIndex = swiper.slides.length - 3
    //   } else {
    //     this.slideIndex = swiper.activeIndex - 1
    //   }
    // },
  },

  mounted() {},

  created() {},

  computed: {},
}
</script>
