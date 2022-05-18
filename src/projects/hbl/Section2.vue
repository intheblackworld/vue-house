<template>
  <div class="section2" id="scene">
    <img src="./s2/map.png" class="bg" alt="">
    <div class="txt">
      <h3 class="title"><b>3</b>分鐘進北市<br v-if="isMobile"> <b>5</b>分鐘中和站</h3>
      <p class="desc">捷運黃金雙軸線 幸福成家第一站</p>
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
  background-image: url("./s2/map.jpg");
  &::after,
  &::before{
    content: "";
    position: absolute;
    left: 0;
    width: 100%;z-index:1;
    height:43vw;
  }
  &::before{
    top:calc(-43vw * .3);
background: linear-gradient(to bottom, rgba(62,101,156,0) 0%,rgb(81, 119, 172) 30%,rgba(62,101,156,0) 100%);
  }
  &::after{
    bottom:calc(-43vw * .7);
background: linear-gradient(to bottom, rgba(211,95,159,0) 0%,rgba(211,95,159,1) 30%,rgba(211,95,159,0) 100%);
  }
  .bg{width: 100%;
    position: relative;z-index:2;}
  /*
  background-size: 100%;
  background-position: bottom;
  background-color: #eb5c20;
  background-image: url("~@/projects/hbl/s2/map.jpg");
  z-index: 1;
  */
  .txt{
  @include img_c_pc(1000, 60);
    color: #fff;
    line-height: 1.4;z-index:3;
    font-size:size(50);
    text-shadow:0 0 .4em rgb(41, 114, 163,0.5),0 0 .1em rgb(41, 114, 163,1);
  }
  .title {
    font-size:1.5em;
    font-weight: 800;margin: 0 .3em  0 0;
    b{font-size:1.5em;display: inline-block;margin: 0 0 0 .3em;position: relative;top: 0.07em;
    font-weight: 900;
    }
  }
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