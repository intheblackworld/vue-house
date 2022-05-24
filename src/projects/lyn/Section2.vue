<template>
  <div class="section2" id="scene">
    <img src="./s2/map.png" class="bg" alt="">
    <div class="txt">
      <h3 class="title"><b>123</b>幸福人</h3>
      <p class="desc">1橋北市、2線捷運、3道任意門直抵幸福</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section2 {
  position: relative;
  width: 100%;
  height:auto;
  background-size: 100% auto;
 // background-image: url("./s2/map.jpg");
  &::before{
    content: "";
    position: absolute;
    left: 0;
    width: 100%;z-index:1;
    height:28vw;
    top:0;
   // background: linear-gradient(to bottom, rgba(6,2,3,1) 0%,rgb(0, 51, 109) 40%,rgba(136,171,203,1) 90%,rgba(162,193,221,0) 100%);
  }
  .bg{width: 100%;// opacity: 0;
  vertical-align: bottom;
    position: relative;z-index:2;}
  /*
  background-size: 100%;
  background-position: bottom;
  background-color: #eb5c20;
  background-image: url("~@/projects/lyn/s2/map.jpg");
  z-index: 1;
  */
  .txt{
  @include img_c_pc(1000, 0);
    color: #fff;
    line-height: 1.45;z-index:3;
    font-weight: 300;
    font-size:size(39);
    text-shadow:0 0 .4em rgb(41, 114, 163,0.5),0 0 .1em rgb(41, 114, 163,1);
    text-align: center;
  }
  .title {
    font-size:3.75em;
    font-weight: 800;margin: 0 .45em  0 0;
    b{font-size:1.24em;display: inline-block;margin: 0 0 0 .3em;position: relative;top: 0.07em;
    font-weight: 900;letter-spacing: -0.04em;
    }
  }
  .desc{border: 1px solid currentColor;display: inline-block;padding: 0.23em .55em;}
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