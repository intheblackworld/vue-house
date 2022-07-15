<template>
  <div class="section2">
    <div class="img1" data-aos="fade" data-aos-duration="2000">
      <img src="./s2/vector1.png" alt="">
      <img src="./s2/vector1.png" alt="">
      <img src="./s2/vector1.png" alt="">
      <img src="./s2/vector1.png" alt="">
    </div>
    <div class="txt">
      <div class="title" data-aos="zoom-in" data-aos-delay="0">THE TOP FOR THE TOP.</div>
      <div class="subtitle" data-aos="zoom-in" data-aos-delay="200">以尖端禮遇尖端</div>
      <div class="desc" data-aos="zoom-in" data-aos-delay="400">中悦建設‧中路特區<br />
回應新時代的等待！ <br />
COMING SOOM.</div>
    </div>
    <div class="t3" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">ONLY FOR TOP</div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.section2 {
  width: 100%;
  height: 100vh;
  min-height: size(892);
  max-height: size(1080);
  position: relative;
  background:#01236812;
  background-size:100% 100%;
  &::before{content:"";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;background:url("./s2/right.png") no-repeat right center;
  background-size:auto 100%;

  
  }
}
.img1{width:size(866);
position: absolute;
left: -17.5%;
top:calc(50% + (13 - 892 * .5) * 100vw / 1920 );
transform:rotate(-180deg);
  img{width: 50%;
  vertical-align: bottom;
  &:nth-child(1){transform: rotate(-90deg);}
  &:nth-child(3){transform: rotate(180deg);}
  &:nth-child(4){transform: rotate(90deg);}
  }
}

.txt {
  padding:0;
  position: relative;
  top: calc(50% - 5.1vw);
  display: block;
  color: #06348D;
  text-align: center;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing:0.06em;
}

.title {
  font-weight: bold;
  font-size:2.25em;
  &::after,
  &::before{
    content:"";
    width: 2.3em;height: 1px;
    margin: auto 0.2em;
    background: currentColor;
    display: inline-block;
    vertical-align: middle;
  }
}

.subtitle {
  font-size:1.32em;
  font-weight: bold;
  margin: 0 auto 1.3em;
}

.desc {
  color: #1F2539;

}
.t3{font-size:size(32);
font-weight:700;
  color:#1f253966;
  position: absolute;
  bottom:-2em;
  left:0;
  width: 100%;
  text-align: center;
  letter-spacing: 3.4em;
  text-indent: 3.4em;
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
    height:calc(100vh  - 63px);
    min-height: sizem(667);
    max-height: sizem(667);
      &::before{
        background:url("./s2/bottom.png") no-repeat center bottom;
  background-size: 80% auto;
  }
  }
.img1{width:sizem(360);
left:calc(50% - 360 * 50vw / 375 );
top:sizem(-220);z-index: -1;
}

.txt {
  top:sizem(91);
  font-size: sizem(13);
}
.title {
  font-weight: bold;
  font-size:1.6em;
  &::after,
  &::before{
    content:"";
    width: 1.4em;
    margin: auto 0.5em;
  }
}

.subtitle {
  font-size:1.2em;
  margin: 0 auto .8em;
}
.t3{font-size:sizem(15);
  letter-spacing: 1em;
  text-indent: 1em;
}
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from "@/utils";
import slider from "@/mixins/slider.js";
import info from "@/info";

export default {
  name: "section2",

  mixins: [slider],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      dialogImg: null,
      showMask: false,
  /*    slideList: [
        {
          img: isMobile?require("./s2/1m.jpg"):require("./s2/1.jpg"),
          name: "",
          area: "",
          title: '城心藏富 家心藏綠',
          subtitle:'Green & Wealth',
          desc: isMobile? '在求快的時代，<br>我們更懂慢的珍貴。在土城重劃核心，<br>成熟生活機能裡簇擁一片綠的存在，<br>落實慢活美學，生活更有滋味。':'在求快的時代， 我們更懂慢的珍貴。<br>在土城重劃核心，成熟生活機能裡簇擁一片綠的存在，<br>落實慢活美學，生活更有滋味。 ',
        },
        {
          img: isMobile?require("./s2/2m.jpg"):require("./s2/2.jpg"),
          name: "",
          area: "",
          title: '城心藏富 家心藏綠',
          subtitle:'Green & Wealth',
          desc: isMobile? '在求快的時代，<br>我們更懂慢的珍貴。在土城重劃核心，<br>成熟生活機能裡簇擁一片綠的存在，<br>落實慢活美學，生活更有滋味。':'在求快的時代， 我們更懂慢的珍貴。<br>在土城重劃核心，成熟生活機能裡簇擁一片綠的存在，<br>落實慢活美學，生活更有滋味。 ',
        },
        {
          img: isMobile?require("./s2/3m.jpg"):require("./s2/3.jpg"),
          name: "茂德機構",
          area: "",
          title: '全台十大建商 茂德機構',
          subtitle: 'Construction',
          desc:  isMobile?'超過20年的建築專業，用心成就每一處住所，<br>看好土城的潛力，用金城舞系列證明，<br>深耕土城的決心，更要滿足當代青年的成家夢。': '擁有逾20年以上專業建築經歷，是北台灣首屈一指的建設公司。<br>茂德看好板南線生活機能、萬大線軌道計畫、城市建設遠景以及土城暫緩發展區的潛力，<br>從金城舞1期圓滿完銷到目前新案，致力深耕土城，滿足首購、換屋需求，也期望帶來更好的居住品質。',
        }
      ]  */
    };
  },

  methods: {
    showDialog() {
      this.isDialog = true;
      this.showMask = true;
      this.dialogImg = this.slideList[this.slideIndex].full;
    },

    handleScroll() {
      this.showMask = false;
    }
  },

  created() {},

  mounted() {},

  computed: {},

  watch: {}
};
</script>
