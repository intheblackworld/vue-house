<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        src="./s1/bg.jpg"
        alt="聯上海棠"
        class="bg-img"
      >

      <div class="flex animate-row animate-row3">
        <img
          src="./s1/wave2.png"
          alt="聯上海棠"
          class="wave"
        >
        <img
          src="./s1/wave2.png"
          alt="聯上海棠"
          class="wave"
        >
      </div>
      <div class="flex animate-row animate-row2">
        <img
          src="./s1/wave2.png"
          alt="聯上海棠"
          class="wave"
        >
        <img
          src="./s1/wave2.png"
          alt="聯上海棠"
          class="wave"
        >
      </div>
      <div class="flex animate-row">
        <img
          src="./s1/wave1.png"
          alt="聯上海棠"
          class="wave"
        >
        <img
          src="./s1/wave1.png"
          alt="聯上海棠"
          class="wave"
        >
      </div>
      <img
        src="./s1/logo1.png"
        alt="聯上海棠"
        class="nav-logo absolute"
      >
      <img
        src="./s1/logo.png"
        alt="聯上海棠"
        data-aos="fade" data-aos-delay="400"
        class="logo absolute"
      >
      <h3 class="title1 absolute">總價<b>1588</b>萬起</h3>
<h3 class="title2 absolute">買海濱地王</h3>
      <img
        src="./s1/img.jpg"
        class="item-img absolute"
      />


      <div class="slide-content absolute">
        <h3 data-aos="fade" data-aos-delay="400" class="subtitle">
          大海傳說
        </h3>
        <h3 data-aos="fade" data-aos-delay="700" class="title">聽美人魚唱歌</h3>
        <div class="desc">
          <h3 class="words">
            傳說在海裡有一座城堡，美人魚住在裡面，日夜歌唱著，<br />
            一期一會，聽見美人魚唱歌，<br />
            看見她那宛如海棠盛開的魚尾，隨著日出日落搖擺著，<br />
            這樣的傳說，不必等待珍珠的眼淚，<br />
            只要傳說價就可以擁有…….<br /><br />
            制震景觀名宅<br />
            上市上櫃品牌<br />
            國際海灣地段<br />
            時尚優質建材<br /><br />
            因為擁有，讓生活，不再是傳說<br />
            陸地上的夢想家，終於住在海洋旁的飯店宅<br /><br /><br /><br />
            傳說在海裡有一座城堡，美人魚住在裡面，日夜歌唱著，<br />
            一期一會，聽見美人魚唱歌，<br />
            看見她那宛如海棠盛開的魚尾，隨著日出日落搖擺著，<br />
            這樣的傳說，不必等待珍珠的眼淚，<br />
            只要傳說價就可以擁有…….<br /><br />
            制震景觀名宅<br />
            上市上櫃品牌<br />
            國際海灣地段<br />
            時尚優質建材<br /><br />
            因為擁有，讓生活，不再是傳說<br />
            陸地上的夢想家，終於住在海洋旁的飯店宅<br /><br /><br /><br />
          </h3>
          <img
            src="./s1/imgs.png"
            alt="聯上海棠"
            class="mask"
          >
        </div>
      </div>
      <div class="item-border absolute"></div>
    </div>
    <div v-if="isMobile">
      <img
        src="./s1/bg.jpg"
        alt="聯上海棠"
        class="bg-img"
      >

      <div class="flex animate-row">
        <img
          v-lazy="require('./s1/wave1.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave1.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave1.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave1.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave1.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave1.png')"
          alt="聯上海棠"
          class="wave"
        >
      </div>
      <div class="flex animate-row animate-row2">
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
      </div>
      <div class="flex animate-row animate-row3">
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
      </div>

      <img
        v-lazy="require('./s1/logo1.png')"
        alt="聯上海棠"
        class="nav-logo absolute"
      >
      <img
        v-lazy="require('./s1/logo.png')"
        alt="聯上海棠"
        class="logo absolute"
      >
      <h3 class="title1 absolute">總價<b>1588</b>萬起</h3>
