<template>
  <div class="section2" id="scene">
    <div class="img1" data-aos="zoom-in-left">
      <div class="f1">
        <img src="./s1/f11.png" alt="" loading="lazy" />
        <img src="./s1/f12.png" alt="" loading="lazy" />
        <img src="./s1/f13.png" alt="" loading="lazy" />
        <img src="./s1/f14.png" alt="" loading="lazy" />
      </div></div>
    <div class="content">
      <div class="title" data-aos="zoom-in" data-aos-delay="200">
        城市遠見ALL in ONE<br v-if="isMobile" /><span v-else>︱</span>沙鹿正核心，新站優生活
      </div>
      <div class="desc" data-aos="zoom-in" data-aos-delay="400">陸海空到位<br v-if="isMobile" /><span v-else>，</span>「門戶科技城」+「海港娛樂城」加乘效益<br />
沙鹿新站特區首發，勝麗建設再創美學天際<br />
台中最值得期待的一次城市跳躍！</div>
    </div>
    <div class="map">
    <img src="./s2/map.jpg" alt="">
    <img src="./s2/map.png" alt=""></div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
$b_margin:size(50);
.section2 {
  position: relative;
  width: 100%;
  height:auto;
  &::after{
    pointer-events: none;
    content: "";
    display: block;
    position: absolute;
    top:$b_margin;
    left:$b_margin;
    right:$b_margin;
    bottom:$b_margin;
    z-index: 1;

     border: 2px solid transparent;
     border-image: linear-gradient(135deg, #db9d88 0%,#e2bda9 4%,#da927b 15%,#824b40 34%,#da927b 61%,#e2bda9 71%,#da927b 81%,#824b40 100%);
	  border-image-slice: 1;
  }
}
.img1{width: size(245);position: absolute;right: size(10);top: size(20);
z-index: 2;
img{
  &:first-child{width:136%;
position: absolute;
    top: 36%;
    right: 43%;
      }
}
  .f1{width: 100%;transform:scaleX(-1);
position: relative;
  img{
position: absolute;
    &:first-child{position: relative;width: 100%;
  animation: an2 4s ease-in-out infinite alternate;top: 0;left: 0;
  transform-origin: 0 50%;}
    &:nth-child(2){width: 27%;
    top: 46%;
  animation: an3 4s ease-in-out infinite alternate;
    left: 56%;}
    &:nth-child(3){width: 54.2%;top: 31%; left: 0%;
  animation: an3 4s ease-in-out infinite alternate;}
    &:nth-child(4){width: 46.5%;
    top: 7%;
  animation: an3 4s ease-in-out infinite alternate;
    left: 55%;}
  }
  }
@keyframes an2{
  to {transform:skewY(-3deg);}
}
@keyframes an3{
  to {transform:translateY(-10%);}
}

}
.map{
  width: 100%;
  img{
    position: relative;width: 100%;
    &:last-child{position: absolute;top: 0;left: 0;}
  }
}
.content {
  padding: 4.8em 0 0 0;
  display: block;
  color: #FFF;
  text-align: center;
  line-height: 1.7;
  font-size: size(38);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing:0.0em;
 // height:20em;
  margin: 0 auto 3em;


}

.title {
  font-weight: bold;
  color: #DDAC98;
  font-size:1.36em;
  margin: 0 auto 1.15em;

}

.subtitle {
  font-size:1.5em;
  font-weight: bold;
  margin: 0 auto .3em;
}

.desc {
  font-family:  'Noto Sans TC', sans-serif;

}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section2 {
    position: relative;
    width: size-m(375);
    height: size-m(700);
    background-position-x: size-m(-280);
  background-size:auto size-m(700);
  &::after,
  &::before{
    height:150vw;
  }
  &::before{
    top:calc(-150vw * .3);
    }
  &::after{
    bottom:calc(-150vw * .7);
  }
 // background: none;
  .bg{height:size-m(700);width: auto;
  left:size-m(-280);
  }
  .txt{
  @include img_c_m(370, 0);
    font-size:sizem(21);
  .title {
    font-size:1.9em;line-height: 1.05;margin: 0 .3em  0.5em 0;}
    }
  }
}
// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}
// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from "@/utils";
export default {
  name: "section2",
  components: {
  },
  data() {
    return {
      isMobile,
    };
  },
  methods: {
    scrollTo(el) {
      this.scrollInstance.scrollTo(el);
    },
  },
  mounted() {},
  created() {},
};
</script>