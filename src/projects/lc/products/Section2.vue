<template>
  <div class="section2">
    <transition-group name="swipe-fade" mode="out-in">
      <div v-for="(slide, i) in slideList" v-show="tabIndex === i" :key="slide.img" :class="`bg-img absolute`">
        <img :src="slide.img" alt="">
      </div>
    </transition-group>
    <div class="title">
      {{slideList[tabIndex].name}}
    </div>
    <div class="desc">
      {{slideList[tabIndex].desc}}
    </div>
    <div class="sidebar flex-ac wrap">
      <div class="item flex-c" v-for="(slide, index) in slideList" :key="slide.name" @click="tabIndex = index">
        {{slide.name}}
      </div>
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

.title {
  @include div_l_pc(764, 112, 112, 830);
  font-size: size(40);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(8);
  text-align: left;
  color: #606060;
  white-space: nowrap;
}

.desc {
  @include div_l_pc(764, 112, 172, 830);
  font-size: size(30);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: size(5.97);
  text-align: left;
  color: #606060;
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
import slider from '@/mixins/slider.js'

export default {
  name: 'section2',

  mixins: [slider],
  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      tabIndex: 0,
      slideList: [
        {
          img: require('./s1/1.jpg'),
          name: '真心。穩固',
          desc:
            '台灣位於太平洋地震帶上，地震頻繁，耐震穩固絕對是建築首要注意的重點。「立瑾建築機構」以確實精確的工法做建築，除了符合CNS國家標準外，更精益求精以更高規格打造百年穩固、精實耐震之好房。',
        },
        {
          img: require('./s1/2.jpg'),
          name: '真心。建材',
          desc:
            '台灣位於太平洋地震帶上，地震頻繁，耐震穩固絕對是建築首要注意的重點。「立瑾建築機構」以確實精確的工法做建築，除了符合CNS國家標準外，更精益求精以更高規格打造百年穩固、精實耐震之好房。',
        },
        {
          img: require('./s1/3.jpg'),
          name: '真心。地段',
          desc:
            '台灣位於太平洋地震帶上，地震頻繁，耐震穩固絕對是建築首要注意的重點。「立瑾建築機構」以確實精確的工法做建築，除了符合CNS國家標準外，更精益求精以更高規格打造百年穩固、精實耐震之好房。',
        },
        {
          img: require('./s1/4.jpg'),
          name: '真心。設計',
          desc:
            '台灣位於太平洋地震帶上，地震頻繁，耐震穩固絕對是建築首要注意的重點。「立瑾建築機構」以確實精確的工法做建築，除了符合CNS國家標準外，更精益求精以更高規格打造百年穩固、精實耐震之好房。',
        },
        {
          img: require('./s1/5.jpg'),
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
