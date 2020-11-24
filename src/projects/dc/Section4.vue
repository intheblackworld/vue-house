<template>
  <div class="section4">
    <img src="./s4/bg.jpg" alt="" class="bg-img" v-if="isPC" />
    <img src="./s4/bg_m.jpg" alt="" class="bg-img" v-if="isMobile" />
    <img src="./s4/1.png" alt="" :class="`bg-img fade ${imgIndex === 0 ? 'show' : ''}`" v-if="isPC" />
    <img src="./s4/2.png" alt="" :class="`bg-img fade ${imgIndex === 1 ? 'show' : ''}`" v-if="isPC" />
    <img src="./s4/1_m.png" alt="" :class="`bg-img fade ${imgIndex === 0 ? 'show' : ''}`" v-if="isMobile" />
    <img src="./s4/2_m.png" alt="" :class="`bg-img fade ${imgIndex === 1 ? 'show' : ''}`" v-if="isMobile" />
    <img src="./s4/lt.png" alt="" class="lt"  data-aos="fade" data-aos-delay="0">
    <h1 class="title"  data-aos="fade" data-aos-delay="0">樹海城心</h1>
    <h1 class="subtitle" v-if="isPC"  data-aos="fade" data-aos-delay="200">繁華市心<br />漫步樹海街廓</h1>
    <h1 class="subtitle" v-if="isMobile"  data-aos="fade" data-aos-delay="200">繁華市心 漫步樹海街廓</h1>
    <div class="desc" v-if="isPC"  data-aos="fade" data-aos-delay="400">
      絕版在即！<br />
      汐止繁華核心5000坪公園造鎮，60%以上規劃為綠地廣場，<br />
      建物退縮成就森氧風光，收藏無價樹海首排景觀。<br /><br />
      大棟距馥綠視野，漫步高植感城市花園，彷彿置身日本六本木街頭，隨<br />
      享異國風情；超高指名度社區，創業坐擁商機，出租立賺租金。
    </div>
    <div class="desc" v-if="isMobile"  data-aos="fade" data-aos-delay="400">
      絕版在即！<br />
      汐止繁華核心5000坪公園造鎮，<br />60%以上規劃為綠地廣場，<br />
      建物退縮成就森氧風光，<br />收藏無價樹海首排景觀。<br /><br />
      大棟距馥綠視野，漫步高植感城市花園，<br />彷彿置身日本六本木街頭，隨
      享異國風情；<br />超高指名度社區，<br />創業坐擁商機，出租立賺租金。
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  overflow: hidden;
  position: relative;
  background: #fff;
  background-size: auto;
}

.bg-img {
  width: size(1920);
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

.lt {
  @include img_l_pc(302, 107, 288);
}

.title {
  @include div_l_pc(344, 119, 153, 351);
  font-size: size(80);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(8);
  text-align: left;
  color: #fff;
  white-space: nowrap;
}

.subtitle {
  @include div_l_pc(182, 70, 174, 726);
  font-size: size(28);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(2.8);
  text-align: left;
  color: #fff;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(713, 302, 352);
  font-size: size(21);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(1.68);
  text-align: left;
  color: #fff;
  white-space: nowrap;
}

.fade {
  opacity: 0;
  transition: opacity 1s;

  &.show {
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
  .section4 {
    width: 100vw;
    min-height: sizem(740);
    max-height: sizem(740);
    height: sizem(740);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height: sizem(740);
    min-height: calc(100vh - 63px);
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

  .lt {
    @include img_l_m(130, 90, 30);
  }

  .title {
    @include div_l_m(194, 66, 120, 63);
    font-size: sizem(45);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(4.5);
    text-align: left;
    color: #fff;
    white-space: nowrap;
  }

  .subtitle {
    @include div_l_m(200, 27, 191, 73);
    font-size: sizem(18);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(1.8);
    text-align: left;
    color: #fff;
    white-space: nowrap;
  }

  .desc {
    @include img_l_m(310, 242, 32);
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: sizem(1.35);
    text-align: left;
    color: #fff;
    white-space: nowrap;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section4',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      imgIndex: 0,
    }
  },

  methods: {},

  mounted() {
    setInterval(() => {
      if (this.imgIndex === 1) {
        this.imgIndex = 0
      } else {
        this.imgIndex = 1
      }
    }, 3000)
  },

  created() {},

  computed: {},
}
</script>
