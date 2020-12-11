<template>
  <div class="section2">
    <transition-group name="swipe-fade" mode="out-in">
      <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`bg-img absolute`">
        <img :src="slide.img" alt="">
      </div>
    </transition-group>
    <div :class="slideList[slideIndex].class">
    <div class="title" v-html="slideList[slideIndex].name">
    </div>
    <div class="desc" v-html="slideList[slideIndex].desc">
    </div>
    </div>
    <div class="sidebar flex-ac wrap" v-if="isPC">
      <div class="item flex-c" v-for="(slide, index) in slideList" :key="slide.name" @click="slideIndex = index">
        {{slide.name}}
      </div>
    </div>
    <div class="page-head flex-c" v-if="isMobile">
      <div class="page-title">{{slideList[slideIndex].name}}</div>
      <div class="prev-btn" @click="addIndex"></div>
      <div class="next-btn" @click="decIndex"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  height: size(1080);
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
[class*=txt]{
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  position: absolute;
  top:size(112);
  left:size(830);
  line-height: 1.67;
  letter-spacing: 0.2em;
  /*
  @include div_l_pc(764, 112, 112, 830);*/
}
.txt{
  &1{width: size(764);left:size(830);color: #606060;}
  &2{width: size(624);left:size(973);color: #606060;}
  &3{width: size(1310);left:size(304);color: #fff;}
  &4{width: size(782);left:size(174);color: #fff;}
  &5{width: size(1351);left:size(205);color: #606060;}
}
.title {
  font-size: size(40);
  font-weight: 500;
  white-space: nowrap;
}

.desc {
  font-size: size(25);
  font-weight: normal;
}

.sidebar {
  background-image: linear-gradient(
    to bottom,
    rgba(112, 105, 103, 0.3) 16%,
    #000000 88%
  );
  width: size(267);
  height: size(1080);
  z-index: 3;
  position: absolute;
  top: 0;
  right: 0;
  align-content: center;
}

.item {
  width: 100%;
  height: size(113);
  font-size: size(33);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.23;
  letter-spacing: size(3.3);
  text-align: left;
  color: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #ff8200;
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
  .section2 {
    width: 100vw;
    min-height: sizem(560);
    max-height: sizem(812);
    height: sizem(560);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height: sizem(210);
    position: absolute;
    top: auto;
    left: 0;
    bottom: 0;
    display: block;
    object-fit: cover;
    margin-top: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:nth-child(1) {
      position: relative;
    }
  }

  .title {
    @include div_l_m(310, 112, 144, 33);
    font-size: sizem(15);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(2.99);
    text-align: left;
    color: #606060;
    white-space: nowrap;
  }

  .desc {
    @include div_l_m(310, 112, 174, 33);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: sizem(2.97);
    text-align: left;
    color: #606060;
  }

  .page-head {
    width: 100vw;
    height: sizem(119);
    background: rgba(0, 0, 0, 0.4);
    position: relative;
  }

  .page-title {
    font-size: sizem(27);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.72;
    letter-spacing: sizem(2.7);
    text-align: center;
    color: #ffffff;
  }
  .prev-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    width: sizem(30);
    height: sizem(30);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: sizem(18) sizem(25) sizem(18) 0;
    border-color: transparent #fff transparent transparent;
  }
  .next-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    width: sizem(30);
    height: sizem(30);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: sizem(18) 0 sizem(18) sizem(25);
    border-color: transparent transparent transparent #fff;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section2',

  mixins: [slider],
  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      slideList: [
        {
          class:"txt1",
          img: require('./s1/1.jpg'),
          name: '真心。穩固',
          desc:
            '台灣位於太平洋地震帶上，地震頻繁，耐震穩固絕對是建築首要注意的重點。「立瑾建築機構」以確實精確的工法做建築，除了符合CNS國家標準外，更精益求精以更高規格打造百年穩固、精實耐震之好房。',
        },
        {
          class:"txt2",
          img: require('./s1/2.jpg'),
          name: '真心。建材',
          desc:
            '以「人」為出發點，考慮建築設計的所有細節，以頂規建材打造經典住宅，不僅石材、鋼材精挑細選，更融入AIOT設備打造智慧住宅，讓科技結合生活。',
        },
        {
          class:"txt3",
          img: require('./s1/3.jpg'),
          name: '真心。地段',
          desc:
            '好地段，是所有住宅的著力點。「立瑾建築機構」看準未來發展、繁華商圈、增值性高、無可取代之絕佳基地，打造完美建築。土地的價值，經由立瑾完美體現。',
        },
        {
          class:"txt4",
          img: require('./s1/4.jpg'),
          name: '真心。設計',
          desc:
            '「立瑾建築機構」致力於建築美學發展，建築團隊精挑細選，依照周邊環境、人文特色，設計建築外觀及景觀，呈現當代建築美學，打造絕美城市天際線。',
        },
        {
          class:"txt5",
          img: require('./s1/5.jpg'),
          name: '真心。生活',
          desc:
            '將美學融入生活，將藝術結合建築，建築的初心我們從未忘記。<br>◆ 外觀結構隨基地環境發展成長，使地景與建築更具協調性。<br>◆ 照顧全年齡使用性的公設設計，不論多樣性、通用性皆考慮所有層面精心打造。<br>◆ 景觀園藝的精心規劃，選用符合風格的植栽、動線順暢的配置，由外而內符合華美璞韻的建築語彙。'
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