<h3 class="title2 absolute">買海濱地王</h3>

      <img
        v-lazy="require('./mo/1/img.jpg')"
        class="item-img absolute"
      />
      <div class="item-border absolute"></div>

      <div class="slide-content absolute">
        <h3 class="subtitle">
          大海傳說
        </h3>
        <h3 class="title">聽美人魚唱歌</h3>
        <div class="desc">
          <h3 class="words">
            傳說在海裡有一座城堡，美人魚住在裡面，日夜歌唱著，<br />
            一期一會，聽見美人魚唱歌，<br />
            看見她那宛如海棠盛開的魚尾，隨著日出日落搖擺著，<br />
            這樣的傳說，不必等待珍珠的眼淚，<br />
            只要傳說價就可以擁有…….<br /><br />
            制震景觀名宅<br />
            上市上櫃品牌<br />
            國際海灣地段<br />
            時尚優質建材<br /><br />
            因為擁有，讓生活，不再是傳說<br />
            陸地上的夢想家，終於住在海洋旁的飯店宅<br /><br /><br /><br />
            傳說在海裡有一座城堡，美人魚住在裡面，日夜歌唱著，<br />
            一期一會，聽見美人魚唱歌，<br />
            看見她那宛如海棠盛開的魚尾，隨著日出日落搖擺著，<br />
            這樣的傳說，不必等待珍珠的眼淚，<br />
            只要傳說價就可以擁有…….<br /><br />
            制震景觀名宅<br />
            上市上櫃品牌<br />
            國際海灣地段<br />
            時尚優質建材<br /><br />
            因為擁有，讓生活，不再是傳說<br />
            陸地上的夢想家，終於住在海洋旁的飯店宅<br /><br /><br /><br />
          </h3>
          <img
            src="./mo/1/imgs.png"
            alt="聯上海棠"
            class="mask"
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  // overflow: hidden;
  position: relative;
  height: size(1080);
  //height: 100vh;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;
  &:first-child{
  height: size(1080);
  }
}

.animate-row {
  width: 200vw;
  animation: moving 30s linear infinite;
  position: absolute;
  // bottom: size(-200);
  top: -45vh;

  img {
    width: 50%;
    height: size(1337);
    // height: size(413);

    &:nth-child(2) {
      margin-left: -0.03%;
    }
  }

  &.animate-row2 {
    // bottom: size(100);
    animation: moving 20s -5s linear infinite;
  top: -43vh;

    // img {
    //   height: size(79);
    // }
    // animation-delay: 5s;
  }

  &.animate-row3 {
    animation: moving 25s -10s linear infinite;
  top: -40vh;
  }
}

.slide-content {
  width: size(758);
  height: size(884);
  right: size(188);
  left: auto;
  top: 0;
  overflow: hidden;
  border-radius: 60% 40% 45% 55% / 50% 45% 55% 50%;
  overflow: hidden;
  animation: border-radius 4s ease alternate infinite;
  padding-top: size(176);
}

.item-img {
  width: size(758);
  height: size(884);
  right: size(188);
  left: auto;
  top: 0;
  border-radius: 60% 40% 45% 55% / 50% 45% 55% 50%;
  overflow: hidden;
  animation: border-radius 4s ease alternate infinite;
}

.item-border {
  width: size(788);
  height: size(904);
  right: size(180);
  left: auto;
  top: 0;
  border-radius: 60% 40% 45% 55% / 50% 45% 55% 50%;
  overflow: hidden;
  animation: border-radius 5s 2s ease alternate infinite;
  border: 1px solid #d0a100;
}

.title {
  font-size: size(44);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: 6.16px;
  text-align: center;
  color: #ffffff;
}

.subtitle {
  font-size: size(24);
  letter-spacing: 3.36px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: 6.16px;
  text-align: center;
  color: #ffffff;
}

.desc {
  font-size: size(14);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  width: size(758);
  height: size(242);
  position: relative;
  overflow: hidden;

  .mask {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    position: absolute;
    top: 0;
  }

  .words {
  font-weight: 200;
  animation: scroll-top 10s linear infinite;
  }
}

.nav-logo {
  width: size(101);
  top: size(30);
  left: size(52);
}

.logo {
  width: size(190);
  top: size(278);
  left: size(378);
}
.title1{
  top:calc(50% + -2vw);
  left: size(355);
  font-size: size(30);
  b{font-size: 1.7em;letter-spacing:-0.05em;display: inline-block;position: relative;top: 0.05em;}
  }
.title2{
  top:calc(50% + 2vw);
  left: size(362);
  color: #0009;
  font-size: size(25);
  &::before,
  &::after{
    content: "";
    display: inline-block;
    height: 1px;
    width: 2.35vw;position: relative;top:-0.3em;
    background: currentColor;
  }
  }

@keyframes scroll-top {
  0% {
    margin-top: 0%;
  }
  100% {
    margin-top: -50%;
  }
} 

@keyframes border-radius {
  to{
    border-radius: 40% 55% 60% 45% / 45% 50% 50% 55%;
  }

}

@keyframes moving {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0) scaleY(1);
  }
  50% {
    -webkit-transform: translateX(0);
    transform: translateX(-25%) scaleY(0.6);
  }

  to {
    -webkit-transform: translateX(-100vw);
    transform: translateX(-50%) scaleY(1);
  }
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
  .relative{
  margin:0 0 0 0;

  }
  .relative,
  .bg-img:first-child{
    height: 120vh;
  }
  .animate-row {
    width: 600vw;
  }

  .nav-logo {
    width: size-m(52);
    top: size-m(18);
    left: size-m(11);
  }

  .logo {
    width: size-m(95);
    top: size-m(20);
    left: size-m(140);
  }
  .title1{
  top:size-m(128);
  left: 0;
  width: 100%;
  font-size: size-m(20);
  text-align: center;
  b{font-size: 1.7em;letter-spacing:-0.05em;display: inline-block;position: relative;top: 0.05em;}
  }
.title2{
  top:size-m(168);
  left:0;
  width: 100%;
  color: #0009;
  text-align: center;
  font-size: size-m(15);
  &::before,
  &::after{
    content: "";
    display: inline-block;
    height: 1px;
    width: 2.35vw;position: relative;top:-0.3em;
    background: currentColor;
  }
  }

  .item-img {
    width: size-m(343);
    height: size-m(343);
    right: size-m(12);
    left: auto;
    top: size-m(204);
    border-radius: 60% 40% 45% 55% / 50% 45% 55% 50%;
    overflow: hidden;
    animation: border-radius 4s ease alternate infinite;
  }

  .slide-content {
    width: size-m(343);
    height: size-m(343);
    right: size-m(12);
    left: auto;
    top: size-m(204);
    overflow: hidden;
    border-radius: 60% 40% 45% 55% / 50% 45% 55% 50%;
    overflow: hidden;
    animation: border-radius 4s ease alternate infinite;
    padding-top: size-m(40);
  }

  .item-border {
    width: size-m(353);
    height: size-m(363);
    right: size-m(12);
    left: auto;
    top: size-m(204);
    border-radius: 60% 40% 45% 55% / 50% 45% 55% 50%;
    overflow: hidden;
    animation: border-radius 10s ease alternate infinite;
    border: 1px solid #d0a100;
  }

  .title {
    font-size: size-m(19);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.23;
    letter-spacing: 6.16px;
    text-align: center;
    color: #ffffff;
    position: relative;
    z-index: 2;
  }

  .subtitle {
    font-size: size-m(12);
    letter-spacing: 3.36px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.23;
    letter-spacing: 6.16px;
    text-align: center;
    color: #ffffff;
    position: relative;
    z-index: 2;
  }

  .desc {
    font-size: size-m(14);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    width: size-m(343);
    height: size-m(343);
    position: absolute;
    top: 0;
    overflow: hidden;

    .mask {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      position: absolute;
      top: 0;
    }

    //.words {
   //   animation: scroll-top 30s linear infinite;
   // }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section1',
  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
